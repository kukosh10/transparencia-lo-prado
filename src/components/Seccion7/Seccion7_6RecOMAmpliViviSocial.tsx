import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6RecOMAmpliViviSocialProps {
  anio: string;
  busqueda: string;
}

interface RecepcionObraMenorViviendaSocial {
  denominacion: string;
  tipoNorma: string;
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
  fecha: string,
  tieneEfectosGenerales: string,
  opciones: {
    tipoNorma?: string;
    fechaPublicacion?: string;
  } = {}
): RecepcionObraMenorViviendaSocial => ({
  denominacion: 'RECEPCION O. MENOR AMPLIACION VIVIENDA SOCIAL',
  tipoNorma: opciones.tipoNorma ?? 'Actos Administrativos',
  numero,
  nombreTitulo: 'VIVIENDA',
  fecha,
  fechaPublicacion: opciones.fechaPublicacion ?? 'Página Web (05.03.2013)',
  tieneEfectosGenerales,
  ultimaActualizacion: 'Sin Modificación',
  descripcion: 'AMPLIACION',
  enlacePublicacion: ''
});

const registrosPorAnio: Record<string, RecepcionObraMenorViviendaSocial[]> = {
  '2016': [
    crearRegistro('3', '11.03.2016', 'No', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 16.09.2016'
    }),
    crearRegistro('2', '10.03.2016', 'No', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web, fecha de publicación 16.09.2016'
    })
  ],
  '2015': [
    crearRegistro('12', '01.09.2015', 'No', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web'
    }),
    crearRegistro('9', '13.07.2015', 'No', {
      tipoNorma: 'Actos resolutivo',
      fechaPublicacion: 'Página Web'
    })
  ],
  '2014': [],
  '2013': [],
  '2012': [
    crearRegistro('12', '27.09.2012', 'Sí', { fechaPublicacion: 'Página Web' })
  ],
  '2011': [
    crearRegistro('23', '23.06.2011', 'No', { fechaPublicacion: 'Página Web' }),
    crearRegistro('22', '20.06.2011', 'No', { fechaPublicacion: 'Página Web' }),
    crearRegistro('21', '12.05.2011', 'No', { fechaPublicacion: 'Página Web' }),
    crearRegistro('9', '29.03.2011', 'No', { fechaPublicacion: 'Página Web' })
  ],
  '2010': [
    crearRegistro('23', '04.08.2010', 'No'),
    crearRegistro('17', '16.06.2010', 'No'),
    crearRegistro('11', '10.05.2010', 'No'),
    crearRegistro('8', '22.04.2010', 'No'),
    crearRegistro('1', '10.01.2010', 'No')
  ],
  '2009': [
    crearRegistro('42', '27.10.2009', 'No'),
    crearRegistro('39', '08.10.2009', 'No'),
    crearRegistro('37', '29.09.2009', 'No'),
    crearRegistro('35', '14.09.2009', 'No'),
    crearRegistro('34', '08.09.2009', 'No'),
    crearRegistro('29', '24.07.2009', 'No'),
    crearRegistro('28', '21.07.2009', 'No'),
    crearRegistro('23', '04.08.2009', 'No'),
    crearRegistro('18', '04.06.2009', 'No'),
    crearRegistro('16', '29.05.2009', 'No'),
    crearRegistro('7', '13.04.2009', 'No'),
    crearRegistro('4', '15.10.2009', 'No'),
    crearRegistro('3', '10.08.2009', 'No')
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6RecOMAmpliViviSocial({
  anio,
  busqueda
}: Seccion7_6RecOMAmpliViviSocialProps) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (registrosPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) => normalizarTexto(valor).includes(termino))
  );

  if (registros.length === 0) {
    return (
      <EstadoSinRegistros
        titulo="Recepción Obra Menor Ampliación Vivienda Social"
        anio={anio}
        busqueda={busqueda}
      />
    );
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
              <div><p className="text-xs text-slate-500">Denominación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.denominacion}</p></div>
              <div><p className="text-xs text-slate-500">Tipo de norma</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tipoNorma}</p></div>
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
                  ariaLabel={`Abrir PDF de recepción de obra menor de vivienda social número ${registro.numero}`}
                />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
