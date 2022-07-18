import { column } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'

export default class Pais extends AppBaseModel {
  public static table = 'paises'
  @column()
  public nombre: string

  @column()
  public bandera: string
}
