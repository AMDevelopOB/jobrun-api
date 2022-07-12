import { column } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'

export default class Categoria extends AppBaseModel {
  @column()
  public nombre: string
}
