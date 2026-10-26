import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6PermisoUsoProps {
  anio: string;
  busqueda: string;
}

interface PermisoUso {
  tipoNorma: string;
  denominacion: string;
  nombreTitulo: string;
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
  enlaceModificacion: string;
  cantidadEnlacesModificacion?: number;
}

interface FilaPermisoUso {
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  descripcion: string;
  tieneEfectosGenerales?: string;
  nombreTitulo?: string;
  tipoNorma?: string;
  denominacion?: string;
  ultimaActualizacion?: string;
  enlaceModificacion?: string;
  cantidadEnlacesModificacion?: number;
}

const crearPermisosUso = (
  filas: FilaPermisoUso[],
  tipoNormaPorDefecto = 'Decretos Exentos',
  enlaceModificacionPorDefecto = 'Sin Modificaciones'
): PermisoUso[] =>
  filas.map(({
    numero,
    fecha,
    fechaPublicacion,
    descripcion,
    tieneEfectosGenerales = 'Sí',
    nombreTitulo = 'Otorga Permiso de Uso',
    tipoNorma = tipoNormaPorDefecto,
    denominacion = 'Permiso de Uso',
    ultimaActualizacion = 'Sin Modificaciones',
    enlaceModificacion = enlaceModificacionPorDefecto,
    cantidadEnlacesModificacion
  }) => ({
    tipoNorma,
    denominacion,
    nombreTitulo,
    numero,
    fecha,
    fechaPublicacion,
    tieneEfectosGenerales,
    ultimaActualizacion,
    descripcion,
    enlaceModificacion,
    cantidadEnlacesModificacion
  }));

const permisosUsoPorAnio: Record<string, PermisoUso[]> = {
  '2016': [
    { tipoNorma: 'Decretos Exentos', denominacion: 'Permiso de Uso', nombreTitulo: 'Pone Término a permiso', numero: '951', fecha: '05.04.2016', fechaPublicacion: '05.05.2016, Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: 'Sin Modificaciones', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A-7 DEL CENTRO COMERCIAL NEPTUNO', enlaceModificacion: 'Sin Modificaciones' },
    { tipoNorma: 'Decretos Exentos', denominacion: 'Permiso de Uso', nombreTitulo: 'Pone Término a permiso', numero: '943', fecha: '05.04.2016', fechaPublicacion: '05.05.2016, Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: 'Sin Modificaciones', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL 50-52 DEL CENTRO COMERCIAL NEPTUNO', enlaceModificacion: 'Sin Modificaciones' },
    { tipoNorma: 'Decretos Alcaldicios', denominacion: 'Permiso de Uso', nombreTitulo: 'Permiso de Estacionamiento Reservado', numero: '63', fecha: '27.01.2016', fechaPublicacion: '05.02.2016, Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: 'Sin Modificaciones', descripcion: "OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LA ESCUELA DE CONDUCTORES VIGO'S.", enlaceModificacion: 'Sin Modificaciones' },
    { tipoNorma: 'Decretos Exentos', denominacion: 'Permiso de Uso', nombreTitulo: 'Otorga Permiso de Uso', numero: '84', fecha: '11.01.2016', fechaPublicacion: '05.02.2016, Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '11.02.2016 09.02.2016', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO A SRA. MARIA PAVES, HUGO PRECIADO, ELECTROBAZAR MAURICIO CAYUN EIRL, SUSANA ROMERO, MANUEL HINOJOSA, VALDES & IRARRAZABAL IMPRESIONES LIMITADA Y INTEGRADOS CAPACITACION LIMITADA', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2 },
    { tipoNorma: 'Decretos Exentos', denominacion: 'Permiso de Uso', nombreTitulo: 'Pone Término a permiso', numero: '83', fecha: '11.01.2016', fechaPublicacion: '05.02.2016, Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '09.03.2016', descripcion: 'PONE TERMINO A PERMISOS DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO A LA SRA. ANGELA LEON Y ALICIA MUÑOZ - OTORGUESE EL PERMISO DE USO AL SR. MANUEL HINOJOSA Y SRA. SUSANA ROMERO', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2 },
    { tipoNorma: 'Decretos Alcaldicios', denominacion: 'Permiso de Uso', nombreTitulo: 'Permiso de Estacionamiento Reservado', numero: '2', fecha: '05.01.2016', fechaPublicacion: '05.02.2016, Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: 'Sin Modificaciones', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL "ESCORPION".', enlaceModificacion: 'Sin Modificaciones' }
  ],
  '2015': crearPermisosUso([
    { numero: '2821', fecha: '15.12.15', fechaPublicacion: '06.01.2016 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE JOHANNA RANCO MARVIL' },
    { numero: '2820', fecha: '15.12.15', fechaPublicacion: '06.01.2016 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO Y OTORGA EL PERMISO A DOÑA JUANA VALENZUELA MALDONADO' },
    { numero: '2298', fecha: '08.10.2015', fechaPublicacion: '06.11.2015 Página Web', descripcion: 'AUTORIZA PERMISO DE OCUPACION DE BNUP PARA INSTALACION Y FUNCIONAMIENTO DE CARPA CIRCO DANIEL VILCHES.' },
    { numero: '2285', fecha: '07.10.2015', fechaPublicacion: '06.11.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A CONSTRUCTORA ARCOTEC DOS LTDA, CONSTRUCTORA ARCOTEC TRES LTDA., TRANSPORTES KEME LTDA.' },
    { numero: '2249', fecha: '02.10.2015', fechaPublicacion: '06.11.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO LOCAL N°41 A NOMBRE DE ALVARO LAGO DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2236', fecha: '01.10.2015', fechaPublicacion: '06.11.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N°41 DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2230', fecha: '30.09.2015', fechaPublicacion: '07.10.2015 Página Web', nombreTitulo: 'Pone Término a permiso', ultimaActualizacion: '28.10.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N°A-31 A NOMBRE DEL SR. RAUL CONCHA HERMOSILLA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2157', fecha: '22.09.2015', fechaPublicacion: '07.10.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO LOCAL A NOMBRE DE RUBEN ARTURO LAGOS GARRIDO' },
    { numero: '2154', fecha: '22.09.2015', fechaPublicacion: '07.10.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO LOCAL A NOMBRE DE HUGO IVAN PRECIADO QUIÑONES' },
    { numero: '2153', fecha: '22.09.2015', fechaPublicacion: '07.10.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO LOCAL A NOMBRE DE FRANCISCO ALEJANDRO RUZ PEREZ' },
    { numero: '2152', fecha: '22.09.2015', fechaPublicacion: '07.10.2015 Página Web', ultimaActualizacion: '13.10.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'OTORGA PERMISO DE USO LOCAL A NOMBRE DE HORACIO ANTONIO QUINTANILLA PINTO' },
    { numero: '2151', fecha: '22.09.2015', fechaPublicacion: '07.10.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO LOCAL A NOMBRE DE ELECTRICIDAD INDUSTRIAL NESTOR GONZALEZ DIAZ' },
    { numero: '2143', fecha: '17.09.2015', fechaPublicacion: '07.10.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES N°21-22-23-24 DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '1815', fecha: '13.08.2015', fechaPublicacion: '06.09.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE SR. CLAUDIO VIDAL ROMERO' },
    { numero: '1813', fecha: '13.08.2015', fechaPublicacion: '06.09.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE ARIEL SEPULVEDA VIDAL' },
    { numero: '1812', fecha: '13.08.2015', fechaPublicacion: '06.09.2015 Página Web', nombreTitulo: 'Pone Término a permiso', ultimaActualizacion: '01.09.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE JAIME MARTINEZ ROJAS' },
    { numero: '1811', fecha: '13.08.2015', fechaPublicacion: '06.09.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE RICARDO MIGLIORELLI MEJIA' },
    { numero: '1810', fecha: '13.08.2015', fechaPublicacion: '06.09.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE JOSE MARIN ARRIAGA' },
    { numero: '1802', fecha: '13.08.2015', fechaPublicacion: '06.09.2015 Página Web', nombreTitulo: 'Pone Término a permiso', ultimaActualizacion: '23.09.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SR. HERNAN MERIÑO VIDAL' },
    { numero: '1478', fecha: '13.07.2015', fechaPublicacion: '06.08.2015 Página Web', ultimaActualizacion: '06.10.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° B-2 A NOMBRE DE JONATHAN ANTONIO CORTINEZ.' },
    { numero: '1477', fecha: '13.07.2015', fechaPublicacion: '06.08.2015 Página Web', ultimaActualizacion: '07.10.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° A-27 DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE D Y C CONTRATISTAS LIMITADA.' },
    { numero: '1453', fecha: '10.07.2015', fechaPublicacion: '06.08.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 155 DEL CENTRO COMERCIAL NEPTUNO A EMPRESAS TRANSPORTES KEME LTDA., CONSTRUCTORA ARCOTEC DOS LTDA., CONSTRUCTORA ARCOTEC TRES LTDA.' },
    { numero: '1393', fecha: '06.07.2015', fechaPublicacion: '06.08.2015 Página Web', ultimaActualizacion: '13.10.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SR. CESAR MARAMBIO BAHAMONDES' },
    { numero: '1331', fecha: '26.06.2015', fechaPublicacion: '06.07.2015 Página Web', ultimaActualizacion: '25.08.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'OTORGA PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO A 2DA AGRUPACION DE ARTESANOS DE LO PRADO' },
    { numero: '1193', fecha: '09.06.2015', fechaPublicacion: '06.07.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL KARINNA GONZALEZ WUTRICH, DEL CENTRO COMERCIAL Y MICROEMPRESARIAL NEPTUNO EXTENSION SAN PABLO.' },
    { numero: '1192', fecha: '09.06.2015', fechaPublicacion: '06.07.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A SOCIEDAD COMERCIAL PERGOM LTDA. DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '906', fecha: '11.11.2015', fechaPublicacion: '06.12.2015 Página Web', nombreTitulo: 'Otros Permisos', tipoNorma: 'Decretos Alcaldicios', denominacion: 'Patentes y Permisos', descripcion: 'OTORGA PERMISO DE USO PRECARIO A DON MIGUEL LAMILLA SALINAS' },
    { numero: '893', fecha: '23.04.2015', fechaPublicacion: '06.05.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SRA. JESSICA ESTER MARTINEZ SUAREZ' },
    { numero: '774', fecha: '09.04.2015', fechaPublicacion: '06.05.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DEL SR. RUBEN GONZALEZ MOLINA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '773', fecha: '09.04.2015', fechaPublicacion: '06.05.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE LA SRA. ROSA SALAMANCA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '769', fecha: '24.09.2015', fechaPublicacion: '06.10.2015 Página Web', tipoNorma: 'Decretos Alcaldicios', nombreTitulo: 'Otorga Permiso de Uso', descripcion: 'OTORGA PERMISO DE USO PRECARIO A EMPRESA "CONSTRUCTORA SANTA SORIA LIMITADA", EN LUGAR QUE INDICA.' },
    { numero: '752', fecha: '08.04.2015', fechaPublicacion: '06.05.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL A SRA. SANDRA MUÑOZ NUÑEZ, SERVICIOS GRAFICOS IMPRENTA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '751', fecha: '08.04.2015', fechaPublicacion: '06.05.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO LOCAL A SR. JORGE GARCIA VALENZUELA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '750', fecha: '08.04.2015', fechaPublicacion: '06.05.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL A SRA. ROSA LUISA SALAMANCA ZAGAL DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '601', fecha: '17.03.2015', fechaPublicacion: '06.04.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES A NOMBRE DE OSCAR GARCES GARCES, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '600', fecha: '17.03.2015', fechaPublicacion: '06.04.2015 Página Web', nombreTitulo: 'Pone Término a permiso', ultimaActualizacion: '18.05.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE RONEL MORALES VEAS DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '599', fecha: '17.03.2015', fechaPublicacion: '06.04.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE MARCOS MENESES GAJARDO, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '598', fecha: '17.03.2015', fechaPublicacion: '06.04.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A "CONSTRUCCIONES AVILA Y ZUÑIGA LTDA"' },
    { numero: '550', fecha: '12.03.2015', fechaPublicacion: '06.04.2015 Página Web', ultimaActualizacion: '21.07.2015', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'OTORGA PERMISO DE USO DE LOCALES QUE INDICA DEL CENTRO COMERCIAL NEPTUNO A INVERSIONES J. BERNHARDO Y CIA LTDA., TALLERES LITERARIOS URIEL LIMITADA.' },
    { numero: '550', fecha: '23.07.2015', fechaPublicacion: '06.08.2015 Página Web', nombreTitulo: 'Otros Permisos', tipoNorma: 'Decretos Alcaldicios', denominacion: 'Patentes y Permisos', descripcion: 'OTORGA PERMISO DE USO PRECARIO DE TERRENO UBICADO EN CALLE LOS TAMARINDOS N° 5401 COMUNA DE LO PRADO.' },
    { numero: '450', fecha: '15.06.2015', fechaPublicacion: '06.07.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES A NOMBRE DE LUIS VILLAR ARAYA' },
    { numero: '449', fecha: '15.06.2015', fechaPublicacion: '06.07.2015 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO A SRA. GUISSELL PERALTA VEGAS' },
    { numero: '381', fecha: '19.02.2015', fechaPublicacion: '06.03.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO AL SR. MARIO ALFARO MARIN' },
    { numero: '368', fecha: '16.02.2015', fechaPublicacion: '06.03.2015 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SRA. DIANA CALDERON' },
    { numero: '359', fecha: '15.05.2015', fechaPublicacion: '06.06.2015 Página Web', nombreTitulo: 'Otorga Permiso de Uso', tipoNorma: 'Decretos Alcaldicios', descripcion: 'OTORGA PERMISO DE USO PRECARIO A EMPRESA "ARCO ESTUDIO", EN EL LUGAR QUE SE INDICA.' },
    { numero: '280', fecha: '20.04.2015', fechaPublicacion: '06.05.2015 Página Web', nombreTitulo: 'Otros Permisos', tipoNorma: 'Decretos Alcaldicios', denominacion: 'Patentes y Permisos', descripcion: 'OTORGA PERMISO DE USO PRECARIO A EMPRESA "ASFALTOS VERGARA S.A.", EN AV. GENERAL BONILLA' },
    { numero: '243', fecha: '06.04.2015', fechaPublicacion: '06.05.2015 Página Web', nombreTitulo: 'Pone Término a permiso', tipoNorma: 'Decretos Alcaldicios', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES A NOMBRE DE SR. VICTOR MORALES ROJAS' },
    { numero: '242', fecha: '02.02.2015', fechaPublicacion: '06.03.2015 Página Web', nombreTitulo: 'Pone Término a permiso', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'PONE TERMINO A PERMISO DE USO LOCAL QUE SE INDICA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '241', fecha: '02.04.2015', fechaPublicacion: '06.05.2015 Página Web', nombreTitulo: 'Pone Término a permiso', tipoNorma: 'Decretos Alcaldicios', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES SR. LUIS TOLEDO LEPE DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '235', fecha: '01.04.2015', fechaPublicacion: '06.05.2015 Página Web', nombreTitulo: 'Pone Término a permiso', tipoNorma: 'Decretos Alcaldicios', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES SR. GARY GALVEZ MELLADO DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '230', fecha: '01.04.2015', fechaPublicacion: '06.05.2015 Página Web', tipoNorma: 'Decretos Alcaldicios', descripcion: 'OTORGA PERMISO DE USO CLUB DEPORTIVO Y RECREATIVO PARA EL ADULTO MAYOR "LAS PALOMITAS"' },
    { numero: '81', fecha: '14.01.2015', fechaPublicacion: '06.02.2015 Página Web', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'REGULARIZA PAGO PERMISO DE USO LOCAL ASIGNADO A LA SRA. NAYADETH SUAZO MORALES' }
  ]),
  '2014': crearPermisosUso([
    { numero: '3789', fecha: '31.12.14', fechaPublicacion: '06.01.2015 Página Web', tieneEfectosGenerales: 'No', descripcion: 'REGULARIZA PAGO PERMISO DE USO LOCAL ASIGNADO A LA SRA. MARCELA GONZALEZ ALCARRUZ' },
    { numero: '3788', fecha: '31.12.14', fechaPublicacion: '06.01.2015 Página Web', tieneEfectosGenerales: 'No', descripcion: 'REGULARIZA PERMISO DE USO DE LOCALES ASIGNADOS AL SR. GUILLERMO OLMOS CORTES' },
    { numero: '3693', fecha: '26.12.14', fechaPublicacion: '06.01.2015 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL NEPTUNO N°54-A-33 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '3676', fecha: '23.12.14', fechaPublicacion: '06.01.2015 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE SE INDICA DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '3555', fecha: '10.12.14', fechaPublicacion: '06.01.2015 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SRA. JACQUELINE VALDEBENITO.' },
    { numero: '3525', fecha: '09.12.14', fechaPublicacion: '06.01.2015 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISOS DE USO DE LOCALES QUE INDICA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '3506', fecha: '04.12.14', fechaPublicacion: '06.01.2015 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '23.12.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL 2-B, NEPTUNO N°631 DEL CENTRO COMERCIAL NEPTUNO DE LA SRA. XIMENA MIÑO.' },
    { numero: '3505', fecha: '04.12.14', fechaPublicacion: '06.01.2015 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '23.12.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCAL 15-N, NEPTUNO N°631 DEL CENTRO COMERCIAL NEPTUNO A LA SRA. MARIA VENEGAS.' },
    { numero: '3463', fecha: '28.11.14', fechaPublicacion: '06.12.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO A PERSONA QUE SE INDICA' },
    { numero: '3406', fecha: '25.11.14', fechaPublicacion: '06.12.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISOS DE USO DE LOCALES QUE INDICA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '3240', fecha: '11.11.14', fechaPublicacion: '06.12.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL "CLUB FARAON"' },
    { numero: '3221', fecha: '10.11.14', fechaPublicacion: '06.12.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE "COMERCIAL PROCORK LIMITADA" DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '3219', fecha: '10.11.14', fechaPublicacion: '06.12.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '26.12.14', enlaceModificacion: 'PDF', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SRA. DENISSE VARGAS CANCINO DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '3103', fecha: '30.10.14', fechaPublicacion: '06.11.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '11.05.2016', enlaceModificacion: 'PDF', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL "LOS AROMOS LTDA.", EN AVENIDA SAN PABLO FRENTE AL N° 8119.' },
    { numero: '3094', fecha: '30.10.14', fechaPublicacion: '06.11.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DEL SR. ENRIQUE MILLAN QUINTEROS DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2868', fecha: '13.10.14', fechaPublicacion: '06.11.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE CLAUDIO ENRIQUE ESCOBAR MORENO, CONSTRUCCION Y FABRICACION DE ESTRUCTURAS METALICAS E.I.R.L., DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2855', fecha: '10.10.14', fechaPublicacion: '06.11.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '28.10.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO A PERSONA QUE SE INDICA' },
    { numero: '2854', fecha: '10.10.14', fechaPublicacion: '06.11.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE LOCALES QUE SE INDICAN DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE SR. CRISTIAN CONTRERAS CORNEJO' },
    { numero: '2776', fecha: '02.10.14', fechaPublicacion: '06.11.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SRA. ABNA LUISA ROJO ZUÑIGA CENTRO COMERCIAL NEPTUNO' },
    { numero: '2676', fecha: '24.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO LOCAL A NOMBRE DE SR. LORENA SOLEDAD CORNEJO MORENO DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2674', fecha: '24.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCALES QUE INDICA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2673', fecha: '24.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCALES QUE INDICA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2554', fecha: '10.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SR. BERNARDO MARCELINO EMILIO CORTES' },
    { numero: '2553', fecha: '10.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SR. HERNAN CONTRERAS VILLA' },
    { numero: '2552', fecha: '10.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE COMERCIALIZADORA DE ACCESORIOS PARA VEHICULOS LIMITADA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2551', fecha: '10.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A DON DAVID OVALLE GARCIA' },
    { numero: '2547', fecha: '10.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DE SR. MARIA CASTRO ROA' },
    { numero: '2503', fecha: '08.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SR. HUGO BARRIGA SOTO' },
    { numero: '2492', fecha: '05.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SR. GABRIEL ARAVENA MENDEZ' },
    { numero: '2472', fecha: '03.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SR. RUBEN GONZALEZ MOLINA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2467', fecha: '02.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SR. WALDO SARMIENTO LOYOLA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2466', fecha: '02.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE OCUPACION DE B.N.U.P. PARA LA INSTALACION Y FUNCIONAMIENTO DE CARPA CIRCO DANIEL VILCHES.' },
    { numero: '2458', fecha: '02.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '24.09.14', enlaceModificacion: 'PDF', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES A NOMBRE DE SR. DAVID OVALLE GARCIA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2457', fecha: '02.09.14', fechaPublicacion: '06.10.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SR. SEBASTIAN ENCINA MELLADO DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2372', fecha: '25.08.14', fechaPublicacion: '06.09.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTOS RESERVADOS A VEHICULOS MUNICIPALES PERTENECIENTES A LA MUNICIPALIDAD DE CERRO NAVIA EN EL LUGAR QUE SE INDICA.' },
    { numero: '2360', fecha: '21.08.14', fechaPublicacion: '06.09.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCALES COMERCIALES "KATTY Y TELEPIZZA".' },
    { numero: '2285', fecha: '13.08.14', fechaPublicacion: '06.09.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCALES A NOMBRE DEL SR. JUAN CARLOS ANDRADE SOLIS DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2272', fecha: '12.08.14', fechaPublicacion: '06.09.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SR. SERGIO SALAS LEIVA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2250', fecha: '07.08.14', fechaPublicacion: '06.08.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '02.12.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE ARRIENDO DE LOCALES QUE SE INDICAN DEL CENTRO COMERCIAL Y MICROEMPRESARIAL NEPTUNO A JUAN ROCHA ALCANTARA, LUIS VILLAR ARAYA Y LUIS GALAZ RIVERA.' },
    { numero: '2219', fecha: '05.08.14', fechaPublicacion: '06.08.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DEL SR. VICTOR JORQUERA HERRERA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2195', fecha: '05.08.14', fechaPublicacion: '06.08.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SR. CRISTIAN CONTRERAS CORNEJO' },
    { numero: '2194', fecha: '05.08.14', fechaPublicacion: '06.08.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '03.10.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SRA. ROSA SALAMANCA ZAGAL' },
    { numero: '2192', fecha: '05.08.14', fechaPublicacion: '06.08.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES A NOMBRE DEL SR. GERMAN CORTES TAIBA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2129', fecha: '30.07.14', fechaPublicacion: '06.08.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SRA. JACQUELINE PEREZ CORONA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '1960', fecha: '10.07.14', fechaPublicacion: '06.08.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL "ESCUELA DE CONDUCTORES VERA AYLLUARDO".' },
    { numero: '1874', fecha: '07.07.14', fechaPublicacion: '06.08.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCAL ESTACION METRO SAN PABLO N° 16-0 A LA SRA. TERESA CAYUPAN CONA.' },
    { numero: '1728', fecha: '27.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO AL CONTRATO DE USO DE LOCAL N°174 DEL CENTRO COMERCIAL NEPTUNO SUSCRITO CON DON JOSE QUINTEROS BERRIOS.' },
    { numero: '1666', fecha: '25.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Deja sin efecto', ultimaActualizacion: 'Sin Modificaciones', descripcion: 'DEJA SIN EFECTO DECRETO ALCALDICIO N°1423 DE FECHA 30 DE MAYO DE 2014' },
    { numero: '1541', fecha: '12.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '09.07.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCALES N°25, 27, 82, 84 Y 86 DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE FRANCISCO FUENTES MARTINEZ.' },
    { numero: '1540', fecha: '12.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '09.07.14', enlaceModificacion: 'PDF', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO AL CONTRATO DE USO DE LOCALES N°552, 124, 125, 126, 127, 128, 129 Y 130 DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE FRANCISCO FUENTES MARTINEZ.' },
    { numero: '1518', fecha: '10.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCAL COMERCIAL NEPTUNO A SRA. MARISOL MENESES COLARTE' },
    { numero: '1487', fecha: '09.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Deja sin efecto', descripcion: 'DEJA SIN EFECTO OTORGAMIENTO PERMISO DE USO LOCALES CENTRO COMERCIAL NEPTUNO N°S 180-Y 182 ASIGNADOS A LA SRA. ANDREA MARINKOVICH CHACON' },
    { numero: '1476', fecha: '06.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO SOBRE INSTALACIONES DEPORTIVAS DEL INMUEBLE UBICADO EN CALLE REINA MAUD N° 6125 AL SINDICATO DE TRABAJADORES INDEPENDIENTES TAXISTAS NEPTUNO-LO PRADO Y AL SINDICATO DE TRABAJADORES INDEPENDIENTES TAXISTAS ESTACION SAN PABLO - LO PRADO.' },
    { numero: '1474', fecha: '06.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE ARRIENDO DE LOCAL A-30 DEL CENTRO COMERCIAL Y MICROEMPRESARIAL NEPTUNO, A EMPRESA ENPROMAQ MAQUINARIAS LTDA.' },
    { numero: '1473', fecha: '06.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE ARRIENDO DE LOCAL A-10 DEL CENTRO COMERCIAL Y MICROEMPRESARIAL NEPTUNO, A DON ARIEL OSVALDO SEPULVEDA GONZALEZ.' },
    { numero: '1472', fecha: '06.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE ARRIENDO DE LOCAL A-23 DEL CENTRO COMERCIAL Y MICROEMPRESARIAL NEPTUNO, A DON JOSE LUIS MARIN ARRIAGADA.' },
    { numero: '1468', fecha: '05.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '13.11.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SR. HECTOR LIRA MADRID' },
    { numero: '1464', fecha: '05.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '10.07.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DE SR. LUIS MUÑOZ GUERRERO' },
    { numero: '1462', fecha: '05.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DE SR. GARY ALBERTO GALVEZ MELLADO DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '1452', fecha: '03.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '27.06.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SRA. MARIO ALFARO MARIN' },
    { numero: '1451', fecha: '03.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '27.06.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SRA. JOHANNA RANCO MARVIL' },
    { numero: '1450', fecha: '03.06.14', fechaPublicacion: '06.07.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '05.08.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO A SR. JAVIER GOMEZ MERINO' },
    { numero: '1423', fecha: '30.05.14', fechaPublicacion: '06.06.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '25.06.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO A SRA. NADIA ROMAN SILVA' },
    { numero: '1419', fecha: '30.05.14', fechaPublicacion: '06.06.2014 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '31.12.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO A SR. CARLOS ARANGUIZ GONZALEZ' },
    { numero: '1222', fecha: '06.05.14', fechaPublicacion: '06.06.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A DOÑA JUBICA DURAN OLGUIN' },
    { numero: '1193', fecha: '02.05.14', fechaPublicacion: '06.06.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LAS AGRUPACIONES DE TAXIS "ASCOTAX" Y "GENESIS" EN LA BAHIA EXISTENTE, ADYACENTE A LA ESTACION METRO PAJARITOS.' },
    { numero: '1035', fecha: '15.04.14', fechaPublicacion: '06.05.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCALES A NOMBRE DEL SR. VICTOR MORALES ROJAS CENTRO COMERCIAL NEPTUNO' },
    { numero: '1034', fecha: '15.04.14', fechaPublicacion: '06.05.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SR. VICTOR MORALES ROJAS LOCAL A-30' },
    { numero: '1033', fecha: '15.04.14', fechaPublicacion: '06.05.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCAL NOMBRE DE HERRAMIENTAS DEL MAESTRO DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '966', fecha: '09.04.14', fechaPublicacion: '25.04.2014 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO LOCAL A NOMBRE DE SR. GERARDO PINO ORELLANA DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '965', fecha: '09.04.14', fechaPublicacion: '25.04.2014 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A NOMBRE DE SRA. ROSELINA GALDAMES AHUMADA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '944', fecha: '08.04.14', fechaPublicacion: '25.04.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '10.04.14', enlaceModificacion: 'PDF', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A ESCUELA ESPECIAL DE LENGUAJE "MI MUNDO EN PALABRAS"' },
    { numero: '943', fecha: '08.04.14', fechaPublicacion: '25.04.2014 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO LOCAL COMERCIAL "MAR Y TIERRA"' },
    { numero: '929', fecha: '07.04.14', fechaPublicacion: '25.04.2014 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL "LA TOCATA"' },
    { numero: '834', fecha: '28.03.14', fechaPublicacion: '06.04.2014 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE INDICA DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE SRA. MARIA CASEO MENESES' },
    { numero: '793', fecha: '25.03.14', fechaPublicacion: '06.04.2014 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL ADRENALINA DISCOTEQUE' },
    { numero: '789', fecha: '25.03.14', fechaPublicacion: '06.04.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '07.04.14', enlaceModificacion: 'PDF', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO A SR. CRISTIAN JAMMET' },
    { numero: '730', fecha: '18.03.14', fechaPublicacion: '06.04.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '28.03.14', enlaceModificacion: 'PDF', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL SR. GERMAN CORTES TAIBA' },
    { numero: '728', fecha: '18.03.14', fechaPublicacion: '06.04.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE USO SOBRE ESPACIO CULTURAL Y DEPORTIVO VICENTE RAVIO A LAS ORGANIZACIONES QUE INDICA.' },
    { numero: '717', fecha: '19.03.14', fechaPublicacion: '06.04.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '14.04.14', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL PERSA NEPTUNO' },
    { numero: '545', fecha: '25.02.14', fechaPublicacion: '06.03.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE USO AL SR. CLAUDIO TAPIA BAZAES' },
    { numero: '518', fecha: '21.02.14', fechaPublicacion: '06.03.2014 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A COMERCIAL TORRES Y VIDAL LIMITADA EL CAMPESINO' },
    { numero: '476', fecha: '18.02.14', fechaPublicacion: '06.03.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '10.03.14', enlaceModificacion: 'PDF', descripcion: 'Otorga permiso de uso de locales del centro comercial neptuno a nombre de sr. Luis Millanao Carrasco' },
    { numero: '454', fecha: '14.02.14', fechaPublicacion: '06.03.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'Otorga permiso de uso a empresa buses metropolitanos S.A.' },
    { numero: '370', fecha: '05.02.14', fechaPublicacion: '06.03.2014 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'Pone término a permiso de uso de local a nombre de sr. Waldo Cortes Muñoz' },
    { numero: '363', fecha: '04.02.14', fechaPublicacion: '06.03.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'Otorga permiso de uso de los locales del centro comercial neptuno a nombre de sra. Soledad Muñoz Núñez' },
    { numero: '305', fecha: '31.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '21.03.14', enlaceModificacion: 'PDF', nombreTitulo: 'Regulariza Permiso de uso', descripcion: 'Regulariza ocupacion de locales del Centro Comercial Persa Neptuno correspondiente a la sra. Marisol Meneses Colarte.' },
    { numero: '251', fecha: '23.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '07.07.14', enlaceModificacion: 'PDF', nombreTitulo: 'Pone Término a permiso', descripcion: 'Pone término a permiso de uso de local a nombre de sra. Jacqueline Diaz Diaz' },
    { numero: '230', fecha: '23.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'Otorga permiso de uso de locales del Centro Comercial Persa Neptuno a nombre de Fabiola Allende Acuña' },
    { numero: '131', fecha: '17.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '27.06.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 3, descripcion: 'Otorga permiso de uso de local del centro comercial neptuno a empresa Jorge Haichels y Arquitectos Limitada' },
    { numero: '130', fecha: '17.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '27.06.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 3, descripcion: 'Otorga permiso de uso de local del centro comercial neptuno a empresa inversiones e inmobiliaria a. J. Limitada' },
    { numero: '129', fecha: '17.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '27.06.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 3, descripcion: 'Otorga permiso de uso de locales del centro comercial neptuno a nombre de empresa Constructora Habitec Limitada' },
    { numero: '128', fecha: '17.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '27.06.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 3, descripcion: 'Otorga permiso de uso de locales a Haichels y Jaime Limitada' },
    { numero: '97', fecha: '15.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'Otorga permiso de estacionamiento reservado a sra. Ninoska Ibarra Garcia' },
    { numero: '78', fecha: '13.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '29.09.14', enlaceModificacion: 'PDF', descripcion: 'Otorga permiso de uso de locales que indica, del centro comercial neptuno' },
    { numero: '50', fecha: '13.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'Otorga permiso de uso de los locales del Centro Comercial Persa Neptuno a sr. Victor Jorquera Herrera' },
    { numero: '44', fecha: '10.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'Otorga permiso de uso de local del centro comercial Neptuno a sra. Gilda Roman' }
  ], 'Decreto'),
  '2013': crearPermisosUso([
    { numero: '206', fecha: '15.01.13', fechaPublicacion: '01.03.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL, DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE LA SRA. MARIA DIAZ VELIZ' },
    { numero: '353', fecha: '25.01.13', fechaPublicacion: '01.03.2013 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE USO LOCAL N° 57 DEL CENTRO COMERCIAL NEPTUNO A DOÑA ISOLINA DEL CARMEN LARA CUEVAS.' },
    { numero: '524', fecha: '06.02.13', fechaPublicacion: '01.03.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '21.02.13', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2, nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE ESTACIONAMIENTO RESERVADO OTORGADO A LA AGRUPACION GREMIAL METROTAXIS LAS REJAS NOR-ORIENTE' },
    { numero: '971', fecha: '03.04.13', fechaPublicacion: '05.04.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N° 19-A DEL CENTRO COMERCIAL NEPTUNO OTORGADO A SOCIEDAD IMPRESORA LIMITADA.' },
    { numero: '997', fecha: '03.04.13', fechaPublicacion: '05.04.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISOS DE USO DE LOCALES N° 342, 343 Y 344 OTORGADO A DON MARIO AGUILAR ELGUEDA; 5-E OTORGADO A DON BERNARDO HERNANDEZ; 152 Y 154 OTORGADO A EMPRESA TRANSPORTES PASAJEROS PADHUEL.' },
    { numero: '1302', fecha: '08.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL CENTRO COMERCIAL NEPTUNO A SRA. IRMA CASANOVA NICLOUSE' },
    { numero: '1303', fecha: '08.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL CENTRO COMERCIAL NEPTUNO A SRA. EUGENIA PEREZ SAN JUAN' },
    { numero: '1304', fecha: '08.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL CENTRO COMERCIAL NEPTUNO AL SR. IVAN PONCE' },
    { numero: '1305', fecha: '08.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL CENTRO COMERCIAL NEPTUNO AL SR. EDGARDO AGUILERA RISCO' },
    { numero: '1306', fecha: '08.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL CENTRO COMERCIAL NEPTUNO A SRA. EDITH VARGAS MARTINEZ' },
    { numero: '1307', fecha: '08.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL CENTRO COMERCIAL NEPTUNO A SRA. NATALIA GARCIA MEDINA' },
    { numero: '1308', fecha: '08.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL CENTRO COMERCIAL NEPTUNO AL SR. RAUL CONCHA HERMOSILLA A CONTAR DEL 31 DE MARZO DE 2013' },
    { numero: '1309', fecha: '08.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL CENTRO COMERCIAL NEPTUNO AL SR. OSCAR CABELLO RIVILLO A CONTAR DEL 31 DE MARZO DE 2013' },
    { numero: '1482', fecha: '24.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '26.07.2013', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO A SR. HUGO BARRIGA SOTO' },
    { numero: '1483', fecha: '24.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '05.08.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2, descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO. SR. ANDRES GUAJARDO PINTO' },
    { numero: '1484', fecha: '24.05.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '23.07.2013', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2, descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO A SRA. NANCY ORELLANA TORRES' },
    { numero: '1591', fecha: '05.06.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL CENTRO COMERCIAL NEPTUNO AL SR. MAURICIO SERRANO ROLANDO' },
    { numero: '1592', fecha: '05.06.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '06.06.13', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO AL SR. KENNY TAPIA BRAVO' },
    { numero: '1660', fecha: '11.06.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '29.01.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 3, nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO LOCAL SRA. MARIA PEREZ GATICA' },
    { numero: '1661', fecha: '11.06.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO LOCAL A NOMBRE DE SR. ALBERTO MAULEN RODRIGUEZ' },
    { numero: '1679', fecha: '12.06.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO LOCAL DE SR. MIGUEL QUIÑONES DEVIA' },
    { numero: '1680', fecha: '12.06.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO LOCAL DE SR. RICARDO ESPINOZA DIAZ' },
    { numero: '1681', fecha: '12.06.13', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '14.04.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2, descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE SRA. MARIA SOTO PEREZ' },
    { numero: '1769', fecha: '20.06.2013', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '03.07.2013', enlaceModificacion: 'Sin Enlace', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO EMPRESA SOCIEDAD UNION MAGISTER S.A.' },
    { numero: '1831', fecha: '28.06.2013', fechaPublicacion: '02.07.2013 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1832', fecha: '28.06.2013', fechaPublicacion: '02.07.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '10.07.2013', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1933', fecha: '28.06.2013', fechaPublicacion: '02.07.2013 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1908', fecha: '08.07.2013', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE SE INDICA, DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1909', fecha: '08.07.2013', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE SE INDICA, DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2001', fecha: '18.07.2013', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO LOCAL QUE INDICA, DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2027', fecha: '23.07.2013', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO LOCAL QUE SE INDICA, DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2173', fecha: '06.08.2013', fechaPublicacion: '09.08.2013 Página Web', tieneEfectosGenerales: 'Sí', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO LOCAL QUE SE INDICA, DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2277', fecha: '20.08.2013', fechaPublicacion: '22.08.2013 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2315', fecha: '21.08.2013', fechaPublicacion: '22.08.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '20.11.13', enlaceModificacion: 'PDF', nombreTitulo: 'Autoriza Funcionamiento', descripcion: 'AUTORIZASE EL FUNCIONAMIENTO DE FONDA DE FIESTAS PATRIAS EN RECINTO MUNICIPAL AÑO 2013.' },
    { numero: '2368', fecha: '23.08.2013', fechaPublicacion: '06.09.2013 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Autoriza Funcionamiento', descripcion: 'MODIFICA DECRETO ALCALDICIO N°2315 DE FECHA 21 AGOSTO DE 2013.' },
    { numero: '2387', fecha: '26.08.2013', fechaPublicacion: '06.09.2013 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2390', fecha: '26.08.2013', fechaPublicacion: '06.09.2013 Página Web', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE USO DE LOCALES CENTRO COMERCIAL NEPTUNO' },
    { numero: '2546', fecha: '11.09.13', fechaPublicacion: '06.10.2013 Página Web', tieneEfectosGenerales: 'No', descripcion: 'Otorga permiso de uso de local del centro comercial neptuno a sra. Diana Bacache Farias.' },
    { numero: '2553', fecha: '12.09.13', fechaPublicacion: '06.10.2013 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: 'Sin Modificaciones', enlaceModificacion: 'PDF', nombreTitulo: 'Pone Término a permiso', descripcion: 'Pone termino a permiso de uso de local n° a - 34 del centro comercial neptuno a tecnologia y desarrollo industrial ltda.' },
    { numero: '2586', fecha: '16.09.13', fechaPublicacion: '06.10.2013 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '14.01.14', enlaceModificacion: 'PDF', nombreTitulo: 'Permiso de Estacionamiento Reservado', descripcion: 'Asigna estacionamiento reservado para ferreteria "ricky rincon" en avenida san pablo frente al N° 6479.' },
    { numero: '2641', fecha: '25.09.13', fechaPublicacion: '06.10.2013 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '26.09.13', enlaceModificacion: 'PDF', descripcion: 'Otorga permiso de uso de local N° a-34 a don ruben gonzalez molina.' },
    { numero: '2937', fecha: '25.11.13', fechaPublicacion: '06.12.2013 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '03.01.14', enlaceModificacion: 'PDF', nombreTitulo: 'Permiso de uso de estacionamiento', descripcion: 'Otorga permiso de estacionamiento reservado a camas pigal spa.' },
    { numero: '3277', fecha: '30.12.13', fechaPublicacion: '06.01.2014 Página Web', tieneEfectosGenerales: 'No', descripcion: 'Otorga permiso de uso de locales del centro comercial neptuno' },
    { numero: '3286', fecha: '30.12.13', fechaPublicacion: '06.01.2014 Página Web', tieneEfectosGenerales: 'No', nombreTitulo: 'Pone Término a permiso', descripcion: 'Pone termino a permiso de uso de local a nombre de sr. Eduardo silva lazcano centro comercial neptuno' }
  ], 'Decreto', 'Sin Enlace'),
  '2012': crearPermisosUso([
    { numero: '336', fecha: '26.01.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '338', fecha: '26.01.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '340', fecha: '26.01.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '341', fecha: '26.01.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '342', fecha: '26.01.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE INDICA, DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '385', fecha: '31.01.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '852', fecha: '05.04.12', fechaPublicacion: 'Página Web', ultimaActualizacion: '16.05.12', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES N° 15, 4, 2 Y 21 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '907', fecha: '09.04.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO AL CLUB ADULTO MAYOR "HAY LOS HIJOS DE SAN GABRIEL" DE TERRENO UBICADO EN LOS CLARINES N° 5620.' },
    { numero: '1126', fecha: '03.05.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO Y ADMINISTRACION DE CANCHA A LA JUNTA DE VECINOS N° 2-C VILLA LA RECONQUISTA.' },
    { numero: '1210', fecha: '14.05.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N° A-15 DEL CENTRO COMERCIAL NEPTUNO, A NOMBRE DEL SR. JAIME LARRAIN RIVERA.' },
    { numero: '1632', fecha: '25.06.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° 342, 343 Y 344 OTORGADO A NOMBRE DE MONICA GALARCE ROJAS.' },
    { numero: '1633', fecha: '25.06.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES N° 342, 343 Y 344 DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE MARIO ANTONIO AGUILAR ELGUEDA.' },
    { numero: '1657', fecha: '26.06.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'DECLARA TERMINO DE CONTRATO DE ARRENDAMIENTO POR VENCIMIENTO DE PLAZO CON EMPRESA SMARTCOM S.A., HOY CLARO S.A.' },
    { numero: '1754', fecha: '11.07.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DEL CASINO DE LA CASA DE LA CULTURA PARA EL USO DE UNA CAFETERIA A DON ERICO OLIVOS CACERES.' },
    { numero: '1787', fecha: '13.07.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL A DOÑA MARCELA GONZALEZ ALCARRUZ.' },
    { numero: '1788', fecha: '13.07.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO SUSCRITO CON LA SRA. MARANELA ASTETE SANCHEZ.' },
    { numero: '1790', fecha: '13.07.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A USO DE LOCAL A-25 DEL CENTRO COMERCIAL NEPTUNO SUSCRITO CON LA SRA. GENOVEVA MEZA GAETE.' },
    { numero: '1791', fecha: '13.07.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A USO DE LOCAL A-34 DEL CENTRO COMERCIAL NEPTUNO SUSCRITO CON EL SR. IVAN GUAIQUANTE ORTEGA.' },
    { numero: '1864', fecha: '25.07.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° A-25 DEL CENTRO COMERCIAL NEPTUNO A LA SRA. LORETO DEL PILAR CAMPOS PADILLA.' },
    { numero: '1999', fecha: '06.08.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL A-34 DEL CENTRO COMERCIAL PERSA NEPTUNO A TECNOLOGIA Y DESARROLLO INDUSTRIAL LTDA.' },
    { numero: '2005', fecha: '06.08.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DEL LOCAL A-15 DEL CENTRO COMERCIAL PERSA NEPTUNO A DON OSCAR GARCES GARCES.' },
    { numero: '2098', fecha: '10.08.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° A-11 DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '2101', fecha: '10.08.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO COMPARTIDO DE TERRENO UBICADO EN GENERAL BONILLA N° 6.500 A LAS ASOCIACIONES INDIGENAS QUE INDICAN.' },
    { numero: '2130', fecha: '13.08.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2303', fecha: '30.08.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° A-7, A COMERCIALIZADORA DE ACCESORIOS PARA VEHICULOS LIMITADA, DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2416', fecha: '14.09.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES ESTACION METRO SAN PABLO A PERSONAS QUE INDICAN' },
    { numero: '2736', fecha: '26.10.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DEL SR. RICARDO ESPINOZA DIAZ A CONTAR DEL 31 DE OCTUBRE DE 2012 DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '2755', fecha: '31.10.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL METRO SAN PABLO A-1, DEL CENTRO COMERCIAL NEPTUNO, A NOMBRE DEL SR. ELI ALZOCA GARUARDO, A CONTAR DEL 31 DE OCTUBRE DE 2012' },
    { numero: '2760', fecha: '05.11.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL ESTACION DE METRO SAN PABLO, DE ACUERDO A DECRETO ALCALDICIO N° 1391 DE FECHA 27 DE JULIO DE 2012 A NOMBRE DEL SR. LUIS VILCANCURA ACUÑA' },
    { numero: '2796', fecha: '08.11.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 6, ESTACION METRO SAN PABLO, DE ACUERDO A DECRETO ALCALDICIO N° 1391 DE FECHA 27 DE JULIO DE 2012.' },
    { numero: '2797', fecha: '08.11.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° 278, 279, 280 Y 281 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2871', fecha: '21.11.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL METRO SAN PABLO 8-H A SRA. RAQUEL FAUNDEZ BECERRA A CONTAR DEL 01 DE ABRIL DE 2011' },
    { numero: '2884', fecha: '21.11.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL DE ESTACION DEL METRO A SRA. ADRIANA HENRIQUEZ HENRIQUEZ A CONTAR DEL 01 DE SEPTIEMBRE DE 2012' },
    { numero: '2898', fecha: '22.11.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2939', fecha: '27.11.12', fechaPublicacion: 'Página Web', ultimaActualizacion: '31.01.13', enlaceModificacion: 'PDF', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A CONTAR DEL 15 DE ABRIL DE 2011 A NOMBRE DEL SR. MARCOS TOLOSA MORALES' },
    { numero: '3019', fecha: '06.12.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '3020', fecha: '06.12.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL OSCAR GARCES GARCES DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '3050', fecha: '11.12.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° 114 Y 116 DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DE LA SRA. EDITH VARGAS MARTINEZ.' },
    { numero: '3051', fecha: '11.12.12', fechaPublicacion: 'Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N° 1 A NOMBRE DE LA SRA. DORIS ALBORNOZ ARAYA' },
    { numero: '3053', fecha: '11.12.12', fechaPublicacion: 'Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '3160', fecha: '20.12.12', fechaPublicacion: 'Página Web', ultimaActualizacion: '30.08.13', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2, descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO, SR. CLAUDIO ESCOBAR MORENO' },
    { numero: '3229', fecha: '31.12.12', fechaPublicacion: 'Página Web', ultimaActualizacion: '24.05.13', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2, descripcion: 'OTORGA PERMISO DE USO DE LOCALES ESTACION DE METRO SAN PABLO, DE ACUERDO A SORTEO REALIZADO CON FECHA 04 DE OCTUBRE DE 2012.' }
  ], 'Decreto', 'Sin Enlaces'),
  '2011': crearPermisosUso([
    { numero: '40', fecha: '10.01.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '73', fecha: '11.01.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N° 219 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '127', fecha: '17.01.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL PERSA NEPTUNO Y MICROEMPRESARIAL NEPTUNO.' },
    { numero: '146', fecha: '20.01.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° 78 - 80 DEL CENTRO COMERCIAL PERSA NEPTUNO OTORGADO A LA SRA. DINA MENESES COLARTE.' },
    { numero: '167', fecha: '21.01.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES ESTACION DE METRO SAN PABLO, DE ACUERDO A DECRETO ALCALDICIO N° 1391 DE FECHA 27 DE JULIO DE 2010.' },
    { numero: '221', fecha: '02.02.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES N° 78 - 80 DEL CENTRO COMERCIAL NEPTUNO A LA SRA. CAROLINA LETELIER GONZALEZ.' },
    { numero: '222', fecha: '02.02.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES N° A - 15 A DON JAIME LARRAIN RIVERA Y A - 30 A DON VICTOR MORALES ROJAS DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '334', fecha: '17.02.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES ESTACION DE METRO SAN PABLO, DE ACUERDO A DECRETO ALCALDICIO N° 1391 DE FECHA 27 DE JULIO DE 2010.' },
    { numero: '524', fecha: '11.03.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL A - 25 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '525', fecha: '11.03.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL A - 8 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '526', fecha: '11.03.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N° 15 Y 16 DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '527', fecha: '11.03.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N° A - 1 DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '616', fecha: '28.03.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL 5 - E DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '700', fecha: '05.04.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO QUE SE INDICAN A PERSONAS QUE SE INDIVIDUALIZAN.' },
    { numero: '813', fecha: '15.04.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL 221 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '814', fecha: '15.04.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES A-3 Y A-24 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '815', fecha: '15.04.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL 221 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '975', fecha: '11.05.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL PERSA NEPTUNO A PERSONAS QUE SE INDICA.' },
    { numero: '976', fecha: '11.05.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL PERSA NEPTUNO A PERSONAS QUE SE INDICA.' },
    { numero: '977', fecha: '11.05.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL PERSA NEPTUNO A PERSONAS QUE SE INDICA.' },
    { numero: '978', fecha: '11.05.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL PERSA NEPTUNO A PERSONAS QUE SE INDICA.' },
    { numero: '979', fecha: '11.05.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° 180, 182, 184 Y 186, DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '980', fecha: '11.05.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° 20 Y 22, DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '984', fecha: '11.05.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL PERSA NEPTUNO A PERSONAS QUE SE INDICA.' },
    { numero: '997', fecha: '16.05.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 31 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '998', fecha: '16.05.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 223 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1126', fecha: '01.06.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES N° 227, 229 Y 230 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1127', fecha: '01.06.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DEL LOCAL N° 15 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1134', fecha: '02.06.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N° 227 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1137', fecha: '02.06.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES N° 113 Y 115 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1154', fecha: '03.06.11', fechaPublicacion: '03.05.2013 Página Web', ultimaActualizacion: 'Sin Modificaciones', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'OTORGA PERMISO DE USO DE LOCALES ESTACION DE METRO SAN PABLO, SORTEO SANCIONADO MEDIANTE DECRETO ALCALDICIO N° 61 DE FECHA 31 DE MARZO DE 2011.' },
    { numero: '1271', fecha: '15.06.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 4 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '1286', fecha: '16.06.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOS LOCALES N° 278, 279, 280 Y 281 DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '1360', fecha: '30.06.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO A LA JUNTA DE VECINOS N° 18 "VILLA METROPOLITANA".' },
    { numero: '1453', fecha: '08.07.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 19 DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '1454', fecha: '08.07.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 23 DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '1455', fecha: '08.07.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 07 DEL CENTRO COMERCIAL NEPTUNO' },
    { numero: '1560', fecha: '27.07.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N° 13 DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '1561', fecha: '27.07.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 13 DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '1734', fecha: '16.08.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGASE PERMISO DE USO DE LOCAL N°19 DEL CENTRO COMERCIAL NEPTUNO, A JJM IMPRESORES LTDA.' },
    { numero: '1735', fecha: '16.08.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGASE PERMISO DE USO DE LOCAL N° 31 DEL CENTRO COMERCIAL NEPTUNO, A DON RAUL CONCHA HERMOSILLA' },
    { numero: '1736', fecha: '16.08.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGASE PERMISO DE USO DE LOCAL N° 39 DEL CENTRO COMERCIAL NEPTUNO, A DON MIGUEL QUIÑONEZ DEVIA..' },
    { numero: '2035', fecha: '15.09.11', fechaPublicacion: '03.05.2013 Página Web', ultimaActualizacion: '26.07.2013', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2, nombreTitulo: 'Estacionamientos Reservados', descripcion: 'ASIGNA TRES ESTACIONAMIENTOS RESERVADOS EN AVENIDA SAN PABLO FRENTE AL N° 6019, PARA LOCAL COMERCIAL "ECLIPSE TOTAL", REPRESENTADA POR EL SR. GUSTAVO ROJAS RODRIGUEZ.' },
    { numero: '2242', fecha: '12.10.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES N° 278, 279, 280 Y 281 DEL CENTRO COMERCIAL NEPTUNO A SRA. EUGENIA PEREZ SAN JUAN.' },
    { numero: '2243', fecha: '12.10.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES N° 20, 21 Y 22 DEL CENTRO COMERCIAL NEPTUNO A DON GABRIEL ARAVENA MENDEZ.' },
    { numero: '2244', fecha: '12.10.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 88 DEL CENTRO COMERCIAL NEPTUNO A DON IVAN GUAIQUANTE ORTEGA.' },
    { numero: '2245', fecha: '12.10.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 34 DEL CENTRO COMERCIAL NEPTUNO A DON IVAN GUAIQUANTE ORTEGA.' },
    { numero: '2254', fecha: '13.10.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE BIEN MUNICIPAL A LA AGRUPACION DE CONDUCTORES PROFESIONALES DE CHILE A.G., EN ESPACIO UBICADO EN BANDEJON CENTRAL ENTRE AVDA. LIBERTADOR BDO. O\'HIGGINS Y AVDA. ECUADOR.' },
    { numero: '2417', fecha: '02.11.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES N° 25, 27 Y 29 DEL CENTRO COMERCIAL NEPTUNO A DON OSCAR CABELLO RIVILLO.' },
    { numero: '2599', fecha: '24.11.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2600', fecha: '24.11.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2601', fecha: '24.11.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2652', fecha: '01.12.11', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO A PERSONA QUE SE INDICA SR. HERNAN CONTRERAS VILLA..' },
    { numero: '2793', fecha: '10.12.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2794', fecha: '10.12.11', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2795', fecha: '10.12.11', fechaPublicacion: '03.05.2013 Página Web', ultimaActualizacion: '17.04.13', enlaceModificacion: 'PDF', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.' }
  ], 'Decreto', 'Sin Enlaces'),
  '2010': crearPermisosUso([
    { numero: '23', fecha: '11.01.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO, A PERSONAS QUE SE INDICAN.' },
    { numero: '153', fecha: '22.01.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO, A PERSONAS QUE SE INDICAN.' },
    { numero: '176', fecha: '26.01.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES QUE INDICA DEL CENTRO COMERCIAL NEPTUNO A LA SRA. JACQUELINE DIAZ DIAZ.' },
    { numero: '198', fecha: '27.01.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES QUE INDICA DEL CENTRO COMERCIAL NEPTUNO AL SR. GERARDO CORVALAN GARRIDO.' },
    { numero: '289', fecha: '05.02.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES QUE INDICA DEL CENTRO COMERCIAL NEPTUNO A LA SRA. ANDREA MUÑOZ LEON.' },
    { numero: '569', fecha: '23.03.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A-5 DEL CENTRO COMERCIAL NEPTUNO A CONTAR DEL 28 DE FEBRERO DE 2010.' },
    { numero: '570', fecha: '23.03.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '616', fecha: '26.03.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '817', fecha: '23.04.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES QUE INDICA DEL CENTRO COMERCIAL NEPTUNO, A PERSONAS QUE SE INDICAN.' },
    { numero: '820', fecha: '23.04.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL A-7 DEL CENTRO COMERCIAL NEPTUNO A CONTAR DEL 23 DE ABRIL DE 2010.' },
    { numero: '830', fecha: '29.04.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO A UNIDAD VECINAL N° 20 "PADRE ALBERTO HURTADO".' },
    { numero: '886', fecha: '05.05.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO, A PERSONAS QUE SE INDICAN.' },
    { numero: '1344', fecha: '13.07.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO, A PERSONAS QUE SE INDICAN.' },
    { numero: '1457', fecha: '05.08.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES N° 37 Y 38 DEL CENTRO COMERCIAL NEPTUNO A LA SRA. GILDA ROMAN ROMAN.' },
    { numero: '1521', fecha: '12.08.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DEL LOCAL N° 140 DEL CENTRO COMERCIAL NEPTUNO AL SR. JORGE ARIEL ARANGUIZ GUAJARDO.' },
    { numero: '1522', fecha: '12.08.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES 13 Y 14 DEL CENTRO COMERCIAL NEPTUNO A CONTAR DEL 31 DE MAYO DE 2010.' },
    { numero: '1528', fecha: '13.08.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° 333 Y 339 DEL CENTRO COMERCIAL NEPTUNO DEL SR. GUILLERMO GUTIERREZ JORDAN.' },
    { numero: '1735', fecha: '15.09.10', fechaPublicacion: '03.05.2013 Página Web', ultimaActualizacion: '12.06.13', enlaceModificacion: 'PDF', descripcion: 'OTORGA PERMISO DE USO DE LOCALES ESTACION DE METRO SAN PABLO, DE ACUERDO A DECRETO ALCALDICIO N° 1391 DE FECHA 27 DE JULIO DE 2010.' },
    { numero: '1740', fecha: '15.09.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCAL N° A-3 A NOMBRE DE SR. SEBASTIAN ARIAS ROJAS, A CONTAR DEL 30 DE SEPTIEMBRE DE 2010.' },
    { numero: '1744', fecha: '15.09.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO A LAS PERSONAS QUE SE INDICA.' },
    { numero: '2060', fecha: '17.11.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES QUE INDICA, DEL CENTRO COMERCIAL PERSA NEPTUNO.' },
    { numero: '2117', fecha: '30.11.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL N° 140 DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DEL SR. JORGE ARANGUIZ GUAJARDO.' },
    { numero: '2122', fecha: '30.11.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° A-2 Y A-28 DEL CENTRO COMERCIAL NEPTUNO A NOMBRE DEL SR. ANDRES BARRA GALVEZ Y MAXIMILIANO FUENTES CABALLERO.' },
    { numero: '2169', fecha: '16.12.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° 117, 118, 119, 120, 121, 122, 123, 164, 166 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2170', fecha: '16.12.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOCALES N° 403 Y 405 DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2206', fecha: '17.12.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL NEPTUNO A DOÑA ZAIRA SANTOS AGUILERA.' },
    { numero: '2247', fecha: '23.12.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Rebaja de Derechos', tipoNorma: 'Decretos Municipales', denominacion: 'Rebaja de Derechos', descripcion: 'REBAJA DE DERECHOS PERMISO DE USO DE LOCALES ESTACION DE METRO SAN PABLO, COMO SE INDICA.' },
    { numero: '2337', fecha: '30.12.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCAL DEL CENTRO COMERCIAL NEPTUNO.' },
    { numero: '2364', fecha: '30.12.10', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Pone Término a permiso', descripcion: 'PONE TERMINO A PERMISO DE USO DE LOS LOCALES DEL CENTRO COMERCIAL PERSA NEPTUNO A LAS PERSONAS QUE SE INDICAN.' },
    { numero: '2381', fecha: '30.12.10', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOCALES DEL CENTRO COMERCIAL NEPTUNO.' }
  ], 'Decreto', 'Sin enlace'),
  '2009': crearPermisosUso([
    { numero: '1483', fecha: '15.07.09', fechaPublicacion: '03.05.2013 Página Web', tipoNorma: 'Permiso de Uso', descripcion: 'OTORGA PERMISO DE USO PRECARIO AL CIRCO DEL MUNDO, SOBRE TERRENO UBICADO AL INTERIOR DEL EX MUNDO MAGICO.', enlaceModificacion: 'Sin enlace' },
    { numero: '2557', fecha: '16.12.09', fechaPublicacion: '03.05.2013 Página Web', nombreTitulo: 'Deja sin efecto', descripcion: 'DEJA SIN EFECTO DECRETO ALCALDICIO N° 2418 DE FECHA 30 DE OCTUBRE DE 2008 Y OTORGA PERMISO DE USO AL CLUB DEPORTIVO FERNANDO COLLANCO.', enlaceModificacion: 'Sin enlace' },
    { numero: '2601', fecha: '28.12.09', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.', enlaceModificacion: 'Sin enlace' },
    { numero: '2602', fecha: '28.12.09', fechaPublicacion: '03.05.2013 Página Web', descripcion: 'OTORGA PERMISO DE USO DE LOS LOCALES QUE INDICA DEL CENTRO COMERCIAL NEPTUNO.', enlaceModificacion: 'Sin enlace' }
  ], 'Decreto', 'Sin enlace')
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6PermisoUso({ anio, busqueda }: Seccion7_6PermisoUsoProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (permisosUsoPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) =>
      normalizarTexto(String(valor)).includes(termino)
    )
  );

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Permiso de Uso" anio={anio} busqueda={busqueda} />;
  }

  return (
    <div className="space-y-2">
      {registros.map((registro, index) => (
        <article key={`${anio}-${registro.numero}-${index}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <details open className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 border-none bg-slate-50/80 p-4 text-left [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block text-xs font-semibold text-blue-800">
                  {registro.tipoNorma} · {registro.denominacion} · {registro.nombreTitulo}
                </span>
                <span className="mt-1 block text-xs text-slate-600">
                  {registro.tipoNorma} N° {registro.numero} — {registro.fecha}
                </span>
              </span>
            </summary>
            <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-white p-4 sm:grid-cols-2 xl:grid-cols-4">
              <div><p className="text-xs text-slate-500">Número</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.numero}</p></div>
              <div><p className="text-xs text-slate-500">Fecha</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha}</p></div>
              <div><p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion}</p></div>
              <div><p className="text-xs text-slate-500">Tiene efectos generales</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales}</p></div>
              <div><p className="text-xs text-slate-500">Fecha última actualización</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion}</p></div>
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo</p>
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF del permiso de uso número ${registro.numero}`} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
                {registro.cantidadEnlacesModificacion ? (
                  Array.from({ length: registro.cantidadEnlacesModificacion }, (_, index) => (
                    <PdfLinkButton key={index} className="mt-1" ariaLabel={`Abrir PDF de modificación ${index + 1} del permiso de uso número ${registro.numero}`} />
                  ))
                ) : (
                  <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlaceModificacion}</p>
                )}
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
