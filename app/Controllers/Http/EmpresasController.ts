import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Empresa from 'App/Models/Empresa'
import generateSlug from 'App/Strategies/GenerateSlugsStrategy'
import CreateEmpresaValidator from 'App/Validators/CreateEmpresaValidator'
import SortEmpresaValidator from 'App/Validators/SortEmpresaValidator'
import UpdateEmpresaValidator from 'App/Validators/UpdateEmpresaValidator'

export default class EmpresasController {
  public async index({ request, response, auth }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const nombre = request.input('nombre') ?? null
    const descripcion = request.input('descripcion') ?? null
    const creacion = request.input('creacion') ?? null
    const validatedData = await request.validate(SortEmpresaValidator)

    const sortBy = validatedData.sort_by || 'id'
    const order = validatedData.order || 'asc'

    const empresas = await Empresa.query()
      .withScopes((scopes) => {
        if (auth.user) scopes.visibleTo(auth.user)
      })
      .if(nombre, (query) => query.where('nombre', 'ILIKE', `%${nombre}%`))
      .if(descripcion, (query) => query.where('descripcion', 'ILIKE', `%${descripcion}%`))
      .if(creacion, (query) => query.where('creacion', 'ILIKE', creacion))
      .preload('comunidad', (query) => query.preload('pais'))
      .preload('ofertas')
      .preload('user')
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: empresas })
  }

  public async store({ request, response }: HttpContextContract) {
    const imagen = request.file('imagen') || null
    const validatedData = await request.validate(CreateEmpresaValidator)
    const empresa = await Empresa.create(validatedData)

    empresa.slug = await generateSlug(empresa.nombre)

    if (imagen) empresa.imagen = Attachment.fromFile(imagen)

    return response.created({ data: empresa })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const empresa = await Empresa.findOrFail(id)

    const imagen = request.file('imagen') || null
    const borraImagen = request.input('borra_imagen') || null

    const validatedData = await request.validate(UpdateEmpresaValidator)
    empresa.merge(validatedData)

    if (imagen) empresa.imagen = Attachment.fromFile(imagen)
    else {
      if (borraImagen) empresa.imagen = null
    }

    await empresa.save()

    return response.created({ data: empresa })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const empresa = await Empresa.query(id)
      .where('id', id)
      .preload('user')
      .preload('comunidad', (query) => query.preload('pais'))
      .firstOrFail()

    return response.ok({ data: empresa })
  }

  public async findBySlug({ params: { slug }, response }: HttpContextContract) {
    const empresa = await Empresa.query()
      .where('slug', slug)
      .preload('user')
      .preload('comunidad', (query) => query.preload('pais'))
      .firstOrFail()

    return response.ok({ data: empresa })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const empresa = await Empresa.findOrFail(id)

    await empresa.delete()

    return response.noContent()
  }
}
