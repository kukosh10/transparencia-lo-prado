import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight, FileText } from 'lucide-react';
import Seccion8TramDesComuni1 from './Seccion8Tram(DesComuni)1';
import Seccion8TramDesComuni2 from './Seccion8Tram(DesComuni)2';
import Seccion8TramDesComuni3 from './Seccion8Tram(DesComuni)3';

interface Seccion8TramDesComuniProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

type GrupoDesarrollo = 'propios' | 'intermediario-social' | 'intermediario-laboral';

const gruposDesarrollo: { id: GrupoDesarrollo; titulo: string; tramites: string[] }[] = [
  {
    id: 'propios',
    titulo: 'Trámite con Recursos Propios',
    tramites: [
      'Informes Sociales',
      'Trámites Entrega de Ajuar Municipal',
      'Ayudas Sociales (materiales)',
      'Ayudas para medicamentos de Alto Costo',
      'Ayudas para Fundación Vivienda',
      'Emergencias',
      'Emergencias por Fallecimiento',
      'Rebaja para acceder a sacar o renovar Cédula de Identidad en Registro Civil',
      'Rebaja y/o gratuidad para matrículas y beneficios estudiantiles en colegios municipales y/o particular subvencionados',
      'Gratuidad para atención veterinaria municipal (Vacunas, cirugías, controles)',
      'Gratuidad para servicio de desratización y fumigación en domicilio',
      'Beca Deportiva'
    ]
  },
  {
    id: 'intermediario-social',
    titulo: 'Trámite como intermediario',
    tramites: [
      'Subsidio Único Familiar',
      'Subsidio Prenatal',
      'Subsidio Único Familiar Duplo',
      'Subsidio Agua Potable',
      'Pensión Básica Solidaria de Vejez',
      'Pensión Básica Solidaria de Invalidez',
      'Subsidio para Niño y Niña con Deficiencia Mental',
      'Subsidios de Postulación a Proyectos de Mejoramiento Interior de la Vivienda',
      'Subsidios de Conformar y Formalizar Copropiedad (Programa Protección Patrimonio Familiar Llamado Especial)',
      'Subsidios Programa de Mejoramiento de Condominios Sociales',
      'Subsidios Postulación Programa Construcción en Sitio Propio',
      'Tramitación y postulación a becas JUNAEB'
    ]
  },
  {
    id: 'intermediario-laboral',
    titulo: 'Trámite como intermediario',
    tramites: [
      'Trámites Programa de la Mujer, Jefa de Hogar',
      'Solicitud de Encuesta para Nuevo Registro Social Hogar',
      'Obtención de Certificado de Ficha de Protección Social',
      'Postulación a Fondos de emprendimiento de FOSIS y otros',
      'Inscripción BNE',
      'Intermediación Laboral',
      'Capacitación en postulación a Ofertas laborales de BNE',
      'Postulación a Cursos de Capacitación',
      'Registro de Beneficiarios del Seguro de Cesantía',
      'Registro de Beneficiarios del Subsidio de Cesantía',
      'Talleres de Apresto laboral',
      'Certificado de Calidad Indígena',
      'Atención Social Profesional'
    ]
  }
];

export default function Seccion8TramDesComuni({
  onVolver,
  onVolverSeccion
}: Seccion8TramDesComuniProps) {
  const [grupoAbierto, setGrupoAbierto] = useState<GrupoDesarrollo | null>(null);
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState<{ grupo: GrupoDesarrollo; nombre: string } | null>(null);

  if (tramiteSeleccionado) {
    const volverALista = () => setTramiteSeleccionado(null);
    const props = {
      tramite: tramiteSeleccionado.nombre,
      onVolver: volverALista,
      onVolverSeccion
    };

    if (tramiteSeleccionado.grupo === 'propios') {
      return <Seccion8TramDesComuni1 {...props} />;
    }
    if (tramiteSeleccionado.grupo === 'intermediario-social') {
      return <Seccion8TramDesComuni2 {...props} />;
    }
    return <Seccion8TramDesComuni3 {...props} />;
  }

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button
          type="button"
          onClick={onVolverSeccion}
          className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline"
        >
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button
          type="button"
          onClick={onVolver}
          className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline"
        >
          Trámites
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Dirección de Desarrollo Comunitario</span>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Dirección de Desarrollo Comunitario
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Trámites disponibles en Desarrollo Comunitario
        </p>
      </div>

      <section className="max-w-4xl space-y-3">
        {gruposDesarrollo.map((grupo) => {
          const abierto = grupoAbierto === grupo.id;
          return (
            <div key={grupo.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
              <button
                type="button"
                aria-expanded={abierto}
                onClick={() => setGrupoAbierto(abierto ? null : grupo.id)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-blue-50"
              >
                <span className="text-sm font-bold text-slate-900">{grupo.titulo}</span>
                {abierto
                  ? <ChevronDown className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                  : <ChevronRight className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />}
              </button>
              {abierto && (
                <div className="grid gap-2 border-t border-slate-100 p-4 sm:grid-cols-2">
                  {grupo.tramites.map((tramite) => (
                    <button
                      key={tramite}
                      type="button"
                      onClick={() => setTramiteSeleccionado({ grupo: grupo.id, nombre: tramite })}
                      className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left transition-colors hover:border-blue-300 hover:bg-blue-50"
                    >
                      <span className="flex items-start gap-2 text-sm text-slate-700 group-hover:text-blue-700">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                        {tramite}
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={onVolver}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a unidades municipales
        </button>
      </div>
    </div>
  );
}
