import type { ReactNode } from 'react';
import { ChevronRight, FileText } from 'lucide-react';

interface Props {
  onSeleccionar: (tramite: string) => void;
}

const tramites = [
  'Ferias Navideñas',
  'Permiso de Ferias Libres',
  'Permiso de Kiosco',
  'Permiso de Persa Los Tamarindos y/o Santa Marta',
  'Permiso Estacionado',
  'Permiso de Temporada'
];

export default function Seccion8TramAdminFinanza2({ onSeleccionar }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {tramites.map((tramite) => (
        <button
          key={tramite}
          type="button"
          onClick={() => onSeleccionar(tramite)}
          className="group flex min-h-16 items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4 text-left transition-colors hover:border-blue-300 hover:bg-blue-50"
        >
          <span className="flex items-center gap-3 text-sm font-medium text-slate-800 group-hover:text-blue-700">
            <FileText className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            {tramite}
          </span>
          <ChevronRight className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

const enlaceInspeccionPatente = '';
const enlaceTransparenciaActiva = 'http://transparencia.loprado.cl/';
const enlaceOrganigrama = '';
const enlaceOrdenanzaDerechos = '';
const enlaceNuevoDerechoMunicipal = '';
const enlaceContacto = 'http://transparencia.loprado.cl/html/estructura/organigrama/Daf.html';
const enlaceSii = 'https://homer.sii.cl/';

function EnlaceExterno({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href || 'about:blank'}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-purple-700 underline decoration-purple-300 underline-offset-2 hover:text-purple-900"
    >
      {children}
    </a>
  );
}

const enlacesCompartidos = (
  { incluirAseo = false }: { incluirAseo?: boolean } = {}
) => (
  <ul className="list-disc space-y-1 pl-5">
    <li><EnlaceExterno href={enlaceInspeccionPatente}>Dirección Obras Municipales, Inspección de Patente</EnlaceExterno></li>
    <li><EnlaceExterno href={enlaceTransparenciaActiva}>Transparencia Activa</EnlaceExterno></li>
    <li><EnlaceExterno href={enlaceOrganigrama}>Organigrama Municipal</EnlaceExterno></li>
    <li><EnlaceExterno href={enlaceOrdenanzaDerechos}>Ordenanza sobre Derechos Municipales</EnlaceExterno></li>
    {incluirAseo && (
      <>
        <li><EnlaceExterno href="">Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura</EnlaceExterno></li>
        <li><EnlaceExterno href="">Primera Modificación de la Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura</EnlaceExterno></li>
      </>
    )}
    <li><EnlaceExterno href={enlaceNuevoDerechoMunicipal}>Nuevo Derecho Municipal sobre Cobro de Aseo a Ferias Libres y Persas</EnlaceExterno></li>
    <li><EnlaceExterno href={enlaceContacto}>Contacto para consultas</EnlaceExterno></li>
    <li><EnlaceExterno href={enlaceSii}>Página web Servicios de Impuesto Interno SII</EnlaceExterno></li>
  </ul>
);

type FilaPermiso = { etiqueta: string; contenido: ReactNode };

function FichaPermiso({
  filas,
  incluirAseo = false
}: {
  filas: FilaPermiso[];
  incluirAseo?: boolean;
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
        <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
        <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Dirección de Administración y Finanzas</h3>
      </div>
      <dl className="divide-y divide-slate-100">
        {filas.map(({ etiqueta, contenido }) => (
          <div key={etiqueta} className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
            <dt className="self-center text-xs font-semibold text-slate-500">{etiqueta}</dt>
            <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{contenido}</dd>
          </div>
        ))}
        <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
          <dt className="self-center text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
          <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
            {enlacesCompartidos({ incluirAseo })}
          </dd>
        </div>
      </dl>
    </section>
  );
}

const filasFeriasNavidenas: FilaPermiso[] = [
  { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: 'Ferias Navideñas' },
  { etiqueta: 'En qué consiste', contenido: 'Postulación a Ferias Navideñas' },
  { etiqueta: 'Requisitos', contenido: '1.- Persona Natural 2.- Residencia en la Comuna de Lo Prado. 3.- Ser seleccionado a postulación de ferias Navideñas' },
  { etiqueta: 'Documentos requeridos', contenido: '1.- Fotocopia cédula de identidad. 2.- Certificado de Residencia. 3.- Certificado de Ficha de Protección Social. 4.- Certificado Antecedente.' },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  { etiqueta: 'Trámites a realizar y/o etapas', contenido: 'Inicio: 1.- Se ingresa la documentación Ventanilla Única, para postulación a postura ferias Navideña. 2.- Se envía a Patentes Comerciales; en caso que la documentación no esté completa se devuelve a Ventanilla Única. 3.- Si el giro necesita Resolución Seremi, el contribuyente debe presentarse a curso de capacitación de manipulación de alimento impartido por la Dirección de Medio Ambiente y Operaciones. 4.- Entrega de certificación de asistencia de curso, si corresponde, a la Oficina de Patentes Comerciales. 5.- Citación del contribuyente según orden de postulación para la asignación de puesto. 6.- Se genera el cobro del permiso. Nota: Para mayor información ver Ordenanza de Ferias Navideñas.' },
  { etiqueta: '¿Dónde se realiza?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'UTM' },
  { etiqueta: 'Valor del servicio', contenido: '0,6' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasFeriasLibres: FilaPermiso[] = [
  { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: 'Permiso de Ferias Libres' },
  { etiqueta: 'En qué consiste', contenido: 'Petición de un Permiso de Ferias Libres nueva, son permisos precarios, no se pueden vender ni transferir.' },
  { etiqueta: 'Requisitos', contenido: '1.- Persona Natural 2.- Residencia en la Comuna de Lo Prado. 3.- Se obtendrá cupo de ferias libres según orden de llegada a postulación de ferias libres.' },
  { etiqueta: 'Documentos requeridos', contenido: '1.- Fotocopia cédula de identidad. 2.- Certificado de Residencia de la Junta de Vecinos. 3.- Certificado de Ficha de Protección Social. 4.- Certificado Antecedentes.' },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  { etiqueta: 'Trámites a realizar y/o etapas', contenido: 'Inicio: 1.- Se ingresa la documentación en Ventanilla Única, para postulación a postura ferias libres. 2.- Se envía a Patentes Comerciales; si la documentación no está completa se devuelve a Ventanilla Única. 3.- Se deriva a la Oficina de Fiscalización. 4.- Postulación queda en lista de espera. 5.- Se cita al contribuyente para informar la obtención del puesto. 6.- Si el giro necesita Resolución Seremi, se entrega certificación por la Oficina de Patentes Comerciales. 7.- Entregar Resolución Seremi aprobada, si corresponde, fotocopia cédula de identidad, Certificado de Residencia de la Junta de Vecinos, Certificado de Ficha de Protección Social y Certificado Antecedentes en Oficina de Patentes Comerciales. 8.- Confección de Decreto Alcaldicio del Permiso de Ferias Libres. 9.- Se cita al contribuyente vía telefónica para informar retiro de copia del Decreto y pago del Permiso de Ferias Libres en Oficina de Tesorería. 10.- Retiro del Decreto Alcaldicio. Nota: se puede postular hasta un máximo de 3 Ferias. El pago del servicio de acuerdo a Decreto Alcaldicio N° 2289/2010, Servicios de Baño Químico 15% UTM x Feria Libre, Bien Nacional de Uso Público 4 UTM x M2, Servicio de Aseo $ 3.500.- los cuales son pagados en enero y julio.' },
  { etiqueta: '¿Dónde se realiza?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'UTM' },
  { etiqueta: 'Valor del servicio', contenido: '0,5' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasPermisoKiosco: FilaPermiso[] = [
  { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: 'Permiso de Kiosco' },
  { etiqueta: 'En qué consiste', contenido: 'Petición de un Permiso Kiosco nueva, son permisos precarios, no se pueden vender ni transferir.' },
  { etiqueta: 'Requisitos', contenido: '1.- Persona Natural. 2.- Residencia en la Comuna de Lo Prado. 3.- Croquis de lugar a instalar kiosco. 4.- Estructura de Kiosco medidas 2X2.' },
  { etiqueta: 'Documentos requeridos', contenido: '1.- Se presenta croquis con ubicación del Permiso de Kiosco, si este es aprobado se debe ingresar en Ventanilla Única. 2.- Fotocopia cédula de identidad. 3.- Certificado de Residencia de la Junta de Vecinos. 4.- Certificado de Ficha de Protección Social. 5.- Certificado Antecedentes.' },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  { etiqueta: 'Trámites a realizar y/o etapas', contenido: 'Inicio: 1.- Se ingresa la documentación Ventanilla Única. 2.- Se envía a Patentes Comerciales; si la documentación no está completa se devuelve a Ventanilla Única. 3.- Se deriva a la Oficina de Fiscalización. 4.- Ingresa Informe Inspección a la Oficina de Fiscalización. 5.- Se remite Informe Fiscalización, Croquis y solicitud a la Dirección de Obras Municipales. 6.- Se solicita emplazamiento a la Dirección de Obras Municipales. 7.- Si el emplazamiento es favorable se cita al contribuyente. 8.- Si el giro corresponde a manipulación de alimentos se cita al contribuyente y se entrega copia del emplazamiento para la Seremi, para obtener Resolución Sanitaria. 9.- Entregar Resolución Seremi Aprobada, Fotocopia cédula de identidad, Certificado de Residencia de la Junta de Vecinos, Certificado de Ficha de Protección Social y Certificado Antecedentes en Oficina de Patentes Comerciales. 10.- Confección de Decreto Alcaldicio del Permiso de Kiosco. 11.- Se cita al contribuyente vía telefónica para informar retiro de copia del Decreto y pago del Permiso de Kiosco en Oficina de Tesorería. 12.- Retiro del Decreto Alcaldicio. NOTA: el pago se realiza a través del cálculo de metro cuadrado utilizado por el contribuyente y de acuerdo a la ubicación.' },
  { etiqueta: '¿Dónde se realiza?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'UTM*M2' },
  { etiqueta: 'Valor del servicio', contenido: '0,04' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasPermisoPersa: FilaPermiso[] = [
  { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: 'Permiso de Persa Los Tamarindos y/o Santa Marta.' },
  { etiqueta: 'En qué consiste', contenido: 'Petición de un Permiso nuevo de Persa Los Tamarindos y/o Santa Marta, son permisos precarios, no se pueden vender ni transferir.' },
  { etiqueta: 'Requisitos', contenido: '1.- Persona Natural. 2.- Residencia en la Comuna de Lo Prado. 3.- Se obtendrá el cupo de las postulaciones según orden de llegada para el permiso del Persa Los Tamarindos y/o Santa Marta.' },
  { etiqueta: 'Documentos requeridos', contenido: '1.- Fotocopia cédula de identidad. 2.- Certificado de Residencia de la Junta de Vecinos. 3.- Certificado de Ficha de Protección Social. 4.- Certificado Antecedentes.' },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  { etiqueta: 'Trámites a realizar y/o etapas', contenido: 'Inicio: 1.- Se ingresa la documentación en Ventanilla Única, para postulación a postura Persas Los Tamarindos y/o Santa Marta. 2.- Se envía a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única. 3.- Se deriva a la Oficina de Fiscalización. 4.- Esta postulación pasa a una Lista de espera. 5.- Se cita al contribuyente para informar la obtención del puesto. 6.- Si el giro necesita Resolución Seremi, se entrega certificado de emplazamiento por la Oficina de Patentes Comerciales. 7.- Entregar Resolución Seremi aprobada, si corresponde, Fotocopia Cédula de Identidad, Certificado de Residencia de la Junta de Vecinos, Certificado de Ficha de Protección Social y Certificado Antecedentes en Oficina de Patentes Comerciales. 8.- Confección de Decreto Alcaldicio del Permiso de Persas Los Tamarindos o Santa Marta. 9.- Se cita al contribuyente por teléfono para informar retiro de copia del Decreto y pago del Permiso en Oficina de Tesorería. 10.- Retiro del Decreto Alcaldicio. Nota: Renovable en los meses de enero y julio.' },
  { etiqueta: '¿Dónde se realiza?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'UTM' },
  { etiqueta: 'Valor del servicio', contenido: '' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasPermisoEstacionado: FilaPermiso[] = [
  { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: 'Permiso Estacionado' },
  { etiqueta: 'En qué consiste', contenido: 'Solicitud de permiso estacionado en Bien Nacional de uso público' },
  { etiqueta: 'Requisitos', contenido: '1.- Persona Natural. 2.- Residencia en la Comuna de Lo Prado. 3.- No tener otra patente en la comuna.' },
  { etiqueta: 'Documentos requeridos', contenido: '1.- Croquis ubicación solicitada, si este es aprobado se debe ingresar. 2.- Fotocopia cédula de identidad. 3.- Certificado de Residencia. 4.- Certificado de antecedentes. 5.- Resolución Seremi en caso de ser venta de alimentos.' },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  { etiqueta: 'Trámites a realizar y/o etapas', contenido: 'Inicio: 1.- Se ingresa la documentación en Ventanilla Única. 2.- Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única. 3.- Se deriva a la Oficina de Fiscalización. 4.- Se remite Informe Fiscalización y croquis con ubicación aceptada a la Dirección de Obras para su respectivo emplazamiento. 5.- Si el emplazamiento fuese favorable se cita al contribuyente para retirar copia para solicitar Resolución Seremi. 6.- Ingresar documentos requeridos. 7.- Confección de Decreto Alcaldicio. 8.- Se llama al contribuyente por teléfono para informar retiro de copia del Decreto y pago del permiso en Oficina de Tesorería. Nota: el cobro se realiza de acuerdo al metraje autorizado por Ordenanza Municipal, el que corresponde a 2x1 mts.' },
  { etiqueta: '¿Dónde se realiza?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'UTM*M2' },
  { etiqueta: 'Valor del servicio', contenido: '0,1' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

function FichaPermisoConEnlaces({ filas, incluirAseo = false }: { filas: FilaPermiso[]; incluirAseo?: boolean }) {
  return (
    <FichaPermiso filas={filas} incluirAseo={incluirAseo} />
  );
}

export function FichaFeriasNavidenas() {
  return <FichaPermisoConEnlaces filas={filasFeriasNavidenas} />;
}

export function FichaPermisoFeriasLibres() {
  return <FichaPermisoConEnlaces filas={filasFeriasLibres} />;
}

export function FichaPermisoKiosco() {
  return <FichaPermisoConEnlaces filas={filasPermisoKiosco} />;
}

export function FichaPermisoPersa() {
  return <FichaPermisoConEnlaces filas={filasPermisoPersa} />;
}

export function FichaPermisoEstacionado() {
  return <FichaPermisoConEnlaces filas={filasPermisoEstacionado} />;
}
