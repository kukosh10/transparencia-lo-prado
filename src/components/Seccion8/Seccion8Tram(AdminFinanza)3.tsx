import { ChevronRight, FileText } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  onSeleccionar: (tramite: string) => void;
}

const tramites = [
  'Ampliación de Giro de Patente y permisos Comercial',
  'Cambio de Giro Patente y Permisos Comerciales'
];

export default function Seccion8TramAdminFinanza3({ onSeleccionar }: Props) {
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
  organigrama: '',
  ordenanzaDerechos: '',
  ordenanzaCobroAseo: '',
  primeraModificacion: '',
  nuevoDerechoMunicipal: '',
  contacto: 'http://transparencia.loprado.cl/html/estructura/organigrama/Daf.html',
  sii: 'https://homer.sii.cl/'
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

function FichaCambioGiro({ titulo, conCosto }: { titulo: string; conCosto: boolean }) {
  const filas = [
    { etiqueta: 'Nombre del trámite, servicio o beneficio', contenido: titulo },
    { etiqueta: 'En qué consiste', contenido: titulo },
    {
      etiqueta: 'Requisitos',
      contenido: (
        <p>
          Ser persona Natural o Jurídica E.I.R.L., que sea una actividad lícita, que no sea contaminante o molesta, que su capital (activos) no supere las 1.000 U.F., que se realice la actividad en su casa habitación, que sea legítimo ocupante, que no tenga más de 5 trabajadores externos, que cuente con Resolución y/o calificación Sanitaria de requerir, que cuente con Resolución SAG de requerir.
        </p>
      )
    },
    {
      etiqueta: 'Documentos requeridos',
      contenido: (
        <ol className="list-decimal space-y-1 pl-5">
          <li>Formulario Micro Empresa Familiar.</li>
          <li>Certificado del Servicio Agrícola y Ganadero (SAG), si se requiere.</li>
          <li>Calificación y/o resolución de la SEREMI, si se requiere.</li>
          <li>Fotocopia de la Patente con pago al día.</li>
        </ol>
      )
    },
    { etiqueta: 'A quién está dirigido', contenido: 'Oficina de Patentes Comerciales' },
    {
      etiqueta: 'Trámites a realizar y/o etapas',
      contenido: (
        <ol className="list-decimal space-y-1 pl-5">
          <li>Se ingresa la documentación a través de Ventanilla Única.</li>
          <li>Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única.</li>
          <li>Se deriva a la Oficina de Fiscalización.</li>
          <li>Aprobada la fiscalización se decreta la Patente Comercial con el giro o giros.</li>
          <li>Se llama al contribuyente por teléfono para notificar el retiro de la copia del Decreto.</li>
        </ol>
      )
    },
    { etiqueta: '¿Dónde se inicia el trámite?', contenido: 'Ventanilla Única' },
    { etiqueta: 'Tiene costo', contenido: conCosto ? 'Sí' : 'No' },
    ...(conCosto ? [{ etiqueta: 'Unidad monetaria', contenido: 'Valores en UTM' }] : []),
    ...(conCosto ? [{ etiqueta: 'Valor del servicio', contenido: '20%' }] : []),
    { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
  ];

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
            <ul className="list-disc space-y-1 pl-5">
              <li><EnlaceExterno href={enlaces.transparenciaActiva}>Transparencia Activa</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaces.organigrama}>Organigrama Municipal</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaces.ordenanzaDerechos}>Ordenanza sobre Derechos Municipales</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaces.ordenanzaCobroAseo}>Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaces.primeraModificacion}>Primera Modificación de la Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaces.nuevoDerechoMunicipal}>Nuevo Derecho Municipal sobre Cobro de Aseo a Ferias Libres y Persas</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaces.contacto}>Contacto para consultas</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaces.sii}>Página web Servicios de Impuesto Interno SII</EnlaceExterno></li>
            </ul>
          </dd>
        </div>
      </dl>
    </section>
  );
}

export function FichaAmpliacionGiro() {
  return <FichaCambioGiro titulo="Ampliación de Giro de Patente Comercial" conCosto={false} />;
}

export function FichaCambioGiroPatente() {
  return <FichaCambioGiro titulo="Cambio de Giro Patente y Permisos Comerciales" conCosto />;
}
