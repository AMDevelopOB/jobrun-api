import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.post('/register', 'UsersController.store')

  Route.group(() => {
    Route.resource('/users', 'UsersController').apiOnly()
  }).middleware('auth')
}).prefix('/auth')

Route.group(() => {
  Route.group(() => {
    Route.resource('/ofertas', 'OfertasController').apiOnly()
    Route.resource('/empresas', 'EmpresasController').apiOnly()
    Route.resource('/tecnologias', 'TecnologiasController').apiOnly()
    Route.resource('/beneficios', 'BeneficiosController').apiOnly()
    Route.resource('/idiomas', 'IdiomasController').apiOnly()
    Route.resource('/valores', 'ValoresController').apiOnly()
    Route.resource('/categorias', 'CategoriasController').apiOnly()
    Route.resource('/paises', 'PaisesController').apiOnly()
    Route.resource('/comunidades', 'ComunidadesController').apiOnly()
  }).middleware('auth')
}).prefix('/godAPI')

Route.group(() => {
  Route.get('/ofertas', 'OfertasController.index')
  Route.get('/ofertas/:id', 'OfertasController.show')

  Route.get('/empresas', 'EmpresasController.index')
  Route.get('/empresas/:id', 'EmpresasController.show')

  Route.get('/categorias', 'CategoriasController.index')
  Route.get('/tecnologias', 'TecnologiasController.index')
}).prefix('/api')
