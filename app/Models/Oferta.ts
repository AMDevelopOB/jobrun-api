import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import {
  belongsTo,
  BelongsTo,
  column,
  hasOne,
  HasOne,
  ManyToMany,
  manyToMany,
  scope,
} from '@ioc:Adonis/Lucid/Orm'
import { isAdmin } from 'App/Services/AuthService'
import AppBaseModel from './AppBaseModel'
import Beneficio from './Beneficio'
import { TipoEstado } from './Contracts/TipoEstado'
import { TipoExperiencia } from './Contracts/TipoExperiencia'
import { TipoJornada } from './Contracts/TipoJornada'
import { TipoPresencialidad } from './Contracts/TipoPresencialidad'
import { TipoRegion } from './Contracts/TipoRegion'
import Empresa from './Empresa'
import Tecnologia from './Tecnologia'
import Idioma from './Idioma'
import User from './User'
import Categoria from './Categoria'
import Comunidad from './Comunidad'
import Pais from './Pais'

export default class Oferta extends AppBaseModel {
  @column()
  public nombre: string

  @column()
  public descripcion: string

  @column()
  public region: TipoRegion

  @column()
  public experiencia: TipoExperiencia

  @column()
  public presencialidad: TipoPresencialidad

  @column()
  public jornada: TipoJornada

  @column()
  public estado: TipoEstado

  @column()
  public publicada: boolean

  @column()
  public salarioMin: number

  @column()
  public salarioMax: number

  @column()
  public vacantes: number

  @column()
  public requisitos: string

  @column()
  public destacado: boolean

  @attachment({ folder: 'oferta_adjunto', preComputeUrl: true })
  public adjunto: AttachmentContract | null

  @column()
  public slug: string

  @column()
  public paisId: number

  @hasOne(() => Pais, {
    localKey: 'paisId',
    foreignKey: 'id',
  })
  public pais: HasOne<typeof Pais>

  @column()
  public comunidadId: number

  @hasOne(() => Comunidad, {
    localKey: 'comunidadId',
    foreignKey: 'id',
  })
  public comunidad: HasOne<typeof Comunidad>

  @column()
  public categoriaId: number

  @hasOne(() => Categoria, {
    localKey: 'categoriaId',
    foreignKey: 'id',
  })
  public categoria: HasOne<typeof Categoria>

  @column()
  public empresaId: number

  @belongsTo(() => Empresa)
  public empresa: BelongsTo<typeof Empresa>

  @manyToMany(() => Tecnologia, {
    pivotTimestamps: true,
    pivotTable: 'tecnologia_oferta',
  })
  public tecnologias: ManyToMany<typeof Tecnologia>

  @manyToMany(() => Beneficio, {
    pivotTimestamps: true,
    pivotTable: 'beneficio_oferta',
  })
  public beneficios: ManyToMany<typeof Beneficio>

  @manyToMany(() => Idioma, {
    pivotTimestamps: true,
    pivotTable: 'idioma_oferta',
  })
  public idiomas: ManyToMany<typeof Idioma>

  public static visibleTo = scope(async (query, user?: User) => {
    if (isAdmin(user)) {
      return
    } else {
      const empresas = await user?.toObject().empresas.map((empresa) => empresa.id)
      query.whereIn('empresa_id', empresas)
    }
  })
}
