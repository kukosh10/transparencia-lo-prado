import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, ArrowLeft } from 'lucide-react';

interface Seccion7_3Props {
  onVolver: () => void;
}

interface PlanReguladorItem {
  titulo: string;
  nombreArchivo: string;
  url: string;
}

export default function Seccion7_3({ onVolver }: Seccion7_3Props) {
  const itemsData: PlanReguladorItem[] = [
    { titulo: 'Ordenanza Plan Regulador', nombreArchivo: 'Ordenanza', url: '' },
    { titulo: 'Plano Zonificación', nombreArchivo: 'Plano', url: '' },
    { titulo: 'Plano Vialidad', nombreArchivo: 'Plano', url: '' },
    { titulo: 'Memoria Plan Regulador', nombreArchivo: 'Memoria', url: '' }
  ];

  const [itemsAbiertos, setItemsAbiertos] = useState<Record<string, boolean>>({});

  const toggleItem = (titulo: string) => {
    setItemsAbiertos(prev => ({ ...prev, [titulo]: !prev[titulo] }));
  };

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          Actos y resoluciones con efectos sobre terceros
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Plan Regulador</span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Plan Regulador
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-medium">Última actualización: 13/10/2026</span>
      </div>

      <div className="space-y-3">
        {itemsData.map((item) => {
          const isOpen = itemsAbiertos[item.titulo] || false;

          return (
            <div key={item.titulo} className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all hover:shadow-md">
              <div
                onClick={() => toggleItem(item.titulo)}
                className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"
              >
                <div className="flex items-center gap-3 min-w-0 flex-wrap">
                  <span className="px-2.5 py-1 bg-blue-50/80 text-blue-700 text-xs font-semibold rounded-md border border-blue-100 shrink-0">
                    Documento
                  </span>
                  <span className="text-sm font-bold text-slate-900 shrink-0">
                    {item.titulo}
                  </span>
                </div>

                <button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">
                  <span>{isOpen ? 'Ocultar documento' : 'Ver documento'}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {isOpen && (
                <div className="p-6 border-t border-slate-100 bg-white space-y-4 rounded-b-xl">
                  <div className="max-w-xs">
                    <a
                      href={item.url || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-slate-50 hover:bg-blue-50/60 rounded-lg border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-between group text-xs font-medium text-slate-700"
                    >
                      <span>{item.nombreArchivo}</span>
                      <FileText className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
        <button
          onClick={onVolver}
          className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-all cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a Actos y Resoluciones
        </button>
      </div>
    </div>
  );
}