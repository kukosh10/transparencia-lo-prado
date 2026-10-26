import { useState } from 'react';
import { ArrowLeft, ChevronRight, FileText } from 'lucide-react';

interface Seccion8TramAdminMuniProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

export default function Seccion8TramAdminMuni({
  onVolver,
  onVolverSeccion
}: Seccion8TramAdminMuniProps) {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

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
        <span className="text-slate-700">Administrador Municipal</span>
        {mostrarDetalle && (
          <>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-700">Audiencias Públicas</span>
          </>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          {mostrarDetalle ? 'Audiencias Públicas' : 'Administrador Municipal'}
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          {mostrarDetalle
            ? 'Información del trámite de atención a la comunidad'
            : 'Trámites disponibles en Administración Municipal'}
        </p>
      </div>

      {mostrarDetalle ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Administrador Municipal</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            {[
              { etiqueta: 'En qué consiste', detalle: 'Atención del señor Administrador Municipal a la comunidad' },
              { etiqueta: 'Requisitos', detalle: 'Se solicita audiencia de forma Presencial' },
              { etiqueta: 'Documentos requeridos', detalle: 'Sin Documentación' },
              { etiqueta: 'Trámite a realizar y/o etapas', detalle: 'Se solicita a la Secretaría, su atención es por orden de llegada' },
              { etiqueta: 'Se realiza', detalle: 'Avenida San Pablo 5959, segundo piso, Oficina de Administrador Municipal' },
              { etiqueta: 'Tiene costo', detalle: 'No' },
              { etiqueta: 'Trámite está disponible en línea', detalle: 'No' }
            ].map((campo) => (
              <div key={campo.etiqueta} className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
                <dt className="text-xs font-semibold text-slate-500">{campo.etiqueta}</dt>
                <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{campo.detalle}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : (
        <section className="max-w-xl space-y-3">
          <h3 className="text-sm font-bold text-slate-900">Trámite</h3>
          <button
            type="button"
            onClick={() => setMostrarDetalle(true)}
            className="group flex min-h-24 w-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left shadow-xs transition-all hover:border-blue-300 hover:shadow-md"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700">Atención a la comunidad</span>
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-blue-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </section>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button
          onClick={() => mostrarDetalle ? setMostrarDetalle(false) : onVolver()}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {mostrarDetalle ? 'Volver a trámites de Administración Municipal' : 'Volver a unidades municipales'}
        </button>
      </div>
    </div>
  );
}
