import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, Calendar, Search } from 'lucide-react';
import Seccion7_6OrdenesDemolicion, { ordenesPorAnio, type OrdenDemolicion } from './Seccion7_6OrdenesDemolicion';
import Seccion7_6CierreCalles, { cierresCallesPorAnio, type CierreCalle } from './Seccion7_6CierreCalles';
import Seccion7_6CambioNombre, { cambioNombreViaPorAnio, type CambioNombreVia } from './Seccion7_6CambioNombre';
import Seccion7_6SentidoTransito, { sentidosTransitoPorAnio, type SentidoTransito } from './Seccion7_6SentidoTransito';
import Seccion7_6Sumarios, { sumariosPorAnio, type Sumario } from './Seccion7_6Sumarios';
import Seccion7_6Comodato, { comodatosPorAnio, type Comodato } from './Seccion7_6Comodato';
import Seccion7_6Convenios, { conveniosPorAnio, type Convenio } from './Seccion7_6Convenios';
import Seccion7_6Patentes from './Seccion7_6Patentes';
import Seccion7_6PermisoUso from './Seccion7_6PermisoUso';
import Seccion7_6EstacionamientoRes from './Seccion7_6EstacionamientoRes';
import Seccion7_6ComprasPublicas from './Seccion7_6ComprasPublicas';
import Seccion7_6ConcursoPubli from './Seccion7_6ConcursoPubli';
import Seccion7_6LLamadoConcurso from './Seccion7_6LLamadoConcurso';
import Seccion7_6AprobAntepro from './Seccion7_6AprobAntepro';
import Seccion7_6SubdivFusion from './Seccion7_6SubdivFusion';
import Seccion7_6ModifProEdif from './Seccion7_6ModifProEdif';
import Seccion7_6AutorizacionDemoli from './Seccion7_6AutorizacionDemoli';
import Seccion7_6Ley20563 from './Seccion7_6Ley20.563';
import Seccion7_6ObraMenor from './Seccion7_6ObraMenor';
import Seccion7_6PermEdificacion from './Seccion7_6PermEdificacion';
import Seccion7_6AmpliViviSocial from './Seccion7_6AmpliViviSocial';

type AprobacionAnteproyecto = (typeof Seccion7_6AprobAntepro.documentosPorAnio)[string][number];
type SubdivisionFusion = (typeof Seccion7_6SubdivFusion.documentosPorAnio)[string][number];
type ModificacionProyectoEdificacion = (typeof Seccion7_6ModifProEdif.documentosPorAnio)[string][number];
type AutorizacionDemolicion = (typeof Seccion7_6AutorizacionDemoli.documentosPorAnio)[string][number];
type PermisoLey20563 = (typeof Seccion7_6Ley20563.documentosPorAnio)[string][number];
type PermisoObraMenor = (typeof Seccion7_6ObraMenor.documentosPorAnio)[string][number];
type PermisoEdificacion = (typeof Seccion7_6PermEdificacion.documentosPorAnio)[string][number];
type AmpliacionViviendaSocial = (typeof Seccion7_6AmpliViviSocial.documentosPorAnio)[string][number];

const patentesPermisos = [
  'Patente Alcohol',
  'Patente Comercial',
  'Patente Profesional',
  'Patente Provisoria',
  'Patente Micro Empresa Familiar',
  'Permiso Ferias Libres',
  'Permiso Feria Santa Marta',
  'Permiso Feria Los Tamarindos',
  'Permiso Estacionado',
  'Permiso de Kiosco',
  'Permiso Exento',
  'Eliminación de Patentes y Permisos',
  'Clausura de Patentes',
  'Ampliación de Giro',
  'Cambio de Giro',
  'Cambio de Dirección Comercial',
  'Cambio de Razón Social',
  'Retiro de Kiosco',
  'Ampliación de Kiosco',
  'Ampliación de Horario'
] as const;

interface Seccion7_6Props {
  onVolver: () => void;
}

interface CategoriaResolucion {
  id: string;
  nombre: string;
  terminosBusqueda?: readonly string[];
  documentosPorAnio?: Record<string, Array<OrdenDemolicion | CierreCalle | CambioNombreVia | SentidoTransito | Sumario | Comodato | Convenio | AprobacionAnteproyecto | SubdivisionFusion | ModificacionProyectoEdificacion | AutorizacionDemolicion | PermisoLey20563 | PermisoObraMenor | PermisoEdificacion | AmpliacionViviendaSocial>>;
}

const normalizarTexto = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export default function Seccion7_6({ onVolver }: Seccion7_6Props) {
  const aniosDisponibles = ['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
  const [anioSeleccionado, setAnioSeleccionado] = useState<string>('2016');
  const [busqueda, setBusqueda] = useState('');
  const terminoBusqueda = normalizarTexto(busqueda.trim());

  // Categorías de "Resoluciones con efectos sobre terceros"
  const resolucionesGenerales: CategoriaResolucion[] = [
    { id: 'ordenes-demolicion', nombre: 'Órdenes de Demolición', documentosPorAnio: ordenesPorAnio },
    { id: 'cierre-calles', nombre: 'Cierre de Calles y/o Pasajes', documentosPorAnio: cierresCallesPorAnio },
    { id: 'cambio-nombre-via', nombre: 'Cambio de Nombre de Vía Pública', documentosPorAnio: cambioNombreViaPorAnio },
    { id: 'cambio-sentido-transito', nombre: 'Cambio de Sentido de Tránsito', documentosPorAnio: sentidosTransitoPorAnio },
    { id: 'sumarios', nombre: 'Sumarios', documentosPorAnio: sumariosPorAnio },
    { id: 'comodatos', nombre: 'Comodatos', documentosPorAnio: comodatosPorAnio },
    { id: 'convenios-servicios', nombre: 'Convenios Otros Servicios Públicos', documentosPorAnio: conveniosPorAnio },
    { id: 'patentes-permisos', nombre: 'Patentes y Permisos', terminosBusqueda: patentesPermisos },
    { id: 'permiso-uso', nombre: 'Permiso de Uso' },
    { id: 'estacionamiento-reservado', nombre: 'Estacionamiento Reservado' },
    { id: 'compras-publicas', nombre: 'Compras Públicas' },
    { id: 'concurso-publico', nombre: 'Llamados a Concurso Público' },
    { id: 'concurso-programas', nombre: 'Llamados a Concurso proyectos o programas' },
  ];

  // Categorías de "Dirección Obras Municipales"
  const resolucionesObras: CategoriaResolucion[] = [
    { id: 'aprob-anteproyecto', nombre: 'Resolución Aprobación Anteproyecto', documentosPorAnio: Seccion7_6AprobAntepro.documentosPorAnio },
    { id: 'aprob-subdiv-fusion', nombre: 'Resolución Aprobación de Subdivisión o Fusión', documentosPorAnio: Seccion7_6SubdivFusion.documentosPorAnio },
    { id: 'modif-proyecto-edif', nombre: 'Resolución Modificación Proyecto Edificación', documentosPorAnio: Seccion7_6ModifProEdif.documentosPorAnio },
    { id: 'aut-obras-prelim', nombre: 'Autorización Obras Preliminares Demolición', documentosPorAnio: Seccion7_6AutorizacionDemoli.documentosPorAnio },
    { id: 'permiso-regul-ley-20563', nombre: 'Permiso Regularización Ley 20.563', documentosPorAnio: Seccion7_6Ley20563.documentosPorAnio },
    { id: 'permiso-edif-obra-menor', nombre: 'Permiso Edificación Obra Menor', documentosPorAnio: Seccion7_6ObraMenor.documentosPorAnio },
    { id: 'permiso-edificacion', nombre: 'Permiso Edificación', documentosPorAnio: Seccion7_6PermEdificacion.documentosPorAnio },
    { id: 'permiso-o-menor-v-social', nombre: 'Permiso Obra Menor Ampliación Vivienda Social', documentosPorAnio: Seccion7_6AmpliViviSocial.documentosPorAnio },
    { id: 'regularizacion-ley-20251', nombre: 'Regularización Ley 20.251' },
    { id: 'recepcion-obras-menor', nombre: 'Recepción de Obras Menor' },
    { id: 'recepcion-obras', nombre: 'Recepción de Obras' },
    { id: 'recepcion-o-menor-v-soc', nombre: 'Recepción Obra Menor Ampliación Vivienda Social' },
    { id: 'regularizacion-ley-19532', nombre: 'Regularización Ley 19.532' },
    { id: 'recepcion-regul-ley-20671', nombre: 'Recepción Regularización Ley 20.671' },
    { id: 'permiso-recepcion-catastrofe', nombre: 'Permiso Recepción Catástrofe' },
    { id: 'regularizacion-ley-20898', nombre: 'Regularización Ley 20.898' },
  ];

  // Estado para controlar qué acordeones están abiertos
  const [acordeonesAbiertos, setAcordeonesAbiertos] = useState<Record<string, boolean>>({});
  const [seccionesAbiertas, setSeccionesAbiertas] = useState<Record<string, boolean>>({});

  const toggleAcordeon = (id: string) => {
    setAcordeonesAbiertos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSeccion = (tituloSeccion: string) => {
    setSeccionesAbiertas(prev => ({ ...prev, [tituloSeccion]: !prev[tituloSeccion] }));
  };

  const registrosCoincidentes = (categoria: CategoriaResolucion) => {
    const registros = categoria.documentosPorAnio?.[anioSeleccionado] || [];
    if (!terminoBusqueda) return registros;

    return registros.filter((registro) =>
      Object.values(registro).some((valor) =>
        normalizarTexto(String(valor ?? '')).includes(terminoBusqueda)
      )
    );
  };

  const hayCoincidencias = (tituloSeccion: string, categorias: CategoriaResolucion[]) =>
    normalizarTexto(tituloSeccion).includes(terminoBusqueda) ||
    categorias.some((categoria) =>
      normalizarTexto(categoria.nombre).includes(terminoBusqueda) ||
      categoria.terminosBusqueda?.some((termino) => normalizarTexto(termino).includes(terminoBusqueda)) ||
      registrosCoincidentes(categoria).length > 0
    );

  const renderSeccionResoluciones = (tituloSeccion: string, listaCategorias: CategoriaResolucion[]) => {
    const busquedaActiva = terminoBusqueda.length > 0;
    const coincideTituloSeccion = busquedaActiva && normalizarTexto(tituloSeccion).includes(terminoBusqueda);
    const categoriasFiltradas = busquedaActiva
      ? listaCategorias.filter((categoria) => {
          const coincideCategoria = normalizarTexto(categoria.nombre).includes(terminoBusqueda);
          const coincideTermino = categoria.terminosBusqueda?.some((termino) =>
            normalizarTexto(termino).includes(terminoBusqueda)
          );
          return coincideTituloSeccion || coincideCategoria || coincideTermino || registrosCoincidentes(categoria).length > 0;
        })
      : listaCategorias;

    if (busquedaActiva && categoriasFiltradas.length === 0) return null;

    const seccionAbierta = seccionesAbiertas[tituloSeccion] ||
      (busquedaActiva && categoriasFiltradas.length > 0);

    return (
      <section className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSeccion(tituloSeccion)}
          aria-expanded={seccionAbierta}
          className="w-full p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 text-left border-none"
        >
          <span className="text-lg font-bold text-blue-900">{tituloSeccion}</span>
          {seccionAbierta ? <ChevronUp className="w-5 h-5 text-blue-700" /> : <ChevronDown className="w-5 h-5 text-blue-700" />}
        </button>

        {seccionAbierta && (
          <div className="p-4 border-t border-slate-200 space-y-3">
            {categoriasFiltradas.map((cat) => {
              const claveAcordeon = `${cat.id}-${anioSeleccionado}`;
              const coincideCategoria = terminoBusqueda.length > 0 && normalizarTexto(cat.nombre).includes(terminoBusqueda);
              const coincideTermino = terminoBusqueda.length > 0 && cat.terminosBusqueda?.some((termino) =>
                normalizarTexto(termino).includes(terminoBusqueda)
              );
              const isOpen = acordeonesAbiertos[claveAcordeon] ||
                (busquedaActiva && (coincideTituloSeccion || coincideCategoria || coincideTermino || registrosCoincidentes(cat).length > 0));

              return (
                <div key={cat.id} className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => toggleAcordeon(claveAcordeon)}
                    aria-expanded={isOpen}
                    className="w-full p-4 flex items-center justify-between gap-3 cursor-pointer bg-slate-50/80 rounded-xl text-left border-none"
                  >
                    <span className="text-xs font-bold text-slate-800 leading-snug">
                      {cat.nombre}
                    </span>
                    <span className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4 border-t border-slate-100 bg-white space-y-2 rounded-b-xl">
                      {cat.id === 'ordenes-demolicion' ? (
                        <Seccion7_6OrdenesDemolicion
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'cierre-calles' ? (
                        <Seccion7_6CierreCalles
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'cambio-nombre-via' ? (
                        <Seccion7_6CambioNombre
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'cambio-sentido-transito' ? (
                        <Seccion7_6SentidoTransito
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'sumarios' ? (
                        <Seccion7_6Sumarios
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'comodatos' ? (
                        <Seccion7_6Comodato
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'convenios-servicios' ? (
                        <Seccion7_6Convenios
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'permiso-uso' ? (
                        <Seccion7_6PermisoUso
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'estacionamiento-reservado' ? (
                        <Seccion7_6EstacionamientoRes
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'compras-publicas' ? (
                        <Seccion7_6ComprasPublicas
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'concurso-publico' ? (
                        <Seccion7_6ConcursoPubli
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'concurso-programas' ? (
                        <Seccion7_6LLamadoConcurso
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'aprob-anteproyecto' ? (
                        <Seccion7_6AprobAntepro
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'aprob-subdiv-fusion' ? (
                        <Seccion7_6SubdivFusion
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'modif-proyecto-edif' ? (
                        <Seccion7_6ModifProEdif
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'aut-obras-prelim' ? (
                        <Seccion7_6AutorizacionDemoli
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'permiso-regul-ley-20563' ? (
                        <Seccion7_6Ley20563
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'permiso-edif-obra-menor' ? (
                        <Seccion7_6ObraMenor
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'permiso-edificacion' ? (
                        <Seccion7_6PermEdificacion
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'permiso-o-menor-v-social' ? (
                        <Seccion7_6AmpliViviSocial
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                        />
                      ) : cat.id === 'patentes-permisos' ? (
                        <Seccion7_6Patentes
                          anio={anioSeleccionado}
                          busqueda={coincideCategoria || coincideTituloSeccion ? '' : busqueda}
                          categorias={patentesPermisos}
                          onCambiarAnio={setAnioSeleccionado}
                        />
                      ) : (
                        <p className="text-xs text-slate-400 italic text-center py-2">
                          Sin registros para el año {anioSeleccionado}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          Actos y resoluciones con efectos sobre terceros
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Otras Resoluciones a Terceros</span>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Otras Resoluciones a Terceros
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Selecciona el año para consultar los registros correspondientes
          </p>
        </div>

        {/* Filtro desplegable por Año */}
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-300 shadow-2xs">
          <Calendar className="w-4 h-4 text-blue-700 shrink-0" />
          <label htmlFor="select-anio" className="text-xs font-semibold text-slate-700">Año:</label>
          <select
            id="select-anio"
            value={anioSeleccionado}
            onChange={(e) => {
              setAcordeonesAbiertos({});
              setAnioSeleccionado(e.target.value);
            }}
            className="text-xs font-bold text-blue-800 bg-transparent border-none outline-none cursor-pointer pr-2"
          >
            {aniosDisponibles.map((anio) => (
              <option key={anio} value={anio}>
                {anio}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xs focus-within:border-blue-300">
        <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
        <span className="sr-only">Buscar resoluciones</span>
        <input
          type="search"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          placeholder="Buscar por número, título, fecha o descripción..."
          className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </label>

      {terminoBusqueda && (
        <p className="text-xs text-slate-500" role="status">
          Buscando en los registros y campos disponibles para {anioSeleccionado}.
        </p>
      )}

      {/* Resoluciones Generales */}
      {renderSeccionResoluciones('Resoluciones con efectos sobre terceros', resolucionesGenerales)}

      {/* Dirección Obras Municipales */}
      {renderSeccionResoluciones('Dirección Obras Municipales', resolucionesObras)}

      {terminoBusqueda && !(
        hayCoincidencias('Resoluciones con efectos sobre terceros', resolucionesGenerales) ||
        hayCoincidencias('Dirección Obras Municipales', resolucionesObras)
      ) && (
        <p className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-500" role="status">
          No se encontraron registros para “{busqueda}” en el año {anioSeleccionado}.
        </p>
      )}

      <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
        <button
          onClick={onVolver}
          className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-all cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a Actos y Resoluciones
        </button>
      </div>
    </div>
  );
}