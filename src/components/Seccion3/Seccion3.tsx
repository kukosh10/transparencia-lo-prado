import { ChevronRight, ExternalLink } from 'lucide-react';

interface Seccion3Props {
  onVolver: () => void;
  onIrAUnidades: () => void;
}

export default function Seccion3({ onVolver, onIrAUnidades }: Seccion3Props) {
  const urlDiagramaDrive = "##### URL #####";

  return (
    <div className="content-box-wide space-y-6">
      <div className="flex items-center gap-2 text-sm text-slate-700 bg-[#f0f4f9] p-3 rounded-lg border border-slate-200/80 font-semibold">
        <button onClick={onVolver} className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none p-0 font-semibold">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-900 font-bold">03. Estructura orgánica y facultades, funciones y atribuciones</span>
      </div>

      <div className="bg-[#f0f4f9] p-6 rounded-xl shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <h2 className="text-xl font-bold text-slate-900">
            03. Estructura orgánica y facultades, funciones y atribuciones
          </h2>
          <span className="text-xs text-slate-500">Última actualización: 5/10/2026</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            03. Estructura orgánica y facultades, funciones y atribuciones
          </h3>

          <div className="space-y-4">
            <a
              href={urlDiagramaDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group border border-transparent hover:border-slate-200 text-decoration-none"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-700 group-hover:underline">
                  Diagrama de la estructura orgánica
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <ChevronRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <div
              onClick={onIrAUnidades}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group border border-transparent hover:border-slate-200"
            >
              <span className="text-sm font-semibold text-blue-700 group-hover:underline">
                Facultades, Funciones y Atribuciones de sus Unidades u Órganos Internos
              </span>
              <ChevronRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4 flex justify-end">
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
              Registro Histórico
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}