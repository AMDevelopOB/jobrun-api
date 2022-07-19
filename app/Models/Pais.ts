import { column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Comunidad from './Comunidad'

export default class Pais extends AppBaseModel {
  public static table = 'paises'
  @column()
  public nombre: string

  @column()
  public bandera: string

  @hasMany(() => Comunidad, {
    foreignKey: 'id',
  })
  public comunidades: HasMany<typeof Comunidad>
}
