import { useState } from 'react';
import { ChevronDown, ChevronUp, FileSpreadsheet, ArrowLeft } from 'lucide-react';

interface Seccion5_1Props {
  onVolver: () => void;
}

interface AnioMatriz {
  anio: string;
  meses: {
    nombre: string;
    url: string;
  }[];
}

export default function Seccion5_1({ onVolver }: Seccion5_1Props) {
  const mesesAnio = [
    { nombre: 'Enero', url: '' },
    { nombre: 'Febrero', url: '' },
    { nombre: 'Marzo', url: '' },
    { nombre: 'Abril', url: '' },
    { nombre: 'Mayo', url: '' },
    { nombre: 'Junio', url: '' },
    { nombre: 'Julio', url: '' },
    { nombre: 'Agosto', url: '' },
    { nombre: 'Septiembre', url: '' },
    { nombre: 'Octubre', url: '' },
    { nombre: 'Noviembre', url: '' },
    { nombre: 'Diciembre', url: '' }
  ];

  const aniosData: AnioMatriz[] = [
    { anio: '2016', meses: mesesAnio },
    { anio: '2015', meses: mesesAnio },
    { anio: '2014', meses: mesesAnio },
    { anio: '2013', meses: mesesAnio },
    { anio: '2012', meses: mesesAnio },
    { anio: '2011', meses: mesesAnio },
    { anio: '2010', meses: mesesAnio },
    { anio: '2009', meses: mesesAnio }
  ];

  const [aniosAbiertos, setAniosAbiertos] = useState<Record<string, boolean>>({});

  const toggleAnio = (anio: string) => {
    setAniosAbiertos(prev => ({ ...prev, [anio]: !prev[anio] }));
  };

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Otras Compras</span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Otras Compras y Adquisiciones
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-medium">Última actualización: 13/10/2026</span>
      </div>

      <div className="space-y-3">
        {aniosData.map((item) => {
          const isOpen = aniosAbiertos[item.anio] || false;

          return (
            <div key={item.anio} className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all hover:shadow-md">
              <div
                onClick={() => toggleAnio(item.anio)}
                className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"
              >
                <div className="flex items-center gap-3 min-w-0 flex-wrap">
                  <span className="px-2.5 py-1 bg-blue-50/80 text-blue-700 text-xs font-semibold rounded-md border border-blue-100 shrink-0">
                    Año {item.anio}
                  </span>
                  <span className="text-sm font-bold text-slate-900 shrink-0">
                    Otras Compras año {item.anio}
                  </span>
                </div>

                <button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">
                  <span>{isOpen ? 'Ocultar meses' : 'Ver meses'}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {isOpen && (
                <div className="p-6 border-t border-slate-100 bg-white space-y-4 rounded-b-xl">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {item.meses.map((mes, idx) => (
                      <a
                        key={idx}
                        href={mes.url || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-slate-50 hover:bg-blue-50/60 rounded-lg border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-between group text-xs font-medium text-slate-700"
                      >
                        <span>{mes.nombre}</span>
                        <FileSpreadsheet className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
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
          <ArrowLeft className="w-4 h-4" /> Volver a sección principal
        </button>
      </div>
    </div>
  );
}