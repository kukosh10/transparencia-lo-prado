import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6ComodatoProps {
  anio: string;
  busqueda: string;
}

export interface Comodato {
  tipoNorma: string;
  denominacion: string;
  nombreTitulo: string;
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
  enlacePublicacion: string;
  urlPublicacion?: string;
  enlaceModificacion: string;
  urlModificacion?: string;
}

const crearComodato = (
  tipoNorma: string,
  denominacion: string,
  nombreTitulo: string,
  numero: string,
  fecha: string,
  fechaPublicacion: string,
  tieneEfectosGenerales: string,
  descripcion: string,
  opciones: {
    ultimaActualizacion?: string;
    enlacePublicacion?: string;
    urlPublicacion?: string;
    enlaceModificacion?: string;
    urlModificacion?: string;
  } = {}
): Comodato => ({
  tipoNorma,
  denominacion,
  nombreTitulo,
  numero,
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales,
  ultimaActualizacion: opciones.ultimaActualizacion || 'Sin Modificaciones',
  descripcion,
  enlacePublicacion: opciones.enlacePublicacion || 'PDF',
  urlPublicacion: opciones.urlPublicacion ?? '',
  enlaceModificacion: opciones.enlaceModificacion || 'Sin Modificaciones',
  urlModificacion: opciones.urlModificacion ?? ''
});

export const comodatosPorAnio: Record<string, Comodato[]> = {
  // Aquí va la URL de Drive en las opciones urlPublicacion y urlModificacion de cada registro.
  '2016': [
    crearComodato('Decretos Exentos', 'Comodatos', 'Aprueba y Ratifica Contrato Comodato', '1350', '17.05.2016', '20.06.2016, Página Web', 'Si', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO OTORGADO A LA JUNTA DE VECINOS N°21 VILLA CAUPOLICAN, SUSCRITO CON FECHA 05 DE MAYO DE 2016.'),
    crearComodato('Decretos Alcaldicios', 'Comodatos', 'Otorga Comodato', '301', '27.04.2016', '05.05.2016, Página Web', 'No', 'OTORGA EN COMODATO BIENES MUNICIPALES QUE INDICAN, A LA AGRUPACION ESCUELA CARNAVAL LA POMPONERA REDOBLANTE.'),
    crearComodato('Decretos Alcaldicios', 'Comodatos', 'Otorga Comodato', '269', '13.04.2016', '05.05.2016, Página Web', 'No', 'OTORGA COMODATO DE TERRENO UBICADO EN CALLE LOS COPIHUES N°5462, A LA JUNTA DE VECINOS N°21 "VILLA CAUPOLICAN".')
  ],
  // Aquí va la URL de Drive en las opciones urlPublicacion y urlModificacion de cada registro.
  '2015': [
    crearComodato('Decretos Exentos', 'Comodatos', 'Otorga Comodato', '2841', '19.11.2015', '05.12.2015, Página Web', 'Si', 'APRUEBA SUSCRIPCION DE CONTRATO DE COMODATO OTORGADO POR LA EMPRESA DE TRANSPORTE DE PASAJEROS METRO S.A.'),
    crearComodato('Decretos Exentos', 'Comodatos', 'Aprueba y Ratifica Contrato Comodato', '995', '12.05.2015', '08.06.2015, Página Web', 'Si', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO DE COSA MUEBLE ENTRE EL CENTRO DE PADRES Y APODERADOS POETA PABLO NERUDA Y LA ILUSTRE MUNICIPALIDAD DE LO PRADO.'),
    crearComodato('Decretos Alcaldicios', 'Comodatos', 'Otorga Comodato', '404', '01.06.2015', '06.07.2015, Página Web', 'Si', 'ENTREGA EN COMODATO A LA POLICIA DE INVESTIGACIONES DE CHILE EL VEHICULO DE PROPIEDAD MUNICIPAL PLACA PATENTE ZW-1945-2.', { ultimaActualizacion: '19.11.2015', enlaceModificacion: 'PDF' }),
    crearComodato('Decretos Alcaldicios', 'Comodatos', 'Otorga Comodato', '326', '06.05.2015', '06.06.2015, Página Web', 'Si', 'OTORGA EN COMODATO BIENES MUNICIPALES QUE SE INDICAN, AL CENTRO DE PADRES Y APODERADOS POETA PABLO NERUDA.'),
    crearComodato('Decretos Alcaldicios', 'Comodatos', 'Termino de Comodato', '272', '16.04.2015', '06.05.2015, Página Web', 'Si', 'PONE TERMINO AL CONTRATO DE COMODATO CON LA UNIVERSIDAD GABRIELA MISTRAL SOBRE INMUEBLE QUE INDICA.', { ultimaActualizacion: '28.08.2015', enlaceModificacion: 'PDF' })
  ],
  // Aquí va la URL de Drive en las opciones urlPublicacion y urlModificacion de cada registro.
  '2014': [
    crearComodato('Decreto', 'Comodatos', 'Aprueba y Ratifica Contrato Comodato', '3237', '11.11.14', '06.12.2014, Página Web', 'No', 'APRUEBA Y RATIFICA CONTRATO DE COSA MUEBLE ENTRE LA I. MUNICIPALIDAD Y LA AGRUPACION ESCUELA CARNAVAL LA POMPONERA REDOBLANTE.'),
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '2945', '20.10.14', '06.11.2014, Página Web', 'Si', 'OTORGANSE EN COMODATO BIENES MUNICIPALES QUE SE INDICAN, A LA AGRUPACION ESCUELA CARNAVAL LA POMPONERA REDOBLANTE.'),
    crearComodato('Decreto', 'Comodatos', 'Aprueba y Ratifica Contrato Comodato', '1918', '09.07.14', '06.08.2014, Página Web', 'No', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO ENTRE LA DIRECCION DE BIBLIOTECAS, ARCHIVOS Y MUSEOS Y LA I. MUNICIPALIDAD DE LO PRADO - ANEXO N°2.'),
    crearComodato('Decreto', 'Comodatos', 'Aprueba y Ratifica Contrato Comodato', '1412', '30.05.14', '06.06.2014, Página Web', 'No', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO CON COMITE DE ADMINISTRACION CONDOMINIO VILLA CONCEJAL LUIS ACUÑA.'),
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '1332', '19.05.14', '06.06.2014, Página Web', 'Si', 'OTORGA COMODATO A COMITE DE ADMINISTRACION CONDOMINIO "VILLA CONCEJAL LUIS ACUÑA".'),
    crearComodato('Decreto', 'Comodatos', 'Aprueba y Ratifica Contrato Comodato', '720', '18.03.14', '08.04.2014, Página Web', 'No', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO ENTRE LA DIRECCION DE BIBLIOTECAS, ARCHIVOS Y MUSEOS Y LA I. MUNICIPALIDAD DE LO PRADO - ANEXO N°1.')
  ],
  // Aquí va la URL de Drive en las opciones urlPublicacion y urlModificacion de cada registro.
  '2013': [
    crearComodato('Decreto', 'Comodatos', 'Ratifica Contrato', '570', '12.02.13', '01.03.2013, Página Web', 'Si', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO, SUSCRITO EL 29 DE OCTUBRE DE 2012 ENTRE LA DIRECCION DE BIBLIOTECAS, ARCHIVOS Y MUSEOS Y LA I. MUNICIPALIDAD DE LO PRADO.'),
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '1368', '13.05.13', '21.06.2013, Página Web', 'Si', 'OTORGA COMODATO DE ADMINISTRACION COMPARTIDA A LAS ORGANIZACIONES SOCIALES DE LA UNIDAD VECINAL N°17 VILLA BERNARDO O"HIGGINS.'),
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '1789', '24.06.2013', '02.07.2013, Página Web', 'Si', 'OTORGA COMODATO DE TERRENO UBICADO EN AV. SAN PABLO N°8600, A LA CORPORACION MUNICIPAL DE LO PRADO.'),
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '1790', '24.06.2013', '02.07.2013, Página Web', 'Si', 'OTORGA COMODATO DE TERRENO UBICADO EN CALLE SCALAN N°751, A LA CORPORACION MUNICIPAL DE LO PRADO.', { ultimaActualizacion: '12.07.2013' }),
    crearComodato('Decreto', 'Comodatos', 'Aprueba y Ratifica Contrato Comodato', '1934', '10.07.2013', '09.08.2013, Página Web', 'Si', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO CON S.S.M.O PARA PROGRAMA LECTORES BIOMETRICOS AÑO 2013.'),
    crearComodato('Decreto', 'Comodatos', 'Modificaciones', '1950', '12.07.2013', '09.08.2013, Página Web', 'Si', 'COMPLEMENTA DECRETO ALCALDICIO N°1790 DE 2013, QUE OTORGÓ COMODATO DE TERRENO UBICADO EN CALLE SCALAN N°751, A LA CORPORACION MUNICIPAL DE LO PRADO.'),
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '2893', '14.11.13', '08.12.2013, Página Web', 'No', 'OTORGA COMODATO A LA UNION COMUNAL DE GRUPOS FOLKLORICOS DE LO PRADO.', { enlaceModificacion: 'Sin Modificación' })
  ],
  // Aquí va la URL de Drive en las opciones urlPublicacion y urlModificacion de cada registro.
  '2012': [
    crearComodato('Decreto', 'Instituciones', 'Otorga Comodato', '251', '23.01.12', 'Página Web', 'Si', 'OTORGA COMODATO A CONSEJOS DE ADMINISTRACION DE CONDOMINIOS DE POBLACION SAN VALENTIN.', { enlaceModificacion: 'Sin Enlaces' }),
    crearComodato('Decreto', 'Instituciones', 'Otorga Comodato', '474', '10.02.12', 'Página Web', 'Si', 'OTORGASE EN COMODATO BIEN QUE SE INDICA, PROYECTOR DIGITAL MARCA EPSON.', { enlaceModificacion: 'Sin Enlaces' }),
    crearComodato('Decreto', 'vehiculo', 'Otorga Comodato', '999', '18.04.12', 'Página Web', 'Si', 'OTORGASE EN COMODATO A LA CORPORACION MUNICIPAL DE LO PRADO UN BUS CAIO MERCEDES BENZ OF1722/59, EURO III, N° DE INVENTARIO 03.01.04.013 Y 03.01.04.014 RESPECTIVAMENTE.', { ultimaActualizacion: '16.05.12', enlaceModificacion: 'Sin Enlaces' }),
    crearComodato('Decreto', 'vehiculo', 'Otorga Comodato', '1006', '20.04.12', 'Página Web', 'Si', 'OTORGA EN COMODATO A LA CORPORACION MUNICIPAL DE LO PRADO UN BUS CAIO MERCEDES BENZ OF 1722 INVENTARIO N° 03.01.04.012.', { ultimaActualizacion: '08.05.12', enlaceModificacion: 'Sin Enlaces' }),
    crearComodato('Decreto', 'Comodatos', 'Aprueba y Ratifica Contrato de Servicio', '1353', '29.05.12', 'Página Web', 'Si', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO SUSCRITO CON FECHA 15 DE ABRIL DE 2012 CON LA DIRECCION DE BIBLIOTECAS Y MUSEOS "DIBAM".', { enlaceModificacion: 'Sin Enlaces' }),
    crearComodato('Decreto', 'Comodatos', 'Aprueba y Ratifica Contrato de Servicio', '1383', '30.05.12', 'Página Web', 'Si', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO PRECARIO SUSCRITO CON FECHA 22 DE MAYO DE 2012 ENTRE LA JUNTA DE VECINOS N°8 Y EL CLUB DEPORTIVO Y SOCIAL REAL ALIANZA Y EL CLUB DEPORTIVO REALES COPIHUES.', { enlaceModificacion: 'Sin Enlaces' }),
    crearComodato('Decreto', 'Comodatos', 'Aprueba y Ratifica Contrato de Servicio', '1412', '04.06.12', 'Página Web', 'Si', 'APRUEBA Y RATIFICA CONTRATO DE COMODATO ENTRE LA I. MUNICIPALIDAD DE LO PRADO Y LA CORPORACION MUNICIPAL DE LO PRADO.', { enlaceModificacion: 'Sin Enlaces' })
  ],
  // Aquí va la URL de Drive en las opciones urlPublicacion y urlModificacion de cada registro.
  '2011': [
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '528', '11.03.11', '21.06.2013, Página Web', 'Sí', 'OTORGANSE EN COMODATO 01 AMPLIFICADOR MUSICAL A CONSEJO VECINAL DE DESARROLLO VILLA CAUPOLICAN - SAN VALENTIN.', { enlaceModificacion: 'Sin Enlaces' }),
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '1368', '30.06.11', '21.06.2013, Página Web', 'Sí', 'OTORGA EN COMODATO BIENES QUE SE INDICAN AL CONSEJO DE DESARROLLO SOCIAL DEL BARRIO ARTURO PRAT.', { enlaceModificacion: 'Sin Enlaces' }),
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '1489', '13.07.11', '21.06.2013, Página Web', 'Sí', 'OTORGA EN COMODATO BIENES QUE SE INDICAN A CONSEJO VECINAL DE DESARROLLO VILLA CAUPOLICAN - SAN VALENTIN.', { enlaceModificacion: 'Sin Enlaces' }),
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '2938', '29.12.11', '21.06.2013, Página Web', 'Sí', 'OTORGANSE EN COMODATO CON ADMINISTRACION COMPARTIDA LA CANCHA QUE SE INDICA A LA JUNTA DE VECINOS N°8 VILLA ARTURO PRAT, CLUB DEPORTIVO Y SOCIAL REAL ALIANZA Y CLUB DEPORTIVO REALES COPIHUES.', { enlaceModificacion: 'Sin Enlaces' })
  ],
  // Aquí va la URL de Drive en las opciones urlPublicacion y urlModificacion de cada registro.
  '2010': [
    crearComodato('Decreto', 'Comodatos', 'Otorga Comodato', '1897', '18.10.10', '21.06.2013, Página Web', 'Si', 'PONE TERMINO A COMODATO ENTREGADO A ASOCIACION KENNEDY Y OTORGA PERMISO Y COMODATO A UNION COMUNAL DE CLUBES DEPORTIVOS PRESIDENTE KENNEDY.', { enlaceModificacion: 'Sin enlace' })
  ],
  // Aquí va la URL de Drive en las opciones urlPublicacion y urlModificacion de cada registro.
  '2009': [
    crearComodato('Decreto', 'Comodatos', 'Comodatos', '107', '13.01.09', '03.05.2013, Página Web', 'Si', 'APRUEBA CONVENIO DE COMODATO ENTRE LA I. MUNICIPALIDAD DE LO PRADO Y AGUAS ANDINAS.', { enlaceModificacion: 'Sin enlace' })
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const renderPdfLink = ({ href, ariaLabel }: { href?: string; ariaLabel: string }) => {
  return <PdfLinkButton href={href} ariaLabel={ariaLabel} className="mt-1" />;
};

export default function Seccion7_6Comodato({ anio, busqueda }: Seccion7_6ComodatoProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registrosAnio = comodatosPorAnio[anio] || [];
  const registros = termino
    ? registrosAnio.filter((registro) =>
        Object.values(registro).some((valor) => normalizarTexto(String(valor ?? '')).includes(termino))
      )
    : registrosAnio;

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Comodatos" anio={anio} busqueda={busqueda} />;
  }

  return (
    <div className="space-y-4">
      {registros.map((registro) => (
        <article
          key={`${anio}-${registro.numero}`}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="p-4">
            <div className="mb-3 inline-flex rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
              {registro.tipoNorma} - {registro.denominacion}
            </div>
            <h4 className="text-sm font-semibold text-slate-900">{registro.nombreTitulo}</h4>
          </div>
          <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-slate-50 p-4 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="text-xs text-slate-500">Número</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.numero}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Fecha</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Tiene efectos generales</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Fecha última actualización</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Breve descripción del objeto del acto</p>
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace a la publicación o archivo</p>
              {registro.urlPublicacion || registro.enlacePublicacion.toLocaleLowerCase() === 'pdf'
                ? renderPdfLink({ href: registro.urlPublicacion, ariaLabel: `Abrir PDF de comodato número ${registro.numero}` })
                : <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlacePublicacion}</p>}
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
              {registro.urlModificacion || registro.enlaceModificacion.toLocaleLowerCase() === 'pdf'
                ? renderPdfLink({ href: registro.urlModificacion, ariaLabel: `Abrir modificación de comodato número ${registro.numero}` })
                : <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlaceModificacion}</p>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
