import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, ArrowLeft } from 'lucide-react';

interface Seccion7_5Props {
  onVolver: () => void;
}

interface OrdenanzaItem {
  denominacion: string;
  tipoNorma: string;
  numero: string;
  titulo: string;
  fecha: string;
  fechaPublicacion: string;
  descripcion: string;
  urlDocumento: string;
  modificaciones?: { nombre: string; url: string }[];
}

interface AnioOrdenanzas {
  anio: string;
  items: OrdenanzaItem[];
}

export default function Seccion7_5({ onVolver }: Seccion7_5Props) {
  const ordenanzasData: AnioOrdenanzas[] = [
    {
      anio: '2016',
      items: [
        {
          denominacion: 'Decreto',
          tipoNorma: 'Decreto',
          numero: '755',
          titulo: 'Certifica Pérdida y/o destrucción de documentos',
          fecha: '25/10/2016',
          fechaPublicacion: '31/10/2016',
          descripcion: 'Certifica Pérdida y eliminación de documentos consecuencia terremoto 2010',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '499',
          titulo: 'Aprueba Ordenanza',
          fecha: '06/07/2016',
          fechaPublicacion: '05/08/2016',
          descripcion: 'Aprueba Nuevo Texto Refundido y Actualizado de la Ordenanza sobre Permisos y Concesiones de Bienes Municipales y Nacionales de Uso Público y Concesiones de Servicios Municipales',
          urlDocumento: ''
        },
        {
          denominacion: 'Decretos Alcaldicios',
          tipoNorma: 'Ordenanza',
          numero: '460',
          titulo: 'Aprueba Ordenanza',
          fecha: '22/06/2016',
          fechaPublicacion: '24/06/2016',
          descripcion: 'Aprueba Ordenanza Municipal sobre Ocupación de Espacios en Plazas y Parques u otros Espacios Públicos para Propaganda Electoral',
          urlDocumento: ''
        }
      ]
    },
    {
      anio: '2015',
      items: [
        {
          denominacion: 'Decretos Alcaldicios',
          tipoNorma: 'Ordenanza',
          numero: '866',
          titulo: 'Texto Refundido',
          fecha: '28/10/2015',
          fechaPublicacion: '29/10/2015',
          descripcion: 'Aprueba Texto Refundido y Actualizado de la Ordenanza sobre Derechos Municipales, Decretos Alcaldicio N° 245 y modificaciones Decreto Alcaldicio N° 470 y N° 853 del año 2015',
          urlDocumento: '',
          modificaciones: [
            { nombre: 'Modificación 1', url: '' },
            { nombre: 'Modificación 2', url: '' },
            { nombre: 'Modificación 3', url: '' }
          ]
        },
        {
          denominacion: 'Decretos Alcaldicios',
          tipoNorma: 'Ordenanza',
          numero: '531',
          titulo: 'Aprueba Ordenanza',
          fecha: '15/07/2015',
          fechaPublicacion: '04/08/2015',
          descripcion: 'Aprueba Ordenanzas para el Otorgamiento de Patentes Provisorias',
          urlDocumento: ''
        },
        {
          denominacion: 'Decretos Alcaldicios',
          tipoNorma: 'Ordenanza',
          numero: '526',
          titulo: 'Aprueba Ordenanza',
          fecha: '14/07/2015',
          fechaPublicacion: '04/08/2015',
          descripcion: 'Aprueba nuevo derecho municipal sobre cobro de aseo a ferias y persas',
          urlDocumento: ''
        },
        {
          denominacion: 'Decretos Alcaldicios',
          tipoNorma: 'Ordenanza',
          numero: '224',
          titulo: 'Texto Refundido',
          fecha: '31/03/2015',
          fechaPublicacion: '01/04/2015',
          descripcion: 'Aprueba Texto Refundido y Actualizado de la Ordenanza Sobre Cobro de Derechos del Servicio Domiciliario por Extracción de Basura.',
          urlDocumento: '',
          modificaciones: [{ nombre: 'Modificación (29.02.2016)', url: '' }]
        },
        {
          denominacion: 'Decretos Alcaldicios',
          tipoNorma: 'Ordenanza',
          numero: '22',
          titulo: 'Aprueba Ordenanza',
          fecha: '08/01/2015',
          fechaPublicacion: '08/01/2015',
          descripcion: 'Aprueba Ordenanza que Regula el Emplazamiento de Torres de Soporte de Antenas y Sistemas Radiantes de Telecomunicaciones en Bienes Municipales y Nacionales de Uso Público que Administre la Ilustre Municipalidad de Lo Prado',
          urlDocumento: ''
        }
      ]
    },
    {
      anio: '2014',
      items: [
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '2562',
          titulo: 'Texto Refundido',
          fecha: '11/09/2014',
          fechaPublicacion: '15/09/2014',
          descripcion: 'Declara Zona saturada para el desarrollar actividad comercial en sectores que indica y deroga Decreto Alcaldicio N° 1452, de fecha 11.07.2011',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '2314',
          titulo: 'Aprueba Ordenanza',
          fecha: '18/08/2014',
          fechaPublicacion: '01/09/2014',
          descripcion: 'Aprueba constitución de consejo comunal de seguridad pública en la comuna de Lo Prado',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '2309',
          titulo: 'Aprueba Ordenanza',
          fecha: '14/08/2014',
          fechaPublicacion: '06/09/2014',
          descripcion: 'Aprueba Ordenanza local sobre cierre o medidas de control de acceso a calles y pasajes, o de conjuntos habitacionales por motivos de seguridad de los vecinos',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '100',
          titulo: 'Aprueba Ordenanza',
          fecha: '15/01/2014',
          fechaPublicacion: '01/02/2014',
          descripcion: 'Aprueba Ordenanza de Medio Ambiente de la Comuna de Lo Prado',
          urlDocumento: ''
        }
      ]
    },
    {
      anio: '2013',
      items: [
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '1084',
          titulo: 'Texto Refundido',
          fecha: '15/04/2013',
          fechaPublicacion: '01/05/2014',
          descripcion: 'Aprueba texto refundido y actualizado de la ordenanza, sobre Máquinas de Destreza con pago en dinero para la comuna de Lo Prado',
          urlDocumento: '',
          modificaciones: [{ nombre: 'Modificación (11.09.2013)', url: '' }]
        }
      ]
    },
    {
      anio: '2011',
      items: [
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '1452',
          titulo: 'Aprueba Ordenanza',
          fecha: '08/07/2011',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Declara Zonas Saturadas para Desarrollar Actividad Comercial en Sectores que se indican.',
          urlDocumento: ''
        }
      ]
    },
    {
      anio: '2010',
      items: [
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '2290',
          titulo: 'Aprueba Ordenanza',
          fecha: '27/11/2010',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Fija tarifa de aseo domiciliario para los años 2015, 2016, y 2017; y complementa 2290',
          urlDocumento: '',
          modificaciones: [
            { nombre: 'Modificación (28.01.2015)', url: '' },
            { nombre: 'Modificación (29.10.2014)', url: '' }
          ]
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '1944',
          titulo: 'Aprueba Ordenanza',
          fecha: '25/10/2010',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Ordenanza que regula el uso de los estacionamientos reservados para taxis o quienes presentes este servicio de transporte a la comunidad, con el propósito de construir a la gestión del transporte y mejorar la atención al usuario.',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '1391',
          titulo: 'Aprueba Ordenanza',
          fecha: '27/07/2010',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Ordenanza que contempla las normas que regirán el funcionamiento de los locales municipales ubicados en Neptuno Oriente frente a la estación de Metro San Pablo.',
          urlDocumento: '',
          modificaciones: [{ nombre: 'Modificación (10.10.2012)', url: '' }]
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '983',
          titulo: 'Aprueba Ordenanza',
          fecha: '19/05/2010',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Aprueba ordenanza sobre Tenencia, Cuidado y Control de Animales en la comuna de Lo Prado.',
          urlDocumento: ''
        }
      ]
    },
    {
      anio: '2009',
      items: [
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '2214',
          titulo: 'Aprueba Ordenanza',
          fecha: '26/10/2009',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Aprueba ordenanza que regula procedimiento para el otorgamiento de permisos en Ferias Navideñas',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '2550',
          titulo: 'Aprueba Ordenanza',
          fecha: '16/12/2009',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Aprueba Plan Regulador de la comuna de Lo Prado',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '2154',
          titulo: 'Aprueba Ordenanza',
          fecha: '15/10/2009',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Ordenanza que contempla las normas que regirán el funcionamiento del Centro Comercial y Microempresarial Neptuno y su extensión',
          urlDocumento: ''
        }
      ]
    },
    {
      anio: 'Anteriores (1999 - 2008)',
      items: [
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '612',
          titulo: 'Aprueba Ordenanza',
          fecha: '19/03/2008',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Aprueba el texto de la Ordenanza Municipal para el comercio estacionado y ambulante en bienes nacionales de uso público de la comuna',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '2080',
          titulo: 'Aprueba Ordenanza',
          fecha: '27/12/2006',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Aprueba texto refundido de la Ordenanza N° 004, sobre Actividad Comercial, Industrial y de Servicio.',
          urlDocumento: '',
          modificaciones: [
            { nombre: 'Modificación (05.10.2012)', url: '' },
            { nombre: 'Modificación (29.12.2011)', url: '' }
          ]
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '290',
          titulo: 'Aprueba Ordenanza',
          fecha: '13/02/2006',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Regula las normas a la que esta sometidas la propaganda y publicidad comunal, estableciéndose determinados requisitos, así como las sanciones correspondientes en caso de incumplimiento.',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '306',
          titulo: 'Aprueba Ordenanza',
          fecha: '10/03/2005',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Ordenanza sobre Cobranza de Contribuciones, Patentes, Permisos y Derechos Municipales.',
          urlDocumento: '',
          modificaciones: [
            { nombre: 'Modificación (30.07.2009)', url: '' },
            { nombre: 'Modificación (11.03.2008)', url: '' }
          ]
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '1085',
          titulo: 'Aprueba Ordenanza',
          fecha: '09/08/2005',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Regir la actividad comercial que se realice en ferias persas de la comuna.',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '1494',
          titulo: 'Aprueba Ordenanza',
          fecha: '22/11/2004',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Ordenanza sobre Notificaciones y Publicaciones de Resoluciones Municipales que produzcan efecto fuera del Municipio.',
          urlDocumento: ''
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '372',
          titulo: 'Aprueba Ordenanza',
          fecha: '18/03/2004',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Regular el procedimiento para el otorgamiento de transferencias o subvenciones que la municipalidad pueda entregar para fines específicos, a personas jurídicas de carácter público o privado sin fines de lucro que colaboren directamente en el cumplimiento de sus funciones.',
          urlDocumento: '',
          modificaciones: [
            { nombre: 'Modificación (06.04.2014)', url: '' },
            { nombre: 'Modificación (30.12.2011)', url: '' }
          ]
        },
        {
          denominacion: 'Decreto',
          tipoNorma: 'Ordenanza',
          numero: '1',
          titulo: 'Aprueba Ordenanza',
          fecha: '21/09/1999',
          fechaPublicacion: '30/03/2013',
          descripcion: 'Ordenanza que rige las modalidades de participación que, en los términos del artículo 79 de la Ley N° 18.695, tendrán los distintos sectores de la ciudadanía local de la comuna de Lo Prado en la discusión y definición de las orientaciones que deben regir la Administración Comunal, y en la solución de los problemas de interés común.',
          urlDocumento: '',
          modificaciones: [{ nombre: 'Modificación (21.09.2011)', url: '' }]
        }
      ]
    }
  ];

  const [aniosAbiertos, setAniosAbiertos] = useState<Record<string, boolean>>({});
  const [categoriasAbiertas, setCategoriasAbiertas] = useState<Record<string, boolean>>({});

  const toggleAnio = (anio: string) => {
    setAniosAbiertos(prev => ({ ...prev, [anio]: !prev[anio] }));
  };

  const toggleCategoria = (clave: string) => {
    setCategoriasAbiertas(prev => ({ ...prev, [clave]: !prev[clave] }));
  };

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button onClick={onVolver} className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700">
          Actos y resoluciones con efectos sobre terceros
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Ordenanzas</span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Ordenanzas Municipales
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-medium">Última actualización: 14/10/2026</span>
      </div>

      <div className="space-y-3">
        {ordenanzasData.map((grupo) => {
          const isOpen = aniosAbiertos[grupo.anio] || false;

          const itemsPorCategoria = grupo.items.reduce<Record<string, OrdenanzaItem[]>>((categorias, item) => {
            let categoria = 'Otros';
            const denominacionLower = item.denominacion.toLowerCase();

            if (denominacionLower.includes('decretos alcaldicios')) {
              categoria = 'Decretos Alcaldicios';
            } else if (denominacionLower.includes('decreto')) {
              categoria = 'Decretos';
            } else if (denominacionLower.includes('ordenanza')) {
              categoria = 'Ordenanzas';
            }

            (categorias[categoria] ??= []).push(item);
            return categorias;
          }, {});

          const categoriasOrdenadas = ['Decretos Alcaldicios', 'Decretos', 'Ordenanzas', 'Otros']
            .filter(cat => itemsPorCategoria[cat] && itemsPorCategoria[cat].length > 0);

          return (
            <div key={grupo.anio} className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all hover:shadow-md">
              <div
                onClick={() => toggleAnio(grupo.anio)}
                className="p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 rounded-xl"
              >
                <div className="flex items-center gap-3 min-w-0 flex-wrap">
                  <span className="px-2.5 py-1 bg-blue-50/80 text-blue-700 text-xs font-semibold rounded-md border border-blue-100 shrink-0">
                    {grupo.anio}
                  </span>
                  <span className="text-sm font-bold text-slate-900 shrink-0">
                    Ordenanzas del periodo {grupo.anio}
                  </span>
                </div>

                <button className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 bg-transparent border-none cursor-pointer">
                  <span>{isOpen ? 'Ocultar ordenanzas' : 'Ver ordenanzas'}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {isOpen && (
                <div className="p-6 border-t border-slate-100 bg-white space-y-4 rounded-b-xl">
                  <div className="space-y-3">
                    {categoriasOrdenadas.map((categoria) => {
                      const claveCategoria = `${grupo.anio}-${categoria}`;
                      const categoriaAbierta = categoriasAbiertas[claveCategoria] || false;

                      return (
                        <div key={claveCategoria} className="rounded-xl border border-slate-200 overflow-hidden">
                          <button
                            type="button"
                            onClick={() => toggleCategoria(claveCategoria)}
                            aria-expanded={categoriaAbierta}
                            className="w-full p-4 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/80 text-left border-none"
                          >
                            <span className="text-sm font-bold text-slate-900">{categoria}</span>
                            <span className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0">
                              {categoriaAbierta ? 'Ocultar' : 'Ver'}
                              {categoriaAbierta ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </span>
                          </button>

                          {categoriaAbierta && (
                            <div className="p-4 border-t border-slate-100 bg-white space-y-4">
                              {itemsPorCategoria[categoria].map((item, idx) => (
                                <div
                                  key={`${item.numero}-${idx}`}
                                  className="p-4 bg-slate-50/60 rounded-xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                                >
                                  <div className="space-y-1.5 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500">
                                      <span className="font-semibold text-slate-800">{item.denominacion} N° {item.numero}</span>
                                      <span>•</span>
                                      <span>Fecha: {item.fecha}</span>
                                      <span>•</span>
                                      <span>Publicación: {item.fechaPublicacion}</span>
                                    </div>
                                    <p className="text-xs font-semibold text-slate-900 leading-snug">
                                      {item.descripcion}
                                    </p>
                                    {item.modificaciones && item.modificaciones.length > 0 && (
                                      <div className="pt-2 flex items-center gap-2 flex-wrap">
                                        <span className="text-[11px] font-medium text-slate-500">Modificaciones:</span>
                                        {item.modificaciones.map((mod, modIdx) => (
                                          <a
                                            key={modIdx}
                                            href={mod.url || '#'}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-700 text-[11px] font-medium rounded border border-red-100 hover:bg-red-100 transition-colors"
                                          >
                                            <FileText className="w-3 h-3 text-red-600" />
                                            <span>{mod.nombre}</span>
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                  </div>

                                  <div className="shrink-0 w-full md:w-auto flex justify-end">
                                    <a
                                      href={item.urlDocumento || '#'}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="px-3 py-2 bg-white hover:bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-slate-200 hover:border-blue-200 transition-all flex items-center gap-2 shadow-2xs group"
                                    >
                                      <span>Ver PDF</span>
                                      <FileText className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

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