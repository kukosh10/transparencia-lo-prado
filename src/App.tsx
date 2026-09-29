import React, { useState } from 'react';
import { Building2, Search, ChevronRight, Video, Mail, MapPin, Globe, ExternalLink, Play, Wrench, Download, Home } from 'lucide-react';
import { seccionesHistoricas, antecedentesAdicionales } from './data';

export default function App() {
  const [pestanaActiva, setPestanaActiva] = useState<string>('principal');
  const [menuDesplegableAbierto, setMenuDesplegableAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const seccionesFiltradas = seccionesHistoricas.filter((seccion) =>
    seccion.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    seccion.numero.includes(busqueda) ||
    seccion.enlaces.some(l => l.texto.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const categoriaSeleccionada = antecedentesAdicionales.find(cat => cat.id === pestanaActiva);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col justify-between relative">
      <div>
        {/* Encabezado Institucional */}
        <header className="bg-blue-900 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3">
              <Building2 className="w-10 h-10 text-blue-300" />
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Transparencia Histórica</h1>
                <p className="text-xs text-blue-200">Archivo Municipal de Gestión y Documentación</p>
              </div>
            </div>
            <div className="mt-3 md:mt-0 bg-blue-800 px-3 py-1.5 rounded-lg text-xs font-mono border border-blue-700">
              Entorno Local: Seguro
            </div>
          </div>

          {/* Barra de Navegación Superior */}
          <nav className="bg-blue-950 border-t border-blue-800">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-1 md:gap-2 py-2 text-sm">
              
              {/* 1. Transparencia Histórica */}
              <button
                onClick={() => setPestanaActiva('principal')}
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  pestanaActiva === 'principal' ? 'bg-blue-900 text-white shadow' : 'text-blue-200 hover:bg-blue-900/50'
                }`}
              >
                Transparencia Histórica
              </button>

              {/* 2. Antecedentes y sitios relacionados */}
              <div 
                className="relative"
                onMouseEnter={() => setMenuDesplegableAbierto(true)}
                onMouseLeave={() => setMenuDesplegableAbierto(false)}
              >
                <button className="px-3 py-2 rounded-md font-medium text-blue-200 hover:bg-blue-900/50 flex items-center gap-1 transition-colors">
                  <span>Antecedentes y sitios relacionados</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${menuDesplegableAbierto ? 'rotate-90' : ''}`} />
                </button>

                {menuDesplegableAbierto && (
                  <div className="absolute left-0 mt-0 w-80 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-4 mb-1">
                      Seleccione una sección
                    </h4>
                    {antecedentesAdicionales.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setPestanaActiva(cat.id);
                          setMenuDesplegableAbierto(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs font-semibold text-blue-900 hover:bg-blue-50 flex items-center justify-between transition-colors border-b border-slate-50 last:border-none"
                      >
                        <span className="leading-snug">{cat.categoria}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Videos Informativos */}
              <button
                onClick={() => setPestanaActiva('videos')}
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  pestanaActiva === 'videos' ? 'bg-blue-900 text-white shadow' : 'text-blue-200 hover:bg-blue-900/50'
                }`}
              >
                Videos Informativos
              </button>

              {/* 4. Sabías que */}
              <button
                onClick={() => setPestanaActiva('sabias')}
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  pestanaActiva === 'sabias' ? 'bg-blue-900 text-white shadow' : 'text-blue-200 hover:bg-blue-900/50'
                }`}
              >
                Sabías que...
              </button>

              {/* 5. Contacto */}
              <button
                onClick={() => setPestanaActiva('contacto')}
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  pestanaActiva === 'contacto' ? 'bg-blue-900 text-white shadow' : 'text-blue-200 hover:bg-blue-900/50'
                }`}
              >
                Contacto
              </button>

              {/* 6. Dificultades Técnicas */}
              <button
                onClick={() => setPestanaActiva('dificultades')}
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  pestanaActiva === 'dificultades' ? 'bg-blue-900 text-white shadow' : 'text-blue-200 hover:bg-blue-900/50'
                }`}
              >
                Dificultades Técnicas
              </button>

              {/* 7. Plug-ins */}
              <button
                onClick={() => setPestanaActiva('plugins')}
                className={`px-3 py-2 rounded-md font-medium transition-colors ${
                  pestanaActiva === 'plugins' ? 'bg-blue-900 text-white shadow' : 'text-blue-200 hover:bg-blue-900/50'
                }`}
              >
                Plug-ins
              </button>

            </div>
          </nav>
        </header>

        {/* Contenido Dinámico Principal */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          
          {/* VISTA PRINCIPAL (14 Puntos) */}
          {pestanaActiva === 'principal' && (
            <div>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">Buscador de Transparencia Activa</h2>
                <p className="text-sm text-slate-600 mb-4">
                  Filtra de forma instantánea normativas y registros históricos de la municipalidad.
                </p>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar por sección, materia, personal o decretos..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {seccionesFiltradas.map((seccion) => (
                  <div key={seccion.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <h3 className="font-semibold text-slate-900 text-base mb-3 pb-2 border-b border-slate-100 flex items-start gap-2">
                        <span className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">
                          {seccion.numero}.
                        </span>
                        <span className="leading-snug">{seccion.titulo}</span>
                      </h3>
                      <ul className="space-y-2 mb-4">
                        {seccion.enlaces.map((enlace, idx) => (
                          <li key={idx}>
                            <a href={enlace.url} className="text-xs text-blue-700 hover:underline flex items-start gap-1.5">
                              <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{enlace.texto}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex justify-end">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Registro Histórico</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VISTAS DESPLEGABLES (Antecedentes y Sitios Relacionados) */}
          {categoriaSeleccionada && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b border-slate-100">
                {categoriaSeleccionada.categoria}
              </h2>
              <ul className="space-y-3 mt-4">
                {categoriaSeleccionada.enlaces.map((enlace, idx) => (
                  <li key={idx} className="p-3 bg-slate-50 rounded-lg hover:bg-blue-50/50 transition-colors border border-slate-100 flex items-center justify-between">
                    <a href={enlace.url} className="text-sm font-medium text-blue-700 hover:underline flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{enlace.texto}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* VISTA VIDEOS INFORMATIVOS */}
          {pestanaActiva === 'videos' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-4xl mx-auto space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Video className="w-6 h-6 text-blue-600" />
                  Videos educativos en lengua de señas y en audio
                </h2>
                <p className="text-xs text-slate-600">
                  Esta sección contiene material educativo sobre el Derecho de Acceso a la Información Pública, en formato de video en lengua de señas, voz en off y subtítulos (CC) Closed Caption[cite: 12].
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-64 aspect-video bg-slate-900 rounded-lg flex flex-col items-center justify-center text-white relative shadow group cursor-pointer shrink-0">
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <Play className="w-10 h-10 text-white fill-white/80" />
                  </div>
                  <span className="text-[10px] font-mono bg-blue-900 px-2 py-0.5 rounded absolute bottom-2 left-2">TRANSPARENCIA ACTIVA</span>
                </div>
                <div>
                  <span className="font-semibold text-sm text-slate-900">Transparencia Activa:</span>{' '}
                  <a href="#" className="text-xs text-blue-700 hover:underline font-medium">
                    Video en Lengua de Señas sobre contenido sitio Gobierno Transparente[cite: 12]
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-64 aspect-video bg-slate-900 rounded-lg flex flex-col items-center justify-center text-white relative shadow group cursor-pointer shrink-0">
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <Play className="w-10 h-10 text-white fill-white/80" />
                  </div>
                  <span className="text-[10px] font-mono bg-blue-900 px-2 py-0.5 rounded absolute bottom-2 left-2">SOLICITUD DE ACCESO</span>
                </div>
                <div>
                  <span className="font-semibold text-sm text-slate-900">Solicitud de Acceso a Información Pública:</span>{' '}
                  <a href="#" className="text-xs text-blue-700 hover:underline font-medium">
                    Video en Lengua de Señas sobre como solicitar información información pública[cite: 12]
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* VISTA SABÍAS QUE... */}
          {pestanaActiva === 'sabias' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-2xl mx-auto space-y-6">
              <h2 className="text-xl font-bold text-blue-900 border-b pb-2">
                Sabías que...
              </h2>
              <div className="space-y-4 text-sm text-slate-800 leading-relaxed font-sans">
                <p>
                  El plazo legal para la entrega de la información requerida, es de <strong>20 días hábiles</strong>, contados desde la recepción de su solicitud, que cumple con los requisitos enunciados en el artículo 12 de la Ley 20.285. Dicho plazo eventualmente podrá variar en caso de:
                </p>
                <div>
                  <p className="font-semibold text-blue-900 mb-1">1. Subsanación:</p>
                  <p className="text-slate-700 text-xs leading-relaxed">
                    En el caso de que la solicitud no reúna los requisitos enunciados en el inciso 1 del artículo 12 de la Ley 20.285, se requerirá al solicitante para que, en un plazo de 5 días, contados desde la respectiva notificación, subsane la falta. Indicando expresamente que, en caso de no subsanar, se le tendrá por desistido (a) de su solicitud.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900 mb-1">2. Prórroga del plazo:</p>
                  <p className="text-slate-700 text-xs leading-relaxed">
                    Excepcionalmente el plazo de entrega de la información podrá ser prorrogado por 10 días hábiles, cuando existan circunstancias que hagan difícil reunir la información solicitada, en dicha situación la Municipalidad se lo comunicará al solicitante antes del vencimiento del plazo legal.
                  </p>
                </div>
                <p className="text-slate-700 text-xs pt-2 border-t border-slate-100">
                  Asimismo le comunicamos que vencido el plazo de 20 días hábiles, establecido en el artículo 14 de la Ley 20.285, para la entrega de la documentación requerida, o denegada la petición, usted tiene derecho a recurrir ante el Consejo para la Transparencia, solicitando amparo a su derecho de acceso a la información.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-100 transition-colors" onClick={() => setPestanaActiva('videos')}>
                <div className="bg-red-700 text-white p-3 rounded font-bold text-center text-xs tracking-tighter shrink-0 shadow">
                  VIDEOS EDUCATIVOS
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Haga clic para ver los videos en lengua de señas, voz y subtítulos.
                </p>
              </div>
            </div>
          )}

          {/* VISTA CONTACTO */}
          {pestanaActiva === 'contacto' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-xl mx-auto">
              <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2 border-b pb-2">
                <Mail className="w-5 h-5 text-blue-600" />
                Información de Contacto
              </h2>
              <div className="space-y-3 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">I. Municipalidad de Lo Prado</p>
                <p className="text-xs font-mono text-slate-500">RUT: 69254100-6</p>
                <p className="flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>San Pablo 5959 - Fono: 5623887473</span>
                </p>
                <p className="flex items-center gap-2 text-xs">
                  <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href="http://www.loprado.cl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    Web: http://www.loprado.cl
                  </a>
                </p>
                <p className="flex items-center gap-2 text-xs">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href="mailto:transparencia@loprado.cl" className="text-blue-600 hover:underline">
                    Contacto: transparencia@loprado.cl
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* VISTA DIFICULTADES TÉCNICAS */}
          {pestanaActiva === 'dificultades' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2 border-b pb-2">
                <Wrench className="w-5 h-5 text-blue-600" />
                Dificultades Técnicas
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Si encuentra algún error o inconveniente técnico en la navegación o aplicación de las secciones de transparencia activa de nuestro organismo agradeceremos nos la reporte a: +5623887473 - +56 223887455 ó transparencia@loprado.cl
              </p>
            </div>
          )}

          {/* VISTA PLUG-INS (Actualizada con los 6 componentes exactos de la imagen) */}
          {pestanaActiva === 'plugins' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-5xl mx-auto">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2 border-b pb-2">
                <Download className="w-5 h-5 text-blue-600" />
                Visualizadores & Plug-ins
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* 1. Visualizador documentos PDF */}
                <div className="bg-white border border-slate-300 rounded shadow-sm overflow-hidden flex flex-col justify-between">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200">
                    <p className="text-xs font-bold text-blue-900">Visualizador documentos PDF (.pdf)</p>
                  </div>
                  <div className="p-3">
                    <a href="https://get.adobe.com/reader/" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline block">
                      Descargar (Windows, Mac OS, Linux)
                    </a>
                  </div>
                </div>

                {/* 2. Visualizador archivos Word */}
                <div className="bg-white border border-slate-300 rounded shadow-sm overflow-hidden flex flex-col justify-between">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200">
                    <p className="text-xs font-bold text-blue-900">Visualizador archivos Word (.doc)</p>
                  </div>
                  <div className="p-3">
                    <a href="https://www.microsoft.com/" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline block">
                      Descargar (Windows)
                    </a>
                  </div>
                </div>

                {/* 3. Visualizador archivos Excel */}
                <div className="bg-white border border-slate-300 rounded shadow-sm overflow-hidden flex flex-col justify-between">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200">
                    <p className="text-xs font-bold text-blue-900">Visualizador archivos Excel (.xls)</p>
                  </div>
                  <div className="p-3">
                    <a href="https://www.microsoft.com/" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline block">
                      Descargar (Windows)
                    </a>
                  </div>
                </div>

                {/* 4. Visualizador archivos PowerPoint */}
                <div className="bg-white border border-slate-300 rounded shadow-sm overflow-hidden flex flex-col justify-between">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200">
                    <p className="text-xs font-bold text-blue-900">Visualizador archivos PowerPoint (.ppt, .pps)</p>
                  </div>
                  <div className="p-3">
                    <a href="https://www.microsoft.com/" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline block">
                      Descargar (Windows)
                    </a>
                  </div>
                </div>

                {/* 5. Componente Adobe Flash Player */}
                <div className="bg-white border border-slate-300 rounded shadow-sm overflow-hidden flex flex-col justify-between">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200">
                    <p className="text-xs font-bold text-blue-900">Componente Adobe Flash Player</p>
                  </div>
                  <div className="p-3">
                    <a href="https://www.adobe.com/" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline block">
                      Descargar (Windows, Mac OS, Linux)
                    </a>
                  </div>
                </div>

                {/* 6. Openoffice software gratuito de oficina */}
                <div className="bg-white border border-slate-300 rounded shadow-sm overflow-hidden flex flex-col justify-between">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200">
                    <p className="text-xs font-bold text-blue-900">Openoffice software gratuito de oficina</p>
                  </div>
                  <div className="p-3">
                    <a href="https://www.openoffice.org/" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline block">
                      Descargar (Windows)..
                    </a>
                  </div>
                </div>

                {/* 7. Maquina virtual de Java */}
                <div className="bg-white border border-slate-300 rounded shadow-sm overflow-hidden flex flex-col justify-between md:col-span-2 lg:col-span-1">
                  <div className="bg-slate-100 px-3 py-2 border-b border-slate-200">
                    <p className="text-xs font-bold text-blue-900">Maquina virtual de Java (para firma avanzada y visualizador de procesos)</p>
                  </div>
                  <div className="p-3">
                    <a href="https://www.java.com/" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline block">
                      Varias plataformas
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

        </main>
      </div>

      {/* Botón flotante de la casita abajo a la derecha con borde negro */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="http://www.loprado.cl"
          target="_blank"
          rel="noreferrer"
          className="bg-white p-3 rounded-full shadow-lg border-2 border-black flex items-center justify-center hover:bg-blue-50 transition-all group"
          title="Ir a la página principal de la Municipalidad de Lo Prado"
        >
          <Home className="w-6 h-6 text-slate-800 group-hover:text-blue-700 transition-colors" />
        </a>
      </div>

      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm mt-12">
        <p>Ilustre Municipalidad de Lo Prado • Sistema de Transparencia Histórica compatible con normativas de seguridad local.</p>
      </footer>
    </div>
  );
}