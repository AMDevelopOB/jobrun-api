import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Beneficio from 'App/Models/Beneficio'
import CreateBeneficioValidator from 'App/Validators/CreateBeneficioValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateBeneficioValidator from 'App/Validators/UpdateBeneficioValidator'

export default class BeneficioesController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const nombre = request.input('nombre') ?? null
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'nombre'
    const order = validatedData.order || 'asc'

    const beneficios = await Beneficio.query()
      .if(nombre, (query) => query.where('nombre', 'ILIKE', `%${nombre}%`))
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: beneficios })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const beneficio = await Beneficio.findOrFail(id)

    return response.ok({ data: beneficio })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateBeneficioValidator)

    const beneficio = await Beneficio.create(validatedData)

    return response.created({ data: beneficio })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const beneficio = await Beneficio.findOrFail(id)

    const validatedData = await request.validate(UpdateBeneficioValidator)
    beneficio.merge(validatedData)
    await beneficio.save()

    return response.created({ data: Beneficio })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const beneficio = await Beneficio.findOrFail(id)

    await beneficio.delete()

    return response.noContent()
  }
}
