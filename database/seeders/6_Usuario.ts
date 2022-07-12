import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { TipoRol } from 'App/Models/Contracts/TipoRol'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    User.createMany([
      {
        email: 'amdevelop@open-bootcamp.com',
        password: 'admin12345',
        username: 'AMDevelop',
        nombreCompleto: 'Alejandro Martinez',
        telefono: '645565464',
        rol: TipoRol.ADMIN,
      },
      {
        email: 'alex@open-bootcamp.com',
        password: 'admin12345',
        username: 'El Master',
        nombreCompleto: 'Álex Torrentí',
        telefono: '666333111',
        rol: TipoRol.ADMIN,
      },
      {
        email: 'joaquin@burguerking.com',
        password: 'bk12345',
        username: 'JoaquinSorolla',
        nombreCompleto: 'Joaquin Sorolla',
        telefono: '616616616',
        rol: TipoRol.USER,
      },
      {
        email: 'marialucia@servinform.com',
        password: 'servinform3321',
        username: 'MariLuci',
        nombreCompleto: 'Maria Lucia Gimenez',
        telefono: '616616619',
        rol: TipoRol.USER,
      },
      {
        email: 'contacto@open-bootcamp.com',
        password: 'ob!33',
        username: 'OpenBootcamp',
        nombreCompleto: 'Victor Mollá',
        telefono: '666111222',
        rol: TipoRol.USER,
      },
      {
        email: 'hola@proxya.com',
        password: 'proxya1122',
        username: 'ContactoProxya',
        nombreCompleto: 'Enrique Hernandez',
        telefono: '654321321',
        rol: TipoRol.USER,
      },
      {
        email: 'mariluz@newtalent.com',
        password: 'ml12345',
        username: 'MariLuzNT',
        nombreCompleto: 'Maria Luz Rodríguez',
        telefono: '678678678',
        rol: TipoRol.USER,
      },
    ])
  }
}
