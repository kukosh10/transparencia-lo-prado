import { useState } from 'react';
import { ArrowLeft, ChevronRight, FileText } from 'lucide-react';

interface Seccion8TramAlcaldiaProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

const tramitesAlcaldia = [
  'Atención a la comunidad',
  'Audiencia Ley Lobby'
];

const enlacesLeyLobby = {
  ley: 'https://www.bcn.cl/leychile/navegar?idNorma=1060115',
  lobby: 'https://www.leylobby.gob.cl/instituciones/MU146',
  solicitud: 'https://www.leylobby.gob.cl/admin/auth/prelogin?redirect=https://www.leylobby.gob.cl/solicitud/audiencia/554',
  transparencia: 'http://transparencia.loprado.cl/'
};

const EnlaceExterno = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="font-medium text-purple-700 underline decoration-purple-300 underline-offset-2 hover:text-purple-900"
  >
    {children}
  </a>
);

export default function Seccion8TramAlcaldia({
  onVolver,
  onVolverSeccion
}: Seccion8TramAlcaldiaProps) {
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState<string | null>(null);

  if (tramiteSeleccionado === 'Audiencia Ley Lobby') {
    const filas = [
      { etiqueta: 'Requisitos', contenido: <>No tiene</> },
      { etiqueta: 'Documentos requeridos', contenido: <>No tiene</> },
      {
        etiqueta: 'Se realiza',
        contenido: (
          <div className="space-y-2">
            <p>Presencial: Avenida San Pablo 5959, segundo piso, Oficina de Alcaldía</p>
            <p>Medio Electrónicos: sitio web <EnlaceExterno href={enlacesLeyLobby.lobby}>Ley Lobby</EnlaceExterno></p>
          </div>
        )
      },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        contenido: (
          <div className="space-y-3">
            <p>
              Ingreso sitio web <EnlaceExterno href={enlacesLeyLobby.solicitud}>Solicitud de Audiencia Ley Lobby</EnlaceExterno>, Formulario Solicitud de Audiencia en forma presencial con secretaria del señor Alcalde, Oficina de Alcaldía.
            </p>
            <div>
              <p className="mb-2 font-semibold text-slate-700">Etapa:</p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Recepción de Solicitud de Audiencia</li>
                <li>
                  Análisis de la Solicitud de Audiencia
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>Aceptada</li>
                    <li>Encomendada</li>
                    <li>Rechazada</li>
                  </ul>
                </li>
                <li>
                  Solicitud Aceptada o encomendada.
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>Se informa mediante correo electrónico la fecha, hora y lugar.</li>
                  </ul>
                </li>
                <li>
                  Publicación de la Audiencia.
                  <ul className="list-disc pl-5 text-slate-600">
                    <li>Se informa el primer día hábil del mes siguiente sitio web <EnlaceExterno href={enlacesLeyLobby.lobby}>Ley Lobby</EnlaceExterno>.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        )
      },
      { etiqueta: 'Tiene costo', contenido: <>No</> },
      { etiqueta: 'Trámite está disponible en línea', contenido: <>Sí</> },
      {
        etiqueta: 'Trámite en línea',
        contenido: <EnlaceExterno href={enlacesLeyLobby.solicitud}>Solicitud de Audiencia Ley Lobby</EnlaceExterno>
      },
      {
        etiqueta: 'Enlace a mayor información',
        contenido: <EnlaceExterno href={enlacesLeyLobby.transparencia}>Transparencia Activa</EnlaceExterno>
      }
    ];

    return (
      <div className="content-box-wide space-y-6 pt-2">
        <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
          <button onClick={onVolverSeccion} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
            Transparencia Activa
          </button>
          <span className="text-slate-400">&gt;</span>
          <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
            Trámites
          </button>
          <span className="text-slate-400">&gt;</span>
          <button
            onClick={() => setTramiteSeleccionado(null)}
            className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
          >
            Alcaldía
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-700">Audiencias Ley Lobby</span>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">Audiencias Ley Lobby</h2>
          <p className="mt-1 text-xs text-slate-500">Información del trámite de audiencia con la Alcaldía</p>
        </div>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Alcaldía</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">En qué consiste</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <EnlaceExterno href={enlacesLeyLobby.ley}>Ley N° 20.730</EnlaceExterno>. Regula el Lobby y las Gestiones que Representen Intereses Particulares ante las Autoridades y Funcionarios.
              </dd>
            </div>
            {filas.map((fila) => (
              <div key={fila.etiqueta} className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
                <dt className="text-xs font-semibold text-slate-500">{fila.etiqueta}</dt>
                <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{fila.contenido}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="border-t border-slate-200 pt-4">
          <button
            onClick={() => setTramiteSeleccionado(null)}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a trámites de Alcaldía
          </button>
        </div>
      </div>
    );
  }

  if (tramiteSeleccionado === 'Atención a la comunidad') {
    const informacion = [
      { etiqueta: 'En qué consiste', detalle: 'Atención del señor Alcalde a la comunidad' },
      { etiqueta: 'Requisitos', detalle: 'Se solicita audiencia de forma presencial' },
      { etiqueta: 'Documentos requeridos', detalle: 'Sin Documentación' },
      {
        etiqueta: 'Trámite a realizar y/o etapas',
        detalle: 'Se solicita el día de la audiencia, la que es ingresada a la agenda del alcalde, su atención es por orden de llegada'
      },
      { etiqueta: 'Se realiza', detalle: 'Avenida San Pablo 5959, segundo piso, Oficina de Alcaldía' },
      { etiqueta: 'Tiene costo', detalle: 'No' },
      { etiqueta: 'Trámite está disponible en línea', detalle: 'No' }
    ];

    return (
      <div className="content-box-wide space-y-6 pt-2">
        <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
          <button
            onClick={onVolverSeccion}
            className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
          >
            Transparencia Activa
          </button>
          <span className="text-slate-400">&gt;</span>
          <button
            onClick={onVolver}
            className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
          >
            Trámites
          </button>
          <span className="text-slate-400">&gt;</span>
          <button
            onClick={() => setTramiteSeleccionado(null)}
            className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
          >
            Alcaldía
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-700">Audiencias Públicas</span>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">Audiencias Públicas</h2>
          <p className="mt-1 text-xs text-slate-500">Información del trámite de atención a la comunidad</p>
        </div>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-2 md:divide-x md:divide-y-0">
            <h3 className="bg-blue-50 px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">
              Trámite
            </h3>
            <h3 className="bg-blue-50 px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">
              Alcaldía
            </h3>
          </div>
          <dl className="divide-y divide-slate-100">
            {informacion.map((campo) => (
              <div key={campo.etiqueta} className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
                <dt className="text-xs font-semibold text-slate-500">{campo.etiqueta}</dt>
                <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{campo.detalle}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="border-t border-slate-200 pt-4">
          <button
            onClick={() => setTramiteSeleccionado(null)}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a trámites de Alcaldía
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button
          onClick={onVolverSeccion}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button
          onClick={onVolver}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Trámites
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Alcaldía</span>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">Alcaldía</h2>
        <p className="mt-1 text-xs text-slate-500">Trámites disponibles en Alcaldía</p>
      </div>

      <section className="max-w-3xl space-y-3">
        <h3 className="text-sm font-bold text-slate-900">Trámites</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {tramitesAlcaldia.map((tramite) => (
            <button
              key={tramite}
              type="button"
              onClick={() => setTramiteSeleccionado(tramite)}
              className="group flex min-h-28 items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left shadow-xs transition-all hover:border-blue-300 hover:shadow-md"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700">{tramite}</span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-blue-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button
          onClick={onVolver}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a unidades municipales
        </button>
      </div>
    </div>
  );
}
