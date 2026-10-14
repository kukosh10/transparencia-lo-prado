import { useState } from 'react';
import { ChevronDown, Search, ArrowLeft } from 'lucide-react';


interface Seccion2_1Props {
  onVolver: () => void;
}

interface PotestadItem {
  tipo: string;
  denominacion: string;
  nombre: string;
  fuenteLegal: string;
  url: string;
}

export default function Seccion2_1({ onVolver }: Seccion2_1Props) {
  const [busqueda, setBusqueda] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('Todos');
  const [idExpandido, setIdExpandido] = useState<number | null>(null);

  // Datos oficiales extraídos de las tablas del portal institucional
  const potestadesFuncionesData: PotestadItem[] = [
    // --- ATRIBUCIONES ESENCIALES ---
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Administrar los bienes municipales y nacionales de uso público, incluido su subsuelo, existentes en la comuna, salvo que, en atención a su naturaleza o fines y de conformidad a la ley, la administración de estos últimos corresponda a otros órganos de la administración del Estado. En ejercicio de esta atribución, le corresponderá, previo informe del Consejo Económico y Social, de la comuna, asignar y cambiar la denominación de tales bienes. Asimismo, con el acuerdo de los dos tercios de los concejales en ejercicio, podrá hacer uso de esta atribución respecto de poblaciones, barrios y conjuntos habitacionales, en el territorio bajo su administración.',
      fuenteLegal: 'Artículo 5 letra c) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Adquirir y enajenar bienes muebles e inmuebles',
      fuenteLegal: 'Artículo 5 letra f) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Aplicar tributos que graven actividades o bienes que tengan una clara identificación local y estén destinados a obras de desarrollo comunal, para cuyo efecto las autoridades comunales deberán actuar dentro de las normas que la ley establezca',
      fuenteLegal: 'Artículo 5 letra h) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Aprobar los planes reguladores comunales y los planes seccionales de las comunas que formen parte de un territorio normadom por un plan regulador metropolitano o intercomunal, y pronunciarse sobre el proyecto de plan regulador comunal o de plan seccional decomunas que no formen parte de un territorio normado por un plan regulador metropolitano o intercomunal',
      fuenteLegal: 'Artículo 5 letra k) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Aprobar planos de detalle de los planes reguladores comunales y de los planes seccionales.',
      fuenteLegal: 'Artículo 5 letra l) Ley 18.695, Orgánica Constitucional de Municipalidades.',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Constituir corporaciones o fundaciones de derecho privado, sin fines de lucro, destinadas a la promoción y difusión del arte y la cultura. La participación municipal en estas corporaciones se regirá por las normas establecidas en el Párrafo 1° del Título VI de la Ley 18.695',
      fuenteLegal: 'Artículo 5 letra i) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Dictar resoluciones obligatorias con carácter general o particular',
      fuenteLegal: 'Artículo 5 letra d) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Ejecutar el plan comunal de desarrollo y los programas necesarios para su cumplimiento',
      fuenteLegal: 'Artículo 5 letra a) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Elaborar, aprobar, modificar y ejecutar el presupuesto municipal',
      fuenteLegal: 'Artículo 5 letra b) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Establecer derechos por los servicios que presten y por los permisos y concesiones que otorguen',
      fuenteLegal: 'Artículo 5 letra e) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Establecer, en el ámbito de la comuna, territorios denominados unidades vecinales, con el objeto de propender a un desarrollo equilibrado y a una adecuada canalización de la participación ciudadana',
      fuenteLegal: 'Artículo 5 letra j) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Atribuciones Esenciales',
      denominacion: 'Atribuciones Esenciales',
      nombre: 'Otorgar subvenciones y aportes para fines específicos a personas jurídicas de carácdter público o privado, sin fines de lucro, que colaboren directamente en el cumplimiento de sus funciones. Estas subvenciones y aportes no podrán exceder, en conjunto, al siete por ciento del presupuesto municipal. Este límite no incluye a las subvenciones y aportes que las municipalidades destinen a las actividades de educación, de salud o de atención de menores que les hayan sido traspasadas en virtud de lo establecido en el Decreto con Fuerza de Ley N° 1 3.063 de Interior, de 1980, cualquiera sea su forma de administración, ni las destinadas a los Cuerpos de Bomberos. Asimismo, este límite no incluye a las subvenciones o aportes que las Municipalidades de Santiago, Vitacura, Providencia y Las Condes efectúen a la "Corporación Cultural de la I. Municipalidad de Santiago", para el financiamiento de actividades de carácter cultural que beneficien a los habitantes de dichas comunas.',
      fuenteLegal: 'Artículo 5 letra g) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },

    // --- FUNCIONES FACULTATIVAS ---
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'El apoyo y el fomento de medidas de prevención en materia de seguridad ciudadana y colaborar en su implementación, sin perjuicio de lo dispuesto en el inciso segundo del artículo 101 de la Constitución Política',
      fuenteLegal: 'Artículo 4 letra j) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'El desarrollo de actividades de interés común en el ámbito local',
      fuenteLegal: 'Artículo 4 letra l) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'El transporte y tránsito públicos',
      fuenteLegal: 'Artículo 4 letra h) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'El turismo, el deporte y la recreación',
      fuenteLegal: 'Artículo 4 letra e) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'La asistencia social y jurídica',
      fuenteLegal: 'Artículo 4 letra c) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'La capacitación, la promoción del empleo y el fomento productivo',
      fuenteLegal: 'Artículo 4 letra d) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'La construcción de viviendas e infraestructuras sanitarias',
      fuenteLegal: 'Artículo 4 letra g) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'La educación y la cultura',
      fuenteLegal: 'Artículo 4 letra a) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'La prevención de riesgos y la prestación de auxilio en situaciones de emergencia y catástrofes',
      fuenteLegal: 'Artículo 4 letra i) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'La promoción de la igualdad de oportunidades entre hombres y mujeres',
      fuenteLegal: 'Artículo 4 letra k) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'La salud pública y la protección del medio ambiente',
      fuenteLegal: 'Artículo 4 letra b) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado',
      denominacion: 'Funciones facultativas...',
      nombre: 'La urbanización y la vialidad urbana y rural',
      fuenteLegal: 'Artículo 4 letra f) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },

    // --- FUNCIONES PRIVATIVAS ---
    {
      tipo: 'Funciones Privativas',
      denominacion: 'Funciones Privativas',
      nombre: 'Aplicar las disposiciones sobre construcción y urbanización, en la forma que determinen las leyes, sujetándose a las normas técnicas de carácter general que dicte el ministerio respectivo',
      fuenteLegal: 'Artículo 3 letra e) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones Privativas',
      denominacion: 'Funciones Privativas',
      nombre: 'Aplicar las disposiciones sobre transporte y tránsito públicos, dentro de la comuna, en la forma que determinen las leyes y normas técnicas de carácter general que dicte el ministerio respectivo',
      fuenteLegal: 'Artículo 3 letra d) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones Privativas',
      denominacion: 'Funciones Privativas',
      nombre: 'Ejercer la administración local de la Comuna, satisfacer las necesidades de la comunidad local y asegurar su participación en el progreso económico, social y cultural de la comuna',
      fuenteLegal: 'Artículo 1° Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones Privativas',
      denominacion: 'Funciones Privativas',
      nombre: 'Elaborar, aprobar y modificar el plan comunal de desarrollo cuya aplicación deberá armonizar con los planes regionales y nacionales',
      fuenteLegal: 'Artículo 3° letra a) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones Privativas',
      denominacion: 'Funciones Privativas',
      nombre: 'El aseo y ornato de la comuna',
      fuenteLegal: 'Artículo 3 letra f) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones Privativas',
      denominacion: 'Funciones Privativas',
      nombre: 'La planificación y regulación de la comuna y la confección del plan regulador comunal, de acuerdo con las normas legales vigentes',
      fuenteLegal: 'Artículo 3° letra b) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Funciones Privativas',
      denominacion: 'Funciones Privativas',
      nombre: 'La promoción del desarrollo comunitario',
      fuenteLegal: 'Artículo 3 letra c) Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },

    // --- OTRAS ATRIBUCIONES ---
    {
      tipo: 'Otras Atribuciones',
      denominacion: 'Otras Atribuciones',
      nombre: 'Asociarse entre Municipalidades para el cumplimiento de sus fines propios, de acuerdo con las reglas establecidas en el Párrafo 2º del Título VI de la Ley 18.695',
      fuenteLegal: 'Artículo 5 inciso quinto, Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Otras Atribuciones',
      denominacion: 'Otras Atribuciones',
      nombre: 'Atribuciones no esenciales que le confieren las leyes o que versen sobre materias que la Constitución Política de la República expresamente ha encargado sean reguladas por la ley común',
      fuenteLegal: 'Artículo 5 inciso segundo, Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Otras Atribuciones',
      denominacion: 'Otras Atribuciones',
      nombre: 'Celebrar contratos que impliquen la ejecución de acciones determinadas, a fin de atender las necesidades de la comunidad local',
      fuenteLegal: 'Artículo 8 inciso segundo, Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Otras Atribuciones',
      denominacion: 'Otras Atribuciones',
      nombre: 'Celebrar convenios con otros órganos de la Administración del Estado en las condiciones que señale la ley respectiva, sin alterar las funciones y atribuciones que corresponden al Municipio,',
      fuenteLegal: 'Artículo 8 inciso primero, Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Otras Atribuciones',
      denominacion: 'Otras Atribuciones',
      nombre: 'Colaborar en la fiscalización y en el cumplimiento de las disposiciones legales y reglamentarias correspondientes a la protección del medio ambiente, dentro de los límites comunales.',
      fuenteLegal: 'Artículo 5 inciso tercero, Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Otras Atribuciones',
      denominacion: 'Otras Atribuciones',
      nombre: 'Desarrollar actividades empresariales o participar en ellas sólo si una ley de quórum calificado la autoriza',
      fuenteLegal: 'Artículo 11, Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    },
    {
      tipo: 'Otras Atribuciones',
      denominacion: 'Otras Atribuciones',
      nombre: 'Otorgar concesiones para la prestación de determinados servicios municipales o para la administración de establecimientos o bienes específicos que posean o tengan a cualquier título',
      fuenteLegal: 'Artículo 8 inciso tercero, Ley 18.695, Orgánica Constitucional de Municipalidades',
      url: '#'
    }
  ];

  const tiposPotestades = [
    'Todos', 
    'Atribuciones Esenciales', 
    'Funciones facultativas a desarrollar en el ámbito de su territorio, directamente o con otros órganos de la administración del Estado', 
    'Funciones Privativas',
    'Otras Atribuciones'
  ];

  // Filtrado por buscador y selector de tipo
  const normasFiltradas = potestadesFuncionesData.filter((n) => {
    const coincideTexto =
      n.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      n.fuenteLegal.toLowerCase().includes(busqueda.toLowerCase()) ||
      n.tipo.toLowerCase().includes(busqueda.toLowerCase()) ||
      n.denominacion.toLowerCase().includes(busqueda.toLowerCase());
    
    const coincideFiltro = filtroTipo === 'Todos' || n.tipo === filtroTipo;

    return coincideTexto && coincideFiltro;
  });

  return (
    <div className="content-box-wide space-y-6">
      {/* Migas de pan / Navegación superior */}
      <div className="flex items-center gap-2 text-sm text-slate-700 bg-[#f0f4f9] p-3 rounded-lg border border-slate-200/80 font-semibold">
        <button 
          onClick={onVolver} 
          className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none p-0 font-semibold"
        >
          02. Potestades y Marco Normativo
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-900 font-bold">Potestades, Competencias, Responsabilidades, Funciones y/o Tareas</span>
      </div>

      <div className="bg-[#f0f4f9] p-6 rounded-xl shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-xl font-bold text-slate-900">
            Potestades, Competencias, Responsabilidades, Funciones y/o Tareas
          </h2>
          <span className="text-xs text-slate-500">Última actualización: 5/10/2026</span>
        </div>

        {/* Barra de Filtros y Buscador */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-sm font-medium text-slate-700 shrink-0">Filtrar por:</span>
            <select
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value)}
              className="bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 w-full md:w-80 cursor-pointer"
            >
              {tiposPotestades.map((tipo) => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Listado de Acordeones / Tarjetas */}
        <div className="space-y-3">
          {normasFiltradas.length > 0 ? (
            normasFiltradas.map((norma, index) => {
              const estaExpandido = idExpandido === index;
              return (
                <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all overflow-hidden">
                  <div 
                    onClick={() => setIdExpandido(estaExpandido ? null : index)} 
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50/60 gap-4"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-bold">
                        {norma.denominacion}
                      </span>
                      <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 max-w-3xl">
                        {norma.nombre}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-blue-600 shrink-0">
                      <span>Ver detalle</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${estaExpandido ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {estaExpandido && (
                    <div className="bg-slate-50 border-t border-slate-100 p-5 space-y-4 text-xs">
                      <p className="font-medium text-slate-900 text-sm bg-white p-3 rounded-lg border border-slate-200">
                        {norma.nombre}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="block text-slate-400 font-medium mb-1">Fuente Legal:</span>
                          <span className="font-semibold text-slate-800">{norma.fuenteLegal}</span>
                        </div>
                        <div>
                          <span className="block text-slate-400 font-medium mb-1">Documento / Archivo:</span>
                          <a href={norma.url} className="font-bold text-blue-600 hover:underline" target="_blank" rel="noreferrer">Ver enlace web de la publicación</a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500 text-sm">
              No se encontraron registros.
            </div>
          )}
        </div>
        
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