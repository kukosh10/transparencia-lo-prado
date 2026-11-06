import { useEffect, useState } from 'react';
import { Search, ChevronRight, Video, Mail, Wrench, Home, Play } from 'lucide-react';
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
import Seccion7_7 from './components/Seccion7/Seccion7_7';
import Seccion8Tram from './components/Seccion8/Seccion8Tram';
import Seccion8TramSecreMuni from './components/Seccion8/Seccion8Tram(SecreMuni)';
import Seccion8_1OtrosTramites from './components/Seccion8/Seccion8_1OtrosTramites';
import Seccion9 from './components/Seccion9/Seccion9';
import Seccion9_1 from './components/Seccion9/Seccion9_1';
import Seccion9_2 from './components/Seccion9/Seccion9_2';
import Seccion9_3 from './components/Seccion9/Seccion9_3';
import Seccion10_1 from './components/Seccion10/Seccion10_1';
import Seccion10_2 from './components/Seccion10/Seccion10_2';
import Seccion10_3 from './components/Seccion10/Seccion10_3';
import Seccion10_4 from './components/Seccion10/Seccion10_4';
import Seccion10_5 from './components/Seccion10/Seccion10_5';
import Seccion11_1 from './components/Seccion11/Seccion11_1';
import Seccion11_2 from './components/Seccion11/Seccion11_2';
import Seccion11_3 from './components/Seccion11/Seccion11_3';
import Seccion11_4 from './components/Seccion11/Seccion11_4';
import Seccion11_5 from './components/Seccion11/Seccion11_5';
import Seccion12 from './components/Seccion12/Seccion12';
import Seccion12_1 from './components/Seccion12/Seccion12_1';
import Seccion12_2 from './components/Seccion12/Seccion12_2';
import Seccion13 from './components/Seccion13/Seccion13';
import Seccion14 from './components/Seccion14/Seccion14';
import Ley20730 from './components/Antecedentes y sitios Rela/Ley20730';
import OtrosAntecedentes from './components/Antecedentes y sitios Rela/OtrosAntecedentes';
import AccesoInformacionPublica from './components/Antecedentes y sitios Rela/AccesoInformacionPublica';
import CostosReproduccion from './components/Antecedentes y sitios Rela/CostosReproduccion';
import OtrosSitiosRelacionados from './components/Antecedentes y sitios Rela/OtrosSitiosRelacionados';
import MetasInstitucionales from './components/Antecedentes y sitios Rela/MetasInstitucionales';

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
  const contenidoAncho = /^seccion1[123](?:-|$)/.test(pestanaActiva) || pestanaActiva === 'metas-institucionales';

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
        if (textoLimpio === 'chile atiende') {
          window.open('https://www.chileatiende.gob.cl/fichas/12305-postular-al-programa-mujer-emprende-en-familia', '_blank', 'noopener,noreferrer');
        } else {
          setPestanaActiva(textoLimpio === 'otros trámites' ? 'seccion8-1' : 'seccion8');
        }
        break;
      case '09':
        setPestanaActiva('seccion9');
        break;
      case '10':
        if (textoLimpio.includes('norma general')) {
          window.open('about:blank', '_blank', 'noopener,noreferrer');
        } else if (textoLimpio.includes('mecanismos')) {
          setPestanaActiva('seccion10-2');
        } else if (textoLimpio.includes('consejo comunal')) {
          setPestanaActiva('seccion10-3');
        } else if (textoLimpio.includes('organizaciones sociales')) {
          setPestanaActiva('seccion10-4');
        } else if (textoLimpio.includes('comisión defensora') || textoLimpio.includes('comision defensora')) {
          window.open('http://www.cdc.gob.cl/', '_blank', 'noopener,noreferrer');
        } else {
          setPestanaActiva('seccion10-1');
        }
        break;
      case '11':
        if (textoLimpio.includes('presupuestos asignados')) {
          setPestanaActiva('seccion11-1');
        } else if (textoLimpio.includes('presupuesto aprobado')) {
          setPestanaActiva('seccion11-2');
        } else if (textoLimpio.includes('balance de la ejecución')) {
          setPestanaActiva('seccion11-3');
        } else if (textoLimpio.includes('estado de situación')) {
          setPestanaActiva('seccion11-4');
        } else if (textoLimpio.includes('presupuestos de pasivos')) {
          setPestanaActiva('seccion11-5');
        } else {
          setPestanaActiva('seccion11-1');
        }
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

        <main className={`main-content${contenidoAncho ? ' main-content-wide' : ''}`}>
          
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

          {(pestanaActiva === 'seccion7-6' || pestanaActiva.startsWith('seccion7-6-presupuesto-')) && (
            <Seccion7_6
              onVolver={() => setPestanaActiva('seccion7')}
              anioInicial={pestanaActiva.startsWith('seccion7-6-presupuesto-') ? pestanaActiva.slice('seccion7-6-presupuesto-'.length) : undefined}
              busquedaInicial={pestanaActiva.startsWith('seccion7-6-presupuesto-') ? 'presupuesto' : undefined}
            />
          )}

          {pestanaActiva === 'seccion7-7' && (
            <Seccion7_7
              onVolver={() => setPestanaActiva('seccion7')}
            />
          )}

          {pestanaActiva === 'seccion8' && (
            <Seccion8Tram onVolver={() => setPestanaActiva('principal')} />
          )}

          {pestanaActiva === 'seccion8-1' && (
            <Seccion8_1OtrosTramites onVolver={() => setPestanaActiva('principal')} />
          )}

          {pestanaActiva === 'seccion9' && (
            <Seccion9
              onVolver={() => setPestanaActiva('principal')}
              onSeleccionarSubseccion={(subseccionId) => setPestanaActiva(subseccionId)}
            />
          )}

          {pestanaActiva === 'seccion9-1' && (
            <Seccion9_1 onVolver={() => setPestanaActiva('seccion9')} onVolverSeccion={() => setPestanaActiva('principal')} />
          )}

          {pestanaActiva === 'seccion9-2' && (
            <Seccion9_2 onVolver={() => setPestanaActiva('seccion9')} onVolverSeccion={() => setPestanaActiva('principal')} />
          )}

          {pestanaActiva === 'seccion9-3' && (
            <Seccion9_3 onVolver={() => setPestanaActiva('seccion9')} onVolverSeccion={() => setPestanaActiva('principal')} />
          )}

          {pestanaActiva === 'seccion10-1' && (
            <Seccion10_1
              onVolver={() => setPestanaActiva('principal')}
              onVolverSeccion={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion10-2' && (
            <Seccion10_2
              onVolver={() => setPestanaActiva('principal')}
              onVolverSeccion={() => setPestanaActiva('principal')}
              onAbrirConsejoConsultivo={() => setPestanaActiva('seccion10-2-consejo')}
              onAbrirSecretariaMunicipal={() => setPestanaActiva('seccion10-2-secretaria')}
              onAbrirOrdenanza={() => window.open('about:blank', '_blank', 'noopener,noreferrer')}
            />
          )}

          {pestanaActiva === 'seccion10-2-consejo' && (
            <Seccion4
              onVolver={() => setPestanaActiva('seccion10-2')}
              unidadInicial="consultivo"
            />
          )}

          {pestanaActiva === 'seccion10-2-secretaria' && (
            <Seccion8TramSecreMuni
              onVolver={() => setPestanaActiva('seccion10-2')}
              onVolverSeccion={() => setPestanaActiva('seccion10-2')}
            />
          )}

          {pestanaActiva === 'seccion10-3' && (
            <Seccion10_3
              onVolver={() => setPestanaActiva('principal')}
              onVolverSeccion={() => setPestanaActiva('principal')}
              onAbrirConsejoConsultivo={() => setPestanaActiva('seccion10-3-consejo')}
            />
          )}

          {pestanaActiva === 'seccion10-3-consejo' && (
            <Seccion4
              onVolver={() => setPestanaActiva('seccion10-3')}
              unidadInicial="consultivo"
            />
          )}

          {pestanaActiva === 'seccion10-4' && (
            <Seccion10_4
              onVolver={() => setPestanaActiva('principal')}
              onVolverSeccion={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion10-5' && (
            <Seccion10_5
              onVolver={() => setPestanaActiva('principal')}
              onVolverSeccion={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion11-1' && (
            <Seccion11_1
              onVolverSeccion={() => setPestanaActiva('principal')}
              onAbrirPresupuesto={(anio) => setPestanaActiva(`seccion7-6-presupuesto-${anio}`)}
            />
          )}

          {pestanaActiva === 'seccion11-2' && (
            <Seccion11_2
              onVolverSeccion={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion11-3' && (
            <Seccion11_3
              onVolverSeccion={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion11-4' && (
            <Seccion11_4
              onVolverSeccion={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion11-5' && (
            <Seccion11_5
              onVolverSeccion={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion12' && (
            <Seccion12
              onVolver={() => setPestanaActiva('principal')}
              onAbrirAuditoriaInterna={() => setPestanaActiva('seccion12-1')}
              onAbrirAuditoriaExterna={() => setPestanaActiva('seccion12-2')}
            />
          )}

          {pestanaActiva === 'seccion12-1' && (
            <Seccion12_1
              onVolver={() => setPestanaActiva('seccion12')}
              onVolverSeccion={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion12-2' && (
            <Seccion12_2
              onVolver={() => setPestanaActiva('seccion12')}
              onVolverSeccion={() => setPestanaActiva('principal')}
            />
          )}

          {pestanaActiva === 'seccion13' && (
            <Seccion13 onVolverSeccion={() => setPestanaActiva('principal')} />
          )}

          {pestanaActiva === 'seccion14' && (
            <Seccion14 onVolverSeccion={() => setPestanaActiva('principal')} />
          )}

          {categoriaSeleccionada?.id === 'ley-20730' && (
            <Ley20730 categoria={categoriaSeleccionada} onVolver={() => setPestanaActiva('principal')} />
          )}

          {categoriaSeleccionada?.id === 'otros-antecedentes' && (
            <OtrosAntecedentes
              onVolver={() => setPestanaActiva('principal')}
              onAbrirPladeco={() => setPestanaActiva('seccion7-2')}
              onAbrirPlanRegulador={() => setPestanaActiva('seccion7-3')}
              onAbrirMetas={() => setPestanaActiva('metas-institucionales')}
            />
          )}

          {categoriaSeleccionada?.id === 'acceso-info' && (
            <AccesoInformacionPublica categoria={categoriaSeleccionada} onVolver={() => setPestanaActiva('principal')} />
          )}

          {categoriaSeleccionada?.id === 'costos-reproduccion' && (
            <CostosReproduccion categoria={categoriaSeleccionada} onVolver={() => setPestanaActiva('principal')} />
          )}

          {categoriaSeleccionada?.id === 'sitios-relacionados' && (
            <OtrosSitiosRelacionados categoria={categoriaSeleccionada} onVolver={() => setPestanaActiva('principal')} />
          )}

          {pestanaActiva === 'metas-institucionales' && (
            <MetasInstitucionales onVolver={() => setPestanaActiva('otros-antecedentes')} />
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
            <div className="content-box space-y-5">
              <h2 className="border-b border-slate-200 pb-3 text-xl font-bold text-blue-900">Sabías que...</h2>
              <p className="text-sm leading-relaxed text-slate-800">
                El plazo legal para la entrega de la información requerida es de 20 días hábiles, contados desde la recepción de su solicitud, que cumple con los requisitos enunciados en el artículo 12 de la Ley 20.285. Dicho plazo eventualmente podrá variar en caso de:
              </p>

              <section className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <h3 className="font-semibold text-blue-900">1. Subsanación:</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  En el caso de que la solicitud no reúna los requisitos enunciados en el inciso 1 del artículo 12 de la Ley 20.285, se requerirá al solicitante para que, en un plazo de 5 días, contados desde la respectiva notificación, subsane la falta. Indicando expresamente que, en caso de no subsanar, se le tendrá por desistido(a) de su solicitud.
                </p>
              </section>

              <section className="space-y-2 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <h3 className="font-semibold text-blue-900">2. Prórroga del plazo:</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Excepcionalmente el plazo de entrega de la información podrá ser prorrogado por 10 días hábiles, cuando existan circunstancias que hagan difícil reunir la información solicitada. En dicha situación la Municipalidad se lo comunicará al solicitante antes del vencimiento del plazo legal.
                </p>
              </section>

              <p className="text-sm leading-relaxed text-slate-800">
                Asimismo le comunicaremos que vencido el plazo de 20 días hábiles, establecido en el artículo 14 de la Ley 20.285, para la entrega de la documentación requerida, o denegada la petición, usted tiene derecho a recurrir ante el Consejo para la Transparencia, solicitando amparo a su derecho de acceso a la información.
              </p>

              <button
                type="button"
                disabled
                aria-label="Video Transparencia Municipal, enlace pendiente"
                className="flex w-full max-w-xl cursor-not-allowed items-center gap-5 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-600 p-5 text-left text-white opacity-90 shadow-lg sm:p-6"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Play className="h-7 w-7 fill-current" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block text-base font-bold sm:text-lg">Video Transparencia Municipal</span>
                  <span className="mt-1 block text-sm text-blue-100">Enlace del video pendiente</span>
                </span>
                <Video className="hidden h-6 w-6 shrink-0 text-blue-100 sm:block" aria-hidden="true" />
              </button>
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