import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Empresa from './Empresa'

export default class Valor extends AppBaseModel {
  public static table = 'valores'

  @column()
  public nombre: string

  @manyToMany(() => Empresa, {
    pivotTimestamps: true,
    pivotTable: 'valor_empresa',
  })
  public ofertas: ManyToMany<typeof Empresa>
}
