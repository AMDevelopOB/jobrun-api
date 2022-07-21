import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tecnologia from 'App/Models/Tecnologia'

export default class extends BaseSeeder {
  public async run() {
    await Tecnologia.updateOrCreateMany(
      ['nombre'],
      [
        {
          nombre: 'JavaScript',
        },
        {
          nombre: 'React JS',
        },
        {
          nombre: 'Vue JS',
        },
        {
          nombre: 'TypeScript',
        },
        {
          nombre: 'Angular',
        },
        {
          nombre: 'Node JS',
        },
        {
          nombre: 'Adonis JS',
        },
        {
          nombre: 'Java',
        },
        {
          nombre: '.NET',
        },
        {
          nombre: 'C#',
        },
        {
          nombre: 'Spring',
        },
        {
          nombre: 'PostgreSQL',
        },
      ]
    )
  }
}
