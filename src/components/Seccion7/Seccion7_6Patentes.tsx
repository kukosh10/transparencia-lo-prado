import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import PdfLinkButton from '../PdfLinkButton';
import { patentesAlcoholPorAnio } from './Seccion7_6Patentes(alcohol)';
import { patentesComercialesPorAnio } from './Seccion7_6Patentes(comercial)';
import { patentesProfesionalesPorAnio } from './Seccion7_6Patente(profesional)';
import { patentesProvisoriasPorAnio } from './Seccion7_6Patente(provisoria)';
import { patentesMicroempresaPorAnio } from './Seccion7_6Patente(microempresa)';
import { permisosFeriaPorAnio } from './Seccion7_6Patente(feriaLibre)';
import { permisosFeriaSantaMartaPorAnio } from './Seccion7_6Patente(FeriaStaMarta)';

export interface PatenteHistorico {
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
  enlaceModificacion: string;
  urlPublicacion: string;
  urlModificacion: string;
}

interface Seccion7_6PatentesProps {
  anio: string;
  busqueda: string;
  categorias: readonly string[];
  onCambiarAnio: (anio: string) => void;
}

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6Patentes({
  anio,
  busqueda,
  categorias,
  onCambiarAnio
}: Seccion7_6PatentesProps) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
  const termino = normalizarTexto(busqueda.trim());
  const patentesFiltradas = termino
    ? categorias.filter((patente) => normalizarTexto(patente).includes(termino))
    : categorias;

  if (categoriaSeleccionada) {
    const registrosPorAnio = categoriaSeleccionada === 'Patente Alcohol'
      ? patentesAlcoholPorAnio
      : categoriaSeleccionada === 'Patente Comercial'
        ? patentesComercialesPorAnio
        : categoriaSeleccionada === 'Patente Profesional'
          ? patentesProfesionalesPorAnio
          : categoriaSeleccionada === 'Patente Provisoria'
            ? patentesProvisoriasPorAnio
            : categoriaSeleccionada === 'Patente Micro Empresa Familiar'
              ? patentesMicroempresaPorAnio
              : categoriaSeleccionada === 'Permiso Ferias Libres'
                ? permisosFeriaPorAnio
                : categoriaSeleccionada === 'Permiso Feria Santa Marta'
                  ? permisosFeriaSantaMartaPorAnio
                : {};
    const registrosAnio = registrosPorAnio[anio] || [];
    const registros = termino
      ? registrosAnio.filter((registro) =>
          Object.values(registro).some((valor) => normalizarTexto(valor).includes(termino))
        )
      : registrosAnio;

    return (
      <div className="space-y-4">
        <nav className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700" aria-label="Ruta de navegación">
          <button
            type="button"
            onClick={() => setCategoriaSeleccionada(null)}
            className="border-none bg-transparent p-0 text-blue-700 hover:underline"
          >
            Patentes y Permisos Comerciales
          </button>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
          <span className="text-slate-700">{categoriaSeleccionada}</span>
        </nav>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-base font-bold text-slate-900">{categoriaSeleccionada}</h3>
          <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
            <label htmlFor="anio-patentes" className="text-xs font-semibold text-slate-700">Seleccione año:</label>
            <select
              id="anio-patentes"
              value={anio}
              onChange={(evento) => onCambiarAnio(evento.target.value)}
              className="border-none bg-transparent text-xs font-bold text-blue-800 outline-none"
            >
              {['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'].map((opcionAnio) => (
                <option key={opcionAnio} value={opcionAnio}>{opcionAnio}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          A continuación se presentan los actos y resoluciones de este Organismo que tienen efecto sobre terceros.
        </p>

        {registros.length === 0 ? (
          categoriaSeleccionada === 'Patente Comercial' &&
          ['2012', '2011', '2010', '2009'].includes(anio) &&
          !termino ? null : (
          <p className="py-4 text-center text-xs italic text-slate-400">
            {termino
              ? `No se encontraron registros que coincidan con “${busqueda}” para el año ${anio}.`
              : `Sin registros para el año ${anio}`}
          </p>
          )
        ) : (
          <div className="space-y-2">
            {registros.map((registro, index) => {
              const idAcordeon = `patente-${normalizarTexto(categoriaSeleccionada).replace(/\s+/g, '-')}-${anio}-${registro.numero}-${index}`;

              return (
                <article key={idAcordeon} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
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
                      <span className="shrink-0 text-blue-700" aria-hidden="true">
                        <ChevronDown className="h-4 w-4 group-open:hidden" />
                        <ChevronUp className="hidden h-4 w-4 group-open:block" />
                      </span>
                    </summary>
                    <div className="grid grid-cols-1 gap-4 border-t border-slate-100 bg-white p-4 sm:grid-cols-2 xl:grid-cols-4">
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
                        {registro.enlacePublicacion.toLocaleLowerCase() === 'pdf' ? (
                          <PdfLinkButton
                            href={registro.urlPublicacion}
                            ariaLabel={`Abrir PDF de publicación del ${registro.nombreTitulo} número ${registro.numero}`}
                            className="mt-1"
                          />
                        ) : (
                          <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlacePublicacion}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Enlace relacionado a la modificación</p>
                        {registro.ultimaActualizacion !== 'Sin Modificaciones' || registro.enlaceModificacion.toLocaleLowerCase() === 'pdf' ? (
                          <PdfLinkButton
                            href={registro.urlModificacion}
                            ariaLabel={`Abrir PDF de modificación del ${registro.nombreTitulo} número ${registro.numero}`}
                            className="mt-1"
                          />
                        ) : (
                          <p className="mt-1 text-xs font-medium text-slate-900">{registro.enlaceModificacion}</p>
                        )}
                      </div>
                    </div>
                  </details>
                </article>
              );
            })}
          </div>
        )}

        <button
          type="button"
          onClick={() => setCategoriaSeleccionada(null)}
          className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Patentes y Permisos
        </button>
      </div>
    );
  }

  if (patentesFiltradas.length === 0) {
    return (
      <p className="py-2 text-center text-xs italic text-slate-400">
        No se encontraron categorías de patentes que coincidan con “{busqueda}”.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {patentesFiltradas.map((patente) => (
        <article key={patente} className="overflow-hidden rounded-md border border-slate-300 bg-white transition-colors hover:border-blue-400">
          <button
            type="button"
            onClick={() => setCategoriaSeleccionada(patente)}
            className="flex min-h-14 w-full items-center justify-between gap-2 border-none bg-white px-2 py-2 text-left text-[11px] font-semibold text-blue-800"
          >
            <span>{patente}</span>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-blue-600" aria-hidden="true" />
          </button>
        </article>
      ))}
    </div>
  );
}
