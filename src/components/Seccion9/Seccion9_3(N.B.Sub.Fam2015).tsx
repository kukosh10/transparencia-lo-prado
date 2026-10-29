import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Seccion9_3_N_B_Sub_Fam2015_Enero from './Seccion9_3(N.B.Sub.Fam2015.Enero)';
import Seccion9_3_N_B_Sub_Fam2015_Febrero from './Seccion9_3(N.B.Sub.Fam2015.Febrero)';
import Seccion9_3_N_B_Sub_Fam2015_Marzo from './Seccion9_3(N.B.Sub.Fam2015.Marzo)';
import Seccion9_3_N_B_Sub_Fam2015_Abril from './Seccion9_3(N.B.Sub.Fam2015.Abril)';
import Seccion9_3_N_B_Sub_Fam2015_Mayo from './Seccion9_3(N.B.Sub.Fam2015.Mayo)';
import Seccion9_3_N_B_Sub_Fam2015_Junio from './Seccion9_3(N.B.Sub.Fam2015.Junio)';
import Seccion9_3_N_B_Sub_Fam2015_Julio from './Seccion9_3(N.B.Sub.Fam2015.Julio)';
import Seccion9_3_N_B_Sub_Fam2015_Agosto from './Seccion9_3(N.B.Sub.Fam2015.Agosto)';
import Seccion9_3_N_B_Sub_Fam2015_Septiembre from './Seccion9_3(N.B.Sub.Fam2015.Septiembre)';
import Seccion9_3_N_B_Sub_Fam2015_Octubre from './Seccion9_3(N.B.Sub.Fam2015.Octubre)';
import Seccion9_3_N_B_Sub_Fam2015_Noviembre from './Seccion9_3(N.B.Sub.Fam2015.Noviembre)';
import Seccion9_3_N_B_Sub_Fam2015_Diciembre from './Seccion9_3(N.B.Sub.Fam2015.Diciembre)';

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

interface Props {
  tipoNomina: string;
  onVolver: () => void;
}

export default function Seccion9_3_N_B_Sub_Fam2015({ tipoNomina, onVolver }: Props) {
  const [mesSeleccionado, setMesSeleccionado] = useState<string | null>(null);

  return (
    <section aria-label={`${tipoNomina} 2015`} className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{tipoNomina} · 2015</h3>
          <p className="mt-1 text-xs text-slate-500">Selecciona un mes para consultar el detalle</p>
        </div>
        <button
          type="button"
          onClick={onVolver}
          className="inline-flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a la nómina
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {meses.map((mes) => (
          <button
            key={mes}
            type="button"
            aria-pressed={mesSeleccionado === mes}
            onClick={() => setMesSeleccionado(mes)}
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

      {mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Enero' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Enero />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Febrero' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Febrero />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Marzo' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Marzo />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Abril' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Abril />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Mayo' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Mayo />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Junio' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Junio />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Julio' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Julio />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Agosto' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Agosto />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Septiembre' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Septiembre />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Octubre' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Octubre />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Noviembre' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Noviembre />
      ) : mesSeleccionado && tipoNomina === 'Nómina de Beneficiarios Subsidio Familiar' && mesSeleccionado === 'Diciembre' ? (
        <Seccion9_3_N_B_Sub_Fam2015_Diciembre />
      ) : mesSeleccionado ? (
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <h4 className="text-base font-semibold text-slate-900">{tipoNomina} · {mesSeleccionado} 2015</h4>
          <p className="mt-2 text-sm text-slate-600">El detalle de beneficiarios de este mes se agregará aquí.</p>
        </article>
      ) : null}
    </section>
  );
}
