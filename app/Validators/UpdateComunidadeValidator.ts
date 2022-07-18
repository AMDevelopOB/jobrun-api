import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateComunidadeValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string.optional({}, [
      rules.unique({
        table: 'comunidades',
        column: 'nombre',
      }),
    ]),
    paisId: schema.number.optional([rules.exists({ table: 'paises', column: 'id' })]),
  })

  public messages: CustomMessages = {}
}
