import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Beneficio from 'App/Models/Beneficio'

export default class extends BaseSeeder {
  public async run() {
    await Beneficio.createMany([
      {
        nombre: 'Seguro médico',
        descripcion:
          'Con nuestra vacante va incluído un seguro médico con especial atención por parte del sector fisioterapeuta.',
      },
      {
        nombre: 'Trabaja desde donde quieras',
        descripcion:
          'Al ser remoto puedes trabajar desde donde desees siempre que dispongas de un dispositivo con el que conectarte y trabajar.',
      },
      {
        nombre: 'Libertad horaria',
        descripcion:
          'Podrás trabajar a cualquier hora del día en las franjas que desees siempre que cumplas el número de horas y entregues las tareas a tiempo.',
      },
      {
        nombre: 'Dietas incluídas',
        descripcion: 'De lunes a viernes las dietas estarán incluídas dentro del salario.',
      },
      {
        nombre: 'Acceso a Gimnasio',
        descripcion:
          'Que el trabajo en remoto no te sirva de excusa. Nuestra empresa quiere que sus empleados estén contentos y sanos y por ello les facilitamos un bono de acceso a gimnasios asociados.',
      },
      {
        nombre: 'Pensión de Alojamiento',
        descripcion:
          'Si necesitas trasladarte de domicilio te ayudaremos con un porcentaje para hacerte la vida más fácil y que te puedas centrar en tus tareas.',
      },
    ])
  }
}
