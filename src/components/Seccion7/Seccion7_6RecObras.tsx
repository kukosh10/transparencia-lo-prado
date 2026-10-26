import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6RecObrasProps {
  anio: string;
  busqueda: string;
}

interface RecepcionObra {
  tipoNorma: string;
  denominacion: string;
  numero: string;
  nombreTitulo: string;
  fecha: string;
  fechaPublicacion: string;
  tieneEfectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
  enlacePublicacion: string;
}

const crearRegistro = (
  numero: string,
  nombreTitulo: string,
  fecha: string,
  tieneEfectosGenerales: string,
  descripcion: string,
  opciones: {
    tipoNorma?: string;
    fechaPublicacion?: string;
    ultimaActualizacion?: string;
  } = {}
): RecepcionObra => ({
  tipoNorma: opciones.tipoNorma ?? 'Actos Administrativos',
  denominacion: 'RECEPCION DE OBRAS',
  numero,
  nombreTitulo,
  fecha,
  fechaPublicacion: opciones.fechaPublicacion ?? 'Página Web (05.03.2013)',
  tieneEfectosGenerales,
  ultimaActualizacion: opciones.ultimaActualizacion ?? 'Sin Modificación',
  descripcion,
  enlacePublicacion: ''
});

const registrosPorAnio: Record<string, RecepcionObra[]> = {
  '2016': [
    crearRegistro('9', 'VIVIENDA', '29.07.2016', 'No', 'OBRA NUEVA', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 16.09.2016'
    }),
    crearRegistro('1', 'DISCOTEQUE', '25.02.2016', 'Sí', 'AMPLIACION', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 05.03.2016'
    })
  ],
  '2015': [
    crearRegistro('18', 'DISCOTEQUE', '15.12.2015', 'Sí', 'AMPLIACION', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 05.01.2016'
    }),
    crearRegistro('11', 'VIVIENDA COMERCIO', '04.08.2015', 'Sí', 'AMPLIACION', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 05.08.2015'
    }),
    crearRegistro('10', 'COMERCIO', '28.07.2015', 'Sí', 'OBRA NUEVA', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 05.08.2015'
    }),
    crearRegistro('8', 'JARDIN INFANTIL', '26.06.2015', 'Sí', 'AMPLIACION', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 05.07.2015'
    }),
    crearRegistro('7', 'CONSULTORIO BASICO', '01.04.2015', 'Sí', 'OBRA NUEVA', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 05.05.2015'
    }),
    crearRegistro('5', 'JARDIN INFANTIL', '25.02.2015', 'Sí', 'AMPLIACION', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 05.03.2015'
    }),
    crearRegistro('4', 'JARDIN INFANTIL', '25.02.2015', 'Sí', 'AMPLIACION', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 05.03.2015'
    })
  ],
  '2014': [
    crearRegistro('4', 'VIVIENDA COMERCIO', '26.08.2014', 'Sí', 'OBRA NUEVA', {
      fechaPublicacion: 'Página Web, fecha de Publicación 05.07.2015'
    }),
    crearRegistro('3', 'ESPARCIMIENTO RECREACION', '22.05.2014', 'Sí', 'OBRA NUEVA', {
      fechaPublicacion: 'Página Web, fecha de Publicación 05.07.2014'
    })
  ],
  '2013': [
    crearRegistro('9', 'LOCALES COMERCIALES', '17.12.2013', 'Sí', 'OBRA NUEVA', {
      fechaPublicacion: 'Página Web (05.01.2014)'
    }),
    crearRegistro('8', 'COMERCIO', '02.10.2013', 'Sí', 'AMPLIACION', {
      fechaPublicacion: 'Página Web (05.11.2013)'
    }),
    crearRegistro('6', 'VIVIENDA', '09.09.2013', 'No', 'OBRA NUEVA', {
      fechaPublicacion: 'Página Web (05.10.2013)'
    }),
    crearRegistro('5', 'ESCUELA PREBASICA', '13.08.2013', 'Sí', 'OBRA NUEVA', {
      fechaPublicacion: 'Página Web (05.09.2013)'
    }),
    crearRegistro('2', 'EQUIPAMIENTO SOCIAL', '28.02.2013', 'Sí', 'OBRA NUEVA', {
      fechaPublicacion: 'Página Web (05.03.2013)'
    }),
    crearRegistro('1', 'CENTRO DE SALUD FAMILIAR', '06.02.2013', 'Sí', 'OBRA NUEVA', {
      fechaPublicacion: 'Página Web (05.03.2013)'
    })
  ],
  '2012': [
    crearRegistro('17', 'VIVIENDA/LOCAL', '11.12.2012', 'Sí', 'OBRA NUEVA', {
      ultimaActualizacion: 'TERESA ARRIAGADA MENA'
    }),
    crearRegistro('15', 'VIVIENDA', '22.11.2012', 'No', 'OBRA NUEVA', {
      ultimaActualizacion: 'JOHANNA VALLADARES PONCE'
    }),
    crearRegistro('14', 'EQUIPAMIENTO EDUCACIONAL', '15.11.2012', 'Sí', 'AMPLIACION', {
      ultimaActualizacion: 'I. MUNICIPALIDAD DE LO PRADO'
    }),
    crearRegistro('13', 'VIVIENDA', '05.11.2012', 'No', 'OBRA NUEVA', {
      ultimaActualizacion: 'GUILLERMO PEÑA LANDERO'
    }),
    crearRegistro('10', 'EQUIPAMIENTO CENTRO CULTURAL', '03.08.2012', 'Sí', 'OBRA NUEVA', {
      ultimaActualizacion: 'I. MUNICIPALIDAD DE LO PRADO'
    }),
    crearRegistro('9', 'COMERCIO', '23.07.2012', 'Sí', 'AMPLIACION', {
      ultimaActualizacion: 'RAIMUNDO RIQUELME SANDOVAL'
    }),
    crearRegistro('8', 'HABITACIONAL', '21.06.2012', 'No', 'OBRA NUEVA', {
      ultimaActualizacion: 'LIDIA FARIAS OGAZ'
    }),
    crearRegistro('5', 'COMERCIO', '05.04.2012', 'Sí', 'OBRA NUEVA', {
      ultimaActualizacion: 'COMERCIAL CYAL LIMITADA'
    }),
    crearRegistro('3', 'VIVIENDA', '14.02.2012', 'No', 'OBRA NUEVA', {
      ultimaActualizacion: 'MIGUEL ANGEL SOTO TEJO'
    }),
    crearRegistro('2', 'COMERCIO', '03.02.2012', 'Sí', 'OBRA NUEVA')
  ],
  '2011': [
    crearRegistro('032', 'EQUIPAMIENTO SEDE SOCIAL', '09.11.2011', 'Sí', 'OBRA NUEVA'),
    crearRegistro('030', 'COMERCIO', '22.09.2011', 'Sí', 'OBRA NUEVA'),
    crearRegistro('028', 'EDUCACION', '11.08.2011', 'Sí', 'REGULARIZACION'),
    crearRegistro('025', 'EDUCACION', '30.06.2011', 'Sí', 'OBRA NUEVA'),
    crearRegistro('020', 'EDUCACION', '05.05.2011', 'Sí', 'OBRA NUEVA'),
    crearRegistro('018', 'VIVIENDA/LOCAL COMERCIAL', '19.04.2011', 'Sí', 'AMPLIACION'),
    crearRegistro('016', 'SALA CUNA', '14.04.2011', 'Sí', 'AMPLIACION'),
    crearRegistro('014', 'VIVIENDA COMERCIO', '11.04.2011', 'Sí', 'AMPLIACION'),
    crearRegistro('010', 'EDUCACION', '29.03.2011', 'Sí', 'AMPLIACION'),
    crearRegistro('005', 'SEDE SOCIAL', '09.02.2011', 'Sí', 'AMPLIACION'),
    crearRegistro('004', 'HABITACION', '07.02.2011', 'Sí', 'REPARACION'),
    crearRegistro('003', 'COMERCIO', '04.02.2011', 'Sí', 'OBRA NUEVA'),
    crearRegistro('001', 'OFICINA', '07.01.2011', 'Sí', 'AMPLIACION')
  ],
  '2010': [
    crearRegistro('030', 'SALA CUNA JARDIN INFANTIL', '05.10.2010', 'Sí', 'AMPLIACION'),
    crearRegistro('029', 'VIVIENDA/LOCAL COMERCIAL', '04.10.2010', 'Sí', 'AMPLIACION'),
    crearRegistro('028', 'SALA CUNA JARDIN INFANTIL', '01.10.2010', 'Sí', 'AMPLIACION'),
    crearRegistro('025', 'SALA CUNA JARDIN INFANTIL', '13.08.2010', 'Sí', 'OBRA NUEVA AMPLIACION'),
    crearRegistro('022', 'CENTRO DE SALUD', '21.07.2010', 'Sí', 'OBRA NUEVA AMPLIACION'),
    crearRegistro('021', 'CENTRO DE SALUD', '21.07.2010', 'Sí', 'OBRA NUEVA AMPLIACION'),
    crearRegistro('019', 'LOCAL COMERCIAL', '14.07.2010', 'Sí', 'OBRA NUEVA'),
    crearRegistro('018', 'VIVIENDA', '22.06.2010', 'No', 'OBRA NUEVA'),
    crearRegistro('007', 'VIVIENDA', '07.04.2010', 'No', 'AMPLIACION'),
    crearRegistro('006', 'EDUCACION', '30.03.2010', 'Sí', 'AMPLIACION'),
    crearRegistro('005', 'COMERCIO', '23.03.2010', 'Sí', 'AMPLIACION'),
    crearRegistro('004', 'VIVIENDA/LOCAL COMERCIAL', '12.02.2010', 'Sí', 'AMPLIACION'),
    crearRegistro('003', 'COMERCIO', '11.02.2010', 'Sí', 'AMPLIACION'),
    crearRegistro('002', 'JARDIN INFANTIL SALA CUNA', '22.01.2010', 'Sí', 'AMPLIACION/CAMBIO DE USO')
  ],
  '2009': [
    crearRegistro('047', 'JARDIN INFANTIL', '30.12.2009', 'Sí', 'OBRA NUEVA'),
    crearRegistro('036', 'VIVIENDA', '22.09.2009', 'No', 'OBRA NUEVA'),
    crearRegistro('031', 'LOCALES COMERCIALES', '18.08.2009', 'Sí', 'OBRA NUEVA'),
    crearRegistro('022', 'OFICINAS LOCALES COMERCIALES', '19.06.2009', 'Sí', 'AMPLIACION'),
    crearRegistro('021', 'VIVIENDA', '16.06.2009', 'No', 'OBRA NUEVA'),
    crearRegistro('020', 'VIVIENDA', '11.06.2009', 'No', 'OBRA NUEVA - AMPLIACION'),
    crearRegistro('019', 'VIVIENDA', '09.06.2009', 'No', 'OBRA NUEVA'),
    crearRegistro('014', 'VIVIENDA', '15.05.2009', 'No', 'AMPLIACION'),
    crearRegistro('013', 'VIVIENDA', '15.05.2009', 'No', 'AMPLIACION'),
    crearRegistro('011', 'LOCAL COMERCIAL', '12.05.2009', 'Sí', 'OBRA NUEVA - AMPLIACION'),
    crearRegistro('010', 'OFICINAS COMERCIALES', '08.05.2009', 'Sí', 'OBRA NUEVA - AMPLIACION'),
    crearRegistro('009', 'LOCAL COMERCIAL', '04.05.2009', 'Sí', 'OBRA NUEVA - AMPLIACION'),
    crearRegistro('008', 'CENTRO CIVICO', '24.04.2009', 'Sí', 'AMPLIACION'),
    crearRegistro('004', 'COMERCIO', '03.02.2009', 'Sí', 'OBRA NUEVA - AMPLIACION'),
    crearRegistro('003', 'VIVIENDA', '02.02.2009', 'No', 'AMPLIACION'),
    crearRegistro('002', 'SALA CUNA', '30.01.2009', 'Sí', 'OBRA NUEVA')
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6RecObras({ anio, busqueda }: Seccion7_6RecObrasProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (registrosPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) => normalizarTexto(valor).includes(termino))
  );

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Recepción de Obras" anio={anio} busqueda={busqueda} />;
  }

  return (
    <div className="space-y-2">
      {registros.map((registro, index) => (
        <article
          key={`${anio}-${registro.numero}-${index}`}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <details open className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 border-none bg-slate-50/80 p-4 text-left [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block text-xs font-semibold text-blue-800">{registro.denominacion}</span>
                <span className="mt-1 block text-xs text-slate-600">
                  {registro.tipoNorma} N° {registro.numero} — {registro.fecha} · {registro.nombreTitulo}
                </span>
              </span>
            </summary>
            <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-white p-4 sm:grid-cols-2 xl:grid-cols-4">
              <div><p className="text-xs text-slate-500">Tipo de norma</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tipoNorma}</p></div>
              <div><p className="text-xs text-slate-500">Denominación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.denominacion}</p></div>
              <div><p className="text-xs text-slate-500">Número</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.numero}</p></div>
              <div><p className="text-xs text-slate-500">Nombre / título</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.nombreTitulo}</p></div>
              <div><p className="text-xs text-slate-500">Fecha</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha}</p></div>
              <div><p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion}</p></div>
              <div><p className="text-xs text-slate-500">Tiene efectos generales</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales}</p></div>
              <div><p className="text-xs text-slate-500">Fecha última actualización</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion}</p></div>
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo correspondiente</p>
                <PdfLinkButton
                  href={registro.enlacePublicacion}
                  className="mt-1"
                  ariaLabel={`Abrir PDF de recepción de obra número ${registro.numero}`}
                />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
