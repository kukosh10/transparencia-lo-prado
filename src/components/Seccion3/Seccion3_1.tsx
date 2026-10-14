import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, ExternalLink, ArrowLeft, Search } from 'lucide-react';

interface Seccion3_1Props {
  onVolver: () => void;
}

interface UnidadAcordeon {
  id: string;
  nombre: string;
  etiquetaBadge: string;
  contenido: string;
  fuenteLegal: string;
  fechaPublicacion: string;
  fechaModificacion: string;
}

export default function Seccion3_1({ onVolver }: Seccion3_1Props) {
  const [busqueda, setBusqueda] = useState('');
  const [unidadesAbiertas, setUnidadesAbiertas] = useState<Record<string, boolean>>({});

  const toggleUnidad = (id: string) => {
    setUnidadesAbiertas(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const unidades: UnidadAcordeon[] = [
    {
      id: 'alcalde',
      nombre: 'ALCALDE',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `El alcalde es la máxima autoridad de la Municipalidad y en tal calidad le corresponderá su dirección y administración superior y la vigilancia de su funcionamiento.\n\nEn la condición antedicha, el alcalde deberá presentar, oportunamente y en forma fundada, a la aprobación del concejo, el plan comunal de desarrollo, el presupuesto municipal, el plan regulador, las políticas de la unidad de servicios de salud y educación y demás incorporados a su gestión, y las políticas y normas generales sobre licitaciones, adquisiciones, concesiones y permisos.\n\nEl alcalde tendrá las siguientes atribuciones:\na) Representar judicial y extrajudicialmente a la municipalidad;\nb) Proponer al concejo la organización interna de la municipalidad;\nc) Nombrar y remover a los funcionarios de su dependencia de acuerdo con las normas estatutarias que los rijan;\nd) Velar por la observancia del principio de la probidad administrativa dentro del municipio y aplicar medidas disciplinarias al personal de su dependencia, en conformidad con las normas estatutarias que los rijan;\ne) Administrar los recursos financieros de la municipalidad, de acuerdo con las normas sobre administración financiera del Estado;\nf) Administrar los bienes municipales y nacionales de uso público de la comuna que correspondan en conformidad a esta ley;\ng) Otorgar, renovar y poner término a permisos municipales;\nh) Adquirir y enajenar bienes muebles;\ni) Dictar resoluciones obligatorias de carácter general o particular;\nj) Delegar el ejercicio de parte de sus atribuciones exclusivas en funcionarios de su dependencia o en los delegados que designe, salvo las contempladas en las letras c) y d). Igualmente podrá delegar la facultad para firmar, bajo la fórmula "por orden del alcalde", sobre materias específicas;\nk) Coordinar el funcionamiento de la municipalidad con los órganos de la Administración del Estado que corresponda;\nl) Coordinar con los servicios públicos la acción de éstos en el territorio de la comuna;\nm) Ejecutar los actos y celebrar los contratos necesarios para el adecuado cumplimiento de las funciones de la municipalidad y de lo dispuesto en el artículo 37 de la Ley N° 18.575;\nn) Convocar y presidir, con derecho a voto, el concejo; como asimismo, convocar y presidir el consejo comunal de organizaciones de la sociedad civil;\nñ) Someter a plebiscito las materias de administración local, de acuerdo a lo establecido en los artículos 22 y siguientes; y\no) Autorizar la circulación de los vehículos municipales fuera de los días y horas de trabajo, para el cumplimiento de las funciones inherentes a la municipalidad.\n\nPodrá ordenar, a petición del Director de Obras Municipales, la demolición de los edificios existentes y el desalojo de sus ocupantes con el auxilio de la fuerza pública, con cargo al propietario, sin perjuicio de las demás sanciones que procedan, en aquellas propiedades que no cumplan con las disposiciones del plan regulador y que fueren parcialmente afectadas por siniestros, inexigido los plazos para la ejecución de trabajos de emergencia.\n\nPodrá ordenar el desalojo y la demolición de los bienhechurías, con cargo al propietario, con el auxilio de la fuerza pública si fuere necesario, sin perjuicio de imponer las multas que correspondan, vencido el plazo para el retiro de las construcciones provisorias.`,
      fuenteLegal: 'ART. 56, 63, 64, 65, 67 y 68\nLEY N° 18.695\nORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES\n\nART. 123 Y 124, LEY GENERAL DE URBANISMO Y CONSTRUCCIONES',
      fechaPublicacion: '28.07.2008 / 13.04.1978',
      fechaModificacion: '01.04.2014 / 29.10.2014'
    },
    {
      id: 'concejo',
      nombre: 'CONCEJO MUNICIPAL',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `El Concejo es una de las autoridades municipales, junto al(la) Alcalde(sa) que ex el mismo representante de la entidad.\nEl Concejo es un órgano colegiado y tiene carácter normativo, resolutivo y fiscalizador, encargado de hacer efectiva la participación de la comunidad local y de ejercer las atribuciones que señala la Ley 18.695 Orgánica Constitucional de Municipalidades. Está integrado por diez concejales elegidos popularmente según lo dispuesto en la Ley. El Concejo ha de ser presidido por el(la) Alcalde(sa) y, en su ausencia, por el(la) concejal(a) presente que haya obtenido en forma individual la mayor votación ciudadana en la elección respectiva, de acuerdo a lo determinado por el Tribunal Electoral Regional, y tendrá como Secretario al(la) Secretario(a) Municipal o quien le subrogue.\n1. Elegir al(a) Alcalde(sa), en caso de vacancia.\n2. Pronunciarse o aprobar, según corresponda, sobre las materias que se enumeran en las atribuciones del(la) Alcalde(sa) con coordinación previa con el Concejo*, del presente reglamento.\n3. Recomendar al(la) Alcalde(sa) prioridades en la formulación y ejecución de proyectos específicos y medidas concretas de desarrollo comunal.\n4. Citar o pedir información, a través del(la) Alcalde(sa), a los organismos o funcionarios municipales, cuando lo estime necesario, para pronunciarse sobre las materias de su competencia.\n5. Elegir, en un solo acto, a los integrantes del Directorio que le corresponda designar a la Municipalidad en cada Corporación o Fundación en que tenga participación, cualquiera sea el carácter de ésta o aquella. Estos/as Directores/as informarán al Concejo acerca de su gestión, como asimismo, acerca de la marcha de la Corporación o Fundación de cuyo Directorio forman parte.\n6. Autorizar los cometidos del(la) Alcalde(sa) y de los Concejales que signifiquen ausencia del territorio nacional.\n7. Autorizar los cometidos del(la) Alcalde(sa) y de los Concejales que signifiquen ausencia fuera del territorio de la comuna por más de 10 días.\n8. Informar de los cometidos y su costo en las actas del Concejo.\nFacultades Fiscalizadoras del Concejo:\nEl rol fiscalizador del Concejo se ve fortalecido por las siguientes atribuciones:\n1. Fiscalizar el cumplimiento de los planes y programas de inversión municipales y la ejecución del presupuesto municipal.\n2. Evaluar la gestión del(la) Alcalde(sa), especialmente para verificar que los actos municipales se hayan ajustado a las políticas, normas y acuerdos adoptados por el Concejo, en el ejercicio de sus facultades propias, formulándole las observaciones que le merezcan.\n3. Solicitar informe a las empresas, corporaciones o fundaciones municipales, y a las entidades que reciban aportes o subvenciones de la Municipalidad. En este último caso, la materia del informe sólo podrá consistir en el destino dado a los aportes o subvenciones municipales percibidas.\n4. Fiscalizar las unidades o servicios municipales.\n5. Supervisar el cumplimiento del Plan de Desarrollo Comunal.\n6. Disponer la contratación de una auditoría externa que evalúe la ejecución presupuestaria y el estado de situación financiera del municipio. Esta facultad podrá ejercerse sólo una vez al año, si los ingresos anuales superan las 6.250 U.T.M.\n7. Disponer la contratación de una auditoría externa que evalúe la ejecución del Plan de Desarrollo, la que deberá practicarse cada 3 años, si los ingresos anuales superan las 6.250 U.T.M.\n8. Examinar trimestralmente el programa de ingresos y gastos, introduciendo las modificaciones correctoras a que hubiere lugar, a proposición del(la) Alcalde(sa).\nLa fiscalización que le corresponde ejercer al concejo comprenderá también la facultad de evaluar la gestión del alcalde, especialmente para verificar que los actos municipales se hayan ajustado a las políticas, normas y acuerdos adoptados por el concejo, en el ejercicio de sus facultades fiscalizadoras del Concejo.\nEl concejo, por la mayoría de sus miembros, podrá disponer la contratación de una auditoría externa que evaluará la ejecución presupuestaria y el estado de situación financiera del municipio. Esta facultad podrá ejercerse sólo una vez al año en los municipios cuyos ingresos anuales superen las 6.250 unidades tributarias anuales, y cada dos años en los restantes municipios. Sin perjuicio de lo anterior, el concejo dispondrá de la contratación de una auditoría externa cada cuatro años, respectivamente, según la clasificación de los municipios por ingresos.\nEl concejo sólo podrá aprobar presupuestos debidamente financiados, correspondiéndole especialmente al jefe de la unidad encargada del control, o al funcionario que cumpla esas tareas, la obligación de representar a aquél, mediante un informe, que advertiría en el presupuesto municipal los pasivos contingentes derivados, entre otras causas, de demandas judiciales y las deudas con proveedores, empresas de servicio y entidades públicas, que puedan no ser servidas en el marco del presupuesto anual. Para estos efectos, el concejo deberá examinar trimestralmente el programa de ingresos y gastos, introduciendo las modificaciones correctoras a que hubiere lugar, a proposición del alcalde.\nEn todo caso, el concejo sólo resolverá las modificaciones presupuestarias una vez que haya tenido a la vista todos los antecedentes que justifican la modificación propuesta, los cuales deberán ser proporcionados a los concejales con una anticipación de a lo menos 5 días hábiles a la sesión respectiva.`,
      fuenteLegal: 'Art. 79, 80 Y 81\nLEY N° 18.695 ORGÁNICA CONSTITUCIONAL DE MUNICIPALIDADES',
      fechaPublicacion: '28.07.2008',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'secretaria',
      nombre: 'SECRETARÍA MUNICIPAL',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `La Secretaría Municipal estará a cargo de un Secretario Municipal que tendrá las siguientes funciones:\na) Dirigir las actividades de secretaría administrativa del alcalde y del concejo;\nb) Desempeñarse como ministro de fe en todas las actuaciones municipales, y\nc) Recibir, mantener y tramitar, cuando corresponda, la declaración de intereses establecida por la Ley N° 18.575.`,
      fuenteLegal: 'ART. 20 LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'secpla',
      nombre: 'SECRETARÍA COMUNAL DE PLANIFICACIÓN',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `La Secretaría Comunal de Planificación desempeñará funciones de asesoría del alcalde y del concejo, en materias de estudios y evaluación, propias de las competencias de ambos órganos municipales.`,
      fuenteLegal: 'ART.21 LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'dideco',
      nombre: 'DIRECCIÓN DE DESARROLLO COMUNITARIO',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `La unidad encargada del desarrollo comunitario tendrá como funciones específicas asesorar al alcalde y al concejo en la promoción del desarrollo comunitario.`,
      fuenteLegal: 'LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'obras',
      nombre: 'DIRECCIÓN DE OBRAS MUNICIPALES',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `A la unidad encargada de obras municipales le corresponderán velar por el cumplimiento de las disposiciones de la Ley General de Urbanismo y Construcciones.`,
      fuenteLegal: 'ART. 24 LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'medioambiente',
      nombre: 'DIRECCIÓN DE MEDIO AMBIENTE Y OPERACIONES',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `A la unidad encargada de la función de medio ambiente, aseo y ornato corresponderá velar por el aseo de vías públicas y extracción de basura.`,
      fuenteLegal: 'ART. 25 LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'transito',
      nombre: 'DIRECCIÓN DE TRÁNSITO Y TRANSPORTE PÚBLICOS',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `A la unidad encargada de la función de tránsito y transporte públicos corresponderá otorgar y renovar licencias para conducir vehículos.`,
      fuenteLegal: 'ART. 26 LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'administracion',
      nombre: 'DIRECCIÓN DE ADMINISTRACIÓN Y FINANZAS',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `La unidad encargada de administración y finanzas tendrá las funciones de asesorar al alcalde en la administración del personal y bienes municipales.`,
      fuenteLegal: 'ART. 27 LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'asesoria',
      nombre: 'DIRECCIÓN DE ASESORÍA JURÍDICA',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `Corresponderá a la unidad encargada de la asesoría jurídica, prestar apoyo en materias legales al alcalde y al concejo.`,
      fuenteLegal: 'ART. 28 LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'control',
      nombre: 'DIRECCIÓN DE CONTROL',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `A la unidad encargada del control le corresponderá realizar la auditoría operativa interna de la municipalidad.`,
      fuenteLegal: 'ART. 29 LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    },
    {
      id: 'administrador',
      nombre: 'ADMINISTRADOR MUNICIPAL',
      etiquetaBadge: 'Unidad u Órgano',
      contenido: `Existirá un administrador municipal en todas aquellas comunas donde lo decida el concejo a proposición del alcalde.`,
      fuenteLegal: 'ART. 30 LEY N° 18.695 / DECRETO N° 2521 DE 09.09.2013',
      fechaPublicacion: '28.07.2008 / 09.09.2013',
      fechaModificacion: '01.04.2014'
    }
  ];

  const unidadesFiltradas = unidades.filter(u =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.contenido.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.fuenteLegal.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="content-box-wide space-y-6">
      {/* Migas de pan / Breadcrumb */}
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          03. Estructura orgánica y facultades, funciones y atribuciones
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Histórico</span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Facultades, Funciones y Atribuciones de sus Unidades u Órganos Internos
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-medium">Última actualización: 5/10/2026</span>
      </div>

      {/* Buscador limpio sin filtros de categoría */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex justify-end">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por unidad o materia..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Listado en Tarjetas con Acordeón */}
      <div className="space-y-3">
        {unidadesFiltradas.length > 0 ? (
          unidadesFiltradas.map((unidad) => {
            const isOpen = unidadesAbiertas[unidad.id] || false;
            return (
              <div key={unidad.id} className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all hover:shadow-md">
                <div 
                  onClick={() => toggleUnidad(unidad.id)}
                  className="p-4 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-wrap">
                    <span className="px-2.5 py-1 bg-blue-50/80 text-blue-700 text-xs font-semibold rounded-md border border-blue-100 shrink-0">
                      {unidad.etiquetaBadge}
                    </span>
                    <span className="text-sm font-bold text-slate-900 shrink-0">
                      {unidad.nombre}
                    </span>
                  </div>

                  <button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">
                    <span>Ver detalle</span>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Contenido Desplegable */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4 rounded-b-xl text-xs text-slate-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">Fuente Legal:</span>
                        <span className="font-mono text-slate-600 whitespace-pre-line">{unidad.fuenteLegal}</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">Fecha de publicación:</span>
                        <span className="text-slate-600">{unidad.fechaPublicacion}</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="font-bold text-slate-900 block mb-1">Última modificación:</span>
                        <span className="text-slate-600">{unidad.fechaModificacion}</span>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                      <span className="font-bold text-blue-900 flex items-center gap-1.5 text-sm">
                        <FileText className="w-4 h-4 text-blue-600" /> Funciones, Facultades y Atribuciones completas:
                      </span>
                      <div className="whitespace-pre-line leading-relaxed text-slate-800 text-xs">
                        {unidad.contenido}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span 
                        onClick={() => alert(`Aquí se abrirá el documento adjunto para ${unidad.nombre}`)}
                        className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:underline font-semibold cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Ver documento / Enlace oficial
                      </span>

                      <button 
                        onClick={() => toggleUnidad(unidad.id)}
                        className="px-3 py-1.5 bg-slate-200 text-slate-700 font-semibold rounded hover:bg-slate-300 transition-colors cursor-pointer"
                      >
                        Cerrar detalle
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center text-sm text-slate-500 bg-white rounded-xl border border-slate-200">
            No se encontraron registros que coincidan con la búsqueda.
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