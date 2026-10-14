import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, ArrowLeft } from 'lucide-react';

interface Seccion7_1Props {
  onVolver: () => void;
}

interface ActaDoc {
  nombre: string;
  url: string;
}

interface AnioActas {
  anio: string;
  documentos: ActaDoc[];
}

export default function Seccion7_1({ onVolver }: Seccion7_1Props) {
  const actas2016: ActaDoc[] = [
    { nombre: 'Enero Acta N° 1', url: '' },
    { nombre: 'Enero Acta N° 2', url: '' },
    { nombre: 'Enero Acta N° 3', url: '' },
    { nombre: 'Febrero Acta N° 4', url: '' },
    { nombre: 'Febrero Acta N° 5', url: '' },
    { nombre: 'Febrero Acta N° 6', url: '' },
    { nombre: 'Marzo Acta N° 7', url: '' },
    { nombre: 'Marzo Acta N° 1 Extraordinaria', url: '' },
    { nombre: 'Marzo Acta N° 8', url: '' },
    { nombre: 'Marzo Acta N° 9', url: '' },
    { nombre: 'Abril Acta N° 10', url: '' },
    { nombre: 'Abril Acta N° 2 Extraordinaria', url: '' },
    { nombre: 'Abril Acta N° 11', url: '' },
    { nombre: 'Abril Acta N° 12', url: '' },
    { nombre: 'Mayo Acta N° 13', url: '' },
    { nombre: 'Mayo Acta N° 3 Extraordinaria', url: '' },
    { nombre: 'Mayo Acta N° 14', url: '' },
    { nombre: 'Mayo Acta N° 15', url: '' },
    { nombre: 'Junio Acta N° 16', url: '' },
    { nombre: 'Junio Acta N° 17', url: '' },
    { nombre: 'Julio Acta N° 18', url: '' },
    { nombre: 'Julio Acta N° 19', url: '' },
    { nombre: 'Julio Acta N° 20', url: '' },
    { nombre: 'Julio Acta N° 21', url: '' }
  ];

  const actas2015: ActaDoc[] = [
    { nombre: 'Enero Acta N° 1', url: '' },
    { nombre: 'Enero Acta N° 2', url: '' },
    { nombre: 'Enero Acta N° 3', url: '' },
    { nombre: 'Enero Acta N° 1 Extraordinaria', url: '' },
    { nombre: 'Febrero Acta N° 4', url: '' },
    { nombre: 'Febrero Acta N° 5', url: '' },
    { nombre: 'Febrero Acta N° 6', url: '' },
    { nombre: 'Marzo Acta N° 7', url: '' },
    { nombre: 'Marzo Acta N° 8', url: '' },
    { nombre: 'Marzo Acta N° 9', url: '' },
    { nombre: 'Abril Acta N° 10', url: '' },
    { nombre: 'Abril Acta N° 11', url: '' },
    { nombre: 'Abril Acta N° 12', url: '' },
    { nombre: 'Abril Acta N° 2 Extraordinaria', url: '' },
    { nombre: 'Mayo Acta N° 13', url: '' },
    { nombre: 'Mayo Acta N° 14', url: '' },
    { nombre: 'Mayo Acta N° 15', url: '' },
    { nombre: 'Junio Acta N° 16', url: '' },
    { nombre: 'Junio Acta N° 17', url: '' },
    { nombre: 'Junio Acta N° 18', url: '' },
    { nombre: 'Julio Acta N° 19', url: '' },
    { nombre: 'Julio Acta N° 20', url: '' },
    { nombre: 'Julio Acta N° 21', url: '' },
    { nombre: 'Agosto Acta N° 22', url: '' },
    { nombre: 'Agosto Acta N° 23', url: '' },
    { nombre: 'Agosto Acta N° 24', url: '' },
    { nombre: 'Septiembre Acta N° 25', url: '' },
    { nombre: 'Septiembre Acta N° 26', url: '' },
    { nombre: 'Septiembre Acta N° 27', url: '' },
    { nombre: 'Octubre Acta N° 28', url: '' },
    { nombre: 'Octubre Acta N° 29', url: '' },
    { nombre: 'Octubre Acta N° 30', url: '' },
    { nombre: 'Noviembre Acta N° 31', url: '' },
    { nombre: 'Noviembre Acta N° 32', url: '' },
    { nombre: 'Noviembre Acta N° 33', url: '' },
    { nombre: 'Noviembre Acta N° 3 Extraordinaria', url: '' },
    { nombre: 'Noviembre Acta N° 4 Extraordinaria', url: '' },
    { nombre: 'Diciembre Acta N° 34', url: '' },
    { nombre: 'Diciembre Acta N° 35', url: '' },
    { nombre: 'Diciembre Acta N° 36', url: '' }
  ];

  const actas2014: ActaDoc[] = [
    { nombre: 'Enero Acta N° 1', url: '' },
    { nombre: 'Enero Acta N° 2', url: '' },
    { nombre: 'Enero Acta N° 3', url: '' },
    { nombre: 'Febrero Acta N° 4', url: '' },
    { nombre: 'Febrero Acta N° 5', url: '' },
    { nombre: 'Febrero Acta N° 6', url: '' },
    { nombre: 'Marzo Acta N° 7', url: '' },
    { nombre: 'Marzo Acta N° 8', url: '' },
    { nombre: 'Marzo Acta N° 9', url: '' },
    { nombre: 'Abril Acta N° 10', url: '' },
    { nombre: 'Abril Acta N° 11', url: '' },
    { nombre: 'Abril Acta N° 12', url: '' },
    { nombre: 'Abril Acta N° 1 Extraordinaria', url: '' },
    { nombre: 'Mayo Acta N° 13', url: '' },
    { nombre: 'Mayo Acta N° 14', url: '' },
    { nombre: 'Mayo Acta N° 15', url: '' },
    { nombre: 'Junio Acta N° 16', url: '' },
    { nombre: 'Junio Acta N° 17', url: '' },
    { nombre: 'Junio Acta N° 18', url: '' },
    { nombre: 'Junio Acta N° 19', url: '' },
    { nombre: 'Julio Acta N° 20', url: '' },
    { nombre: 'Julio Acta N° 21', url: '' },
    { nombre: 'Julio Acta N° 22', url: '' },
    { nombre: 'Agosto Acta N° 23', url: '' },
    { nombre: 'Agosto Acta N° 24', url: '' },
    { nombre: 'Agosto Acta N° 25', url: '' },
    { nombre: 'Septiembre Acta N° 26', url: '' },
    { nombre: 'Septiembre Acta N° 27', url: '' },
    { nombre: 'Septiembre Acta N° 28', url: '' },
    { nombre: 'Octubre Acta N° 29', url: '' },
    { nombre: 'Octubre Acta N° 30', url: '' },
    { nombre: 'Octubre Acta N° 31', url: '' },
    { nombre: 'Noviembre Acta N° 32', url: '' },
    { nombre: 'Noviembre Acta N° 33', url: '' },
    { nombre: 'Noviembre Acta N° 34', url: '' },
    { nombre: 'Diciembre Acta N° 35', url: '' },
    { nombre: 'Diciembre Acta N° 36', url: '' },
    { nombre: 'Diciembre Acta N° 37', url: '' }
  ];

  const actas2013: ActaDoc[] = [
    { nombre: 'Enero Acta N° 1', url: '' },
    { nombre: 'Enero Acta N° 2', url: '' },
    { nombre: 'Enero Acta N° 3', url: '' },
    { nombre: 'Febrero Acta N° 4', url: '' },
    { nombre: 'Febrero Acta N° 5', url: '' },
    { nombre: 'Febrero Acta N° 6', url: '' },
    { nombre: 'Marzo Acta N° 7', url: '' },
    { nombre: 'Marzo Acta N° 8', url: '' },
    { nombre: 'Marzo Acta N° 9', url: '' },
    { nombre: 'Abril Acta N° 10', url: '' },
    { nombre: 'Abril Acta N° 11', url: '' },
    { nombre: 'Abril Acta N° 12', url: '' },
    { nombre: 'Mayo Acta N° 13', url: '' },
    { nombre: 'Mayo Acta N° 14', url: '' },
    { nombre: 'Mayo Acta N° 15', url: '' },
    { nombre: 'Junio Acta N° 16', url: '' },
    { nombre: 'Junio Acta N° 17', url: '' },
    { nombre: 'Junio Acta N° 18', url: '' },
    { nombre: 'Junio Acta N° 19', url: '' },
    { nombre: 'Julio Acta N° 20', url: '' },
    { nombre: 'Julio Acta N° 21', url: '' },
    { nombre: 'Julio Acta N° 22', url: '' },
    { nombre: 'Agosto Acta N° 23', url: '' },
    { nombre: 'Agosto Acta N° 24', url: '' },
    { nombre: 'Agosto Acta N° 25', url: '' },
    { nombre: 'Agosto Acta N° 26', url: '' },
    { nombre: 'Agosto Acta N° 27', url: '' },
    { nombre: 'Septiembre Acta N° 28', url: '' },
    { nombre: 'Septiembre Acta N° 29', url: '' },
    { nombre: 'Octubre Acta N° 30', url: '' },
    { nombre: 'Octubre Acta N° 31', url: '' },
    { nombre: 'Octubre Acta N° 2 Extraordinaria', url: '' },
    { nombre: 'Octubre Acta N° 3 Extraordinaria', url: '' },
    { nombre: 'Noviembre Acta N° 32', url: '' },
    { nombre: 'Noviembre Acta N° 33', url: '' },
    { nombre: 'Noviembre Acta N° 34', url: '' },
    { nombre: 'Diciembre Acta N° 35', url: '' },
    { nombre: 'Diciembre Acta N° 36', url: '' },
    { nombre: 'Diciembre Acta N° 37', url: '' },
    { nombre: 'Diciembre Acta N° 4 Extraordinaria', url: '' }
  ];

  const actas2012: ActaDoc[] = [
    { nombre: 'Enero Acta N° 1', url: '' },
    { nombre: 'Enero Acta N° 2', url: '' },
    { nombre: 'Enero Acta N° 3', url: '' },
    { nombre: 'Febrero Acta N° 4', url: '' },
    { nombre: 'Febrero Acta N° 5', url: '' },
    { nombre: 'Febrero Acta N° 6', url: '' },
    { nombre: 'Marzo Acta N° 7', url: '' },
    { nombre: 'Marzo Acta N° 8', url: '' },
    { nombre: 'Marzo Acta N° 9', url: '' },
    { nombre: 'Abril Acta N° 10', url: '' },
    { nombre: 'Abril Acta N° 11', url: '' },
    { nombre: 'Abril Acta N° 12', url: '' },
    { nombre: 'Abril Acta N° 13', url: '' },
    { nombre: 'Mayo Acta N° 14', url: '' },
    { nombre: 'Mayo Acta N° 15', url: '' },
    { nombre: 'Mayo Acta N° 16', url: '' },
    { nombre: 'Junio Acta N° 17', url: '' },
    { nombre: 'Junio Acta N° 18', url: '' },
    { nombre: 'Junio Acta N° 19', url: '' },
    { nombre: 'Mayo Acta N° 20', url: '' },
    { nombre: 'Julio Acta N° 21', url: '' },
    { nombre: 'Julio Acta N° 22', url: '' },
    { nombre: 'Julio Acta N° 23', url: '' },
    { nombre: 'Julio Acta N° 24', url: '' },
    { nombre: 'Agosto Acta N° 25', url: '' },
    { nombre: 'Agosto Acta N° 26', url: '' },
    { nombre: 'Agosto Acta N° 27', url: '' },
    { nombre: 'Septiembre Acta N° 28', url: '' },
    { nombre: 'Septiembre Acta N° 29', url: '' },
    { nombre: 'Octubre Acta N° 30', url: '' },
    { nombre: 'Octubre Acta N° 31', url: '' },
    { nombre: 'Octubre Acta N° 32', url: '' },
    { nombre: 'Octubre Acta N° 33', url: '' },
    { nombre: 'Noviembre Acta N° 34', url: '' },
    { nombre: 'Noviembre Acta N° 35', url: '' },
    { nombre: 'Noviembre Acta N° 36', url: '' },
    { nombre: 'Diciembre N° 1', url: '' },
    { nombre: 'Diciembre N° 2', url: '' },
    { nombre: 'Diciembre N° 3', url: '' }
  ];

  const actas2011: ActaDoc[] = [
    { nombre: 'Enero Acta N° 1', url: '' },
    { nombre: 'Enero Acta N° 2', url: '' },
    { nombre: 'Enero Acta N° 3', url: '' },
    { nombre: 'Febrero Acta N° 4', url: '' },
    { nombre: 'Febrero Acta N° 5', url: '' },
    { nombre: 'Febrero Acta N° 6', url: '' },
    { nombre: 'Marzo Acta N° 7', url: '' },
    { nombre: 'Marzo Acta N° 8', url: '' },
    { nombre: 'Marzo Acta N° 9', url: '' },
    { nombre: 'Abril Acta N° 10', url: '' },
    { nombre: 'Abril Acta N° 11', url: '' },
    { nombre: 'Abril Acta N° 12', url: '' },
    { nombre: 'Mayo Acta N° 13', url: '' },
    { nombre: 'Mayo Acta N° 14', url: '' },
    { nombre: 'Mayo Acta N° 15', url: '' },
    { nombre: 'Mayo Acta N° 1 Extraordinaria', url: '' },
    { nombre: 'Junio Acta N° 16', url: '' },
    { nombre: 'Junio Acta N° 17', url: '' },
    { nombre: 'Junio Acta N° 18', url: '' },
    { nombre: 'Junio Acta N° 2 Extraordinaria', url: '' },
    { nombre: 'Julio Acta N° 19', url: '' },
    { nombre: 'Julio Acta N° 20', url: '' },
    { nombre: 'Julio Acta N° 21', url: '' },
    { nombre: 'Agosto Acta N° 22', url: '' },
    { nombre: 'Agosto Acta N° 23', url: '' },
    { nombre: 'Agosto Acta N° 24', url: '' },
    { nombre: 'Agosto Acta N° 25', url: '' },
    { nombre: 'Septiembre Acta N° 26', url: '' },
    { nombre: 'Septiembre Acta N° 27', url: '' },
    { nombre: 'Septiembre Acta N° 28', url: '' },
    { nombre: 'Septiembre Acta N° 3 Extraordinaria', url: '' },
    { nombre: 'Octubre Acta N° 29', url: '' },
    { nombre: 'Octubre Acta N° 30', url: '' },
    { nombre: 'Octubre Acta N° 31', url: '' },
    { nombre: 'Noviembre Acta N° 32', url: '' },
    { nombre: 'Noviembre Acta N° 33', url: '' },
    { nombre: 'Noviembre Acta N° 34', url: '' },
    { nombre: 'Noviembre Acta N° 4 Extraordinaria', url: '' },
    { nombre: 'Diciembre Acta N° 35', url: '' },
    { nombre: 'Diciembre Acta N° 36', url: '' },
    { nombre: 'Diciembre Acta N° 37', url: '' },
    { nombre: 'Diciembre Acta N° 5 Extraordinaria', url: '' }
  ];

  const actas2010: ActaDoc[] = [
    { nombre: 'Enero Acta N° 1', url: '' },
    { nombre: 'Enero Acta N° 2', url: '' },
    { nombre: 'Enero Acta N° 1 Extraordinaria', url: '' },
    { nombre: 'Febrero Acta N° 3', url: '' },
    { nombre: 'Febrero Acta N° 4', url: '' },
    { nombre: 'Febrero Acta N° 2 Extraordinaria', url: '' },
    { nombre: 'Marzo Acta N° 5', url: '' },
    { nombre: 'Marzo Acta N° 6', url: '' },
    { nombre: 'Abril Acta N° 7', url: '' },
    { nombre: 'Abril Acta N° 8', url: '' },
    { nombre: 'Abril Acta N° 9', url: '' },
    { nombre: 'Mayo Acta N° 10', url: '' },
    { nombre: 'Mayo Acta N° 11', url: '' },
    { nombre: 'Mayo Acta N° 3 Extraordinaria', url: '' },
    { nombre: 'Mayo Acta N° 4 Extraordinaria', url: '' },
    { nombre: 'Junio Acta N° 12', url: '' },
    { nombre: 'Junio Acta N° 13', url: '' },
    { nombre: 'Junio Acta N° 14', url: '' },
    { nombre: 'Julio Acta N° 15', url: '' },
    { nombre: 'Julio Acta N° 16', url: '' },
    { nombre: 'Julio Acta N° 17', url: '' },
    { nombre: 'Julio Acta N° 18', url: '' },
    { nombre: 'Julio Acta N° 5 Extraordinaria', url: '' },
    { nombre: 'Agosto Acta N° 19', url: '' },
    { nombre: 'Agosto Acta N° 20', url: '' },
    { nombre: 'Agosto Acta N° 21', url: '' },
    { nombre: 'Septiembre Acta N° 22', url: '' },
    { nombre: 'Septiembre Acta N° 23', url: '' },
    { nombre: 'Septiembre Acta N° 24', url: '' },
    { nombre: 'Octubre Acta N° 25', url: '' },
    { nombre: 'Octubre Acta N° 26', url: '' },
    { nombre: 'Octubre Acta N° 27', url: '' },
    { nombre: 'Noviembre Acta N° 28', url: '' },
    { nombre: 'Noviembre Acta N° 29', url: '' },
    { nombre: 'Noviembre Acta N° 30', url: '' },
    { nombre: 'Noviembre Acta N° 31', url: '' },
    { nombre: 'Diciembre Acta N° 32', url: '' },
    { nombre: 'Diciembre Acta N° 33', url: '' },
    { nombre: 'Diciembre Acta N° 34', url: '' }
  ];

  const actas2009: ActaDoc[] = [
    { nombre: 'Enero Acta N° 1', url: '' },
    { nombre: 'Enero Acta N° 2', url: '' },
    { nombre: 'Febrero Acta N° 3', url: '' },
    { nombre: 'Febrero Acta N° 1 Extraordinaria', url: '' },
    { nombre: 'Febrero Acta N° 2 Extraordinaria', url: '' },
    { nombre: 'Febrero Acta N° 3 Extraordinaria', url: '' },
    { nombre: 'Marzo Acta N° 4', url: '' },
    { nombre: 'Marzo Acta N° 5', url: '' },
    { nombre: 'Marzo Acta N° 6', url: '' },
    { nombre: 'Abril Acta N° 7', url: '' },
    { nombre: 'Abril Acta N° 8', url: '' },
    { nombre: 'Abril Acta N° 9', url: '' },
    { nombre: 'Mayo Acta N° 10', url: '' },
    { nombre: 'Mayo Acta N° 11', url: '' },
    { nombre: 'Junio Acta N° 12', url: '' },
    { nombre: 'Junio Acta N° 13', url: '' },
    { nombre: 'Junio Acta N° 14', url: '' },
    { nombre: 'Junio Acta N° 15', url: '' },
    { nombre: 'Julio Acta N° 16', url: '' },
    { nombre: 'Julio Acta N° 17', url: '' },
    { nombre: 'Julio Acta N° 18', url: '' },
    { nombre: 'Julio Acta N° 19', url: '' },
    { nombre: 'Julio Acta N° 4 Extraordinaria', url: '' },
    { nombre: 'Agosto Acta N° 20', url: '' },
    { nombre: 'Agosto Acta N° 21', url: '' },
    { nombre: 'Agosto Acta N° 22', url: '' },
    { nombre: 'Agosto Acta N° 23', url: '' },
    { nombre: 'Agosto Acta N° 5 Extraordinaria', url: '' },
    { nombre: 'Septiembre Acta N° 24', url: '' },
    { nombre: 'Septiembre Acta N° 25', url: '' },
    { nombre: 'Septiembre Acta N° 26', url: '' },
    { nombre: 'Septiembre Acta N° 27', url: '' },
    { nombre: 'Septiembre Acta N° 28', url: '' },
    { nombre: 'Octubre Acta N° 29', url: '' },
    { nombre: 'Octubre Acta N° 30', url: '' },
    { nombre: 'Octubre Acta N° 31', url: '' },
    { nombre: 'Noviembre Acta N° 32', url: '' },
    { nombre: 'Noviembre Acta N° 33', url: '' },
    { nombre: 'Noviembre Acta N° 34', url: '' },
    { nombre: 'Diciembre Acta N° 35', url: '' },
    { nombre: 'Diciembre Acta N° 36', url: '' },
    { nombre: 'Diciembre Acta N° 37', url: '' },
    { nombre: 'Diciembre Acta N° 38', url: '' }
  ];

  const aniosData: AnioActas[] = [
    { anio: '2016', documentos: actas2016 },
    { anio: '2015', documentos: actas2015 },
    { anio: '2014', documentos: actas2014 },
    { anio: '2013', documentos: actas2013 },
    { anio: '2012', documentos: actas2012 },
    { anio: '2011', documentos: actas2011 },
    { anio: '2010', documentos: actas2010 },
    { anio: '2009', documentos: actas2009 }
  ];

  const [aniosAbiertos, setAniosAbiertos] = useState<Record<string, boolean>>({});

  const toggleAnio = (anio: string) => {
    setAniosAbiertos(prev => ({ ...prev, [anio]: !prev[anio] }));
  };

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          Actos y resoluciones con efectos sobre terceros
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Actas del Concejo Municipal</span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Actas del Concejo Municipal
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
                    Actas del Concejo Municipal año {item.anio}
                  </span>
                </div>

                <button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">
                  <span>{isOpen ? 'Ocultar actas' : 'Ver actas'}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {isOpen && (
                <div className="p-6 border-t border-slate-100 bg-white space-y-4 rounded-b-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {item.documentos.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-slate-50 hover:bg-blue-50/60 rounded-lg border border-slate-200 hover:border-blue-200 transition-all flex items-center justify-between group text-xs font-medium text-slate-700"
                      >
                        <span className="truncate pr-2">{doc.nombre}</span>
                        <FileText className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform shrink-0" />
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
          <ArrowLeft className="w-4 h-4" /> Volver a Actos y Resoluciones
        </button>
      </div>
    </div>
  );
}