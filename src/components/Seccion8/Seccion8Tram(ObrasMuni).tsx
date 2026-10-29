import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight, FileText } from 'lucide-react';

interface Seccion8ObrasMuniProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

type EnlaceObras = { nombre: string; href: string };
type FichaObras = {
  nombre: string;
  descripcion: string;
  requisitos: string;
  documentos: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad?: string;
  valor?: string;
  disponible: string;
  enlaceOnline?: EnlaceObras;
  enlacesInformativos?: EnlaceObras[];
};

const enlacesDOM: EnlaceObras[] = [
  { nombre: 'Transparencia Activa', href: 'http://transparencia.loprado.cl/' },
  { nombre: 'Ordenanza de Derecho Municipal', href: '' },
  { nombre: 'Diagrama de la Estructura Orgánica', href: '' },
  { nombre: 'Contacto Dirección de Obras Municipales', href: '' }
];
const requisitosCertificado = 'Persona Natural o Jurídica.\nEn caso de no contar con Escritura llenar formulario en Ventanilla Única.';
const documentosCertificado = 'Fotocopia de la escritura (no es obligación, si maneja los datos de la propiedad).\nSolicitud de Certificado en Ventanilla Única.';
const etapasCertificado =
  '1. Ingreso Solicitud en Ventanilla Única.\n2. Recepción de Solicitud en Secretaría DOM.\n3. Visita de Inspector DOM al terreno solicitado.\n4. Tipo de documento por el Departamento de Inspección.\n5. Revisión y firma del Director de Obras.\n6. Despacho y descarga documento a Oficina Información y Archivo DOM para su entrega.';
const lugarDOM = 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.';
const fichaCertificado = (nombre: string, descripcion: string, costo = 'Sí', valor = '10%'): FichaObras => ({
  nombre,
  descripcion,
  requisitos: requisitosCertificado,
  documentos: documentosCertificado,
  etapas: etapasCertificado,
  lugar: lugarDOM,
  costo,
  unidad: costo === 'Sí' ? 'UTM' : undefined,
  valor: costo === 'Sí' ? valor : undefined,
  disponible: 'No',
  enlacesInformativos: enlacesDOM
});

const tramitesObras: FichaObras[] = [
  {
    nombre: 'Solicitud de Audiencia Ley lobby',
    descripcion: 'Ley N° 20.730. Regula el Lobby y las Gestiones que Representen Intereses Particulares ante las Autoridades y Funcionarios.',
    requisitos: 'No tiene.',
    documentos: 'No tiene.',
    etapas: 'Presencial: Avenida San Pablo 5959, primer piso, Dirección de Obras Municipales. Medio Electrónico: sitio web Ley Lobby.\n\nEtapa:\n1. Recepción de Solicitud de Audiencia.\n2. Análisis de la Solicitud de Audiencia: Aceptación, Encomendada o Rechazada.\n3. Solicitud Aceptada o encomendada. Se informa mediante correo electrónico la fecha, hora y lugar.\n4. Publicación de la Audiencia. Se informa el primer día hábil del mes siguiente en sitio web Ley Lobby.',
    lugar: 'Presencial: Avenida San Pablo 5959, primer piso, Dirección de Obras Municipales.',
    costo: 'No',
    disponible: 'Sí',
    enlaceOnline: { nombre: 'Solicitud de Audiencia Ley Lobby', href: '' },
    enlacesInformativos: [{ nombre: 'Transparencia Activa', href: 'http://transparencia.loprado.cl/' }]
  },
  {
    nombre: 'Audiencias Director de Obras',
    descripcion: 'Atención del Director de Obras a la comunidad.',
    requisitos: 'Se solicita audiencia de forma presencial.',
    documentos: 'Sin Documentación.',
    etapas: 'Se solicita el día de la audiencia, la que es ingresada a la agenda del Director; su atención es por orden de llegada.',
    lugar: 'Avenida San Pablo 5959, segundo piso, Oficina de la Dirección de Obras Municipales.',
    costo: 'No',
    disponible: 'No'
  },
  {
    nombre: 'Certificación',
    descripcion: 'Fotocopias legalizadas firmadas por el Director de Obras Municipal.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: 'No tiene.',
    etapas: '1. Ingreso Solicitud.\n2. Cobro.\n3. Certificación.\n4. Revisión y firma Director.\n5. Entrega certificación.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '5%',
    disponible: 'No',
    enlacesInformativos: enlacesDOM
  },
  fichaCertificado('Certificado de Deslindes', 'Informa medidas de terreno indicadas en plano de loteo de Población.'),
  {
    ...fichaCertificado('Certificado de Deslindes de Terreno y Loteo', 'Informa medidas de terreno indicadas en plano de loteo de población y medidas reales tomadas en terreno.'),
    etapas: '1. Ingreso Solicitud en Ventanilla Única.\n2. Recepción de Solicitud en Secretaría DOM.\n3. Visita de Inspector DOM al terreno solicitado.\n4. Tipo de documento por el Departamento de Inspección.\n5. Revisión y firma del Director de Obras.\n6. Despacho y descarga documento a Oficina Información y Archivo DOM para su entrega.'
  },
  {
    ...fichaCertificado('Certificado de No Expropiación', 'Informa si la dirección solicitada cuenta con expropiación oficial o si se encuentra fuera de línea.'),
    etapas: '1. Ingreso Solicitud en Ventanilla Única.\n2. Recepción de Solicitud en Secretaría DOM.\n3. Visita de Inspector DOM al terreno solicitado.\n4. Tipo de documento por el Departamento de Inspección.\n5. Revisión y firma del Director de Obras.\n6. Despacho y descarga documento al Depto. de atención de público para su entrega.'
  },
  fichaCertificado('Certificado de Número', 'Indica el Número Municipal asignado al predio, de acuerdo a plano de loteo o copropiedad.'),
  fichaCertificado('Certificado DOM DFL 2/59', 'Informa si la propiedad está o cumple con los requisitos para ser acogida al DFL 2/59.'),
  fichaCertificado('Certificado DOM Localización', 'Informa mts. de distanciamiento de lugares públicos.'),
  {
    ...fichaCertificado('Certificado DOM Permiso y Recepción', 'Indica permisos y recepciones con los m² edificados.'),
    documentos: 'Fotocopia de la escritura (no es obligación, si maneja los datos de la propiedad).\nSolicitud de Certificado en Ventanilla Única.',
    etapas: '1. Ingreso Solicitud Ventanilla Única.\n2. Recepción Solicitud en Secretaría DOM.\n3. Busca de Expediente de Regularización.\n4. Tipo de documento por Oficina inspección.\n5. Revisión y firma del Director de Obras.\n6. Despacho y descarga documento a Oficina Información y Archivo DOM para su entrega.'
  },
  {
    ...fichaCertificado('Certificado DOM Urbanización', 'Indica estado de veredas existentes frente a la propiedad, estado de instalaciones eléctricas, sanitarias u otras conectadas a la red pública, que se encuentran dentro del predio.'),
    documentos: 'Boletas de Agua.\nBoletas de Luz.\nBoletas de Gas.\nFotocopia certificado simple de Avalúo fiscal SII.'
  },
  {
    ...fichaCertificado('Certificado DOM Vivienda Social', 'Informa si la propiedad, terreno y edificación tiene un valor mayor o menor a 400 U.F. o 520 U.F. Para condominio de vivienda social.'),
    requisitos: requisitosCertificado
  },
  fichaCertificado('Certificado DOM Zona Urbana', 'Indica zona de usos de suelo donde se ubica la propiedad.'),
  {
    ...fichaCertificado('Certificado Información Previa', 'Identifica zona de uso de suelo, e informa conjunto de normativas relativas al terreno.'),
    etapas: '1. Ingreso Solicitud en Ventanilla Única.\n2. Recepción de Solicitud en Secretaría DOM.\n3. Visita de Inspector DOM al terreno solicitado.\n4. Tipo de documento por el Departamento de Inspección.\n5. Revisión y firma del Director de Obras.\n6. Despacho y descarga documento al Depto. de atención de público para su entrega.'
  },
  {
    nombre: 'Copias de Planos',
    descripcion: 'Copia planos de construcciones y loteo.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: 'No tiene.',
    etapas: '1. Ingreso Solicitud.\n2. Recepción de Oficina de Inspección.\n3. Solicitud de copia de plano a Dimacofi.\n4. Cálculo de cobro de plano.\n5. Cobro.\n6. Entrega de copia de plano.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM el M2',
    valor: '20%',
    disponible: 'No',
    enlacesInformativos: enlacesDOM
  },
  {
    nombre: 'Fotocopias de documentos',
    descripcion: 'Fotocopias de documentos existentes en expedientes de Obras Municipales.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: 'No tiene.',
    etapas: '1. Ingreso Solicitud.\n2. Se procede a sacar fotocopia del documento en Oficina Información y Archivo DOM.\n3. Entrega.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '5%',
    disponible: 'No',
    enlacesInformativos: enlacesDOM
  },
  {
    nombre: 'Ingreso de Expediente para permiso',
    descripcion: 'Solicitud de permiso para edificar y recepción final.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: 'Antecedentes en Formulario MINVU.',
    etapas: '1. Ingreso Expediente.\n2. Pasa a Arquitecto Revisor quien realiza cálculo de derechos del 10%.\n3. Cancelación de los derechos si está aprobado (si está rechazado se devuelve al propietario).\n4. Se da número de expediente y se informa de los 30 días para 1ra. revisión.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959 1er. Piso.',
    costo: 'Sí',
    unidad: '10% Presupuesto',
    valor: '10%',
    disponible: 'No',
    enlacesInformativos: enlacesDOM
  },
  {
    nombre: 'Inspección de Patente',
    descripcion: 'Indica antecedentes referente a un local comercial determinado; estado de construcciones, distribución de los recintos, medidas de seguridad, permiso, recepción, etc.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: 'No tiene.',
    etapas: '1. Ingreso Solicitud en Ventanilla Única.\n2. Recepción de Solicitud en Secretaría DOM.\n3. Visita de Inspector DOM al local.\n4. Tipo de documento por Oficina de Inspección.\n5. Revisión y firma del Director de Obras.\n6. Despacho y descarga documento a Oficina Información y Archivo DOM para su entrega.',
    lugar: lugarDOM,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '20%',
    disponible: 'No',
    enlacesInformativos: enlacesDOM
  },
  {
    nombre: 'Solicitud de Inspección',
    descripcion: 'Informe Técnico de terreno dependiendo de la necesidad del contribuyente.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: 'No tiene.',
    etapas: '1. Ingreso Solicitud en Ventanilla Única.\n2. Recepción de Solicitud en Secretaría DOM.\n3. Visita de Inspector DOM a la dirección denunciada.\n4. Si se comprueba situación denunciada, se notifica y se da un plazo.\n5. Cumplido el plazo otorgado se hace nuevamente inspección a terreno; si la situación denunciada continúa se cursa parte del Juzgado Policía Local.\n6. Revisión y firma del Director de Obras.\n7. Despacho documento a Oficina de Partes e Informaciones para su respectivo despacho.',
    lugar: lugarDOM,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '20%',
    disponible: 'No',
    enlacesInformativos: enlacesDOM
  },
  {
    nombre: 'Zonificación',
    descripcion: 'Indica zona urbana en que se encuentra emplazado el predio.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: 'No tiene.',
    etapas: '1. Ingreso Solicitud en Departamento de Atención de Público DOM.\n2. Recepción y realización de Solicitud por el Arquitecto Jefe de Edificación.\n3. Revisión y firma del Director de Obras.\n4. Despacho y descarga documento al Depto. Atención de Público para su entrega.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '5%',
    disponible: 'No',
    enlacesInformativos: enlacesDOM
  }
];

export default function Seccion8ObrasMuni({
  onVolver,
  onVolverSeccion
}: Seccion8ObrasMuniProps) {
  const [acordeonAbierto, setAcordeonAbierto] = useState(false);
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState<FichaObras | null>(null);

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
        <span className="text-slate-700">Obras Municipales</span>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">Obras Municipales</h2>
        <p className="mt-1 text-xs text-slate-500">Trámites disponibles en la Dirección de Obras Municipales</p>
      </div>

      {!tramiteSeleccionado && (
      <section className="max-w-4xl space-y-3">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
          <button
            type="button"
            aria-expanded={acordeonAbierto}
            onClick={() => setAcordeonAbierto(!acordeonAbierto)}
            className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-blue-50"
          >
            <span className="text-sm font-bold text-slate-900">Dirección de Obras Municipales</span>
            {acordeonAbierto
              ? <ChevronDown className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              : <ChevronRight className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />}
          </button>
          {acordeonAbierto && (
            <div className="grid gap-2 border-t border-slate-100 p-4 sm:grid-cols-2">
              {tramitesObras.map((tramite) => (
                <button
                  key={tramite.nombre}
                  type="button"
                  onClick={() => setTramiteSeleccionado(tramite)}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left transition-colors hover:border-blue-300 hover:bg-blue-50"
                >
                  <span className="flex items-start gap-2 text-sm text-slate-700 group-hover:text-blue-700">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    {tramite.nombre}
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      )}

      {tramiteSeleccionado && (
        <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Dirección de Obras Municipales</p>
            <h3 className="text-base font-bold text-slate-900">{tramiteSeleccionado.nombre}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoObras titulo="En qué consiste">{tramiteSeleccionado.descripcion}</DatoObras>
            <DatoObras titulo="Requisitos">{tramiteSeleccionado.requisitos}</DatoObras>
            <DatoObras titulo="Documentos requeridos">{tramiteSeleccionado.documentos}</DatoObras>
            <DatoObras titulo="A quién está dirigido">Dirección de Obras Municipal.</DatoObras>
            <DatoObras titulo="Trámite a realizar y/o etapas" className="sm:col-span-2 lg:col-span-3">{tramiteSeleccionado.etapas}</DatoObras>
            <DatoObras titulo="¿Dónde se realiza?">{tramiteSeleccionado.lugar}</DatoObras>
            <DatoObras titulo="Tiene costo (Sí/No)">{tramiteSeleccionado.costo}</DatoObras>
            {tramiteSeleccionado.unidad && <DatoObras titulo="Unidad monetaria">{tramiteSeleccionado.unidad}</DatoObras>}
            {tramiteSeleccionado.valor && <DatoObras titulo="Valor del servicio">{tramiteSeleccionado.valor}</DatoObras>}
            <DatoObras titulo="¿Está disponible en línea? (Sí/No)">{tramiteSeleccionado.disponible}</DatoObras>
            <DatoObras titulo="Enlace al trámite en línea correspondiente">
              {tramiteSeleccionado.enlaceOnline ? (
                <a href={tramiteSeleccionado.enlaceOnline.href || 'about:blank'} target="_blank" rel="noreferrer" className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2">
                  {tramiteSeleccionado.enlaceOnline.nombre}
                </a>
              ) : 'No aplica'}
            </DatoObras>
            {tramiteSeleccionado.enlacesInformativos && (
              <DatoObras titulo="Enlace a mayor información (existente)" className="sm:col-span-2 lg:col-span-3">
                <ul className="list-disc space-y-1 pl-4">
                  {tramiteSeleccionado.enlacesInformativos.map((enlace) => (
                    <li key={enlace.nombre}>
                      <a href={enlace.href || 'about:blank'} target="_blank" rel="noreferrer" className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2">
                        {enlace.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </DatoObras>
            )}
          </div>
        </article>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={() => tramiteSeleccionado ? setTramiteSeleccionado(null) : onVolver()}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {tramiteSeleccionado ? 'Volver a trámites de Obras Municipales' : 'Volver a unidades municipales'}
        </button>
      </div>
    </div>
  );
}

function DatoObras({ titulo, children, className = '' }: { titulo: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg bg-slate-50 p-4 ${className}`}>
      <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{titulo}</h4>
      <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}
