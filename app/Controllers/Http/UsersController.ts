import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import SortValidator from 'App/Validators/SortValidator'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'

export default class UsersController {
  public async index({ request, response, auth }: HttpContextContract) {
    const page = request.input('page', 1) ?? 1
    const limit = request.input('limit', 10) ?? 10
    const validatedData = await request.validate(SortValidator)

    const sortBy = validatedData.sort_by || 'id'
    const order = validatedData.order || 'asc'

    const users = await User.query()
      .withScopes((scopes) => scopes.visibleTo(auth.user))
      .preload('empresas', (query) => query.preload('ofertas'))
      .orderBy(sortBy, order)
      .paginate(page, limit)

    response.ok({ data: users })
  }

  public async show({ params: { id }, auth, response }: HttpContextContract) {
    const user = await User.query()
      .withScopes((scope) => scope.visibleTo(auth.user))
      .where('id', id)
      .firstOrFail()

    return response.ok({ data: user })
  }

  public async store({ request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateUserValidator)

    const user = await User.create(validatedData)

    return response.created({ data: user })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const user = await User.findOrFail(id)

    const avatar = request.file('avatar') || null
    const borraAvatar = request.input('borra_avatar') || null

    const validatedData = await request.validate(UpdateUserValidator)
    user.merge(validatedData)

    if (avatar) user.avatar = Attachment.fromFile(avatar)
    else {
      if (borraAvatar) user.avatar = null
    }
    await user.save()

    return response.created({ data: user })
  }

  public async destroy({ params: { id }, response }: HttpContextContract) {
    const user = await User.findOrFail(id)

    await user.delete()

    return response.noContent()
  }

  public async userMailExists({ response, request }: HttpContextContract) {
    const email = request.input('email') ?? null

    if (!email) return response.badRequest({ error: 'Se debe proporcionar un parámetro "email"' })

    await User.findByOrFail('email', email)

    return response.ok({})
  }

  public async userNameExists({ response, request }: HttpContextContract) {
    const username = request.input('username') ?? null

    if (!username)
      return response.badRequest({ error: 'Se debe proporcionar un parámetro "username"' })

    await User.findByOrFail('username', username)

    return response.ok({})
  }
}
