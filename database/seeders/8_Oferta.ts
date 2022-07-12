import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { TipoEstado } from 'App/Models/Contracts/TipoEstado'
import { TipoExperiencia } from 'App/Models/Contracts/TipoExperiencia'
import { TipoJornada } from 'App/Models/Contracts/TipoJornada'
import { TipoPresencialidad } from 'App/Models/Contracts/TipoPresencialidad'
import { TipoRegion } from 'App/Models/Contracts/TipoRegion'
import Oferta from 'App/Models/Oferta'

export default class extends BaseSeeder {
  public async run() {
    await Oferta.createMany([
      {
        nombre: 'Front-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        ubicacion: 'España, Alicante',
        region: TipoRegion.EUROPA,
        experiencia: TipoExperiencia.JUNIOR,
        presencialidad: TipoPresencialidad.PRESENCIAL,
        jornada: TipoJornada.COMPLETA,
        estado: TipoEstado.ABIERTA,
        publicada: true,
        salarioMin: 18000,
        salarioMax: 24000,
        vacantes: 25,
        requisitos:
          '["En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.", "Alojar blogs o wikis en este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software."]',
        destacado: false,
        categoriaId: 1,
        empresaId: 2,
      },
      {
        nombre: 'Back-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        ubicacion: 'España, Badajoz',
        region: TipoRegion.EUROPA,
        experiencia: TipoExperiencia.SEMI_SENIOR,
        presencialidad: TipoPresencialidad.PRESENCIAL,
        jornada: TipoJornada.COMPLETA,
        estado: TipoEstado.ABIERTA,
        publicada: true,
        salarioMin: 24000,
        salarioMax: 30000,
        vacantes: 10,
        requisitos:
          '["En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.", "Alojar blogs o wikis en este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software."]',
        destacado: false,
        categoriaId: 2,
        empresaId: 3,
      },
      {
        nombre: 'Front-End & Back-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        ubicacion: 'España, Alicante',
        region: TipoRegion.EUROPA,
        experiencia: TipoExperiencia.SENIOR,
        presencialidad: TipoPresencialidad.REMOTO,
        jornada: TipoJornada.COMPLETA,
        estado: TipoEstado.ABIERTA,
        publicada: true,
        salarioMin: 30000,
        salarioMax: 40000,
        vacantes: 5,
        requisitos:
          '["En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.", "Alojar blogs o wikis en este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software."]',
        destacado: false,
        categoriaId: 3,
        empresaId: 4,
      },
      {
        nombre: 'Front-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        ubicacion: 'Argentina, Buenos Aires',
        region: TipoRegion.LATAM,
        experiencia: TipoExperiencia.JUNIOR,
        presencialidad: TipoPresencialidad.REMOTO,
        jornada: TipoJornada.COMPLETA,
        estado: TipoEstado.ABIERTA,
        publicada: true,
        salarioMin: 18000,
        salarioMax: 24000,
        vacantes: 100,
        requisitos:
          '["En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.", "Alojar blogs o wikis en este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software."]',
        destacado: false,
        categoriaId: 1,
        empresaId: 6,
      },
      {
        nombre: 'Back-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        ubicacion: 'España, Badajoz',
        region: TipoRegion.EUROPA,
        experiencia: TipoExperiencia.SEMI_SENIOR,
        presencialidad: TipoPresencialidad.PRESENCIAL,
        jornada: TipoJornada.COMPLETA,
        estado: TipoEstado.ABIERTA,
        publicada: true,
        salarioMin: 24000,
        salarioMax: 30000,
        vacantes: 10,
        requisitos:
          '["En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.", "Alojar blogs o wikis en este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software."]',
        destacado: false,
        categoriaId: 2,
        empresaId: 3,
      },
      {
        nombre: 'Front-End & Back-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        ubicacion: 'España, Alicante',
        region: TipoRegion.EUROPA,
        experiencia: TipoExperiencia.SENIOR,
        presencialidad: TipoPresencialidad.REMOTO,
        jornada: TipoJornada.COMPLETA,
        estado: TipoEstado.ABIERTA,
        publicada: true,
        salarioMin: 30000,
        salarioMax: 40000,
        vacantes: 25,
        requisitos:
          '["En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.", "Alojar blogs o wikis en este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software."]',
        destacado: false,
        categoriaId: 3,
        empresaId: 4,
      },
    ])

    const oferta1 = await Oferta.findByOrFail('id', 2)
    await oferta1.related('idiomas').attach([1, 2, 4])
    await oferta1.related('tecnologias').attach([1, 2, 3, 4])
    await oferta1.related('beneficios').attach([1, 2, 3, 4, 5, 6])

    const oferta2 = await Oferta.findByOrFail('id', 3)
    await oferta2.related('idiomas').attach([1, 2])
    await oferta2.related('tecnologias').attach([5, 6, 7])
    await oferta2.related('beneficios').attach([1, 6])

    const oferta3 = await Oferta.findByOrFail('id', 4)
    await oferta3.related('idiomas').attach([1, 2, 4])
    await oferta3.related('tecnologias').attach([2, 6])
    await oferta3.related('beneficios').attach([4, 5, 6])

    const oferta4 = await Oferta.findByOrFail('id', 5)
    await oferta4.related('idiomas').attach([1, 2, 4])
    await oferta4.related('tecnologias').attach([1, 2, 3, 4])
    await oferta4.related('beneficios').attach([1, 2, 3, 4, 5, 6])

    const oferta5 = await Oferta.findByOrFail('id', 6)
    await oferta5.related('idiomas').attach([1, 2])
    await oferta5.related('tecnologias').attach([5, 6, 7])
    await oferta5.related('beneficios').attach([1, 6])

    const oferta6 = await Oferta.findByOrFail('id', 7)
    await oferta6.related('idiomas').attach([1, 2, 4])
    await oferta6.related('tecnologias').attach([2, 6])
    await oferta6.related('beneficios').attach([4, 5, 6])
  }
}
