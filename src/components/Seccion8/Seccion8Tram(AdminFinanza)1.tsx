import { ChevronRight, FileText } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  onSeleccionar: (tramite: string) => void;
}

const tramites = [
  'Patente Comercial Micro Empresa Familiares',
  'Patente Comercial Micro Empresa Familiares Copropiedad',
  'Patente Profesional',
  'Patentes Industriales',
  'Patente Comercial',
  'Patente Comercial Provisoria',
  'Patente de Instalación de Actividades Circenses',
  'Patente de alcoholes'
];

export default function Seccion8TramAdminFinanza1({ onSeleccionar }: Props) {
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

const enlaceTransparenciaActiva = 'http://transparencia.loprado.cl/';
const enlaceOrganigrama = '';
const enlaceOrdenanzaDerechos = '';
const enlaceOrdenanzaCobroAseo = '';
const enlacePrimeraModificacion = '';
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

const filas = [
  {
    etiqueta: 'Nombre del trámite, servicio o beneficio',
    contenido: 'Patente Comercial Micro Empresa Familiares'
  },
  {
    etiqueta: 'En qué consiste',
    contenido: 'Solicitud de una Patente para realizar una actividad en la casa habitación, la que no requiere zonificación.'
  },
  {
    etiqueta: 'Requisitos',
    contenido: (
      <p>
        Ser persona Natural o Jurídica E.I.R.L., que sea una actividad lícita, que no sea contaminante o molesta, que su capital (activos) no supere las 1.000 U.F., que la actividad se desarrolle en su casa habitación, que sea legítimo ocupante, que no tenga más de 5 trabajadores externos, que cuente con Resolución y/o calificación Sanitaria (si se requiere), que cuente con Resolución SAG (si se requiere).
      </p>
    )
  },
  {
    etiqueta: 'Documentos requeridos',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Fotocopia de la Cédula de Identidad por ambos lados y vigente.</li>
        <li>Título de propiedad o, en su defecto, contrato de arriendo y/o declaración notarial autorizando la actividad y certificando que reside en el lugar.</li>
        <li>Fotocopia del RUT.</li>
        <li>Constitución de la Sociedad.</li>
        <li>Protocolización, extracto, publicación del Diario Oficial.</li>
        <li>Certificado de vigencia, estatutos y modificaciones del CBR (no superior a 60 días).</li>
        <li>Formulario de Iniciación de Actividades (<EnlaceExterno href="">Formulario 4415 del SII</EnlaceExterno>).</li>
        <li>Cambio de domicilio del SII y Certificado de NO deuda de la municipalidad de origen (en caso de haber hecho la iniciación de actividades en otra comuna).</li>
        <li>Autorización del Comité de Administración en el caso de copropiedad.</li>
        <li>Retirar formulario de la Microempresa Familiar en Oficina de Patentes Comerciales, completar y timbrar en SII.</li>
        <li>En el caso de venta de servicios y/o productos alimenticios, según sea el caso, requerirá Resolución o Calificación SEREMI.</li>
      </ol>
    )
  },
  {
    etiqueta: 'A quién está dirigido',
    contenido: 'Sólo para comerciantes productores, prestadores de servicios que trabajen en su casa habitación.'
  },
  {
    etiqueta: 'Trámites a realizar y/o etapas',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Se ingresa la documentación a través de Ventanilla Única.</li>
        <li>Se deriva a Patentes Comerciales para su tramitación; en caso de que la documentación no esté completa, se devuelve a Ventanilla Única para su devolución.</li>
        <li>Se deriva a la Oficina de Fiscalización.</li>
        <li>Aprobada la fiscalización, se decreta la Patente Comercial con el giro o los giros.</li>
        <li>Se asigna número del Folio y los cobros respectivos.</li>
        <li>Se llama al contribuyente por teléfono para notificar y retiro de copia del Decreto y pago de la Patente.</li>
      </ol>
    )
  },
  { etiqueta: '¿Dónde se inicia el trámite?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'Valor en UF' },
  { etiqueta: 'Valor del servicio', contenido: '50% de UTM hasta 1.000 UF' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasPatenteProfesional = [
  {
    etiqueta: 'Nombre del trámite, servicio o beneficio',
    contenido: 'Patente Profesional'
  },
  {
    etiqueta: 'En qué consiste (breve descripción)',
    contenido: 'Petición de una Patente Profesional nueva'
  },
  {
    etiqueta: 'Requisitos',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Título Profesional</li>
        <li>Persona Natural</li>
      </ol>
    )
  },
  {
    etiqueta: 'Documentos requeridos',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Fotocopia cédula de identidad.</li>
        <li>Fotocopia del Título Profesional legalizada ante Notario Público.</li>
        <li>Certificado de Residencia de la Junta de Vecino que le corresponde al domicilio.</li>
      </ol>
    )
  },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  {
    etiqueta: 'Trámites a realizar y/o etapas',
    contenido: (
      <div>
        <p className="mb-1">Inicio:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Se ingresa la documentación Ventanilla Única.</li>
          <li>Se deriva a Patentes Comerciales para su tramitación; en caso que la documentación no esté completa, se devuelve a Ventanilla Única para su devolución.</li>
          <li>Se asigna número del Rol y los cobros respectivos.</li>
          <li>Decreta la Patente.</li>
          <li>Se llama al contribuyente por teléfono para informar retiro de copia del Decreto y cancelación de la Patente en Oficina de Tesorería.</li>
          <li>Retiro del Decreto Alcaldicio.</li>
        </ol>
      </div>
    )
  },
  { etiqueta: '¿Dónde se inicia el trámite?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo (Sí/No)', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'UTM' },
  { etiqueta: 'Valor del servicio', contenido: '50%' },
  { etiqueta: '¿Este trámite está disponible en línea? (Sí/No)', contenido: 'No' }
];

const filasPatentesIndustriales = [
  {
    etiqueta: 'Nombre del trámite, servicio o beneficio',
    contenido: 'Patentes Industriales'
  },
  {
    etiqueta: 'En qué consiste',
    contenido: 'Petición de una Patente de Industrias nueva'
  },
  {
    etiqueta: 'Requisitos',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Contar con Informe Técnico de la Dirección de Obras Municipales aprobado.</li>
        <li>Persona Natural o Jurídica.</li>
        <li>Título de propiedad o, en su defecto, contrato de arriendo de la propiedad.</li>
        <li>Iniciación de Actividades del Servicio de Impuesto Interno, <EnlaceExterno href="">Formulario N° 4415</EnlaceExterno>.</li>
      </ol>
    )
  },
  {
    etiqueta: 'Documentos requeridos',
    contenido: (
      <div className="space-y-3">
        <div>
          <p className="mb-1">Persona Natural:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Fotocopia cédula de identidad.</li>
            <li>Título de propiedad o, en su defecto, contrato de arriendo.</li>
            <li>Certificado Seremi Salud en caso de ventas de alimento perecible y/o no perecible.</li>
            <li>Certificado del Servicio Agrícola y Ganadero, en caso de ser venta de comida para mascotas.</li>
            <li>Declaración simple del capital propio.</li>
            <li>Iniciación de Actividades Formulario 4415 del SII.</li>
            <li>Informe Técnico Aprobado de la Dirección de Obras de la Municipalidad de Lo Prado.</li>
          </ol>
          <p className="mt-2">
            Excepción: de mantener casa matriz en otra comuna, ingresar apertura de sucursal <EnlaceExterno href="">Formulario 3239 del SII</EnlaceExterno> y Certificado de no deuda.
          </p>
        </div>
        <div>
          <p className="mb-1">Persona Jurídica:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Constitución de la Sociedad.</li>
            <li>Protocolización.</li>
            <li>Extracto.</li>
            <li>Publicación del Diario Oficial.</li>
            <li>Fotocopia de RUT de la sociedad.</li>
            <li>Fotocopia de Cédula de Identidad de cada uno de los socios.</li>
            <li>Título de propiedad o, en su defecto, contrato de arriendo.</li>
            <li>Certificado Seremi Salud en caso de ventas de alimento perecible y/o no perecible.</li>
            <li>Certificado del Servicio Agrícola y Ganadero, en caso de ser venta de comida para mascotas.</li>
            <li>Informe Técnico Aprobado de la Dirección de Obras de la Municipalidad de Lo Prado.</li>
          </ol>
        </div>
      </div>
    )
  },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  {
    etiqueta: 'Trámites a realizar y/o etapas',
    contenido: (
      <div>
        <p className="mb-1">Inicio:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Se ingresa la documentación Ventanilla Única.</li>
          <li>Se deriva a Patentes Comerciales para su tramitación; en caso que la documentación no esté completa, se devuelve a Ventanilla Única para su devolución.</li>
          <li>Se deriva a la Oficina de Fiscalización.</li>
          <li>Aprobada la fiscalización se decreta la Patente.</li>
          <li>Se asigna número del Rol y los cobros respectivos.</li>
          <li>Se llama al contribuyente por teléfono para informar retiro de copia del Decreto y cancelación de la Patente en Oficina de Tesorería.</li>
          <li>Retiro del Decreto Alcaldicio.</li>
        </ol>
        <p className="mt-2">
          Nota: Si el capital propio es menor a 200 UTM se cancela patente mínima equivalente al 50% de la UTM; de lo contrario se cancela 0.0025 del capital propio y su cancelación es semestralmente en los meses de enero y julio del año en curso. Si el pago no se realiza en las fechas señaladas, se recargará IPC y multa.
        </p>
      </div>
    )
  },
  { etiqueta: '¿Dónde se inicia el trámite?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo (Sí/No)', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'U.T.M. o pesos' },
  { etiqueta: 'Valor del servicio', contenido: '0.25% del capital propio, con patente mínima de 50% de UTM para capital propio menor a 200 UTM' },
  { etiqueta: '¿Este trámite está disponible en línea? (Sí/No)', contenido: 'No' }
];

const filasPatenteComercial = [
  {
    etiqueta: 'Nombre del trámite, servicio o beneficio',
    contenido: 'Patente Comercial'
  },
  {
    etiqueta: 'En qué consiste',
    contenido: 'Solicitud de Patente Comercial'
  },
  {
    etiqueta: 'Requisitos',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Contar con Informe Técnico de la Dirección de Obras Municipales aprobado.</li>
        <li>Persona Natural o Jurídica.</li>
        <li>Título de propiedad o, en su defecto, contrato de arriendo de la propiedad.</li>
        <li>Iniciación de Actividades del Servicio de Impuestos Internos, <EnlaceExterno href="">Formulario 4415</EnlaceExterno>.</li>
      </ol>
    )
  },
  {
    etiqueta: 'Documentos requeridos',
    contenido: (
      <div className="space-y-3">
        <div>
          <p className="mb-1">Persona Natural:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Fotocopia cédula de identidad.</li>
            <li>Título de propiedad o, en su defecto, contrato de arriendo.</li>
            <li>Certificado Seremi Salud en caso de venta de alimentos perecibles y/o no perecibles.</li>
            <li>Certificado del Servicio Agrícola y Ganadero, en caso de ser venta de comida para mascotas.</li>
            <li>Declaración simple del capital propio.</li>
            <li>Iniciación de Actividades Formulario 4415 del SII.</li>
            <li>Informe Técnico Aprobado de la Dirección de Obras de la Municipalidad de Lo Prado.</li>
          </ol>
          <p className="mt-2">
            Excepción: de mantener casa matriz en otra comuna, ingresar apertura de sucursal <EnlaceExterno href="">Formulario 3239</EnlaceExterno> del SII y Certificado de no deuda.
          </p>
        </div>
        <div>
          <p className="mb-1">Persona Jurídica:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Constitución de la Sociedad.</li>
            <li>Protocolización.</li>
            <li>Extracto.</li>
            <li>Publicación en el Diario Oficial.</li>
            <li>Fotocopia de RUT de la sociedad.</li>
            <li>Fotocopia de Cédula de Identidad de cada uno de los socios.</li>
            <li>Título de propiedad o, en su defecto, contrato de arriendo.</li>
            <li>Certificado Seremi Salud en caso de venta de alimentos perecibles y/o no perecibles.</li>
            <li>Certificado del Servicio Agrícola y Ganadero, en caso de ser venta de comida para mascotas.</li>
            <li>Informe Técnico Aprobado de la Dirección de Obras de la Municipalidad de Lo Prado.</li>
          </ol>
        </div>
      </div>
    )
  },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  {
    etiqueta: 'Trámites a realizar y/o etapas',
    contenido: (
      <div>
        <p className="mb-1">Inicio:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Se ingresa la documentación por Ventanilla Única.</li>
          <li>Se deriva a Patentes Comerciales para su tramitación; en caso que la documentación no esté completa, se devuelve a Ventanilla Única.</li>
          <li>Se deriva a la Oficina de Fiscalización.</li>
          <li>Aprobada la fiscalización se decreta la Patente.</li>
          <li>Se asigna número del Rol y los cobros respectivos.</li>
          <li>Se llama al contribuyente por teléfono para informar retiro de copia del Decreto y pago de la Patente en Oficina de Tesorería.</li>
          <li>Retiro del Decreto Alcaldicio.</li>
        </ol>
        <p className="mt-2">
          Nota: Si el capital propio es menor a 200 UTM se paga patente mínima equivalente al 50% de la UTM; de lo contrario se paga 0.0025 del capital propio. El pago es semestralmente en enero y julio del año en curso, no se parcializa y se paga el total de la patente independiente del mes en que la obtenga. Si no se realiza el pago en los plazos correspondientes, se recarga IPC y multa.
        </p>
      </div>
    )
  },
  { etiqueta: '¿Dónde se inicia el trámite?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'U.T.M. o pesos' },
  {
    etiqueta: 'Valor del servicio',
    contenido: '0.25% del capital propio, con patente mínima de 50% de UTM para capital propio menor a 200 UTM'
  },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasPatenteComercialProvisoria = [
  {
    etiqueta: 'Nombre del trámite, servicio o beneficio',
    contenido: 'Patente Comercial Provisoria'
  },
  {
    etiqueta: 'En qué consiste',
    contenido: 'Solicitud de Patente Comercial Provisoria'
  },
  {
    etiqueta: 'Requisitos',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Contar con Informe Técnico de la Dirección de Obras Municipales con observaciones y próximamente a regularizar dicha observación.</li>
        <li>Persona Natural o Jurídica.</li>
        <li>Título de propiedad o, en su defecto, contrato de arriendo de la propiedad.</li>
        <li>Iniciación de Actividades del Servicio de Impuestos Internos, <EnlaceExterno href="">Formulario 4415</EnlaceExterno>.</li>
      </ol>
    )
  },
  {
    etiqueta: 'Documentos requeridos',
    contenido: (
      <div className="space-y-3">
        <p>Una vez cumplidos los requisitos adjuntar:</p>
        <div>
          <p className="mb-1">Persona Natural:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Fotocopia cédula de identidad.</li>
            <li>Título de propiedad o, en su defecto, contrato de arriendo.</li>
            <li>Certificado Seremi Salud en caso de venta de alimentos perecibles y/o no perecibles.</li>
            <li>Certificado del Servicio Agrícola y Ganadero, en caso de ser venta de comida para mascotas.</li>
            <li>Declaración simple del capital propio.</li>
            <li>Iniciación de Actividades Formulario 4415 del SII.</li>
            <li>Informe Técnico de la Dirección de Obras de la Municipalidad de Lo Prado.</li>
          </ol>
          <p className="mt-2">
            Excepción: de mantener casa matriz en otra comuna, ingresar apertura de sucursal <EnlaceExterno href="">Formulario 3239</EnlaceExterno> del SII y Certificado de no deuda.
          </p>
        </div>
        <div>
          <p className="mb-1">Persona Jurídica:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Constitución de la Sociedad.</li>
            <li>Protocolización.</li>
            <li>Extracto.</li>
            <li>Publicación en el Diario Oficial.</li>
            <li>Fotocopia de RUT de la sociedad.</li>
            <li>Fotocopia de Cédula de Identidad de cada uno de los socios.</li>
            <li>Título de propiedad o, en su defecto, contrato de arriendo.</li>
            <li>Certificado Seremi Salud en caso de venta de alimentos perecibles y/o no perecibles.</li>
            <li>Certificado del Servicio Agrícola y Ganadero, en caso de ser venta de comida para mascotas.</li>
            <li>Informe Técnico Aprobado de la Dirección de Obras de la Municipalidad de Lo Prado.</li>
          </ol>
        </div>
      </div>
    )
  },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  {
    etiqueta: 'Trámites a realizar y/o etapas',
    contenido: (
      <div>
        <p className="mb-1">Inicio:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Se ingresa la documentación por Ventanilla Única.</li>
          <li>Se deriva a Patentes Comerciales para su tramitación; en caso que la documentación no esté completa, se devuelve a Ventanilla Única.</li>
          <li>Se deriva a la Oficina de Fiscalización.</li>
          <li>Aprobada la fiscalización se decreta la Patente.</li>
          <li>Se asigna número del Rol y los cobros respectivos.</li>
          <li>Se llama al contribuyente por teléfono para informar retiro de copia del Decreto y pago de la Patente en Oficina de Tesorería.</li>
          <li>Retiro del Decreto Alcaldicio.</li>
        </ol>
        <p className="mt-2">
          Nota: Si el capital propio es menor a 200 UTM se paga patente mínima equivalente al 50% de la UTM; de lo contrario se paga 0.0025 del capital propio. El pago es semestralmente en enero y julio del año en curso, no se parcializa y se paga el total de la patente independiente del mes en que la obtenga. Si no se realiza el pago en los plazos correspondientes, se recarga IPC y multa.
        </p>
      </div>
    )
  },
  { etiqueta: '¿Dónde se inicia el trámite?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'U.T.M. o pesos' },
  {
    etiqueta: 'Valor del servicio',
    contenido: '0.25% del capital propio, con patente mínima de 50% de UTM para capital propio menor a 200 UTM'
  },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasPatenteActividadesCircenses = [
  {
    etiqueta: 'Nombre del trámite, servicio o beneficio',
    contenido: 'Patente de Instalación de Actividades Circenses'
  },
  {
    etiqueta: 'En qué consiste',
    contenido: 'Este se destina a los giros relacionados a la actividad Circenses y es por temporada.'
  },
  {
    etiqueta: 'Requisitos',
    contenido: 'Persona Natural o Jurídica.'
  },
  {
    etiqueta: 'Documentos requeridos',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Contar con Proyecto de Seguridad Vial aprobado por la Dirección de Tránsito y Transporte Público.</li>
        <li>Contar con Informe Técnico de la Dirección de Obras Municipales aprobado.</li>
      </ol>
    )
  },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  {
    etiqueta: 'Trámites a realizar y/o etapas',
    contenido: (
      <div>
        <p className="mb-1">Inicio:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Se ingresa la documentación por Ventanilla Única si es original de la patente; de lo contrario, carta en Oficina de Partes e Informaciones.</li>
          <li>Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa, se devuelve a Ventanilla Única.</li>
          <li>Se deriva a la Oficina de Fiscalización para verificar la actividad comercial.</li>
          <li>De ser positivo el informe, se confecciona decreto que elimina y anula la patente.</li>
          <li>Se notifica al contribuyente por teléfono para el retiro del decreto.</li>
          <li>Retiro del Decreto.</li>
        </ol>
      </div>
    )
  },
  { etiqueta: '¿Dónde se inicia el trámite?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: '' },
  { etiqueta: 'Valor del servicio', contenido: '' },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

const filasPatenteAlcoholes = [
  {
    etiqueta: 'Nombre del trámite, servicio o beneficio',
    contenido: 'Patente de alcoholes'
  },
  {
    etiqueta: 'En qué consiste',
    contenido: (
      <p>
        Otorgamiento de nuevas Patentes de Alcoholes clasificadas en letra A (Cabarets o Peñas Folclóricas), y C (Salas de Baile y Discotecas), de las mencionadas en el artículo 3° de la Ley N° 19.925 que solo podrán ser otorgadas en las siguientes zonas de la comuna: E Avenida San Pablo entre calle Gabriela Mistral y calle María Rozas Velásquez (ex Las Rejas Norte). Sobre las Patentes clasificadas en las letras A) Depósito de Bebidas Alcohólicas, E) Cantinas, Bares, Pub, Tabernas, F) Establecimientos de Expendio de cerveza o sidra y H) Minimercado de comestibles y abarrotes, y de acuerdo a lo establecido en el artículo N° 7 inciso segundo de la Ley N° 19.925 de Expendio de Bebidas Alcohólicas, no cuenta con dichas patentes para su otorgamiento.
      </p>
    )
  },
  {
    etiqueta: 'Requisitos',
    contenido: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Contar con Informe Técnico de la Dirección de Obras Municipales aprobado para obtener patente de alcoholes.</li>
        <li>Persona Natural o Jurídica.</li>
        <li>No mantener antecedentes penales.</li>
        <li>No ser funcionario público o de las Fuerzas Armadas.</li>
        <li>Iniciación de Actividades del Servicio de Impuesto Interno, <EnlaceExterno href="">Formulario 4415</EnlaceExterno>.</li>
      </ol>
    )
  },
  {
    etiqueta: 'Documentos requeridos',
    contenido: (
      <div className="space-y-3">
        <div>
          <p className="mb-1">Persona Natural:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Fotocopia cédula de identidad.</li>
            <li>Certificado de Residencia.</li>
            <li>Certificado de antecedentes para trámites especiales.</li>
            <li>Certificado Seremi Salud.</li>
            <li>Certificado del Servicio Agrícola y Ganadero.</li>
            <li>Contrato de arriendo.</li>
            <li>Opinión Junta de Vecinos.</li>
            <li>Declaración Jurada del capital.</li>
            <li>
              Iniciación de Actividades <EnlaceExterno href="">Formulario 4415</EnlaceExterno> del SII. Excepción: de mantener casa matriz en otra comuna, ingresar apertura de sucursal <EnlaceExterno href="">Formulario 3239</EnlaceExterno> del SII y Certificado de no deuda.
            </li>
          </ol>
        </div>
        <div>
          <p className="mb-1">Persona Jurídica:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Constitución de la Sociedad.</li>
            <li>Protocolización.</li>
            <li>Extracto.</li>
            <li>Publicación.</li>
            <li>Certificado de antecedentes para trámites especiales de cada uno de los socios.</li>
            <li>Certificado de Residencia de cada uno de los socios.</li>
            <li>Declaración Jurada Notarial art. 4 de la Ley 19.925.</li>
            <li>Fotocopia de Cédula de Identidad de cada uno de los socios.</li>
          </ol>
        </div>
      </div>
    )
  },
  { etiqueta: 'A quién está dirigido', contenido: 'Patentes Comerciales' },
  {
    etiqueta: 'Trámites a realizar y/o etapas',
    contenido: (
      <div>
        <p className="mb-1">Inicio:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Ventanilla Única.</li>
          <li>Se solicita Inspección de Rentas Municipales.</li>
          <li>Inspección de Carabineros de Chile (plazo 30 días).</li>
          <li>Revisión de la Dirección de Asesoría Jurídica.</li>
          <li>Sr. Alcalde remite para Tabla del Honorable CONCEJO.</li>
          <li>Aprobación y/o rechazo del Honorable CONCEJO Municipal.</li>
          <li>Envío de Acta Sesión del CONCEJO Municipal donde se aprueba o rechaza.</li>
          <li>En caso del rechazo, se notifica a través de Oficio al contribuyente. En caso de aprobar se dicta Decreto Alcaldicio.</li>
          <li>Se asigna número del Rol y los cobros respectivos.</li>
          <li>Se llama al contribuyente por teléfono para informar retiro de copia del Decreto, retiro de la Ley de Alcoholes (5% UTM) y pago de la Patente y Ley de Alcoholes en Oficina de Tesorería.</li>
          <li>Se notifica y se hace entrega del Decreto Alcaldicio.</li>
        </ol>
      </div>
    )
  },
  { etiqueta: '¿Dónde se inicia el trámite?', contenido: 'Ventanilla Única' },
  { etiqueta: 'Tiene costo', contenido: 'Sí' },
  { etiqueta: 'Unidad monetaria', contenido: 'U.T.M.' },
  {
    etiqueta: 'Valor del servicio',
    contenido: (
      <div>
        <p className="mb-1">Según clasificación establecida en la Ley N° 19.925 de Expendio de Alcoholes:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Hoteles: 0.7 UTM; casa de pensiones o residenciales: 0.6 UTM.</li>
          <li>Restaurantes diurnos o nocturnos: 1.2 UTM.</li>
          <li>Cabarets: 3.5 UTM; peñas folclóricas: 3 UTM.</li>
          <li>Hoteles, hosterías y moteles: 3 UTM.</li>
          <li>Restaurantes de turismo: hoteles de turismo 5 UTM, hosterías de turismo 3 UTM y moteles de turismo 2 UTM.</li>
          <li>Bodegas elaboradoras o distribuidoras de vinos, licores o cervezas: 3 UTM.</li>
          <li>Casas importadoras de vinos o licores: 0.5 UTM.</li>
          <li>Salones de baile o discotecas: 2 UTM.</li>
          <li>Supermercados de comestibles: 3 UTM.</li>
        </ul>
      </div>
    )
  },
  { etiqueta: '¿Este trámite está disponible en línea?', contenido: 'No' }
];

export function FichaPatenteMicroempresaFamiliar({
  nombreTramite,
  filasFicha = filas,
  incluirEnlaceInspeccion = false
}: {
  nombreTramite: string;
  filasFicha?: typeof filas;
  incluirEnlaceInspeccion?: boolean;
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
        <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
        <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Dirección de Administración y Finanzas</h3>
      </div>
      <dl className="divide-y divide-slate-100">
        {filasFicha.map(({ etiqueta, contenido }) => (
          <div key={etiqueta} className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
            <dt className="self-center text-xs font-semibold text-slate-500">{etiqueta}</dt>
            <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
              {etiqueta === 'Nombre del trámite, servicio o beneficio' ? nombreTramite : contenido}
            </dd>
          </div>
        ))}
        <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
          <dt className="self-center text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
          <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
            <ul className="list-disc space-y-1 pl-5">
              {incluirEnlaceInspeccion && (
                <li><EnlaceExterno href="">Dirección Obras Municipales, Inspección de Patente</EnlaceExterno></li>
              )}
              <li><EnlaceExterno href={enlaceTransparenciaActiva}>Transparencia Activa</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaceOrganigrama}>Organigrama Municipal</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaceOrdenanzaDerechos}>Ordenanza sobre Derechos Municipales</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaceOrdenanzaCobroAseo}>Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura</EnlaceExterno></li>
              <li><EnlaceExterno href={enlacePrimeraModificacion}>Primera Modificación de la Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaceNuevoDerechoMunicipal}>Nuevo Derecho Municipal sobre Cobro de Aseo a Ferias Libres y Persas</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaceContacto}>Contacto para consultas</EnlaceExterno></li>
              <li><EnlaceExterno href={enlaceSii}>Página web Servicios de Impuesto Interno SII</EnlaceExterno></li>
            </ul>
          </dd>
        </div>
      </dl>
    </section>
  );
}

export function FichaPatenteProfesional({ nombreTramite }: { nombreTramite: string }) {
  return (
    <FichaPatenteMicroempresaFamiliar
      nombreTramite={nombreTramite}
      filasFicha={filasPatenteProfesional}
    />
  );
}

export function FichaPatentesIndustriales({ nombreTramite }: { nombreTramite: string }) {
  return (
    <FichaPatenteMicroempresaFamiliar
      nombreTramite={nombreTramite}
      filasFicha={filasPatentesIndustriales}
      incluirEnlaceInspeccion
    />
  );
}

export function FichaPatenteComercial({ nombreTramite }: { nombreTramite: string }) {
  return (
    <FichaPatenteMicroempresaFamiliar
      nombreTramite={nombreTramite}
      filasFicha={filasPatenteComercial}
      incluirEnlaceInspeccion
    />
  );
}

export function FichaPatenteComercialProvisoria({ nombreTramite }: { nombreTramite: string }) {
  return (
    <FichaPatenteMicroempresaFamiliar
      nombreTramite={nombreTramite}
      filasFicha={filasPatenteComercialProvisoria}
      incluirEnlaceInspeccion
    />
  );
}

export function FichaPatenteActividadesCircenses({ nombreTramite }: { nombreTramite: string }) {
  return (
    <FichaPatenteMicroempresaFamiliar
      nombreTramite={nombreTramite}
      filasFicha={filasPatenteActividadesCircenses}
      incluirEnlaceInspeccion
    />
  );
}

export function FichaPatenteAlcoholes({ nombreTramite }: { nombreTramite: string }) {
  return (
    <FichaPatenteMicroempresaFamiliar
      nombreTramite={nombreTramite}
      filasFicha={filasPatenteAlcoholes}
      incluirEnlaceInspeccion
    />
  );
}
