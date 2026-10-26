import PdfLinkButton from '../PdfLinkButton';
import EstadoSinRegistros from './EstadoSinRegistros';

interface Seccion7_6CambioNombreProps {
  anio: string;
  busqueda: string;
}

export interface CambioNombreVia {
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
  documentosModificacion?: Array<{ url?: string }>;
}

export const cambioNombreViaPorAnio: Record<string, CambioNombreVia[]> = {
  // Aquí van las URL de Drive en urlPublicacion, urlModificacion y documentosModificacion[].url.
  '2016': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Obras Municipales',
      nombreTitulo: 'No hay',
      numero: 'No hay',
      fecha: 'No hay',
      fechaPublicacion: 'No hay',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlacePublicacion: 'No hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2015': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Obras Municipales',
      nombreTitulo: 'No hay',
      numero: 'No hay',
      fecha: 'No hay',
      fechaPublicacion: 'No hay',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlacePublicacion: 'No hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2014': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Obras Municipales',
      nombreTitulo: 'Aprueba cambio de nombre de AV. Las Rojas',
      numero: '1803',
      fecha: '30.08.14',
      fechaPublicacion: '06.07.2014 Página Web',
      tieneEfectosGenerales: 'Si',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'AUTORIZA EFECTUAR RESPALDO COMPUTACIONAL DE LOS SISTEMAS COMPUTACIONALES EN EL SENTIDO DE MODIFICAR LA BASE DE DATOS QUE CORRESPONDE AL CAMBIO DE NOMBRE DE AV. LAS ROJAS DE LA COMUNA DE LO PRADO.',
      enlacePublicacion: 'PDF',
      urlPublicacion: '', // Aquí poner URL de Drive del PDF de publicación.
      enlaceModificacion: 'PDF',
      documentosModificacion: [{ url: '' }, { url: '' }] // Aquí poner URL de Drive en cada url.
    }
  ],
  '2013': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Obras Municipales',
      nombreTitulo: 'No hay',
      numero: 'No hay',
      fecha: 'No hay',
      fechaPublicacion: 'No hay',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlacePublicacion: 'No hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2012': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Obras Municipales',
      nombreTitulo: 'Aprueba Cambio de Nombre',
      numero: '2088',
      fecha: '04.12.2012',
      fechaPublicacion: 'Página Web',
      tieneEfectosGenerales: 'Si',
      ultimaActualizacion: '06.08.2014',
      descripcion: 'APRUEBA CAMBIO DE NOMBRE DE AV. LAS ROJAS DE LA COMUNA DE LO PRADO POR MARÍA ROZAS VELÁSQUEZ.',
      enlacePublicacion: 'PDF',
      enlaceModificacion: 'PDF',
      urlModificacion: '' // Aquí poner URL de Drive del PDF de modificación.
    }
  ],
  '2011': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Obras Municipales',
      nombreTitulo: 'No hay',
      numero: 'No hay',
      fecha: 'No hay',
      fechaPublicacion: 'No hay',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlacePublicacion: 'No hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2010': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Obras Municipales',
      nombreTitulo: 'No hay',
      numero: 'No hay',
      fecha: 'No hay',
      fechaPublicacion: 'No hay',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlacePublicacion: 'No hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2009': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Obras Municipales',
      nombreTitulo: 'No hay',
      numero: 'No hay',
      fecha: 'No hay',
      fechaPublicacion: 'No hay',
      tieneEfectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlacePublicacion: 'No hay',
      enlaceModificacion: 'No Hay'
    }
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

const renderPdfLink = ({ href, ariaLabel }: { href?: string; ariaLabel: string }) => {
  return <PdfLinkButton href={href} ariaLabel={ariaLabel} />;
};

export default function Seccion7_6CambioNombre({ anio, busqueda }: Seccion7_6CambioNombreProps) {
  const registrosAnio = cambioNombreViaPorAnio[anio] || [];
  const termino = normalizarTexto(busqueda.trim());
  const registros = termino
    ? registrosAnio.filter((registro) =>
        Object.values(registro).some((valor) =>
          normalizarTexto(String(valor ?? '')).includes(termino)
        )
      )
    : registrosAnio;

  if (registros.length === 0) {
    return <EstadoSinRegistros titulo="Cambio de Nombre de Vía Pública" anio={anio} busqueda={busqueda} />;
  }

  return (
    <div className="space-y-3">
      {registros.map((registro, index) => (
        <article
          key={`${anio}-${registro.numero}-${index}`}
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
                    ariaLabel: `Abrir PDF de cambio de nombre número ${registro.numero}`
                  })
                : <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlacePublicacion}</p>}
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
              <div className="mt-1 flex flex-col items-start gap-1">
                {registro.documentosModificacion?.length
                  ? registro.documentosModificacion.map((documento, documentoIndex) =>
                      renderPdfLink({
                        href: documento.url,
                        ariaLabel: `Abrir PDF ${documentoIndex + 1} de la modificación de cambio de nombre número ${registro.numero}`
                      })
                    )
                  : registro.urlModificacion || registro.enlaceModificacion.toLocaleLowerCase() === 'pdf'
                    ? renderPdfLink({
                        href: registro.urlModificacion,
                        ariaLabel: `Abrir modificación de cambio de nombre número ${registro.numero}`
                      })
                    : <p className="text-xs font-medium text-slate-900">{registro.enlaceModificacion}</p>}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
