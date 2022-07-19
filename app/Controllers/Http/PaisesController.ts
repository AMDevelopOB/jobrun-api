import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Paises from 'App/Models/Pais'
import CreatePaiseValidator from 'App/Validators/CreatePaiseValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdatePaiseValidator from 'App/Validators/UpdatePaiseValidator'

export default class PaisesController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const nombre = request.input('nombre') ?? null
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'nombre'
    const order = validatedData.order || 'asc'

    const paises = await Paises.query()
      .if(nombre, (query) => query.where('nombre', 'ILIKE', `%${nombre}%`))
      .preload('comunidades')
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: paises })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const pais = await Paises.findOrFail(id)

    await pais.preload('comunidades')

    return response.ok({ data: pais })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreatePaiseValidator)

    const pais = await Paises.create(validatedData)

    return response.created({ data: pais })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const pais = await Paises.findOrFail(id)

    const validatedData = await request.validate(UpdatePaiseValidator)
    pais.merge(validatedData)
    await pais.save()

    return response.created({ data: Paises })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const pais = await Paises.findOrFail(id)

    await pais.delete()

    return response.noContent()
  }
}
