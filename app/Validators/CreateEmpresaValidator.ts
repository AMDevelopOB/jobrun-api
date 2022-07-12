import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateEmpresaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string({}, [
      rules.unique({
        table: 'empresas',
        column: 'nombre',
      }),
    ]),
    descripcion: schema.string({}),
    ubicacion: schema.string({}),
    url: schema.string({}),
    enlaceTwitter: schema.string.optional({}),
    enlaceLinkedin: schema.string.optional({}),
    enlaceBehance: schema.string.optional({}),
    numEmpleados: schema.string.optional({}),
    creacion: schema.string.optional(),
    userId: schema.number([
      rules.exists({
        table: 'users',
        column: 'id',
      }),
    ]),
  })

  public messages: CustomMessages = {}
}
