import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import {
  BelongsTo,
  belongsTo,
  column,
  hasMany,
  HasMany,
  hasOne,
  HasOne,
  ManyToMany,
  manyToMany,
  scope,
} from '@ioc:Adonis/Lucid/Orm'
import { isAdmin } from 'App/Services/AuthService'
import AppBaseModel from './AppBaseModel'
import Comunidad from './Comunidad'
import Oferta from './Oferta'
import User from './User'
import Valor from './Valor'

export default class Empresa extends AppBaseModel {
  @column()
  public nombre: string

  @column()
  public descripcion: string

  @column()
  public url: string

  @attachment({ folder: 'empresa_image', preComputeUrl: true })
  public imagen: AttachmentContract | null

  @column()
  public enlaceTwitter: string

  @column()
  public enlaceLinkedin: string

  @column()
  public enlaceBehance: string

  @column()
  public numEmpleados: string

  @column()
  public creacion: string

  @column()
  public slug: string

  @column()
  public comunidadId: number

  @hasOne(() => Comunidad, {
    localKey: 'comunidadId',
    foreignKey: 'id',
  })
  public comunidad: HasOne<typeof Comunidad>

  @manyToMany(() => Valor, {
    pivotTimestamps: true,
    pivotTable: 'valor_empresa',
  })
  public valores: ManyToMany<typeof Valor>

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasMany(() => Oferta)
  public ofertas: HasMany<typeof Oferta>

  public static visibleTo = scope((query, user?: User) => {
    if (isAdmin(user)) {
      return
    } else {
      query.where('user_id', '=', user!.id)
    }
  })
}
