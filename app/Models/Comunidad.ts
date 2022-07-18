import { column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Paises from './Pais'

export default class Comunidad extends AppBaseModel {
  public static table = 'comunidades'

  @column()
  public nombre: string

  @column()
  public paisId: number

  @hasOne(() => Paises, {
    localKey: 'paisId',
    foreignKey: 'id',
  })
  public pais: HasOne<typeof Paises>
}
