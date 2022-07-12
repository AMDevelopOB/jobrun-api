import { TipoRol } from 'App/Models/Contracts/TipoRol'
import User from 'App/Models/User'

export const isAdmin = (user?: User | null) => user?.rol === TipoRol.ADMIN
