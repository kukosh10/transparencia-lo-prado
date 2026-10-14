import { useEffect, useState } from 'react';
import { Search, ChevronRight, Video, Mail, ExternalLink, Wrench, Home } from 'lucide-react';
import { seccionesHistoricas, antecedentesAdicionales } from './data';
import logoMuni from './assets/logo muni.png';
import munilogo from './assets/munilogo.png';
import transparenciaImg from './assets/transparencia.png'; 
import './transparencia.css';
import encabezadoFondo from './assets/encabezadofondo.png';
import Seccion1 from './components/Seccion1/Seccion1';
import Seccion2 from './components/Seccion2/Seccion2';
import Seccion2_1 from './components/Seccion2/Seccion2_1';
import Seccion3 from './components/Seccion3/Seccion3';
import Seccion3_1 from './components/Seccion3/Seccion3_1';
import Seccion4 from './components/Seccion4/Seccion4';
import Seccion4_1 from './components/Seccion4/Seccion4_1';
import Seccion4_2 from './components/Seccion4/Seccion4_2';
import Seccion4_3 from './components/Seccion4/Seccion4_3';
import Seccion4_5 from './components/Seccion4/Seccion4_5';
import Seccion4_6 from './components/Seccion4/Seccion4_6';
import Seccion4_7 from './components/Seccion4/Seccion4_7';
import Seccion4_8 from './components/Seccion4/Seccion4_8';
import Seccion4_9 from './components/Seccion4/Seccion4_9';
import Seccion5, { comprasAdquisicionesUrl } from './components/Seccion5/Seccion5';
import Seccion5_1 from './components/Seccion5/Seccion5_1';
import Seccion5_2 from './components/Seccion5/Seccion5_2';
import Seccion6, { transferenciasReguladasUrl } from './components/Seccion6/Seccion6';
import Seccion7 from './components/Seccion7/Seccion7';
import Seccion7_1 from './components/Seccion7/Seccion7_1';
import Seccion7_2 from './components/Seccion7/Seccion7_2';
import Seccion7_3 from './components/Seccion7/Seccion7_3';
import Seccion7_4 from './components/Seccion7/Seccion7_4';
import Seccion7_5 from './components/Seccion7/Seccion7_5';
import Seccion7_6 from './components/Seccion7/Seccion7_6';

export default function App() {
  const [pestanaActiva, setPestanaActiva] = useState<string>('principal');
  const [menuDesplegableAbierto, setMenuDesplegableAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pestanaActiva]);

  const seccionesFiltradas = seccionesHistoricas.filter((seccion) =>
    seccion.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    seccion.numero.includes(busqueda) ||
    seccion.enlaces.some(l => l.texto.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const categoriaSeleccionada = antecedentesAdicionales.find(cat => cat.id === pestanaActiva);

  const manejarClickSeccion = (numeroSeccion: string, textoEnlace?: string) => {
    const textoLimpio = textoEnlace ? textoEnlace.toLowerCase().trim() : '';

    switch (numeroSeccion) {
      case '01':
        setPestanaActiva('seccion1');
        break;
      case '02':
        if (
          textoLimpio.includes('potestades') || 
          textoLimpio.includes('competencias') || 
          textoLimpio.includes('atribuciones')
        ) {
          setPestanaActiva('seccion2-1');
        } else {
          setPestanaActiva('seccion2');
        }
        break;
      case '03':
        if (textoLimpio.includes('diagrama')) {
          window.open("### URL###", "_blank");
        } else if (
          textoLimpio.includes('unidades') || 
          textoLimpio.includes('órganos internos') || 
          textoLimpio.includes('facultades') ||
          textoLimpio.includes('atribuciones')
        ) {
          setPestanaActiva('seccion3-1');
        } else {
          setPestanaActiva('seccion3');
        }
        break;
      case '04':
        if (textoLimpio.includes('honorarios municipal')) {
          setPestanaActiva('seccion4-5');
        } else if (textoLimpio.includes('honorarios programas')) {
          setPestanaActiva('seccion4-6');
        } else if (textoLimpio.includes('escala de remuneraciones')) {
          setPestanaActiva('seccion4-7');
        } else if (textoLimpio.includes('autoridades del concejo municipal')) {
          setPestanaActiva('seccion4-8');
        } else if (textoLimpio.includes('listado funcionarios')) {
          setPestanaActiva('seccion4-9');
        } else if (
          textoLimpio.includes('código') || 
          textoLimpio.includes('codigo') || 
          textoLimpio.includes('trabajo')
        ) {
          setPestanaActiva('seccion4-3');
        } else if (
          textoLimpio.includes('contrata')
        ) {
          setPestanaActiva('seccion4-2');
        } else if (
          textoLimpio.includes('planta')
        ) {
          setPestanaActiva('seccion4-1');
        } else {
          setPestanaActiva('seccion4');
        }
        break;
      case '05':
        if (textoLimpio === 'compras y adquisiciones') {
          window.open(comprasAdquisicionesUrl, '_blank', 'noopener,noreferrer');
        } else if (textoLimpio === 'otras compras y adquisiciones') {
          setPestanaActiva('seccion5-1');
        } else if (textoLimpio === 'contratos bienes inmuebles') {
          setPestanaActiva('seccion5-2');
        } else {
          setPestanaActiva('seccion5');
        }
        break;
      case '06':
        if (textoLimpio === 'transferencias reguladas ley 19.882') {
          window.open(transferenciasReguladasUrl, '_blank', 'noopener,noreferrer');
        } else {
          setPestanaActiva('seccion6');
        }
        break;
      case '07':
        setPestanaActiva('seccion7');
        break;
      case '08':
        setPestanaActiva('seccion8');
        break;
      case '09':
        setPestanaActiva('seccion9');
        break;
      case '10':
        setPestanaActiva('seccion10');
        break;
      case '11':
        setPestanaActiva('seccion11');
        break;
      case '12':
        setPestanaActiva('seccion12');
        break;
      case '13':
        setPestanaActiva('seccion13');
        break;
      case '14':
        setPestanaActiva('seccion14');
        break;
      default:
        setPestanaActiva('principal');
        break;
    }
  };

  return (
    <div className="app-container">
      <div>
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
            <div className="brand-wrapper">
              <img src={logoMuni} alt="Logo Municipalidad" className="brand-logo-img" />
              <div>
                <img src={transparenciaImg} alt="Portal Transparencia Histórica" style={{ height: '55px', objectFit: 'contain', display: 'block' }} />
              </div>
            </div>
            <div>
              <img src={munilogo} alt="Lo Prado por ti" className="brand-logo-img" />
            </div>
          </div>

          <nav className="nav-bar">
            <div className="nav-container">
              <button
                onClick={() => setPestanaActiva('principal')}
                className={`nav-btn ${pestanaActiva === 'principal' ? 'active' : 'inactive'}`}
              >
                Transparencia Histórica
              </button>

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
                    <h4 className="dropdown-header">Seleccione una sección</h4>
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

              <button onClick={() => setPestanaActiva('videos')} className={`nav-btn ${pestanaActiva === 'videos' ? 'active' : 'inactive'}`}>
                Videos Informativos
              </button>
              <button onClick={() => setPestanaActiva('sabias')} className={`nav-btn ${pestanaActiva === 'sabias' ? 'active' : 'inactive'}`}>
                Sabías que...
              </button>
              <button onClick={() => setPestanaActiva('contacto')} className={`nav-btn ${pestanaActiva === 'contacto' ? 'active' : 'inactive'}`}>
                Contacto
              </button>
              <button onClick={() => setPestanaActiva('dificultades')} className={`nav-btn ${pestanaActiva === 'dificultades' ? 'active' : 'inactive'}`}>
                Dificultades Técnicas
              </button>
            </div>
          </nav>
        </header>

        <main className="main-content">
          
          {pestanaActiva === 'principal' && (
            <div>
              <div className="search-card">
                <h2 className="search-title">Buscador de Transparencia</h2>
                <p className="search-desc">Filtra de forma instantánea normativas y registros históricos de la municipalidad.</p>
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
                        <span className="seccion-badge">{seccion.numero}.</span>
                        <span className="leading-snug">{seccion.titulo}</span>
                      </h3>
                      <ul className="seccion-links-list">
                        {seccion.enlaces.map((enlace, idx) => (
                          <li key={idx}>
                            <button 
                              onClick={() => manejarClickSeccion(seccion.numero, enlace.texto)}
                              className="seccion-link-item text-left w-full bg-transparent border-none cursor-pointer flex items-center justify-between p-1"
                            >
                              <span>{enlace.texto}</span>
                              <ChevronRight className="w-4 h-4 text-blue-600 shrink-0" />
                            </button>
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

          {pestanaActiva === 'seccion1' && (
            <Seccion1 onVolver={() => setPestanaActiva('principal')} />
          )}

          {pestanaActiva === 'seccion2' && (
            <Seccion2 
              onVolver={() => setPestanaActiva('principal')} 
            />
          )}

          {pestanaActiva === 'seccion2-1' && (
            <Seccion2_1 
              onVolver={() => setPestanaActiva('seccion2')} 
            />
          )}

          {pestanaActiva === 'seccion3' && (
            <Seccion3 
              onVolver={() => setPestanaActiva('principal')} 
              onIrAUnidades={() => setPestanaActiva('seccion3-1')} 
            />
          )}

          {pestanaActiva === 'seccion3-1' && (
            <Seccion3_1 
              onVolver={() => setPestanaActiva('principal')} 
            />
          )}

          {pestanaActiva === 'seccion4' && (
            <Seccion4 
              onVolver={() => setPestanaActiva('principal')} 
            />
          )}

          {pestanaActiva === 'seccion4-1' && (
            <Seccion4_1 
              onVolver={() => setPestanaActiva('principal')} 
            />
          )}

          {pestanaActiva === 'seccion4-2' && (
            <Seccion4_2 
              onVolver={() => setPestanaActiva('principal')} 
            />
          )}

          {pestanaActiva === 'seccion4-3' && (
            <Seccion4_3 
              onVolver={() => setPestanaActiva('principal')} 
            />
          )}

          {pestanaActiva === 'seccion4-5' && (
            <Seccion4_5
              onVolver={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion4-6' && (
            <Seccion4_6
              onVolver={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion4-7' && (
            <Seccion4_7
              onVolver={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion4-8' && (
            <Seccion4_8
              onVolver={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion4-9' && (
            <Seccion4_9
              onVolver={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion5' && (
            <Seccion5
              onVolver={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion5-1' && (
            <Seccion5_1
              onVolver={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion5-2' && (
            <Seccion5_2
              onVolver={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion6' && (
            <Seccion6
              onVolver={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion7' && (
            <Seccion7
              onVolver={() => setPestanaActiva('principal')}
              onSeleccionarSubseccion={(subseccionId) => setPestanaActiva(subseccionId)}
            />
          )}

          {pestanaActiva === 'seccion7-1' && (
            <Seccion7_1
              onVolver={() => setPestanaActiva('seccion7')}
            />
          )}

          {pestanaActiva === 'seccion7-2' && (
            <Seccion7_2
              onVolver={() => setPestanaActiva('seccion7')}
            />
          )}

          {pestanaActiva === 'seccion7-3' && (
            <Seccion7_3
              onVolver={() => setPestanaActiva('seccion7')}
            />
          )}

          {pestanaActiva === 'seccion7-4' && (
            <Seccion7_4
              onVolver={() => setPestanaActiva('seccion7')}
            />
          )}

          {pestanaActiva === 'seccion7-5' && (
            <Seccion7_5
              onVolver={() => setPestanaActiva('seccion7')}
            />
          )}

          {pestanaActiva === 'seccion7-6' && (
            <Seccion7_6
              onVolver={() => setPestanaActiva('seccion7')}
            />
          )}

          {['seccion7-7', 'seccion8', 'seccion9', 'seccion10', 'seccion11', 'seccion12', 'seccion13', 'seccion14'].includes(pestanaActiva) && (
            <div className="content-box-wide space-y-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 p-3 rounded-lg border border-slate-200">
                <button onClick={() => setPestanaActiva('principal')} className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none">
                  Transparencia Activa
                </button>
                <span className="text-slate-400">&gt;</span>
                <span className="text-slate-900">Sección en desarrollo / {pestanaActiva.toUpperCase()}</span>
              </div>
              <div className="content-box text-center py-12 space-y-3">
                <h2 className="content-title">Apartado Histórico</h2>
                <p className="text-slate-600 text-sm">
                  Esta sección está preparada en el sistema. Pronto cargaremos sus registros y tablas correspondientes.
                </p>
                <button 
                  onClick={() => setPestanaActiva('principal')}
                  className="px-4 py-2 bg-blue-700 text-white text-xs font-semibold rounded-lg shadow hover:bg-blue-800 transition-all cursor-pointer"
                >
                  Volver al inicio
                </button>
              </div>
            </div>
          )}

          {categoriaSeleccionada && (
            <div className="content-box">
              <h2 className="content-title">{categoriaSeleccionada.categoria}</h2>
              <ul className="space-y-3 mt-4">
                {categoriaSeleccionada.enlaces.map((enlace, idx) => (
                  <li key={idx} className="p-3 bg-slate-50 rounded-lg hover:bg-blue-50/50 transition-colors border border-slate-100 flex items-center justify-between">
                    <a href={enlace.url} target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-700 hover:underline flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{enlace.texto}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {pestanaActiva === 'videos' && (
            <div className="content-box-wide space-y-6">
              <div>
                <h2 className="content-title"><Video className="w-6 h-6 text-blue-600 inline mr-2" />Videos educativos en lengua de señas y en audio</h2>
                <p className="text-xs text-slate-600">Material educativo sobre el Derecho de Acceso a la Información Pública.</p>
              </div>
            </div>
          )}

          {pestanaActiva === 'sabias' && (
            <div className="content-box space-y-6">
              <h2 className="text-xl font-bold text-blue-900 border-b pb-2">Sabías que...</h2>
              <p className="text-sm text-slate-800">El plazo legal para la entrega de la información es de 20 días hábiles...</p>
            </div>
          )}

          {pestanaActiva === 'contacto' && (
            <div className="content-box max-w-xl">
              <h2 className="content-title"><Mail className="w-5 h-5 text-blue-600 inline mr-2" />Información de Contacto</h2>
              <p className="text-xs">San Pablo 5959 - Fono: 5623887473</p>
            </div>
          )}

          {pestanaActiva === 'dificultades' && (
            <div className="content-box-wide">
              <h2 className="content-title"><Wrench className="w-5 h-5 text-blue-600 inline mr-2" />Dificultades Técnicas</h2>
              <p className="text-sm">Reporte errores a transparencia@loprado.cl</p>
            </div>
          )}

        </main>
      </div>

      <div className="floating-home">
        <a href="http://www.loprado.cl" target="_blank" rel="noreferrer" className="home-btn" title="Ir a la página principal">
          <Home className="w-6 h-6 text-slate-800" />
        </a>
      </div>

      <footer className="footer-main">
        <p>Ilustre Municipalidad de Lo Prado • Sistema de Transparencia Histórica.</p>
      </footer>
    </div>
  );
}