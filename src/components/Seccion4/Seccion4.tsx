import { useState } from 'react';   
import { ChevronDown, ChevronUp, FileText, ExternalLink, ArrowLeft, User } from 'lucide-react';   
  
interface Seccion4Props {   
onVolver: () => void;   
}   
  
interface Consejero {   
nombre: string;   
organizacion: string;   
cargoOrRep: string;   
}   
  
interface ConsejoItem {   
id: string;   
titulo: string;   
tipo: 'documento' | 'fuente';   
enlaceDocumento?: string;   
fuenteTexto?: string;   
fuenteUrl?: string;   
descripcion?: string;   
}   
  
interface SubUnidadGabinete {   
id: string;   
nombre: string;   
autoridad: string;   
email: string;   
secretaria: string;   
telefono: string;   
curriculumUrl: string;   
declaracionUrl: string;   
}   
  
interface SubUnidadAdministrador {   
id: string;   
nombre: string;   
autoridad: string;   
email: string;   
secretaria: string;   
telefono: string;   
curriculumUrl: string;   
declaracionUrl: string;   
conFoto?: boolean;   
}   
  
interface SubUnidadSecretaria {   
id: string;   
nombre: string;   
autoridad: string;   
email: string;   
secretaria: string;   
telefono: string;   
curriculumUrl: string;   
declaracionUrl: string;   
conFoto?: boolean;   
}   
  
interface SubUnidadSecpla {   
id: string;   
nombre: string;   
autoridad: string;   
email: string;   
secretaria: string;   
telefono: string;   
curriculumUrl: string;   
declaracionUrl: string;   
conFoto?: boolean;   
}   
  
interface SubUnidadControl {   
id: string;   
nombre: string;   
autoridad: string;   
email: string;   
secretaria: string;   
telefono: string;   
curriculumUrl: string;   
declaracionUrl: string;   
conFoto?: boolean;   
}   
  
interface SubUnidadFinanzasPersona {   
id: string;   
nombreDepto: string;   
autoridad: string;   
email: string;   
secretaria: string;   
telefono: string;   
curriculumUrl: string;   
declaracionUrl: string;   
conFoto?: boolean;   
}   
  
interface SubUnidadFinanzas {   
id: string;   
nombre: string;   
autoridad: string;   
email: string;   
secretaria: string;   
telefono: string;   
curriculumUrl: string;   
declaracionUrl: string;   
conFoto?: boolean;   
personas?: SubUnidadFinanzasPersona[];   
}   
  
interface UnidadOrgano {   
id: string;   
nombre: string;   
autoridad: string;   
email: string;   
secretaria: string;   
telefono: string;   
curriculumUrl: string;   
declaracionUrl: string;   
contenido?: string;   
fuenteLegal?: string;   
fuenteLegalUrl?: string;   
diagramaUrl?: string;   
reglamentoInternoUrl?: string;   
esConsejoConsultivo?: boolean;   
esGabinete?: boolean;   
esAdministrador?: boolean;   
esSecretaria?: boolean;   
esSecpla?: boolean;   
esJuridica?: boolean;   
esControl?: boolean;   
esFinanzas?: boolean;   
esObras?: boolean;   
esTransito?: boolean;   
esDideco?: boolean;   
esMedioAmbiente?: boolean;   
consejoItems?: ConsejoItem[];   
consejerosList?: Consejero[];   
subUnidades?: SubUnidadGabinete[];   
subUnidadesAdmin?: SubUnidadAdministrador[];   
subUnidadesSec?: SubUnidadSecretaria[];   
subUnidadesSecpla?: SubUnidadSecpla[];   
subUnidadesControl?: SubUnidadControl[];   
subUnidadesFinanzas?: SubUnidadFinanzas[];   
personaExtraFinanzas?: SubUnidadFinanzasPersona;   
}   
  
export default function Seccion4({ onVolver }: Seccion4Props) {   
const [unidadSeleccionada, setUnidadSeleccionada] = useState<string>('todos');   
const [unidadesAbiertas, setUnidadesAbiertas] = useState<Record<string, boolean>>({});   
  
const [seccionNormativaAbierta, setSeccionNormativaAbierta] = useState<boolean>(false);   
const [seccionRepresentantesAbierta, setSeccionRepresentantesAbierta] = useState<boolean>(false);   
const [consejoItemsAbiertos, setConsejoItemsAbiertos] = useState<Record<string, boolean>>({});   
const [deptosFinanzasAbiertos, setDeptosFinanzasAbiertos] = useState<Record<string, boolean>>({});   
const [deptosObrasAbiertos, setDeptosObrasAbiertos] = useState<Record<string, boolean>>({});   
const [deptosTransitoAbiertos, setDeptosTransitoAbiertos] = useState<Record<string, boolean>>({});   
const [deptosDidecoAbiertos, setDeptosDidecoAbiertos] = useState<Record<string, boolean>>({});   
const [deptosMedioAmbienteAbiertos, setDeptosMedioAmbienteAbiertos] = useState<Record<string, boolean>>({});   
  
const toggleUnidad = (id: string) => {   
setUnidadesAbiertas(prev => ({ ...prev, [id]: !prev[id] }));   
};   
  
const toggleConsejoItem = (id: string) => {   
setConsejoItemsAbiertos(prev => ({ ...prev, [id]: !prev[id] }));   
};   
  
const toggleDeptoFinanzas = (id: string) => {   
setDeptosFinanzasAbiertos(prev => ({ ...prev, [id]: !prev[id] }));   
};   
  
const toggleDeptoObras = (id: string) => {   
setDeptosObrasAbiertos(prev => ({ ...prev, [id]: !prev[id] }));   
};   
  
const toggleDeptoTransito = (id: string) => {   
setDeptosTransitoAbiertos(prev => ({ ...prev, [id]: !prev[id] }));   
};   
  
const toggleDeptoDideco = (id: string) => {   
setDeptosDidecoAbiertos(prev => ({ ...prev, [id]: !prev[id] }));   
};   
  
const toggleDeptoMedioAmbiente = (id: string) => {   
setDeptosMedioAmbienteAbiertos(prev => ({ ...prev, [id]: !prev[id] }));   
};   
  
const consejoNormativaItems: ConsejoItem[] = [   
{   
id: 'c-doc-1',   
titulo: 'Decreto Alcaldicio Ordenanza',   
tipo: 'documento',   
enlaceDocumento: '### URL ###',   
descripcion: 'Decreto Alcaldicio que aprueba la ordenanza correspondiente.'   
},   
{   
id: 'c-fuente-1',   
titulo: 'LEY Nº 18.695, Orgánica Constitucional de Municipalidades (Art. 94 al Art. 96)',   
tipo: 'fuente',   
fuenteTexto: 'LEY Nº 18.695, Orgánica Constitucional de Municipalidades\nArt. 94 al Art. 96',   
fuenteUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=251693',   
descripcion: 'Marco normativo general sobre los consejos comunales de organizaciones de la sociedad civil.'   
},   
{   
id: 'c-doc-2',   
titulo: 'Decreto Alcaldicio Reglamento',   
tipo: 'documento',   
enlaceDocumento: '### URL ###',   
descripcion: 'Decreto Alcaldicio que aprueba el reglamento interno de funcionamiento.'   
},   
{   
id: 'c-fuente-2',   
titulo: 'Ley 20.500, Sobre Asociaciones y Participación Ciudadana en la Gestión Pública',   
tipo: 'fuente',   
fuenteTexto: 'Ley 20.500, Sobre Asociaciones y Participación Ciudadana en la Gestión Pública',   
fuenteUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=1023143',   
descripcion: 'Normativa sobre asociaciones y participación ciudadana.'   
},   
{   
id: 'c-doc-3',   
titulo: 'Acta Constitutiva',   
tipo: 'documento',   
enlaceDocumento: '### URL ###',   
descripcion: 'Registro oficial del acta constitutiva.'   
},   
{   
id: 'c-doc-4',   
titulo: 'Diagrama de la Estructura Orgánica',   
tipo: 'documento',   
enlaceDocumento: '### URL ###',   
descripcion: 'Esquema visual de la estructura orgánica.'   
}   
];   
  
const consejerosData: Consejero[] = [   
{ nombre: '[ Nombre Consejero 1 ]', organizacion: 'I. Municipalidad de Lo Prado', cargoOrRep: 'Presidente' },   
{ nombre: '[ Nombre Consejero 2 ]', organizacion: 'I. Municipalidad de Lo Prado', cargoOrRep: 'Secretaría' },   
{ nombre: 'María Ahumada Santander', organizacion: 'Junta de Vecinos N° 23', cargoOrRep: 'Vicepresidenta del Consejo' },   
{ nombre: 'Marta Navarro Vargas', organizacion: 'Junta de Vecinos N° 5', cargoOrRep: 'Representante N° 1' },   
{ nombre: 'Rosalía Fuentes Rojas', organizacion: 'Unión Comunal de Adultos Mayores', cargoOrRep: 'Territorio N° 1' },   
{ nombre: 'Enedina Faúndez Mico', organizacion: 'Club de Adulto Mayor "Amanecer"', cargoOrRep: 'Territorio N° 1' },   
{ nombre: 'Eduviges Román Catalán', organizacion: 'Junta de Vecinos N° 4', cargoOrRep: 'Territorio N° 1' },   
{ nombre: 'Moisés Moreno Cerda', organizacion: 'Junta de Vecinos N° 12', cargoOrRep: 'Territorio N° 2' },   
{ nombre: 'Nicolh Velásquez Vesei', organizacion: 'Junta de Vecinos N° 10', cargoOrRep: 'Territorio N° 2' },   
{ nombre: 'Rosa Fuentes Mejías', organizacion: 'Junta de Vecinos N° 11-C', cargoOrRep: 'Territorio N° 2' },   
{ nombre: 'Mafalda Pérez Maldonado', organizacion: 'Club Adulto Mayor "Esperanza"', cargoOrRep: 'Territorio N° 2' },   
{ nombre: 'Luis Godoy Lara', organizacion: 'Junta de Vecinos N° 17', cargoOrRep: 'Territorio N° 3' },   
{ nombre: 'Luis Alfredo Olave Alarcón', organizacion: 'Junta de Vecinos N° 19', cargoOrRep: 'Territorio N° 3' },   
{ nombre: 'César Cárcamo Álvarez', organizacion: 'Comité de Adelanto y Deportivo "30 de Agosto"', cargoOrRep: 'Territorio N° 3' },   
{ nombre: 'Isabel Pérez Aguilera', organizacion: 'Junta de Vecinos N° 18', cargoOrRep: 'Territorio N° 3' },   
{ nombre: 'María Essex Arocay', organizacion: 'Junta de Vecinos N° 9', cargoOrRep: 'Territorio N° 4' },   
{ nombre: 'Patricia Barría Álvarez', organizacion: 'Consejo Vecinal de Desarrollo Barrio "Waldo Taff - Arturo Prat"', cargoOrRep: 'Territorio N° 4' },   
{ nombre: 'María Isabel de las Mercedes Ayala Espinoza', organizacion: 'Centro Cultural, Artístico y Deportivo Puertas Abiertas', cargoOrRep: 'Territorio N° 4' },   
{ nombre: 'Jaime Carlos Puebla', organizacion: 'Unión Comunal de Grupos Folklóricos "Lo Prado"', cargoOrRep: 'Organización Relevante de la Comuna' },   
{ nombre: 'Gabriel Aravena Cerda', organizacion: 'Agrupación Cuarto Centenario', cargoOrRep: 'Organización Relevante de la Comuna' }   
];   
  
const unidades: UnidadOrgano[] = [   
{   
id: 'alcalde',   
nombre: 'Alcalde',   
autoridad: '[ Nombre del Alcalde / Autoridad ]',   
email: 'correo@loprado.cl',   
secretaria: '[ Nombre de Secretaría ]',   
telefono: '[ Teléfono ]',   
curriculumUrl: '#',   
declaracionUrl: '#',   
contenido: `El alcalde es la máxima autoridad de la Municipalidad...`,   
fuenteLegal: 'LEY N° 18.695 ORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES\nArt. 56 y Art. 63',   
fuenteLegalUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=251693'   
},   
{   
id: 'concejo',   
nombre: 'Concejo Municipal',   
autoridad: 'H. Concejo Municipal de Lo Prado',   
email: 'concejo@loprado.cl',   
secretaria: 'Secretaría Municipal',   
telefono: '562 388 7400',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esConsejoConsultivo: false,   
contenido: `Diagrama de la Estructura Orgánica`,   
fuenteLegal: 'LEY N° 18.695 ORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES\nArt. 71 al Art. 92',   
fuenteLegalUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=251693',   
diagramaUrl: '### URL ###'   
},   
{   
id: 'consultivo',   
nombre: 'Consejo Consultivo',   
autoridad: 'Consejo Comunal de Organizaciones de la Sociedad Civil',   
email: 'consultivo@loprado.cl',   
secretaria: 'Secretaría Técnica',   
telefono: '562 388 7400',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esConsejoConsultivo: true,   
consejoItems: consejoNormativaItems,   
consejerosList: consejerosData   
},   
{   
id: 'gabinete',   
nombre: 'Gabinete de Alcaldía',   
autoridad: '[ Jefatura ]',   
email: 'correo@loprado.cl',   
secretaria: '[ Secretaría ]',   
telefono: '23887677',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esGabinete: true,   
contenido: `a) Elaborar la agenda de actividades del/la Alcalde/sa.\nb) Informar al Alcalde/sa sobre los planteamientos públicos de las autoridades y vecinos con relación a inquietudes y problemas de carácter comunal.\nc) Agilizar y colaborar en la solución de problemas e inquietudes de los vecinos que acudan a la Alcaldía.\nd) Colaborar en resolver las solicitudes y peticiones que requieren de pronunciamiento o decisión directa del/la Alcaldelsa.\ne) Dirigir y coordinar las materias relativas a relaciones públicas y protocolo de la Municipalidad.\nf) Preparar conferencias de prensa, reuniones, entrevistas y otras actividades que exterioricen las actividades que realiza el municipio u otras situaciones externas que le afecten.\ng) Mantener informada a la comunidad y al personal municipal de todas las actividades relevantes del Municipio.\nh) Proporcionar apoyo administrativo a la gestión del/la Alcalde/sa.\ni) Cumplir las demás funciones que el/la Alcalde/sa le encomienden.`,   
fuenteLegal: 'DECRETO N° 2521, DE FECHA 09.09.2013\nREGLAMENTO INTERNO MUNICIPAL\nCAPITULO PRIMERO',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
subUnidades: [   
{   
id: 'prensa',   
nombre: 'Departamento Prensa y Relaciones Públicas',   
autoridad: '[ Jefatura de Prensa ]',   
email: 'prensa@loprado.cl',   
secretaria: 'Jenny Sandoval Pinto',   
telefono: '23887422',   
curriculumUrl: '#',   
declaracionUrl: '#'   
}   
]   
},   
{   
id: 'administrador',   
nombre: 'Administrador Municipal',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esAdministrador: true,   
contenido: `Existirá un administrador municipal en todas aquellas comunas donde lo decida el concejo a proposición del alcalde...`,   
fuenteLegal: 'ART. 30\nLEY Nº 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#',   
subUnidadesAdmin: [   
{   
id: 'ventanilla',   
nombre: 'Jefe del Depto. Ventanilla Única',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'desarrollo-seguimiento',   
nombre: 'Oficina de Desarrollo y Seguimiento Institucional',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'secretaria',   
nombre: 'Dirección de Secretaría Municipal',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esSecretaria: true,   
contenido: `La Secretaría Municipal estará a cargo de un Secretario Municipal...`,   
fuenteLegal: 'ART. 20\nLEY N° 18695 ORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#',   
subUnidadesSec: [   
{   
id: 'partes',   
nombre: 'Oficina de Partes e Informaciones',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '23887501',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'transparencia-municipal',   
nombre: 'Oficina de Transparencia Municipal',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '23887473 - 23887455',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'secpla',   
nombre: 'Dirección de Secretaría de Planificación Comunal',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esSecpla: true,   
contenido: `La Secretaría Comunal de Planificación desempeñará funciones de asesoría del alcalde y del concejo...`,   
fuenteLegal: 'ART. 21\nLEY N° 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#',   
subUnidadesSecpla: [   
{   
id: 'planificacion-evaluacion',   
nombre: 'Depto. de Planificación y Evaluación',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '23887705',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'asesoria-urbana',   
nombre: 'Departamento de Asesoría Urbana',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '23887589',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'desarrollo-informatico',   
nombre: 'Depto. de Desarrollo Informático',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '23887748',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'gestion-inmobiliaria',   
nombre: 'Entidad de Gestión Inmobiliaria y Social (EGIS)',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '228434908',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'juridica',   
nombre: 'Dirección de Asesoría Jurídica',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '23887696',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esJuridica: true,   
contenido: `Corresponderá a la unidad encargada de la asesoría jurídica, prestar apoyo en materias legales...`,   
fuenteLegal: 'ART. 28\nLEY N° 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#'   
},   
{   
id: 'control',   
nombre: 'Dirección de Control Municipal',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '23887816',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esControl: true,   
contenido: `A la unidad encargada del control le corresponderán las siguientes funciones...`,   
fuenteLegal: 'ART. 29\nLEY N° 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#',   
subUnidadesControl: [   
{   
id: 'control-financiero',   
nombre: 'Depto. de Control Financiero',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '23887816',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'auditoria',   
nombre: 'Depto. de Auditoría',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '23887816',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'finanzas',   
nombre: 'Dirección de Administración y Finanzas',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esFinanzas: true,   
contenido: `La unidad encargada de administración y finanzas tendrá las siguientes funciones...`,   
fuenteLegal: 'ART. 27\nLEY N° 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#',   
subUnidadesFinanzas: [   
{   
id: 'depto-finanzas',   
nombre: 'Departamento de Finanzas',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: [   
{   
id: 'fin-1',   
nombreDepto: 'Oficina de Tesorería Municipal',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'fin-2',   
nombreDepto: 'Oficina de Contabilidad y Presupuesto',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'fin-3',   
nombreDepto: 'Oficina de Contabilidad de Bienes y Bodega Central',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'depto-recursos-humanos',   
nombre: 'Departamento de Recursos Humanos',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: [   
{   
id: 'rrhh-1',   
nombreDepto: 'Oficina de Remuneraciones',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'rrhh-2',   
nombreDepto: 'Oficina de Personal y Desarrollo',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'rrhh-3',   
nombreDepto: 'Oficina de Bienestar Municipal',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'depto-rentas',   
nombre: 'Departamento de Rentas Municipales',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: [   
{   
id: 'rentas-1',   
nombreDepto: 'Oficina de Patentes Comerciales',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'rentas-2',   
nombreDepto: 'Oficina de Fiscalización',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'rentas-3',   
nombreDepto: 'Oficina de Cobranzas',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'rentas-4',   
nombreDepto: 'Oficina de Emprendimiento',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'rentas-5',   
nombreDepto: 'Oficina de Administración del Centro Comercial y Microempresarial Neptuno',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'depto-programas-sociales',   
nombre: 'Departamento de Administración Programas Sociales Externos',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
},   
{   
id: 'depto-compras',   
nombre: 'Departamento de Compras y Contrataciones',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: [   
{   
id: 'comp-1',   
nombreDepto: 'Oficina de Adquisiciones',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'comp-2',   
nombreDepto: 'Oficina de Gestión de Contrato',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
}   
],   
personaExtraFinanzas: {   
id: 'extra-finanzas-1',   
nombreDepto: '[ Oficina / Cargo Adicional ]',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
},   
{   
id: 'obras',   
nombre: 'Dirección de Obras Municipales',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esObras: true,   
contenido: `A la unidad encargada de obras municipales le corresponderán las siguientes funciones...`,   
fuenteLegal: 'ART. 24\nLEY N° 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#',   
subUnidadesFinanzas: [   
{   
id: 'depto-edificacion',   
nombre: 'Departamento de Edificación',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: [   
{   
id: 'obras-ed-1',   
nombreDepto: 'Oficina de Inspección de Obras',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'obras-ed-2',   
nombreDepto: 'Oficina de Información y Archivo D.O.M.',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'depto-proyectos',   
nombre: 'Deptos. de Proyectos y Ejecución de Obras',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
}   
]   
},   
{   
id: 'transito',   
nombre: 'Dirección de Tránsito y Transporte Público',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esTransito: true,   
contenido: `A la unidad encargada de la función de tránsito y transporte público corresponderá:\na) Otorgar y renovar licencias para conducir vehículos;\nb) Determinar el sentido de circulación de vehículos, en coordinación con los organismos de la Administración del Estado competentes;\nc) Señalizar adecuadamente las vías públicas, y\nd) En general, aplicar las normas generales sobre tránsito y transporte públicos en la comuna.`,   
fuenteLegal: 'ART. 1.28\nLEY N° 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES\n\nDECRETO N° 2521, DE FECHA 09.09.2013\nREGLAMENTO INTERNO MUNICIPAL\nCAPITULO NOVENO',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#',   
subUnidadesFinanzas: [   
{   
id: 'depto-tecnico',   
nombre: 'Departamento Técnico',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
},   
{   
id: 'depto-permiso',   
nombre: 'Departamento de Permiso de Circulación',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
},   
{   
id: 'depto-licencia',   
nombre: 'Departamento de Licencia de Conducir',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: [   
{   
id: 'psicotecnico',   
nombreDepto: 'Gabinete Psicotécnico',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
}   
]   
},   
{   
id: 'dideco',   
nombre: 'Dirección de Desarrollo Comunitario',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esDideco: true,   
contenido: `La unidad encargada del desarrollo comunitario tendrá como funciones específicas:\na) Asesorar al alcalde y, también, al concejo en la promoción del desarrollo comunitario;\nb) Prestar asesoría técnica a las organizaciones comunitarias, fomentar su desarrollo y legalización, y promover su efectiva participación en el municipio, y\nc) Proponer y ejecutar, dentro de su ámbito y cuando corresponda, medidas tendientes a materializar acciones relacionadas con salud pública, protección del medio ambiente, educación y cultura, capacitación laboral, deporte y recreación, promoción del empleo, fomento productivo local y turismo.`,   
fuenteLegal: 'LEY N° 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES\n\nDECRETO N° 2521, DE FECHA 09.09.2013\nREGLAMENTO INTERNO MUNICIPAL CAPITULO UNDÉCIMO',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#',   
subUnidadesFinanzas: [   
{   
id: 'depto-desarrollo-social',   
nombre: 'Departamento Desarrollo Social',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: [   
{   
id: 'dideco-ds-1',   
nombreDepto: 'Oficina Asistencia Social',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'dideco-ds-2',   
nombreDepto: 'Oficina de Estratificación Social',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'dideco-ds-3',   
nombreDepto: 'Oficina de Subsidios Sociales',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'dideco-ds-4',   
nombreDepto: 'Oficina Programas Sociales',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'dideco-ds-5',   
nombreDepto: 'Oficina de Información Laboral OMIL',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'depto-promocion-comunitaria',   
nombre: 'Departamento Promoción Comunitaria',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: [   
{   
id: 'dideco-pc-1',   
nombreDepto: 'Oficina de Organización Comunitaria y Gestión Territorial',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'dideco-pc-2',   
nombreDepto: 'Oficina Cultura',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'dideco-pc-3',   
nombreDepto: 'Oficina Deporte',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
},   
{   
id: 'dideco-pc-4',   
nombreDepto: 'Oficina Vivienda / PSAI',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false   
}   
]   
},   
{   
id: 'depto-convivencia',   
nombre: 'Departamento Convivencia y Protección Ciudadana',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
}   
]   
},   
{   
id: 'medioambiente',   
nombre: 'Dirección de Medio Ambiente y Operaciones',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
esMedioAmbiente: true,   
contenido: `A la unidad encargada de la función de medio ambiente, aseo y ornato corresponderá velar por:\na) El aseo de las vías públicas, parques, plazas, jardines y, en general, de los bienes nacionales de uso público existentes en la comuna ;\nb) El servicio de extracción de basura ;\nc) La construcción, conservación y administración de las áreas verdes de la comuna ;\nd) Proponer y ejecutar medidas tendientes a materializar acciones y programas relacionados con medio ambiente ;\ne) Aplicar las normas ambientales a ejecutarse en la comuna que sean de su competencia, y\nf) Elaborar el anteproyecto de ordenanza ambiental. Para la aprobación de la misma, el concejo podrá solicitar siempre un informe técnico al Ministerio del Medio Ambiente.`,   
fuenteLegal: 'ART.25\nLEY N° 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES\n\nDECRETO N° 2521,DE FECHA 09.09.2013\nREGLAMENTO INTERNO MUNICIPAL\nCAPITULO DECIMO',   
fuenteLegalUrl: '#',   
diagramaUrl: '#',   
reglamentoInternoUrl: '#',   
subUnidadesFinanzas: [   
{   
id: 'depto-aseo',   
nombre: 'Depto. Aseo',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
},   
{   
id: 'depto-areas-verdes',   
nombre: 'Depto. de Áreas verdes',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
},   
{   
id: 'depto-higiene',   
nombre: 'Depto. de Higiene Ambiental y Zoonosis',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
},   
{   
id: 'depto-medio-ambiente',   
nombre: 'Depto. de Medio Ambiente',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
},   
{   
id: 'departamento-servicios-generales',   
nombre: 'Departamento Servicios Generales',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
},   
{   
id: 'bodega-central',   
nombre: 'Bodega Central',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
},   
{   
id: 'departamento-operaciones-comunales',   
nombre: 'Departamento Operaciones Comunales y Emergencia',   
autoridad: '',   
email: '',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
conFoto: false,   
personas: []   
}   
]   
},   
{   
id: 'juzgado',   
nombre: 'Juzgado Policía Local',   
autoridad: '',   
email: 'correo@loprado.cl',   
secretaria: '',   
telefono: '',   
curriculumUrl: '#',   
declaracionUrl: '#',   
contenido: `Impartir justicia en materias de tránsito, ley de alcoholes.`,   
fuenteLegal: 'Ley N° 15.231',   
fuenteLegalUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=251693'   
}   
];   
  
const unidadesFiltradas = unidadSeleccionada === 'todos'   
? unidades   
: unidades.filter(u => u.id === unidadSeleccionada);   
  
return (   
<div className="content-box-wide space-y-6 pt-2">   
<div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">   
<button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">   
Transparencia Activa   
</button>   
<span className="text-slate-400">&gt;</span>   
<span className="text-slate-700">04. Dirección u/o Unidad</span>   
</div>   
  
<div className="flex items-start justify-between flex-wrap gap-4">   
<div>   
<h2 className="text-xl font-bold text-slate-900">   
Dirección u/o Unidad   
</h2>   
</div>   
<span className="text-xs text-slate-500 font-medium">Última actualización: 5/10/2026</span>   
</div>   
  
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3 flex-wrap mb-4">   
<label className="text-xs font-bold text-slate-700">Dirección u/o Unidad:</label>   
<select   
value={unidadSeleccionada}   
onChange={(e) => setUnidadSeleccionada(e.target.value)}   
className="px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer min-w-[280px]"   
>   
<option value="todos">-- Ver todas las unidades --</option>   
{unidades.map((u) => (   
<option key={u.id} value={u.id}>{u.nombre}</option>   
))}   
</select>   
</div>   
  
<div className="space-y-3">   
{unidadesFiltradas.length > 0 ? (   
unidadesFiltradas.map((unidad) => {   
const isOpen = unidad.esConsejoConsultivo ? true : (unidadesAbiertas[unidad.id] || false);   
  
return (   
<div key={unidad.id} className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all hover:shadow-md">   
<div   
onClick={() => {   
if (!unidad.esConsejoConsultivo) toggleUnidad(unidad.id);   
}}   
className={`p-4 flex items-center justify-between gap-4 ${!unidad.esConsejoConsultivo ? 'cursor-pointer' : ''}`}   
>   
<div className="flex items-center gap-3 min-w-0 flex-wrap">   
<span className="px-2.5 py-1 bg-blue-50/80 text-blue-700 text-xs font-semibold rounded-md border border-blue-100 shrink-0">   
Unidad u Órgano   
</span>   
<span className="text-sm font-bold text-slate-900 shrink-0">   
{unidad.nombre}   
</span>   
</div>   
  
{!unidad.esConsejoConsultivo && (   
<button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">   
<span>Ver detalle</span>   
{isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}   
</button>   
)}   
</div>   
  
{isOpen && (   
<div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4 rounded-b-xl text-xs text-slate-700">   
  
{unidad.esConsejoConsultivo ? (   
<div className="space-y-4 pt-2">   
  
<div className="bg-white rounded-xl border border-slate-200 shadow-xs">   
<div   
onClick={() => setSeccionNormativaAbierta(!seccionNormativaAbierta)}   
className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"   
>   
<span className="text-xs font-bold text-slate-900">   
Antecedentes y Normativa del Consejo Consultivo   
</span>   
<button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">   
<span>Ver detalle</span>   
{seccionNormativaAbierta ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}   
</button>   
</div>   
  
{seccionNormativaAbierta && unidad.consejoItems && (   
<div className="p-4 border-t border-slate-100 bg-white space-y-3 rounded-b-xl">   
{unidad.consejoItems.map((item) => {   
const isItemOpen = consejoItemsAbiertos[item.id] || false;   
return (   
<div key={item.id} className="bg-white rounded-xl border border-slate-200 shadow-xs">   
<div   
onClick={() => toggleConsejoItem(item.id)}   
className="p-3.5 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/60 rounded-xl"   
>   
<span className="text-xs font-bold text-slate-900">   
{item.titulo}   
</span>   
<button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">   
<span>Ver detalle</span>   
{isItemOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}   
</button>   
</div>   
  
{isItemOpen && (   
<div className="p-4 border-t border-slate-100 bg-white space-y-3 rounded-b-xl">   
{item.tipo === 'documento' && (   
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">   
<div className="md:col-span-8 space-y-1">   
<a href={item.enlaceDocumento} target="_blank" rel="noreferrer" className="text-blue-700 font-bold hover:underline flex items-center gap-1.5 text-xs">   
<ExternalLink className="w-4 h-4 text-blue-600" /> {item.titulo}   
</a>   
<p className="text-slate-600 text-xs">{item.descripcion}</p>   
</div>   
<div className="md:col-span-4 flex justify-center md:justify-end">   
<a href={item.enlaceDocumento} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
</div>   
)}   
  
{item.tipo === 'fuente' && (   
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">   
<div className="md:col-span-8 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs border-b pb-1">Fuente Legal</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs">   
{item.fuenteTexto}   
</div>   
<div className="pt-1">   
<a href={item.fuenteUrl} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline font-semibold flex items-center gap-1 text-xs">   
<ExternalLink className="w-3.5 h-3.5" /> Ver normativa en Ley Chile   
</a>   
</div>   
</div>   
<div className="md:col-span-4 flex justify-center md:justify-end">   
<a href={item.fuenteUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
</div>   
)}   
</div>   
)}   
</div>   
);   
})}   
</div>   
)}   
</div>   
  
<div className="bg-white rounded-xl border border-slate-200 shadow-xs">   
<div   
onClick={() => setSeccionRepresentantesAbierta(!seccionRepresentantesAbierta)}   
className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"   
>   
<span className="text-xs font-bold text-slate-900">   
Consejeros y Representantes de la Comunidad   
</span>   
<button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">   
<span>Ver detalle</span>   
{seccionRepresentantesAbierta ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}   
</button>   
</div>   
  
{seccionRepresentantesAbierta && unidad.consejerosList && (   
<div className="p-4 border-t border-slate-100 bg-white space-y-3 rounded-b-xl">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">   
{unidad.consejerosList.map((c, i) => (   
<div key={i} className="bg-slate-50/70 p-3 rounded-lg border border-slate-200 flex items-center gap-3">   
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center shrink-0 border border-slate-300 overflow-hidden">   
<User className="w-5 h-5 text-slate-400" />   
</div>   
<div className="space-y-0.5 text-xs">   
<div className="grid grid-cols-3 gap-1">   
<span className="font-bold text-slate-900">Nombre:</span>   
<span className="col-span-2 text-slate-800">{c.nombre}</span>   
</div>   
<div className="grid grid-cols-3 gap-1">   
<span className="font-bold text-slate-900">Organización:</span>   
<span className="col-span-2 text-blue-700 font-medium">{c.organizacion}</span>   
</div>   
<div className="grid grid-cols-3 gap-1">   
<span className="font-bold text-slate-900">Representante:</span>   
<span className="col-span-2 text-slate-700">{c.cargoOrRep}</span>   
</div>   
</div>   
</div>   
))}   
</div>   
</div>   
)}   
</div>   
  
</div>   
) : unidad.esMedioAmbiente ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace a la Publicación o Archivo Correspondiente:</span>   
<div className="flex flex-col items-center justify-center pt-2 gap-1">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="text-blue-700 font-bold hover:underline text-xs text-center">   
Enlace Ley 18.695   
</a>   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center mt-1">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">   
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[120px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Dirección de Aseo, Áreas verdes y operaciones Comunales:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidadesFinanzas && unidad.subUnidadesFinanzas.map((sub) => {   
const isDeptoOpen = deptosMedioAmbienteAbiertos[sub.id] || false;   
return (   
<div key={sub.id} className="bg-white rounded-xl border border-slate-200 shadow-xs">   
<div   
onClick={() => toggleDeptoMedioAmbiente(sub.id)}   
className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"   
>   
<span className="text-xs font-bold text-slate-900">   
{sub.nombre}   
</span>   
<button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">   
<span>Ver detalle</span>   
{isDeptoOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}   
</button>   
</div>   
  
{isDeptoOpen && (   
<div className="p-4 border-t border-slate-100 bg-white space-y-4 rounded-b-xl">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50/60 p-4 rounded-lg border border-slate-200">   
<div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[90px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Jefatura:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
</div>   
)}   
</div>   
);   
})}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esGabinete ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace Archivo:</span>   
<div className="flex justify-center pt-2">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-3 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{unidad.autoridad}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Jefe de Gabinete:</span>   
<span className="col-span-2 text-slate-700">{unidad.autoridad}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${unidad.email}`} className="col-span-2 text-blue-700 hover:underline">{unidad.email}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{unidad.secretaria}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{unidad.telefono}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidades && unidad.subUnidades.map((sub) => (   
<div key={sub.id} className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{sub.autoridad}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Unidad:</span>   
<span className="col-span-2 text-slate-800 font-bold">{sub.nombre}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${sub.email}`} className="col-span-2 text-blue-700 hover:underline">{sub.email}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{sub.secretaria}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{sub.telefono}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
))}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esAdministrador ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace Archivo:</span>   
<div className="flex justify-center pt-2">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-3 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{unidad.autoridad || '[ Sin datos de autoridad ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Administrador Municipal:</span>   
<span className="col-span-2 text-slate-700">{unidad.autoridad || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${unidad.email}`} className="col-span-2 text-blue-700 hover:underline">{unidad.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{unidad.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{unidad.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidadesAdmin && unidad.subUnidadesAdmin.map((sub) => (   
<div key={sub.id} className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{sub.autoridad || '[ Sin datos ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Unidad:</span>   
<span className="col-span-2 text-slate-800 font-bold">{sub.nombre}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${sub.email}`} className="col-span-2 text-blue-700 hover:underline">{sub.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{sub.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{sub.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
))}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esSecretaria ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace Archivo:</span>   
<div className="flex justify-center pt-2">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-3 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{unidad.autoridad || '[ Sin datos ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretario Municipal:</span>   
<span className="col-span-2 text-slate-700">{unidad.autoridad || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${unidad.email}`} className="col-span-2 text-blue-700 hover:underline">{unidad.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{unidad.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{unidad.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidadesSec && unidad.subUnidadesSec.map((sub) => (   
<div key={sub.id} className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{sub.autoridad || '[ Sin datos ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Unidad:</span>   
<span className="col-span-2 text-slate-800 font-bold">{sub.nombre}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${sub.email}`} className="col-span-2 text-blue-700 hover:underline">{sub.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{sub.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{sub.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
))}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esSecpla ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace Archivo:</span>   
<div className="flex justify-center pt-2">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-3 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{unidad.autoridad || '[ Sin datos ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Director SECPLA:</span>   
<span className="col-span-2 text-slate-700">{unidad.autoridad || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${unidad.email}`} className="col-span-2 text-blue-700 hover:underline">{unidad.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{unidad.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{unidad.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidadesSecpla && unidad.subUnidadesSecpla.map((sub) => (   
<div key={sub.id} className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{sub.autoridad || '[ Sin datos ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Unidad:</span>   
<span className="col-span-2 text-slate-800 font-bold">{sub.nombre}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${sub.email}`} className="col-span-2 text-blue-700 hover:underline">{sub.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{sub.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{sub.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
))}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esJuridica ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace Archivo:</span>   
<div className="flex justify-center pt-2">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-3 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{unidad.autoridad || '[ Sin datos ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Director de Asesoría Jurídica:</span>   
<span className="col-span-2 text-slate-700">{unidad.autoridad || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${unidad.email}`} className="col-span-2 text-blue-700 hover:underline">{unidad.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{unidad.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{unidad.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esControl ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace Archivo:</span>   
<div className="flex justify-center pt-2">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-3 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{unidad.autoridad || '[ Sin datos ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Director de Control:</span>   
<span className="col-span-2 text-slate-700">{unidad.autoridad || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${unidad.email}`} className="col-span-2 text-blue-700 hover:underline">{unidad.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{unidad.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{unidad.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidadesControl && unidad.subUnidadesControl.map((sub) => (   
<div key={sub.id} className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{sub.autoridad || '[ Sin datos ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Unidad:</span>   
<span className="col-span-2 text-slate-800 font-bold">{sub.nombre}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${sub.email}`} className="col-span-2 text-blue-700 hover:underline">{sub.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{sub.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{sub.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
))}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esFinanzas ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace Archivo:</span>   
<div className="flex justify-center pt-2">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-3 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{unidad.autoridad || '[ Sin datos ]'}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Director de Administración y Finanzas:</span>   
<span className="col-span-2 text-slate-700">{unidad.autoridad || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${unidad.email}`} className="col-span-2 text-blue-700 hover:underline">{unidad.email || '[ Vacío ]'}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-700">{unidad.secretaria || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{unidad.telefono || '[ Vacío ]'}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidadesFinanzas && unidad.subUnidadesFinanzas.map((sub) => {   
const isDeptoOpen = deptosFinanzasAbiertos[sub.id] || false;   
return (   
<div key={sub.id} className="bg-white rounded-xl border border-slate-200 shadow-xs">   
<div   
onClick={() => toggleDeptoFinanzas(sub.id)}   
className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"   
>   
<span className="text-xs font-bold text-slate-900">   
{sub.nombre}   
</span>   
<button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">   
<span>Ver detalle</span>   
{isDeptoOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}   
</button>   
</div>   
  
{isDeptoOpen && (   
<div className="p-4 border-t border-slate-100 bg-white space-y-4 rounded-b-xl">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50/60 p-4 rounded-lg border border-slate-200">   
<div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[90px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Jefatura:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{sub.personas && sub.personas.length > 0 && (   
<div className="space-y-3 pt-2">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">   
{sub.personas.map((p) => (   
<div key={p.id} className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 items-center shadow-xs">   
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[90px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-1.5 text-xs">   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Oficina:</span>   
<span className="col-span-2 text-slate-800 font-semibold">{p.nombreDepto}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 pb-0.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-0.5">   
<a href={p.curriculumUrl} className="text-blue-700 hover:underline font-medium text-[11px]" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={p.declaracionUrl} className="text-blue-700 hover:underline font-medium text-[11px]" target="_blank" rel="noreferrer">Declaración de Patrimonio</a>   
</div>   
</div>   
</div>   
</div>   
))}   
</div>   
</div>   
)}   
</div>   
)}   
</div>   
);   
})}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esObras ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace Archivo:</span>   
<div className="flex justify-center pt-2">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-3 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">   
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[120px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Director de Obras Municipales:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidadesFinanzas && unidad.subUnidadesFinanzas.map((sub) => {   
const isDeptoOpen = deptosObrasAbiertos[sub.id] || false;   
return (   
<div key={sub.id} className="bg-white rounded-xl border border-slate-200 shadow-xs">   
<div   
onClick={() => toggleDeptoObras(sub.id)}   
className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"   
>   
<span className="text-xs font-bold text-slate-900">   
{sub.nombre}   
</span>   
<button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">   
<span>Ver detalle</span>   
{isDeptoOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}   
</button>   
</div>   
  
{isDeptoOpen && (   
<div className="p-4 border-t border-slate-100 bg-white space-y-4 rounded-b-xl">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50/60 p-4 rounded-lg border border-slate-200">   
<div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[90px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Jefatura:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{sub.personas && sub.personas.length > 0 && (   
<div className="space-y-3 pt-2">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">   
{sub.personas.map((p) => (   
<div key={p.id} className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 items-center shadow-xs">   
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[90px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-1.5 text-xs">   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Oficina:</span>   
<span className="col-span-2 text-slate-800 font-semibold">{p.nombreDepto}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 pb-0.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-0.5">   
<a href={p.curriculumUrl} className="text-blue-700 hover:underline font-medium text-[11px]" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={p.declaracionUrl} className="text-blue-700 hover:underline font-medium text-[11px]" target="_blank" rel="noreferrer">Declaración de Patrimonio</a>   
</div>   
</div>   
</div>   
</div>   
))}   
</div>   
</div>   
)}   
</div>   
)}   
</div>   
);   
})}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esTransito ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace a la Publicación o Archivo Correspondiente:</span>   
<div className="flex flex-col items-center justify-center pt-2 gap-1">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="text-blue-700 font-bold hover:underline text-xs text-center">   
Enlace Ley 18.695   
</a>   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center mt-1">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">   
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[120px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Director de Tránsito y Transporte Público:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidadesFinanzas && unidad.subUnidadesFinanzas.map((sub) => {   
const isDeptoOpen = deptosTransitoAbiertos[sub.id] || false;   
return (   
<div key={sub.id} className="bg-white rounded-xl border border-slate-200 shadow-xs">   
<div   
onClick={() => toggleDeptoTransito(sub.id)}   
className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"   
>   
<span className="text-xs font-bold text-slate-900">   
{sub.nombre}   
</span>   
<button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">   
<span>Ver detalle</span>   
{isDeptoOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}   
</button>   
</div>   
  
{isDeptoOpen && (   
<div className="p-4 border-t border-slate-100 bg-white space-y-4 rounded-b-xl">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50/60 p-4 rounded-lg border border-slate-200">   
<div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[90px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Jefatura:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{sub.personas && sub.personas.length > 0 && (   
<div className="space-y-3 pt-2">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">   
{sub.personas.map((p) => (   
<div key={p.id} className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 items-center shadow-xs">   
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[90px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-1.5 text-xs">   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Oficina:</span>   
<span className="col-span-2 text-slate-800 font-semibold">{p.nombreDepto}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 pb-0.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-0.5">   
<a href={p.curriculumUrl} className="text-blue-700 hover:underline font-medium text-[11px]" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={p.declaracionUrl} className="text-blue-700 hover:underline font-medium text-[11px]" target="_blank" rel="noreferrer">Declaración de Patrimonio</a>   
</div>   
</div>   
</div>   
</div>   
))}   
</div>   
</div>   
)}   
</div>   
)}   
</div>   
);   
})}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : unidad.esDideco ? (   
<div className="space-y-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">   
<div className="md:col-span-7 space-y-2">   
<span className="font-bold text-slate-900 block text-xs">Facultades, Funciones o Atribuciones:</span>   
<div className="text-slate-700 whitespace-pre-line text-xs leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.contenido}   
</div>   
</div>   
  
<div className="md:col-span-3 space-y-1.5">   
<span className="font-bold text-slate-900 block text-xs">Fuente Legal:</span>   
<div className="font-mono text-slate-600 whitespace-pre-line text-xs bg-slate-50 p-3 rounded-lg border border-slate-100">   
{unidad.fuenteLegal}   
</div>   
</div>   
  
<div className="md:col-span-2 space-y-1.5 text-center">   
<span className="font-bold text-slate-900 block text-xs">Enlace a la Publicación o Archivo Correspondiente:</span>   
<div className="flex flex-col items-center justify-center pt-2 gap-1">   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="text-blue-700 font-bold hover:underline text-xs text-center">   
Enlace Ley 18.695   
</a>   
<a href={unidad.fuenteLegalUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center mt-1">   
<FileText className="w-6 h-6 text-red-600" />   
</a>   
</div>   
</div>   
</div>   
  
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">   
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[120px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Director de Desarrollo Comunitario:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={unidad.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={unidad.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{unidad.subUnidadesFinanzas && unidad.subUnidadesFinanzas.map((sub) => {   
const isDeptoOpen = deptosDidecoAbiertos[sub.id] || false;   
return (   
<div key={sub.id} className="bg-white rounded-xl border border-slate-200 shadow-xs">   
<div   
onClick={() => toggleDeptoDideco(sub.id)}   
className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"   
>   
<span className="text-xs font-bold text-slate-900">   
{sub.nombre}   
</span>   
<button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">   
<span>Ver detalle</span>   
{isDeptoOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}   
</button>   
</div>   
  
{isDeptoOpen && (   
<div className="p-4 border-t border-slate-100 bg-white space-y-4 rounded-b-xl">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50/60 p-4 rounded-lg border border-slate-200">   
<div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[90px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Jefatura:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío para llenar ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-1">   
<a href={sub.curriculumUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={sub.declaracionUrl} className="text-blue-700 hover:underline font-medium" target="_blank" rel="noreferrer">Declaración de Patrimonio e Intereses</a>   
</div>   
</div>   
</div>   
</div>   
  
{sub.personas && sub.personas.length > 0 && (   
<div className="space-y-3 pt-2">   
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">   
{sub.personas.map((p) => (   
<div key={p.id} className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 items-center shadow-xs">   
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-center text-slate-400 italic text-xs h-full min-h-[90px]">   
[ Sin datos de foto ]   
</div>   
  
<div className="space-y-1.5 text-xs">   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Oficina:</span>   
<span className="col-span-2 text-slate-800 font-semibold">{p.nombreDepto}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">E-mail:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Secretaria:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-400 italic">[ Campo vacío ]</span>   
</div>   
<div className="grid grid-cols-3 pb-0.5 items-center">   
<span className="font-bold text-slate-900">Enlace:</span>   
<div className="col-span-2 flex flex-col gap-0.5">   
<a href={p.curriculumUrl} className="text-blue-700 hover:underline font-medium text-[11px]" target="_blank" rel="noreferrer">Curriculum Vitae</a>   
<a href={p.declaracionUrl} className="text-blue-700 hover:underline font-medium text-[11px]" target="_blank" rel="noreferrer">Declaración de Patrimonio</a>   
</div>   
</div>   
</div>   
</div>   
))}   
</div>   
</div>   
)}   
</div>   
)}   
</div>   
);   
})}   
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Diagrama de la Estructura Orgánica</span>   
<a href={unidad.diagramaUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors flex items-center justify-center">   
<ExternalLink className="w-5 h-5 text-blue-600" />   
</a>   
</div>   
<div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">   
<span className="font-bold text-slate-900 text-xs">Reglamento Interno</span>   
<a href={unidad.reglamentoInternoUrl} target="_blank" rel="noreferrer" className="p-2.5 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors flex items-center justify-center">   
<FileText className="w-5 h-5 text-red-600" />   
</a>   
</div>   
</div>   
  
</div>   
) : (   
<div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">   
<div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-lg border border-slate-100">   
<div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-slate-300">   
<User className="w-10 h-10 text-slate-400" />   
</div>   
<span className="font-bold text-slate-900 text-sm">{unidad.autoridad}</span>   
</div>   
  
<div className="md:col-span-2 space-y-2 text-xs">   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Cargo:</span>   
<span className="col-span-2 text-slate-700">{unidad.nombre}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">E-mail:</span>   
<a href={`mailto:${unidad.email}`} className="col-span-2 text-blue-700 hover:underline">{unidad.email}</a>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Secretaría:</span>   
<span className="col-span-2 text-slate-700">{unidad.secretaria}</span>   
</div>   
<div className="grid grid-cols-3 border-b pb-1.5">   
<span className="font-bold text-slate-900">Teléfono:</span>   
<span className="col-span-2 text-slate-700">{unidad.telefono}</span>   
</div>   
</div>   
</div>   
)}   
  
{!unidad.esConsejoConsultivo && (   
<div className="flex justify-end pt-2">   
<button   
onClick={() => toggleUnidad(unidad.id)}   
className="px-3 py-1.5 bg-slate-200 text-slate-700 font-semibold rounded hover:bg-slate-300 transition-colors cursor-pointer"   
>   
Cerrar detalle   
</button>   
</div>   
)}   
  
</div>   
)}   
</div>   
);   
})   
) : (   
<div className="p-8 text-center text-sm text-slate-500 bg-white rounded-xl border border-slate-200">   
No se encontró la unidad u órgano seleccionado.   
</div>   
)}   
</div>   

<div className="border-t border-slate-200 pt-4 flex justify-between items-center">  
<button  
onClick={onVolver}  
className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-all cursor-pointer flex items-center gap-2"  
>  
<ArrowLeft className="w-4 h-4" /> Volver a sección principal  
</button>  
</div>  
</div>  
);  
}