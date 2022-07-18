import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { TipoEstado } from 'App/Models/Contracts/TipoEstado'
import { TipoExperiencia } from 'App/Models/Contracts/TipoExperiencia'
import { TipoJornada } from 'App/Models/Contracts/TipoJornada'
import { TipoPresencialidad } from 'App/Models/Contracts/TipoPresencialidad'
import { TipoRegion } from 'App/Models/Contracts/TipoRegion'

export default class extends BaseSchema {
  protected tableName = 'ofertas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nombre').notNullable()
      table.text('descripcion').notNullable()
      table.string('ubicacion')
      table.integer('empresa_id').unsigned().references('empresas.id').index().onDelete('CASCADE')
      table.integer('categoria_id').unsigned().references('categorias.id').index()
      table
        .enu('experiencia', Object.values(TipoExperiencia))
        .defaultTo(TipoExperiencia.JUNIOR)
        .notNullable()

      table
        .enu('presencialidad', Object.values(TipoPresencialidad))
        .defaultTo(TipoPresencialidad.PRESENCIAL)
        .notNullable()
      table.enu('region', Object.values(TipoRegion)).notNullable()
      table.enu('estado', Object.values(TipoEstado)).defaultTo(TipoEstado.ABIERTA).notNullable()
      table.enu('jornada', Object.values(TipoJornada)).defaultTo(TipoJornada.COMPLETA).notNullable()
      table.boolean('publicada').defaultTo(true).notNullable()
      table.integer('salario_min')
      table.integer('salario_max')
      table.integer('vacantes')
      table.text('requisitos')
      table.text('adjunto').nullable()
      table.string('slug').nullable()
      table.boolean('destacado').nullable().defaultTo(false)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
