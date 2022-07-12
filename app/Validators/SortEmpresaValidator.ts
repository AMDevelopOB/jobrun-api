import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SortEmpresaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    sort_by: schema.enum.optional([
      'id',
      'nombre',
      'descripcion',
      'creacion',
      'user_id',
      'num_empleados',
      'created_at',
      'updated_at',
    ]),
    order: schema.enum.optional(['asc', 'desc'] as const),
  })
  public messages: CustomMessages = {}
}
