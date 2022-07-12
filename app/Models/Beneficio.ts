import { column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Oferta from './Oferta'

export default class Beneficio extends AppBaseModel {
  @column()
  public nombre: string

  @column()
  public descripcion: string

  @manyToMany(() => Oferta, {
    pivotTimestamps: true,
    pivotTable: 'beneficio_oferta',
  })
  public ofertas: ManyToMany<typeof Oferta>
}
