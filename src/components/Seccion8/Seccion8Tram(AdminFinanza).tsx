import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import Seccion8TramAdminFinanza1, {
  FichaPatenteMicroempresaFamiliar,
  FichaPatenteProfesional,
  FichaPatentesIndustriales,
  FichaPatenteComercial,
  FichaPatenteComercialProvisoria,
  FichaPatenteActividadesCircenses,
  FichaPatenteAlcoholes
} from './Seccion8Tram(AdminFinanza)1';
import Seccion8TramAdminFinanza2, {
  FichaFeriasNavidenas,
  FichaPermisoFeriasLibres,
  FichaPermisoKiosco,
  FichaPermisoPersa,
  FichaPermisoEstacionado
} from './Seccion8Tram(AdminFinanza)2';
import Seccion8TramAdminFinanza3, {
  FichaAmpliacionGiro,
  FichaCambioGiroPatente
} from './Seccion8Tram(AdminFinanza)3';
import Seccion8TramAdminFinanza4, {
  FichaBeneficioRebajaAseo,
  FichaCertificadoDeudaAseo,
  FichaCertificadoNoDeudaAseo,
  FichaConveniosPagoAseo
} from './Seccion8Tram(AdminFinanza)4';
import Seccion8TramAdminFinanza5, {
  VistaTramitesEmprendimiento,
  VistaPermisosPersaNeptuno
} from './Seccion8Tram(AdminFinanza)5';

const tramitePatenteMicroempresaFamiliar = 'Patente Comercial Micro Empresa Familiares';
const tramitePatenteMicroempresaFamiliarCopropiedad = 'Patente Comercial Micro Empresa Familiares Copropiedad';
const tramitePatenteProfesional = 'Patente Profesional';
const tramitePatentesIndustriales = 'Patentes Industriales';
const tramitePatenteComercial = 'Patente Comercial';
const tramitePatenteComercialProvisoria = 'Patente Comercial Provisoria';
const tramitePatenteActividadesCircenses = 'Patente de Instalación de Actividades Circenses';
const tramitePatenteAlcoholes = 'Patente de alcoholes';
const tramiteFeriasNavidenas = 'Ferias Navideñas';
const tramitePermisoFeriasLibres = 'Permiso de Ferias Libres';
const tramitePermisoKiosco = 'Permiso de Kiosco';
const tramitePermisoPersa = 'Permiso de Persa Los Tamarindos y/o Santa Marta';
const tramitePermisoEstacionado = 'Permiso Estacionado';
const tramiteAmpliacionGiro = 'Ampliación de Giro de Patente y permisos Comercial';
const tramiteCambioGiro = 'Cambio de Giro Patente y Permisos Comerciales';
const tramiteBeneficioRebajaAseo = 'Beneficio de exención o rebaja por Derechos de Aseo Domiciliario';
const tramiteCertificadoDeudaAseo = 'Certificado de Deuda, Derechos de Aseo domiciliario';
const tramiteCertificadoNoDeudaAseo = 'Certificado de No Deuda, Derechos de Aseo domiciliario';
const tramiteConveniosPagoAseo = 'Convenios de Pago';
const tramiteEmprendimientos = 'Trámites Emprendimientos';
const tramitePermisosUsoPersaNeptuno = 'Trámites para Permisos de Uso Persa Neptuno';

interface Seccion8TramAdminFinanzaProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

const grupos = [
  { titulo: 'Trámite Patentes Comerciales', Componente: Seccion8TramAdminFinanza1 },
  { titulo: 'Trámite Permisos Comerciales', Componente: Seccion8TramAdminFinanza2 },
  { titulo: 'Otros Trámite de Patentes y Permisos Comerciales', Componente: Seccion8TramAdminFinanza3 },
  { titulo: 'Trámite de Derechos Domiciliarios', Componente: Seccion8TramAdminFinanza4 },
  { titulo: 'Trámite Otras áreas Renta Municipal', Componente: Seccion8TramAdminFinanza5 }
];

export default function Seccion8TramAdminFinanza({
  onVolver,
  onVolverSeccion
}: Seccion8TramAdminFinanzaProps) {
  const [grupoAbierto, setGrupoAbierto] = useState<string | null>(null);
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState<string | null>(null);
  const esPatenteMicroempresaFamiliar =
    tramiteSeleccionado === tramitePatenteMicroempresaFamiliar ||
    tramiteSeleccionado === tramitePatenteMicroempresaFamiliarCopropiedad;
  const esPatenteProfesional = tramiteSeleccionado === tramitePatenteProfesional;
  const esPatentesIndustriales = tramiteSeleccionado === tramitePatentesIndustriales;
  const esPatenteComercial = tramiteSeleccionado === tramitePatenteComercial;
  const esPatenteComercialProvisoria = tramiteSeleccionado === tramitePatenteComercialProvisoria;
  const esPatenteActividadesCircenses = tramiteSeleccionado === tramitePatenteActividadesCircenses;
  const esPatenteAlcoholes = tramiteSeleccionado === tramitePatenteAlcoholes;
  const esFeriasNavidenas = tramiteSeleccionado === tramiteFeriasNavidenas;
  const esPermisoFeriasLibres = tramiteSeleccionado === tramitePermisoFeriasLibres;
  const esPermisoKiosco = tramiteSeleccionado === tramitePermisoKiosco;
  const esPermisoPersa = tramiteSeleccionado === tramitePermisoPersa;
  const esPermisoEstacionado = tramiteSeleccionado === tramitePermisoEstacionado;
  const esAmpliacionGiro = tramiteSeleccionado === tramiteAmpliacionGiro;
  const esCambioGiro = tramiteSeleccionado === tramiteCambioGiro;
  const esBeneficioRebajaAseo = tramiteSeleccionado === tramiteBeneficioRebajaAseo;
  const esCertificadoDeudaAseo = tramiteSeleccionado === tramiteCertificadoDeudaAseo;
  const esCertificadoNoDeudaAseo = tramiteSeleccionado === tramiteCertificadoNoDeudaAseo;
  const esConveniosPagoAseo = tramiteSeleccionado === tramiteConveniosPagoAseo;
  const esTramitesEmprendimiento = tramiteSeleccionado === tramiteEmprendimientos;
  const esPermisosUsoPersaNeptuno = tramiteSeleccionado === tramitePermisosUsoPersaNeptuno;

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button
          onClick={onVolverSeccion}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button
          onClick={onVolver}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Trámites
        </button>
        <span className="text-slate-400">&gt;</span>
        <button
          onClick={() => setTramiteSeleccionado(null)}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Administración y Finanzas
        </button>
        {tramiteSeleccionado && (
          <>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-700">{tramiteSeleccionado}</span>
          </>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          {tramiteSeleccionado ?? 'Administración y Finanzas'}
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          {tramiteSeleccionado
            ? esPatenteProfesional
              ? 'Información del trámite de Patente Profesional'
              : esBeneficioRebajaAseo
                ? 'Información del Beneficio de Rebaja por Derechos de Aseo Domiciliario'
              : esCertificadoDeudaAseo
                ? 'Información del Certificado de Deuda de Derechos de Aseo'
              : esCertificadoNoDeudaAseo
                ? 'Información del Certificado de No Deuda de Derechos de Aseo'
              : esConveniosPagoAseo
                ? 'Información de Convenios de Pago'
              : esTramitesEmprendimiento
                ? 'Trámites de Emprendimiento'
              : esPermisosUsoPersaNeptuno
                ? 'Trámites para Permisos de Uso Persa Neptuno'
              : esAmpliacionGiro
                ? 'Información del trámite de Ampliación de Giro de Patente Comercial'
              : esCambioGiro
                ? 'Información del trámite de Cambio de Giro Patente y Permisos Comerciales'
              : esPermisoFeriasLibres
                ? 'Información del trámite de Permiso de Ferias Libres'
              : esPermisoKiosco
                ? 'Información del trámite de Permiso de Kiosco'
              : esPermisoPersa
                ? 'Información del trámite de Permiso de Persa Los Tamarindos y/o Santa Marta'
              : esPermisoEstacionado
                ? 'Información del trámite de Permiso Estacionado'
              : esFeriasNavidenas
                ? 'Información del trámite de Ferias Navideñas'
              : esPatenteAlcoholes
                ? 'Información del trámite de Patente de alcoholes'
              : esPatenteActividadesCircenses
                ? 'Información del trámite de Patente de Instalación de Actividades Circenses'
              : esPatenteComercialProvisoria
                ? 'Información del trámite de Patente Comercial Provisoria'
              : esPatenteComercial
                ? 'Información del trámite de Patente Comercial'
              : esPatentesIndustriales
                ? 'Información del trámite de Patentes Industriales'
              : esPatenteMicroempresaFamiliar
                ? 'Información del trámite de Patente Comercial Micro Empresa Familiar'
              : 'La información de este trámite estará disponible próximamente.'
            : 'Trámites disponibles en Administración y Finanzas'}
        </p>
      </div>

      {tramiteSeleccionado ? (
        esPatenteProfesional
          ? <FichaPatenteProfesional nombreTramite={tramiteSeleccionado} />
          : esBeneficioRebajaAseo
            ? <FichaBeneficioRebajaAseo />
          : esCertificadoDeudaAseo
            ? <FichaCertificadoDeudaAseo />
          : esCertificadoNoDeudaAseo
            ? <FichaCertificadoNoDeudaAseo />
          : esConveniosPagoAseo
            ? <FichaConveniosPagoAseo />
          : esTramitesEmprendimiento
            ? <VistaTramitesEmprendimiento />
          : esPermisosUsoPersaNeptuno
            ? <VistaPermisosPersaNeptuno />
          : esAmpliacionGiro
            ? <FichaAmpliacionGiro />
          : esCambioGiro
            ? <FichaCambioGiroPatente />
          : esPermisoFeriasLibres
            ? <FichaPermisoFeriasLibres />
          : esPermisoKiosco
            ? <FichaPermisoKiosco />
          : esPermisoPersa
            ? <FichaPermisoPersa />
          : esPermisoEstacionado
            ? <FichaPermisoEstacionado />
          : esFeriasNavidenas
            ? <FichaFeriasNavidenas />
          : esPatenteAlcoholes
            ? <FichaPatenteAlcoholes nombreTramite={tramiteSeleccionado} />
          : esPatenteActividadesCircenses
            ? <FichaPatenteActividadesCircenses nombreTramite={tramiteSeleccionado} />
          : esPatenteComercialProvisoria
            ? <FichaPatenteComercialProvisoria nombreTramite={tramiteSeleccionado} />
          : esPatenteComercial
            ? <FichaPatenteComercial nombreTramite={tramiteSeleccionado} />
          : esPatentesIndustriales
            ? <FichaPatentesIndustriales nombreTramite={tramiteSeleccionado} />
          : esPatenteMicroempresaFamiliar
            ? <FichaPatenteMicroempresaFamiliar nombreTramite={tramiteSeleccionado} />
          : (
            <div className="max-w-3xl rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-xs">
              El contenido de este trámite estará disponible próximamente.
            </div>
          )
      ) : (
        <section className="max-w-4xl space-y-3">
          {grupos.map(({ titulo, Componente }) => {
            const estaAbierto = grupoAbierto === titulo;
            return (
              <div key={titulo} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
                <button
                  type="button"
                  aria-expanded={estaAbierto}
                  onClick={() => setGrupoAbierto(estaAbierto ? null : titulo)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-blue-50"
                >
                  <span className="text-sm font-bold text-slate-900">{titulo}</span>
                  {estaAbierto
                    ? <ChevronDown className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                    : <ChevronRight className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />}
                </button>
                {estaAbierto && (
                  <div className="border-t border-slate-100 p-4">
                    <Componente onSeleccionar={setTramiteSeleccionado} />
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button
          onClick={() => tramiteSeleccionado ? setTramiteSeleccionado(null) : onVolver()}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {tramiteSeleccionado ? 'Volver a trámites de Administración y Finanzas' : 'Volver a unidades municipales'}
        </button>
      </div>
    </div>
  );
}
