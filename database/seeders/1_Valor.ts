import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Valor from 'App/Models/Valor'

export default class extends BaseSeeder {
  public async run() {
    await Valor.updateOrCreateMany(
      ['id', 'nombre'],
      [
        {
          nombre: 'Cercanía',
        },
        {
          nombre: 'Seguro médico',
        },
        {
          nombre: 'Compañerismo y buen rollo',
        },
        {
          nombre: 'Libertad horaria',
        },
        {
          nombre: 'Objetivos y metas',
        },
        {
          nombre: 'Profesionalidad',
        },
      ]
    )
  }
}
