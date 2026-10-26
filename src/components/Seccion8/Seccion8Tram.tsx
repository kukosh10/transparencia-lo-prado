import { useState } from 'react';
import { ArrowLeft, ChevronRight, FileText } from 'lucide-react';
import Seccion8TramAlcaldia from './Seccion8Tram(alcaldia)';
import Seccion8TramAdminMuni from './Seccion8Tram(AdminMuni)';
import Seccion8TramSecreMuni from './Seccion8Tram(SecreMuni)';
import Seccion8TramSecComPlanificacion from './Seccion8Tram(SecComPLanificacion)';
import Seccion8TramAdminFinanza from './Seccion8Tram(AdminFinanza)';

interface Seccion8Props {
  onVolver: () => void;
}

const unidadesMunicipales = [
  'Alcaldía',
  'Administración Municipal',
  'Secretaría Municipal',
  'Asesoría Jurídica',
  'Secretaría Comunal de Planificación',
  'Administración y Finanzas',
  'Control Municipal',
  'Tránsito y Transporte Público',
  'Obras Municipales',
  'Medio Ambiente y Operaciones Comunales',
  'Desarrollo Comunitario'
];

export default function Seccion8Tram({ onVolver }: Seccion8Props) {
  const [unidadSeleccionada, setUnidadSeleccionada] = useState<string | null>(null);

  if (unidadSeleccionada === 'Alcaldía') {
    return (
      <Seccion8TramAlcaldia
        onVolver={() => setUnidadSeleccionada(null)}
        onVolverSeccion={onVolver}
      />
    );
  }

  if (unidadSeleccionada === 'Administración Municipal') {
    return (
      <Seccion8TramAdminMuni
        onVolver={() => setUnidadSeleccionada(null)}
        onVolverSeccion={onVolver}
      />
    );
  }

  if (unidadSeleccionada === 'Secretaría Municipal') {
    return (
      <Seccion8TramSecreMuni
        onVolver={() => setUnidadSeleccionada(null)}
        onVolverSeccion={onVolver}
      />
    );
  }

  if (unidadSeleccionada === 'Secretaría Comunal de Planificación') {
    return (
      <Seccion8TramSecComPlanificacion
        onVolver={() => setUnidadSeleccionada(null)}
        onVolverSeccion={onVolver}
      />
    );
  }

  if (unidadSeleccionada === 'Administración y Finanzas') {
    return (
      <Seccion8TramAdminFinanza
        onVolver={() => setUnidadSeleccionada(null)}
        onVolverSeccion={onVolver}
      />
    );
  }

  if (unidadSeleccionada) {
    return (
      <div className="content-box-wide space-y-6 pt-2">
        <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
          <button
            onClick={onVolver}
            className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
          >
            Transparencia Activa
          </button>
          <span className="text-slate-400">&gt;</span>
          <button
            onClick={() => setUnidadSeleccionada(null)}
            className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
          >
            Trámites
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-700">{unidadSeleccionada}</span>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">{unidadSeleccionada}</h2>
          <p className="mt-1 text-xs text-slate-500">Información y trámites de la unidad municipal</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          El contenido de esta unidad estará disponible próximamente.
        </div>

        <div className="border-t border-slate-200 pt-4">
          <button
            onClick={() => setUnidadSeleccionada(null)}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a unidades municipales
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button
          onClick={onVolver}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Trámites</span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Trámites ante el organismo</h2>
          <p className="mt-1 text-xs text-slate-500">Accede a la información por unidad municipal</p>
        </div>
        <span className="text-xs text-slate-500 font-medium">Última actualización: 26/10/2026</span>
      </div>

      <section className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Unidades Municipales</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {unidadesMunicipales.map((unidad) => (
            <button
              key={unidad}
              type="button"
              onClick={() => setUnidadSeleccionada(unidad)}
              className="group flex min-h-32 flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 text-left shadow-xs transition-all hover:border-blue-300 hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="mt-3 text-sm font-bold text-slate-900 group-hover:text-blue-700">{unidad}</span>
              <span className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-blue-600">
                <span>Ver unidad</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button
          onClick={onVolver}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Volver a sección principal
        </button>
      </div>
    </div>
  );
}
