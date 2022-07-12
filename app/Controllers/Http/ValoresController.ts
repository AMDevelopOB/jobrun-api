import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Valor from 'App/Models/Valor'
import CreateValorValidator from 'App/Validators/CreateValorValidator'
import SortValidator from 'App/Validators/SortValidator'

export default class ValoresController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const nombre = request.input('nombre') ?? null
    const descripcion = request.input('descripcion') ?? null
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'nombre'
    const order = validatedData.order || 'asc'

    const valores = await Valor.query()
      .if(nombre, (query) => query.where('nombre', 'ILIKE', `%${nombre}%`))
      .if(descripcion, (query) => query.where('descripcion', 'ILIKE', `%${descripcion}%`))
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: valores })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const valor = await Valor.findOrFail(id)

    return response.ok({ data: valor })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateValorValidator)

    const valor = await Valor.create(validatedData)

    return response.created({ data: valor })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const valor = await Valor.findOrFail(id)

    const validatedData = await request.validate(CreateValorValidator)
    valor.merge(validatedData)
    await valor.save()

    return response.created({ data: valor })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const valor = await Valor.findOrFail(id)

    await valor.delete()

    return response.noContent()
  }
}
