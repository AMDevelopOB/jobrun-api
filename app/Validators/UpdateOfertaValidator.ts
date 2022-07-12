import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { TipoExperiencia } from 'App/Models/Contracts/TipoExperiencia'
import { TipoPresencialidad } from 'App/Models/Contracts/TipoPresencialidad'
import { TipoJornada } from 'App/Models/Contracts/TipoJornada'
import { TipoEstado } from 'App/Models/Contracts/TipoEstado'
import { TipoRegion } from 'App/Models/Contracts/TipoRegion'

export default class UpdateOfertaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nombre: schema.string.optional({}),
    descripcion: schema.string.optional({}),
    ubicacion: schema.string.optional({}),
    experiencia: schema.enum.optional(Object.values(TipoExperiencia)),
    presencialidad: schema.enum.optional(Object.values(TipoPresencialidad)),
    jornada: schema.enum.optional(Object.values(TipoJornada)),
    publicada: schema.boolean.optional(),
    empresaId: schema.number([rules.exists({ table: 'empresas', column: 'id' })]),
    categoriaId: schema.number([rules.exists({ table: 'categorias', column: 'id' })]),
    salarioMin: schema.number.optional(),
    salarioMax: schema.number.optional(),
    vacantes: schema.number.optional(),
    requisitos: schema.string.optional(),
    estado: schema.enum.optional(Object.values(TipoEstado)),
    region: schema.enum.optional(Object.values(TipoRegion)),
    destacado: schema.boolean.optional(),
    tecnologias: schema.array.optional().members(schema.number()),
    beneficios: schema.array.optional().members(schema.number()),
    idiomas: schema.array.optional().members(schema.number()),
  })

  public messages: CustomMessages = {}
}
