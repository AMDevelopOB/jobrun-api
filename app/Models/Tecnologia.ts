import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Oferta from './Oferta'

export default class Tecnologia extends AppBaseModel {
  public static table = 'tecnologias'

  @column()
  public nombre: string

  @manyToMany(() => Oferta, {
    pivotTimestamps: true,
    pivotTable: 'tecnologia_oferta',
  })
  public ofertas: ManyToMany<typeof Oferta>
}
