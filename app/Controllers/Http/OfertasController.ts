import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Oferta from 'App/Models/Oferta'
import generateSlug from 'App/Strategies/GenerateSlugsStrategy'
import CreateOfertaValidator from 'App/Validators/CreateOfertaValidator'
import SortOfertaValidator from 'App/Validators/SortOfertaValidator'
import UpdateOfertaValidator from 'App/Validators/UpdateOfertaValidator'

export default class OfertasController {
  public async index({ request, response, auth }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const nombre = request.input('nombre') ?? null
    const region = request.input('region') ?? null
    const experiencia = request.input('experiencia') ?? null
    const ubicacion = request.input('ubicacion') ?? null
    const publicada = request.input('publicada') ?? null
    const jornada = request.input('jornada') ?? null
    const estado = request.input('estado') ?? null
    const vacantes = request.input('vacantes') ?? null
    const salarioMin = request.input('salario_min') ?? null
    const salarioMax = request.input('salario_max') ?? null
    const presencialidad = request.input('presencialidad') ?? null
    const tecnologias = request.input('tecnologias') ?? null
    const beneficios = request.input('beneficios') ?? null
    const destacado = request.input('destacado') ?? null
    const validatedData = await request.validate(SortOfertaValidator)

    const sortBy = validatedData.sort_by || 'created_at'
    const order = validatedData.order || 'asc'

    const ofertas = await Oferta.query()
      .withScopes((scopes) => {
        if (auth.user) scopes.visibleTo(auth.user)
      })
      .if(nombre, (query) => query.where('nombre', 'ILIKE', `%${nombre}%`))
      .if(region, (query) => query.where('region', region))
      .if(experiencia, (query) => query.where('experiencia', experiencia))
      .if(ubicacion, (query) => query.where('ubicacion', 'ILIKE', `%${ubicacion}%`))
      .if(publicada, (query) => query.where('publicada', publicada))
      .if(jornada, (query) => query.where('jornada', jornada))
      .if(estado, (query) => query.where('estado', estado))
      .if(vacantes, (query) => query.where('vacantes', '>=', vacantes))
      .if(salarioMin, (query) => query.where('salario_min', '>=', salarioMin))
      .if(salarioMax, (query) => query.where('salario_max', '<=', salarioMax))
      .if(presencialidad, (query) => query.where('presencialidad', presencialidad))
      .if(destacado, (query) => {
        if (destacado) query.where('destacado', true)
      })
      .if(tecnologias, (query) =>
        query.whereHas('tecnologias', (query) => query.whereIn('id', tecnologias))
      )
      .if(beneficios, (query) =>
        query.whereHas('beneficios', (query) => query.whereIn('id', beneficios))
      )
      .preload('comunidad')
      .preload('pais')
      .preload('tecnologias')
      .preload('beneficios')
      .preload('categoria')
      .preload('idiomas')
      .preload('empresa')
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: ofertas })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const oferta = await Oferta.query(id)
      .where('id', id)
      .preload('comunidad')
      .preload('pais')
      .preload('tecnologias')
      .preload('beneficios')
      .preload('categoria')
      .preload('idiomas')
      .preload('empresa')
      .firstOrFail()

    return response.ok({ data: oferta })
  }

  public async findBySlug({ params: { slug }, response }: HttpContextContract) {
    const oferta = await Oferta.query()
      .where('slug', slug)
      .preload('comunidad')
      .preload('pais')
      .preload('tecnologias')
      .preload('beneficios')
      .preload('categoria')
      .preload('idiomas')
      .preload('empresa')
      .firstOrFail()

    return response.ok({ data: oferta })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const adjunto = request.file('adjunto')
    const borraImagen = request.input('borra_imagen')
    const oferta = await Oferta.findOrFail(id)

    const validatedData = await request.validate(UpdateOfertaValidator)
    oferta.merge(validatedData)

    if (adjunto) oferta.adjunto = Attachment.fromFile(adjunto)
    else {
      if (borraImagen) oferta.adjunto = null
    }
    await oferta.save()

    return response.created({ data: oferta })
  }

  public async store({ request, response }: HttpContextContract) {
    const adjunto = request.file('adjunto')
    const validatedData = await request.validate(CreateOfertaValidator)
    const oferta = await Oferta.create(validatedData)

    if (validatedData.tecnologias) {
      await oferta.related('tecnologias').sync(validatedData.tecnologias)
    }

    if (validatedData.beneficios) {
      await oferta.related('beneficios').sync(validatedData.beneficios)
    }

    if (validatedData.idiomas) {
      await oferta.related('idiomas').sync(validatedData.idiomas)
    }

    if (adjunto) oferta.adjunto = Attachment.fromFile(adjunto)

    oferta.slug = await generateSlug(oferta.nombre)

    await oferta.save()

    return response.created({ data: oferta })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const oferta = await Oferta.findOrFail(id)

    await oferta.delete()

    return response.noContent()
  }
}
