import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Idioma from 'App/Models/Idioma'
import CreateIdiomaValidator from 'App/Validators/CreateIdiomaValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateIdiomaValidator from 'App/Validators/UpdateIdiomaValidator'

export default class IdiomasController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const nombre = request.input('nombre') ?? null
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'nombre'
    const order = validatedData.order || 'asc'

    const idiomas = await Idioma.query()
      .if(nombre, (query) => query.where('nombre', 'ILIKE', `%${nombre}%`))
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: idiomas })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const idioma = await Idioma.findOrFail(id)

    return response.ok({ data: idioma })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateIdiomaValidator)

    const idioma = await Idioma.create(validatedData)

    return response.created({ data: idioma })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const idioma = await Idioma.findOrFail(id)

    const validatedData = await request.validate(UpdateIdiomaValidator)
    idioma.merge(validatedData)
    await idioma.save()

    return response.created({ data: idioma })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const idioma = await Idioma.findOrFail(id)

    await idioma.delete()

    return response.noContent()
  }
}
