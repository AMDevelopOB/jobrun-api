import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { TipoRol } from 'App/Models/Contracts/TipoRol'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.enu('rol', Object.values(TipoRol)).defaultTo(TipoRol.USER).notNullable()
      table.string('username')
      table.string('nombre_completo')
      table.string('telefono')
      table.text('avatar').nullable()
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
