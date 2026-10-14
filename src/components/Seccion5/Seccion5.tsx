import { ExternalLink, ArrowLeft } from 'lucide-react';

interface Seccion5Props {
  onVolver: () => void;
}

export const comprasAdquisicionesUrl = 'https://www.mercadopublico.cl/Portal/Modules/Site/Busquedas/ResultadoBusqueda.aspx?qs=1&IdEmpresa=ZLX2GX|Q6Hw=';

export default function Seccion5({ onVolver }: Seccion5Props) {
  const enlacesCompras = [
    {
      titulo: 'Compras y Adquisiciones',
      url: comprasAdquisicionesUrl
    }
  ];

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Compras y Adquisiciones</span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            05. Compras y Adquisiciones
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-medium">Última actualización: 13/10/2026</span>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
        <ul className="space-y-3">
          {enlacesCompras.map((enlace, idx) => (
            <li key={idx}>
              <a
                href={enlace.url}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-slate-50 hover:bg-blue-50/60 rounded-lg border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-between group text-sm font-medium text-blue-700"
              >
                <span>{enlace.titulo}</span>
                <ExternalLink className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
        <button
          onClick={onVolver}
          className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-all cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a sección principal
        </button>
      </div>
    </div>
  );
}