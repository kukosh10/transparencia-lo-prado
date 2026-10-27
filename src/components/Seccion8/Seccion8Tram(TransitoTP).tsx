import { type ReactNode, useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight, FileText } from 'lucide-react';
import { VistaLicenciasConducir } from './Seccion8Tram(AdminFinanza)5';

interface Seccion8TramTransitoTPProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

type GrupoTransito = 'licencia' | 'circulacion' | 'tecnico';
type TramiteTransito = { nombre: string; index: number };
type EnlacePermiso = { nombre: string; href: string };
type RegistroPermisoTransito = {
  tramite: string;
  descripcion: string;
  requisitos: string;
  documentos: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad?: string;
  valor?: string;
  disponible: string;
  enlaceEnLinea?: EnlacePermiso;
};

const enlacesInformativosPermiso: EnlacePermiso[] = [
  { nombre: 'Transparencia Activa', href: 'http://transparencia.loprado.cl/' },
  { nombre: 'Organigrama. Municipal', href: '' },
  { nombre: 'contacto para consultas', href: '' }
];
const enlacesInformativosTecnico: EnlacePermiso[] = [
  { nombre: 'Transparencia Activa', href: 'http://transparencia.loprado.cl/' },
  { nombre: 'Aprueba Manual de Procedimiento de Procedimientos de Licencias de Conducir y Departamento Técnico. Municipal', href: '' },
  { nombre: 'Organigrama. Municipal', href: '' },
  { nombre: 'Contacto para consultas', href: '' }
];
const lugarPermisoTransito = 'Depto. Permiso de Circulación, San Pablo 5959, primer piso.';
const documentosRenovacion =
  '1. Permiso de Circulación año anterior. 2. Seguro Obligatorio con vigencia hasta el siguiente año mismo período. 3. Revisión Técnica y Certificado de emisión de Gases (si es vehículo nuevo, en su defecto homologación vigente). 4. Fotocopia de Padrón del vehículo en caso de cambio de propietario.';
const etapasBasePermiso =
  'Inicio: 1. Se dirigen al Depto. de Permiso de Circulación donde se entregan los documentos mencionados anteriormente. 2. Se ingresan los datos de Propietario y vehículos al sistema de Permiso de Circulación existente en la unidad. 3. Emisión de folio y se cancela en Tesorería.';
const registrosPermisoTransito: RegistroPermisoTransito[] = [
  {
    tramite: 'Consulta de Permiso de Circulación',
    descripcion: 'Para ratificar que su permiso de circulación se encuentra en nuestra comuna.',
    requisitos: '1. Saberse la placa patente del vehículo. 2. Tener vehículo con permiso de circulación vigente en la comuna.',
    documentos: 'Ninguno.',
    etapas: 'Inicio: Se ingresa al link de Consulta de Permiso de Circulación.',
    lugar: 'Depto. Permiso de Circulación, San Pablo 5959, primer piso.',
    costo: 'No',
    disponible: 'Sí',
    enlaceEnLinea: { nombre: 'Consulta de Permiso de Circulación', href: '' }
  },
  {
    tramite: 'Duplicado de Permiso de Circulación',
    descripcion: 'Duplicado de Permiso de Circulación.',
    requisitos: '1. Ser el dueño del Vehículo. 2. Cédula de Identidad del Propietario. 3. Padrón del vehículo.',
    documentos: '1. Padrón del vehículo. 2. Cédula de Identidad del Propietario.',
    etapas: etapasBasePermiso,
    lugar: lugarPermisoTransito,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%',
    disponible: 'No, Solo Presencial'
  },
  {
    tramite: 'Duplicado de Sello Verde',
    descripcion: 'Duplicado de Sello Verde.',
    requisitos: '1. Ser el dueño del Vehículo. 2. Cédula de Identidad del Propietario. 3. Padrón del vehículo. 4. Origen del Sello Verde debe ser de la comuna de Lo Prado, a menos que demuestre la distancia de 150 kilómetros del origen del Sello Verde y sea de la comuna.',
    documentos: '1. Padrón del vehículo. 2. Cédula de Identidad del Propietario. 3. Declaración Jurada ante Notario Público por reemplazo, perdida o robo.',
    etapas: 'Inicio: 1. Se dirigen al Depto. de Permiso de Circulación donde se entregan los documentos mencionados anteriormente. 2. Se verifica los datos de Propietario y vehículos al sistema de Permiso de Circulación existente en la unidad. 3. Se cancela en Tesorería. 4. Se hace entrega del Sello Verde.',
    lugar: lugarPermisoTransito,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%',
    disponible: 'No, Solo Presencial'
  },
  {
    tramite: 'Excepción de pago Permiso de Circulación',
    descripcion: 'Excepción de pago Permiso de Circulación.',
    requisitos: 'Vehículo en mal estado que no pueda circular durante un año calendario.',
    documentos: '1. Padrón del vehículo. 2. Permiso de Circulación anterior.',
    etapas: 'Inicio: 1. Se dirigen al Depto. de Permiso de Circulación donde se entregan los documentos mencionados anteriormente. 2. Se verifica los datos de Propietario y vehículos al sistema de Permiso de Circulación existente en la unidad. 3. Se ingresa la información de acogimiento de la Ley 3.063, Art. N° 16. 4. Si el propietario tenía el permiso en dos cuotas se puede abstener de la cancelación si se acoge a la Ley 3.063, art. N° 15; se emite formulario timbrado y firmado por la unidad, firma del solicitante, se entrega copia. 5. El acogimiento desde enero hasta el 30 de noviembre se debe realizar todos los años que el vehículo no transite por el país.',
    lugar: lugarPermisoTransito,
    costo: 'No',
    disponible: 'No, Solo Presencial'
  },
  {
    tramite: 'Permiso de Circulación vehículo con vencimiento en Marzo',
    descripcion: 'Permiso de Circulación vehículo con vencimiento en Marzo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Taxi Turismo, Automóviles, Particulares, Furgones, ST, W. Ambulancias, Carrozas, Camionetas, Motocicletas).',
    documentos: documentosRenovacion,
    etapas: `${etapasBasePermiso} 4. Se informa que este Permiso se puede cancelar en una cuota con vencimiento el 31 de marzo o en dos cuotas, siendo el segundo vencimiento el 31 de agosto (se cancela según IPC más corrección monetaria).`,
    lugar: lugarPermisoTransito,
    costo: 'Sí',
    unidad: 'pesos',
    valor: 'Depende de la tasación del vehículo realizada por el Servicio de Impuestos Internos.',
    disponible: 'Sí, con la salvedad de que se necesita documentos requeridos escaneados y posteriormente la entrega de documentación en la unidad.',
    enlaceEnLinea: { nombre: 'Pago renovación permiso de Circulación de Lo Prado mes de Marzo', href: '' }
  },
  {
    tramite: 'Permiso de Circulación vehículo con vencimiento en Mayo',
    descripcion: 'Permiso de Circulación vehículo con vencimiento en Mayo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Automóviles de Alquiler Básicos, Colectivos y Furgones Escolar); taxímetro para taxi básico y ejecutivo.',
    documentos: `${documentosRenovacion} 5. Fotocopia de la tarjeta de recorrido. 6. Control del taxímetro.`,
    etapas: `${etapasBasePermiso} 4. Fiscalización de taxímetro para taxi básicos y ejecutivos. 5. Se informa que este Permiso se puede cancelar en una cuota con vencimiento el 31 de mayo y en dos cuotas, siendo el segundo vencimiento el 30 de junio (se cancela de acuerdo al IPC mes ante precedente).`,
    lugar: lugarPermisoTransito,
    costo: 'Sí',
    unidad: 'IPC',
    disponible: 'No, Solo Presencial'
  },
  {
    tramite: 'Permiso de Circulación vehículo con vencimiento en Septiembre',
    descripcion: 'Permiso de Circulación vehículo con vencimiento en Septiembre.',
    requisitos: 'Ser propietario de un vehículo (Vehículos de locomoción colectiva, camiones desde 1.700 y más de 10.000 kg, tractocamiones y semirremolques desde 1.750 y más de 10.000 kg, carros y remolques, otros: tractores, sembradoras, cosechadoras, palas mecánicas, traíllas, etc.).',
    documentos: documentosRenovacion,
    etapas: `${etapasBasePermiso} 4. Se emite durante todo el año. 5. Se puede cancelar en una cuota con vencimiento el 30 de septiembre o en dos cuotas, siendo el segundo vencimiento el 31 de octubre (se cancela de acuerdo al IPC mes ante precedente). 6. La cancelación por tipo se realiza calculando dependiendo de la capacidad de carga del vehículo en trámite.`,
    lugar: lugarPermisoTransito,
    costo: 'Sí',
    unidad: 'IPC',
    disponible: 'No, Solo Presencial'
  },
  {
    tramite: 'Primer Permiso de Circulación vehículo nuevo vencimiento Marzo',
    descripcion: 'Permiso de Circulación vehículo nuevo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Taxi Turismo, Automóviles, Particulares, Furgones, ST, W. Ambulancias, Carrozas, Camionetas, Motocicletas).',
    documentos: '1. Solicitud de Inscripción en Registro Civil. 2. Copia Municipalizada de la factura de compra del vehículo. 3. Homologación del vehículo. 4. Seguro Obligatorio vigente hasta el siguiente año.',
    etapas: `${etapasBasePermiso} Se debe dirigir al Depto. de Permiso de Circulación para ingresar los datos al documento de homologación entregado, más sello verde.`,
    lugar: lugarPermisoTransito,
    costo: 'Sí',
    unidad: 'pesos',
    valor: 'Dependiendo del valor neto de la factura del vehículo.',
    disponible: 'No, Solo Presencial'
  },
  {
    tramite: 'Permiso de Circulación vehículo nuevo vencimiento Mayo',
    descripcion: 'Permiso de Circulación vehículo nuevo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Automóviles de Alquiler Básicos, Colectivos y Furgones Escolar); taxímetro para taxi básico y ejecutivo.',
    documentos: '1. Solicitud de Inscripción en Registro Civil. 2. Copia Municipalizada de la factura de compra del vehículo. 3. Revisión Técnica y Certificado de emisión de Gases (si es vehículo nuevo, en su defecto homologación vigente para la Revisión Técnica se da por un año y de gases por 6 meses). 4. Seguro Obligatorio vigente hasta el siguiente año. 5. Certificado del Ministerio de Transporte y Telecomunicaciones que autoriza la actividad.',
    etapas: `${etapasBasePermiso} Se debe dirigir al Depto. de Permiso de Circulación para ingresar los datos al documento de homologación entregado, más sello verde y control de taxímetro si corresponde.`,
    lugar: lugarPermisoTransito,
    costo: 'Sí',
    unidad: 'pesos',
    valor: 'Dependiendo del valor neto de la factura del vehículo.',
    disponible: 'No, Solo Presencial'
  },
  {
    tramite: 'Permiso de Circulación vehículo nuevo vencimiento Septiembre',
    descripcion: 'Permiso de Circulación vehículo nuevo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Vehículos de locomoción colectiva, camiones desde 1.700 y más de 10.000 kg, tractocamiones y semirremolques desde 1.750 y más de 10.000 kg, carros y remolques, otros: tractores, sembradoras, cosechadoras, palas mecánicas, traíllas, etc.).',
    documentos: '1. Solicitud de Inscripción en Registro Civil. 2. Copia Municipalizada de la factura de compra del vehículo. 3. Certificado de Homologación. 4. Certificado de Normas. 5. Seguro Obligatorio vigente hasta el siguiente año.',
    etapas: `${etapasBasePermiso} Se debe dirigir al Depto. de Permiso de Circulación para la entrega del sello verde.`,
    lugar: lugarPermisoTransito,
    costo: 'Sí',
    unidad: 'pesos',
    valor: 'Dependiendo del valor neto de la factura del vehículo.',
    disponible: 'No, Solo Presencial'
  },
  {
    tramite: 'Primer Permiso de Circulación Franquicias Especiales',
    descripcion: 'Primer Permiso de Circulación Franquicias Especiales.',
    requisitos: 'Ser propietario de un vehículo acogido a D.L. 1.717 Art. 6, DFL N° 13.039, Art. N° 35, letra G y DFL N° 2 y 48.',
    documentos: '1. Solicitud de Inscripción en Registro Civil. 2. Declaración de Ingreso. 3. Revisión Técnica y Certificado de emisión de Gases (si es que vehículo nuevo, en su defecto homologación vigente). 4. Seguro Obligatorio vigente hasta el siguiente año.',
    etapas: `${etapasBasePermiso} Se debe dirigir al Depto. de Permiso de Circulación para ingresar los datos al documento de homologación entregado, más sello verde.`,
    lugar: lugarPermisoTransito,
    costo: 'Sí',
    unidad: 'pesos',
    valor: 'Dependiendo del valor neto de la Declaración de Ingreso del vehículo.',
    disponible: 'No, Solo Presencial'
  }
];

function VistaPermisoCirculacionTransito({ selectedIndex }: { selectedIndex: number }) {
  const registro = registrosPermisoTransito[selectedIndex];
  if (!registro) {
    return <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">No se encontró la ficha del trámite seleccionado.</p>;
  }

  const dato = (titulo: string, contenido: ReactNode, className = '') => (
    <div className={`rounded-lg bg-slate-50 p-4 ${className}`}>
      <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{titulo}</h4>
      <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{contenido}</div>
    </div>
  );

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Permiso de Circulación</p>
        <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {dato('En qué consiste', registro.descripcion)}
        {dato('Requisitos', registro.requisitos)}
        {dato('Documentos requeridos', registro.documentos)}
        {dato('A quién está dirigido', 'Dirección de Tránsito y Transporte Público.')}
        {dato('Trámite a realizar y/o etapas', registro.etapas, 'sm:col-span-2 lg:col-span-3')}
        {dato('¿Dónde se realiza?', registro.lugar)}
        {dato('Tiene costo (Sí/No)', registro.costo)}
        {registro.unidad && dato('Unidad monetaria', registro.unidad)}
        {registro.valor && dato('Valor del servicio', registro.valor)}
        {dato('¿Está disponible en línea? (Sí/No)', registro.disponible)}
        {dato(
          'Enlace al trámite en línea correspondiente',
          registro.enlaceEnLinea ? (
            <a className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2" href={registro.enlaceEnLinea.href || 'about:blank'} target="_blank" rel="noreferrer">{registro.enlaceEnLinea.nombre}</a>
          ) : 'No aplica'
        )}
        {dato(
          'Enlace a mayor información (existente)',
          <ul className="list-disc space-y-1 pl-4">
            {enlacesInformativosPermiso.map((enlace) => (
              <li key={enlace.nombre}>
                <a className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2" href={enlace.href || 'about:blank'} target="_blank" rel="noreferrer">{enlace.nombre}</a>
              </li>
            ))}
          </ul>,
          'sm:col-span-2 lg:col-span-3'
        )}
      </div>
    </article>
  );
}

function VistaRequerimientoSenalizacion() {
  const dato = (titulo: string, contenido: ReactNode, className = '') => (
    <div className={`rounded-lg bg-slate-50 p-4 ${className}`}>
      <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{titulo}</h4>
      <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{contenido}</div>
    </div>
  );

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Técnico Tránsito</p>
        <h3 className="text-base font-bold text-slate-900">Requerimiento de la Comunidad para Señalización Vial</h3>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {dato('En qué consiste', 'Vecinos o Contribuyentes solicitan o sugieren instalación de Señales de Tránsito')}
        {dato('Requisitos', 'Solicitud formal argumentando la petición')}
        {dato('Documentos requeridos', 'Carta solicitud o formulario de solicitud (lo provee la Dirección de Tránsito)')}
        {dato('A quién está dirigido', 'Al Director de Tránsito')}
        {dato(
          'Trámite a realizar y/o etapas',
          '1. Ingreso Solicitud Depto. Técnico\n2. Visita a Terreno\n3. Evaluación Técnica\n4. Orden de Instalación o solicitud de compra (Si corresponde)\n5. Recepción de las señales instaladas (Si corresponde)',
          'sm:col-span-2 lg:col-span-3'
        )}
        {dato('¿Dónde se realiza?', 'En la Dirección de Tránsito')}
        {dato('Tiene costo (Sí/No)', 'No')}
        {dato('¿Está disponible en línea? (Sí/No)', 'No')}
        {dato(
          'Enlace a mayor información (existente)',
          <ul className="list-disc space-y-1 pl-4">
            {enlacesInformativosTecnico.map((enlace) => (
              <li key={enlace.nombre}>
                <a
                  className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2"
                  href={enlace.href || 'about:blank'}
                  target="_blank"
                  rel="noreferrer"
                >
                  {enlace.nombre}
                </a>
              </li>
            ))}
          </ul>,
          'sm:col-span-2 lg:col-span-3'
        )}
      </div>
    </article>
  );
}

const grupos = [
  {
    id: 'licencia' as const,
    titulo: 'Trámite Licencia Conducir',
    tramites: [
      { nombre: 'Cambio Domicilio', index: 13 },
      { nombre: 'Control clase B, C, D y F', index: 1 },
      { nombre: 'Control Clase E', index: 8 },
      { nombre: 'Control Profesional clase A-1, A-2 Ley N° 18.290', index: 5 },
      { nombre: 'Control Profesional clase A-1, A-2, A-3, A-4, A-5', index: 4 },
      { nombre: 'Examen Sensométrico y Psicométrico', index: 15 },
      { nombre: 'Homologación clase A-1-A-2 Ley 18.290', index: 3 },
      { nombre: 'Levantamiento de Restricción', index: 16 },
      { nombre: 'Licencia Conducir Clase B menos de 17 años', index: 10 },
      { nombre: 'Licencia de Conducir E', index: 7 },
      { nombre: 'Licencia de Conducir F', index: 9 },
      { nombre: 'Primera Licencia clase A', index: 2 },
      { nombre: 'Primera Licencia de Conducir B y C', index: 0 },
      { nombre: 'Primera Licencia de Conducir clase D', index: 6 },
      { nombre: 'Verificación de Datos', index: 14 }
    ] satisfies TramiteTransito[]
  },
  {
    id: 'circulacion' as const,
    titulo: 'Trámite Permiso de Circulación',
    tramites: [
      { nombre: 'Consulta de Permiso de Circulación', index: 0 },
      { nombre: 'Duplicado de Permiso de Circulación', index: 1 },
      { nombre: 'Duplicado de Sello Verde', index: 2 },
      { nombre: 'Excepción de pago Permiso de Circulación', index: 3 },
      { nombre: 'Permiso de Circulación vehículo con vencimiento en Marzo', index: 4 },
      { nombre: 'Permiso de Circulación vehículo con vencimiento en Mayo', index: 5 },
      { nombre: 'Permiso de Circulación vehículo con vencimiento en Septiembre', index: 6 },
      { nombre: 'Primer Permiso de Circulación vehículo nuevo vencimiento Marzo', index: 7 },
      { nombre: 'Permiso de Circulación vehículo nuevo vencimiento Mayo', index: 8 },
      { nombre: 'Permiso de Circulación vehículo nuevo vencimiento Septiembre', index: 9 },
      { nombre: 'Primer Permiso de Circulación Franquicias Especiales', index: 10 }
    ] satisfies TramiteTransito[]
  },
  {
    id: 'tecnico' as const,
    titulo: 'Trámite de Técnico Tránsito',
    tramites: [{ nombre: 'Requerimiento de la Comunidad para Señalización Vial', index: 0 }] satisfies TramiteTransito[]
  }
];

export default function Seccion8TramTransitoTP({
  onVolver,
  onVolverSeccion
}: Seccion8TramTransitoTPProps) {
  const [grupoAbierto, setGrupoAbierto] = useState<GrupoTransito | null>(null);
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState<{ grupo: GrupoTransito; index: number } | null>(null);
  const detalle = tramiteSeleccionado?.grupo === 'licencia'
    ? <VistaLicenciasConducir selectedIndex={tramiteSeleccionado.index} />
    : tramiteSeleccionado?.grupo === 'circulacion'
      ? <VistaPermisoCirculacionTransito selectedIndex={tramiteSeleccionado.index} />
      : tramiteSeleccionado?.grupo === 'tecnico'
        ? <VistaRequerimientoSenalizacion />
        : null;
  const tituloTramite = tramiteSeleccionado
    ? grupos
      .find((grupo) => grupo.id === tramiteSeleccionado.grupo)
      ?.tramites.find((tramite) => tramite.index === tramiteSeleccionado.index)?.nombre
    : null;

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
        <button
          type="button"
          onClick={() => setTramiteSeleccionado(null)}
          className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline"
        >
          Tránsito y Transporte Público
        </button>
        {tituloTramite && (
          <>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-700">{tituloTramite}</span>
          </>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">{tituloTramite ?? 'Tránsito y Transporte Público'}</h2>
        <p className="mt-1 text-xs text-slate-500">
          {tituloTramite ? 'Información del trámite seleccionado' : 'Trámites disponibles en Tránsito y Transporte Público'}
        </p>
      </div>

      {detalle ? (
        detalle
      ) : (
        <section className="max-w-4xl space-y-3">
          {grupos.map((grupo) => {
            const estaAbierto = grupoAbierto === grupo.id;
            return (
              <div key={grupo.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
                <button
                  type="button"
                  aria-expanded={estaAbierto}
                  onClick={() => setGrupoAbierto(estaAbierto ? null : grupo.id)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-blue-50"
                >
                  <span className="text-sm font-bold text-slate-900">{grupo.titulo}</span>
                  {estaAbierto
                    ? <ChevronDown className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                    : <ChevronRight className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />}
                </button>
                {estaAbierto && (
                  <div className="grid gap-2 border-t border-slate-100 p-4 sm:grid-cols-2">
                    {grupo.tramites.map((tramite) => (
                      <button
                        key={`${grupo.id}-${tramite.index}`}
                        type="button"
                        onClick={() => setTramiteSeleccionado({ grupo: grupo.id, index: tramite.index })}
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
            );
          })}
        </section>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={() => tramiteSeleccionado ? setTramiteSeleccionado(null) : onVolver()}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {tramiteSeleccionado ? 'Volver a trámites de Tránsito y Transporte Público' : 'Volver a unidades municipales'}
        </button>
      </div>
    </div>
  );
}
