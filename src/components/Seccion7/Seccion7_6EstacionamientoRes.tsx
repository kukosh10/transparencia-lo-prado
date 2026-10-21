import PdfLinkButton from '../PdfLinkButton';

interface EstacionamientoReservado {
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

interface FilaEstacionamientoReservado {
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  descripcion: string;
  nombreTitulo?: string;
  tipoNorma?: string;
  tieneEfectosGenerales?: string;
  ultimaActualizacion?: string;
  enlaceModificacion?: string;
  cantidadEnlacesModificacion?: number;
}

const crearEstacionamientosReservados = (
  filas: FilaEstacionamientoReservado[],
  tipoNorma = 'Decreto',
  enlaceModificacion = 'Sin Modificaciones'
): EstacionamientoReservado[] =>
  filas.map((fila) => ({
    tipoNorma: fila.tipoNorma ?? tipoNorma,
    denominacion: 'Permiso de Uso',
    nombreTitulo: fila.nombreTitulo ?? 'Permiso de Estacionamiento Reservado',
    numero: fila.numero,
    fecha: fila.fecha,
    fechaPublicacion: fila.fechaPublicacion,
    tieneEfectosGenerales: fila.tieneEfectosGenerales ?? 'Sí',
    ultimaActualizacion: fila.ultimaActualizacion ?? 'Sin Modificaciones',
    descripcion: fila.descripcion,
    enlaceModificacion: fila.enlaceModificacion ?? enlaceModificacion,
    cantidadEnlacesModificacion: fila.cantidadEnlacesModificacion
  }));

const estacionamientosReservadosPorAnio: Record<string, EstacionamientoReservado[]> = {
  '2016': crearEstacionamientosReservados([
    { numero: '63', fecha: '27.01.16', fechaPublicacion: '05.02.2016, Página Web', tipoNorma: 'Decretos Alcaldicios', tieneEfectosGenerales: 'No', descripcion: "OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LA ESCUELA DE CONDUCTORES VIGO'S." },
    { numero: '2', fecha: '05.01.16', fechaPublicacion: '05.02.2016, Página Web', tipoNorma: 'Decretos Alcaldicios', tieneEfectosGenerales: 'No', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL "ESCORPION".' },
    { numero: '476', fecha: '29.06.2016', fechaPublicacion: '29.06.2016, Página Web', tipoNorma: 'Decreto Alcaldicio', tieneEfectosGenerales: 'No', descripcion: 'Otorga permiso de estacionamiento reservado a local comercial "Casa Ialina".' },
    { numero: '581', fecha: '12.08.2016', fechaPublicacion: '12.08.2016, Página Web', tipoNorma: 'Decreto Alcaldicio', tieneEfectosGenerales: 'No', descripcion: 'Complementa Decreto Alcaldicio N° 2937 de fecha 25 de noviembre de 2013, horario de estacionamiento reservado a la empresa "Carnes Pigal Spa".' }
  ]),
  '2015': crearEstacionamientosReservados([
    { numero: '1357', fecha: '02.07.2015', fechaPublicacion: '06.08.2015, Página Web', tipoNorma: 'Decretos Exentos', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO' },
    { numero: '653', fecha: '19.08.2015', fechaPublicacion: '06.09.2015, Página Web', tipoNorma: 'Decretos Alcaldicios', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO' },
    { numero: '194', fecha: '18.03.2015', fechaPublicacion: '06.04.2015, Página Web', tipoNorma: 'Decretos Alcaldicios', nombreTitulo: 'Modificaciones', tieneEfectosGenerales: 'Sí', descripcion: 'DEJA SIN EFECTO DECRETOS ALCALDICIOS N° 091 DE FECHA 13.01.2006 Y N° 1375 DE FECHA 06.11.2003 EN RELACION A ESTACIONAMIENTO RESERVADO QUE INDICA' }
  ]),
  '2014': crearEstacionamientosReservados([
    { numero: '3240', fecha: '11.11.14', fechaPublicacion: '06.12.2014 Página Web', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL "CLUB FARAON".' },
    { numero: '3103', fecha: '30.10.14', fechaPublicacion: '06.11.2014 Página Web', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL "LOS TAMARINDOS LTDA.", EN AVENIDA SAN PABLO FRENTE AL N° 8119.' },
    { numero: '2372', fecha: '25.08.14', fechaPublicacion: '06.09.2014 Página Web', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTOS RESERVADOS A VEHICULOS MUNICIPALES PERTENECIENTES A LA MUNICIPALIDAD DE CERRO NAVIA EN EL LUGAR QUE SE INDICA.' },
    { numero: '2360', fecha: '21.08.14', fechaPublicacion: '06.09.2014 Página Web', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTOS RESERVADOS A LOCALES COMERCIALES "KATTY Y TELEPIZZA".' },
    { numero: '1960', fecha: '10.07.14', fechaPublicacion: '06.08.2014 Página Web', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL ESCUELA DE CONDUCTORES VERA AYLWARD.' },
    { numero: '1222', fecha: '05.05.14', fechaPublicacion: '06.06.2014 Página Web', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A DOÑA JUBICA DURAN OLGUIN.' },
    { numero: '1193', fecha: '02.05.14', fechaPublicacion: '06.06.2014 Página Web', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LAS AGRUPACIONES DE TAXIS "ASCOTAX" Y "GENESIS" EN LA BAHIA EXISTENTE, ADYACENTE A ESTACION METRO PAJARITOS.' },
    { numero: '944', fecha: '08.04.14', fechaPublicacion: '25.04.2014 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '10.04.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A ESCUELA ESPECIAL DE LENGUAJE "MI MUNDO EN PALABRAS".' },
    { numero: '943', fecha: '08.04.14', fechaPublicacion: '25.04.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO LOCAL COMERCIAL "MAR Y TIERRA".' },
    { numero: '929', fecha: '07.04.14', fechaPublicacion: '25.04.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL "LA TOCATA".' },
    { numero: '793', fecha: '25.03.14', fechaPublicacion: '06.04.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LOCAL COMERCIAL ADRENALINA DISCOTEQUE.' },
    { numero: '518', fecha: '21.02.14', fechaPublicacion: '06.03.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A COMERCIAL TORRES Y VIDAL LIMITADA EL CAMPESINO.' },
    { numero: '97', fecha: '15.01.14', fechaPublicacion: '06.02.2014 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'Otorga permiso de estacionamiento reservado a sra. Ninoska Ibarra Garcia.' }
  ]),
  '2013': crearEstacionamientosReservados([
    { numero: '1759', fecha: '20.06.2013', fechaPublicacion: '21.06.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '3.07.2013', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO EMPRESA SOCIEDAD UNION MAGISTER S.A.' },
    { numero: '2586', fecha: '16.09.13', fechaPublicacion: '06.10.2013 Página Web', tieneEfectosGenerales: 'No', ultimaActualizacion: '14.01.14', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2, descripcion: 'Asigna estacionamiento reservado para ferretería "Ricky rincon" en avenida san pablo frente al N° 5479.' }
  ]),
  '2012': crearEstacionamientosReservados([
    { numero: '2328', fecha: '04.09.12', fechaPublicacion: 'Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '27.09.12', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 1, descripcion: 'OTORGA PERMISO DE ESTABLECIMIENTO PARA CARGA Y DESCARGA' },
    { numero: '2377', fecha: '11.09.12', fechaPublicacion: 'Página Web', tieneEfectosGenerales: 'Sí', enlaceModificacion: 'Sin Enlaces', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A COMERCIALIZADORA EL OFERTAZO EN LUGAR QUE INDICA.' }
  ]),
  '2011': crearEstacionamientosReservados([
    { numero: '981', fecha: '11.05.11', fechaPublicacion: '03.05.2013 Página Web', tieneEfectosGenerales: 'Sí', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LA SRA. ARISSA SOTO VENEGAS.' },
    { numero: '2035', fecha: '15.09.11', fechaPublicacion: '03.05.2013 Página Web', tieneEfectosGenerales: 'Sí', ultimaActualizacion: '26.07.2013', enlaceModificacion: 'PDF', cantidadEnlacesModificacion: 2, descripcion: 'ASIGNA TRES ESTACIONAMIENTOS RESERVADOS EN AVENIDA SAN PABLO FRENTE AL N° 6019, PARA LOCAL COMERCIAL "ELCLIPSE TOTAL", REPRESENTADA POR EL SR. GUSTAVO ROJAS RODRIGUEZ.' }
  ]),
  '2010': crearEstacionamientosReservados([
    { numero: '566', fecha: '23.03.10', fechaPublicacion: '03.05.2013 Página Web', tieneEfectosGenerales: 'Sí', enlaceModificacion: 'Sin enlace', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A DOÑA VERONICA ZAMBRANO GUEVARA, EN CALZADA DE SERVICIO DE CALLE ECUADOR FRENTE AL N° 5211, EDIFICIO TORRE ALAMEDA.' },
    { numero: '829', fecha: '29.04.10', fechaPublicacion: '03.05.2013 Página Web', tieneEfectosGenerales: 'Sí', enlaceModificacion: 'Sin enlace', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A LA ASOCIACION DE CONDUCTORES ASCOTAX A.G.' },
    { numero: '1369', fecha: '15.07.10', fechaPublicacion: '03.05.2013 Página Web', tieneEfectosGenerales: 'Sí', enlaceModificacion: 'Sin enlace', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A CENTRO DE DIALISIS TIL-TIL.' }
  ]),
  '2009': crearEstacionamientosReservados([
    { numero: '1868', fecha: '04.09.09', fechaPublicacion: '03.05.2013 Página Web', tieneEfectosGenerales: 'Sí', enlaceModificacion: 'Sin Modificación', descripcion: 'OTORGA PERMISO DE ESTACIONAMIENTO RESERVADO A COMERCIAL NUEVA MILLENIO S.A.' }
  ])
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

interface Seccion7_6EstacionamientoResProps {
  anio: string;
  busqueda: string;
}

export default function Seccion7_6EstacionamientoRes({
  anio,
  busqueda
}: Seccion7_6EstacionamientoResProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (estacionamientosReservadosPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) =>
      normalizarTexto(String(valor)).includes(termino)
    )
  );

  if (registros.length === 0) {
    return (
      <p className="py-4 text-center text-xs italic text-slate-400">
        {termino
          ? `No se encontraron registros que coincidan con “${busqueda}” para el año ${anio}.`
          : `Sin registros para el año ${anio}`}
      </p>
    );
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
                <PdfLinkButton className="mt-1" ariaLabel={`Abrir PDF del permiso de estacionamiento reservado número ${registro.numero}`} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
                {registro.cantidadEnlacesModificacion ? (
                  Array.from({ length: registro.cantidadEnlacesModificacion }, (_, enlaceIndex) => (
                    <PdfLinkButton key={enlaceIndex} className="mt-1" ariaLabel={`Abrir PDF de modificación ${enlaceIndex + 1} del permiso de estacionamiento reservado número ${registro.numero}`} />
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
