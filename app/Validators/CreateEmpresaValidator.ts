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
    comunidadId: schema.number([rules.exists({ table: 'comunidades', column: 'id' })]),
    paisId: schema.number([rules.exists({ table: 'paises', column: 'id' })]),
    url: schema.string.optional({}),
    enlaceTwitter: schema.string.optional({}),
    enlaceLinkedin: schema.string.optional({}),
    enlaceBehance: schema.string.optional({}),
    numEmpleados: schema.string.optional({}),
    creacion: schema.string.optional(),
    valores: schema.array.optional().members(schema.number()),
    userId: schema.number([
      rules.exists({
        table: 'users',
        column: 'id',
      }),
    ]),
  })

  public messages: CustomMessages = {}
}
