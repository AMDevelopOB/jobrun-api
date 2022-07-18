import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categoria from 'App/Models/Categoria'
import CreateCategoriaValidator from 'App/Validators/CreateCategoriaValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateCategoriaValidator from 'App/Validators/UpdateCategoriaValidator'

export default class CategoriasController {
  public async index({ response, request }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const nombre = request.input('nombre') ?? null
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'nombre'
    const order = validatedData.order || 'asc'

    const categorias = await Categoria.query()
      .if(nombre, (query) => query.where('nombre', 'ILIKE', `%${nombre}%`))
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: categorias })
  }

  public async show({ params: { id }, response }: HttpContextContract) {
    const categoria = await Categoria.findOrFail(id)

    return response.ok({ data: categoria })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateCategoriaValidator)

    const categoria = await Categoria.create(validatedData)

    return response.created({ data: categoria })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const categoria = await Categoria.findOrFail(id)

    const validatedData = await request.validate(UpdateCategoriaValidator)
    categoria.merge(validatedData)
    await categoria.save()

    return response.created({ data: categoria })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const categoria = await Categoria.findOrFail(id)

    await categoria.delete()

    return response.noContent()
  }
}
