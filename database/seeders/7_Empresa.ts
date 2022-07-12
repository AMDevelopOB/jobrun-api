import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Empresa from 'App/Models/Empresa'

export default class extends BaseSeeder {
  public async run() {
    await Empresa.createMany([
      {
        nombre: 'Burger King S.A.',
        descripcion:
          'En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software. Podrás crear sitios de hosting web donde se acceda a espacios de trabajo compartido, almacenando información y documentos, así como alojar blogs o wikis.En este curso aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.En este puesto de trabajo aprenderás a manejar la plataforma de colaboración empresarial así como sus productos y elementos de software.',
        ubicacion: 'España, Madrid',
        url: 'https://www.burgerking.es/',
        userId: 3,
        enlaceTwitter: 'https://twitter.com/',
        enlaceLinkedin: 'https://linkedin.com/',
        enlaceBehance: 'https://behance.com/',
        numEmpleados: '2500',
        creacion: '1996',
      },
      {
        nombre: 'Servinform',
        descripcion:
          'Servinform somos lideres en servicios digitales y transformación digital 360º. Especialistas en externalización de servicios para empresas.',
        ubicacion: 'España, Sevilla',
        url: 'https://www.servinform.es/en/',
        userId: 4,
        enlaceTwitter: 'https://twitter.com/',
        enlaceLinkedin: 'https://linkedin.com/',
        enlaceBehance: 'https://behance.com/',
        numEmpleados: '500',
        creacion: '2003',
      },
      {
        nombre: 'OpenBootcamp',
        descripcion:
          'Especialízate en desarrollo independientemente de tu nivel de conocimientos y experiencia, nosotros nos adaptaremos a tus objetivos.',
        ubicacion: 'España, Valencia',
        url: 'https://open-bootcamp.com/',
        userId: 5,
        enlaceTwitter: 'https://twitter.com/',
        enlaceLinkedin: 'https://linkedin.com/',
        enlaceBehance: 'https://behance.com/',
        numEmpleados: '50',
        creacion: '2021',
      },
      {
        nombre: 'Proxya',
        descripcion:
          'Proxya es una empresa especializada en servicios de BPO, Factoría de Software y Soporte Avanzado en búsqueda de desarrolladores Java que participen en un proyecto para la administración pública.',
        ubicacion: 'España, Madrid',
        url: 'https://www.proxya.com/',
        userId: 6,
        enlaceTwitter: 'https://twitter.com/',
        enlaceLinkedin: 'https://linkedin.com/',
        enlaceBehance: 'https://behance.com/',
        numEmpleados: '250',
        creacion: '2002',
      },
      {
        nombre: 'New Talent',
        descripcion:
          'Somos una Consultora de Recursos Humanos especializada en atracción de talentos.',
        ubicacion: 'Argentina, Buenos Aires',
        url: 'https://newtalent.com.ar/',
        userId: 7,
        enlaceTwitter: 'https://twitter.com/',
        enlaceLinkedin: 'https://linkedin.com/',
        enlaceBehance: 'https://behance.com/',
        numEmpleados: '5000',
        creacion: '2019',
      },
    ])

    const empresa1 = await Empresa.findByOrFail('id', 2)
    await empresa1.related('valores').attach([1, 2])

    const empresa2 = await Empresa.findByOrFail('id', 3)
    await empresa2.related('valores').attach([1, 3, 4])

    const empresa3 = await Empresa.findByOrFail('id', 4)
    await empresa3.related('valores').attach([1, 2, 3, 4, 5, 6])

    const empresa4 = await Empresa.findByOrFail('id', 5)
    await empresa4.related('valores').attach([5, 6])

    const empresa5 = await Empresa.findByOrFail('id', 6)
    await empresa5.related('valores').attach([1, 6])
  }
}
