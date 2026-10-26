import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6SentidoTransitoProps {
  anio: string;
  busqueda: string;
}

export interface SentidoTransito {
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

const crearRegistroSinDatos = (): SentidoTransito => ({
  tipoNorma: 'Decreto',
  denominacion: 'Tránsito y Transporte Público',
  nombreTitulo: 'Cambio de Sentido de Tránsito',
  numero: 'No hay',
  fecha: 'No hay',
  fechaPublicacion: 'No hay',
  tieneEfectosGenerales: 'No',
  ultimaActualizacion: 'No hay',
  descripcion: 'No existen para este año',
  enlacePublicacion: 'No hay',
  enlaceModificacion: 'No hay'
});

const registro2014: SentidoTransito = {
  tipoNorma: 'Decreto',
  denominacion: 'Transito',
  nombreTitulo: 'Establece cambio',
  numero: '2856',
  fecha: '24.09.14',
  fechaPublicacion: '06.10.2014 Página Web',
  tieneEfectosGenerales: 'Si',
  ultimaActualizacion: '01.10.14',
  descripcion: 'ESTABLECE CAMBIO DE SENTIDO DE TRANSITO EN CALLE PEDRO DE CORDOVA, ENTRE LA AV. MARIA ROZAS Y CALLE ESPAÑA, LA QUE ACTUALMENTE POSEE SENTIDO DE TRANSITO DE ORIENTE A PONIENTE.',
  enlacePublicacion: 'PDF',
  urlPublicacion: '', // Aquí poner URL de Drive del PDF de publicación.
  enlaceModificacion: 'PDF',
  urlModificacion: '' // Aquí poner URL de Drive del PDF de modificación.
};

export const sentidosTransitoPorAnio: Record<string, SentidoTransito[]> = {
  // Aquí van las URL de Drive en urlPublicacion y urlModificacion del registro con PDF.
  '2016': [crearRegistroSinDatos()],
  '2015': [crearRegistroSinDatos()],
  '2014': [registro2014],
  '2013': [crearRegistroSinDatos()],
  '2012': [crearRegistroSinDatos()],
  '2011': [crearRegistroSinDatos()],
  '2010': [crearRegistroSinDatos()],
  '2009': [crearRegistroSinDatos()]
};

const renderPdfLink = ({ href, ariaLabel }: { href?: string; ariaLabel: string }) => {
  return <PdfLinkButton href={href} ariaLabel={ariaLabel} className="mt-1" />;
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6SentidoTransito({
  anio,
  busqueda
}: Seccion7_6SentidoTransitoProps) {
  const registrosAnio = sentidosTransitoPorAnio[anio] || [];
  const termino = normalizarTexto(busqueda.trim());
  const registros = termino
    ? registrosAnio.filter((registro) =>
        Object.values(registro).some((valor) =>
          normalizarTexto(valor).includes(termino)
        )
      )
    : registrosAnio;

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Cambio de Sentido de Tránsito" anio={anio} busqueda={busqueda} />;
  }

  return (
    <div className="space-y-3">
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
                ? renderPdfLink({
                    href: registro.urlPublicacion,
                    ariaLabel: `Abrir PDF de cambio de sentido de tránsito número ${registro.numero}`
                  })
                : <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlacePublicacion}</p>}
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
              {registro.urlModificacion || registro.enlaceModificacion.toLocaleLowerCase() === 'pdf'
                ? renderPdfLink({
                    href: registro.urlModificacion,
                    ariaLabel: `Abrir modificación de cambio de sentido de tránsito número ${registro.numero}`
                  })
                : <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlaceModificacion}</p>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
