import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'empresas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nombre').notNullable().unique()
      table.text('descripcion').notNullable()
      table.integer('comunidad_id').unsigned().references('comunidades.id').index()
      table.integer('pais_id').unsigned().references('paises.id').index()
      table.text('enlace_web')
      table.text('enlace_twitter')
      table.text('enlace_linkedin')
      table.text('enlace_behance')
      table.string('num_empleados')
      table.string('creacion')
      table.integer('user_id').unsigned().references('users.id').notNullable()
      table.string('url')
      table.string('slug').nullable()
      table.text('imagen').nullable()

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
