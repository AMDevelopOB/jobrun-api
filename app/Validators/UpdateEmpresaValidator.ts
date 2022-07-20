import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateEmpresaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string.optional({}, [
      rules.unique({
        table: 'empresas',
        column: 'nombre',
      }),
    ]),
    descripcion: schema.string.optional({}),
    comunidadId: schema.number.optional([rules.exists({ table: 'comunidades', column: 'id' })]),
    paisId: schema.number.optional([rules.exists({ table: 'paises', column: 'id' })]),
    enlaceTwitter: schema.string.optional({}),
    enlaceLinkedin: schema.string.optional({}),
    enlaceBehance: schema.string.optional({}),
    numEmpleados: schema.string.optional({}),
    valores: schema.array.optional().members(schema.number()),
    creacion: schema.string.optional(),
  })

  public messages: CustomMessages = {}
}
