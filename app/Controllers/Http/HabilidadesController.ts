import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tecnologia from 'App/Models/Tecnologia'
import CreateTecnologiaValidator from 'App/Validators/CreateTecnologiaValidator'
import SortValidator from 'App/Validators/SortValidator'

export default class TecnologiasController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const nombre = request.input('nombre') ?? null
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'nombre'
    const order = validatedData.order || 'asc'

    const tecnologias = await Tecnologia.query()
      .if(nombre, (query) => query.where('nombre', 'ILIKE', `%${nombre}%`))
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: tecnologias })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const tecnologia = await Tecnologia.findOrFail(id)

    return response.ok({ data: tecnologia })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateTecnologiaValidator)

    const tecnologia = await Tecnologia.create(validatedData)

    return response.created({ data: tecnologia })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const tecnologia = await Tecnologia.findOrFail(id)

    const validatedData = await request.validate(CreateTecnologiaValidator)
    tecnologia.merge(validatedData)
    await tecnologia.save()

    return response.created({ data: tecnologia })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const tecnologia = await Tecnologia.findOrFail(id)

    await tecnologia.delete()

    return response.noContent()
  }
}
