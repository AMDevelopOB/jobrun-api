import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SortValidator from 'App/Validators/SortValidator'
import Comunidades from 'App/Models/Comunidad'
import CreateComunidadeValidator from 'App/Validators/CreateComunidadeValidator'
import UpdateComunidadeValidator from 'App/Validators/UpdateComunidadeValidator'

export default class ComunidadesController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const nombre = request.input('nombre') ?? null
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'nombre'
    const order = validatedData.order || 'asc'

    const comunidades = await Comunidades.query()
      .if(nombre, (query) => query.where('nombre', 'ILIKE', `%${nombre}%`))
      .preload('pais')
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: comunidades })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const comunidad = await Comunidades.findOrFail(id)

    await comunidad.preload('pais')

    return response.ok({ data: comunidad })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateComunidadeValidator)

    const comunidad = await Comunidades.create(validatedData)

    return response.created({ data: comunidad })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const comunidad = await Comunidades.findOrFail(id)

    const validatedData = await request.validate(UpdateComunidadeValidator)
    comunidad.merge(validatedData)
    await comunidad.save()

    return response.created({ data: Comunidades })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const comunidad = await Comunidades.findOrFail(id)

    await comunidad.delete()

    return response.noContent()
  }
}
