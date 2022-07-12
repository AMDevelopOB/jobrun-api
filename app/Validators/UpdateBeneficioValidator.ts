import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateBeneficioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string.optional({}, [
      rules.unique({
        table: 'beneficio',
        column: 'nombre',
      }),
    ]),
    descripcion: schema.string.optional({}),
  })

  public messages: CustomMessages = {}
}
