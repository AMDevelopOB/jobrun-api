import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/User'
import { isAdmin } from 'App/Services/AuthService'

export default class MainPolicy extends BasePolicy {
  public async before(user: User | null) {
    if (isAdmin(user)) return true
  }

  public async viewList(_user: User) {
    return true
  }

  public async view(_user: User) {
    return true
  }
  public async create(_user: User) {
    return true
  }
  public async update(_user: User) {
    return true
  }
  public async delete(user: User) {
    return isAdmin(user)
  }
}
