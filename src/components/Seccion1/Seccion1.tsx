import { useState } from 'react';
import { ChevronRight, Search, ExternalLink, ChevronDown } from 'lucide-react';
import PdfLinkButton from '../PdfLinkButton';
import { ArrowLeft } from 'lucide-react';

interface Seccion1Props {
  onVolver: () => void;
}

interface RegistroHistorico {
  id: string;
  tipoNorma: 'Decreto' | 'Ordenanza';
  numero: string;
  fechaTipoNorma: string;
  nombreTitulo: string;
  fechaPublicacionDO: string;
  enlaceDOUrl?: string;
  enlaceLeyChileUrl?: string;
  enlaceNormaPdfUrl?: string;
  fechaUltimaModificacion?: string;
  enlaceModificacionPdfUrl?: string;
}

export default function Seccion1({ onVolver }: Seccion1Props) {
  const [subVista, setSubVista] = useState<'principal' | 'diario-oficial' | 'historico'>('principal');
  const [anioSeleccionado, setAnioSeleccionado] = useState('2016');
  const [busquedaInterna, setBusquedaInterna] = useState('');

  const [filtroTipo, setFiltroTipo] = useState<'todos' | 'Decreto' | 'Ordenanza'>('todos');
  const [busquedaHistorico, setBusquedaHistorico] = useState('');
  const [idExpandido, setIdExpandido] = useState<string | null>(null);

  // Listado completo basado en la imagen del histórico
  const registrosHistoricos: RegistroHistorico[] = [
    {
      id: '1',
      tipoNorma: 'Decreto',
      numero: '983',
      fechaTipoNorma: '27.05.2010',
      nombreTitulo: 'APRUEBA ORDENANZA SOBRE TENENCIA, CUIDADO Y CONTROL DE ANIMALES',
      fechaPublicacionDO: 'Diario Oficial de fecha 27.05.2010',
      enlaceDOUrl: '#',
      enlaceLeyChileUrl: 'https://www.bcn.cl/leychile',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Aprueba con fecha 27.07.2010',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '2',
      tipoNorma: 'Decreto',
      numero: '1528',
      fechaTipoNorma: '08.09.2006',
      nombreTitulo: 'Modifica Ordenanza N° 1465, sobre Derechos Municipales',
      fechaPublicacionDO: 'Diario Oficial de fecha 25.09.2006',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Aprueba con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '3',
      tipoNorma: 'Decreto',
      numero: '544',
      fechaTipoNorma: '23.03.2006',
      nombreTitulo: 'Modifica Ordenanza N° 1465, sobre Derechos Municipales',
      fechaPublicacionDO: 'Diario Oficial de fecha 08.09.2006',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Aprueba con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '4',
      tipoNorma: 'Decreto',
      numero: '848',
      fechaTipoNorma: '21.06.2005',
      nombreTitulo: 'Modifica Ordenanza, sobre Actividad Comercial, Industrial y de Servicio.',
      fechaPublicacionDO: 'Diario Oficial de fecha 28.06.2005',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Modificada con fecha 27.12.2006',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '5',
      tipoNorma: 'Decreto',
      numero: '1465',
      fechaTipoNorma: '25.10.2005',
      nombreTitulo: 'Aprueba Ordenanza, sobre Derechos Municipales',
      fechaPublicacionDO: 'Diario Oficial de fecha 29.10.2005',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Sin modificaciones'
    },
    {
      id: '6',
      tipoNorma: 'Decreto',
      numero: '1289',
      fechaTipoNorma: '15.09.2005',
      nombreTitulo: 'Aprueba Ordenanza de Funcionamiento del Centro Comercial Persa neptuno',
      fechaPublicacionDO: 'Diario Oficial de fecha 30.09.2005',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Sin modificaciones'
    },
    {
      id: '7',
      tipoNorma: 'Decreto',
      numero: '1085',
      fechaTipoNorma: '09.08.2005',
      nombreTitulo: 'Aprueba Ordenanza para Ferias Persas',
      fechaPublicacionDO: 'Diario Oficial de fecha 16.08.2005',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Sin modificaciones'
    },
    {
      id: '8',
      tipoNorma: 'Decreto',
      numero: '850',
      fechaTipoNorma: '21.06.2005',
      nombreTitulo: 'Modifica Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura',
      fechaPublicacionDO: 'Diario Oficial de fecha 30.07.2005',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Modificada con fecha 08.01.1998',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '9',
      tipoNorma: 'Decreto',
      numero: '1693',
      fechaTipoNorma: '28.12.2004',
      nombreTitulo: 'Modifica Ordenanza N° 689 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 30.12.2004',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '10',
      tipoNorma: 'Decreto',
      numero: '1494',
      fechaTipoNorma: '29.11.2004',
      nombreTitulo: 'Aprueba Ordenanza sobre Notificaciones y Rendiciones Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 30.11.2004',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Aprueba con fecha 08.01.1998, la cual es derogada por la presente',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '11',
      tipoNorma: 'Decreto',
      numero: '372',
      fechaTipoNorma: '18.05.2004',
      nombreTitulo: 'Aprueba Ordenanza Subvenciones Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 02.06.2004',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Sin modificaciones.',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '12',
      tipoNorma: 'Decreto',
      numero: '1878',
      fechaTipoNorma: '26.12.2003',
      nombreTitulo: 'Modifica Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura',
      fechaPublicacionDO: 'Diario Oficial de fecha 31.12.2003',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Modificada con fecha 08.01.1998',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '13',
      tipoNorma: 'Decreto',
      numero: '1847',
      fechaTipoNorma: '19.12.2003',
      nombreTitulo: 'Aprueba texto refundido de la Ordenanza N° 004, sobre Actividad Comercial, Industrial y de Servicio.',
      fechaPublicacionDO: 'Diario Oficial de fecha 16.01.2004',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Modificada con fecha 27.12.2006',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '14',
      tipoNorma: 'Decreto',
      numero: '1213',
      fechaTipoNorma: '26.09.2003',
      nombreTitulo: 'Modifica Ordenanza N° 2, sobre Aseo en la Comuna de Lo Prado, de 1987',
      fechaPublicacionDO: 'Diario Oficial de fecha 31.10.2003',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Deroga con fecha 18.01.2016',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '15',
      tipoNorma: 'Decreto',
      numero: '888',
      fechaTipoNorma: '31.07.2003',
      nombreTitulo: 'Modifica Ordenanza, sobre Actividad Comercial, Industrial y de Servicio.',
      fechaPublicacionDO: 'Diario Oficial de fecha 18.08.2003',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Modificada con fecha 27.12.2006',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '16',
      tipoNorma: 'Decreto',
      numero: '1688',
      fechaTipoNorma: '26.12.2002',
      nombreTitulo: 'Modifica Ordenanza N° 689 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 30.12.2002',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '17',
      tipoNorma: 'Decreto',
      numero: '1687',
      fechaTipoNorma: '26.12.2002',
      nombreTitulo: 'Modifica Ordenanza N° 689 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 30.12.2002',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 27.12.2006',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '18',
      tipoNorma: 'Decreto',
      numero: '842',
      fechaTipoNorma: '18.06.2002',
      nombreTitulo: 'Modifica Ordenanza sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura',
      fechaPublicacionDO: 'Diario Oficial de fecha 18.06.2002',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Modificada con fecha 08.01.1998',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '19',
      tipoNorma: 'Decreto',
      numero: '1653',
      fechaTipoNorma: '17.12.2001',
      nombreTitulo: 'Modifica Ordenanza N° 689 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 21.12.2001',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '20',
      tipoNorma: 'Decreto',
      numero: '1377',
      fechaTipoNorma: '19.10.2001',
      nombreTitulo: 'Modifica Ordenanza, sobre Actividad Comercial, Industrial y de Servicio.',
      fechaPublicacionDO: 'Diario Oficial de fecha 30.12.2002',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 27.12.2006',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '21',
      tipoNorma: 'Decreto',
      numero: '1288',
      fechaTipoNorma: '06.12.2000',
      nombreTitulo: 'Modifica Ordenanza N° 689 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 18.12.2000',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '22',
      tipoNorma: 'Decreto',
      numero: '1310',
      fechaTipoNorma: '15.12.1999',
      nombreTitulo: 'Modifica Ordenanza, sobre Actividad Comercial, Industrial y de Servicio.',
      fechaPublicacionDO: 'Diario Oficial de fecha 29.12.1999',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Modificada con fecha 27.12.2006',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '23',
      tipoNorma: 'Decreto',
      numero: '1308',
      fechaTipoNorma: '15.12.1999',
      nombreTitulo: 'Modifica Ordenanza N° 689 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 29.12.1999',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '24',
      tipoNorma: 'Decreto',
      numero: '365',
      fechaTipoNorma: '20.06.1998',
      nombreTitulo: 'Modifica Ordenanza N° 2 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 25.03.1998',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '25',
      tipoNorma: 'Decreto',
      numero: '1073',
      fechaTipoNorma: '16.12.1998',
      nombreTitulo: 'Modifica Ordenanza N° 2 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 29.12.1998',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '26',
      tipoNorma: 'Decreto',
      numero: '35',
      fechaTipoNorma: '15.01.1997',
      nombreTitulo: 'Modifica Ordenanza N° 2 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 27.01.1997',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '27',
      tipoNorma: 'Decreto',
      numero: '20',
      fechaTipoNorma: '11.01.1996',
      nombreTitulo: 'Modifica Ordenanza N° 2 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 20.01.1996',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '28',
      tipoNorma: 'Decreto',
      numero: '103',
      fechaTipoNorma: '25.01.1996',
      nombreTitulo: 'Modifica Ordenanza N° 2 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 30.01.1996',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '29',
      tipoNorma: 'Decreto',
      numero: '80',
      fechaTipoNorma: '28.01.1996',
      nombreTitulo: 'Modifica Ordenanza N° 2 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 31.03.1996',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '30',
      tipoNorma: 'Decreto',
      numero: '1786',
      fechaTipoNorma: '01.02.1993',
      nombreTitulo: 'Modifica Ordenanza N° 2 que aprueba Texto Refundido sobre Derechos Municipales.',
      fechaPublicacionDO: 'Diario Oficial de fecha 25.01.1993',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'deroga con fecha 25.10.2005',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '31',
      tipoNorma: 'Decreto',
      numero: '117',
      fechaTipoNorma: '22.01.1991',
      nombreTitulo: 'Modifica Ordenanza N° 3, sobre normas sanitarias, Basuras, de 1985',
      fechaPublicacionDO: 'Diario Oficial de fecha 26.01.1991',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Deroga con fecha 18.01.2016',
      enlaceModificacionPdfUrl: '#'
    },
    {
      id: '32',
      tipoNorma: 'Ordenanza',
      numero: '3',
      fechaTipoNorma: '10.10.1985',
      nombreTitulo: 'Apruebase Siguientes Ordenanza sobre Normas, Basuras y Básicas.',
      fechaPublicacionDO: 'Diario Oficial de fecha 26.01.1991',
      enlaceDOUrl: '#',
      enlaceNormaPdfUrl: '#',
      fechaUltimaModificacion: 'Deroga con fecha 18.01.2016',
      enlaceModificacionPdfUrl: '#'
    }
  ];

  const registrosFiltrados = registrosHistoricos.filter((item) => {
    const cumpleTipo = filtroTipo === 'todos' || item.tipoNorma === filtroTipo;
    const cumpleBusqueda = 
      item.nombreTitulo.toLowerCase().includes(busquedaHistorico.toLowerCase()) ||
      item.numero.includes(busquedaHistorico) ||
      item.tipoNorma.toLowerCase().includes(busquedaHistorico.toLowerCase());
    return cumpleTipo && cumpleBusqueda;
  });

  if (subVista === 'historico') {
    return (
      <div className="content-box-wide space-y-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 p-3 rounded-lg border border-slate-200">
          <button onClick={onVolver} className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none">
            Transparencia Activa
          </button>
          <span className="text-slate-400">&gt;</span>
          <button onClick={() => setSubVista('principal')} className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none">
            Publicaciones Diario Oficial
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-900">Histórico</span>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="content-title" style={{ margin: 0 }}>
            Publicaciones en el Diario Oficial Histórico
          </h2>
          <span className="text-xs text-slate-500">Última actualización: 5/10/2026</span>
        </div>

        <div className="search-card flex flex-col md:flex-row items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
            <span className="text-sm font-semibold text-slate-700 mr-2">Filtrar por:</span>
            <button
              onClick={() => setFiltroTipo('todos')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${filtroTipo === 'todos' ? 'bg-blue-700 text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Todos
            </button>
            <button
              onClick={() => setFiltroTipo('Decreto')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${filtroTipo === 'Decreto' ? 'bg-blue-700 text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Decretos
            </button>
            <button
              onClick={() => setFiltroTipo('Ordenanza')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${filtroTipo === 'Ordenanza' ? 'bg-blue-700 text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              Ordenanzas
            </button>
          </div>

          <div className="search-input-wrapper w-full md:w-72">
            <Search className="search-icon-pos w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar por número o título..." 
              value={busquedaHistorico}
              onChange={(e) => setBusquedaHistorico(e.target.value)}
              className="search-input text-sm py-2"
            />
          </div>
        </div>

        <div className="space-y-3">
          {registrosFiltrados.length === 0 ? (
            <div className="content-box text-center py-10 text-slate-500 text-sm">
              No se encontraron registros históricos con los filtros seleccionados.
            </div>
          ) : (
            registrosFiltrados.map((item) => {
              const estaAbierto = idExpandido === item.id;
              return (
                <div key={item.id} className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden transition-all">
                  
                  <div 
                    onClick={() => setIdExpandido(estaAbierto ? null : item.id)}
                    className="p-4 bg-slate-50 hover:bg-blue-50/50 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                        {item.tipoNorma} N° {item.numero}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">
                        {item.nombreTitulo}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span>{estaAbierto ? 'Ocultar detalle' : 'Ver detalle'}</span>
                      <ChevronDown className={`w-4 h-4 text-blue-600 transition-transform ${estaAbierto ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {estaAbierto && (
                    <div className="p-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-700 bg-white">
                      
                      <div>
                        <span className="font-semibold text-slate-900 block mb-1">Fecha Tipo de Norma:</span>
                        <p className="text-slate-600">{item.fechaTipoNorma}</p>
                      </div>

                      <div>
                        <span className="font-semibold text-slate-900 block mb-1">Nombre / Título:</span>
                        <p className="text-slate-600 font-medium">{item.nombreTitulo}</p>
                      </div>

                      <div>
                        <span className="font-semibold text-slate-900 block mb-1">Publicación Diario Oficial:</span>
                        <p className="mb-1 text-xs text-slate-600">{item.fechaPublicacionDO}</p>
                        <PdfLinkButton href={item.enlaceDOUrl} ariaLabel={`Abrir publicación del Diario Oficial de ${item.nombreTitulo}`} />
                      </div>

                      <div>
                        <span className="font-semibold text-slate-900 block mb-1">Enlace a Ley Chile:</span>
                        {item.enlaceLeyChileUrl && item.enlaceLeyChileUrl !== '#' ? (
                          <a href={item.enlaceLeyChileUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 font-medium">
                            <ExternalLink className="w-3.5 h-3.5" /> Ver en Ley Chile
                          </a>
                        ) : (
                          <span className="text-slate-400 italic">Sin Enlace</span>
                        )}
                      </div>

                      <div>
                        <span className="font-semibold text-slate-900 block mb-1">Última Modificación:</span>
                        <p className="text-slate-600">{item.fechaUltimaModificacion}</p>
                      </div>

                      <div>
                        <span className="font-semibold text-slate-900 block mb-1">Documento Modificatorio:</span>
                        {item.enlaceModificacionPdfUrl && item.enlaceModificacionPdfUrl !== '#' ? (
                          <PdfLinkButton href={item.enlaceModificacionPdfUrl} ariaLabel={`Abrir PDF de modificación de ${item.nombreTitulo}`} />
                        ) : (
                          <span className="text-slate-400 italic">Sin modificaciones</span>
                        )}
                      </div>

                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }

  if (subVista === 'diario-oficial') {
    return (
      <div className="content-box-wide space-y-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 p-3 rounded-lg border border-slate-200">
          <button onClick={onVolver} className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none">
            Transparencia Activa
          </button>
          <span className="text-slate-400">&gt;</span>
          <button onClick={() => setSubVista('principal')} className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none">
            Publicaciones Diario Oficial
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-900">Año {anioSeleccionado}</span>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="content-title" style={{ margin: 0 }}>
            Publicaciones Diario Oficial - Año {anioSeleccionado}
          </h2>
          <span className="text-xs text-slate-500">Última actualización: 5/10/2026</span>
        </div>

        <div className="search-card flex flex-col md:flex-row items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <label className="font-semibold text-sm text-slate-700">Seleccione año:</label>
            <select 
              value={anioSeleccionado} 
              onChange={(e) => setAnioSeleccionado(e.target.value)}
              className="p-2 border border-slate-300 rounded-lg bg-white text-sm font-medium outline-none focus:border-blue-600"
            >
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
            </select>
          </div>

          <div className="search-input-wrapper w-full md:w-72">
            <Search className="search-icon-pos w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar en esta página..." 
              value={busquedaInterna}
              onChange={(e) => setBusquedaInterna(e.target.value)}
              className="search-input text-sm py-2"
            />
          </div>
        </div>

        <div className="content-box text-center py-12 space-y-3">
          <p className="text-lg font-semibold text-slate-600">
            Este Municipio no ha sido objeto de publicación en el Diario Oficial durante el año {anioSeleccionado}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="content-box-wide space-y-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 p-3 rounded-lg border border-slate-200">
        <button 
          onClick={onVolver}
          className="text-blue-700 hover:underline cursor-pointer bg-transparent border-none"
        >
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-900">Publicaciones Diario Oficial</span>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="content-title" style={{ margin: 0 }}>
          Actos y documentos publicados en Diario Oficial
        </h2>
        <span className="text-xs text-slate-500">Última actualización: 5/10/2026</span>
      </div>

      <div className="grid-secciones">
        
        <div 
          onClick={() => setSubVista('diario-oficial')}
          className="seccion-card flex flex-col justify-between cursor-pointer group hover:border-blue-400 transition-all"
        >
          <div className="flex items-center justify-between p-2 rounded">
            <h3 className="seccion-header" style={{ margin: 0 }}>Diario Oficial</h3>
            <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform shrink-0" />
          </div>
          <div className="card-footer-historic mt-4">
            <span className="historic-label">Normativa Nacional</span>
          </div>
        </div>

        <a 
          href="https://www.bcn.cl/leychile/consulta/listaresultadosavanzada?stringBusqueda=26%23normal%23municipalidad%2Bde%2Blo%2Bprado%7C%7C4%23normal%232009-04-01%232013-01-01%7C%7C117%23normal%23on%7C%7C48%23normal%23on&tipoNormaBA=&o=experta"
          target="_blank"
          rel="noopener noreferrer"
          className="seccion-card flex flex-col justify-between cursor-pointer group hover:border-blue-400 transition-all text-inherit no-underline"
        >
          <div className="flex items-center justify-between p-2 rounded">
            <h3 className="seccion-header" style={{ margin: 0 }}>Ley Chile</h3>
            <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform shrink-0" />
          </div>
          <div className="card-footer-historic mt-4">
            <span className="historic-label">Legislación Vigente</span>
          </div>
        </a>

        <div 
          onClick={() => setSubVista('historico')}
          className="seccion-card flex flex-col justify-between cursor-pointer group hover:border-blue-400 transition-all"
        >
          <div className="flex items-center justify-between p-2 rounded">
            <h3 className="seccion-header" style={{ margin: 0 }}>Historico Diario Oficial</h3>
            <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform shrink-0" />
          </div>
          <div className="card-footer-historic mt-4">
            <span className="historic-label">Archivo Histórico</span>
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
    </div>
  );
}