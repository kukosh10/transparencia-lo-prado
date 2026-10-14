import { ChevronRight, ArrowLeft, FileText } from 'lucide-react';

interface Seccion7Props {
  onVolver: () => void;
  onSeleccionarSubseccion: (subseccionId: string) => void;
}

export default function Seccion7({ onVolver, onSeleccionarSubseccion }: Seccion7Props) {
  const tarjetasSeccion7 = [
    { id: 'seccion7-1', titulo: 'Actas del Concejo Municipal' },
    { id: 'seccion7-2', titulo: 'PLADECO' },
    { id: 'seccion7-3', titulo: 'Plan Regulador' },
    { id: 'seccion7-4', titulo: 'Cuenta Pública' },
    { id: 'seccion7-5', titulo: 'Ordenanzas' },
    { id: 'seccion7-6', titulo: 'Otras Resoluciones a Tercero' },
    { id: 'seccion7-7', titulo: 'Respuesta Transparencia Pasiva' }
  ];

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Actos y resoluciones con efectos sobre terceros</span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Actos y resoluciones con efectos sobre terceros
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-medium">Última actualización: 13/10/2026</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tarjetasSeccion7.map((item) => (
          <div
            key={item.id}
            onClick={() => onSeleccionarSubseccion(item.id)}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs transition-all hover:shadow-md hover:border-blue-300 cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {item.titulo}
              </h3>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-600">Históricos</span>
              <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
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