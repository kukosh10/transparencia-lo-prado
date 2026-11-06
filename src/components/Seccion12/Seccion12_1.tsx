import { ArrowLeft, FileText, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

interface Seccion12_1Props {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

const encabezados = [
  'Nombre del informe',
  'Número del informe (N°/año)',
  'Entidad que efectuó la auditoría',
  'Unidad auditada',
  'Materia',
  'Periodo auditado',
  'Fecha de inicio de la auditoría',
  'Fecha de término de la auditoría',
  'Enlace al informe final de auditoría',
  'Fecha de publicación del informe',
  'Enlace al informe de aclaraciones, si corresponde',
] as const;

const informesPorAnio: Record<string, readonly (readonly string[])[]> = {
  '2016': [
    ['Informe 2° trimestre 2016', '075/25.08.2016', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.04 al 30.06.2016', '10.08.2016', '25.08.2016', '', '25.08.2016', 'No hay'],
    ['Informe 1° trimestre 2016', '068/02.08.2016', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.01 al 31.03.2016', '15.06.2016', '02.08.2016', '', '02.08.2016', 'No hay'],
    ['2° informe Revisión aleatoria paletas publicitarias (Meta media Alcaldía)', '086/29.07.2016', 'Departamento de Auditoría', 'Departamento Prensa y Relaciones Públicas', 'Efectuar una revisión aleatoria de las paletas publicitarias instaladas en los cuatro territorios de la comuna', 'N/A', '22.06.2016', '29.07.2016', '', '29.07.2016', 'No hay'],
    ['Auditoría Corporación Municipal de Lo Prado', '058/24.06.2016', 'Departamento de Auditoría', 'Corporación Municipal de Lo Prado', 'Revisar la estructura de la deuda, analizar los ingresos por concepto de subvención y los gastos provisionales y varios del trimestre, para determinar si se cumplen las disposiciones legales y reglamentarias vigentes', 'Primer trimestre del 2015', '01.12.2015', '22.06.2016', '', '24.06.2016', 'No hay'],
    ['Revisión aleatoria paletas publicitarias (Meta media Alcaldía)', '048/30.05.2016', 'Departamento de Auditoría', 'Departamento Prensa y Relaciones Públicas', 'Efectuar una revisión aleatoria de las paletas publicitarias instaladas en los cuatro territorios de la comuna', 'N/A', '28.05.2016', '27.05.2016', '', '30.05.2016', 'No hay'],
    ['Auditoría Bienes muebles del municipio', '021/04.03.2016', 'Departamento de Auditoría', 'Oficina de Contabilidad de Bienes', 'Efectuar un control físico de los bienes muebles del municipio, para determinar el grado de eficiencia y confiabilidad del inventario municipal', 'Año 2015', '14.12.2015', '29.01.2016', '', '04.03.2016', 'No hay'],
    ['Autoevaluación de Transparencia Activa', '020/04.03.2016', 'Departamento de Auditoría', 'Municipalidad de Lo Prado', 'Revisión de los niveles de desarrollo y cumplimiento de cada una de las materias referidas según las exigencias de la Ley, su reglamento e instrucciones generales', 'Segundo semestre 2015', '01.02.2016', '24.02.2016', '', '04.03.2016', 'No hay'],
    ['Informe 4° trimestre 2015', '012/18.02.2016', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.10 al 31.12.2015', '08.02.2016', '18.02.2016', '', '18.02.2016', 'No hay'],
  ],
  '2015': [
    ['Meta de prioridad baja', '144/10.12.2015', 'Departamento Control Financiero', 'Diversas Unidades Técnicas', 'Tercer informe de Observaciones y Alcances de los Decretos de Pago', 'Julio a Noviembre 2014 y Julio a Noviembre 2015', '06.12.2015', '10.12.2015', '', '10.12.2015', 'No hay'],
    ['Informe 3° trimestre 2015', '139/26.11.2015', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.07 al 30.09.2015', '09.11.2015', '26.11.2015', '', '26.11.2015', 'No hay'],
    ['Autoevaluación de Transparencia Activa', '128/28.10.2015', 'Departamento de Auditoría', 'Municipalidad de Lo Prado', 'Revisión de los niveles de desarrollo y cumplimiento de cada una de las materias referidas según las exigencias de la Ley, su reglamento e instrucciones generales', 'Primer semestre 2015', '19.10.2015', '22.10.2015', '', '28.10.2015', 'No hay'],
    ['Control de avance físico y financiero de la Obra "Reparación Veredas Población Kennedy"', '119/02.10.2015', 'Departamento de Auditoría', 'Dirección de Obras Municipales', 'Revisión en terreno del avance físico de la obra PMU "Reparación Veredas Población Kennedy"', 'N/A', '07.09.2015', '30.09.2015', '', '02.10.2015', 'No hay'],
    ['Meta de prioridad alta, informe final matriz de riesgo', '110/31.08.2015', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Desarrollar y optimizar el trabajo en redes y equipos multisectoriales para la generación de un modelo de gestión colaborativa en la comuna de Lo Prado', 'N/A', '17.08.2015', '31.08.2015', '', '31.08.2015', 'No hay'],
    ['Arqueos fondos menores 2015', '107/27.08.2015', 'Departamento de Auditoría', 'Diversas unidades', 'Control sorpresivo deliberado a fondos menores', 'N/A', '21.08.2015', '25.08.2015', '', '27.08.2015', 'No hay'],
    ['Informe 2° trimestre 2015', '104/24.08.2015', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.04 al 30.06.2015', '10.08.2015', '24.08.2015', '', '24.08.2015', 'No hay'],
    ['Meta de prioridad baja', '101/14.08.2015', 'Departamento Control Financiero', 'Diversas Unidades Técnicas', 'Segundo informe de Observaciones y Alcances de los Decretos de Pago', 'Abril a Junio 2014 y Abril a Junio 2015', '01.08.2015', '13.08.2015', '', '14.08.2015', 'No hay'],
    ['Auditoría consumo de combustible 2012, 2013 y 2014', '082/02.07.2015', 'Departamento de Auditoría', 'Departamento de Servicios Generales', 'Revisar el uso y control de combustible de los vehículos municipales, para determinar el grado de eficiencia y confiabilidad de estos procesos, verificando el cumplimiento de la normativa vigente', 'Años 2012, 2013 y 2014', '01.02.2015', '17.06.2015', '', '02.07.2015', 'No hay'],
    ['Meta de prioridad media (2° parte)', '081/25.06.2015', 'Contralor Municipal', 'N/A', 'Charla de presentación de "Guía práctica de procesos de compra de la I. Municipalidad de Lo Prado"', 'N/A', '25.06.2015', '25.06.2015', '', '25.06.2015', 'No hay'],
    ['Meta de prioridad alta', '077/12.06.2015', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Desarrollar y optimizar el trabajo en redes y equipos multisectoriales para la generación de un modelo de gestión colaborativa en la comuna de Lo Prado', 'N/A', '29.05.2015', '12.06.2015', '', '12.06.2015', 'No hay'],
    ['Informe 1° trimestre 2015', '067/28.05.2015', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.01 al 31.03.2015', '27.04.2015', '28.05.2015', '', '28.05.2015', 'No hay'],
    ['Auditoría de reloj control de los funcionarios municipales', '060/18.05.2015', 'Departamento de Auditoría', 'Departamento de Recursos Humanos', 'Controlar la marcación de entrada y salida (asistencia) de los funcionarios municipales', 'Enero, Febrero y Marzo 2015', '10.04.2015', '15.05.2015', '', '18.05.2015', 'No hay'],
    ['Meta de prioridad baja', '058/14.05.2015', 'Departamento Control Financiero', 'Diversas Unidades Técnicas', 'Primer informe de Observaciones y Alcances de los Decretos de Pago', 'Enero a Marzo 2014 y Enero a Marzo 2015', '01.05.2015', '13.05.2015', '', '14.05.2015', 'No hay'],
    ['Informe 4° trimestre 2014', '044/08.04.2015', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.10 al 31.12.2014', '09.03.2015', '06.04.2015', '', '08.04.2015', 'No hay'],
    ['Meta de prioridad media (1° parte)', '036/30.03.2015', 'Contralor Municipal', 'N/A', 'Confección de guía práctica de procesos de compras de la I. Municipalidad de Lo Prado', 'N/A', '02.01.2015', '30.03.2015', '', '30.03.2015', 'No hay'],
    ['Arqueos fondos menores 2015', '035/25.03.2015', 'Departamento de Auditoría', 'Diversas unidades', 'Control sorpresivo deliberado a fondos menores', 'N/A', '13.03.2015', '13.03.2015', '', '25.03.2015', 'No hay'],
    ['Informe 3° trimestre 2014', '003/12.01.2015', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.07 al 30.09.2014', '22.12.2014', '12.01.2015', '', '12.01.2015', 'No hay'],
  ],
  '2014': [
    ['Auditoría señalética, demarcaciones y funciones de semáforos de la comuna', '198/11.12.2014', 'Departamento de Auditoría', 'Departamento Técnico de la Dirección de Tránsito', 'Seguimiento a subproceso de señalética, demarcaciones y funciones de semáforos de la Dirección de Tránsito', '01.01 al 30.09.2014', '10.11.2014', '10.12.2014', '', '11.12.2014', 'No hay'],
    ['Subvención Corporación Municipal 2013 y 2014', '197/10.12.2014', 'Departamento de Auditoría', 'Corporación Municipal de Lo Prado', 'Seguimiento a rendiciones años 2013 y observación subvenciones año 2014, entregadas a la Corporación Municipal de Lo Prado', '01.01 al 31.12.2013 y 01.01 al 31.12.2014', '01.12.2014', '09.12.2014', '', '10.12.2014', 'No hay'],
    ['Auditoría a Patentes Comerciales', '178/23.10.2014', 'Departamento de Auditoría', 'Departamento de Rentas Municipales', 'Establecer y dar certeza sobre los roles de las patentes de alcoholes limitada que se informaron al Concejo Municipal por el Departamento de Rentas Municipales', 'Segundo semestre 2013 y primer semestre 2014', '11.08.2014', '12.09.2014', '', '23.10.2014', 'No hay'],
    ['Informe 2° trimestre 2014', '160/15.10.2014', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.04 al 30.06.2014', '15.09.2014', '15.10.2014', '', '15.10.2014', 'No hay'],
    ['Informe 1° trimestre 2014', '104/17.06.2014', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.01 al 31.03.2014', '26.05.2014', '10.06.2014', '', '17.06.2014', 'No hay'],
    ['Auditoría al resguardo de bienes en la bodega municipal', '89/19.05.2014', 'Departamento de Auditoría', 'Bodega Central', 'Examen a los procedimientos de registro, recepción, almacenamiento y entrega de materiales desde el recinto de bodega municipal', 'Mayo a Diciembre 2013', '17.03.2014', '15.05.2014', '', '19.05.2014', 'No hay'],
    ['Subvención Corporación Municipal 2013', '056/20.03.2014', 'Departamento de Auditoría', 'Corporación Municipal de Lo Prado', 'Revisión de rendiciones de subvenciones entregadas a la Corporación Municipal de Lo Prado', '01.01 al 31.12.2013', '01.03.2014', '18.03.2014', '', '20.03.2014', 'No hay'],
    ['Informe 4° trimestre 2013', '30/30.01.2014', 'Departamento Control Financiero', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.10 al 31.12.2013', '01.01.2014', '29.01.2014', '', '30.01.2014', 'No hay'],
  ],
  '2013': [
    ['Informe 3° trimestre 2013', '147/30.12.2013', 'Departamento Control Financiero', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.07 al 30.09.2013', '01.12.2013', '29.12.2013', '', '30.12.2013', 'No hay'],
    ['Informe 2° trimestre 2013', '92/29.08.2013', 'Departamento Control Financiero', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.04 al 30.06.2013', '01.08.2013', '28.08.2013', '', '29.08.2013', 'No hay'],
    ['Informe 1° trimestre 2013', '63/07.06.2013', 'Departamento Control Financiero', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.01 al 31.03.2013', '06.05.2013', '06.06.2013', '', '07.06.2013', 'No hay'],
    ['Arqueos Fondos Menores 2013', '001/2013', 'Departamento de Auditoría', 'Municipal', 'Control sorpresivo deliberado a fondos menores', 'S/I', '29.04.2013', '06.05.2013', '', '07.05.2013', 'No hay'],
    ['Informe 4° Trimestre 2012', '004/2012', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.10 al 31.12.2012', '01.03.2013', '15.04.2013', '', '16.04.2013', 'No hay'],
    ['Subvención Corporación Municipal 2010, 2011 y 2012', '2013', 'Departamento de Auditoría', 'Corporación Municipal de Lo Prado', 'Revisión de rendición de Subvenciones a la Corporación Municipal de Lo Prado', '01.01.2010 al 31.12.2012', '01.04.2013', '23.04.2013', '', '05.03.2013', 'No hay'],
    ['Auditoría Bienestar 2010-2011', '2013', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Cumplimiento de normativa legal y correcto uso de los recursos', '01.01 al 31.12.2010 y 01.01 al 31.12.2011', '22.06.2012', '31.12.2012', '', '28.03.2013', 'No hay'],
  ],
  '2012': [
    ['Informe 3° Trimestre 2012', '3/2012', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.07 al 30.09.2012', '01.11.2012', '05.12.2012', '', '05.12.2012', 'No hay'],
    ['Informe 2° Trimestre 2012', '2/2012', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.04 al 30.06.2012', '01.07.2012', '22.08.2012', '', '22.08.2012', 'No hay'],
    ['Informe 1° Trimestre 2012', '1/2012', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.01 al 31.03.2012', '01.04.2012', '17.05.2012', '', '04.06.2012', 'No hay'],
    ['Auditoría Patentes CIPA', '2012', 'Departamento de Auditoría', 'Departamento de Finanzas y Departamento de Rentas Municipales', 'Evaluación de Ingresos por Patentes CIPA', '1° trimestre 2010 y 1° trimestre 2011', '01.07.2011', '29.12.2011', '', '12.01.2012', 'No hay'],
  ],
  '2011': [
    ['Informe 4° Trimestre 2011', '4/2011', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.10 al 31.12.2011', '01.02.2012', '01.03.2012', '', '02.03.2012', 'No hay'],
    ['Informe 3° Trimestre 2011', '3/2011', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.07 al 30.09.2011', '01.11.2011', '13.12.2011', '', '14.12.2011', 'No hay'],
    ['Informe 2° Trimestre 2011', '2/2011', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.04 al 30.06.2011', '01.08.2011', '08.09.2011', '', '13.09.2011', 'No hay'],
    ['Subvención Corporación Municipal 2010', '2010', 'Departamento de Auditoría', 'Corporación Municipal de Lo Prado', 'Revisión de rendición de Subvenciones a la Corporación Municipal de Lo Prado', '01.01 al 31.12.2010', '01.06.2011', '01.08.2011', '', '16.08.2011', 'No hay'],
    ['Arqueo Fondos Menores 2011', '2011', 'Departamento de Auditoría', '', 'Control sorpresivo deliberado a fondos menores', 'S/I', '01.07.2011', '29.07.2011', '', '16.08.2011', 'No hay'],
    ['Informe 1° Trimestre 2011', '1/2011', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.01 al 31.03.2011', '01.05.2011', '17.06.2011', '', '21.06.2011', 'No hay'],
    ['Segundo Arqueo Fondos Menores 2010', '2011', 'Departamento de Auditoría', '', 'Control sorpresivo deliberado a fondos menores', 'S/I', '01.12.2010', '28.12.2010', '', '03.01.2011', 'No hay'],
  ],
  '2010': [
    ['Informe 4° Trimestre 2010', '4/2010', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.10 al 31.12.2010', '01.02.2011', '02.03.2011', '', '08.03.2011', 'No hay'],
    ['Informe 3° Trimestre 2010', '3/2010', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.07 al 30.09.2010', '15.10.2010', '28.11.2010', '', '02.12.2010', 'No hay'],
    ['Auditoría Permisos de Circulación', '2010', 'Departamento de Auditoría', 'Departamento de Finanzas y Departamento de Permisos de Circulación', 'Verificación de la correcta percepción y recaudación de los ingresos', '01.01 al 31.03.2010', '01.08.2010', '10.11.2010', '', '23.11.2010', 'No hay'],
    ['Informe 2° Trimestre 2010', '2/2010', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.04 al 30.06.2010', '05.07.2010', '13.08.2010', '', '18.08.2010', 'No hay'],
    ['Auditoría Oficina Bienestar Municipal 2009', '2010', 'Departamento de Auditoría', 'Departamento de Finanzas', 'Cumplimiento de normativa legal y correcto uso de los recursos', '01.01 al 31.12.2009', '01.04.2010', '11.06.2010', '', '23.07.2010', 'No hay'],
    ['Informe 1° Trimestre 2010', '1/2010', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.01 al 31.03.2010', '01.05.2010', '24.06.2010', '', '01.07.2010', 'No hay'],
    ['Primer Arqueo Fondos Menores 2010', '2010', 'Departamento de Auditoría', '', 'Control sorpresivo deliberado a fondos menores', 'S/I', '01.03.2010', '11.03.2010', '', '12.03.2010', 'No hay'],
    ['Subvención Corporación Municipal 2009', '2009', 'Departamento de Auditoría', 'Corporación Municipal de Lo Prado', 'Revisión de rendición de Subvenciones a la Corporación Municipal de Lo Prado', '01.01 al 31.12.2009', '01.02.2010', '04.03.2010', '', '05.03.2010', 'No hay'],
    ['Observaciones Ejecución Presupuestaria 2009', '2010', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Análisis a la Ejecución Presupuestaria', '01.01 al 31.12.2009', '02.01.2010', '21.01.2010', '', '22.01.2010', 'No hay'],
  ],
  '2009': [
    ['Informe 4° Trimestre 2009', '4/2009', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.10 al 31.12.2009', '01.01.2010', '15.01.2010', '', '18.01.2010', 'No hay'],
    ['Informe 3° Trimestre 2009', '3/2009', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.07 al 30.09.2009', '01.10.2009', '14.12.2009', '', '14.12.2009', 'No hay'],
    ['Informe 2° Trimestre 2009', '2/2009', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.04 al 30.06.2009', '01.07.2009', '27.08.2009', '', '27.08.2009', 'No hay'],
    ['Informe 1° Trimestre 2009', '1/2009', 'Control Financiero y Presupuestario', 'Departamento de Finanzas', 'Estado de avance de la ejecución presupuestaria', '01.01 al 31.03.2009', '01.07.2009', '14.08.2009', '', '14.08.2009', 'No hay'],
  ],
};

const anios = Object.keys(informesPorAnio).sort((a, b) => Number(b) - Number(a));

export default function Seccion12_1({ onVolver, onVolverSeccion }: Seccion12_1Props) {
  const [anioSeleccionado, setAnioSeleccionado] = useState('2016');
  const [busqueda, setBusqueda] = useState('');
  const informesFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase('es');
    return informesPorAnio[anioSeleccionado].filter((informe) =>
      informe.join(' ').toLocaleLowerCase('es').includes(termino),
    );
  }, [anioSeleccionado, busqueda]);

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Auditorías
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Auditoría Interna</span>
      </nav>

      <header className="flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Fiscalización y auditorías</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Auditoría Interna</h2>
        </div>
        <label className="w-full text-xs font-medium text-slate-600 sm:w-48">
          Seleccione año
          <select
            value={anioSeleccionado}
            onChange={(event) => setAnioSeleccionado(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
          >
            {anios.map((anio) => <option key={anio} value={anio}>{anio}</option>)}
          </select>
        </label>
      </header>

      <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xs focus-within:border-blue-300">
        <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
        <span className="sr-only">Buscar auditorías internas</span>
        <input
          type="search"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          placeholder="Buscar por informe, unidad o materia..."
          className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </label>

      <section aria-label="Registro de auditorías internas" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] table-fixed border-collapse text-left text-xs lg:min-w-0">
            <colgroup>
              <col className="w-[13%]" />
              <col className="w-[6%]" />
              <col className="w-[7%]" />
              <col className="w-[8%]" />
              <col className="w-[22%]" />
              <col className="w-[9%]" />
              <col className="w-[7%]" />
              <col className="w-[7%]" />
              <col className="w-[7%]" />
              <col className="w-[7%]" />
              <col className="w-[7%]" />
            </colgroup>
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                {encabezados.map((encabezado) => (
                  <th key={encabezado} scope="col" className="border-b border-slate-200 px-3 py-3 font-semibold">{encabezado}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {informesFiltrados.map((informe, indiceInforme) => (
                <tr key={`${anioSeleccionado}-${informe[1]}-${indiceInforme}`} className="even:bg-slate-50/70">
                  {informe.map((dato, indice) => (
                    <td key={encabezados[indice]} className="max-w-80 border-b border-slate-100 px-3 py-2 align-top text-slate-700">
                      {indice === 8 ? (
                        <a
                          href={dato || 'about:blank'}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Abrir informe final: ${informe[0]}`}
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                        >
                          <FileText className="h-4 w-4 text-red-600" aria-hidden="true" />
                          Ver PDF
                        </a>
                      ) : dato}
                    </td>
                  ))}
                </tr>
              ))}
              {informesFiltrados.length === 0 && (
                <tr>
                  <td colSpan={encabezados.length} className="px-4 py-8 text-center text-sm text-slate-500">
                    No se encontraron auditorías que coincidan con la búsqueda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Auditorías
        </button>
      </div>
    </div>
  );
}
