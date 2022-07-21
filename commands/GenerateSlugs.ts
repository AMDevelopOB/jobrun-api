import { args, BaseCommand } from '@adonisjs/core/build/standalone'
import Database from '@ioc:Adonis/Lucid/Database'

export default class GenerateSlugs extends BaseCommand {
  @args.string()
  public entity: 'ofertas' | 'empresas' | 'all'

  public static commandName = 'generate:slugs'
  public static description = 'Generates slugs for specified model'

  public static settings = {
    loadApp: true,
    stayAlive: false,
  }

  /**
   * It takes a number between 0 and 100 and returns a string that represents a progress bar
   * @param {number} currentPercentage - The current percentage of the progress bar.
   * @returns A progress bar.
   */
  private getProgressBar(currentPercentage: number) {
    const completed = Math.ceil(currentPercentage / 3)
    const incomplete = Math.ceil((100 - currentPercentage) / 3)
    return `[${new Array(completed).join('=')}${new Array(incomplete).join(' ')}]`
  }
  /**
   * It takes a string, converts it to lowercase, removes all non-word characters, replaces spaces with
   * dashes, and trims dashes from the beginning and end of the string
   * @param {string} text - The text to be slugified
   * @returns A string
   */
  private slugify(text: string) {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }

  /**
   * It fetches all the entities from the database, iterates over them, and updates the slug field of
   * each entity
   * @param {'cursos' | 'lecciones'} entityName - The name of the entity to slugify.
   */
  private async slugifyEntity(entityName: 'ofertas' | 'empresas', _prefix: string) {
    /* Fetching all the entities from the database. */
    const entities = await Database.from(entityName).select('id', 'nombre')
    /* Iterating over the entities array and updating the slug field of each entity. */
    let entityCount = 0
    for (const entity of entities) {
      /* Updating the slug field of each entity. */
      const randomizedNumber = Math.floor(Math.random() * (10000 - 1) + 1)
      const slug = `${this.slugify(entity['nombre'])}-${randomizedNumber}`
      await Database.from(entityName).where('id', entity.id).andWhereNull('slug').update({ slug })
      entityCount++
      this.logger.logUpdate(
        `Slugifying ${entityName} ${this.getProgressBar(
          (entityCount / entities.length) * 100
        )} ${entityCount}/${entities.length}`
      )
    }
    this.logger.logUpdatePersist()
    this.logger.success(`Slugified ${entityCount} ${entityName}`)
  }

  public async run() {
    if (this.entity === 'all') {
      await this.slugifyEntity('ofertas', 'oferta')
      await this.slugifyEntity('empresas', 'empresa')
    } else {
      await this.slugifyEntity(this.entity, this.entity)
    }
  }
}
