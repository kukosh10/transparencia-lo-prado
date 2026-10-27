import { ExternalLink } from 'lucide-react';
import PdfLinkButton from '../PdfLinkButton';

interface ProgramaIntermediario2013 {
  nombre: string;
  unidad: string;
  periodo: string;
  monto: string;
  objetivo: string;
  acto?: string;
  fecha?: string;
  tipoEnlace: 'pdf' | 'web';
  enlaceNomina?: boolean;
}

const programas: ProgramaIntermediario2013[] = [
  {
    nombre: 'Aplicación Ficha de Protección Social y del Nuevo Cuestionario 2012',
    unidad: 'DIDECO / ESTRATIFICACIÓN SOCIAL',
    periodo: 'Desde: 01.06.2012 · Hasta: 30.03.2013',
    monto: '$34.158.558',
    objetivo: 'Aplicar la nueva Ficha Social a 13.748 familias con el fin de medir su vulnerabilidad.',
    acto: 'Decreto Alcaldicio N° 1631',
    fecha: '25.06.2012',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Apoyo Integral al Adulto Mayor Vínculos',
    unidad: 'DIDECO / OFICINA DEL ADULTO MAYOR',
    periodo: 'Inicio: Agosto 01 de 2012 · Término Ejecución: Abril 30 de 2013 · Término Convenio: Junio 30 de 2013',
    monto: '$9.915.400',
    objetivo: 'Contribuir a la generación de condiciones que permitan que las personas mayores de 65 años de edad que viven en condiciones de vulnerabilidad cuenten con los subsidios que les corresponden conforme a la ley, accedan en forma preferente al conjunto de prestaciones sociales pertinentes y estén integradas a la comunidad.',
    acto: 'Decreto Alcaldicio N° 1776',
    fecha: '12.07.2012',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Habitabilidad-Vínculos',
    unidad: 'DIDECO / OFICINA DEL ADULTO MAYOR',
    periodo: 'Inicio: Septiembre de 2012 · Término Ejecución: Enero 22 de 2013 · Ampliación de Plazo: Marzo 22 de 2013 · Término Convenio: Junio 30 de 2013',
    monto: '$21.144.015',
    objetivo: 'Que los beneficiarios del Programa alcancen condiciones mínimas de calidad de vida en la dimensión de habitabilidad de este subsistema. Incluye mejoramiento de espacios para la vivienda, dormitorio, cocina y otros.',
    acto: 'Decreto Alcaldicio N° 2363',
    fecha: '10.09.2012',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Proyecto Integración e Inserción Social NNA Infractores de Ley y/o Vulnerados en sus Derechos',
    unidad: 'DIDECO / BARRIO EN PAZ',
    periodo: 'Inicio: 16.05.2012 · Término: 16.05.2013',
    monto: '$22.000.000',
    objetivo: 'Fortalecer y potenciar conductas prosociales con el propósito de disminuir situaciones de riesgo asociadas a la violencia y a la delincuencia en niños, niñas y adolescentes en situación de vulnerabilidad.',
    acto: 'Decreto Alcaldicio N° 1310',
    fecha: '22.05.2013',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Proyecto Mediación Comunitaria entre las Villas Teniente Cruz, Diego Portales, La Reconquista y Rafael Hernández',
    unidad: 'DIDECO / BARRIO EN PAZ',
    periodo: 'Inicio: 22.06.2012 · Hasta el 22.06.2013',
    monto: '$16.941.312',
    objetivo: 'Prevenir la violencia en el ámbito vecinal y/o comunitario a través de la resolución pacífica de conflictos en un sistema integrado de justicia local.',
    acto: 'Decreto Alcaldicio N° 1619',
    fecha: '21.08.2012',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Proyecto Lo Prado Recupera Sus Espacios Comunitarios',
    unidad: 'DIDECO / BARRIO EN PAZ',
    periodo: 'Inicio: 22.06.2012 · Término: 22.06.2013',
    monto: '$61.980.14',
    objetivo: 'Recuperar y mejorar espacios públicos para fortalecer la pertenencia de los vecinos con sus espacios, disminuir la deserción escolar y optimizar acciones de control y fiscalización.',
    acto: 'Decreto Alcaldicio N° 1618',
    fecha: '21.06.2012',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'OPD Lo Prado',
    unidad: 'DIDECO / OPD',
    periodo: 'Inicio: 01.03.2012 · Término: 01.03.2015',
    monto: '$85.187.561',
    objetivo: 'Interrumpir situaciones de vulneración de derechos en niños, niñas y adolescentes, y colaborar en la creación de una cultura de derechos a nivel comunal.',
    acto: 'Decreto Alcaldicio N° 810',
    fecha: '01.03.2013',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'SENDA Previene',
    unidad: 'DIDECO / SENDA PREVIENE',
    periodo: 'Inicio: 01.03.2012 · Término: 01.03.2015',
    monto: '$22.000.000',
    objetivo: 'Instalar una política de drogas a nivel comunal mediante oficinas, profesionales y actividades de SENDA, en convenio con los municipios.',
    acto: 'Decreto Alcaldicio N° 698',
    fecha: '27.02.2013',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Programa Mujer Trabajadora y Jefa de Hogar',
    unidad: 'DIDECO / MUJER TRABAJADORA Y JEFA HOGAR',
    periodo: 'Inicio: 01.01.2013 · Término: 21.12.2013',
    monto: '$22.005.000',
    objetivo: 'Contribuir a la inserción laboral de calidad de las mujeres de la comuna de Lo Prado, entregando herramientas para enfrentar las principales barreras de acceso que enfrentan en el mercado del trabajo.',
    acto: 'Decreto Alcaldicio N° 438',
    fecha: '01.02.2013',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Proyecto Piloto Socio Productivo Elaboración de Oportunidades',
    unidad: 'DIDECO / PROTECCIÓN SOCIAL',
    periodo: 'Desde: Junio 2012 · Hasta: Julio 2013',
    monto: '$25.000.000',
    objetivo: 'Financiar proyectos orientados al desarrollo de iniciativas socio productivas cuyo fin último sea aportar al desarrollo de estrategias de generación de ingresos en hombres y mujeres mayores de 18 años.',
    acto: 'Decreto Alcaldicio N° 1565',
    fecha: '02.08.2012',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Promoción de hábitos de vida saludable para embarazadas y sus parejas',
    unidad: 'DIDECO / CHILE CRECE CONTIGO',
    periodo: 'Inicio: 26.12.2012 · Término: 23.12.2013',
    monto: '$20.000.000',
    objetivo: 'Fomentar hábitos y estilos de vida saludable en mujeres embarazadas y sus parejas, y fortalecer el bienestar y autocuidado de las beneficiarias.',
    acto: 'Decreto Alcaldicio N° 256',
    fecha: '17.01.2013',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Fortalecimiento Municipal Subsistema Chile Crece Contigo',
    unidad: 'DIDECO / CHILE CRECE CONTIGO',
    periodo: 'Inicio: 26.12.2012 · Término: 31.05.2013',
    monto: '$4.000.000',
    objetivo: 'Fortalecer la coordinación y gestión local del programa Chile Crece Contigo en la comuna de Lo Prado.',
    acto: 'Decreto Alcaldicio N° 1996',
    fecha: '06.08.2012',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Fondo de Intervenciones de apoyo al desarrollo Infantil',
    unidad: 'DIDECO / UNIDAD DE ACOMPAÑAMIENTO INGRESO ÉTICO FAMILIAR',
    periodo: 'Inicio: 04.07.2012 · Término: 31.05.2013',
    monto: '$12.300.000',
    objetivo: 'Contribuir a la continuidad de la intervención biopsicosocial otorgada por el Sistema de Protección Chile Crece Contigo.',
    acto: 'Decreto Alcaldicio N° 2056',
    fecha: '09.08.2012',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Programa de Acompañamiento Sociolaboral del Ingreso Ético Familiar',
    unidad: 'DIDECO / UNIDAD DE ACOMPAÑAMIENTO INGRESO ÉTICO FAMILIAR',
    periodo: 'Inicio: 15.01.2013 · Término: 31.12.2013',
    monto: '$23.788.156',
    objetivo: 'Mejorar la capacidad de las personas para generar ingresos de forma autónoma y mejorar sus condiciones de empleabilidad y participación en el ámbito laboral.',
    acto: 'Decreto Alcaldicio N° 712',
    fecha: '01.03.2013',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Programa de Apoyo Psicosocial Puente, entre la familia y sus derechos y Programa de acompañamiento Psicosocial del Ingreso Ético Familiar',
    unidad: 'DIDECO / UNIDAD DE ACOMPAÑAMIENTO INGRESO ÉTICO FAMILIAR',
    periodo: 'Inicio: 15.01.2013 · Término: 31.12.2013',
    monto: '$40.116.128',
    objetivo: 'Promover el desarrollo de habilidades personales y familiares necesarias para satisfacer condiciones mínimas de calidad de vida, fortalecer la vinculación efectiva de las familias con las redes sociales y el acceso a los beneficios que otorgan.',
    acto: 'Decreto Alcaldicio N° 534',
    fecha: '06.02.2013',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Aplicación Ficha de Protección Social y del Nuevo Cuestionario Año 2013',
    unidad: 'DIDECO / ESTRATIFICACIÓN SOCIAL',
    periodo: 'Inicio: 17.05.2013 · Término: 31.12.2013',
    monto: '$44.044.562',
    objetivo: 'Aplicar la Nueva Ficha Social a 14.097 familias de la comuna de Lo Prado.',
    acto: 'Decreto Alcaldicio N° 1298',
    fecha: '08.05.2013',
    tipoEnlace: 'pdf',
    enlaceNomina: true
  },
  {
    nombre: 'Programa Subsidio Único Familiar',
    unidad: 'DIDECO / DEPTO. SUBSIDIOS',
    periodo: 'Inicio: 01/01/2013 · Término: 31/12/2013',
    monto: 'Asignados por el Estado',
    objetivo: 'Puede postular la madre, padre o tutor a cargo del cuidado del menor de 18 años. Debe presentar cédula de identidad y cumplir los requisitos para la asignación familiar.',
    fecha: '26.07.2006',
    tipoEnlace: 'web',
    enlaceNomina: true
  },
  {
    nombre: 'Programa Subsidio Prenatal',
    unidad: 'DIDECO / DEPTO. SUBSIDIOS',
    periodo: 'Inicio: 01/01/2013 · Término: 31/12/2013',
    monto: 'Asignados por el Estado',
    objetivo: 'Mujeres embarazadas con quinto mes de gestación, cédula de identidad, puntaje igual o inferior a 11.734 y certificado extendido por matrona.',
    fecha: '26.07.2006',
    tipoEnlace: 'web',
    enlaceNomina: false
  },
  {
    nombre: 'Programa Subsidio Único Familiar “Duplo”',
    unidad: 'DIDECO / DEPTO. SUBSIDIOS',
    periodo: 'Inicio: 01/01/2013 · Término: 31/12/2013',
    monto: 'Asignados por el Estado',
    objetivo: 'Subsidio para menores de 18 años con discapacidad física, psíquica o sensorial, con antecedentes y resolución de invalidez COMPIN.',
    fecha: '26.07.2006',
    tipoEnlace: 'web',
    enlaceNomina: false
  },
  {
    nombre: 'Programa Subsidio Agua Potable',
    unidad: 'DIDECO / DEPTO. SUBSIDIOS',
    periodo: 'Inicio: 01/01/2013 · Término: 31/12/2013',
    monto: 'Asignados por el Estado',
    objetivo: 'Subsidio económico al consumo de agua potable de hasta 50% del valor del consumo, con un tope de 15 m3.',
    acto: 'Ley 18.778',
    fecha: '17.01.1989',
    tipoEnlace: 'web',
    enlaceNomina: true
  },
  {
    nombre: 'Programa Pensión Básica de Invalidez',
    unidad: 'DIDECO / DEPTO. SUBSIDIOS',
    periodo: 'Inicio: 01/01/2013 · Término: 31/12/2013',
    monto: 'Asignados por el Estado',
    objetivo: 'Subsidio monetario estatal para personas con invalidez, carentes de recursos y sin previsión social.',
    fecha: '26.07.2006',
    tipoEnlace: 'web',
    enlaceNomina: false
  },
  {
    nombre: 'Programa Subsidios de Discapacidad para Niños y Niñas con Deficiencia Mental',
    unidad: 'DIDECO / DEPTO. SUBSIDIOS',
    periodo: 'Inicio: 01/01/2013 · Término: 31/12/2013',
    monto: 'Asignados por el Estado',
    objetivo: 'Subsidio para menores de 18 años con discapacidad mental acreditada por COMPIN que cumplan los requisitos sociales y económicos.',
    fecha: '26.07.2006',
    tipoEnlace: 'web',
    enlaceNomina: false
  }
];

export default function Seccion9_2_2013() {
  return (
    <section aria-label="Programas de subsidios con intermediario 2013" className="space-y-4">
      {programas.map((programa) => (
        <article key={programa.nombre} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
          <header className="px-4 py-4 sm:px-5">
            <span className="inline-flex rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
              Subsidios y Beneficios como Intermediario · 2013
            </span>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">{programa.nombre}</h3>
          </header>
          <dl className="grid gap-x-6 gap-y-4 border-t border-slate-100 bg-slate-50/80 px-4 py-4 sm:grid-cols-2 sm:px-5 lg:grid-cols-3">
            <Dato etiqueta="Unidad, órgano interno o dependencia que lo gestiona" valor={programa.unidad} />
            <Dato etiqueta="Período de aplicación o vigencia" valor={programa.periodo} />
            <Dato etiqueta="Unidad monetaria" valor="Pesos" />
            <Dato etiqueta="Monto total asignado al programa o beneficio" valor={programa.monto} />
            <Dato etiqueta="Objetivo del subsidio o beneficio" valor={programa.objetivo} />
            {programa.acto && <Dato etiqueta="Fuente legal" valor={programa.acto} />}
            {programa.fecha && <Dato etiqueta="Fecha de publicación o dictación" valor={programa.fecha} />}
            <div className="min-w-0">
              <dt className="text-xs font-medium text-slate-500">Enlace a la publicación o archivo correspondiente</dt>
              <dd className="mt-1">
                {programa.tipoEnlace === 'pdf' ? (
                  <PdfLinkButton href="" />
                ) : (
                  <EnlaceWeb etiqueta="Ver publicación" />
                )}
              </dd>
            </div>
            <Dato etiqueta="Unidad que lo gestiona" valor={programa.unidad} />
            <Dato etiqueta="Número de beneficiarios" valor="Indefinido" />
            <Dato etiqueta="Monto total asignado" valor={programa.monto} />
            <Dato etiqueta="Período o plazo de postulación" valor="No aplica" />
            <Dato etiqueta="Criterio de acceso" valor="Residir en la comuna" />
            <div className="min-w-0">
              <dt className="text-xs font-medium text-slate-500">Enlace a mayor información</dt>
              <dd className="mt-1"><EnlaceWeb etiqueta="Mayor información" /></dd>
            </div>
            <div className="min-w-0">
              <dt className="text-xs font-medium text-slate-500">Enlace a nómina de beneficiarios</dt>
              <dd className="mt-1">
                {programa.enlaceNomina ? <EnlaceWeb etiqueta="Nómina de beneficiarios" /> : 'No aplica'}
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </section>
  );
}

function Dato({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-xs font-medium text-slate-500">{etiqueta}</dt>
      <dd className="mt-1 break-words text-xs leading-relaxed text-slate-800">{valor}</dd>
    </div>
  );
}

function EnlaceWeb({ etiqueta }: { etiqueta: string }) {
  return (
    <button
      type="button"
      onClick={() => window.open('about:blank', '_blank', 'noopener,noreferrer')}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
      {etiqueta}
    </button>
  );
}
