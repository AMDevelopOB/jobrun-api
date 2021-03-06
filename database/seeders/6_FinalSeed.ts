import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { TipoEstado } from 'App/Models/Contracts/TipoEstado'
import { TipoExperiencia } from 'App/Models/Contracts/TipoExperiencia'
import { TipoJornada } from 'App/Models/Contracts/TipoJornada'
import { TipoPresencialidad } from 'App/Models/Contracts/TipoPresencialidad'
import { TipoRegion } from 'App/Models/Contracts/TipoRegion'
import { TipoRol } from 'App/Models/Contracts/TipoRol'
import Empresa from 'App/Models/Empresa'
import Oferta from 'App/Models/Oferta'
import User from 'App/Models/User'
import { generateSlug, generateSlugNumber } from 'App/Strategies/GenerateSlugsStrategy'

export default class extends BaseSeeder {
  public async run() {
    User.updateOrCreateMany(
      ['id', 'email'],
      [
        {
          id: 1,
          email: 'amdevelop@open-bootcamp.com',
          password: 'admin12345',
          username: 'AMDevelop',
          nombreCompleto: 'Alejandro Martinez',
          telefono: '645565464',
          rol: TipoRol.ADMIN,
        },
        {
          id: 2,
          email: 'alex@open-bootcamp.com',
          password: 'admin12345',
          username: 'El Master',
          nombreCompleto: 'Álex Torrentí',
          telefono: '666333111',
          rol: TipoRol.ADMIN,
        },
        {
          id: 3,
          email: 'joaquin@burguerking.com',
          password: 'bk12345',
          username: 'JoaquinSorolla',
          nombreCompleto: 'Joaquin Sorolla',
          telefono: '616616616',
          rol: TipoRol.USER,
        },
        {
          id: 4,
          email: 'marialucia@servinform.com',
          password: 'servinform3321',
          username: 'MariLuci',
          nombreCompleto: 'Maria Lucia Gimenez',
          telefono: '616616619',
          rol: TipoRol.USER,
        },
        {
          id: 5,
          email: 'contacto@open-bootcamp.com',
          password: 'ob!33',
          username: 'OpenBootcamp',
          nombreCompleto: 'Victor Mollá',
          telefono: '666111222',
          rol: TipoRol.USER,
        },
        {
          id: 6,
          email: 'hola@proxya.com',
          password: 'proxya1122',
          username: 'ContactoProxya',
          nombreCompleto: 'Enrique Hernandez',
          telefono: '654321321',
          rol: TipoRol.USER,
        },
        {
          id: 7,
          email: 'mariluz@newtalent.com',
          password: 'ml12345',
          username: 'MariLuzNT',
          nombreCompleto: 'Maria Luz Rodríguez',
          telefono: '678678678',
          rol: TipoRol.USER,
        },
      ]
    )

    await Empresa.updateOrCreateMany(
      ['id', 'nombre'],
      [
        {
          id: 1,
          nombre: 'Burger King S.A.',
          descripcion:
            'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
          comunidadId: 1,
          paisId: 1,
          url: 'https://www.burgerking.es/',
          userId: 3,
          enlaceTwitter: 'https://twitter.com/',
          enlaceLinkedin: 'https://linkedin.com/',
          enlaceBehance: 'https://behance.com/',
          numEmpleados: '2500',
          creacion: '1996',
          slug: await generateSlug('Burger King S.A.'),
        },
        {
          id: 2,
          nombre: 'Servinform',
          descripcion:
            'Servinform somos lideres en servicios digitales y transformación digital 360º. Especialistas en externalización de servicios para empresas.',
          comunidadId: 3,
          paisId: 1,
          url: 'https://www.servinform.es/en/',
          userId: 4,
          enlaceTwitter: 'https://twitter.com/',
          enlaceLinkedin: 'https://linkedin.com/',
          enlaceBehance: 'https://behance.com/',
          numEmpleados: '500',
          creacion: '2003',
          slug: await generateSlug('Servinform'),
        },
        {
          id: 3,
          nombre: 'OpenBootcamp',
          descripcion:
            'Especialízate en desarrollo independientemente de tu nivel de conocimientos y experiencia, nosotros nos adaptaremos a tus objetivos.',
          comunidadId: 3,
          paisId: 1,
          url: 'https://open-bootcamp.com/',
          userId: 5,
          enlaceTwitter: 'https://twitter.com/',
          enlaceLinkedin: 'https://linkedin.com/',
          enlaceBehance: 'https://behance.com/',
          numEmpleados: '50',
          creacion: '2021',
          slug: await generateSlug('OpenBootcamp'),
        },
        {
          id: 4,
          nombre: 'Proxya',
          descripcion:
            'Proxya es una empresa especializada en servicios de BPO, Factoría de Software y Soporte Avanzado en búsqueda de desarrolladores Java que participen en un proyecto para la administración pública.',
          comunidadId: 1,
          paisId: 1,
          url: 'https://www.proxya.com/',
          userId: 6,
          enlaceTwitter: 'https://twitter.com/',
          enlaceLinkedin: 'https://linkedin.com/',
          enlaceBehance: 'https://behance.com/',
          numEmpleados: '250',
          creacion: '2002',
          slug: await generateSlug('Proxya'),
        },
        {
          id: 5,
          nombre: 'New Talent',
          descripcion:
            'Somos una Consultora de Recursos Humanos especializada en atracción de talentos.',
          comunidadId: 30,
          paisId: 2,
          url: 'https://newtalent.com.ar/',
          userId: 7,
          enlaceTwitter: 'https://twitter.com/',
          enlaceLinkedin: 'https://linkedin.com/',
          enlaceBehance: 'https://behance.com/',
          numEmpleados: '5000',
          creacion: '2019',
          slug: await generateSlug('New Talent'),
        },
      ]
    )

    const empresa1 = await Empresa.findByOrFail('id', 1)
    await empresa1.related('valores').attach([1, 2])

    const empresa2 = await Empresa.findByOrFail('id', 2)
    await empresa2.related('valores').attach([1, 3, 4])

    const empresa3 = await Empresa.findByOrFail('id', 3)
    await empresa3.related('valores').attach([1, 2, 3, 4, 5, 6])

    const empresa4 = await Empresa.findByOrFail('id', 4)
    await empresa4.related('valores').attach([5, 6])

    const empresa5 = await Empresa.findByOrFail('id', 5)
    await empresa5.related('valores').attach([1, 6])

    await Oferta.updateOrCreateMany('id', [
      {
        id: 1,
        nombre: 'Front-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        comunidadId: 3,
        paisId: 1,
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
        empresaId: 1,
        slug: await generateSlugNumber('Front-End Developer', 1),
      },
      {
        id: 2,
        nombre: 'Back-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        comunidadId: 1,
        paisId: 1,
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
        empresaId: 2,
        slug: await generateSlugNumber('Back-End Developer', 2),
      },
      {
        id: 3,
        nombre: 'Front-End & Back-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        comunidadId: 3,
        paisId: 1,
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
        empresaId: 3,
        slug: await generateSlugNumber('Front-End & Back-End Developer', 3),
      },
      {
        id: 4,
        nombre: 'Front-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        comunidadId: 30,
        paisId: 2,
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
        empresaId: 5,
        slug: await generateSlugNumber('Front-End Developer', 4),
      },
      {
        id: 5,
        nombre: 'Back-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        comunidadId: 3,
        paisId: 1,
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
        empresaId: 2,
        slug: await generateSlugNumber('Back-End Developer', 5),
      },
      {
        id: 6,
        nombre: 'Front-End & Back-End Developer',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        comunidadId: 1,
        paisId: 1,
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
        empresaId: 3,
        slug: await generateSlugNumber('Front-End & Back-End Developer', 6),
      },
    ])

    const oferta1 = await Oferta.findByOrFail('id', 1)
    await oferta1.related('idiomas').attach([1, 2, 4])
    await oferta1.related('tecnologias').attach([1, 2, 3, 4])
    await oferta1.related('beneficios').attach([1, 2, 3, 4, 5, 6])

    const oferta2 = await Oferta.findByOrFail('id', 2)
    await oferta2.related('idiomas').attach([1, 2])
    await oferta2.related('tecnologias').attach([5, 6, 7])
    await oferta2.related('beneficios').attach([1, 6])

    const oferta3 = await Oferta.findByOrFail('id', 3)
    await oferta3.related('idiomas').attach([1, 2, 4])
    await oferta3.related('tecnologias').attach([2, 6])
    await oferta3.related('beneficios').attach([4, 5, 6])

    const oferta4 = await Oferta.findByOrFail('id', 4)
    await oferta4.related('idiomas').attach([1, 2, 4])
    await oferta4.related('tecnologias').attach([1, 2, 3, 4])
    await oferta4.related('beneficios').attach([1, 2, 3, 4, 5, 6])

    const oferta5 = await Oferta.findByOrFail('id', 5)
    await oferta5.related('idiomas').attach([1, 2])
    await oferta5.related('tecnologias').attach([5, 6, 7])
    await oferta5.related('beneficios').attach([1, 6])

    const oferta6 = await Oferta.findByOrFail('id', 6)
    await oferta6.related('idiomas').attach([1, 2, 4])
    await oferta6.related('tecnologias').attach([2, 6])
    await oferta6.related('beneficios').attach([4, 5, 6])

    await Database.rawQuery('ALTER SEQUENCE users_id_seq RESTART WITH 8;')
    await Database.rawQuery('ALTER SEQUENCE empresas_id_seq RESTART WITH 6;')
    await Database.rawQuery('ALTER SEQUENCE ofertas_id_seq RESTART WITH 7;')
  }
}
