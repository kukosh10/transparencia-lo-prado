import { useState } from 'react';
import { BadgeCheck, ChevronRight, ExternalLink, FileDown, FileText, Filter, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  onSeleccionar: (tramite: string) => void;
}

const tramites = [
  'Trámites Emprendimientos',
  'Trámites para Permisos de Uso Persa Neptuno'
];

export default function Seccion8TramAdminFinanza5({ onSeleccionar }: Props) {
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

const tipologias = [
  'Dirección Secretaría Municipal',
  'Dirección Administración y Finanzas - Cobranza',
  'Dirección Administración y Finanzas - Rentas - Patentes',
  'Dirección Administración y Finanzas - Rentas - Permisos',
  'Dirección Administración y Finanzas - Rentas - Emprendimiento',
  'Dirección Administración y Finanzas - Rentas - Persa',
  'Dirección Obras Municipal',
  'Dirección Tránsito y Transporte Público - Licencia de Conducir',
  'Dirección Tránsito y Transporte Público - Permiso de Circulación',
  'Dirección Tránsito y Transporte Público - Técnico',
  'Dirección de Desarrollo Comunitario - Desarrollo Social',
  'Dirección de Desarrollo Comunitario - Promoción Comunitaria',
  'Dirección de Desarrollo Comunitario - Vivienda (PSAT)',
  'Dirección Medio Ambiente y Operaciones - Medio Ambiente',
  'Dirección Medio Ambiente y Operaciones - Aseo',
  'Dirección Medio Ambiente y Operaciones - Áreas Verdes',
  'Dirección Medio Ambiente y Operaciones - Higiene Ambiental'
];

type RegistroObras = {
  tramite: string;
  descripcion: string;
  requisitos: string;
  documentos: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad: string;
  valor: string;
};

const etapasCertificadoObras =
  '1. Ingreso de Solicitud en Ventanilla Única. 2. Recepción de Solicitud en Secretaría DOM. 3. Visita de Inspector DOM al terreno solicitado (si corresponde). 4. Tipo de documento por Departamento de Inspección. 5. Revisión y firma del Director de Obras. 6. Despacho y descarga documento al Depto. de Atención de Público para su entrega.';
const documentosCertificadoObras =
  'Fotocopia de la escritura (no es obligatoria, si maneja los datos de la propiedad), Solicitud de Certificado en Ventanilla Única.';
const requisitosCertificadoObras =
  'Persona Natural o Jurídica. En caso de no contar con Escritura llenar formulario en Ventanilla Única.';

const registrosObras: RegistroObras[] = [
  {
    tramite: 'Certificado de Número',
    descripcion: 'Indica el Número Municipal asignado al predio, de acuerdo al plano de loteo o copropiedad.',
    requisitos: requisitosCertificadoObras,
    documentos: documentosCertificadoObras,
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado Información Previa',
    descripcion: 'Identifica zona de uso de suelo e informa conjunto de normativas relativas al terreno.',
    requisitos: requisitosCertificadoObras,
    documentos: documentosCertificadoObras,
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado de No Expropiación',
    descripcion: 'Informa si la dirección solicitada cuenta con expropiación oficial o si se encuentra fuera de línea.',
    requisitos: requisitosCertificadoObras,
    documentos: documentosCertificadoObras,
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado de Deslindes',
    descripcion: 'Informa medidas de terreno indicadas en plano de loteo de población.',
    requisitos: requisitosCertificadoObras,
    documentos: documentosCertificadoObras,
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado de Deslindes de Terreno y Loteo',
    descripcion: 'Informa medidas de terreno indicadas en plano de loteo de población y medidas reales tomadas en terreno.',
    requisitos: requisitosCertificadoObras,
    documentos: documentosCertificadoObras,
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado DOM Localización',
    descripcion: 'Informa mts. de distanciamiento de lugares públicos.',
    requisitos: requisitosCertificadoObras,
    documentos: documentosCertificadoObras,
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado DOM Zona Urbana',
    descripcion: 'Indica zona de uso de suelo donde se ubica la propiedad.',
    requisitos: requisitosCertificadoObras,
    documentos: documentosCertificadoObras,
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado DOM Permiso y Recepción',
    descripcion: 'Indica permisos y recepciones con las edificaciones.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: 'Fotocopia de la escritura (no es obligatoria, si maneja los datos de la propiedad), Solicitud de Certificado en Ventanilla Única.',
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado DOM Urbanización',
    descripcion: 'Indica estado de veredas existentes frente a la propiedad, estado de instalaciones eléctricas, sanitarias u otras conectadas a la red pública, que se encuentran dentro del predio.',
    requisitos: requisitosCertificadoObras,
    documentos: 'Boletas de Agua, Luz, Gas, Fotocopia certificado simple de Avalúo Fiscal SII.',
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado DOM DFL 2.599',
    descripcion: 'Informa si la propiedad está o cumple con los requisitos para ser acogida al DFL 2.599.',
    requisitos: requisitosCertificadoObras,
    documentos: documentosCertificadoObras,
    etapas: `${etapasCertificadoObras} Si la dirección solicitada corresponde a un departamento, no requiere visita a terreno.`,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Certificado DOM Vivienda Social',
    descripcion: 'Informa si la propiedad, terreno y edificación tiene un valor mayor o menor a 400 U.F. o 520 U.F. Para condominio de vivienda social.',
    requisitos: 'Persona Natural o Jurídica. En caso de no contar con Escritura llenar formulario en Ventanilla Única.',
    documentos: documentosCertificadoObras,
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%'
  },
  {
    tramite: 'Inspección de Patente',
    descripcion: 'Indica antecedentes referente a un local comercial determinado; estado de construcciones, distribución de los recintos, medidas de seguridad, permiso, recepción, etc.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: '',
    etapas: etapasCertificadoObras,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '20%'
  },
  {
    tramite: 'Solicitud de Inspección',
    descripcion: 'Informe Técnico de terreno dependiendo de la necesidad del contribuyente.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: '',
    etapas: `${etapasCertificadoObras} Si la situación denunciada corresponde a un departamento, no requiere visita a terreno.`,
    lugar: 'Ventanilla Única, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '20%'
  },
  {
    tramite: 'Zonificación',
    descripcion: 'Indica zona urbana en que se encuentra emplazado el predio.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: '',
    etapas: '1. Ingreso Solicitud en Departamento de Atención de Público DOM. 2. Recepción y realización de Solicitud por el Arquitecto Jefe de Edificación. 3. Revisión y firma del Director de Obras. 4. Despacho y descarga documento al Depto. Atención de Público para su entrega.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '5%'
  },
  {
    tramite: 'Certificación',
    descripcion: 'Fotocopias legalizadas firmadas por el Director de Obras Municipal.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: '',
    etapas: '1. Ingreso Solicitud. 2. Cobro. 3. Certificación. 4. Revisión y firma Director. 5. Entrega certificación.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '5%'
  },
  {
    tramite: 'Copias de Planos',
    descripcion: 'Copia planos de construcciones y loteo.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: '',
    etapas: '1. Ingreso Solicitud. 2. Cobro. 3. Solicitud de copia de plano a Dimacofi. 4. Cálculo de cobro de plano. 5. Cobro. 6. Entrega de copia de plano.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM al M2',
    valor: '20%'
  },
  {
    tramite: 'Fotocopias de documentos',
    descripcion: '',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: '',
    etapas: '1. Ingreso Solicitud. 2. Se procede a sacar fotocopia del documento en Depto. de Atención de Público. 3. Entrega.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '0,5%'
  },
  {
    tramite: 'Ingreso de Expediente para permiso',
    descripcion: 'Solicitud de permiso para edificar y recepción final.',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: 'Antecedentes en Formulario MINVU.',
    etapas: '1. Ingreso Expediente. 2. Pasa a Arquitecto Revisor quien realiza cálculo de derechos del 10%. 3. Cancelación de los derechos si está aprobado (si está rechazado se devuelve al propietario). 4. Se da número de expediente y se informa de los 30 días para la revisión.',
    lugar: 'Departamento Atención de Público, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'Sí',
    unidad: '10% Presupuesto',
    valor: '10%'
  },
  {
    tramite: 'Audiencias Director de Obras',
    descripcion: '',
    requisitos: 'Persona Natural o Jurídica.',
    documentos: '',
    etapas: '1. Solicitud en secretaría de la DOM o teléfono de secretaría 23887546.',
    lugar: 'Dirección de Obras Municipal, Avda. San Pablo 5959, 1er. Piso.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica'
  }
];

type RegistroLicenciaConducir = {
  tramite: string;
  descripcion: string;
  requisitos: string;
  documentos: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad: string;
  valor: string;
  disponible: string;
  enlaceTramite: string;
  enlacesInformacion?: { etiqueta: string; href: string }[];
};

const lugarLicenciaConducir = 'Ventanilla Única, San Pablo 5959, primer piso.';
const documentosLicenciaConducir = 'Cédula de Identidad y licencia de conducir por vencer.';
const etapasLicenciaConducir =
  'Inicio: 1. Se solicita la hora en Ventanilla Única. 2. Se cancela licencia, foto y certificado de antecedentes en Tesorería (valor foto $4.274 y Certificado Antecedentes $1.050, considerados al momento de cancelar en tesorería; valor de la licencia reajustado mensualmente). 3. Se entrega el comprobante de pago en el Depto. de Licencia de Conducir. Unidad emite certificado de antecedentes. Evaluación de Idoneidad Moral a cargo del Director Vial el día y hora para realizar los exámenes: fotografía licencia, Psicométrico, Médico, teórico y práctico. 4. Se entrega al día siguiente hábil de la emisión.';
const etapasControlLicenciaConducir =
  '1. Se solicita la hora en Ventanilla Única. 2. Se cancela licencia, foto y certificado de antecedentes en Tesorería (valor foto $4.274 y Certificado Antecedentes $1.050, considerados al momento de cancelar en tesorería; valor reajustado mensualmente). 3. Se entrega el comprobante de pago en el Depto. de Licencia de Conducir. Unidad emite certificado de antecedentes. Evaluación de Idoneidad Moral a cargo del Director Vial el día y hora para realizar los exámenes: fotografía licencia, Psicométrico y Médico; aprobados los exámenes se emitirá la Licencia de Conducir. 4. Se entrega al día siguiente hábil de la emisión.';
const etapasAtencionDirectaLicencia =
  'Inicio: 1. Directamente se ingresa en el mesón de Licencia de Conducir. 2. Se debe entregar documentos requeridos, se cancela en tesorería (valor foto $4.274 y Certificado Antecedentes $1.050, considerados al momento de cancelar en tesorería; valor de la licencia reajustado mensualmente). 3. Se entrega el comprobante de pago en el Depto. de Licencia de Conducir. Unidad emite Certificado Antecedente y la respectiva Licencia de Conducir (horario de atención desde las 08:45 hasta las 13:30 sin hora previa).';
const etapasLicenciaMenor =
  'Inicio: 1. Se solicita la hora en Ventanilla Única. 2. Se cancela licencia, foto y certificado de antecedentes en Tesorería (valor foto $4.274 y Certificado Antecedentes $1.050, considerados al momento de cancelar en tesorería; valor de la licencia reajustado cada 6 meses). 3. Se entrega el comprobante de pago en el Depto. de Licencia de Conducir. Unidad emite certificado de antecedentes. Evaluación de Idoneidad Moral a cargo del Director Vial el día y hora para realizar los exámenes: fotografía licencia, Psicométrico, Médico, teórico y práctico; aprobados los exámenes se emitirá la Licencia de Conducir. 4. Se entrega al día siguiente hábil de la emisión.';
const registrosLicenciaConducir: RegistroLicenciaConducir[] = [
  {
    tramite: 'Primera Licencia de Conducir B y C',
    descripcion: 'Primera Licencia de Conducir.',
    requisitos: 'Tener 18 años cumplidos, residencia en Lo Prado y 8° básico aprobado.',
    documentos: 'Cédula de Identidad y certificado de estudios en original o fotocopia legalizada.',
    etapas: etapasLicenciaConducir,
    lugar: 'Ventanilla Única, San Pablo 5959, primer piso.',
    costo: 'Sí',
    unidad: 'Peso',
    valor: '$19.873',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Control clase B, C, D y F',
    descripcion: 'Control clase B, C, D y F.',
    requisitos: 'Licencia de conducir por vencer.',
    documentos: documentosLicenciaConducir,
    etapas: etapasControlLicenciaConducir,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '50%',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Primera Licencia clase A',
    descripcion: 'Primera Licencia clase A.',
    requisitos: '1. Licencia de conducir clase B, por un período de dos años de antigüedad. 2. Residencia en Lo Prado. 3. Aprobación del curso para la clase profesional, vehículo de acuerdo a la clase que postula.',
    documentos: '1. Cédula de Identidad. 2. Licencia de conducir por vencer. 3. Certificado de escuela profesional de acuerdo a la clase que postule.',
    etapas: etapasLicenciaConducir,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '50%',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Homologación clase A-1 a A-2 Ley 18.291',
    descripcion: 'Homologación clase A-1 a A-2 Ley 18.291.',
    requisitos: 'Licencia de conducir clase B, por un período de dos años de antigüedad, residencia en Lo Prado, aprobación del curso para la clase profesional.',
    documentos: 'Cédula de Identidad y certificado de escuela profesional de acuerdo a la clase que postule.',
    etapas: etapasLicenciaConducir,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '50%',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Control Profesional clase A-1, A-2, A-3, A-4, A-5',
    descripcion: 'Control Profesional clase A-1, A-2, A-3, A-4, A-5.',
    requisitos: 'Licencia de conducir por vencer.',
    documentos: documentosLicenciaConducir,
    etapas: etapasControlLicenciaConducir,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '40%',
    disponible: 'No',
    enlaceTramite: 'No aplica'
  },
  {
    tramite: 'Control Profesional clase A-1, A-2 Ley N° 18.290',
    descripcion: 'Control Profesional clase A-1, A-2 Ley N° 18.290.',
    requisitos: 'Licencia de conducir por vencer.',
    documentos: documentosLicenciaConducir,
    etapas: etapasControlLicenciaConducir,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '40%',
    disponible: 'No',
    enlaceTramite: 'No aplica'
  },
  {
    tramite: 'Primera Licencia de Conducir clase D',
    descripcion: 'Primera Licencia de Conducir clase D.',
    requisitos: 'Ser mayor de 18 años. Saber leer y escribir y maquinaria dentro de la comuna para realizar examen práctico.',
    documentos: 'Cédula de identidad.',
    etapas: etapasLicenciaConducir,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'Peso',
    valor: '$19.873',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Licencia de Conducir E',
    descripcion: 'Licencia de Conducir E.',
    requisitos: 'Ser mayor de 18 años. Saber leer y escribir; vehículo para realizar práctico.',
    documentos: 'Cédula de identidad.',
    etapas: etapasLicenciaConducir,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'Peso',
    valor: '$19.873',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Control Clase E',
    descripcion: 'Control Clase E.',
    requisitos: 'Licencia de conducir por vencer.',
    documentos: 'Cédula de identidad y licencia de conducir por vencer.',
    etapas: etapasControlLicenciaConducir,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%',
    disponible: 'No',
    enlaceTramite: 'No aplica'
  },
  {
    tramite: 'Licencia de Conducir F',
    descripcion: 'Licencia de Conducir F.',
    requisitos: 'Cédula de identidad.',
    documentos: 'Cédula de identidad y certificado institucional.',
    etapas: etapasLicenciaConducir,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'Peso',
    valor: '$19.873',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Licencia Conducir Clase B Menos de 17 años',
    descripcion: 'Licencia Conducir Clase B Menos de 17 años.',
    requisitos: 'Haber cumplido 17 años. Cédula de identidad del menor, cédula de identidad de los padres o representante legal, autorización de ambos padres o representante legal ante notario. Contar con escuela de conductores y 6 años de licencia Clase B. Certificado de nacimiento del menor y residencia en Lo Prado.',
    documentos: 'Cédula de identidad, certificado de estudio mínimo 8° básico aprobado, original o fotocopia legalizada ante notario. Certificado curso aprobado en la escuela de conductores autorizada para conducir ante notario de ambos padres o representante legal acreditado. Fotocopia cédula de identidad de quien autoriza al menor. Fotocopia de Licencia de Conducir del acompañante (mínimo 5 años de antigüedad de Clase B). Certificado de nacimiento del menor. Residencia en Lo Prado.',
    etapas: etapasLicenciaMenor,
    lugar: lugarLicenciaConducir,
    costo: 'Sí',
    unidad: 'Peso',
    valor: '$19.873',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Duplicado de Licencia de Conducir',
    descripcion: 'Duplicado de Licencia de Conducir.',
    requisitos: 'Cédula de identidad o comprobante de retiro de Cédula de Identidad; retiro de Cédula de Identidad.',
    documentos: 'Cédula de identidad o comprobante de retiro de Cédula de Identidad, comprobante de bloqueo en el Registro Civil de la Licencia de Conducir.',
    etapas: etapasAtencionDirectaLicencia,
    lugar: 'Mesón de Atención de Licencia de Conducir, San Pablo 5959, primer piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '30%',
    disponible: 'No',
    enlaceTramite: 'No aplica'
  },
  {
    tramite: 'Certificado antigüedad, no Trámite, Denegación',
    descripcion: 'Certificado antigüedad, no Trámite, Denegación.',
    requisitos: 'Cédula de identidad y licencia de conducir.',
    documentos: 'Cédula de identidad y licencia de conducir.',
    etapas: etapasAtencionDirectaLicencia,
    lugar: 'Mesón de Atención de Licencia de Conducir, San Pablo 5959, primer piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '15%',
    disponible: 'No',
    enlaceTramite: 'No aplica'
  },
  {
    tramite: 'Cambio Domicilio',
    descripcion: 'Cambio el domicilio en la Licencia de Conducir.',
    requisitos: 'Tener Licencia de Conducir.',
    documentos: '1. Cédula de Identidad. 2. Licencia de Conducir.',
    etapas: 'Inicio: 1. Directamente se ingresa en el mesón de Licencia de Conducir. 2. Se debe entregar documentos requeridos, se cancela en tesorería (valor foto $4.274, los cuales se consideran al momento de cancelar en tesorería, valor de la licencia reajustado mensualmente; si el conductor no ha tenido Licencia de Conducir en este municipio debe cancelar Certificado Antecedentes $1.050). 3. Se entrega el comprobante de pago en el Depto. de Licencia de Conducir. Unidad emite Certificado Antecedente y la respectiva Licencia de Conducir (horario de atención desde las 08:45 hasta las 13:30 sin hora previa).',
    lugar: 'Mesón de Atención de Licencia de Conducir, San Pablo 5959, primer piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '15%',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    enlacesInformacion: [
      { etiqueta: 'Transparencia Activa', href: 'http://transparencia.loprado.cl/' },
      { etiqueta: 'Aprueba Manual de Procedimiento de Procedimientos de Licencias de Conducir y Departamento Técnico Municipal', href: '' },
      { etiqueta: 'Organigrama Municipal', href: '' },
      { etiqueta: 'Contacto para consultas', href: '' }
    ]
  },
  {
    tramite: 'Verificación de Datos',
    descripcion: 'Verificación de Datos.',
    requisitos: 'Cédula de identidad y licencia de conducir.',
    documentos: 'Cédula de identidad y licencia de conducir.',
    etapas: etapasAtencionDirectaLicencia,
    lugar: 'Mesón de Atención de Licencia de Conducir, San Pablo 5959, primer piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '15%',
    disponible: 'No',
    enlaceTramite: 'No aplica'
  },
  {
    tramite: 'Examen Sensométrico y Psicométrico',
    descripcion: 'Evaluación Sensométrico y Psicométrico.',
    requisitos: 'Cédula de identidad.',
    documentos: 'Cédula de identidad.',
    etapas: 'Se solicita la hora en Ventanilla Única. Se cancela examen en Tesorería (este valor es reajustado semestralmente). Se entrega el comprobante de pago en el Depto. de Licencia de Conducir. El Director Vial evalúa a la persona para los exámenes correspondientes; el médico a cargo informa el resultado.',
    lugar: 'Mesón de Atención de Licencia de Conducir, San Pablo 5959, primer piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '15%',
    disponible: 'No',
    enlaceTramite: 'No aplica'
  },
  {
    tramite: 'Levantamiento de Restricción',
    descripcion: 'Solo para personas con restricción en su Licencia de Conducir.',
    requisitos: 'Cédula de identidad.',
    documentos: 'Cédula de identidad y Licencia de Conducir anterior.',
    etapas: etapasControlLicenciaConducir,
    lugar: 'Mesón de Atención de Licencia de Conducir, San Pablo 5959, primer piso.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '20%',
    disponible: 'No',
    enlaceTramite: 'No aplica'
  }
];

type RegistroPermisoCirculacion = {
  tramite: string;
  descripcion: string;
  requisitos: string;
  documentos: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad: string;
  valor: string;
  disponible: string;
  enlaceTramite: string;
};

const lugarPermisoCirculacion = 'Depto. Permiso de Circulación, San Pablo 5959, primer piso.';
const documentosVehiculoNuevo =
  'Solicitud de Inscripción en Registro Civil, copia municipalizada de la factura de compra del vehículo, homologación del vehículo y Seguro Obligatorio vigente hasta el siguiente año.';
const documentosVehiculoUsado =
  'Permiso de Circulación año anterior, Seguro Obligatorio con vigencia hasta el siguiente año y Revisión Técnica y Certificado de emisión de Gases vigente. Para renovación en su defecto homologación vigente para la revisión técnica si es que homologación para el vehículo. Fotocopia de padrón del vehículo en caso de cambio de propietario.';
const etapasConsultaPermiso =
  'Inicio: Ingresar a la página www.loprado.cl e ir al banner “Descubre aquí si su Permiso de Circulación pertenece a Lo Prado”. Ingresará a una nueva página, en la cual deberá ingresar la patente en consulta, ingresar clave de seguridad y pinchar buscar. Si el vehículo pertenece a la comuna, se entrega la información del vehículo; de lo contrario deberá consultar en otras municipalidades (los Permisos de Circulación no son bases de datos de registro únicos e integrados a nivel país).';
const etapasPrimerPermisoCirculacion =
  'Inicio: Se dirigen al Depto. de Permiso de Circulación donde se entregan los documentos mencionados anteriormente. Se ingresan los datos de Propietario y vehículos al sistema de Permiso de Circulación existente en la unidad. Emisión de Permiso y se cancela en Tesorería, se debe dirigir al Depto. de Permiso de Circulación para ingresar los datos a documento de homologación entregado del mismo más sello verde.';
const etapasRenovacionCirculacion =
  'Inicio: Se dirigen al Depto. de Permiso de Circulación donde se entregan los documentos mencionados anteriormente. Se ingresan los datos de Propietario y vehículos al sistema de Permiso de Circulación existente en la unidad. Emisión de folio y se cancela en Tesorería. Además se informa que este Permiso se puede cancelar en una cuota semestral (si el monto y son dos cuotas, se cancela segundo vencimiento el 31 de agosto).';

const registrosPermisoCirculacion: RegistroPermisoCirculacion[] = [
  {
    tramite: 'Consulta de Permiso de Circulación',
    descripcion: 'Consulta de Permiso de Circulación vigente en el Municipio.',
    requisitos: 'Tener la patente de un vehículo.',
    documentos: 'Patente del vehículo.',
    etapas: etapasConsultaPermiso,
    lugar: lugarPermisoCirculacion,
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Primer Permiso de Circulación vehículo nuevo',
    descripcion: 'Permiso de Circulación vehículo nuevo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Taxi Turismo, Automóviles, Particulares, Furgones, ST, W. Ambulancias, Carrazas, Camionetas, Motocicletas).',
    documentos: documentosVehiculoNuevo,
    etapas: etapasPrimerPermisoCirculacion,
    lugar: lugarPermisoCirculacion,
    costo: 'Sí',
    unidad: 'pesos',
    valor: 'Dependiendo del valor neto de la factura del vehículo.',
    disponible: 'No',
    enlaceTramite: 'Solo Presencial'
  },
  {
    tramite: 'Primer Permiso de Circulación Franquicias Especiales',
    descripcion: 'Primer Permiso de Circulación Franquicias Especiales.',
    requisitos: 'Ser propietario de un vehículo acogido a D.L. 1.717 art. 6, DFL N° 13.039, Art. N° 35, Ley G. y P. N° 2 y 48.',
    documentos: 'Solicitud de Inscripción en Registro Civil, Declaración de Ingreso Resolución Técnica y Certificado de emisión de gases (si es que vehículo nuevo en su defecto homologación vigente), Seguro Obligatorio vigente hasta el siguiente año.',
    etapas: etapasPrimerPermisoCirculacion,
    lugar: lugarPermisoCirculacion,
    costo: 'Sí',
    unidad: 'pesos',
    valor: 'Dependiendo del valor neto de la Declaración de Ingreso del vehículo.',
    disponible: 'No',
    enlaceTramite: 'Solo Presencial'
  },
  {
    tramite: 'Permiso de Circulación vehículo con vencimiento en marzo',
    descripcion: 'Permiso de Circulación vehículo con vencimiento en marzo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Taxi Turismo, Automóviles, Particulares, Furgones, ST, W. Ambulancias, Carrazas, Camionetas, Motocicletas).',
    documentos: documentosVehiculoUsado,
    etapas: `${etapasRenovacionCirculacion} Si la Fiscalización de la unidad detecta que se puede cancelar en una cuota semestral el 30 de mayo y en dos cuotas según IPC más año precedente.`,
    lugar: lugarPermisoCirculacion,
    costo: 'Sí, con la salvedad de que se necesita documentos requeridos escaneados y posteriormente la entrega de documentación en la unidad.',
    unidad: 'pesos',
    valor: 'Depende de la tasación del vehículo realizada por el servicio de puesto interno.',
    disponible: 'Sí',
    enlaceTramite: ''
  },
  {
    tramite: 'Permiso de Circulación vehículo nuevo',
    descripcion: 'Permiso de Circulación vehículo nuevo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Automóviles de Alquiler Básicos, Colectivos y Furgones Escolar), Taxímetro para taxi básico y ejecutivo.',
    documentos: `${documentosVehiculoNuevo} Taxímetro para taxi básico y ejecutivo.`,
    etapas: `${etapasPrimerPermisoCirculacion} Además se solicita la documentación para el taxímetro, si corresponde.`,
    lugar: lugarPermisoCirculacion,
    costo: 'Sí',
    unidad: 'pesos',
    valor: 'Dependiendo del valor neto de la factura del vehículo.',
    disponible: 'No',
    enlaceTramite: 'Solo Presencial'
  },
  {
    tramite: 'Permiso de Circulación vehículo con vencimiento en Mayo',
    descripcion: 'Permiso de Circulación vehículo con vencimiento en Mayo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Automóviles de Alquiler Básicos, Colectivos y Furgones Escolar), Taxímetro para taxi básico y ejecutivo.',
    documentos: `${documentosVehiculoUsado} Fotocopia de la tarjeta de recorrido del taxímetro.`,
    etapas: `${etapasRenovacionCirculacion} Se puede cancelar en una cuota semestral hasta el 30 de junio y en dos cuotas de acuerdo al IPC más año precedente.`,
    lugar: lugarPermisoCirculacion,
    costo: 'Sí',
    unidad: 'pesos',
    valor: '$',
    disponible: 'No',
    enlaceTramite: 'Solo Presencial'
  },
  {
    tramite: 'Permiso de Circulación vehículo nuevo',
    descripcion: 'Permiso de Circulación vehículo nuevo.',
    requisitos: 'Ser propietario de un vehículo nuevo (Vehículos mov. Colectiva, Camiones desde 1.700 y más de 10.000 kg, Tractocamiones y semirremolques desde 1.750 y más de 10.000 kg, Carros y Remolques, Otros (Tractores, Sembradoras, Cosechadoras, Palas, Mecánicas, Traillas, etc.).',
    documentos: documentosVehiculoNuevo,
    etapas: etapasPrimerPermisoCirculacion,
    lugar: lugarPermisoCirculacion,
    costo: 'Sí',
    unidad: 'pesos',
    valor: 'Dependiendo del valor neto de la factura del vehículo.',
    disponible: 'No',
    enlaceTramite: 'Solo Presencial'
  },
  {
    tramite: 'Permiso de Circulación con vencimiento en Septiembre',
    descripcion: 'Permiso de Circulación vehículo con vencimiento en Septiembre.',
    requisitos: 'Ser propietario de un vehículo (Vehículos mov. Colectiva, Camiones desde 1.700 y más de 10.000 kg, Tractocamiones y semirremolques desde 1.750 y más de 10.000 kg, Carros y Remolques, Otros (Tractores, Sembradoras, Cosechadoras, Palas, Mecánicas, Traillas, etc.).',
    documentos: documentosVehiculoUsado,
    etapas: `${etapasRenovacionCirculacion} La cancelación por tipo se realiza el cálculo dependiendo de la capacidad de carga del vehículo en trámite.`,
    lugar: lugarPermisoCirculacion,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '',
    disponible: 'No',
    enlaceTramite: 'Solo Presencial'
  },
  {
    tramite: 'Duplicado de Permiso de Circulación',
    descripcion: 'Duplicado de Permiso de Circulación.',
    requisitos: 'Ser el dueño del vehículo. Cédula de Identidad del Propietario. Padrón del vehículo.',
    documentos: 'Padrón del vehículo. Cédula de Identidad del Propietario.',
    etapas: `${etapasPrimerPermisoCirculacion} Emisión de folio y se cancela en Tesorería.`,
    lugar: lugarPermisoCirculacion,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%',
    disponible: 'No',
    enlaceTramite: 'Solo Presencial'
  },
  {
    tramite: 'Duplicado de Sello Verde',
    descripcion: 'Duplicado de Sello Verde.',
    requisitos: 'Ser el dueño del vehículo. Cédula de Identidad del Propietario. Padrón del vehículo original del Sello Verde. Debe ser de la comuna de Lo Prado, a menos que demuestre la distancia de 150 kilómetros del Sello Verde y sea de la comuna.',
    documentos: 'Cédula de Identidad del Propietario. Declaración Jurada ante Notario Público por reemplazo, pérdida o robo.',
    etapas: etapasPrimerPermisoCirculacion,
    lugar: lugarPermisoCirculacion,
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10%',
    disponible: 'No',
    enlaceTramite: 'Solo Presencial'
  },
  {
    tramite: 'Exención de pago Permiso de Circulación',
    descripcion: 'Exención de pago Permiso de Circulación.',
    requisitos: 'Vehículo mal estado que no pueden circular durante un calendario del año, con período de acogimiento desde enero hasta el 30 de noviembre.',
    documentos: 'Padrón del vehículo. Permiso de Circulación anterior.',
    etapas: 'Inicio: Se dirigen al Depto. de Permiso de Circulación donde se entregan los documentos mencionados anteriormente. Se verifica los datos de Propietario y vehículos al sistema de Permiso de Circulación existente en la unidad. Se ingresa la información de acogimiento de la Art. N° 16, si el propietario tenía el permiso en dos cuotas, se puede abstener de la cancelación si se acoge a la Ley 3.063, art. N° 15. Se emite formulario informativo y firmado por la unidad, firma del solicitante, se entrega copia. Acogimiento desde enero hasta el 30 de noviembre; este trámite se debe realizar todos los años que el vehículo no transita por el país.',
    lugar: lugarPermisoCirculacion,
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'Solo Presencial'
  }
];

type RegistroTecnicoTransito = {
  tramite: string;
  descripcion: string;
  requisitos: string;
  documentos: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad: string;
  valor: string;
  disponible: string;
  enlaceTramite: string;
};

const registrosTecnicoTransito: RegistroTecnicoTransito[] = [
  {
    tramite: 'Requerimiento de la Comunidad para Señalización Vial',
    descripcion: 'Vecinos o contribuyentes solicitan o sugieren instalación de señales de tránsito.',
    requisitos: 'Solicitud formal argumentando la petición.',
    documentos: 'Carta solicitud o formulario de solicitud (lo provee la Dirección de Tránsito).',
    etapas: 'Ingreso de solicitud en Depto. Técnico. Visita a terreno. Evaluación técnica. Orden de instalación o solicitud de compra (si corresponde). Recepción de las señales instaladas (si corresponde).',
    lugar: 'En la Dirección de Tránsito.',
    costo: 'No',
    unidad: 'No',
    valor: 'Sin costo',
    disponible: 'No',
    enlaceTramite: 'No aplica'
  }
];

type RegistroDesarrolloComunitario = {
  tramite: string;
  descripcion: string;
  dirigido?: string;
  requisitos: string;
  documentos: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad: string;
  valor: string;
  disponible: string;
  enlaceTramite: string;
  tieneEnlaceMayorInformacion: boolean;
};

const etapasSubsidiosSociales =
  'Se solicita número de atención en forma presencial. Adjuntar documentación solicitada. Ingresar información a la página web, la cual es encargada de aprobación o rechazo de la solicitud. Listado aprobado luego de 60 días con beneficiarios se publica al interior de la Dirección de Desarrollo Comunitario.';
const documentosSubsidioFamiliar =
  'Cédula de identidad. Certificado de Ficha de Protección Social. Certificado de nacimiento. Copia de carátula de carnet de control sano al día para niños menores de 6 años. Certificado alumno regular del año en curso para niños mayores de 6 años.';
const lugarAtencionSocial = 'Ventanilla Única Área Social, San Pablo 5959, patio interior.';

const registrosDesarrolloSocial: RegistroDesarrolloComunitario[] = [
  {
    tramite: 'Solicitud de Encuesta para Nueva Ficha Social',
    descripcion: 'Proceso administrativo y operativo en el cual se realiza el encuestaje del solicitante y grupo familiar declarado, siendo este la piedra angular para la obtención del Puntaje de la Ficha Social.',
    requisitos: 'Acercarse al Municipio, Dirección de Desarrollo Comunitario, Oficina de Estratificación Social para Ciudadanos Chilenos y extranjeros, cédula nacional de identidad vigente (único documento válido para iniciar el trámite).',
    documentos: 'Llenar Declaración Jurada Simple (como se indicará en gabinete). Traer boletas de Luz y Agua o Gas (si fuese de carátula). Certificados de nacimiento de los menores de edad (si el menor viviera solo con la madre). Si un menor de edad no estuviera al cuidado de la madre, se deberá presentar la Tuición o Cuidado personal dictado por un Tribunal. Este quien designe al solicitante como tutor.',
    etapas: '1. Solicitar número de atención presencial, indicando que se dirige a la Oficina de Estratificación Social. 2. Entregar documentación requerida en gabinete. 3. En Ejecución de atención, quien hará el ingreso e indicará fecha de aplicación de encuesta. 4. Encuesta y terreno. 5. Registro y aprobación de datos al sistema del MIDESO. 6. Luego de 7 a 8 días se asignará puntaje desde el MIDESO.',
    lugar: 'Oficina de Estratificación Social, San Pablo 5959, patio interior.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Obtención de Certificado de Ficha de Protección Social',
    descripcion: 'Obtención de manera presencial o a través de la página del MIDESO del Certificado de FPS.',
    requisitos: 'Acercarse al Municipio, Dirección de Desarrollo Comunitario, Oficina de Estratificación Social con cédula nacional de identidad vigente (único documento válido para iniciar el trámite).',
    documentos: 'Cédula de identidad. Huella dactilar (para el dispensador de certificaciones). Registro o clave para portal web del MIDESO.',
    etapas: '1. Con la cédula de identidad y huella dactilar, acercarse al dispensador de certificados, el cual lo entregará de forma inmediata. 2. Frente a alguna dificultad con el dispensador, con número de atención podrá solicitarlo en gabinete. 3. También podrá registrarse en el portal del MIDESO y pedir su certificado online.',
    lugar: 'Oficina de Estratificación Social, San Pablo 5959, patio interior y portal web del MIDESO.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'Sí',
    enlaceTramite: '',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Subsidio Único Familiar',
    descripcion: 'Subsidio monetario otorgado por el Estado.',
    requisitos: 'Ser padre, madre o tutor, a cargo de niños y niñas menores de 18 años carentes de recursos y sin previsión social. Tener vigente Ficha de Protección Social puntaje igual o inferior a 11.734.',
    documentos: documentosSubsidioFamiliar,
    etapas: etapasSubsidiosSociales,
    lugar: lugarAtencionSocial,
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Subsidio Prenatal',
    descripcion: 'Subsidio monetario otorgado por el Estado.',
    requisitos: 'Mujeres embarazadas con quinto mes de gestación. Tener vigente Ficha de Protección Social menor o igual a 11.734 puntos.',
    documentos: 'Cédula de identidad. Certificado de Ficha de Protección Social. Certificado extendido por matrona que acredita 5° mes de embarazo.',
    etapas: etapasSubsidiosSociales,
    lugar: lugarAtencionSocial,
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: false
  },
  {
    tramite: 'Subsidio Único Familiar Duplo',
    descripcion: 'Subsidio monetario otorgado por el Estado.',
    requisitos: 'Ser madre, padre o tutor que tenga a su cargo el cuidado del menor de 18 años que presente discapacidad física, psíquica o sensoriales. FPS con un puntaje igual o inferior a 11.734.',
    documentos: `${documentosSubsidioFamiliar} Resolución de invalidez del COMPIN.`,
    etapas: etapasSubsidiosSociales,
    lugar: lugarAtencionSocial,
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: false
  },
  {
    tramite: 'Subsidio Agua Potable',
    descripcion: 'Subsidio económico otorgado por el Estado al consumo de agua potable, consistente en un 50% del valor del mes de consumo de agua potable con un tope de 15 m3. Tener vigente Ficha de Protección Social.',
    requisitos: 'Tener vigente Ficha de Protección Social.',
    documentos: 'Cédula de identidad del jefe de familia. Cuenta del agua que debe encontrarse al día o en convenio de pago al día. Última boleta del servicio de agua potable cancelada.',
    etapas: etapasSubsidiosSociales,
    lugar: lugarAtencionSocial,
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: false
  },
  {
    tramite: 'Pensión Básica Solidaria de Vejez',
    descripcion: 'Subsidio monetario otorgado por el Estado a las personas adultas mayores carentes de recursos y sin previsión social.',
    requisitos: 'Ser adulto mayor sobre 65 años. No tener previsión social y no haber cotizado en ninguna AFP. Tener Ficha Protección Social.',
    documentos: 'Cédula de identidad.',
    etapas: etapasSubsidiosSociales,
    lugar: lugarAtencionSocial,
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Pensión Básica Solidaria de Invalidez',
    descripcion: 'Subsidio monetario otorgado por el Estado a las personas que tienen algún tipo de invalidez, carentes de recursos y sin previsión social.',
    requisitos: 'Ficha de Protección Social. No haber cotizado en ninguna AFP. Presentar alguna enfermedad invalidante y que sea certificada por su médico tratante.',
    documentos: 'Cédula de identidad. Certificado de Ficha de Protección Social. No haber cotizado en ninguna AFP. Presentar certificado de invalidez emitido por médico tratante.',
    etapas: etapasSubsidiosSociales,
    lugar: lugarAtencionSocial,
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Subsidio de Discapacidad Mental para menores de 18 años',
    descripcion: 'Subsidio monetario para niño o niña menor de 18 años que presenten algún grado de discapacidad mental.',
    requisitos: 'Ficha de Protección Social con puntaje no superior a 8.500 pts. No tener ingresos propios ni per cápita del grupo familiar superiores al 50% de la Pensión Mínima. Certificado de Nacimiento. Certificado de residencia. Resolución de invalidez del COMPIN.',
    documentos: 'Cédula de identidad del postulante. Cédula de identidad del tutor del postulante. Certificado de Ficha de Protección Social. No tener ingresos propios ni per cápita del grupo familiar superiores al 50% de la Pensión Mínima. Certificado de Nacimiento. Certificado de residencia. Resolución de Invalidez del COMPIN.',
    etapas: etapasSubsidiosSociales,
    lugar: lugarAtencionSocial,
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: false
  },
  {
    tramite: 'Certificado de Calidad Indígena',
    descripcion: 'En obtener un certificado que emite la Corporación de Desarrollo Indígena. Hace que acredite la ascendencia indígena de quien lo solicita.',
    requisitos: 'Este certificado se entrega por una sola vez y es hasta la tercera generación de el reconocimiento. Ser hijo de padre o madre indígena, cualquiera sea la naturaleza de su afiliación, inclusive la adoptiva. Ser cónyuge de una persona indígena.',
    documentos: 'Solicitud de acreditación por procedencia del apellido: 1. Fotocopia simple de la Cédula Nacional de Identidad vigente. 2. Certificado de Nacimiento. Solicitud de acreditación por ascendencia: Fotocopia de la Cédula Nacional de Identidad vigente. Certificado de Nacimiento del solicitante. Solicitud de acreditación conforme al artículo 2°, letra a) de la Ley N° 19.253: Fotocopia simple de la Cédula Nacional de Identidad vigente. Certificado de Nacimiento de los ascendientes.',
    etapas: 'Asistir a la Oficina de Pueblos Originarios de la Municipalidad de Lo Prado para ser asesorado donde se le indicará los papeles que necesitan según la situación de quien lo solicita. Se tramita el certificado de calidad indígena y en 5 días hábiles se entregan (esto también va a depender de la situación de quien lo solicita).',
    lugar: 'Oficina de Pueblos Originarios ubicada en San Germán 1052 o bien directamente a la oficina de Conadi ubicada en Sotero del Río N° 326.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  }
];

const registrosPromocionComunitaria: RegistroDesarrolloComunitario[] = [];

const registrosViviendaPSAT: RegistroDesarrolloComunitario[] = [
  {
    tramite: 'Postulación a Proyectos de Mejoramiento Interior de la Vivienda (Programa Protección Patrimonio Familiar Llamado Regular)',
    descripcion: 'Postular a la Comunidad organizada para obtener recursos con el fin de mejorar el interior de las viviendas por un monto total de 58 UF por vivienda.',
    requisitos: '1. Agruparse con la Junta de Vecinos u otra Organización. 2. Propietario mayor de 18 años. 3. No haber recibido el beneficio anteriormente. 4. Propietario de una sola vivienda. 5. Ahorro de 1 UF, el último día hábil del mes anterior a la postulación. 6. Contar con planos de la vivienda realizados por la Dirección de Obras Municipal. 7. Dirigirse a la Oficina de Vivienda u otra Prestadora de Servicio de Asistencia Técnica.',
    documentos: 'Ficha Protección Social vigente en la Comuna, no requiere puntaje mínimo. 2. Plano regularizado en la DOM. 3. Dirección de Obras Municipal. 3. Libreta de ahorro para la vivienda con un depósito de 75.000. 4. Fotocopia Carnet del Postulante. 5. Certificado a firmar en Oficina de Vivienda.',
    etapas: '1. Coordinar con la Oficina de Vivienda u otra Entidad Patrocinante para realizar un proyecto. 2. Organizar un grupo de vecinos de una misma Villa o Unidad Vecinal de a lo menos 30 personas. 3. La totalidad del Grupo debe entregar documentación requerida. 4. La totalidad del grupo recibe Visitas Técnicas a sus viviendas, por parte de la Oficina con el fin de determinar el presupuesto y las partidas a ejecutar. 5. Reunión con postulantes donde se aprueban y firman presupuestos. 6. Postulación a recursos Serviu del grupo. 7. Asignación de recursos. 8. Construcción y Ejecución del Plan de Habilitación Social.',
    lugar: 'Oficina de Vivienda. Mejoramiento de Barrios San Pablo 7127 u otra Prestadora de Servicio de Asistencia Técnica.',
    costo: 'Aporte de un Ahorro de 3 UF por parte de cada Postulante.',
    unidad: 'UF',
    valor: '$75.000 aproximadamente',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Conformar y Formalizar Copropiedad (Programa Protección Patrimonio Familiar Llamado Especial)',
    descripcion: 'Consiste en Organizar bajo la Ley 19.537 de Copropiedad a los Vecinos de un Condominio de Vivienda Social (CVS).',
    requisitos: '1. Ser Copropietario. 2. Tener un representante de la Villa. 3. Dirigirse a la Oficina de Vivienda Mejoramiento de Barrios.',
    documentos: '1. Escritura de la Propiedad (solo para presentarla).',
    etapas: '1. Coordinar con la Oficina de Vivienda u otra Entidad Patrocinante para realizar un proyecto. 2. Organizar un grupo de vecinos que sean copropietarios, al menos 50 personas. 3. La totalidad del Grupo debe entregar documentación requerida. 4. Una entidad, con presencia de Ministro de Fe, aprueba según reglamento por parte de la Oficina el 50% de los copropietarios. 5. Realizar Escritura Pública ante el Conservador de Bienes Raíces. 6. Registrarla en el Conservador de Bienes Raíces. 7. Solicitar Rut en SII. Sacar Cuenta Corriente Bipersonal a nombre de la Copropiedad.',
    lugar: 'Oficina de Vivienda Mejoramiento de Barrios San Pablo 7127.',
    costo: 'El costo es Notaría de Realizar Escritura Pública de Acta de Elecciones y Reglamento.',
    unidad: 'No',
    valor: 'Entre $40.000 y $100.000',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Postulación a Proyectos de Mejoramiento de Condominios de Vivienda Social',
    descripcion: 'Postular a una Copropiedad a Proyectos de Mejoramiento para los espacios comunes. El mejoramiento está determinado bajo un presupuesto de entre 20 y 195 UF por copropiedad.',
    requisitos: '1. Estar organizados bajo la Ley de Copropiedad. 2. Tener una Directiva vigente. 3. Aportar un UF por cada Unidad del Condominio. 4. Dirigirse a la Oficina de Vivienda u otra Entidad Patrocinante. 5. La meta es 50% y 10 UF por copropiedad en reuniones de definición del Proyecto.',
    documentos: '1. Escritura Pública de Acta de Elecciones y Reglamento inscrito en Conservador de Bienes Raíces. 2. Decreto o Plano. 3. Certificados a firmar Reuniones con la Comunidad. 4. Certificado de Vigencia de la Directiva. 5. Ficha Protección Social vigente en la Comuna (no requiere puntaje mínimo) de a lo menos un 50% de los copropietarios.',
    etapas: '1. Coordinar con la Oficina de Vivienda u otra Entidad Patrocinante para realizar un proyecto. 2. Organizar a lo menos el 50% de los copropietarios para participar, aportar con el ahorro de la comunidad y realizar las obras a ejecutar. 3. Realización de visitas donde se realiza diagnóstico técnico de la Villa. 4. Reunión con la Copropiedad donde se escogen las obras a postular. 5. Postulación a recursos Serviu. 6. Definición y realización de Proyecto Técnico, Social, Legal y Administrativo a Postular. 7. Postulación a Asignación de Recursos. 9. Construcción y Ejecución de Plan de Habilitación Social.',
    lugar: 'Oficina de Vivienda Mejoramiento de Barrios San Pablo 7127.',
    costo: 'Aporte de un Ahorro de 1 UF por parte de cada Copropiedad.',
    unidad: 'UF',
    valor: '$25.000 aproximadamente por cada metro cuadrado de la Copropiedad',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Postulación Programa Construcción Sitio Propio',
    descripcion: 'Este subsidio está destinado a apoyar la construcción en sitio propio en densificación predial de una vivienda económica de hasta 1.200 UF, en los sectores urbanos o rurales, para uso habitacional del beneficiario y su familia.',
    requisitos: '1. Ser único propietario del terreno postulando su ser mayor de 18 años. 2. No contar con otra propiedad, o herencia de terreno. 3. No haber recibido el beneficio anteriormente. 4. Contar con el certificado de inhabitabilidad de la vivienda, o un terreno vacío sin vivienda. 5. Contar con el dominio de 10 UF, depositando en una cuenta para la vivienda. 6. Dirigirse a la Oficina de Vivienda u otra Entidad Patrocinante.',
    documentos: '1. Ficha Protección Social vigente en la Comuna, (con máximo 13.484 puntos). 2. Fotocopia Escritura de la Propiedad. 3. Fotocopia libreta de ahorro para la vivienda con un depósito de 10 UF. 4. Fotocopia Carnet del Postulante y de propietario del terreno. 5. Certificado de inhabitabilidad de la Dirección de Obras Municipal. 6. Fotocopia del Certificado de Domicilio (caso vivir en arriendo). 7. Certificado de Avalúo fiscal desglosado de la propiedad (no sacar hasta la postulación). 8. Certificado de Factibilidad de agua potable y alcantarillado, en su lugar Boleta de Agua (sin importar si está al día). 9. Certificado de Factibilidad eléctrica, o en su lugar Boleta de Luz (sin importar si está al día).',
    etapas: '1. Coordinar con la Oficina de Vivienda u otra Entidad Patrocinante para realizar un proyecto. 2. Organizar un grupo de vecinos que cumplan con los requisitos, al menos 50% de la Comunidad. 3. La totalidad del grupo debe entregar documentación requerida. 4. Realización de visitas donde se realiza diagnóstico técnico de la vivienda. 5. Reunión con la Copropiedad donde se escogen las obras a postular. 6. Se ingresa Expediente a Dirección de Obras Municipal para Aprobación. 6. Con expediente aprobado, este se ingresa a Serviu para aprobación. 7. Una vez aprobado se postula el grupo a llamada Serviu. 8. Asignación de recursos. 9. Construcción y Ejecución de Plan de Habilitación Social. 10. Recepción de las viviendas 11. Entrega de Vivienda para ser habitada.',
    lugar: 'Se puede postular en el Serviu y sus Delegaciones, en Municipalidades acreditadas por el Serviu o a través de medios electrónicos que se establezcan para estos efectos.',
    costo: 'Aporte de un Ahorro de 10 UF por parte del Postulante.',
    unidad: 'UF',
    valor: '$250.000 aproximadamente',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  }
];

const requisitosMedioAmbiente = 'Solicitar fecha de atención del servicio en Ventanilla Única.';
const documentosDomicilioLoPrado =
  'Certificado de Residencia o cuenta a nombre del solicitante, en donde indique domicilio en la comuna de Lo Prado.';
const registrosMedioAmbiente: RegistroDesarrolloComunitario[] = [
  {
    tramite: 'Servicio de fumigación de domicilios y locales comerciales',
    descripcion: 'A través de la aplicación por aspersión de productos químicos autorizados, ayudar al control de insectos (moscas), arácnidos (araña de rincón) y garrapatas en el domicilio.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    requisitos: requisitosMedioAmbiente,
    documentos: documentosDomicilioLoPrado,
    etapas: 'Solicitar hora en Ventanilla Única, y será agendado para realizar el servicio a domicilio según disponibilidad de fecha.',
    lugar: 'En el domicilio del solicitante.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10% domicilios - 40% locales comerciales',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Servicio de desratización de domicilios y locales comerciales',
    descripcion: 'A través de la aplicación de rodenticidas autorizados, ayudar al control de roedores en el domicilio.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    requisitos: requisitosMedioAmbiente,
    documentos: documentosDomicilioLoPrado,
    etapas: 'Solicitar hora en Ventanilla Única, y será agendado para realizar el servicio a domicilio según disponibilidad de fecha.',
    lugar: 'En el domicilio del solicitante.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '10% domicilios - 40% locales comerciales',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  }
];

const registrosAseo: RegistroDesarrolloComunitario[] = [
  {
    tramite: 'Inspección Sanitaria',
    descripcion: 'Concurrir y evaluar situación por reclamo de tenencia irresponsable de mascotas.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    requisitos: 'Descripción del hecho y solicitud de inspección en Ventanilla Única.',
    documentos: 'Presencial.',
    etapas: 'Solicitud de inspección por hechos denunciados. Se espera visita de inspector. Inspector se contacta para informar las medidas aplicadas.',
    lugar: 'En el domicilio del solicitante.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  }
];

const registrosAreasVerdes: RegistroDesarrolloComunitario[] = [
  {
    tramite: 'Inspección Solicitud de Autorización de Tala y Corte de Ramas',
    descripcion: 'Inspeccionar en terreno si corresponde autorizar el corte o tala.',
    dirigido: 'Departamento de Áreas Verdes, Dirección de Medio Ambiente.',
    requisitos: 'Solicitud por vía de Ventanilla Única o documentación ingresada a oficina de partes.',
    documentos: 'Nombre del solicitante y domicilio en la comuna de Lo Prado.',
    etapas: 'Se inspecciona en terreno, se entrega un informe. Si corresponde se entrega una Autorización al Solicitante o se ingresa a Programa de Poda.',
    lugar: 'En el Centro de Atención Veterinaria Comunal, ubicado en San Germán N° 960.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Inspección Solicitud de Tala o Corte de Ramas al interior de Viviendas particulares',
    descripcion: 'Inspeccionar en terreno y evaluar el trabajo a efectuar por corta o tala de árboles.',
    dirigido: 'Departamento de Áreas Verdes, Dirección de Medio Ambiente.',
    requisitos: 'Solicitud por vía de Ventanilla Única o documentación ingresada a oficina de partes.',
    documentos: 'Nombre del solicitante y domicilio en la comuna de Lo Prado.',
    etapas: 'Se inspecciona en terreno, se entrega una Notificación para la cancelación del trabajo requerido (Tala o Poda).',
    lugar: 'En la Municipalidad, Caja Tesorería Municipal.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: 'Tabla según Derechos Municipales de la Dirección de Medio Ambiente.',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  }
];

const registrosHigieneAmbiental: RegistroDesarrolloComunitario[] = [
  {
    tramite: 'Atención Veterinaria para mascotas y vacunación',
    descripcion: 'Proporcionar atención clínica preventiva a caninos y felinos de la Comuna.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    requisitos: 'Solicitar hora de atención en Ventanilla Única.',
    documentos: documentosDomicilioLoPrado,
    etapas: 'Solicitar hora en Ventanilla Única, y será agendado para el día y hora que haya según disponibilidad del servicio.',
    lugar: 'En el Centro de Atención Veterinaria Comunal, ubicado en San Germán N° 960.',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '0,1',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  },
  {
    tramite: 'Programa de Esterilización de mascotas',
    descripcion: 'Método de Control de la natalidad, a través de cirugía a hembras y machos, caninos y/o felinos.',
    dirigido: 'Departamento de Higiene Ambiental, Dirección de Medio Ambiente.',
    requisitos: 'Solicitar hora para el procedimiento con anticipación a traer la mascota.',
    documentos: documentosDomicilioLoPrado,
    etapas: 'Solicitar hora para el procedimiento directamente en el Centro de Atención Veterinaria Comunal, ubicado en San Germán N° 960; concurrir con la mascota el día y hora que se indique. Considerar las instrucciones que se entregan para el procedimiento.',
    lugar: 'En el Centro de Atención Veterinaria Comunal, ubicado en San Germán N° 960.',
    costo: 'Sí',
    unidad: 'PESOS',
    valor: '$ 8.000.-',
    disponible: 'No',
    enlaceTramite: 'No aplica',
    tieneEnlaceMayorInformacion: true
  }
];

const enlacePdfPersa = '';

type RegistroEmprendimiento = {
  tramite: string;
  descripcion: ReactNode;
  requisitos: ReactNode;
  documentos: string;
  etapas: ReactNode;
  enlaceMayorInformacion: string;
};

type RegistroSecretaria = {
  tramite: string;
  descripcion: string;
  requisitos: string;
  documentos: string;
  etapas: string;
  lugar: string;
  costo: string;
  unidad: string;
  valor: string;
  disponibleEnLinea: string;
  tieneEnlaceWeb: boolean;
  tieneEnlacePdf: boolean;
};

const registrosSecretaria: RegistroSecretaria[] = [
  {
    tramite: 'Solicitud de la Información Web',
    descripcion: 'Ley N° 20.285, sobre acceso a la información.',
    requisitos: 'Persona natural o jurídica.',
    documentos: 'Ingreso web. Formulario de solicitud de la información presencial.',
    etapas: '1. Ingreso de solicitud. 2. Análisis de la solicitud. 3. Respuesta a la solicitud. 4. Confección de respuesta. 5. Aviso al solicitante de cancelación y retiro de respuesta. Si existe un costo, se podrá informar por correo electrónico para cancelar el retiro de la respuesta.',
    lugar: 'Página web o presencial.',
    costo: 'Sí/No',
    unidad: 'UF',
    valor: 'Según corresponda',
    disponibleEnLinea: 'Sí',
    tieneEnlaceWeb: true,
    tieneEnlacePdf: false
  },
  {
    tramite: 'Solicitud de Personalidad Jurídica de las Organizaciones Comunitarias Territoriales y Funcionales',
    descripcion: 'Creación de nuevas instituciones o entidades sociales en la comuna.',
    requisitos: 'Carta formal dirigida a la Municipalidad, firmada por algunos integrantes del grupo, solicitando Ministro de Fe para la constitución. La organización debe contar con un mínimo de 15 socios y 200 socios juntas de vecinos.',
    documentos: '1. Acta de sesión de constitución. 2. Estatutos de la organización (originales firmados). 3. Libro de socios (RUT, nombre y firmas de socios). 4. Certificado de antecedentes de los miembros de la directiva provisoria, con fotocopias de sus cédulas de identidad.',
    etapas: 'Ingreso de solicitud. Designación de Ministro de Fe de acuerdo al territorio donde radica la organización. Primera fecha de constitución con Ministro de Fe. Reunión de la primera constitución. Aprobada la constitución, se envía copia provisoria (duración 3 meses) para tramitar personalidad jurídica; si la documentación no está completa, se otorgan hasta 30 días para ingresar la documentación solicitada.',
    lugar: 'Secretaría Municipal, San Pablo 5959, segundo piso.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponibleEnLinea: 'No',
    tieneEnlaceWeb: false,
    tieneEnlacePdf: true
  },
  {
    tramite: 'Solicitud de Registro de Cambio Directiva',
    descripcion: 'La organización cambia su directiva, lo cual debe ser informado al Municipio.',
    requisitos: 'La organización debe estar vigente. Los candidatos deben ser mayores de 18 años, saber leer y escribir, tener al menos un año de afiliación a la organización y no estar procesados ni cumpliendo condena por delito que merezca pena aflictiva.',
    documentos: '1. Formulario Tipo de Cambio Directiva con datos solicitados y timbre respectivo de la organización. 2. Libro de Acta que conste la celebración de asamblea convocatoria para la elección de la nueva directiva. 3. Libro de socios (RUT, nombre y firmas de los socios). 4. Certificado de antecedentes de los miembros de la directiva electa, con fotocopias de sus cédulas de identidad.',
    etapas: 'Realizar asamblea general ordinaria con un mínimo de socios. Juntas de Vecinos: 50 socios y organizaciones funcionales: 8 socios. Designación de Ministro de Fe de acuerdo al territorio donde radica la organización. Primera fecha de constitución con Ministro de Fe. Reunión de la primera constitución. Aprobada la constitución, se envía copia provisoria para tramitar personalidad jurídica.',
    lugar: 'Secretaría Municipal, San Pablo 5959, segundo piso.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponibleEnLinea: 'No',
    tieneEnlaceWeb: false,
    tieneEnlacePdf: true
  },
  {
    tramite: 'Certificado de vigencia personalidad jurídica',
    descripcion: 'Certificado que la institución se encuentra vigente personalidad jurídica.',
    requisitos: 'Se solicita en forma presencial. La organización debe poseer personalidad jurídica; la organización debe estar inscrita y al día en el registro de organizaciones comunitarias de la Municipalidad de Lo Prado.',
    documentos: 'No se solicita documentación.',
    etapas: 'Se solicita certificación. Si la institución tiene vigencia al día, se entrega durante el día o al día siguiente de la solicitud.',
    lugar: 'Secretaría Municipal, San Pablo 5959, segundo piso.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponibleEnLinea: 'No',
    tieneEnlaceWeb: false,
    tieneEnlacePdf: true
  },
  {
    tramite: 'Modificación de Estatutos',
    descripcion: 'Solicita modificación de los estatutos existentes en una organización.',
    requisitos: 'Carta firmada por el presidente y secretario de la organización con el timbre de la misma. Haber aprobado la modificación en una asamblea general extraordinaria, especialmente convocada para ello. Ser aprobada el acuerdo de la mayoría absoluta de los miembros asociados (50% + 1), y por los socios asistentes a dicha asamblea extraordinaria.',
    documentos: '1. Estatuto de la organización (dos originales). 2. Libro de actas y fotocopia del acta en donde se aprobó la modificación, con timbre respectivo. 3. Carta firmada por el presidente y secretario de la organización y con el timbre de la misma.',
    etapas: 'Se ingresa la solicitud de modificación con los documentos solicitados. La Secretaría tiene un plazo de 30 días para estudiar la modificación. Si la organización tiene un plazo de 30 días para subsanar observaciones, estas se envían por carta certificada con el certificado de vigencia.',
    lugar: 'Secretaría Municipal, San Pablo 5959, segundo piso.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponibleEnLinea: 'No',
    tieneEnlaceWeb: false,
    tieneEnlacePdf: true
  },
  {
    tramite: 'Solicitud de Subvención Municipal',
    descripcion: 'Se solicita subvenciones para el desarrollo de la organización.',
    requisitos: 'Tener personalidad jurídica vigente en la comuna. Contar con directiva vigente. No tener rendiciones pendientes (subvenciones, fondos o aportes municipales). Presentar formulario especialmente elaborado para el proyecto de subvención.',
    documentos: 'Formulario con el proyecto de subvención, enviado al Sr. Alcalde y al Honorable Concejo Municipal, con nombre y firmas de los dirigentes (presidente, secretario y tesorero), timbre de la organización, destino del monto en dinero y cotizaciones respecto a lo solicitado.',
    etapas: 'Se ingresa el proyecto de subvención aprobado por el Honorable Concejo Municipal y el Sr. Alcalde. Se registra la transferencia en el registro de Fondos Públicos (www.registros19862.cl), la cual debe ser aceptada por la organización. Una vez ingresados los documentos, se realiza el convenio en la Dirección de Asesoría Jurídica.',
    lugar: 'Secretaría Municipal, San Pablo 5959, primer piso.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponibleEnLinea: 'No',
    tieneEnlaceWeb: true,
    tieneEnlacePdf: true
  },
  {
    tramite: 'Certificado de Rendición al día',
    descripcion: 'Certifica que la institución tenga al día las rendiciones de las subvenciones municipales.',
    requisitos: 'Se solicita en forma presencial.',
    documentos: 'RUT de la institución.',
    etapas: 'Se solicita en forma presencial y se entrega en un plazo de tres días hábiles.',
    lugar: 'Secretaría Municipal, San Pablo 5959, primer piso.',
    costo: 'No',
    unidad: 'No aplica',
    valor: 'No aplica',
    disponibleEnLinea: 'No',
    tieneEnlaceWeb: true,
    tieneEnlacePdf: false
  }
];

const enlaceWebSecretaria = '';
const enlacePdfSecretaria = '';

function VistaSecretariaMunicipal() {
  return (
    <div className="space-y-4">
      {registrosSecretaria.map((registro) => (
        <article key={registro.tramite} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Dirección Secretaría Municipal</p>
            <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos}</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="Dónde se realiza">{registro.lugar}</DatoFicha>
            <DatoFicha titulo="Costo y valor">
              <p>{registro.costo}</p>
              <p className="mt-1 text-xs text-slate-500">Unidad: {registro.unidad} · Valor: {registro.valor}</p>
            </DatoFicha>
            <DatoFicha titulo="Disponible en línea">{registro.disponibleEnLinea}</DatoFicha>
            {(registro.tieneEnlaceWeb || registro.tieneEnlacePdf) && (
              <div className="sm:col-span-2 lg:col-span-3">
                <DatoFicha titulo="Enlaces">
                  <div className="flex flex-wrap gap-2">
                    {registro.tieneEnlaceWeb && (
                      <a
                        href={enlaceWebSecretaria || 'about:blank'}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Enlace web
                      </a>
                    )}
                    {registro.tieneEnlacePdf && (
                      <a
                        href={enlacePdfSecretaria || 'about:blank'}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                      >
                        <FileDown className="h-4 w-4" aria-hidden="true" />
                        Documento PDF
                      </a>
                    )}
                  </div>
                </DatoFicha>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function VistaCobranza() {
  const enlaceWebCobranza = '';
  const enlacePdfCobranza = '';
  const registros = [
    {
      tramite: 'Certificado de Deuda, Derechos de Aseo domiciliario',
      descripcion: 'En el caso de las propiedades avaluadas inferior a 225 UTM, se certifica la exención por el avalúo. Si la propiedad tiene un avalúo entre 225 y 516 UTM se certifica si presenta o no deuda.',
      requisitos: 'Rol de la propiedad.',
      documentos: 'Ingresar solicitud en Ventanilla Única.',
      dirigido: 'Tesorería Municipal.',
      etapas: 'La información es obtenida de la base de datos del SII, y se redacta el certificado para la firma de la Tesorera Municipal.',
      lugar: 'En la Sección Cobranza Administrativa.',
      costo: 'Sí',
      unidad: 'UTM',
      valor: '0,05',
      enLinea: 'Sí',
      tieneEnlaceEnLinea: true,
      enlaces: ['web']
    },
    {
      tramite: 'Certificado de No Deuda, Derechos de Aseo domiciliario',
      descripcion: 'Certificado emitido por los inmuebles que cuenten con un avalúo inferior a 225 UTM.',
      requisitos: 'Rol de la propiedad.',
      documentos: 'Ingresar solicitud en Ventanilla Única.',
      dirigido: 'Tesorería Municipal.',
      etapas: 'La información es obtenida de la base de datos del SII, y se redacta el certificado para la firma de la Tesorera Municipal.',
      lugar: 'En la Sección Cobranza Administrativa.',
      costo: 'Sí',
      unidad: 'UTM',
      valor: '0,05',
      enLinea: 'No',
      tieneEnlaceEnLinea: false,
      enlaces: ['pdf']
    },
    {
      tramite: 'Convenios de Pago',
      descripcion: 'El contribuyente que registre deuda en los derechos municipales como aseo, patente municipal, permiso de circulación, estacionamientos y arriendo de locales comerciales.',
      requisitos: 'Ser mayor de edad y formalizar convenio.',
      documentos: 'Fotocopia de la Cédula de Identidad, Certificado de Residencia. Abonar el 10% de la deuda, el saldo se puede pactar hasta en 12 cuotas. En el caso que quien asuma la deuda no sea el titular de esta, deberá presentar una declaración jurada ante notario.',
      dirigido: 'No aplica.',
      etapas: 'Se formaliza el compromiso de pago, con documentos solicitados a la vista, y es firmado por el interesado y la Tesorera Municipal.',
      lugar: 'Cobranza Administrativa.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      enLinea: 'No',
      tieneEnlaceEnLinea: false,
      enlaces: ['web']
    },
    {
      tramite: 'Beneficio de exención o rebaja por Derechos de Aseo Domiciliario',
      descripcion: 'Es un beneficio para los adultos mayores pensionados o cualquier contribuyente que tenga un puntaje en la ficha de protección social inferior a 11.974 puntos o de rebaja del 50% si la ficha tiene entre 11.975 y 12.500 puntos.',
      requisitos: 'Vivir en la propiedad afecta al pago de este derecho municipal.',
      documentos: 'Fotocopia de la Cédula de Identidad, Certificado de Residencia, Colilla de la Pensión o Ficha de Protección Social.',
      dirigido: 'Adultos mayores y contribuyentes con estratificación baja.',
      etapas: '1.- Ingreso de Solicitud en Ventanilla Única. 2.- Revisión de antecedentes. 3.- Confección de Decreto Alcaldicio. 4.- Emisión de carta con Beneficio y período de exención o rebaja.',
      lugar: 'Cobranza Administrativa.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      enLinea: 'No',
      tieneEnlaceEnLinea: false,
      enlaces: ['web']
    },
    {
      tramite: 'Exención Derechos de Aseo, por pagar patente municipal',
      descripcion: 'Beneficio para los contribuyentes que poseen una patente municipal, en el inmueble donde vivan, pagan este derecho solo en su patente.',
      requisitos: 'Pago patente al día.',
      documentos: 'Fotocopia Cédula de Identidad, Certificado de Residencia, Fotocopia comprobante de pago de los derechos semestrales.',
      dirigido: 'Ventanilla Única y Dirección de Tránsito y Transporte Público.',
      etapas: 'Se solicita la hora en Ventanilla Única. Se cancela licencia, foto y certificado de antecedentes en Tesorería (valor foto $3.900.- y Certificado Antecedentes $1.050.-, los cuales se consideran al momento de cancelar en tesorería, además este valor es cambiado cada 6 meses). Dirección al momento del examen, el valor en dinero para realizar los exámenes psicométrico y médico aprobados los exámenes se emitirá la licencia de conducir.',
      lugar: 'Ventanilla Única, San Pablo 5959, primer piso.',
      costo: 'No',
      unidad: 'No aplica',
      valor: 'No aplica',
      enLinea: 'No',
      tieneEnlaceEnLinea: false,
      enlaces: ['web']
    }
  ];

  return (
    <div className="space-y-4">
      {registros.map((registro) => (
        <article key={registro.tramite} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Dirección Administración y Finanzas · Cobranza</p>
            <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos}</DatoFicha>
            <DatoFicha titulo="A quién está dirigido">{registro.dirigido}</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="Dónde se realiza">{registro.lugar}</DatoFicha>
            <DatoFicha titulo="Tiene costo">{registro.costo}</DatoFicha>
            <DatoFicha titulo="Unidad monetaria">{registro.unidad}</DatoFicha>
            <DatoFicha titulo="Valor del servicio">{registro.valor}</DatoFicha>
            <DatoFicha titulo="Disponible en línea">{registro.enLinea}</DatoFicha>
            <DatoFicha titulo="Enlace al trámite en línea">
              {registro.tieneEnlaceEnLinea ? (
                <a
                  href={enlaceWebCobranza || 'about:blank'}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir trámite en línea"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Enlace web
                </a>
              ) : 'No aplica.'}
            </DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Enlace a mayor información">
                <div className="flex flex-wrap gap-2">
                  {registro.enlaces.map((tipo, index) => (
                    <a
                      key={`${tipo}-${index}`}
                      href={(tipo === 'pdf' ? enlacePdfCobranza : enlaceWebCobranza) || 'about:blank'}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={tipo === 'pdf' ? 'Abrir documento PDF' : 'Abrir enlace web'}
                      className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                    >
                      {tipo === 'pdf'
                        ? <FileDown className="h-4 w-4" aria-hidden="true" />
                        : <ExternalLink className="h-4 w-4" aria-hidden="true" />}
                      {tipo === 'pdf' ? 'Documento PDF' : 'Enlace web'}
                    </a>
                  ))}
                </div>
              </DatoFicha>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

type RegistroPatente = {
  tramite: string;
  descripcion: string;
  requisitos: string;
  documentos: string;
  etapas: string;
  unidad: string;
  valor: string;
  costo: string;
};

const etapasPatenteComercial =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa, se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Aprobada la fiscalización, se decreta la patente. 5. Se asigna número de rol y los cobros respectivos. 6. Se llama al contribuyente para informar retiro de copia del Decreto y pago de la patente en Oficina de Tesorería. 7. Retiro del Decreto Alcaldicio. Nota: Si el capital propio es menor a 200 UTM se paga patente mínima equivalente al 50% de la UTM; de lo contrario se paga 0,0025 del capital propio. El pago es semestral en enero y julio, no se parcializa y se paga el total independiente del mes de obtención. Si no se paga en los plazos, se recarga IPC y multa.';
const documentosComercialPersonaNatural =
  'Persona Natural: fotocopia de cédula de identidad; título de propiedad o contrato de arriendo; certificado SEREMI de Salud cuando corresponda; certificado SAG para venta de comida para mascotas; declaración simple de capital propio; Formulario 4415 de inicio de actividades; informe técnico aprobado de la Dirección de Obras Municipales; fotocopia de patente al día. Persona Jurídica: constitución de sociedad, protocolización, extracto, publicación en el Diario Oficial, RUT de la sociedad, cédulas de socios, título de propiedad o contrato de arriendo, certificados SEREMI y SAG si corresponden, e informe técnico aprobado de la Dirección de Obras Municipales.';
const requisitosComercial =
  '1. Contar con Informe Técnico de la Dirección de Obras Municipales aprobado, dependiendo del giro. 2. Persona Natural o Jurídica. 3. Título de propiedad o, en su defecto, contrato de arriendo de la propiedad. 4. Iniciación de Actividades del Servicio de Impuestos Internos, Formulario N° 4415.';
const documentosCambioPatente =
  'Persona Natural: fotocopia de cédula de identidad; título de propiedad o contrato de arriendo; certificado SEREMI de Salud y certificado SAG si corresponden; Formulario 4415 del SII; informe técnico aprobado de la Dirección de Obras Municipales; fotocopia de la patente al día. Persona Jurídica: constitución de la sociedad, protocolización, extracto, publicación en el Diario Oficial, RUT de la sociedad, cédulas de identidad de los socios, título de propiedad o contrato de arriendo y certificados correspondientes.';
const requisitosCambio =
  '1. Contar con Informe Técnico de la Dirección de Obras Municipales aprobado. 2. Persona Natural o Jurídica. 3. Título de propiedad o contrato de arriendo de la propiedad. 4. Formulario N° 3239 del Servicio de Impuestos Internos, Modificación. 5. Fotocopia de la patente al día.';
const documentosCambioGiro =
  '1. Resolución Sanitaria de la SEREMI de Salud en caso de venta de alimentos perecibles y/o no perecibles. 2. Certificado del Servicio Agrícola y Ganadero para venta de comida para mascotas. 3. Formulario Microempresa Familiar timbrado por Servicio de Impuestos Internos. 4. Calificación de la SEREMI si es taller o fábrica. 5. Fotocopia de la patente al día.';
const etapasCambioGiro =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales; si la documentación no está completa, se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Aprobada la fiscalización, se decreta el cambio de giro. 5. Se llama al contribuyente para informar el retiro de copia del decreto. 6. Retiro del Decreto Alcaldicio. 7. Esta modificación se registra en el próximo pago de patente.';
const requisitosAlcoholes =
  '1. Contar con Informe Técnico de la Dirección de Obras Municipales aprobado para obtener patente de alcoholes. 2. Persona Natural o Jurídica. 3. No mantener antecedentes penales. 4. No ser funcionario público o de las Fuerzas Armadas. 5. Formulario N° 3239 de modificaciones del Servicio de Impuestos Internos.';
const documentosAlcoholes =
  'Persona Natural: fotocopia de cédula de identidad, certificado de residencia, certificado de antecedentes para trámites especiales, certificado SEREMI de Salud, certificado del Servicio Agrícola y Ganadero, contrato de arriendo, opinión de la Junta de Vecinos, declaración jurada del capital, iniciación de actividades Formulario 4415 y fotocopia de cédula de identidad de cada socio. Persona Jurídica: constitución de la sociedad, protocolización, extracto, publicación del Diario Oficial, certificado de antecedentes de los socios y certificados de residencia.';
const etapasAlcoholes =
  'Inicio: 1. Ventanilla Única. 2. Se solicita inspección de Rentas Municipales. 3. Inspección de Carabineros de Chile (plazo 30 días). 4. Revisión de la Dirección de Asesoría Jurídica. 5. El Alcalde remite para tabla del Honorable Concejo. 6. Aprobación o rechazo del Concejo Municipal. 7. Envío del acta de sesión. 8. Si se aprueba, se dicta Decreto Alcaldicio. 9. Se asigna número de rol y cobros respectivos. 10. Se informa al contribuyente. 11. Se notifica y se entrega el Decreto Alcaldicio.';
const unidadAlcoholes =
  'U.T.M. según clasificación establecida en la Ley N° 19.925: Depósito de bebidas alcohólicas, 1 UTM; hoteles, 0,7 UTM y casas de pensiones o residenciales, 0,6 UTM; restaurantes diurnos o nocturnos, 1,2 UTM; cabarés, 3,5 UTM; peñas folclóricas, 3 UTM; cantinas, bares, pubs y tabernas, 2 UTM; establecimientos de expendio de cerveza y sidra, 0,5 UTM; quintas de recreo o servicio al auto, 3,5 UTM; minimercados de comestibles y abarrotes, 1,5 UTM; hoteles, hosterías, moteles o restaurantes de turismo, según clasificación; bodegas elaboradoras o distribuidoras de vinos, licores o cervezas, 3 UTM; casas importadoras de vinos o licores, 0,5 UTM; salones de baile o discotecas, 2 UTM; supermercados de comestibles, 3 UTM.';
const enlaceWebPatentes = '';

const registrosPatentes: RegistroPatente[] = [
  { tramite: 'Patente Comercial Microempresa Familiar', descripcion: 'Petición de una Patente Comercial para trabajar en el domicilio particular.', requisitos: '1. Persona Natural o EIRL. 2. Vivir en la propiedad donde se va a realizar la actividad comercial. 3. Capital propio menor a 1.000 UF.', documentos: '1. Fotocopia cédula de identidad. 2. Fotocopia escritura o contrato de arrendamiento. 3. En caso de no ser titular ni arrendatario, declaración jurada notarial del dueño indicando que el solicitante vive en el domicilio donde se realizará la actividad comercial. 4. Resolución SEREMI de Salud si corresponde. 5. Certificado del Servicio Agrícola y Ganadero si corresponde. 6. Formulario Microempresa Familiar timbrado por Servicio de Impuestos Internos. 7. Calificación de la SEREMI si es taller o fábrica.', etapas: etapasPatenteComercial, unidad: 'U.T.M. o pesos', valor: '', costo: 'Sí' },
  { tramite: 'Cambio de nombre de Patente Comercial Microempresa Familiar', descripcion: 'Cambio de nombre de Patente por fallecimiento del titular.', requisitos: '1. Persona Natural o EIRL. 2. Vivir en la propiedad donde se va a realizar la actividad comercial. 3. Capital propio menor a 1.000 UF. 4. Ser familiar directo del titular.', documentos: `${documentosCambioPatente} Certificado de defunción del titular.`, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Patente Comercial Microempresa Familiar en Copropiedad', descripcion: 'Petición de una Patente Comercial cuando el domicilio particular está en Copropiedad.', requisitos: '1. Persona Natural o EIRL. 2. Vivir en la propiedad donde se va a realizar la actividad comercial. 3. Capital propio menor a 1.000 UF. 4. Contar con autorización de al menos un 80% de los copropietarios.', documentos: '1. Fotocopia cédula de identidad. 2. Fotocopia escritura o contrato de arrendamiento. 3. Declaración jurada notarial del dueño cuando corresponda. 4. Certificado SEREMI de Salud si corresponde. 5. Certificado del Servicio Agrícola y Ganadero si corresponde. 6. Formulario Microempresa Familiar timbrado por Servicio de Impuestos Internos. 7. Calificación de la SEREMI si es taller o fábrica. 8. Contar con autorización de al menos un 80% de los copropietarios; si es dentro de la propiedad, debe solicitar certificado del Comité de Administración de la Copropiedad.', etapas: etapasPatenteComercial, unidad: 'U.T.M. o pesos', valor: '', costo: 'Sí' },
  { tramite: 'Cambio de Giro de Patente Comercial Microempresa Familiar', descripcion: 'Cambio de Giro.', requisitos: '1. Patente al día.', documentos: documentosCambioGiro, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Ampliación de Giro de Patente Comercial Microempresa Familiar', descripcion: 'Ampliación de Giro.', requisitos: '1. Patente al día.', documentos: documentosCambioGiro, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Devolución de Patente Comercial Microempresa Familiar', descripcion: 'Elimina y anula la patente.', requisitos: '1. Patente al día.', documentos: 'Original de la patente al día.', etapas: 'Inicio: 1. Se ingresa la documentación por Ventanilla Única. 2. Se deriva a Patentes Comerciales. 3. Se verifica la inactividad comercial por funcionario fiscalizador. 4. Aprobada la fiscalización, se decreta la devolución. 5. Se anula el rol del sistema de patentes comerciales. 6. Se informa al contribuyente para retiro de copia del Decreto.', unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Patente Profesional', descripcion: 'Petición de una Patente Profesional nueva.', requisitos: '1. Título Profesional. 2. Persona Natural.', documentos: 'Fotocopia de cédula de identidad; fotocopia del título profesional legalizada ante Notario Público; certificado de residencia de la Junta de Vecinos correspondiente al domicilio.', etapas: etapasPatenteComercial, unidad: 'UTM', valor: '0,5', costo: 'Sí' },
  { tramite: 'Patentes Industriales', descripcion: 'Petición de una Patente de Industrias nueva.', requisitos: requisitosComercial, documentos: documentosComercialPersonaNatural, etapas: etapasPatenteComercial, unidad: 'U.T.M. o pesos', valor: '', costo: 'Sí' },
  { tramite: 'Cambio de nombre de Patente Industrial', descripcion: 'Cambio de nombre de Patente Industriales.', requisitos: requisitosCambio, documentos: documentosCambioPatente, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Cambio de Dirección Comercial Patente Industrial', descripcion: 'Petición de Cambio de Dirección Comercial Patente Industriales.', requisitos: requisitosCambio, documentos: documentosCambioPatente, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Cambio de razón social y dirección de Patente Industrial', descripcion: 'Petición de Cambio de Dirección Comercial y Razón Social de la Patente Industriales.', requisitos: requisitosCambio, documentos: documentosCambioPatente, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Cambio de Giro de Patente Industrial', descripcion: 'Cambio de Giro de Patente Industriales.', requisitos: requisitosCambio, documentos: documentosCambioGiro, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Ampliación de Giro de Patente Industrial', descripcion: 'Ampliación de Giro de Patente Industriales.', requisitos: '1. Formulario N° 3239 del Servicio de Impuestos Internos. 2. Fotocopia de la patente al día.', documentos: documentosCambioGiro, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Patente Comercial', descripcion: 'Solicitud de Patente Comercial.', requisitos: requisitosComercial, documentos: documentosComercialPersonaNatural, etapas: etapasPatenteComercial, unidad: 'U.T.M. o pesos', valor: '', costo: 'Sí' },
  { tramite: 'Patente Comercial Provisoria', descripcion: 'Solicitud de Patente Comercial Provisoria.', requisitos: requisitosComercial, documentos: documentosComercialPersonaNatural, etapas: etapasPatenteComercial, unidad: 'U.T.M. o pesos', valor: '', costo: 'Sí' },
  { tramite: 'Cambio de nombre de Patente Comercial', descripcion: 'Solicitud Cambio de nombre de Patente Comercial.', requisitos: requisitosCambio, documentos: documentosCambioPatente, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Cambio de Dirección Patente Comercial', descripcion: 'Solicitud de Cambio de Dirección de Patente Comercial.', requisitos: requisitosCambio, documentos: documentosCambioPatente, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Cambio de razón social y dirección de Patente Comercial', descripcion: 'Solicitud de Cambio de Dirección Comercial y Razón Social de la Patente Comercial.', requisitos: requisitosCambio, documentos: documentosCambioPatente, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Cambio de Giro de Patente Comercial', descripcion: 'Cambio de Giro de Patente Comercial.', requisitos: requisitosCambio, documentos: documentosCambioGiro, etapas: etapasCambioGiro, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Ampliación de Giro de Patente Comercial', descripcion: 'Ampliación de Giro de Patente Comercial.', requisitos: '1. Formulario N° 3239 del Servicio de Impuestos Internos. 2. Fotocopia de la patente al día.', documentos: documentosCambioGiro, etapas: etapasPatenteComercial, unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Patente de Instalación de Actividades Circenses', descripcion: 'Este se destina a los giros relacionados a la actividad Circenses y es por temporada.', requisitos: '1. Persona Natural o Jurídica. 2. Contar con Proyecto de Seguridad Vial aprobado por la Dirección de Tránsito y Transporte Público. 3. Contar con Informe Técnico de la Dirección de Obras Municipales aprobado.', documentos: 'No se indican documentos requeridos adicionales en la captura.', etapas: 'Inicio: 1. Se ingresa la documentación por Ventanilla Única si es original de la patente; de lo contrario, carta en Oficina de Partes e Informaciones. 2. Se deriva a Patentes Comerciales. 3. Se deriva a Fiscalización para verificar la actividad comercial. 4. Si el informe es positivo, se confecciona decreto que elimina y anula la patente. 5. Se notifica al contribuyente. 6. Retiro del Decreto.', unidad: 'No aplica', valor: 'No aplica', costo: 'No' },
  { tramite: 'Patente de alcoholes', descripcion: 'Otorgamiento de nuevas Patentes de Alcoholes clasificadas en letras D y O, según las zonas de la comuna establecidas en la Ley N° 19.925.', requisitos: requisitosAlcoholes, documentos: documentosAlcoholes, etapas: etapasAlcoholes, unidad: unidadAlcoholes, valor: '', costo: 'Sí' },
  { tramite: 'Cambio de nombre y razón social de Patente de Alcoholes', descripcion: 'Cambio de nombre y razón social de Patente de Alcoholes.', requisitos: requisitosAlcoholes, documentos: documentosAlcoholes, etapas: etapasAlcoholes, unidad: unidadAlcoholes, valor: '', costo: 'Sí' },
  { tramite: 'Cambio de Dirección Comercial Patente de Alcoholes', descripcion: 'Traslado de Patente de Alcoholes.', requisitos: requisitosAlcoholes, documentos: documentosAlcoholes, etapas: etapasAlcoholes, unidad: unidadAlcoholes, valor: '', costo: 'Sí' },
  { tramite: 'Cambio de razón social y dirección de Patente de Alcoholes', descripcion: 'Hacer traslado y cambio de nombre.', requisitos: '1. La que debía ser otorgada antes del año 2004. 2. Contar con Informe Técnico de la Dirección de Obras Municipales aprobado para obtener patente de alcoholes. 3. Persona Natural o Jurídica. 4. No mantener antecedentes penales. 5. No estar afecto al art. 4 de la Ley N° 19.925 de Alcoholes. 6. Formulario N° 3239 de modificaciones del Servicio de Impuestos Internos.', documentos: documentosAlcoholes, etapas: etapasAlcoholes, unidad: unidadAlcoholes, valor: '', costo: 'Sí' },
  { tramite: 'Renovación Patente de Alcoholes', descripcion: 'Presentación al Honorable Concejo.', requisitos: 'Renovación de las patentes de alcoholes: 1. No mantener antecedentes penales. 2. No ser funcionario público o de las Fuerzas Armadas. 3. La persona titular, arrendataria y/o administradora del local.', documentos: '1. Certificado de antecedentes para trámites especiales. 2. Declaración Jurada Notarial art. 4 de la Ley 19.925.', etapas: 'Una vez reunidos los antecedentes de cada una de las patentes se debe: 1. Preparar oficio a cada una de las Juntas de Vecinos para que la directiva emita su opinión. 2. Se debe presentar listado al Sr. Alcalde para ser enviado al Honorable Concejo. 3. Se adjuntan antecedentes de tenencia. 4. Envío del Acta de Sesión del Concejo Municipal donde se aprueba o rechaza. 5. Se dicta Decreto Alcaldicio. 6. Se llama al contribuyente por teléfono. 7. Se notifica y se entrega el Decreto Alcaldicio.', unidad: unidadAlcoholes, valor: '', costo: 'No' },
  { tramite: 'Devolución Patente de Alcoholes', descripcion: 'Sin actividad comercial.', requisitos: '1. Patente de alcoholes y comercial.', documentos: 'Comprobante de pago de la última patente al día.', etapas: 'Inicio: 1. Se ingresa la documentación Ventanilla Única con la patente original. 2. Se deriva a Patentes Comerciales. 3. Se verifica la inactividad comercial por funcionario fiscalizador. 4. Se dicta Decreto Alcaldicio donde se caduca y elimina el Rol del sistema. 5. Se notifica al contribuyente para entrega del Decreto Alcaldicio.', unidad: 'No aplica', valor: 'No aplica', costo: 'No' }
];

const requisitosPermisoFerias =
  '1. Persona Natural. 2. Residencia en la Comuna de Lo Prado. 3. Se obtendrá cupo según orden de llegada a la postulación.';
const documentosPermisoFerias =
  '1. Fotocopia de cédula de identidad. 2. Certificado de Residencia de la Junta de Vecinos. 3. Certificado de Ficha de Protección Social. 4. Certificado de Antecedentes.';
const etapasPermisoFerias =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única para postulación. 2. Se envía a Patentes Comerciales; si la documentación no está completa, se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. La postulación queda en lista de espera. 5. Se cita al contribuyente para informar la obtención del puesto. 6. Si el giro necesita Resolución SEREMI, se entrega certificado de emplazamiento por la Oficina de Patentes Comerciales. 7. Entregar Resolución SEREMI aprobada, si corresponde, fotocopia de cédula, certificados de residencia, ficha de protección social y antecedentes. 8. Confección de Decreto Alcaldicio del permiso. 9. Se cita por teléfono para informar retiro del Decreto y pago en Tesorería. 10. Retiro del Decreto Alcaldicio.';
const etapasAmpliacionGiroPersa =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única para su devolución. 3. Se deriva a la Oficina de Fiscalización. 4. Ingresa informe de inspección de la Oficina de Fiscalización. 5. Si la ampliación de giro necesita Resolución SEREMI, se entrega certificado de emplazamiento por la Oficina de Patentes Comerciales. 6. Confección de Decreto Alcaldicio del Permiso de Persas Los Tamarindos y Santa Marta. 7. Se cita al contribuyente por teléfono para informar retiro de copia del Decreto.';
const etapasDevolucionPersa =
  'Inicio: 1. Se ingresa documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Se confecciona Decreto Alcaldicio de otorgamiento del Permiso de Persa Los Tamarindos y/o Santa Marta. 5. Se notifica al contribuyente por vía telefónica para el retiro de copia del Decreto Alcaldicio o, de lo contrario, se notificará vía correo por carta certificada.';
const etapasCambioGiroFeria =
  'Inicio: 1. Se ingresa la solicitud en Ventanilla Única, ingresando fotocopia del permiso al día. 2. Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única para su devolución. 3. Se deriva a la Oficina de Fiscalización. 4. Se genera informe de inspección. 5. Si el giro necesita Resolución SEREMI, se entrega certificado de emplazamiento por la Oficina de Patentes Comerciales. 6. Confección de Decreto Alcaldicio del Permiso de Ferias Libres. 7. Se cita al contribuyente vía telefónica para informar retiro de copia del Decreto.';
const etapasAmpliacionFeria =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única, ingresando fotocopia del permiso con pago al día. 2. Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Ingresa informe de inspección de la Oficina de Fiscalización. 5. Si el giro necesita Resolución SEREMI, se entrega certificado de emplazamiento por la Oficina de Patentes Comerciales. 6. Confección de Decreto Alcaldicio de otorgamiento del Permiso de Ferias Libres. 7. Se cita al contribuyente vía telefónica para informar retiro de copia del Decreto.';
const requisitosPermisoPersa =
  '1. Persona Natural. 2. Residencia en la Comuna de Lo Prado. 3. Se obtendrá el cupo de las postulaciones según orden de llegada para el permiso del Persa Los Tamarindos y/o Santa Marta.';
const documentosPermisoPersa =
  '1. Fotocopia de cédula de identidad. 2. Certificado de Residencia de la Junta de Vecinos. 3. Certificado de Ficha de Protección Social. 4. Certificado de Antecedentes.';
const etapasPermisoPersa =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única para postulación a postura Persas Los Tamarindos y/o Santa Marta. 2. Se envía a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Esta postulación pasa a una Lista de espera. 5. Se cita al contribuyente para informar la obtención del puesto. 6. Si el giro necesita Resolución SEREMI, se entrega certificado de emplazamiento por la Oficina de Patentes Comerciales. 7. Entregar Resolución SEREMI aprobada, si corresponde, fotocopia de cédula, certificado de residencia, ficha de protección social y antecedentes en Oficina de Patentes Comerciales. 8. Confección de Decreto Alcaldicio del Permiso de Persas Los Tamarindos o Santa Marta. 9. Se cita al contribuyente para informar retiro de copia del Decreto y pago en Tesorería. 10. Retiro del Decreto Alcaldicio. Nota: Renovable en los meses de enero y julio.';
const etapasPermisoKiosco =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se envía a Patentes Comerciales; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Ingresa informe de inspección a la Oficina de Fiscalización. 5. Se remite informe, croquis y solicitud a la Dirección de Obras Municipales. 6. Se solicita emplazamiento a la Dirección de Obras Municipales. 7. Si el emplazamiento es favorable se cita al contribuyente. 8. Si el giro corresponde a manipulación de alimentos se entrega copia del emplazamiento para la SEREMI. 9. Entregar Resolución SEREMI aprobada, cédula, certificado de residencia, ficha de protección social y antecedentes en Oficina de Patentes Comerciales. 10. Confección de Decreto Alcaldicio del Permiso de Kiosco. 11. Se cita al contribuyente para informar retiro del Decreto y pago en Tesorería. 12. Retiro del Decreto Alcaldicio. Nota: el pago se calcula según los metros cuadrados utilizados y de acuerdo a la ubicación.';
const etapasCambioGiroKiosco =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Ingresa informe de inspección a la Oficina de Fiscalización. 5. Si el cambio de giro corresponde a manipulación de alimentos, se solicita emplazamiento a la Dirección de Obras Municipales. 6. Si el emplazamiento es favorable se cita al contribuyente para hacer entrega de copia del emplazamiento para la Resolución SEREMI. 7. Confección de Decreto Alcaldicio de cambio de giro de Kiosco. 8. Se cita al contribuyente para informar retiro de copia del Decreto.';
const etapasAmpliacionKiosco =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Ingresa informe de inspección de la Oficina de Fiscalización. 5. Si la ampliación de giro corresponde a manipulación de alimentos, se entrega copia del emplazamiento para la Resolución SEREMI. 6. Entregar Resolución SEREMI aprobada, fotocopia de cédula de identidad, certificado de residencia, ficha de protección social y certificado de antecedentes en Oficina de Patentes Comerciales. 7. Confección de Decreto Alcaldicio del Permiso de Kiosco. 8. Se llama al contribuyente para informar retiro de copia del Decreto y cancelación del Permiso de Kiosco en Oficina de Tesorería. 9. Retiro del Decreto Alcaldicio.';
const etapasDevolucionKiosco =
  'Inicio: 1. Se ingresa documentación en Ventanilla Única. 2. Se envía a Patentes Comerciales; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Ingresa informe de inspección de la Oficina de Fiscalización. 5. Confección de Decreto Alcaldicio del Permiso de Kiosco. 6. Se cita al contribuyente vía telefónica para informar retiro de copia del Decreto.';
const etapasPermisoEstacionado =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Se remite informe de fiscalización y croquis con ubicación aceptada a la Dirección de Obras para su emplazamiento. 5. Si el emplazamiento es favorable, se cita al contribuyente para retirar copia y solicitar Resolución SEREMI. 6. Ingresar documentos requeridos. 7. Confección de Decreto Alcaldicio. 8. Se llama al contribuyente para informar retiro del Decreto y pago en Tesorería. Nota: el cobro se realiza según el metraje autorizado por Ordenanza Municipal, correspondiente a 2 x 1 mts.';
const etapasCambioUbicacionEstacionado =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Se remite informe de fiscalización y croquis con ubicación aceptada a la Dirección de Obras para su emplazamiento. 5. Si el emplazamiento fuese favorable se cita al contribuyente para retirar copia para solicitar Resolución SEREMI. 6. Confección de Decreto Alcaldicio. 7. Se llama al contribuyente para informar retiro de copia del Decreto. 8. Esta modificación se registrará en el próximo pago de patente.';
const etapasCambioGiroEstacionado =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Se remite informe de fiscalización y croquis con ubicación aceptada a la Dirección de Obras para su respectivo emplazamiento. 5. Si el emplazamiento fuese favorable se cita al contribuyente para retirar copia para solicitar Resolución SEREMI. 6. Confección de Decreto Alcaldicio. 7. Se llama al contribuyente para informar retiro de copia del Decreto. 8. Esta modificación se registrará en el próximo pago de patente.';
const etapasDevolucionEstacionado =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales para su tramitación. 3. Se deriva a la Oficina de Fiscalización para verificar la inactividad. 4. Aprobada la fiscalización se decreta la devolución. 5. Se anula el rol del sistema de patentes comerciales. 6. Se llama al contribuyente para informar retiro de copia del Decreto.';
const etapasDevolucionPermiso =
  'Inicio: 1. Se ingresa la documentación en Ventanilla Única. 2. Se deriva a Patentes Comerciales; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización para verificar la inactividad. 4. Aprobada la fiscalización, se decreta la devolución. 5. Se anula el rol del sistema de patentes comerciales. 6. Se llama al contribuyente para informar retiro de copia del Decreto.';
const enlaceWebPermisos = '';

type RegistroPermiso = RegistroPatente & { lugar: string; disponible: string };

const registrosPermisos: RegistroPermiso[] = [
  {
    tramite: 'Permiso de Persa Los Tamarindos y/o Santa Marta',
    descripcion: 'Petición de un Permiso nuevo de Persa Los Tamarindos y/o Santa Marta. Son permisos precarios, no se pueden vender ni transferir.',
    requisitos: requisitosPermisoPersa,
    documentos: documentosPermisoPersa,
    etapas: etapasPermisoPersa,
    lugar: 'Ventanilla Única',
    costo: 'Sí',
    unidad: 'UTM',
    valor: '',
    disponible: 'No'
  },
  {
    tramite: 'Cambio de Giro Permiso de Persa Los Tamarindos y/o Santa Marta',
    descripcion: 'Petición de cambio de Giro Permiso de Persa Los Tamarindos y/o Santa Marta.',
    requisitos: '1. Tener permiso vigente con pago al día. 2. Hacer devolución del permiso en los meses de junio y diciembre.',
    documentos: '1. Fotocopia Permiso al día.',
    etapas: 'Inicio: 1. Se ingresa la solicitud en Ventanilla Única, ingresando fotocopia del permiso al día. 2. Se deriva a Patentes Comerciales para su tramitación; si la documentación no está completa se devuelve a Ventanilla Única. 3. Se deriva a la Oficina de Fiscalización. 4. Se genera informe de inspección. 5. Si al cambio de giro necesita Resolución SEREMI, se entrega certificado de emplazamiento. 6. Confección de Decreto Alcaldicio del Permiso de Persas Los Tamarindos o Santa Marta. 7. Se cita al contribuyente por teléfono para informar retiro de copia del Decreto.',
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Ampliación de Giro Permiso de Persa Los Tamarindos y/o Santa Marta',
    descripcion: 'Ampliación de Giro Permiso de Persa Los Tamarindos y/o Santa Marta.',
    requisitos: '1. Tener Permiso Vigente. 2. Tener pago del permiso al día.',
    documentos: '1. Fotocopia Permiso al día.',
    etapas: etapasAmpliacionGiroPersa,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Acepta devolución y anula Rol, Caduca Permiso y Anula Rol de Persa Los Tamarindos y/o Santa Marta',
    descripcion: 'Acepta devolución y anula Rol, Caduca Permiso y Anula Rol de Persa Los Tamarindos y/o Santa Marta por causa de reiteradas inasistencias injustificadas y por no pago del permiso.',
    requisitos: '1. Tener permiso vigente con pago al día. 2. Hacer devolución del permiso en los meses de junio y diciembre.',
    documentos: 'Fotocopia de Cédula de Identidad. Comprobante de Permiso con pago al día.',
    etapas: etapasDevolucionPersa,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Permiso de Kiosco',
    descripcion: 'Petición de un Permiso Kiosco nueva, son permisos precarios, no se pueden vender ni transferir.',
    requisitos: '1. Persona Natural. 2. Residencia en la Comuna de Lo Prado. 3. Croquis de lugar a instalar kiosco. 4. Estructura de Kiosco medidas 2X2.',
    documentos: '1. Se presenta croquis con ubicación del Permiso de Kiosco; si este es aprobado, se debe ingresar en Ventanilla Única. 2. Fotocopia cédula de identidad. 3. Certificado de Residencia de la Junta de Vecinos. 4. Certificado de Ficha de Protección Social. 5. Certificado Antecedentes.',
    etapas: etapasAmpliacionKiosco,
    lugar: 'Ventanilla Única', costo: 'Sí', unidad: 'UTM*M2', valor: '0,04', disponible: 'No'
  },
  {
    tramite: 'Cambio de Giro Permiso Kiosco',
    descripcion: 'Petición de cambio Giro Permiso Kiosco.',
    requisitos: '1. Tener Permiso Vigente. 2. Permiso al día.',
    documentos: '1. Fotocopia de Cédula de Identidad. 2. Permiso al día.',
    etapas: etapasCambioGiroKiosco,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Ampliación de Giro Permiso Kiosco',
    descripcion: 'Ampliación de Giro Permiso Kiosco.',
    requisitos: '1. Tener Permiso Vigente.',
    documentos: '1. Fotocopia Permiso al día.',
    etapas: etapasPermisoKiosco,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Acepta devolución y anula rol. Caduca permiso y anula rol.',
    descripcion: 'Caduca y Anula Permiso de Kiosco por Inactividad Comercial, por no pago del permiso.',
    requisitos: '1. Tener Permiso de Kiosco al día.',
    documentos: '1. Fotocopia de Cédula de Identidad. 2. Fotocopia de Permiso Municipal de Kiosco.',
    etapas: etapasDevolucionKiosco,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Permiso de Ferias Libres',
    descripcion: 'Petición de un Permiso de Ferias Libres nueva, son permisos precarios, no se pueden vender ni transferir.',
    requisitos: requisitosPermisoFerias,
    documentos: documentosPermisoFerias,
    etapas: `${etapasPermisoFerias} Nota: se puede postular hasta un máximo de 3 Ferias. El pago del servicio de acuerdo a Decreto Alcaldicio N° 2289/2010: servicios de baño químico 15% UTM x Feria Libre, Bien Nacional de Uso Público 4% UTM x m2 y servicio de aseo $3.500, pagados en enero y julio.`,
    lugar: 'Ventanilla Única', costo: 'Sí', unidad: 'UTM', valor: '0,5', disponible: 'No'
  },
  {
    tramite: 'Cambio de Giro Permiso de Ferias Libres',
    descripcion: 'Petición de Giro Permiso de Ferias Libres.',
    requisitos: '1. Tener Permiso Vigente.',
    documentos: '1. Fotocopia Permiso al día.',
    etapas: etapasCambioGiroFeria,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Ampliación de Giro Permiso de Ferias Libres',
    descripcion: 'Ampliación de Giro Permiso de Ferias Libres.',
    requisitos: '1. Tener Permiso Vigente.',
    documentos: '1. Fotocopia Permiso al día.',
    etapas: etapasAmpliacionFeria,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Ferias Navideñas',
    descripcion: 'Postulación a Ferias Navideñas.',
    requisitos: '1. Persona Natural. 2. Residencia en la Comuna de Lo Prado. 3. Ser seleccionado a postulación de ferias Navideñas.',
    documentos: '1. Fotocopia cédula de identidad. 2. Certificado de Residencia. 3. Certificado de Ficha de Protección Social. 4. Certificado Antecedente.',
    etapas: 'Inicio: 1. Se ingresa la documentación en Ventanilla Única para postulación a postura ferias Navideñas. 2. Se envía a Patentes Comerciales; si la documentación no está completa, se devuelve a Ventanilla Única. 3. Si el giro necesita Resolución SEREMI, el contribuyente debe presentarse a curso de capacitación de manipulación de alimento. 4. Entrega de certificación de asistencia del curso, si corresponde. 5. Citación según orden de postulación para asignación de puesto. 6. Se genera el cobro del permiso. Nota: Para mayor información ver Ordenanza de Ferias Navideñas.',
    lugar: 'Ventanilla Única', costo: 'Sí', unidad: 'UTM', valor: '0,6', disponible: 'No'
  },
  {
    tramite: 'Devolución, Anula, Caduca o Elimina Permiso de Ferias Libres.',
    descripcion: 'Caduca y Anula Permiso de Ferias Libres por causa de reiteradas inasistencias injustificadas y por no pago del permiso.',
    requisitos: '1. Tener permiso municipal vigente y pago al día. 2. Hacer devolución del permiso en los meses de junio y diciembre.',
    documentos: '1. Fotocopia de Cédula de Identidad. 2. Fotocopia de permiso municipal.',
    etapas: etapasDevolucionPermiso,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Permiso Estacionado',
    descripcion: 'Solicitud de permiso estacionado en Bien Nacional de uso público.',
    requisitos: '1. Persona Natural. 2. Residencia en la Comuna de Lo Prado. 3. No tener otra patente en la comuna.',
    documentos: '1. Croquis ubicación solicitada; si es aprobado se debe ingresar. 2. Fotocopia cédula de identidad. 3. Certificado de Residencia. 4. Certificado de antecedentes. 5. Resolución SEREMI en caso de ser venta de alimentos.',
    etapas: etapasCambioUbicacionEstacionado,
    lugar: 'Ventanilla Única', costo: 'Sí', unidad: 'UTM*M2', valor: '0,1', disponible: 'No'
  },
  {
    tramite: 'Cambio de Ubicación Permiso Estacionado',
    descripcion: 'Solicitud de Cambio de Ubicación.',
    requisitos: '1. Permiso al día.',
    documentos: '1. Croquis ubicación solicitada.',
    etapas: etapasCambioGiroEstacionado,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Cambio de Giro Permiso Estacionado',
    descripcion: 'Solicitud cambio de Giro.',
    requisitos: '1. Tener Permiso Vigente.',
    documentos: '1. Fotocopia Permiso al día.',
    etapas: etapasCambioGiroEstacionado,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Ampliación de Giro Permiso Estacionado',
    descripcion: 'Ampliación de Giro Permiso Estacionado.',
    requisitos: '1. Tener Permiso Vigente.',
    documentos: '1. Fotocopia Permiso al día.',
    etapas: etapasPermisoEstacionado,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  },
  {
    tramite: 'Devolución de Permiso Estacionado',
    descripcion: 'Elimina y anula el permiso.',
    requisitos: '1. Permiso al día.',
    documentos: '1. Original del permiso al día.',
    etapas: etapasDevolucionEstacionado,
    lugar: 'Ventanilla Única', costo: 'No', unidad: 'No Aplica', valor: 'No aplica', disponible: 'No'
  }
];

function VistaPermisos() {
  return (
    <div className="space-y-4">
      {registrosPermisos.map((registro) => (
        <article key={registro.tramite} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Dirección Administración y Finanzas · Rentas · Permisos</p>
            <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos}</DatoFicha>
            <DatoFicha titulo="A quién está dirigido">Patentes Comerciales</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="Dónde se realiza">{registro.lugar}</DatoFicha>
            <DatoFicha titulo="Tiene costo">{registro.costo}</DatoFicha>
            <DatoFicha titulo="Unidad monetaria">{registro.unidad}</DatoFicha>
            <DatoFicha titulo="Valor del servicio">{registro.valor}</DatoFicha>
            <DatoFicha titulo="Disponible en línea">{registro.disponible}</DatoFicha>
            <DatoFicha titulo="Enlace al trámite en línea">No aplica.</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Enlace a mayor información">
                <a
                  href={enlaceWebPermisos || 'about:blank'}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir enlace web: ${registro.tramite}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Enlace web
                </a>
              </DatoFicha>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function VistaPatentes() {
  return (
    <div className="space-y-4">
      {registrosPatentes.map((registro) => (
        <article key={registro.tramite} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Dirección Administración y Finanzas · Rentas · Patentes</p>
            <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos}</DatoFicha>
            <DatoFicha titulo="A quién está dirigido">Patentes Comerciales.</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="Dónde se realiza">Ventanilla Única.</DatoFicha>
            <DatoFicha titulo="Tiene costo">{registro.costo}</DatoFicha>
            <DatoFicha titulo="Unidad monetaria">{registro.unidad}</DatoFicha>
            <DatoFicha titulo="Valor del servicio">{registro.valor}</DatoFicha>
            <DatoFicha titulo="Disponible en línea">No.</DatoFicha>
            <DatoFicha titulo="Enlace al trámite en línea">No aplica.</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Enlace a mayor información">
                <a
                  href={enlaceWebPatentes || 'about:blank'}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir enlace web: ${registro.tramite}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Enlace web
                </a>
              </DatoFicha>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

const registrosEmprendimiento: RegistroEmprendimiento[] = [
  {
    tramite: 'postulación FOSIS',
    descripcion: 'Fondo Solidario de Inversión Social, está dirigido a personas Naturales que inicie o que realice actividad comercial',
    requisitos: (
      <ul className="list-disc space-y-1 pl-3">
        <li>Ser residente de la Comuna de Lo Prado.</li>
        <li>Contar con Ficha Protección Social.</li>
        <li>Puntaje máximo 8500 puntos. Este puntaje está determinado por FOSIS y puede variar.</li>
      </ul>
    ),
    documentos: 'Cédula de Identidad',
    etapas: (
      <ul className="list-disc space-y-1 pl-3">
        <li>Se inicia por la solicitud realizada en forma presencial.</li>
        <li>Ingresa al sitio web del FOSIS.</li>
        <li>Se ingresa RUT; si la persona califica por el programa se ingresan los datos solicitados por el sitio web, de lo contrario no se realiza la postulación. Para reclamar por no ingreso se debe dirigir a Teatinos 653, Oficina del FOSIS.</li>
      </ul>
    ),
    enlaceMayorInformacion: ''
  },
  {
    tramite: 'Postulación a Sercotec',
    descripcion: (
      <>
        Los programas desarrollados por <a className="text-blue-700 underline" href="https://www.sercotec.cl/" target="_blank" rel="noreferrer">SERCOTEC</a> con Capital Semilla Emprendimiento, Empresa, Abeja y Gourmet, están dirigidos a personas naturales y/o jurídicas que inicien o que realicen actividad comercial, que solicitan apoyo económico y/o tecnológico, quienes deben postular de acuerdo a las necesidades y la oferta que entrega el organismo a través de diversos programas en diferentes fechas del año.
      </>
    ),
    requisitos: (
      <ul className="list-disc space-y-1 pl-3">
        <li>Ser persona natural o jurídica.</li>
        <li>Tener correo electrónico.</li>
      </ul>
    ),
    documentos: '-',
    etapas: (
      <ul className="list-disc space-y-1 pl-3">
        <li>Se inicia la solicitud realizada en forma presencial.</li>
        <li>Ingresa al sitio web de <a className="text-blue-700 underline" href="https://www.sercotec.cl/" target="_blank" rel="noreferrer">www.sercotec.cl</a>.</li>
        <li>Se registra la persona y se envía clave al correo personal.</li>
        <li>Nota: Las postulaciones son realizadas por el beneficiario y están sujetas a períodos, proyectos y evaluación previa.</li>
      </ul>
    ),
    enlaceMayorInformacion: 'https://www.sercotec.cl/'
  },
  {
    tramite: 'SENCE Bono Empresa y Negocio',
    descripcion: 'El SENCE está dirigido a la capacitación de las personas para proyección laboral independiente',
    requisitos: (
      <ul className="list-disc space-y-1 pl-3">
        <li>Ser persona natural o jurídica.</li>
        <li>Tener correo electrónico.</li>
        <li>Electrónico - inicio actividades y/o boleta honorario.</li>
        <li>Contar con equipo móvil.</li>
      </ul>
    ),
    documentos: 'Cédula de Identidad',
    etapas: (
      <ul className="list-disc space-y-1 pl-3">
        <li>Se inicia por la solicitud realizada en forma presencial.</li>
        <li>Ingresa al sitio web de <a className="text-blue-700 underline" href="https://www.sence.cl/" target="_blank" rel="noreferrer">www.Sence.cl</a>.</li>
        <li>Se hace el ingreso de datos.</li>
        <li>Si el beneficiario es aprobado se completa ficha de postulación.</li>
        <li>Envío de clave al equipo móvil.</li>
        <li>Nota: El beneficiario debe ingresar clave de ingreso para la aceptación del respectivo Bono de capacitación.</li>
      </ul>
    ),
    enlaceMayorInformacion: 'https://www.sence.cl/'
  }
];

function DatoFicha({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{titulo}</h4>
      <div className="text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

function SelectorTipologia({
  id,
  valor,
  onChange
}: {
  id: string;
  valor: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs sm:flex-row sm:items-center">
      <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        <Filter className="h-4 w-4 text-blue-600" aria-hidden="true" />
        Filtrar por tipología
      </span>
      <select
        id={id}
        value={valor}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:ml-auto sm:max-w-xl"
      >
        {tipologias.map((opcion) => <option key={opcion} value={opcion}>{opcion}</option>)}
      </select>
    </div>
  );
}

function VistaObrasMunicipales() {
  return (
    <div className="space-y-4">
      {registrosObras.map((registro) => (
        <article key={registro.tramite} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Dirección Obras Municipal</p>
            <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion || 'No se indica en la ficha.'}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos || 'No se indican documentos.'}</DatoFicha>
            <DatoFicha titulo="A quién está dirigido">Dirección de Obras Municipal.</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="Dónde se realiza">{registro.lugar}</DatoFicha>
            <DatoFicha titulo="Tiene costo (Sí/No)">{registro.costo}</DatoFicha>
            <DatoFicha titulo="Unidad monetaria">{registro.unidad}</DatoFicha>
            <DatoFicha titulo="Valor del servicio">{registro.valor}</DatoFicha>
            <DatoFicha titulo="¿Está disponible en línea? (Sí/No)">No</DatoFicha>
            <DatoFicha titulo="Enlace al trámite en línea correspondiente">No aplica</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Enlace a mayor información (existente)">
                <a
                  href="about:blank"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Enlace web
                </a>
              </DatoFicha>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function VistaLicenciasConducir({ selectedIndex }: { selectedIndex?: number } = {}) {
  return (
    <div className="space-y-4">
      {registrosLicenciaConducir.filter((_, index) => selectedIndex === undefined || index === selectedIndex).map((registro) => (
        <article key={registro.tramite} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Dirección Tránsito y Transporte Público</p>
            <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos}</DatoFicha>
            <DatoFicha titulo="A quién está dirigido">Dirección de Tránsito y Transporte Público.</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="¿Dónde se realiza?">{registro.lugar}</DatoFicha>
            <DatoFicha titulo="Tiene costo (Sí/No)">{registro.costo}</DatoFicha>
            <DatoFicha titulo="Unidad monetaria">{registro.unidad}</DatoFicha>
            <DatoFicha titulo="Valor del servicio">{registro.valor}</DatoFicha>
            <DatoFicha titulo="¿Está disponible en línea? (Sí/No)">{registro.disponible}</DatoFicha>
            <DatoFicha titulo="Enlace al trámite en línea correspondiente">
              {registro.enlaceTramite === 'No aplica' ? (
                'No aplica'
              ) : (
                <a
                  href={registro.enlaceTramite || 'about:blank'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Enlace web
                </a>
              )}
            </DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Enlace a mayor información (existente)">
                {registro.enlacesInformacion ? (
                  <ul className="list-disc space-y-1 pl-4">
                    {registro.enlacesInformacion.map((enlace) => (
                      <li key={enlace.etiqueta}>
                        <a
                          href={enlace.href || 'about:blank'}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                        >
                          {enlace.etiqueta}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <a
                    href="about:blank"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                  >
                    <FileDown className="h-4 w-4" aria-hidden="true" />
                    Ver documento PDF
                  </a>
                )}
              </DatoFicha>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function VistaPermisosCirculacion({ selectedIndex }: { selectedIndex?: number } = {}) {
  return (
    <div className="space-y-4">
      {registrosPermisoCirculacion.filter((_, index) => selectedIndex === undefined || index === selectedIndex).map((registro) => (
        <article key={`${registro.tramite}-${registro.requisitos}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Dirección Tránsito y Transporte Público</p>
            <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos}</DatoFicha>
            <DatoFicha titulo="A quién está dirigido">Dirección de Tránsito y Transporte Público.</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="¿Dónde se realiza?">{registro.lugar}</DatoFicha>
            <DatoFicha titulo="Tiene costo (Sí/No)">{registro.costo}</DatoFicha>
            <DatoFicha titulo="Unidad monetaria">{registro.unidad}</DatoFicha>
            <DatoFicha titulo="Valor del servicio">{registro.valor || 'No especificado en la ficha.'}</DatoFicha>
            <DatoFicha titulo="¿Este trámite está disponible en línea? (Sí/No)">{registro.disponible}</DatoFicha>
            <DatoFicha titulo="Enlace al trámite en línea correspondiente">
              {registro.enlaceTramite === 'Solo Presencial' ? (
                'Solo Presencial'
              ) : (
                <a
                  href={registro.enlaceTramite || 'about:blank'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Enlace web
                </a>
              )}
            </DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Enlace a mayor información (existente)">
                <a
                  href="about:blank"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Enlace web
                </a>
              </DatoFicha>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function VistaTecnicoTransito({ selectedIndex }: { selectedIndex?: number } = {}) {
  return (
    <div className="space-y-4">
      {registrosTecnicoTransito.filter((_, index) => selectedIndex === undefined || index === selectedIndex).map((registro) => (
        <article key={registro.tramite} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Dirección Tránsito y Transporte Público</p>
            <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos}</DatoFicha>
            <DatoFicha titulo="A quién está dirigido">Al Director de Tránsito.</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="¿Dónde se realiza?">{registro.lugar}</DatoFicha>
            <DatoFicha titulo="Tiene costo (Sí/No)">{registro.costo}</DatoFicha>
            <DatoFicha titulo="Unidad monetaria">{registro.unidad}</DatoFicha>
            <DatoFicha titulo="Valor del servicio">{registro.valor}</DatoFicha>
            <DatoFicha titulo="¿Este trámite está disponible en línea? (Sí/No)">{registro.disponible}</DatoFicha>
            <DatoFicha titulo="Enlace al trámite en línea correspondiente">{registro.enlaceTramite}</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Enlace a mayor información (existente)">
                <a
                  href="about:blank"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  Ver documento PDF
                </a>
              </DatoFicha>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function VistaDesarrolloComunitario({
  registros,
  departamento,
  mostrarEnMantencion = false
}: {
  registros: RegistroDesarrolloComunitario[];
  departamento: string;
  mostrarEnMantencion?: boolean;
}) {
  const esMedioAmbiente = ['Medio Ambiente', 'Aseo', 'Áreas Verdes', 'Higiene Ambiental'].includes(departamento);

  if (registros.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600">
        En mantención
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {registros.map((registro) => (
        <article key={registro.tramite} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              {esMedioAmbiente ? 'Dirección Medio Ambiente y Operaciones' : 'Dirección de Desarrollo Comunitario'} · {departamento}
            </p>
            <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos}</DatoFicha>
            <DatoFicha titulo="A quién está dirigido">
              {registro.dirigido ?? (departamento === 'Desarrollo Social' ? 'Vecinos de la comuna de Lo Prado que reúnan las condiciones de cada beneficio.' : 'Vecinos, organizaciones y deportistas de la comuna de Lo Prado.')}
            </DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="¿Dónde se realiza?">{registro.lugar}</DatoFicha>
            <DatoFicha titulo="Tiene costo (Sí/No)">{registro.costo}</DatoFicha>
            <DatoFicha titulo="Unidad monetaria">{registro.unidad}</DatoFicha>
            <DatoFicha titulo="Valor del servicio">{registro.valor}</DatoFicha>
            <DatoFicha titulo="¿Está disponible en línea? (Sí/No)">{registro.disponible}</DatoFicha>
            <DatoFicha titulo="Enlace al trámite en línea correspondiente">
              {registro.enlaceTramite === 'No aplica' ? (
                'No aplica'
              ) : (
                <a
                  href={registro.enlaceTramite || 'about:blank'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Enlace web
                </a>
              )}
            </DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Enlace a mayor información (existente)">
                {registro.tieneEnlaceMayorInformacion ? (
                  <a
                    href="about:blank"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Enlace web
                  </a>
                ) : (
                  'No aplica'
                )}
              </DatoFicha>
            </div>
          </div>
        </article>
      ))}
      {mostrarEnMantencion && <p className="text-sm text-slate-600">En mantención</p>}
    </div>
  );
}

function ContenidoEmprendimiento() {
  return (
    <div className="space-y-4">
      {registrosEmprendimiento.map((registro) => (
        <article key={registro.tramite} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Emprendimiento</p>
              <h3 className="text-base font-bold text-slate-900">{registro.tramite}</h3>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              <BadgeCheck className="h-4 w-4 text-blue-600" aria-hidden="true" />
              No, solo consulta
            </span>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <DatoFicha titulo="En qué consiste">{registro.descripcion}</DatoFicha>
            <DatoFicha titulo="Requisitos">{registro.requisitos}</DatoFicha>
            <DatoFicha titulo="Documentos requeridos">{registro.documentos}</DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Trámite a realizar y/o etapas">{registro.etapas}</DatoFicha>
            </div>
            <DatoFicha titulo="Dónde se realiza">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                Neptuno 552, Oficina de Emprendimiento, ubicada en Centro Comercial Persa Neptuno
              </span>
            </DatoFicha>
            <DatoFicha titulo="Costo y valor">
              <p>No tiene costo.</p>
              <p className="mt-1 text-xs text-slate-500">Unidad monetaria y valor del servicio: No aplica.</p>
            </DatoFicha>
            <DatoFicha titulo="Trámite en línea">
              <p>No disponible en línea.</p>
              <p className="mt-1 text-xs text-slate-500">El trámite es de consulta presencial.</p>
            </DatoFicha>
            <div className="sm:col-span-2 lg:col-span-3">
              <DatoFicha titulo="Enlace a mayor información">
                {registro.enlaceMayorInformacion ? (
                  <a
                    href={registro.enlaceMayorInformacion}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Visitar sitio de información
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-slate-500">Enlace pendiente de ser informado.</span>
                )}
              </DatoFicha>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function ContenidoPersa({ onSeleccionarTipologia }: { onSeleccionarTipologia: (tipologia: string) => void }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50 to-white px-5 py-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Rentas Municipales · Persa Neptuno</p>
        <h3 className="text-base font-bold text-slate-900">Permiso de uso de arriendo de locales</h3>
        <p className="mt-1 text-sm text-slate-600">Centro Comercial y Microempresarial Neptuno</p>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        <DatoFicha titulo="En qué consiste">
          Se otorga permiso de uso a personas que desean emprender o dar continuidad a un negocio.
        </DatoFicha>
        <DatoFicha titulo="Requisitos">
          <ul className="list-disc space-y-1 pl-4">
            <li>Persona natural o sociedad constituida.</li>
            <li>Tener un giro establecido o proyecto de emprendimiento.</li>
            <li>Contar con un capital apropiado para el giro elegido.</li>
            <li>Dentro de lo posible, contar con una carta de clientes.</li>
          </ul>
        </DatoFicha>
        <DatoFicha titulo="Documentos requeridos">
          <ol className="list-decimal space-y-1 pl-4">
            <li>Fotocopia de cédula de identidad.</li>
            <li>Certificado de antecedentes.</li>
            <li>Certificado de constitución de la sociedad.</li>
            <li>Fotocopia del RUT de la sociedad.</li>
            <li>Fotocopia de los integrantes de la sociedad.</li>
          </ol>
        </DatoFicha>
        <DatoFicha titulo="A quién está dirigido">Rentas Municipales.</DatoFicha>
        <div className="sm:col-span-2">
          <DatoFicha titulo="Trámite a realizar y/o etapas">
            <ol className="list-decimal space-y-2 pl-4">
              <li>Presentar la documentación en la Administración del Centro Comercial Neptuno y completar en triplicado el formulario enumerado de postulación, con datos personales, giro, valor de arriendo, gastos comunes y garantía. Debe estar firmado por el postulante y la Administradora del Centro Comercial.</li>
              <li>Se entrega una copia del formulario al postulante y otra a la Comisión para preselección. Las personas seleccionadas tienen una entrevista para exponer el giro, el público al que desean llegar y responder consultas.</li>
              <li>Seleccionada la persona adjudicataria, la Administración confecciona un memorándum con la tercera copia del formulario y los antecedentes del postulante, con visto bueno del Jefe de Rentas y firma de la Directora de Administración y Finanzas, para solicitar el Decreto Alcaldicio de Otorgamiento de Permiso de Uso.</li>
              <li>Confeccionado el Decreto por Secretaría Municipal, se llama al adjudicatario para entregar una copia e iniciar el arriendo del local.</li>
              <li>Se entrega copia de la Ordenanza del Centro Comercial y del Certificado de Rol de Avalúo del local para iniciar actividades en el SII.</li>
              <li>Con el comprobante del SII y el Decreto de adjudicación se solicita en Ventanilla Única la patente comercial correspondiente.</li>
            </ol>
          </DatoFicha>
        </div>
        <DatoFicha titulo="Dónde se realiza">
          <span className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            Administración Centro Comercial Neptuno, Avenida Neptuno 552
          </span>
        </DatoFicha>
        <DatoFicha titulo="Costo y disponibilidad">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Sin costo</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">No disponible en línea</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Unidad monetaria, valor y trámite en línea: No aplica.</p>
        </DatoFicha>
        <div className="sm:col-span-2">
          <DatoFicha titulo="Enlace a mayor información">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onSeleccionarTipologia(tipologias[2])}
                className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Patente
              </button>
              <a
                href={enlacePdfPersa || 'about:blank'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Ver documento PDF
              </a>
            </div>
          </DatoFicha>
        </div>
      </div>
    </article>
  );
}

export function VistaTramitesEmprendimiento() {
  const [tipologia, setTipologia] = useState(tipologias[4]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">
        A continuación se presentan los actos y resoluciones de este Organismo (o) que tienen efecto sobre terceros.
      </p>
      <SelectorTipologia
        id="filtro-tipologia-emprendimientos"
        valor={tipologia}
        onChange={setTipologia}
      />

      {tipologia === tipologias[0] ? (
        <VistaSecretariaMunicipal />
      ) : tipologia === tipologias[1] ? (
        <VistaCobranza />
      ) : tipologia === tipologias[2] ? (
        <VistaPatentes />
      ) : tipologia === tipologias[3] ? (
        <VistaPermisos />
      ) : tipologia === tipologias[4] ? (
        <ContenidoEmprendimiento />
      ) : tipologia === tipologias[5] ? (
        <ContenidoPersa onSeleccionarTipologia={setTipologia} />
      ) : tipologia === tipologias[6] ? (
        <VistaObrasMunicipales />
      ) : tipologia === tipologias[7] ? (
        <VistaLicenciasConducir />
      ) : tipologia === tipologias[8] ? (
        <VistaPermisosCirculacion />
      ) : tipologia === tipologias[9] ? (
        <VistaTecnicoTransito />
      ) : tipologia === tipologias[10] ? (
        <VistaDesarrolloComunitario registros={registrosDesarrolloSocial} departamento="Desarrollo Social" />
      ) : tipologia === tipologias[11] ? (
        <VistaDesarrolloComunitario registros={registrosPromocionComunitaria} departamento="Promoción Comunitaria" />
      ) : tipologia === tipologias[12] ? (
        <VistaDesarrolloComunitario registros={registrosViviendaPSAT} departamento="Vivienda (PSAT)" mostrarEnMantencion />
      ) : tipologia === tipologias[13] ? (
        <VistaDesarrolloComunitario registros={registrosMedioAmbiente} departamento="Medio Ambiente" />
      ) : tipologia === tipologias[14] ? (
        <VistaDesarrolloComunitario registros={registrosAseo} departamento="Aseo" />
      ) : tipologia === tipologias[15] ? (
        <VistaDesarrolloComunitario registros={registrosAreasVerdes} departamento="Áreas Verdes" />
      ) : tipologia === tipologias[16] ? (
        <VistaDesarrolloComunitario registros={registrosHigieneAmbiental} departamento="Higiene Ambiental" />
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">
          No hay información cargada para esta tipología en esta vista.
        </div>
      )}
    </div>
  );
}

export function VistaPermisosPersaNeptuno() {
  const [tipologia, setTipologia] = useState(tipologias[5]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">
        A continuación se presentan los actos y resoluciones de este Organismo (o) que tienen efecto sobre terceros.
      </p>
      <SelectorTipologia id="filtro-tipologia-persa" valor={tipologia} onChange={setTipologia} />

      {tipologia === tipologias[0] ? (
        <VistaSecretariaMunicipal />
      ) : tipologia === tipologias[1] ? (
        <VistaCobranza />
      ) : tipologia === tipologias[2] ? (
        <VistaPatentes />
      ) : tipologia === tipologias[3] ? (
        <VistaPermisos />
      ) : tipologia === tipologias[4] ? (
        <ContenidoEmprendimiento />
      ) : tipologia === tipologias[5] ? (
        <ContenidoPersa onSeleccionarTipologia={setTipologia} />
      ) : tipologia === tipologias[6] ? (
        <VistaObrasMunicipales />
      ) : tipologia === tipologias[7] ? (
        <VistaLicenciasConducir />
      ) : tipologia === tipologias[8] ? (
        <VistaPermisosCirculacion />
      ) : tipologia === tipologias[9] ? (
        <VistaTecnicoTransito />
      ) : tipologia === tipologias[10] ? (
        <VistaDesarrolloComunitario registros={registrosDesarrolloSocial} departamento="Desarrollo Social" />
      ) : tipologia === tipologias[11] ? (
        <VistaDesarrolloComunitario registros={registrosPromocionComunitaria} departamento="Promoción Comunitaria" />
      ) : tipologia === tipologias[12] ? (
        <VistaDesarrolloComunitario registros={registrosViviendaPSAT} departamento="Vivienda (PSAT)" mostrarEnMantencion />
      ) : tipologia === tipologias[13] ? (
        <VistaDesarrolloComunitario registros={registrosMedioAmbiente} departamento="Medio Ambiente" />
      ) : tipologia === tipologias[14] ? (
        <VistaDesarrolloComunitario registros={registrosAseo} departamento="Aseo" />
      ) : tipologia === tipologias[15] ? (
        <VistaDesarrolloComunitario registros={registrosAreasVerdes} departamento="Áreas Verdes" />
      ) : tipologia === tipologias[16] ? (
        <VistaDesarrolloComunitario registros={registrosHigieneAmbiental} departamento="Higiene Ambiental" />
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">
          No hay información cargada para esta tipología en esta vista.
        </div>
      )}
    </div>
  );
}
