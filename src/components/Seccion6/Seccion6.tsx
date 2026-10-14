import { ArrowLeft } from 'lucide-react';

interface Seccion6Props {
  onVolver: () => void;
}

export const transferenciasReguladasUrl = 'https://registros19862.gob.cl/institucion/69254100/transferencias';

export default function Seccion6({ onVolver }: Seccion6Props) {
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Transferencias de Fondos Públicos</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Otras Transferencias</span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            06. Otras Transferencias
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-medium">Última actualización: 13/10/2026</span>
      </div>

      <div className="bg-blue-50/50 rounded-xl border border-blue-100 p-6 text-sm text-slate-700 leading-relaxed">
        <p>La Municipalidad de Lo Prado, no realiza transferencias de fondos públicos no reguladas por la Ley Nº 19.862, que "establece registros de las personas jurídicas receptoras de fondos públicos".</p>
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