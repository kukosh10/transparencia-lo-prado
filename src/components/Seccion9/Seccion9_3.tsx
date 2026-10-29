import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Seccion9_3_N_B_Sub_Fam2016 from './Seccion9_3(N.B.Sub.Fam2016)';
import Seccion9_3_N_B_Sub_Fam2015 from './Seccion9_3(N.B.Sub.Fam2015)';
import Seccion9_3_N_B_Sub_Fam2014 from './Seccion9_3(N.B.Sub.Fam2014)';
import Seccion9_3_N_B_Sub_Fam2013 from './Seccion9_3(N.B.Sub.Fam2013)';
import Seccion9_3_N_B_Sub_Fam2012 from './Seccion9_3(N.B.Sub.Fam2012)';
import Seccion9_3_N_B_Sub_Fam2011 from './Seccion9_3(N.B.Sub.Fam2011)';
import Seccion9_3_N_B_Sub_Fam2010 from './Seccion9_3(N.B.Sub.Fam2010)';
import Seccion9_3_N_B_Sub_Fam2009 from './Seccion9_3(N.B.Sub.Fam2009)';

const anios = ['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
const tipologias = [
  { value: 'subsidio-familiar', label: 'Nómina de Beneficiarios Subsidio Familiar' },
  { value: 'subsidio-agua', label: 'Nómina de Beneficiarios Subsidio de Agua' },
  { value: 'becas', label: 'Nomina de Becas' },
  { value: 'medicamentos', label: 'Nómina de Beneficiarios Otorgamiento de Medicamentos' },
  { value: 'adulto-mayor', label: 'Nómina de Beneficiarios Adulto Mayor' },
  { value: 'aporte-municipal', label: 'Nómina de Beneficios Aporte Municipal' },
  { value: 'rebajas-derechos', label: 'Nómina de Beneficiarios Rebajas Derechos Municipales' },
  { value: 'listado-nominas', label: 'Listado de Nominas' }
];

interface Seccion9DetalleProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

export default function Seccion9_3({ onVolver, onVolverSeccion }: Seccion9DetalleProps) {
  const [tipologiaSeleccionada, setTipologiaSeleccionada] = useState(tipologias[0].value);
  const [anioSeleccionado, setAnioSeleccionado] = useState<string | null>(null);
  const nombreTipologia = tipologias.find((tipo) => tipo.value === tipologiaSeleccionada)?.label ?? tipologias[0].label;
  const propsAnual = {
    tipoNomina: nombreTipologia,
    onVolver: () => setAnioSeleccionado(null)
  };

  const contenidoAnual = (() => {
    switch (anioSeleccionado) {
      case '2016':
        return <Seccion9_3_N_B_Sub_Fam2016 anio="2016" {...propsAnual} />;
      case '2015':
        return <Seccion9_3_N_B_Sub_Fam2015 {...propsAnual} />;
      case '2014':
        return <Seccion9_3_N_B_Sub_Fam2014 {...propsAnual} />;
      case '2013':
        return <Seccion9_3_N_B_Sub_Fam2013 {...propsAnual} />;
      case '2012':
        return <Seccion9_3_N_B_Sub_Fam2012 {...propsAnual} />;
      case '2011':
        return <Seccion9_3_N_B_Sub_Fam2011 {...propsAnual} />;
      case '2010':
        return <Seccion9_3_N_B_Sub_Fam2010 {...propsAnual} />;
      case '2009':
        return <Seccion9_3_N_B_Sub_Fam2009 {...propsAnual} />;
      default:
        return null;
    }
  })();

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
        <span className="text-blue-700">Nómina de Subsidios/Beneficios</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">{nombreTipologia}</span>
      </nav>

      <header>
        <h2 className="text-xl font-bold text-slate-900">Nómina de Subsidios/Beneficios</h2>
        <p className="mt-1 text-xs text-slate-500">Consulta las nóminas de beneficiarios por año y mes</p>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <label htmlFor="tipologia-nomina" className="text-xs font-medium text-slate-700">
          Seleccione según tipología
        </label>
        <select
          id="tipologia-nomina"
          value={tipologiaSeleccionada}
          onChange={(event) => {
            setTipologiaSeleccionada(event.target.value);
            setAnioSeleccionado(null);
          }}
          className="max-w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {tipologias.map((tipo) => (
            <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
          ))}
        </select>
      </div>

      {anioSeleccionado ? (
        contenidoAnual
      ) : (
        <section aria-label="Años disponibles" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {anios.map((anio) => (
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
        <button type="button" onClick={onVolver} className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Subsidios y Beneficios
        </button>
      </div>
    </div>
  );
}
