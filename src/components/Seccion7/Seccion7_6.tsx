import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, Calendar, Search } from 'lucide-react';
import Seccion7_6OrdenesDemolicion, { ordenesPorAnio, type OrdenDemolicion } from './Seccion7_6OrdenesDemolicion';
import Seccion7_6CierreCalles, { cierresCallesPorAnio, type CierreCalle } from './Seccion7_6CierreCalles';

interface Seccion7_6Props {
  onVolver: () => void;
}

interface CategoriaResolucion {
  id: string;
  nombre: string;
  documentosPorAnio?: Record<string, Array<OrdenDemolicion | CierreCalle>>;
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
    { id: 'cambio-nombre-via', nombre: 'Cambio de Nombre de Vía Pública' },
    { id: 'cambio-sentido-transito', nombre: 'Cambio de Sentido de Tránsito' },
    { id: 'sumarios', nombre: 'Sumarios' },
    { id: 'comodatos', nombre: 'Comodatos' },
    { id: 'convenios-servicios', nombre: 'Convenios Otros Servicios Públicos' },
    { id: 'patentes-permisos', nombre: 'Patentes y Permisos' },
    { id: 'permiso-uso', nombre: 'Permiso de Uso' },
    { id: 'estacionamiento-reservado', nombre: 'Estacionamiento Reservado' },
    { id: 'compras-publicas', nombre: 'Compras Públicas' },
    { id: 'concurso-publico', nombre: 'Llamados a Concurso Público' },
    { id: 'concurso-programas', nombre: 'Llamados a Concurso proyectos o programas' },
  ];

  // Categorías de "Dirección Obras Municipales"
  const resolucionesObras: CategoriaResolucion[] = [
    { id: 'aprob-anteproyecto', nombre: 'Resolución Aprob Anteproyecto' },
    { id: 'aprob-subdiv-fusion', nombre: 'Resolución Aprob. Subdiv o Fusión' },
    { id: 'modif-proyecto-edif', nombre: 'Resolución Modif. Proyecto Edif' },
    { id: 'aut-obras-prelim', nombre: 'Aut. Obras Prelim. y-o Demolic.' },
    { id: 'permiso-regul-ley-20563', nombre: 'Permiso Regul. Ley 20.563' },
    { id: 'permiso-edif-obra-menor', nombre: 'Permiso Edificación Obra Menor' },
    { id: 'permiso-edificacion', nombre: 'Permiso Edificación' },
    { id: 'permiso-o-menor-v-social', nombre: 'Permiso O. Menor Amp. V. Social' },
    { id: 'regularizacion-ley-20251', nombre: 'Regularización Ley 20.251' },
    { id: 'recepcion-obras-menor', nombre: 'Recepción de Obras Menor' },
    { id: 'recepcion-obras', nombre: 'Recepción de Obras' },
    { id: 'recepcion-o-menor-v-soc', nombre: 'Recepción O. Menor Amp. V. Soc' },
    { id: 'regularizacion-ley-19532', nombre: 'Regularización Ley 19.532' },
    { id: 'recepcion-regul-ley-20671', nombre: 'Recepción Regul. Ley 20.671' },
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
      registrosCoincidentes(categoria).length > 0
    );

  const renderSeccionResoluciones = (tituloSeccion: string, listaCategorias: CategoriaResolucion[]) => {
    const busquedaActiva = terminoBusqueda.length > 0;
    const coincideTituloSeccion = busquedaActiva && normalizarTexto(tituloSeccion).includes(terminoBusqueda);
    const categoriasFiltradas = busquedaActiva
      ? listaCategorias.filter((categoria) => {
          const coincideCategoria = normalizarTexto(categoria.nombre).includes(terminoBusqueda);
          return coincideTituloSeccion || coincideCategoria || registrosCoincidentes(categoria).length > 0;
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
              const isOpen = acordeonesAbiertos[claveAcordeon] ||
                (busquedaActiva && (coincideTituloSeccion || coincideCategoria || registrosCoincidentes(cat).length > 0));

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
            onChange={(e) => setAnioSeleccionado(e.target.value)}
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