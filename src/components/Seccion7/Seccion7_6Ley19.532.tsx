import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6Ley19532Props {
  anio: string;
  busqueda: string;
}

interface RegularizacionLey19532 {
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

const registro2014: RegularizacionLey19532 = {
  denominacion: 'REGULARIZACION LEY 19532',
  tipoNorma: 'Actos Administrativos',
  numero: '15',
  nombreTitulo: 'EDUCACION BASICA',
  fecha: '02.12.2014',
  fechaPublicacion: 'página web, con fecha 05.01.2015',
  tieneEfectosGenerales: 'Sí',
  ultimaActualizacion: 'Sin Modificación',
  descripcion: 'AMPLIACION',
  enlacePublicacion: ''
};

const registrosPorAnio: Record<string, RegularizacionLey19532[]> = {
  '2016': [],
  '2015': [],
  '2014': [registro2014],
  '2013': [],
  '2012': [],
  '2011': [],
  '2010': [],
  '2009': []
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6Ley19532({ anio, busqueda }: Seccion7_6Ley19532Props) {
  const termino = normalizarTexto(busqueda.trim());
  const registros = (registrosPorAnio[anio] ?? []).filter((registro) =>
    !termino || Object.values(registro).some((valor) => normalizarTexto(valor).includes(termino))
  );

  if (registros.length === 0) {
    return (
      <EstadoSinRegistros
        titulo="Regularización Ley 19.532"
        anio={anio}
        busqueda={busqueda}
      />
    );
  }

  return (
    <div className="space-y-2">
      {registros.map((registro) => (
        <article
          key={`${anio}-${registro.numero}`}
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
                  ariaLabel={`Abrir PDF de regularización Ley 19.532 número ${registro.numero}`}
                />
              </div>
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
