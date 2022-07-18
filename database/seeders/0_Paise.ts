import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comunidad from 'App/Models/Comunidad'
import Pais from 'App/Models/Pais'

export default class PaisesSeeder extends BaseSeeder {
  public async run() {
    //Países
    await Pais.updateOrCreateMany('id', [
      { id: 1, nombre: 'España', bandera: '🇪🇸' },
      { id: 2, nombre: 'Argentina', bandera: '🇦🇷' },
      { id: 3, nombre: 'Colombia', bandera: '🇨🇴' },
      { id: 4, nombre: 'México', bandera: '🇲🇽' },
      { id: 5, nombre: 'Venezuela', bandera: '🇻🇪' },
      { id: 6, nombre: 'Perú', bandera: '🇵🇪' },
      { id: 7, nombre: 'Chile', bandera: '🇨🇱' },
      { id: 8, nombre: 'Ecuador', bandera: '🇪🇨' },
      { id: 9, nombre: 'Paraguay', bandera: '🇵🇾' },
      { id: 10, nombre: 'Uruguay', bandera: '🇺🇾' },
      { id: 11, nombre: 'Costa Rica', bandera: '🇨🇷' },
      { id: 12, nombre: 'República Dominicana', bandera: '🇩🇴' },
      { id: 13, nombre: 'Bolivia', bandera: '🇧🇴' },
      { id: 14, nombre: 'Guatemala', bandera: '🇬🇹' },
      { id: 15, nombre: 'El Salvador', bandera: '🇸🇻' },
      { id: 16, nombre: 'Comunidads Unidos', bandera: '🇺🇸' },
      { id: 17, nombre: 'Otro', bandera: '❓' },
    ])
    //Comunidades autónomas España
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Andalucía', paisId: 1 },
        { nombre: 'Aragón', paisId: 1 },
        { nombre: 'Asturias', paisId: 1 },
        { nombre: 'Canarias', paisId: 1 },
        { nombre: 'Cantabria', paisId: 1 },
        { nombre: 'Comunidad de Madrid', paisId: 1 },
        { nombre: 'Comunidad Valenciana', paisId: 1 },
        { nombre: 'Castilla-La Mancha', paisId: 1 },
        { nombre: 'Castilla-León', paisId: 1 },
        { nombre: 'Catalunya', paisId: 1 },
        { nombre: 'Extremadura', paisId: 1 },
        { nombre: 'Galicia', paisId: 1 },
        { nombre: 'Islas Baleares', paisId: 1 },
        { nombre: 'Euskadi', paisId: 1 },
        { nombre: 'Región de Murcia', paisId: 1 },
        { nombre: 'Navarra', paisId: 1 },
        { nombre: 'La Rioja', paisId: 1 },
        { nombre: 'Ceuta y Melilla', paisId: 1 },
      ]
    )
    //Provincias Argentina
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Buenos Aires', paisId: 2 },
        { nombre: 'Catamarca', paisId: 2 },
        { nombre: 'Chaco', paisId: 2 },
        { nombre: 'Chubut', paisId: 2 },
        { nombre: 'Córdoba', paisId: 2 },
        { nombre: 'Corrientes', paisId: 2 },
        { nombre: 'Entre Ríos', paisId: 2 },
        { nombre: 'Formosa', paisId: 2 },
        { nombre: 'Jujuy', paisId: 2 },
        { nombre: 'La Pampa', paisId: 2 },
        { nombre: 'La Rioja', paisId: 2 },
        { nombre: 'Mendoza', paisId: 2 },
        { nombre: 'Misiones', paisId: 2 },
        { nombre: 'Neuquén', paisId: 2 },
        { nombre: 'Río Negro', paisId: 2 },
        { nombre: 'Salta', paisId: 2 },
        { nombre: 'San Juan', paisId: 2 },
        { nombre: 'San Luis', paisId: 2 },
        { nombre: 'Santa Cruz', paisId: 2 },
        { nombre: 'Santa Fe', paisId: 2 },
        { nombre: 'Santiago del Estero', paisId: 2 },
        { nombre: 'Tierra del Fuego, Antártida e Islas del Atlántico Sur', paisId: 2 },
        { nombre: 'Tucumán', paisId: 2 },
      ]
    )
    //Departamentos Colombia
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Amazonas', paisId: 3 },
        { nombre: 'Antioquia', paisId: 3 },
        { nombre: 'Arauca', paisId: 3 },
        { nombre: 'Atlántico', paisId: 3 },
        { nombre: 'Bogotá', paisId: 3 },
        { nombre: 'Bolívar', paisId: 3 },
        { nombre: 'Boyacá', paisId: 3 },
        { nombre: 'Caldas', paisId: 3 },
        { nombre: 'Caquetá', paisId: 3 },
        { nombre: 'Casanare', paisId: 3 },
        { nombre: 'Cauca', paisId: 3 },
        { nombre: 'Cesar', paisId: 3 },
        { nombre: 'Chocó', paisId: 3 },
        { nombre: 'Córdoba', paisId: 3 },
        { nombre: 'Cundinamarca', paisId: 3 },
        { nombre: 'Guainía', paisId: 3 },
        { nombre: 'Guaviare', paisId: 3 },
        { nombre: 'Huila', paisId: 3 },
        { nombre: 'La Guajira', paisId: 3 },
        { nombre: 'Magdalena', paisId: 3 },
        { nombre: 'Meta', paisId: 3 },
        { nombre: 'Nariño', paisId: 3 },
        { nombre: 'Norte de Santander', paisId: 3 },
        { nombre: 'Putumayo', paisId: 3 },
        { nombre: 'Quindío', paisId: 3 },
        { nombre: 'Risaralda', paisId: 3 },
        { nombre: 'San Andrés y Providencia', paisId: 3 },
        { nombre: 'Santander', paisId: 3 },
        { nombre: 'Sucre', paisId: 3 },
        { nombre: 'Tolima', paisId: 3 },
        { nombre: 'Valle del Cauca', paisId: 3 },
        { nombre: 'Vaupés', paisId: 3 },
      ]
    )
    //Comunidads México
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Aguascalientes', paisId: 4 },
        { nombre: 'Baja California', paisId: 4 },
        { nombre: 'Baja California Sur', paisId: 4 },
        { nombre: 'Campeche', paisId: 4 },
        { nombre: 'Chiapas', paisId: 4 },
        { nombre: 'Chihuahua', paisId: 4 },
        { nombre: 'Ciudad', paisId: 4 },
        { nombre: 'Coahuila de Zaragoza', paisId: 4 },
        { nombre: 'Colima', paisId: 4 },
        { nombre: 'Durango', paisId: 4 },
        { nombre: 'Comunidad de México', paisId: 4 },
        { nombre: 'Guanajuato', paisId: 4 },
        { nombre: 'Guerrero', paisId: 4 },
        { nombre: 'Hidalgo', paisId: 4 },
        { nombre: 'Jalisco', paisId: 4 },
        { nombre: 'Michoacán de Ocampo', paisId: 4 },
        { nombre: 'Morelos', paisId: 4 },
        { nombre: 'Nayarit', paisId: 4 },
        { nombre: 'Nuevo León', paisId: 4 },
        { nombre: 'Oaxaca', paisId: 4 },
        { nombre: 'Puebla', paisId: 4 },
        { nombre: 'Querétaro', paisId: 4 },
        { nombre: 'Quintana Roo', paisId: 4 },
        { nombre: 'San Luis Potosí', paisId: 4 },
        { nombre: 'Sinaloa', paisId: 4 },
        { nombre: 'Sonora', paisId: 4 },
        { nombre: 'Tabasco', paisId: 4 },
        { nombre: 'Tamaulipas', paisId: 4 },
        { nombre: 'Tlaxcala', paisId: 4 },
        { nombre: 'Veracruz de Ignacio de la Llave', paisId: 4 },
        { nombre: 'Yucatán', paisId: 4 },
        { nombre: 'Zacatecas', paisId: 4 },
      ]
    )
    //Comunidads Venezuela
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Amazonas', paisId: 5 },
        { nombre: 'Anzoátegui', paisId: 5 },
        { nombre: 'Apure', paisId: 5 },
        { nombre: 'Aragua', paisId: 5 },
        { nombre: 'Barinas', paisId: 5 },
        { nombre: 'Bolívar', paisId: 5 },
        { nombre: 'Carabobo', paisId: 5 },
        { nombre: 'Cojedes', paisId: 5 },
        { nombre: 'Delta Amacuro', paisId: 5 },
        { nombre: 'Distrito Capital', paisId: 5 },
        { nombre: 'Falcón', paisId: 5 },
        { nombre: 'Guárico', paisId: 5 },
        { nombre: 'Lara', paisId: 5 },
        { nombre: 'Mérida', paisId: 5 },
        { nombre: 'Miranda', paisId: 5 },
        { nombre: 'Monagas', paisId: 5 },
        { nombre: 'Nueva Esparta', paisId: 5 },
        { nombre: 'Portuguesa', paisId: 5 },
        { nombre: 'Sucre', paisId: 5 },
        { nombre: 'Táchira', paisId: 5 },
        { nombre: 'Trujillo', paisId: 5 },
        { nombre: 'Vargas', paisId: 5 },
        { nombre: 'Yaracuy', paisId: 5 },
        { nombre: 'Zulia', paisId: 5 },
        { nombre: 'Dependencias Federales', paisId: 5 },
      ]
    )
    //Departamentos Perú
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Amazonas', paisId: 6 },
        { nombre: 'Áncash', paisId: 6 },
        { nombre: 'Apurímac', paisId: 6 },
        { nombre: 'Arequipa', paisId: 6 },
        { nombre: 'Ayacucho', paisId: 6 },
        { nombre: 'Cajamarca', paisId: 6 },
        { nombre: 'Callaonota', paisId: 6 },
        { nombre: 'Cuzco', paisId: 6 },
        { nombre: 'Huancavelica', paisId: 6 },
        { nombre: 'Huánuco', paisId: 6 },
        { nombre: 'Ica', paisId: 6 },
        { nombre: 'Junín', paisId: 6 },
        { nombre: 'La Libertad', paisId: 6 },
        { nombre: 'Lambayeque', paisId: 6 },
        { nombre: 'Lima Metropolitana', paisId: 6 },
        { nombre: 'Lima', paisId: 6 },
        { nombre: 'Loreto', paisId: 6 },
        { nombre: 'Madre de Dios', paisId: 6 },
        { nombre: 'Moquegua', paisId: 6 },
        { nombre: 'Pasco', paisId: 6 },
        { nombre: 'Piura', paisId: 6 },
        { nombre: 'Puno', paisId: 6 },
        { nombre: 'San Martín', paisId: 6 },
        { nombre: 'Tacna', paisId: 6 },
        { nombre: 'Tumbes', paisId: 6 },
        { nombre: 'Ucayali', paisId: 6 },
      ]
    )
    //Regiones Chile
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Arica y Parinacota', paisId: 7 },
        { nombre: 'Tarapacá', paisId: 7 },
        { nombre: 'Antofagasta', paisId: 7 },
        { nombre: 'Atacama', paisId: 7 },
        { nombre: 'Coquimbo', paisId: 7 },
        { nombre: 'Valparaíso', paisId: 7 },
        { nombre: 'Metropolitana de Santiago', paisId: 7 },
        { nombre: "Libertador General Bernardo O'Higgins", paisId: 7 },
        { nombre: 'Maule', paisId: 7 },
        { nombre: 'Biobío', paisId: 7 },
        { nombre: 'La Araucanía', paisId: 7 },
        { nombre: 'Los Ríos', paisId: 7 },
        { nombre: 'Los Lagos', paisId: 7 },
        { nombre: 'Aysén del General Carlos Ibáñez del Campo', paisId: 7 },
        { nombre: 'Magallanes y de la Antártica Chilena', paisId: 7 },
      ]
    )
    //Provincias Ecuador
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Azuay', paisId: 8 },
        { nombre: 'Bolívar', paisId: 8 },
        { nombre: 'Cañar', paisId: 8 },
        { nombre: 'Carchi', paisId: 8 },
        { nombre: 'Chimborazo', paisId: 8 },
        { nombre: 'Cotopaxi', paisId: 8 },
        { nombre: 'El Oro', paisId: 8 },
        { nombre: 'Esmeraldas', paisId: 8 },
        { nombre: 'Galápagos', paisId: 8 },
        { nombre: 'Guayas', paisId: 8 },
        { nombre: 'Imbabura', paisId: 8 },
        { nombre: 'Loja', paisId: 8 },
        { nombre: 'Los Ríos', paisId: 8 },
        { nombre: 'Manabí', paisId: 8 },
        { nombre: 'Morona Santiago', paisId: 8 },
        { nombre: 'Napo', paisId: 8 },
        { nombre: 'Orellana', paisId: 8 },
        { nombre: 'Pastaza', paisId: 8 },
        { nombre: 'Pichincha', paisId: 8 },
        { nombre: 'Santa Elena', paisId: 8 },
        { nombre: 'Santo Domingo de los Tsáchilas', paisId: 8 },
        { nombre: 'Sucumbíos', paisId: 8 },
        { nombre: 'Tungurahua', paisId: 8 },
        { nombre: 'Zamora Chinchipe', paisId: 8 },
      ]
    )
    //Departamentos Paraguay
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Alto Paraguay', paisId: 9 },
        { nombre: 'Alto Paraná', paisId: 9 },
        { nombre: 'Amambay', paisId: 9 },
        { nombre: 'Boquerón', paisId: 9 },
        { nombre: 'Caaguazú', paisId: 9 },
        { nombre: 'Caazapá', paisId: 9 },
        { nombre: 'Canindeyú', paisId: 9 },
        { nombre: 'Central', paisId: 9 },
        { nombre: 'Concepción', paisId: 9 },
        { nombre: 'Cordillera', paisId: 9 },
        { nombre: 'Distrito Capital', paisId: 9 },
        { nombre: 'Guairá', paisId: 9 },
        { nombre: 'Itapúa', paisId: 9 },
        { nombre: 'Misiones', paisId: 9 },
        { nombre: 'Ñeembucú', paisId: 9 },
        { nombre: 'Paraguarí', paisId: 9 },
        { nombre: 'Presidente Hayes', paisId: 9 },
        { nombre: 'San Pedro', paisId: 9 },
      ]
    )
    //Departamentos Uruguay
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Artigas', paisId: 10 },
        { nombre: 'Canelones', paisId: 10 },
        { nombre: 'Cerro Largo', paisId: 10 },
        { nombre: 'Colonia', paisId: 10 },
        { nombre: 'Durazno', paisId: 10 },
        { nombre: 'Flores', paisId: 10 },
        { nombre: 'Florida', paisId: 10 },
        { nombre: 'Lavalleja', paisId: 10 },
        { nombre: 'Maldonado', paisId: 10 },
        { nombre: 'Montevideo', paisId: 10 },
        { nombre: 'Paysandú', paisId: 10 },
        { nombre: 'Río Negro', paisId: 10 },
        { nombre: 'Rivera', paisId: 10 },
        { nombre: 'Rocha', paisId: 10 },
        { nombre: 'Salto', paisId: 10 },
        { nombre: 'San José', paisId: 10 },
        { nombre: 'Soriano', paisId: 10 },
        { nombre: 'Tacuarembó', paisId: 10 },
        { nombre: 'Treinta y Tres', paisId: 10 },
      ]
    )
    //Provincias Costa Rica
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'San José', paisId: 11 },
        { nombre: 'Alajuela', paisId: 11 },
        { nombre: 'Cartago', paisId: 11 },
        { nombre: 'Heredia', paisId: 11 },
        { nombre: 'Guanacaste', paisId: 11 },
        { nombre: 'Puntarenas', paisId: 11 },
        { nombre: 'Limón', paisId: 11 },
      ]
    )
    //Provincias de Costa Rica
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Azua', paisId: 12 },
        { nombre: 'Bahoruco', paisId: 12 },
        { nombre: 'Barahona', paisId: 12 },
        { nombre: 'Dajabón', paisId: 12 },
        { nombre: 'Duarte', paisId: 12 },
        { nombre: 'El Seibo', paisId: 12 },
        { nombre: 'Elías Piña', paisId: 12 },
        { nombre: 'Espaillat', paisId: 12 },
        { nombre: 'Hato Mayor', paisId: 12 },
        { nombre: 'Hermanas Mirabal', paisId: 12 },
        { nombre: 'Independencia', paisId: 12 },
        { nombre: 'La Altagracia', paisId: 12 },
        { nombre: 'La Romana', paisId: 12 },
        { nombre: 'La Vega', paisId: 12 },
        { nombre: 'María Trinidad Sánchez', paisId: 12 },
        { nombre: 'Monseñor Nouel', paisId: 12 },
        { nombre: 'Monte Cristi', paisId: 12 },
        { nombre: 'Monte Plata', paisId: 12 },
        { nombre: 'Pedernales', paisId: 12 },
        { nombre: 'Peravia', paisId: 12 },
        { nombre: 'Puerto Plata', paisId: 12 },
        { nombre: 'Samaná', paisId: 12 },
        { nombre: 'San Cristóbal', paisId: 12 },
        { nombre: 'San José de Ocoa', paisId: 12 },
        { nombre: 'San Juan', paisId: 12 },
        { nombre: 'San Pedro de Macorís', paisId: 12 },
        { nombre: 'Sánchez Ramírez', paisId: 12 },
        { nombre: 'Santiago', paisId: 12 },
        { nombre: 'Santiago Rodríguez', paisId: 12 },
        { nombre: 'Santo Domingo', paisId: 12 },
        { nombre: 'Valverde', paisId: 12 },
        { nombre: 'Distrito Nacional', paisId: 12 },
      ]
    )
    //Provincias de Bolivia
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Beni', paisId: 13 },
        { nombre: 'Chuquisaca', paisId: 13 },
        { nombre: 'Cochabamba', paisId: 13 },
        { nombre: 'La paz', paisId: 13 },
        { nombre: 'Oruro', paisId: 13 },
        { nombre: 'Pando', paisId: 13 },
        { nombre: 'Potosí', paisId: 13 },
        { nombre: 'Santa Cruz', paisId: 13 },
        { nombre: 'Tarija', paisId: 13 },
      ]
    )
    //Departamentos de Guatemala
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Petén', paisId: 14 },
        { nombre: 'Huehuetenango', paisId: 14 },
        { nombre: 'Quiché', paisId: 14 },
        { nombre: 'Alta Verapaz', paisId: 14 },
        { nombre: 'Izabal', paisId: 14 },
        { nombre: 'San Marcos', paisId: 14 },
        { nombre: 'Quetzaltenango', paisId: 14 },
        { nombre: 'Totonicapán', paisId: 14 },
        { nombre: 'Sololá', paisId: 14 },
        { nombre: 'Chimaltenango', paisId: 14 },
        { nombre: 'Sacatepéquez', paisId: 14 },
        { nombre: 'Guatemala', paisId: 14 },
        { nombre: 'Baja Verapaz', paisId: 14 },
        { nombre: 'El Progreso', paisId: 14 },
        { nombre: 'Jalapa', paisId: 14 },
        { nombre: 'Zacapa', paisId: 14 },
        { nombre: 'Chiquimula', paisId: 14 },
        { nombre: 'Retalhuleu', paisId: 14 },
        { nombre: 'Suchitepéquez', paisId: 14 },
        { nombre: 'Escuintla', paisId: 14 },
        { nombre: 'Santa Rosa', paisId: 14 },
        { nombre: 'Jutiapa', paisId: 14 },
      ]
    )
    //Departamentos El Salvador
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Ahuachapán', paisId: 15 },
        { nombre: 'Cabañas', paisId: 15 },
        { nombre: 'Chalatenango', paisId: 15 },
        { nombre: 'Cuscatlán', paisId: 15 },
        { nombre: 'La Libertad', paisId: 15 },
        { nombre: 'Morazán', paisId: 15 },
        { nombre: 'La Paz', paisId: 15 },
        { nombre: 'Santa Ana', paisId: 15 },
        { nombre: 'San Miguel', paisId: 15 },
        { nombre: 'San Salvador', paisId: 15 },
        { nombre: 'San Vicente', paisId: 15 },
        { nombre: 'Sonsonate', paisId: 15 },
        { nombre: 'La Unión', paisId: 15 },
        { nombre: 'Usulután', paisId: 15 },
      ]
    )
    //Comunidads de Comunidads Unidos
    await Comunidad.updateOrCreateMany(
      ['nombre', 'paisId'],
      [
        { nombre: 'Alabama', paisId: 16 },
        { nombre: 'Alaska', paisId: 16 },
        { nombre: 'Arizona', paisId: 16 },
        { nombre: 'Arkansas', paisId: 16 },
        { nombre: 'California', paisId: 16 },
        { nombre: 'Carolina del Norte', paisId: 16 },
        { nombre: 'Carolina del Sur', paisId: 16 },
        { nombre: 'Colorado', paisId: 16 },
        { nombre: 'Connecticut', paisId: 16 },
        { nombre: 'Dakota del Norte', paisId: 16 },
        { nombre: 'Dakota del Sur', paisId: 16 },
        { nombre: 'Delaware', paisId: 16 },
        { nombre: 'Florida', paisId: 16 },
        { nombre: 'Georgia', paisId: 16 },
        { nombre: 'Hawái9', paisId: 16 },
        { nombre: 'Idaho', paisId: 16 },
        { nombre: 'Illinois', paisId: 16 },
        { nombre: 'Indiana', paisId: 16 },
        { nombre: 'Iowa', paisId: 16 },
        { nombre: 'Kansas', paisId: 16 },
        { nombre: 'Kentucky', paisId: 16 },
        { nombre: 'Luisiana', paisId: 16 },
        { nombre: 'Maine', paisId: 16 },
        { nombre: 'Maryland', paisId: 16 },
        { nombre: 'Massachusetts', paisId: 16 },
        { nombre: 'Míchigan', paisId: 16 },
        { nombre: 'Minnesota', paisId: 16 },
        { nombre: 'Misisipi', paisId: 16 },
        { nombre: 'Misuri', paisId: 16 },
        { nombre: 'Montana', paisId: 16 },
        { nombre: 'Nebraska', paisId: 16 },
        { nombre: 'Nevada', paisId: 16 },
        { nombre: 'Nueva Jersey', paisId: 16 },
        { nombre: 'Nueva York', paisId: 16 },
        { nombre: 'Nuevo Hampshire', paisId: 16 },
        { nombre: 'Nuevo México', paisId: 16 },
        { nombre: 'Ohio', paisId: 16 },
        { nombre: 'Oklahoma', paisId: 16 },
        { nombre: 'Oregón', paisId: 16 },
        { nombre: 'Pensilvania', paisId: 16 },
        { nombre: 'Rhode Island', paisId: 16 },
        { nombre: 'Tennessee', paisId: 16 },
        { nombre: 'Texas', paisId: 16 },
        { nombre: 'Utah', paisId: 16 },
        { nombre: 'Vermont', paisId: 16 },
        { nombre: 'Virginia', paisId: 16 },
        { nombre: 'Virginia Occidental', paisId: 16 },
        { nombre: 'Washington', paisId: 16 },
        { nombre: 'Wisconsin', paisId: 16 },
        { nombre: 'Wyoming', paisId: 16 },
      ]
    )
  }
}