import React, { useState } from 'react';
import { Search, ChevronRight, Video, Mail, MapPin, Globe, ExternalLink, Play, Wrench, Home } from 'lucide-react';
import { seccionesHistoricas, antecedentesAdicionales } from './data';
import logoMuni from './assets/logo muni.png';
import munilogo from './assets/munilogo.png';
import transparenciaImg from './assets/transparencia.png'; 
import './transparencia.css';
import encabezadoFondo from './assets/encabezadofondo.png';

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
    <div className="app-container">
      <div>
        {/* Encabezado Institucional */}
        <header 
          className="header-institucional"
          style={{
            backgroundImage: `url(${encabezadoFondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="header-content">
            {/* Logo Izquierdo y Título Reemplazado por Imagen */}
            <div className="brand-wrapper">
              <img 
                src={logoMuni} 
                alt="Logo Municipalidad" 
                className="brand-logo-img" 
              />
              <div>
                {/* Imagen transparencia.png reemplazando el texto de Registro Histórico */}
                <img 
                  src={transparenciaImg} 
                  alt="Portal Transparencia Histórica" 
                  style={{ height: '55px', objectFit: 'contain', display: 'block' }} 
                />
              </div>
            </div>

            {/* Logo Derecho (munilogo) */}
            <div>
              <img 
                src={munilogo} 
                alt="Lo Prado por ti" 
                className="brand-logo-img" 
              />
            </div>
          </div>

          {/* Barra de Navegación Superior */}
          <nav className="nav-bar">
            <div className="nav-container">
              
              {/* 1. Transparencia Histórica */}
              <button
                onClick={() => setPestanaActiva('principal')}
                className={`nav-btn ${pestanaActiva === 'principal' ? 'active' : 'inactive'}`}
              >
                Transparencia Histórica
              </button>

              {/* 2. Antecedentes y sitios relacionados */}
              <div 
                className="dropdown-wrapper"
                onMouseEnter={() => setMenuDesplegableAbierto(true)}
                onMouseLeave={() => setMenuDesplegableAbierto(false)}
              >
                <button className="nav-btn inactive flex items-center gap-1">
                  <span>Antecedentes y sitios relacionados</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${menuDesplegableAbierto ? 'rotate-90' : ''}`} />
                </button>

                {menuDesplegableAbierto && (
                  <div className="dropdown-menu">
                    <h4 className="dropdown-header">
                      Seleccione una sección
                    </h4>
                    {antecedentesAdicionales.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setPestanaActiva(cat.id);
                          setMenuDesplegableAbierto(false);
                        }}
                        className="dropdown-item"
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
                className={`nav-btn ${pestanaActiva === 'videos' ? 'active' : 'inactive'}`}
              >
                Videos Informativos
              </button>

              {/* 4. Sabías que */}
              <button
                onClick={() => setPestanaActiva('sabias')}
                className={`nav-btn ${pestanaActiva === 'sabias' ? 'active' : 'inactive'}`}
              >
                Sabías que...
              </button>

              {/* 5. Contacto */}
              <button
                onClick={() => setPestanaActiva('contacto')}
                className={`nav-btn ${pestanaActiva === 'contacto' ? 'active' : 'inactive'}`}
              >
                Contacto
              </button>

              {/* 6. Dificultades Técnicas */}
              <button
                onClick={() => setPestanaActiva('dificultades')}
                className={`nav-btn ${pestanaActiva === 'dificultades' ? 'active' : 'inactive'}`}
              >
                Dificultades Técnicas
              </button>

            </div>
          </nav>
        </header>

        {/* Contenido Dinámico Principal */}
        <main className="main-content">
          
          {/* VISTA PRINCIPAL (14 Puntos) */}
          {pestanaActiva === 'principal' && (
            <div>
              <div className="search-card">
                <h2 className="search-title">Buscador de Transparencia</h2>
                <p className="search-desc">
                  Filtra de forma instantánea normativas y registros históricos de la municipalidad.
                </p>
                <div className="search-input-wrapper">
                  <Search className="search-icon-pos" />
                  <input
                    type="text"
                    placeholder="Buscar por sección, materia, personal o decretos..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>

              <div className="grid-secciones">
                {seccionesFiltradas.map((seccion) => (
                  <div key={seccion.id} className="seccion-card">
                    <div>
                      <h3 className="seccion-header">
                        <span className="seccion-badge">
                          {seccion.numero}.
                        </span>
                        <span className="leading-snug">{seccion.titulo}</span>
                      </h3>
                      <ul className="seccion-links-list">
                        {seccion.enlaces.map((enlace, idx) => (
                          <li key={idx}>
                            <a 
                              href={enlace.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="seccion-link-item"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{enlace.texto}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-footer-historic">
                      <span className="historic-label">Registro Histórico</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VISTAS DESPLEGABLES (Antecedentes y Sitios Relacionados) */}
          {categoriaSeleccionada && (
            <div className="content-box">
              <h2 className="content-title">
                {categoriaSeleccionada.categoria}
              </h2>
              <ul className="space-y-3 mt-4">
                {categoriaSeleccionada.enlaces.map((enlace, idx) => (
                  <li key={idx} className="p-3 bg-slate-50 rounded-lg hover:bg-blue-50/50 transition-colors border border-slate-100 flex items-center justify-between">
                    <a 
                      href={enlace.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-medium text-blue-700 hover:underline flex items-center gap-2"
                    >
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
            <div className="content-box-wide space-y-6">
              <div>
                <h2 className="content-title">
                  <Video className="w-6 h-6 text-blue-600" />
                  Videos educativos en lengua de señas y en audio
                </h2>
                <p className="text-xs text-slate-600">
                  Esta sección contiene material educativo sobre el Derecho de Acceso a la Información Pública, en formato de video en lengua de señas, voz en off y subtítulos (CC) Closed Caption.
                </p>
              </div>

              <div className="video-card-item">
                <div className="video-thumb">
                  <div className="video-thumb-overlay">
                    <Play className="w-10 h-10 text-white fill-white/80" />
                  </div>
                  <span className="video-badge">TRANSPARENCIA ACTIVA</span>
                </div>
                <div>
                  <span className="font-semibold text-sm text-slate-900">Transparencia Activa:</span>{' '}
                  <a href="#" className="text-xs text-blue-700 hover:underline font-medium">
                    Video en Lengua de Señas sobre contenido sitio Gobierno Transparente
                  </a>
                </div>
              </div>

              <div className="video-card-item">
                <div className="video-thumb">
                  <div className="video-thumb-overlay">
                    <Play className="w-10 h-10 text-white fill-white/80" />
                  </div>
                  <span className="video-badge">SOLICITUD DE ACCESO</span>
                </div>
                <div>
                  <span className="font-semibold text-sm text-slate-900">Solicitud de Acceso a Información Pública:</span>{' '}
                  <a href="#" className="text-xs text-blue-700 hover:underline font-medium">
                    Video en Lengua de Señas sobre como solicitar información información pública
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* VISTA SABÍAS QUE... */}
          {pestanaActiva === 'sabias' && (
            <div className="content-box space-y-6">
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
            <div className="content-box max-w-xl">
              <h2 className="content-title">
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
            <div className="content-box-wide">
              <h2 className="content-title">
                <Wrench className="w-5 h-5 text-blue-600" />
                Dificultades Técnicas
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Si encuentra algún error o inconveniente técnico en la navegación o aplicación de las secciones de transparencia activa de nuestro organismo agradeceremos nos la reporte a: +5623887473 - +56 223887455 ó transparencia@loprado.cl
              </p>
            </div>
          )}

        </main>
      </div>

      {/* Botón flotante */}
      <div className="floating-home">
        <a
          href="http://www.loprado.cl"
          target="_blank"
          rel="noreferrer"
          className="home-btn"
          title="Ir a la página principal de la Municipalidad de Lo Prado"
        >
          <Home className="w-6 h-6 text-slate-800" />
        </a>
      </div>

      <footer className="footer-main">
        <p>Ilustre Municipalidad de Lo Prado • Sistema de Transparencia Histórica compatible con normativas de seguridad local.</p>
      </footer>
    </div>
  );
}