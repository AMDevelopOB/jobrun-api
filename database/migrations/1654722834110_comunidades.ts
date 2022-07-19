import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Comunidades extends BaseSchema {
  protected tableName = 'comunidades'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pais_id').unsigned().references('paises.id').index()
      table.string('nombre').notNullable()

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
