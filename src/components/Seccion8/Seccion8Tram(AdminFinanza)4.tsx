import { ChevronRight, FileText } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  onSeleccionar: (tramite: string) => void;
}

const tramites = [
  'Beneficio de exención o rebaja por Derechos de Aseo Domiciliario',
  'Certificado de Deuda, Derechos de Aseo domiciliario',
  'Certificado de No Deuda, Derechos de Aseo domiciliario',
  'Convenios de Pago',
  'Exención Derechos de Aseo, por pagar patente municipal'
];

export default function Seccion8TramAdminFinanza4({ onSeleccionar }: Props) {
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

const enlaces = {
  transparenciaActiva: 'http://transparencia.loprado.cl/',
  programasSubsidios: '',
  nominaSubsidios: '',
  organigrama: '',
  ordenanzaAseo: '',
  primeraModificacion: '',
  nuevoDerechoMunicipal: '',
  contacto: 'http://transparencia.loprado.cl/html/estructura/organigrama/Daf.html',
  registroSocialHogares: 'https://rsh.ministeriodesarrollosocial.gob.cl/portada'
};

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

type Fila = { etiqueta: string; contenido: ReactNode };

function EnlacesInformacion({ incluirSubsidios = false }: { incluirSubsidios?: boolean }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      <li><EnlaceExterno href={enlaces.transparenciaActiva}>Transparencia Activa</EnlaceExterno></li>
      {incluirSubsidios && (
        <>
          <li><EnlaceExterno href={enlaces.programasSubsidios}>Programas de Subsidios y Beneficios</EnlaceExterno></li>
          <li><EnlaceExterno href={enlaces.nominaSubsidios}>Nómina de Subsidios y Beneficios</EnlaceExterno></li>
        </>
      )}
      <li><EnlaceExterno href={enlaces.organigrama}>Organigrama Municipal</EnlaceExterno></li>
      <li><EnlaceExterno href={enlaces.ordenanzaAseo}>Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura</EnlaceExterno></li>
      <li><EnlaceExterno href={enlaces.primeraModificacion}>Primera Modificación de la Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura</EnlaceExterno></li>
      <li><EnlaceExterno href={enlaces.nuevoDerechoMunicipal}>Nuevo Derecho Municipal sobre Cobro de Aseo a Ferias Libres y Persas</EnlaceExterno></li>
      <li><EnlaceExterno href={enlaces.contacto}>Contacto para consultas</EnlaceExterno></li>
      {incluirSubsidios && (
        <li><EnlaceExterno href={enlaces.registroSocialHogares}>Ingreso al Registro Social de Hogares</EnlaceExterno></li>
      )}
    </ul>
  );
}

function FichaCobranza({ filas, incluirSubsidios = false }: { filas: Fila[]; incluirSubsidios?: boolean }) {
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
            <EnlacesInformacion incluirSubsidios={incluirSubsidios} />
          </dd>
        </div>
      </dl>
    </section>
  );
}

const filasBeneficioRebaja: Fila[] = [
  { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: 'Beneficio de Rebaja por Derechos de Aseo Domiciliario' },
  {
    etiqueta: 'En qué consiste (breve descripción)',
    contenido: (
      <>
        Es un beneficio para los adultos mayores pensionados o cualquier contribuyente que por encontrarse en el tramo de calificación socio económica del 60 correspondiente al sistema de <EnlaceExterno href={enlaces.registroSocialHogares}>Registro Social de Hogares</EnlaceExterno>. 100% de excepción, tramo del 70 tiene un 45% de rebaja.
      </>
    )
  },
  { etiqueta: 'Requisitos', contenido: 'Vivir en la propiedad afecta al pago de este derecho municipal.' },
  { etiqueta: 'Documentos requeridos', contenido: 'Fotocopia de la Cédula de Identidad, Certificado de Residencia, Colilla de la Pensión o Ficha de Protección Social.' },
  { etiqueta: 'A quién está dirigido', contenido: 'Adultos mayores y contribuyentes con estratificación baja.' },
  {
    etiqueta: 'Trámites a realizar y/o etapas',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Ingreso de solicitud en Ventanilla Única.</li>
        <li>Revisión de antecedentes.</li>
        <li>Confección de Decreto Alcaldicio.</li>
        <li>Emisión de carta con beneficio y período de exención o rebaja.</li>
      </ol>
    )
  },
  { etiqueta: '¿Dónde se realiza?', contenido: 'Cobranza Administrativa.' },
  { etiqueta: 'Tiene costo', contenido: 'No' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasCertificadoDeuda: Fila[] = [
  { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: 'Certificado de Deuda, Derechos de Aseo domiciliario' },
  {
    etiqueta: 'En qué consiste (breve descripción)',
    contenido: 'En el caso de las propiedades avaluadas inferior a 225 UTM, se certifica la exención por el avalúo. Si la propiedad tiene un avalúo entre 225 y 516 UTM se certifica si presenta o no deuda.'
  },
  { etiqueta: 'Requisitos', contenido: 'Rol de la propiedad.' },
  { etiqueta: 'Documentos requeridos', contenido: 'Ingresar solicitud en Ventanilla Única.' },
  { etiqueta: 'A quién está dirigido', contenido: 'Tesorería Municipal.' },
  { etiqueta: 'Trámites a realizar y/o etapas', contenido: 'La información es obtenida de la base de datos del SII, y se redacta el certificado para la firma de la Tesorera Municipal.' },
  { etiqueta: '¿Dónde se realiza?', contenido: 'En la Sección Cobranza Administrativa.' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'UTM' },
  { etiqueta: 'Valor del servicio', contenido: '5%' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasCertificadoNoDeuda: Fila[] = [
  { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: 'Certificado de No Deuda, Derechos de Aseo domiciliario' },
  { etiqueta: 'En qué consiste (breve descripción)', contenido: 'Certificado emitido por los inmuebles que cuenten con un avalúo inferior a 225 UTM.' },
  { etiqueta: 'Requisitos', contenido: 'Rol de la propiedad.' },
  { etiqueta: 'Documentos requeridos', contenido: 'Ingresar solicitud en Ventanilla Única.' },
  { etiqueta: 'A quién está dirigido', contenido: 'Tesorería Municipal.' },
  { etiqueta: 'Trámites a realizar y/o etapas', contenido: 'La información es obtenida de la base de datos del SII, y se redacta el certificado para la firma de la Tesorera Municipal.' },
  { etiqueta: '¿Dónde se realiza?', contenido: 'Cobranza Administrativa.' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'UTM' },
  { etiqueta: 'Valor del servicio', contenido: '5%' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasConveniosPago: Fila[] = [
  { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: 'Convenios de Pago' },
  { etiqueta: 'En qué consiste (breve descripción)', contenido: 'El contribuyente que registre deuda en los derechos municipales como, aseo, patente municipal, permiso de circulación, estacionamientos, arriendo de locales comerciales.' },
  { etiqueta: 'Requisitos', contenido: 'Ser mayor de edad y formalizar convenio.' },
  { etiqueta: 'Documentos requeridos', contenido: 'Fotocopia de la Cédula de Identidad, Certificado de Residencia. Abonar el 10% de la deuda, el saldo se puede pactar hasta en 12 cuotas. En el caso que quien asuma la deuda no sea el titular de esta, deberá presentar una declaración jurada ante notario.' },
  { etiqueta: 'A quién está dirigido', contenido: 'No aplica.' },
  { etiqueta: 'Trámites a realizar y/o etapas', contenido: 'Se formaliza el compromiso de pago, con documentos solicitados a la vista, y es firmado por el interesado y la Tesorera Municipal.' },
  { etiqueta: '¿Dónde se realiza?', contenido: 'Cobranza Administrativa.' },
  { etiqueta: 'Tiene costo', contenido: 'No' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

export function FichaBeneficioRebajaAseo() {
  return <FichaCobranza filas={filasBeneficioRebaja} incluirSubsidios />;
}

export function FichaCertificadoDeudaAseo() {
  return <FichaCobranza filas={filasCertificadoDeuda} />;
}

export function FichaCertificadoNoDeudaAseo() {
  return <FichaCobranza filas={filasCertificadoNoDeuda} />;
}

export function FichaConveniosPagoAseo() {
  return <FichaCobranza filas={filasConveniosPago} />;
}
