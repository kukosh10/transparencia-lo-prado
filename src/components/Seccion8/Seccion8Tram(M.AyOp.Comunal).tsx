import { useState } from 'react';
import { ArrowLeft, ChevronRight, FileText } from 'lucide-react';

interface Seccion8TramMAyOpComunalProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

type EnlaceInformacion = { nombre: string; href: string };
type FichaMedioAmbiente = {
  nombre: string;
  descripcion: string;
  requisitos: string;
  documentos: string;
  dirigido?: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad?: string;
  valor?: string;
  disponible: string;
  enlacesInformativos: EnlaceInformacion[];
};

const enlacesInformativos: EnlaceInformacion[] = [
  { nombre: 'Transparencia Activa', href: 'http://transparencia.loprado.cl/' },
  { nombre: 'Organigrama. Municipal', href: '' },
  { nombre: 'Ordenanza de Derechos Municipal', href: '' },
  { nombre: 'Ordenanza de Medio Ambiente de la Comuna de Lo Prado', href: '' },
  { nombre: 'Contacto para consultas', href: '' }
];

const enlacesTala: EnlaceInformacion[] = [
  enlacesInformativos[0],
  enlacesInformativos[1],
  enlacesInformativos[2],
  enlacesInformativos[4]
];

const tramitesMedioAmbiente: FichaMedioAmbiente[] = [
  {
    nombre: 'Inspección Solicitud de Autorización de Tala y Corte de Ramas',
    descripcion: 'Inspeccionar en terreno si corresponde autorizar el Corte o Tala.',
    requisitos: 'Solicitud por vía de Ventanilla Única o documentación ingresada a Oficina de Partes.',
    documentos: 'Nombre del solicitante y domicilio en la comuna de Lo Prado.',
    dirigido: 'Departamento de Áreas Verdes, Dirección de Medio Ambiente.',
    etapas: 'Se inspecciona en terreno, se entrega un informe; si corresponde se entrega una Autorización al Solicitante o se ingresa a Programa de Poda.',
    lugar: 'En el Centro de Atención Veterinaria Comunal, ubicado en San Germán N° 980.',
    costo: 'No',
    disponible: 'No',
    enlacesInformativos: enlacesTala
  },
  {
    nombre: 'Inspección Solicitud de Tala o Corte de Ramas al interior de Viviendas particulares',
    descripcion: 'Inspeccionar en terreno y evaluar el trabajo a ejecutar para efectuar el corte o Tala de árboles.',
    requisitos: 'Solicitud por vía de Ventanilla Única o documentación ingresada a Oficina de Partes.',
    documentos: 'Nombre del solicitante y domicilio en la comuna de Lo Prado.',
    dirigido: 'Departamento de Áreas Verdes, Dirección de Medio Ambiente.',
    etapas: 'Se inspecciona en terreno, se entrega una Notificación para la cancelación del trabajo requerido (Tala o Poda).',
    lugar: 'En la Municipalidad, Caja Tesorería Municipal.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: 'Tabla según Derechos Municipales de la Dirección de Medio Ambiente.',
    disponible: 'No',
    enlacesInformativos
  },
  {
    nombre: 'Atención Veterinaria para mascotas y vacunación',
    descripcion: 'Proporcionar atención clínica preventiva a caninos y felinos de la Comuna.',
    requisitos: 'Solicitar hora de atención en Ventanilla Única.',
    documentos: 'Certificado de Residencia o cuenta a nombre del solicitante, en donde indique domicilio en la comuna de Lo Prado.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    etapas: 'Solicitar hora en Ventanilla Única; será agendado para el día y hora que haya según disponibilidad del servicio.',
    lugar: 'En el Centro de Atención Veterinaria Comunal, ubicado en San Germán N° 980.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%',
    disponible: 'No',
    enlacesInformativos
  },
  {
    nombre: 'Programa de Esterilización de mascotas',
    descripcion: 'Método de Control de la natalidad, a través de cirugía a hembras y machos, caninos y/o felinos.',
    requisitos: 'Solicitar hora para el procedimiento con anticipación a traer a la mascota.',
    documentos: 'Certificado de Residencia o cuenta a nombre del solicitante, en donde indique domicilio en la comuna de Lo Prado.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    etapas: 'Solicitar hora para el procedimiento directamente en el Centro de Atención Veterinaria Comunal, ubicado en San Germán N° 980, concurrir con la mascota día y hora que se indique. Considerar las instrucciones que se entreguen para el procedimiento.',
    lugar: 'En el Centro de Atención Veterinaria Comunal, ubicado en San Germán N° 980.',
    costo: 'Sí',
    unidad: 'PESOS',
    valor: '$8.000.-',
    disponible: 'No',
    enlacesInformativos
  },
  {
    nombre: 'Servicio de fumigación de domicilios y locales comerciales',
    descripcion: 'A través de la aplicación por aspersión de productos químicos autorizados, ayudar al control de insectos (moscas), arácnidos (araña de rincón) y garrapatas en el domicilio.',
    requisitos: 'Solicitar fecha de atención del servicio en Ventanilla Única.',
    documentos: 'Certificado de Residencia o cuenta a nombre del solicitante, en donde indique domicilio en la comuna de Lo Prado.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    etapas: 'Solicitar hora en Ventanilla Única, y será agendado para realizar el servicio a domicilio según disponibilidad de fecha.',
    lugar: 'En el domicilio del solicitante.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10% domicilios - 40% locales comerciales.',
    disponible: 'No',
    enlacesInformativos
  },
  {
    nombre: 'Servicio de desratización de domicilios y locales comerciales',
    descripcion: 'A través de la aplicación de rodenticidas autorizados, ayudar al control de roedores en el domicilio.',
    requisitos: 'Solicitar fecha de atención del servicio en Ventanilla Única.',
    documentos: 'Certificado de Residencia o cuenta a nombre del solicitante, en donde indique domicilio en la comuna de Lo Prado.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    etapas: 'Solicitar hora en Ventanilla Única, y será agendado para realizar el servicio a domicilio según disponibilidad de fecha.',
    lugar: 'En el domicilio del solicitante.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10% domicilios - 40% locales comerciales.',
    disponible: 'No',
    enlacesInformativos
  },
  {
    nombre: 'Inspección Sanitaria',
    descripcion: 'Concurrir y evaluar situación por reclamo de tenencia irresponsable de mascotas.',
    requisitos: 'Descripción del hecho y solicitud de inspección en Ventanilla Única.',
    documentos: 'Presencial.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    etapas: 'Solicitud de inspección por hechos denunciados. Se espera visita de inspector. Inspector se contacta para informar las medidas aplicadas.',
    lugar: 'En el domicilio del solicitante.',
    costo: 'No',
    disponible: 'No',
    enlacesInformativos
  }
];

function DatoMedioAmbiente({ titulo, children, className = '' }: { titulo: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg bg-slate-50 p-4 ${className}`}>
      <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{titulo}</h4>
      <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

export default function Seccion8TramMAyOpComunal({
  onVolver,
  onVolverSeccion
}: Seccion8TramMAyOpComunalProps) {
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState<FichaMedioAmbiente | null>(null);

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
        {tramiteSeleccionado && (
          <>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-700">{tramiteSeleccionado.nombre}</span>
          </>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          {tramiteSeleccionado?.nombre ?? 'Medio Ambiente y Operaciones Comunales'}
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          {tramiteSeleccionado ? 'Información del trámite seleccionado' : 'Trámites disponibles en la unidad municipal'}
        </p>
      </div>

      {tramiteSeleccionado ? (
        <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Medio Ambiente y Operaciones Comunales</p>
            <h3 className="text-base font-bold text-slate-900">{tramiteSeleccionado.nombre}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoMedioAmbiente titulo="En qué consiste">{tramiteSeleccionado.descripcion}</DatoMedioAmbiente>
            <DatoMedioAmbiente titulo="Requisitos">{tramiteSeleccionado.requisitos}</DatoMedioAmbiente>
            <DatoMedioAmbiente titulo="Documentos requeridos">{tramiteSeleccionado.documentos}</DatoMedioAmbiente>
            <DatoMedioAmbiente titulo="A quién está dirigido">{tramiteSeleccionado.dirigido ?? 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.'}</DatoMedioAmbiente>
            <DatoMedioAmbiente titulo="Trámite a realizar y/o etapas" className="sm:col-span-2 lg:col-span-3">{tramiteSeleccionado.etapas}</DatoMedioAmbiente>
            <DatoMedioAmbiente titulo="¿Dónde se realiza?">{tramiteSeleccionado.lugar}</DatoMedioAmbiente>
            <DatoMedioAmbiente titulo="Tiene costo (Sí/No)">{tramiteSeleccionado.costo}</DatoMedioAmbiente>
            {tramiteSeleccionado.unidad && <DatoMedioAmbiente titulo="Unidad monetaria">{tramiteSeleccionado.unidad}</DatoMedioAmbiente>}
            {tramiteSeleccionado.valor && <DatoMedioAmbiente titulo="Valor del servicio">{tramiteSeleccionado.valor}</DatoMedioAmbiente>}
            <DatoMedioAmbiente titulo="¿Está disponible en línea? (Sí/No)">{tramiteSeleccionado.disponible}</DatoMedioAmbiente>
            <DatoMedioAmbiente titulo="Enlace a mayor información (existente)" className="sm:col-span-2 lg:col-span-3">
              <ul className="list-disc space-y-1 pl-4">
                {tramiteSeleccionado.enlacesInformativos.map((enlace) => (
                  <li key={enlace.nombre}>
                    <a href={enlace.href || 'about:blank'} target="_blank" rel="noreferrer" className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2">
                      {enlace.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </DatoMedioAmbiente>
          </div>
        </article>
      ) : (
      <section className="max-w-4xl space-y-3">
        <div className="grid gap-2 sm:grid-cols-2">
          {tramitesMedioAmbiente.map((tramite) => (
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
      </section>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={() => tramiteSeleccionado ? setTramiteSeleccionado(null) : onVolver()}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {tramiteSeleccionado ? 'Volver a trámites de Medio Ambiente y Operaciones Comunales' : 'Volver a unidades municipales'}
        </button>
      </div>
    </div>
  );
}
