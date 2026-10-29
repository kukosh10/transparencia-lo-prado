import { ExternalLink } from 'lucide-react';

interface ProgramaIntermediario {
  nombre: string;
  requisitos: string;
  objetivo: string;
  fechaLey: string;
  numeroLey?: string;
  nominaDisponible: boolean;
}

const programas: ProgramaIntermediario[] = [
  {
    nombre: 'Programa Subsidio Único Familiar',
    requisitos:
      'Puede postular la madre, padre o tutor que tenga a su cargo el cuidado del menor de 18 años. Debe presentar cédula de identidad y acreditar los requisitos establecidos para la asignación familiar.',
    objetivo:
      'Subsidio destinado a personas de escasos recursos que no pueden acceder al beneficio de asignación familiar del régimen contributivo.',
    fechaLey: '28.07.2006',
    nominaDisponible: true
  },
  {
    nombre: 'Programa Subsidio Prenatal',
    requisitos:
      'Mujeres embarazadas con quinto mes de gestación, con cédula de identidad y puntaje igual o inferior a 11.734 en la Ficha de Protección Social. Certificado extendido por matrona que acredite 5 meses de embarazo.',
    objetivo:
      'Subsidio maternal que se otorga a mujeres embarazadas que cumplen los requisitos del Subsidio Familiar.',
    fechaLey: '28.07.2006',
    nominaDisponible: false
  },
  {
    nombre: 'Programa Subsidio Familiar “Duplo”',
    requisitos:
      'Puede postular la madre, padre o tutor que tenga a su cargo el cuidado del menor de 18 años con discapacidad física, psíquica o sensorial. Debe presentar cédula de identidad, contar con puntaje igual o inferior a 11.734, certificado de nacimiento para asignación familiar, copia de la cartola de carné de control sano al día para niños menores de 6 años, certificado de alumno regular del año en curso para niños mayores de 6 años y Resolución de Invalidez de COMPIN correspondiente al domicilio.',
    objetivo:
      'Subsidio Familiar destinado a personas con menores de edad a su cargo que presentan discapacidad.',
    fechaLey: '28.07.2006',
    nominaDisponible: false
  },
  {
    nombre: 'Programa Subsidio Agua Potable',
    requisitos: 'Cumplir los requisitos establecidos para acceder al subsidio de agua potable.',
    objetivo:
      'Subsidio económico otorgado por el Estado al consumo de agua potable, consistente en un porcentaje de hasta 50% del valor del consumo de agua potable de cada grupo familiar, con un tope de 15 m3.',
    fechaLey: '17.01.1989',
    numeroLey: '18.778',
    nominaDisponible: true
  },
  {
    nombre: 'Programa Pensión Básica de Invalidez',
    requisitos: 'Acreditar la condición de invalidez y cumplir los requisitos establecidos para el beneficio.',
    objetivo:
      'Subsidio monetario otorgado por el Estado a las personas que tienen algún tipo de invalidez, carecen de recursos y no perciben una pensión social. Una vez cumplidos los 65 años, el beneficiario debe postular a Pensión Básica Solidaria de Vejez.',
    fechaLey: '28.07.2006',
    nominaDisponible: false
  },
  {
    nombre: 'Programa Subsidios de Discapacidad para Niños y Niñas con Deficiencia Mental',
    requisitos:
      'Niño o niña menor de 18 años que presente algún grado de discapacidad mental, evaluada y certificada por la Comisión de Medicina Preventiva e Invalidez (COMPIN). Ficha de Protección Social con un puntaje no superior a los 8.500 puntos, carecer de recursos, es decir, no tener ingresos propios ni per cápita del grupo familiar superiores al 50% de la Pensión Mínima; certificado de residencia, certificado de nacimiento original, cédula de identidad del postulante y cédula de identidad de la persona que tenga a su cargo al menor.',
    objetivo: 'Programa de subsidio de discapacidad dirigido a niños y niñas con deficiencia mental.',
    fechaLey: '28.07.2006',
    nominaDisponible: false
  }
];

const baseDatos = [
  { etiqueta: 'Unidad, órgano interno o dependencia que lo gestiona', valor: 'DIDECO / DEPTO. SUBSIDIOS' },
  { etiqueta: 'Monto total asignado al programa o beneficio', valor: 'Asignados por el Estado' },
  { etiqueta: 'Tipo unidad monetaria', valor: 'Pesos' },
  { etiqueta: 'Inicio período o plazo de postulación', valor: '01.01.2015' },
  { etiqueta: 'Fin período o plazo de postulación', valor: '31.01.2015' },
  { etiqueta: 'Plazos asociados al procedimiento de evaluación y asignación', valor: 'No aplica' },
  { etiqueta: 'Tipo de denominación', valor: 'Ley' },
  { etiqueta: 'Denominación', valor: 'Ley' },
  { etiqueta: 'Número', valor: '18.695' },
  { etiqueta: 'Razones de exclusión de datos', valor: 'Ya que son postulaciones que se realizan durante el año en curso' }
];

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

export default function Seccion9_2_2016({ anio = '2016' }: { anio?: string }) {
  const es2014 = anio === '2014';
  const usaDatos2013 = ['2012', '2011', '2010', '2009'].includes(anio);
  const fechaPublicacion = (programa: ProgramaIntermediario) =>
    es2014 && programa.nombre !== 'Programa Subsidio Agua Potable' ? '26.07.2006' : programa.fechaLey;

  return (
    <section aria-label={`Programas de subsidios con intermediario ${anio}`} className="space-y-4">
      {programas.map((programa) => (
        <article key={programa.nombre} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
          <header className="px-4 py-4 sm:px-5">
            <span className="inline-flex rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
              Subsidios y Beneficios como Intermediario · {anio}
            </span>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">{programa.nombre}</h3>
          </header>
          <dl className="grid gap-x-6 gap-y-4 border-t border-slate-100 bg-slate-50/80 px-4 py-4 sm:grid-cols-2 sm:px-5 lg:grid-cols-3">
            {[
              { etiqueta: 'Tipo de subsidio o beneficio', valor: programa.nombre },
              ...baseDatos.slice(0, 1),
              { etiqueta: 'Enlace a los requisitos y antecedentes para postular', valor: 'Consultar requisitos' },
              ...baseDatos.slice(1, 3),
              { etiqueta: 'Inicio período o plazo de postulación', valor: es2014 || usaDatos2013 ? 'Inicio: 01/01/2013' : '01.01.2015' },
              { etiqueta: 'Fin período o plazo de postulación', valor: es2014 || usaDatos2013 ? 'Término: 31/12/2013' : '31.01.2015' },
              { etiqueta: 'Criterio de evaluación y asignación', valor: 'Consultar criterio de evaluación' },
              {
                etiqueta: 'Período o plazo de postulación',
                valor: programa.nombre === 'Programa Subsidio Único Familiar' ? 'Mensual' : 'No aplica'
              },
              { etiqueta: 'Objetivo del subsidio o beneficio', valor: programa.objetivo },
              { etiqueta: 'Tipo de denominación', valor: 'Ley' },
              { etiqueta: 'Denominación', valor: 'Ley' },
              { etiqueta: 'Número', valor: programa.numeroLey ?? '18.695' },
              { etiqueta: 'Fecha de publicación o dictación', valor: fechaPublicacion(programa) },
              { etiqueta: 'Enlace a la publicación o archivo correspondiente', valor: 'Ver publicación' },
              { etiqueta: 'Número de beneficiarios', valor: 'Indefinido' },
              { etiqueta: 'Razones de exclusión de datos', valor: 'Ya que son postulaciones que se realizan durante el año en curso' },
              { etiqueta: 'Enlace a nómina de beneficiarios', valor: programa.nominaDisponible ? 'Ver nómina' : 'No aplica' },
              { etiqueta: 'Enlace a mayor información', valor: programa.nombre }
            ].map((dato) => (
              <div key={dato.etiqueta} className="min-w-0">
                <dt className="text-xs font-medium text-slate-500">{dato.etiqueta}</dt>
                <dd className="mt-1 break-words text-xs leading-relaxed text-slate-800">
                  {dato.etiqueta === 'Enlace a los requisitos y antecedentes para postular' ||
                  dato.etiqueta === 'Criterio de evaluación y asignación' ||
                  dato.etiqueta === 'Enlace a la publicación o archivo correspondiente' ||
                  dato.etiqueta === 'Enlace a nómina de beneficiarios' && programa.nominaDisponible ||
                  dato.etiqueta === 'Enlace a mayor información' ? (
                    <EnlaceWeb etiqueta={dato.valor} />
                  ) : (
                    dato.valor
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </section>
  );
}
