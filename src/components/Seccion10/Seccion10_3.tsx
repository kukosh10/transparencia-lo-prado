import { useState } from 'react';
import { ArrowLeft, ChevronRight, FileText } from 'lucide-react';

interface Seccion10_3Props {
  onVolver: () => void;
  onVolverSeccion: () => void;
  onAbrirConsejoConsultivo: () => void;
}

interface DocumentoConsejo {
  titulo: string;
  enlaceTexto: string;
  url: string;
  abrirConsejoConsultivo?: boolean;
}

interface ActaConsejo {
  nombre: string;
  url: string;
}

interface ActasAnio {
  anio: string;
  actas: readonly ActaConsejo[];
}

const actasPorAnio: readonly ActasAnio[] = [
  {
    anio: '2016',
    actas: [{ nombre: 'Acta', url: '' }]
  },
  {
    anio: '2015',
    actas: [
      { nombre: 'Acta Ordinarias N° 1', url: '' },
      { nombre: 'Acta Ordinarias N° 2', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 1', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 2', url: '' },
      { nombre: 'Acta Ordinarias N° 3', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 3', url: '' },
      { nombre: 'Acta Ordinarias N° 4', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 4', url: '' },
      { nombre: 'Acta Ordinarias N° 5', url: '' }
    ]
  },
  {
    anio: '2014',
    actas: [
      { nombre: 'Acta Ordinarias N° 1', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 1', url: '' },
      { nombre: 'Acta Ordinarias N° 2', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 2', url: '' },
      { nombre: 'Acta Ordinarias N° 3', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 3', url: '' },
      { nombre: 'Acta Ordinarias N° 4', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 4', url: '' }
    ]
  },
  {
    anio: '2013',
    actas: [
      { nombre: 'Acta Ordinarias N° 1', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 1', url: '' },
      { nombre: 'Acta Ordinarias N° 2', url: '' },
      { nombre: 'Acta Ordinarias N° 3', url: '' },
      { nombre: 'Acta Ordinarias N° 4', url: '' },
      { nombre: 'Acta Ordinarias N° 5', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 2', url: '' },
      { nombre: 'Acta Ordinarias N° 6', url: '' }
    ]
  },
  {
    anio: '2012',
    actas: [
      { nombre: 'Acta Ordinarias N° 1', url: '' },
      { nombre: 'Acta Ordinarias N° 2', url: '' },
      { nombre: 'Acta Ordinarias N° 3', url: '' },
      { nombre: 'Acta Ordinarias N° 4', url: '' },
      { nombre: 'Acta Extra Ordinaria N° 1', url: '' }
    ]
  }
];

const documentos: readonly DocumentoConsejo[] = [
  // Asamblea Constitutiva Consejo Comunal de Organizaciones de la Sociedad Civil
  {
    titulo: 'Asamblea Constitutiva Consejo Comunal de Organizaciones de la Sociedad Civil',
    enlaceTexto: 'Acta Constitutiva',
    url: ''
  },
  // Decreto 1420: Constitución del Consejo Comunal de Organizaciones de la Sociedad Civil de Lo Prado
  {
    titulo: 'Declara Constitución del Consejo Comunal de Organizaciones de la Sociedad Civil de Lo Prado',
    enlaceTexto: 'Decreto 1420, de fecha 04.06.2012',
    url: ''
  },
  // Ordenanza que regula los mecanismos de participación
  {
    titulo: 'Ordenanzas Regulan los Mecanismos de participación',
    enlaceTexto: 'Ordenanza',
    url: ''
  },
  // Representantes del Consejo Comunal de Organizaciones de la Sociedad Civil
  {
    titulo: 'Consejos Consultivos',
    enlaceTexto: 'Representantes Consejo Comunal de Organizaciones de la Sociedad Civil',
    url: '',
    abrirConsejoConsultivo: true
  },
  // Organigrama institucional del Consejo Comunal de Organizaciones de la Sociedad Civil
  {
    titulo: 'Consejo Comunal de Organizaciones de la Sociedad Civil',
    enlaceTexto: 'Organigrama institucional',
    url: ''
  },
  // Ley 20.500 sobre Asociaciones y Participación Ciudadana en la Gestión Pública
  {
    titulo: 'Ley 20.500, Sobre Asociaciones y Participación Ciudadana en la Gestión Pública',
    enlaceTexto: 'Ley 20.500',
    url: 'https://www.bcn.cl/leychile/navegar?idNorma=1023143'
  },
  // Reglamento COSOC
  {
    titulo: 'Reglamento COSOC',
    enlaceTexto: 'Reglamento COSOC',
    url: ''
  }
];

export default function Seccion10_3({
  onVolver,
  onVolverSeccion,
  onAbrirConsejoConsultivo
}: Seccion10_3Props) {
  const [vistaActasAbierta, setVistaActasAbierta] = useState(false);
  const [anioSeleccionado, setAnioSeleccionado] = useState<string | null>(null);

  if (vistaActasAbierta) {
    const actasAnio = actasPorAnio.find(({ anio }) => anio === anioSeleccionado);

    return (
      <div className="content-box-wide space-y-4 pt-2">
        <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
          <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
            Transparencia Activa
          </button>
          <span className="text-slate-400">&gt;</span>
          <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
            Participación Ciudadana
          </button>
          <span className="text-slate-400">&gt;</span>
          <button type="button" onClick={() => { setVistaActasAbierta(false); setAnioSeleccionado(null); }} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
            Consejo Comunal de Organizaciones de la Sociedad Civil
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-700">Actas</span>
          {anioSeleccionado && (
            <>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-700">{anioSeleccionado}</span>
            </>
          )}
        </nav>

        <header className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Consejo Comunal</p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
              {actasAnio ? `Actas · ${actasAnio.anio}` : 'Actas del Consejo Comunal'}
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            {actasAnio ? `${actasAnio.actas.length} actas` : `${actasPorAnio.length} años disponibles`}
          </span>
        </header>

        {actasAnio ? (
          <section aria-label={`Actas ${actasAnio.anio}`} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {actasAnio.actas.map((acta) => (
              <a
                key={`${actasAnio.anio}-${acta.nombre}`}
                href={acta.url || 'about:blank'}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-24 items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-slate-800 group-hover:text-blue-800">
                  {acta.nombre}
                </span>
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 group-hover:text-blue-600" aria-hidden="true" />
              </a>
            ))}
          </section>
        ) : (
          <section aria-label="Años de actas" className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {actasPorAnio.map(({ anio, actas }) => (
              <button
                key={anio}
                type="button"
                onClick={() => setAnioSeleccionado(anio)}
                className="group flex min-h-28 flex-col items-start justify-between rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-700">{anio}</span>
                <span className="flex w-full items-center justify-between border-t border-slate-100 pt-3 text-xs font-medium text-slate-500">
                  {actas.length} {actas.length === 1 ? 'acta' : 'actas'}
                  <ChevronRight className="h-4 w-4 text-blue-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </button>
            ))}
          </section>
        )}

        <div className="border-t border-slate-200 pt-3">
          <button
            type="button"
            onClick={() => {
              if (anioSeleccionado) {
                setAnioSeleccionado(null);
              } else {
                setVistaActasAbierta(false);
              }
            }}
            className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {anioSeleccionado ? 'Volver a los años' : 'Volver a los documentos'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="content-box-wide space-y-4 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Participación Ciudadana
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Consejo Comunal de Organizaciones de la Sociedad Civil</span>
      </nav>

      <header className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Participación ciudadana</p>
          <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
            Consejo Comunal de Organizaciones de la Sociedad Civil
          </h2>
        </div>
        <span className="text-xs text-slate-500">{documentos.length + 1} categorías</span>
      </header>

      <section aria-label="Documentos del Consejo Comunal" className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <button
          type="button"
          onClick={() => setVistaActasAbierta(true)}
          className="group flex min-h-32 flex-col rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <FileText className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold leading-snug text-slate-800 transition-colors group-hover:text-blue-800">
              Actas Consejo Comunal de Organizaciones de la Sociedad Civil
            </span>
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" aria-hidden="true" />
          </span>
          <span className="mt-auto pt-4 text-xs font-medium text-blue-700">
            Actas históricas
          </span>
        </button>

        {documentos.map((documento) => {
          const className = 'group flex min-h-32 flex-col rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600';
          const contenido = (
            <>
              <span className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-snug text-slate-800 transition-colors group-hover:text-blue-800">
                  {documento.titulo}
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" aria-hidden="true" />
              </span>
              <span className="mt-auto inline-flex items-start gap-2 pt-4 text-xs font-medium text-blue-700">
                <span>{documento.enlaceTexto}</span>
              </span>
            </>
          );

          return documento.abrirConsejoConsultivo ? (
            <button
              key={documento.titulo}
              type="button"
              onClick={onAbrirConsejoConsultivo}
              className={className}
            >
              {contenido}
            </button>
          ) : (
            <a
              key={documento.titulo}
              href={documento.url || 'about:blank'}
              target="_blank"
              rel="noreferrer"
              className={className}
            >
              {contenido}
            </a>
          );
        })}
      </section>

      <div className="border-t border-slate-200 pt-3">
        <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Participación Ciudadana
        </button>
      </div>
    </div>
  );
}
