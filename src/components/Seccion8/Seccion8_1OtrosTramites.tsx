import { ArrowLeft, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Seccion8_1OtrosTramitesProps {
  onVolver: () => void;
}

interface OtroTramite {
  servicio: string;
  consiste: string;
  requisitos: string;
  documentos: string;
  dirigido: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad: string;
  valor: string;
  disponibleEnLinea: string;
  enlaceEnLinea?: string;
}

const tipologias = [
  'Alcaldía y Administración Municipal',
  'Dirección Secretaría Municipal',
  'Dirección Secretaría Comunal de Planificación',
  'Dirección Administración y Finanzas',
  'Dirección Obras Municipal',
  'Dirección Transito y Transporte Público',
  'Dirección Medio Ambiente y Operaciones',
  'Dirección de Desarrollo Comunitario'
] as const;

type Tipologia = (typeof tipologias)[number];

const tramites: Record<Tipologia, OtroTramite[]> = {
  'Alcaldía y Administración Municipal': [
    {
      servicio: 'Audiencias Públicas',
      consiste: 'Atención del señor Alcalde a la comunidad.',
      requisitos: 'Solicitar audiencia.',
      documentos: 'Presencial.',
      dirigido: 'Alcalde.',
      etapas: 'Se solicita el día de la audiencia, la que es ingresada a la agenda del alcalde; su atención es por orden de llegada.',
      lugar: 'Alcaldía, San Pablo 5959, segundo piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      disponibleEnLinea: 'Sí',
      enlaceEnLinea: ''
    },
    {
      servicio: 'Reclamo, sugerencia o felicitación',
      consiste: 'Reclamo, sugerencia o felicitación.',
      requisitos: 'Ingresar carta a Oficina de Partes informando antecedentes relacionados con el tema.',
      documentos: 'Ingreso de carta.',
      dirigido: 'Administrador Municipal.',
      etapas: 'Este es según la magnitud de la denuncia y el proceso de tramitación de la misma; se fija plazo de acuerdo a la ley.',
      lugar: 'Oficina de Partes, San Pablo 5959, primer piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      disponibleEnLinea: 'No'
    }
  ],
  'Dirección Secretaría Municipal': [
    {
      servicio: 'Audiencias Directora de Secretaría Municipal',
      consiste: 'Entrevistar con el Director(a) de Secretaría Municipal.',
      requisitos: 'Persona Natural o Jurídica.',
      documentos: 'No aplica.',
      dirigido: 'Dirección de Secretaría Municipal.',
      etapas: '1. Solicitud en secretaría de la Dirección de Secretaría Municipal. Teléfono secretaría: 2388763.',
      lugar: 'Dirección de Secretaría Municipal, Avda. San Pablo 5959, segundo piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      disponibleEnLinea: 'No',
      enlaceEnLinea: ''
    }
  ],
  'Dirección Secretaría Comunal de Planificación': [
    {
      servicio: 'Audiencias Director de SECPLAC',
      consiste: 'Entrevistar con el Director de SECPLAC.',
      requisitos: 'Persona Natural o Jurídica.',
      documentos: 'No aplica.',
      dirigido: 'Dirección de Secretaría de Planificación Comunal.',
      etapas: '1. Solicitud en secretaría de la SECPLAC o teléfono secretaría: 23887705.',
      lugar: 'Dirección de SECPLAC, Avda. San Pablo 5959, segundo piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      disponibleEnLinea: 'No',
      enlaceEnLinea: ''
    }
  ],
  'Dirección Administración y Finanzas': [
    {
      servicio: 'Audiencias Director de Administración y Finanzas',
      consiste: 'Entrevistar con el Director de Administración y Finanzas.',
      requisitos: 'Persona Natural o Jurídica.',
      documentos: 'No aplica.',
      dirigido: 'Dirección de Administración y Finanzas.',
      etapas: '1. Solicitud en secretaría de la Dirección de Administración y Finanzas o teléfono secretaría: 23887576.',
      lugar: 'Dirección de Administración y Finanzas, Avda. San Pablo 5959, primer piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      disponibleEnLinea: 'No',
      enlaceEnLinea: ''
    }
  ],
  'Dirección Obras Municipal': [
    {
      servicio: 'Audiencias Director de Obras',
      consiste: 'Entrevistar con el Director de Obras.',
      requisitos: 'Persona Natural o Jurídica.',
      documentos: 'No aplica.',
      dirigido: 'Dirección de Obras Municipal.',
      etapas: '1. Solicitud en secretaría de la DOM o teléfono secretaría: 23887546.',
      lugar: 'Dirección de Obras Municipal, Avda. San Pablo 5959, primer piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      disponibleEnLinea: 'No',
      enlaceEnLinea: ''
    }
  ],
  'Dirección Transito y Transporte Público': [
    {
      servicio: 'Audiencias Director de Tránsito y Transporte Público',
      consiste: 'Entrevistar con el Director de Tránsito y Transporte Público.',
      requisitos: 'Persona Natural o Jurídica.',
      documentos: 'No aplica.',
      dirigido: 'Dirección de Tránsito y Transporte Público.',
      etapas: '1. Solicitud en secretaría de la Dirección de Tránsito y Transporte Público o teléfono secretaría: 23887515.',
      lugar: 'Dirección de Tránsito y Transporte Público, Avda. San Pablo 5959, primer piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      disponibleEnLinea: 'No',
      enlaceEnLinea: ''
    }
  ],
  'Dirección Medio Ambiente y Operaciones': [
    {
      servicio: 'Audiencias Director de Medio Ambiente y Operaciones',
      consiste: 'Entrevistar con el Director de Medio Ambiente y Operaciones.',
      requisitos: 'Persona Natural o Jurídica.',
      documentos: 'No aplica.',
      dirigido: 'Dirección de Medio Ambiente y Operaciones.',
      etapas: '1. Solicitud en secretaría de la Dirección de Medio Ambiente y Operaciones o teléfono secretaría: 23887412.',
      lugar: 'Dirección de Medio Ambiente y Operaciones, Avda. San Pablo 5959, primer piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      disponibleEnLinea: 'No',
      enlaceEnLinea: ''
    }
  ],
  'Dirección de Desarrollo Comunitario': [
    {
      servicio: 'Audiencias Director de Desarrollo Comunitario',
      consiste: 'Entrevistar con el Director de Desarrollo Comunitario.',
      requisitos: 'Persona Natural o Jurídica.',
      documentos: 'No aplica.',
      dirigido: 'Dirección de Desarrollo Comunitario.',
      etapas: '1. Solicitud en secretaría de la Dirección de Desarrollo Comunitario o teléfono secretaría: 23887432.',
      lugar: 'Dirección de Desarrollo Comunitario, Avda. San Pablo 5959, primer piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      disponibleEnLinea: 'No',
      enlaceEnLinea: ''
    }
  ]
};

const columnas: { key: keyof OtroTramite; titulo: string }[] = [
  { key: 'servicio', titulo: 'Trámite o Servicio' },
  { key: 'consiste', titulo: 'En qué Consiste (breve Descripción)' },
  { key: 'requisitos', titulo: 'Requisitos' },
  { key: 'documentos', titulo: 'Documentos requeridos' },
  { key: 'dirigido', titulo: 'A quién está dirigido' },
  { key: 'etapas', titulo: 'Trámite a realizar y/o etapas' },
  { key: 'lugar', titulo: '¿Dónde se realiza?' },
  { key: 'costo', titulo: 'Tiene costo (Sí/No)' },
  { key: 'unidad', titulo: 'Unidad monetaria' },
  { key: 'valor', titulo: 'Valor del servicio' },
  { key: 'disponibleEnLinea', titulo: '¿Este trámite está disponible en línea? (Sí/No)' }
];

export default function Seccion8_1OtrosTramites({ onVolver }: Seccion8_1OtrosTramitesProps) {
  const [tipologiaSeleccionada, setTipologiaSeleccionada] = useState<Tipologia>(tipologias[0]);
  const [tramiteAbierto, setTramiteAbierto] = useState<string | null>(tramites[tipologias[0]][0]?.servicio ?? null);
  const tramitesFiltrados = tramites[tipologiaSeleccionada];

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Otros Trámites</span>
      </nav>

      <header className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900">Otros Trámites</h2>
        <p className="text-sm text-slate-600">
          A continuación se presentan los actos y resoluciones de este Organismo que tienen efecto sobre terceros.
        </p>
      </header>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
        <label htmlFor="filtro-tipologia-otros-tramites" className="text-sm font-semibold text-slate-700">
          Seleccione según tipología
        </label>
        <select
          id="filtro-tipologia-otros-tramites"
          value={tipologiaSeleccionada}
          onChange={(event) => {
            const tipologia = tipologias.find((item) => item === event.target.value);
            if (tipologia) {
              setTipologiaSeleccionada(tipologia);
              setTramiteAbierto(tramites[tipologia][0]?.servicio ?? null);
            }
          }}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-auto sm:min-w-80"
        >
          {tipologias.map((tipologia) => (
            <option key={tipologia} value={tipologia}>{tipologia}</option>
          ))}
        </select>
      </div>

      <section aria-label={`Trámites: ${tipologiaSeleccionada}`} className="space-y-3">
        {tramitesFiltrados.map((tramite) => {
          const abierto = tramiteAbierto === tramite.servicio;

          return (
            <article key={tramite.servicio} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-shadow hover:shadow-sm">
              <button
                type="button"
                aria-expanded={abierto}
                onClick={() => setTramiteAbierto(abierto ? null : tramite.servicio)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-slate-50 sm:px-5"
              >
                <span className="text-sm font-semibold text-slate-800">{tramite.servicio}</span>
                {abierto
                  ? <ChevronDown className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  : <ChevronRight className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />}
              </button>

              {abierto && (
                <div className="border-t border-slate-100 p-3 sm:p-4">
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <div className="border-b border-slate-100 p-3 sm:p-4">
                      <span className="inline-flex rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-semibold text-blue-700">
                        Trámite - {tipologiaSeleccionada}
                      </span>
                      <h3 className="mt-2 text-sm font-bold text-slate-900">{tramite.servicio}</h3>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-5 gap-y-4 bg-slate-50 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-4">
                      {columnas.map((columna) => (
                        <div key={columna.key} className={columna.key === 'etapas' || columna.key === 'consiste' ? 'sm:col-span-2 lg:col-span-2' : ''}>
                          <dt className="text-[10px] font-medium text-slate-500">{columna.titulo}</dt>
                          <dd className="mt-1 whitespace-pre-line text-xs leading-relaxed text-slate-900">{tramite[columna.key]}</dd>
                        </div>
                      ))}
                      <div className="sm:col-span-2 lg:col-span-2">
                        <dt className="text-[10px] font-medium text-slate-500">Enlace al Trámite en línea, si corresponde</dt>
                        <dd className="mt-1 text-xs leading-relaxed text-slate-900">
                          {tramite.disponibleEnLinea === 'Sí' && tramite.enlaceEnLinea !== undefined ? (
                            <a
                              href={tramite.enlaceEnLinea || 'about:blank'}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-medium text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                            >
                              Abrir enlace <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          ) : (
                            'No aplica'
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Transparencia Activa
        </button>
      </div>
    </div>
  );
}
