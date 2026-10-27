import { ArrowLeft, CalendarDays, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Seccion9_1_A_Emer2016 from './Seccion9_1(A.Emer2016)';
import Seccion9_1_A_Medi2016 from './Seccion9_1(A.Medi2016)';
import Seccion9_1_A_Univer2016 from './Seccion9_1(A.Univer2016)';
import Seccion9_1_A_Arriendo2016 from './Seccion9_1(A.Arriendo2016)';
import Seccion9_1_A_PieCasa2016 from './Seccion9_1(A.PieCasa2016)';
import Seccion9_1_DerSepul2016 from './Seccion9_1(DerSepul2016)';
import Seccion9_1_L_Optico from './Seccion9_1(L.Optico)';
import Seccion9_1_S_Funerario2016 from './Seccion9_1(S.Funerario2016)';
import Seccion9_1_T_Deudos from './Seccion9_1(T.Deudos)';
import Seccion9_1_AseoDomici from './Seccion9_1(AseoDomici)';

interface Seccion9DetalleProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

export default function Seccion9_1({ onVolver, onVolverSeccion }: Seccion9DetalleProps) {
  const [anioSeleccionado, setAnioSeleccionado] = useState<string | null>(null);
  const [mesSeleccionado, setMesSeleccionado] = useState<string | null>(null);
  const [beneficioExpandido, setBeneficioExpandido] = useState<string | null>(null);
  const aniosDisponibles = ['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  const beneficios2016 = [
    'Aporte Emergencia',
    'Aporte Medicamento',
    'Aporte Universitario',
    'Aporte Vivienda',
    'Arriendo',
    'Ayuda Pie Caseta',
    'Derecho Sepultura',
    'Lentes Opticos',
    'Servicios Funerarios',
    'Silla de Ruedas',
    'Traslado de Deudos',
    'Triciclo Reparto',
    'Fondo de Iniciativa Ciudadana',
    'Programa Otros Beneficios',
    'Rebaja de Derechos de Aseo'
  ];
  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Subsidios y Beneficios
        </button>
        <span className="text-slate-400">&gt;</span>
        {anioSeleccionado && (
          <>
            <span className="text-slate-400">&gt;</span>
            <button
              type="button"
              onClick={() => {
                setMesSeleccionado(null);
                setBeneficioExpandido(null);
                setAnioSeleccionado(null);
              }}
              className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline"
            >
              Subsidios y Beneficios Propios
            </button>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-700">{anioSeleccionado}</span>
          </>
        )}
        {!anioSeleccionado && <span className="text-slate-700">Subsidios y Beneficios Propios</span>}
      </nav>

      <header>
        <h2 className="text-xl font-bold text-slate-900">
          {anioSeleccionado ? `Subsidios y Beneficios Propios ${anioSeleccionado}` : 'Subsidios y Beneficios Propios'}
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          {anioSeleccionado ? `Información correspondiente al año ${anioSeleccionado}` : 'Selecciona un año para consultar la información'}
        </p>
      </header>

      {anioSeleccionado ? (
        <section aria-label={`Beneficios disponibles de ${anioSeleccionado}`} className="space-y-3">
          {beneficios2016.map((beneficio) => (
            <div
              key={beneficio}
              className={`overflow-hidden rounded-xl border bg-white shadow-xs transition-all ${
                beneficioExpandido === beneficio ? 'border-blue-200 shadow-md' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                aria-expanded={beneficioExpandido === beneficio}
                onClick={() => {
                  if (beneficioExpandido === beneficio) {
                    setBeneficioExpandido(null);
                    setMesSeleccionado(null);
                  } else {
                    setBeneficioExpandido(beneficio);
                    setMesSeleccionado(null);
                  }
                }}
                className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors ${
                  beneficioExpandido === beneficio ? 'bg-blue-50/70' : 'bg-white hover:bg-slate-50'
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    beneficioExpandido === beneficio ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700'
                  }`}>
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{beneficio}</span>
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500 sm:inline">
                    12 meses
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-500 transition-transform ${beneficioExpandido === beneficio ? 'rotate-180 text-blue-700' : ''}`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              {beneficioExpandido === beneficio && (
                <div className="border-t border-slate-100 bg-slate-50/70 p-4 sm:p-5">
                  {anioSeleccionado !== '2016' || [
                    'Aporte Vivienda',
                    'Silla de Ruedas',
                    'Triciclo Reparto',
                    'Fondo de Iniciativa Ciudadana',
                    'Programa Otros Beneficios'
                  ].includes(beneficio) ? (
                    <>
                      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Selecciona un mes</div>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                        {meses.map((mes) => (
                          <button
                            key={mes}
                            type="button"
                            aria-pressed={mesSeleccionado === mes}
                            onClick={() => setMesSeleccionado(mesSeleccionado === mes ? null : mes)}
                            className={`flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                              mesSeleccionado === mes
                                ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
                            }`}
                          >
                            {mes}
                            <ChevronRight className={`h-4 w-4 ${mesSeleccionado === mes ? 'text-white' : 'text-slate-400'}`} aria-hidden="true" />
                          </button>
                        ))}
                      </div>
                      {mesSeleccionado && (
                        <div className="mt-5 border-t border-slate-200 pt-5">
                          <h3 className="text-base font-semibold text-slate-900">Sin datos · {mesSeleccionado} {anioSeleccionado}</h3>
                          <div className="mt-3 rounded-xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
                            <p className="text-sm font-semibold text-slate-700">Sin datos publicados</p>
                            <p className="mt-1 text-sm text-slate-500">
                              No se registran datos para {mesSeleccionado.toLowerCase()} de {anioSeleccionado}.
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  ) : beneficio === 'Aporte Emergencia' ? (
                    <Seccion9_1_A_Emer2016 />
                  ) : beneficio === 'Aporte Medicamento' ? (
                    <Seccion9_1_A_Medi2016 />
                  ) : beneficio === 'Aporte Universitario' ? (
                    <Seccion9_1_A_Univer2016 />
                  ) : beneficio === 'Arriendo' ? (
                    <Seccion9_1_A_Arriendo2016 />
                  ) : beneficio === 'Ayuda Pie Caseta' ? (
                    <Seccion9_1_A_PieCasa2016 />
                  ) : beneficio === 'Derecho Sepultura' ? (
                    <Seccion9_1_DerSepul2016 />
                  ) : beneficio === 'Lentes Opticos' ? (
                    <Seccion9_1_L_Optico />
                  ) : beneficio === 'Servicios Funerarios' ? (
                    <Seccion9_1_S_Funerario2016 />
                  ) : beneficio === 'Traslado de Deudos' ? (
                    <Seccion9_1_T_Deudos />
                  ) : beneficio === 'Rebaja de Derechos de Aseo' ? (
                    <Seccion9_1_AseoDomici />
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </section>
      ) : anioSeleccionado ? (
        <section className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-xs">
          La información de este año se agregará aquí.
        </section>
      ) : (
        <section aria-label="Años disponibles" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {aniosDisponibles.map((anio) => (
            <button
              key={anio}
              type="button"
              onClick={() => setAnioSeleccionado(anio)}
              className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-blue-700 shadow-xs transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              <span>{anio}</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          ))}
        </section>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={() => {
            if (anioSeleccionado) {
              setBeneficioExpandido(null);
              setMesSeleccionado(null);
              setAnioSeleccionado(null);
            } else {
              onVolver();
            }
          }}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {anioSeleccionado ? 'Volver a años' : 'Volver a Subsidios y Beneficios'}
        </button>
      </div>
    </div>
  );
}
