import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Idioma from 'App/Models/Idioma'

export default class extends BaseSeeder {
  public async run() {
    await Idioma.updateOrCreateMany(
      ['nombre'],
      [
      {
        nombre: 'Inglés',
      },
      {
        nombre: 'Español',
      },
      {
        nombre: 'Francés',
      },
      {
        nombre: 'Valenciano',
      },
    ])
  }
}
