import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateComunidadeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string({}, [
      rules.unique({
        table: 'comunidades',
        column: 'nombre',
      }),
    ]),
    paisId: schema.number([rules.exists({ table: 'paises', column: 'id' })]),
  })

  public messages: CustomMessages = {}
}
