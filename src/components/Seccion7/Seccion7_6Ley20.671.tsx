import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6Ley20671Props {
  anio: string;
  busqueda: string;
}

interface RegularizacionLey20671 {
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
  fechaPublicacion: string,
  tieneEfectosGenerales: string,
  descripcion: string
): RegularizacionLey20671 => ({
  denominacion: 'REGULARIZACION LEY 20.671',
  tipoNorma: 'Actos resolutivo',
  numero,
  nombreTitulo: 'VIVIENDA',
  fecha,
  fechaPublicacion,
  tieneEfectosGenerales,
  ultimaActualizacion: 'Sin modificación',
  descripcion,
  enlacePublicacion: ''
});

const registrosPorAnio: Record<string, RegularizacionLey20671[]> = {
  '2016': [
    {
      denominacion: 'REGULARIZACION LEY 20.671',
      tipoNorma: '',
      numero: '',
      nombreTitulo: '',
      fecha: '',
      fechaPublicacion: '',
      tieneEfectosGenerales: '',
      ultimaActualizacion: '',
      descripcion: 'No registra para los meses de febrero a la fecha',
      enlacePublicacion: ''
    },
    crearRegistro('1', '14.01.2016', 'Pag Web, de fecha 06.02.2016', 'No', 'REGULARIZACION')
  ],
  '2015': [
    crearRegistro('4', '24.12.2015', 'Pag Web', 'No', 'REGULARIZACION'),
    crearRegistro('3', '27.11.2015', 'Pag Web', 'No', 'REGULARIZACION'),
    crearRegistro('2', '20.10.15', 'Pag Web', 'No', 'REGULARIZACION'),
    crearRegistro('1', '14.04.2015', '06.05.2015, Pag Web', 'No', 'REGULARIZACION')
  ],
  '2014': [],
  '2013': [],
  '2012': [],
  '2011': [],
  '2010': [],
  '2009': []
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6Ley20671({ anio, busqueda }: Seccion7_6Ley20671Props) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (registrosPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) => normalizarTexto(valor).includes(termino))
  );

  if (registros.length === 0) {
    return (
      <EstadoSinRegistros
        titulo="Recepción Regularización Ley 20.671"
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
                  {registro.tipoNorma && ` ${registro.tipoNorma}`}
                  {registro.numero && ` N° ${registro.numero}`}
                  {registro.fecha && ` — ${registro.fecha}`}
                  {registro.nombreTitulo && ` · ${registro.nombreTitulo}`}
                </span>
              </span>
            </summary>
            <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-white p-4 sm:grid-cols-2 xl:grid-cols-4">
              <div><p className="text-xs text-slate-500">Denominación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.denominacion}</p></div>
              <div><p className="text-xs text-slate-500">Tipo de norma</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tipoNorma || '—'}</p></div>
              <div><p className="text-xs text-slate-500">Número</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.numero || '—'}</p></div>
              <div><p className="text-xs text-slate-500">Nombre / título</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.nombreTitulo || '—'}</p></div>
              <div><p className="text-xs text-slate-500">Fecha</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fecha || '—'}</p></div>
              <div><p className="text-xs text-slate-500">Fecha, medio y forma de publicación</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.fechaPublicacion || '—'}</p></div>
              <div><p className="text-xs text-slate-500">Tiene efectos generales</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.tieneEfectosGenerales || '—'}</p></div>
              <div><p className="text-xs text-slate-500">Fecha última actualización</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.ultimaActualizacion || '—'}</p></div>
              <div><p className="text-xs text-slate-500">Breve descripción del objeto del acto</p><p className="mt-1 text-xs font-medium text-slate-900">{registro.descripcion}</p></div>
              <div>
                <p className="text-xs text-slate-500">Enlace a la publicación o archivo correspondiente</p>
                {registro.numero && (
                  <PdfLinkButton
                    href={registro.enlacePublicacion}
                    className="mt-1"
                    ariaLabel={`Abrir PDF de regularización Ley 20.671 número ${registro.numero}`}
                  />
                )}
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
