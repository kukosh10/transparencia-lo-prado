import PdfLinkButton from '../PdfLinkButton';

interface Seccion7_6CierreCallesProps {
  anio: string;
  busqueda: string;
}

export interface CierreCalle {
  tipoNorma: string;
  denominacion: string;
  titulo: string;
  numero: string;
  fecha: string;
  fechaPublicacion: string;
  efectosGenerales: string;
  ultimaActualizacion: string;
  descripcion: string;
  enlaceDocumento: string;
  urlDocumento?: string;
  enlaceModificacion: string;
  urlModificacion?: string;
}

export const cierresCallesPorAnio: Record<string, CierreCalle[]> = {
  // Aquí van las URL de Drive en urlDocumento y urlModificacion del registro que tenga PDF.
  '2016': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Tránsito y Transporte Público',
      titulo: 'Cierre de Calle y/o Pasajes',
      numero: 'No hay',
      fecha: 'No Hay',
      fechaPublicacion: 'No hay',
      efectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlaceDocumento: 'no hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2015': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Tránsito y Transporte Público',
      titulo: 'Cierre de Calle y/o Pasajes',
      numero: 'No hay',
      fecha: 'No Hay',
      fechaPublicacion: 'No hay',
      efectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlaceDocumento: 'no hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2014': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Transito',
      titulo: 'Cierre temporal de calle',
      numero: '3503',
      fecha: '03.12.14',
      fechaPublicacion: '06.01.2015 Página Web',
      efectosGenerales: 'Si',
      ultimaActualizacion: 'Sin Modificaciones',
      descripcion: 'AUTORIZA CIERRE TEMPORAL DE CALLES Y DESVIOS DE TRANSITO EN FECHAS QUE INDICA, POR FUNCIONAMIENTO DE FERIAS NAVIDEÑAS LO PRADO.',
      enlaceDocumento: 'PDF',
      urlDocumento: '', // Aquí poner URL de Drive del PDF de publicación.
      enlaceModificacion: 'Sin Modificaciones',
      urlModificacion: '' // Aquí poner URL de Drive del PDF de modificación.
    }
  ],
  '2013': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Tránsito y Transporte Público',
      titulo: 'Cierre de Calle y/o Pasajes',
      numero: 'No hay',
      fecha: 'No Hay',
      fechaPublicacion: 'No hay',
      efectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlaceDocumento: 'no hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2012': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Tránsito y Transporte Público',
      titulo: 'Cierre de Calle y/o Pasajes',
      numero: 'No hay',
      fecha: 'No Hay',
      fechaPublicacion: 'No hay',
      efectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlaceDocumento: 'no hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2011': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Tránsito y Transporte Público',
      titulo: 'Cierre de Calle y/o Pasajes',
      numero: 'No hay',
      fecha: 'No Hay',
      fechaPublicacion: 'No hay',
      efectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlaceDocumento: 'no hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2010': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Tránsito y Transporte Público',
      titulo: 'Cierre de Calle y/o Pasajes',
      numero: 'No hay',
      fecha: 'No Hay',
      fechaPublicacion: 'No hay',
      efectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlaceDocumento: 'no hay',
      enlaceModificacion: 'No Hay'
    }
  ],
  '2009': [
    {
      tipoNorma: 'Decreto',
      denominacion: 'Tránsito y Transporte Público',
      titulo: 'Cierre de Calle y/o Pasajes',
      numero: 'No hay',
      fecha: 'No Hay',
      fechaPublicacion: 'No hay',
      efectosGenerales: 'No',
      ultimaActualizacion: 'No hay',
      descripcion: 'No existen para este año',
      enlaceDocumento: 'no hay',
      enlaceModificacion: 'No Hay'
    }
  ]
};

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6CierreCalles({ anio, busqueda }: Seccion7_6CierreCallesProps) {
  const registrosAnio = cierresCallesPorAnio[anio] || [];
  const termino = normalizarTexto(busqueda.trim());
  const registros = termino
    ? registrosAnio.filter((registro) =>
        Object.values(registro).some((valor) =>
          normalizarTexto(String(valor ?? '')).includes(termino)
        )
      )
    : registrosAnio;

  if (registros.length === 0) {
    return (
      <p className="py-2 text-center text-xs italic text-slate-400">
        {termino
          ? `No se encontraron registros que coincidan con “${busqueda}” para el año ${anio}.`
          : `Sin registros para el año ${anio}`}
      </p>
    );
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
            <h4 className="text-sm font-semibold text-slate-900">{registro.titulo}</h4>
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
              <p className="mt-1 text-xs font-medium text-slate-900">{registro.efectosGenerales}</p>
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
              {registro.urlDocumento ? (
                <PdfLinkButton href={registro.urlDocumento} ariaLabel={`Abrir PDF de cierre de calles número ${registro.numero}`} className="mt-1" />
              ) : registro.enlaceDocumento.toLocaleLowerCase() === 'pdf' ? (
                <PdfLinkButton ariaLabel={`Abrir PDF de cierre de calles número ${registro.numero}`} className="mt-1" />
              ) : (
                <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlaceDocumento}</p>
              )}
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
              <div className="mt-1 text-xs font-medium text-slate-900">
                {registro.urlModificacion ? (
                  <PdfLinkButton href={registro.urlModificacion} ariaLabel={`Abrir PDF de modificación de cierre de calles número ${registro.numero}`} />
                ) : registro.enlaceModificacion.toLocaleLowerCase() === 'pdf' ? (
                  <PdfLinkButton ariaLabel={`Abrir PDF de modificación de cierre de calles número ${registro.numero}`} />
                ) : (
                  registro.enlaceModificacion
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
