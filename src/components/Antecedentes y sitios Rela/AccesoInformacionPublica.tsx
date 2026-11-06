import { ArrowLeft, Clock3, FileText, Info, Mail, MapPin, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

interface AccesoInformacionPublicaProps {
  categoria: {
    categoria: string;
    enlaces: readonly { texto: string; url: string }[];
  };
  onVolver: () => void;
}

interface DocumentoReservado {
  tipo: string;
  denominacion: string;
  nombre: string;
  numero: string;
  fecha: string;
  publicacion: string;
  efectos: string;
  actualizacion: string;
  descripcion: string;
  documentoUrl: string;
  modificaciones: string;
}

const sinModificaciones = 'Sin Modificaciones';

const documentosPorAnio: Record<string, readonly DocumentoReservado[]> = {
  '2016': [
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 2',
      numero: '413',
      fecha: '01.06.2016',
      publicacion: '03.06.2016, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA PARCIALMENTE ENTREGA DE INFORMACIÓN SOLICITADA POR MAXIMILIANO LEIVA SOTOMAYOR, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 2',
      numero: '370',
      fecha: '18.05.2016',
      publicacion: '20.05.2016, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA PARCIALMENTE ENTREGA DE INFORMACIÓN SOLICITADA POR ANTONIA VINAGRE, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 2',
      numero: '276',
      fecha: '15.04.2016',
      publicacion: '05.05.2016, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA PARCIALMENTE ENTREGA DE INFORMACIÓN SOLICITADA POR JACIM DABOVIC, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 2',
      numero: '260',
      fecha: '08.04.2016',
      publicacion: '05.05.2016, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA PARCIALMENTE ENTREGA DE INFORMACIÓN SOLICITADA POR JORGE MORALES, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 2',
      numero: '149',
      fecha: '03.03.2016',
      publicacion: '05.04.2016, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA TOTAL DE INFORMACIÓN SOLICITADA POR ELIZABETH JACQUELINE POZO VEGA, POR CONCURRIR CAUSAL DE RESERVA DEL ARTÍCULO 21, NUMERAL 2, DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 1, letra c)',
      numero: '133',
      fecha: '24.02.2016',
      publicacion: '03.05.2016, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA TOTAL DE INFORMACIÓN SOLICITADA POR INGRID HARTMANN ANGULO, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
  ],
  '2015': [
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '1074',
      fecha: '24.12.2015',
      publicacion: '08.01.2016, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE INFORMACIÓN SOLICITADA, POR CONCURRIR CAUSAL DE RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '982',
      fecha: '30.11.2015',
      publicacion: '08.12.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE INFORMACIÓN SOLICITADA POR LA SRA. MARÍA PAZ CARDONA, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 1, letra c)',
      numero: '933',
      fecha: '18.11.2015',
      publicacion: '08.12.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA TOTALMENTE ENTREGA DE INFORMACIÓN SOLICITADA POR DANIEL CRISTÓBAL ZAMORANO NAVARRETE, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '894',
      fecha: '09.11.2015',
      publicacion: '08.12.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE INFORMACIÓN SOLICITADA POR HERE CHILE LIMITADA, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285. SAI 413.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '847',
      fecha: '20.10.2015',
      publicacion: '06.11.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE LA INFORMACIÓN SOLICITADA POR DOÑA MARLENE ARAVENA LEDEZMA, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '711',
      fecha: '03.09.2015',
      publicacion: '06.10.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE INFORMACIÓN SOLICITADA POR DOÑA GRISELDA BENAVIDES, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra b)',
      numero: '701',
      fecha: '01.09.2015',
      publicacion: '06.10.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA TOTAL DE INFORMACIÓN SOLICITADA POR CONSTRUCTORA HÉCTOR LINCOLEO TORO E.I.R.L., POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA B), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '614',
      fecha: '11.08.2015',
      publicacion: '06.09.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE INFORMACIÓN SOLICITADA POR DOÑA MARÍA ISABELA ARCOS ROBLES, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '607',
      fecha: '05.08.2015',
      publicacion: '08.08.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE INFORMACIÓN SOLICITADA POR HERE CHILE LTDA., POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 2',
      numero: '288',
      fecha: '23.04.2015',
      publicacion: '06.05.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE INFORMACIÓN SOLICITADA POR DON MARCO SALAZAR LIRA, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 2, DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 2',
      numero: '284',
      fecha: '22.04.2015',
      publicacion: '06.05.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA DE INFORMACIÓN SOLICITADA POR DOÑA ANA MARÍA LUISA MELERO LÓPEZ, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21 N° 2 DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra b)',
      numero: '263',
      fecha: '14.04.2015',
      publicacion: '06.05.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE INFORMACIÓN SOLICITADA POR DOÑA ANA MARÍA TORRES, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA B), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra b)',
      numero: '260',
      fecha: '13.04.2015',
      publicacion: '06.05.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA PARCIAL DE INFORMACIÓN SOLICITADA POR DON CARLOS SEPÚLVEDA, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA B), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '111',
      fecha: '06.02.2015',
      publicacion: '06.02.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA DE INFORMACIÓN SOLICITADA POR DON PATRICIO VALISVEO FERNÁNDEZ, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decretos Alcaldicios',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '23',
      fecha: '12.01.2015',
      publicacion: '06.02.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA TOTAL DE INFORMACIÓN SOLICITADA POR DON GERMÁN CONTRERAS MORALES, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY N° 20.285.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
  ],
  '2014': [
    {
      tipo: 'Decreto',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 1, letra c)',
      numero: '3689',
      fecha: '23.12.14',
      publicacion: '06.01.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA DE INFORMACIÓN SOLICITADA POR DOÑA VICTORIA VENEGAS, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decreto',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 1, letra c)',
      numero: '3591',
      fecha: '12.12.14',
      publicacion: '06.01.2015, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA DE INFORMACIÓN SOLICITADA POR DON FRANCISCO ALMEYDA, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decreto',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 1, letra c)',
      numero: '3458',
      fecha: '28.11.14',
      publicacion: '06.12.2014, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA DE INFORMACIÓN SOLICITADA POR DON FRANCISCO ALMEYDA, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decreto',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '2844',
      fecha: '10.10.14',
      publicacion: '06.11.2014, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA PARCIALMENTE ENTREGA DE INFORMACIÓN SOLICITADA PARCIAL A DON JONATHAN ORREGO TRONCOSO, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decreto',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '2745',
      fecha: '01.10.14',
      publicacion: '06.11.2014, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA PARCIALMENTE ENTREGA DE INFORMACIÓN SOLICITADA PARCIAL POR DON ÁLVARO INOSTROZA ALXES, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decreto',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '2426',
      fecha: '29.08.14',
      publicacion: '06.09.2014, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA PARCIALMENTE ENTREGA DE INFORMACIÓN SOLICITADA PARCIAL POR DON ÓSCAR MELO PLAZA, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decreto',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega parcialmente información artículo 21, numeral 1, letra c)',
      numero: '1584',
      fecha: '18.06.14',
      publicacion: '06.07.2014, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA PARCIALMENTE ENTREGA DE INFORMACIÓN SOLICITADA PARCIAL POR DOÑA ELIZABETH LABRA CONCHA, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA E), DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decreto',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 1, letra c)',
      numero: '1251',
      fecha: '09.05.14',
      publicacion: '06.06.2014, Página Web',
      efectos: 'No',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA DE INFORMACIÓN SOLICITADA POR DOÑA CARMEN LUISA SILVA DREYER, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21, NUMERAL 1, LETRA C), DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
    {
      tipo: 'Decreto',
      denominacion: 'Secreto o Reservado',
      nombre: 'Deniega información artículo 21, numeral 2',
      numero: '1124',
      fecha: '23.04.14',
      publicacion: '06.05.2014, Página Web',
      efectos: 'Sí',
      actualizacion: sinModificaciones,
      descripcion: 'DENIEGA ENTREGA DE INFORMACIÓN SOLICITADA POR DON CARLOS ARELLANO MÁRQUEZ, POR CONCURRIR CAUSAL DE SECRETO O RESERVA DEL ARTÍCULO 21 N° 2 DE LA LEY DE TRANSPARENCIA.',
      documentoUrl: '',
      modificaciones: sinModificaciones,
    },
  ],
};

const anios = ['2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009'];
const encabezados = [
  'Tipo de norma',
  'Denominación (tipologías)',
  'Nombre/título',
  'Número',
  'Fecha (dd/mm/aaaa)',
  'Fecha, medio y forma de publicación',
  'Tiene efectos generales',
  'Fecha última actualización',
  'Breve descripción del objeto del acto',
  'Enlace a la publicación o archivo correspondiente',
  'Enlace relacionado a la Modificación',
];
const reglamentoInternoPdf = '';

function PdfButton({ url, label }: { url: string; label: string }) {
  return (
    <a
      href={url || 'about:blank'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[10px] font-medium text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
    >
      <FileText className="h-3 w-3 text-red-600" aria-hidden="true" />
      Ver PDF
    </a>
  );
}

export default function AccesoInformacionPublica({ categoria, onVolver }: AccesoInformacionPublicaProps) {
  const [anioSeleccionado, setAnioSeleccionado] = useState('2016');
  const [busqueda, setBusqueda] = useState('');
  const [mostrarIndice, setMostrarIndice] = useState(false);
  const [apartadoPendiente, setApartadoPendiente] = useState<string | null>(null);
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const registrosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase('es');
    return (documentosPorAnio[anioSeleccionado] ?? []).filter((documento) =>
      Object.values(documento).join(' ').toLocaleLowerCase('es').includes(termino),
    );
  }, [anioSeleccionado, busqueda]);

  if (!mostrarIndice) {
    return (
      <div className="content-box-wide space-y-6">
        {!mostrarCarta && (
          <>
            <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
          <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
            Transparencia Activa
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-700">Antecedentes y sitios relacionados</span>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-700">{categoria.categoria}</span>
        </nav>
        <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Transparencia y acceso</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">{categoria.categoria}</h2>
          <p className="mt-2 text-sm text-slate-600">Selecciona el apartado que deseas consultar.</p>
        </header>
        <section aria-label="Apartados de acceso a información pública" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categoria.enlaces.map((enlace) => (
            <button
              key={enlace.texto}
              type="button"
              onClick={() => {
                if (enlace.texto === 'Índice de Documentos Reservados') {
                  setMostrarIndice(true);
                  setApartadoPendiente(null);
                } else if (enlace.texto === 'Carta de Derechos Ciudadanos') {
                  setMostrarCarta(true);
                  setApartadoPendiente(null);
                } else if (enlace.texto === 'Reglamento Interno de Transparencia') {
                  setApartadoPendiente(null);
                  window.open(reglamentoInternoPdf || 'about:blank', '_blank', 'noopener,noreferrer');
                } else if (enlace.url !== '#') {
                  window.open(enlace.url, '_blank', 'noopener,noreferrer');
                } else {
                  setApartadoPendiente(enlace.texto);
                }
              }}
              className="group flex min-h-28 cursor-pointer items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <span className="font-semibold text-slate-800 group-hover:text-blue-800">{enlace.texto}</span>
              <FileText className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            </button>
          ))}
        </section>
        {apartadoPendiente && (
          <section aria-live="polite" className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <h3 className="font-semibold text-slate-900">{apartadoPendiente}</h3>
            <p className="mt-2 text-sm text-slate-700">El contenido de este apartado se agregará próximamente.</p>
          </section>
        )}
        <div className="border-t border-slate-200 pt-4">
          <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a Transparencia Activa
          </button>
        </div>
          </>
        )}
        {mostrarCarta && (
          <section aria-labelledby="carta-derechos-titulo" className="space-y-5">
            <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
              <button type="button" onClick={() => setMostrarCarta(false)} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
                Acceso a Información Pública
              </button>
              <span className="text-slate-400">&gt;</span>
              <span className="text-slate-700">Carta de Derechos Ciudadanos</span>
            </nav>
            <header className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Acceso a la información pública</p>
              <h3 id="carta-derechos-titulo" className="mt-2 text-2xl font-bold text-slate-900">Carta de Derechos Ciudadanos</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                La Municipalidad de Lo Prado da a conocer los canales y procedimientos de atención para que las personas puedan solicitar información pública, de acuerdo con la Ley N° 20.285.
              </p>
            </header>

            <div className="grid gap-4 lg:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-blue-800">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <h4 className="font-semibold">Atención presencial</h4>
                </div>
                <dl className="mt-4 space-y-3 text-sm text-slate-700">
                  <div><dt className="font-medium text-slate-900">Dirección</dt><dd>San Pablo 5959, Lo Prado</dd></div>
                  <div className="flex gap-2">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                    <div><dt className="font-medium text-slate-900">Horario de atención</dt><dd>08:30 a 14:00 (mañana)<br />15:00 a 17:00 (tarde)</dd></div>
                  </div>
                  <div><dt className="font-medium text-slate-900">Unidad responsable</dt><dd>Oficina de Partes</dd></div>
                  <div><dt className="font-medium text-slate-900">Funcionario responsable</dt><dd>Julio Funke</dd></div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                    <a className="text-blue-700 hover:underline" href="mailto:jfunke@loprado.cl">jfunke@loprado.cl</a>
                  </div>
                </dl>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-blue-800">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <h4 className="font-semibold">Solicitud por correo postal</h4>
                </div>
                <dl className="mt-4 space-y-3 text-sm text-slate-700">
                  <div><dt className="font-medium text-slate-900">Dirigida a</dt><dd>Oficina de Partes</dd></div>
                  <div><dt className="font-medium text-slate-900">Funcionario responsable</dt><dd>Julio Funke</dd></div>
                  <div><dt className="font-medium text-slate-900">Dirección</dt><dd>San Pablo 5959, Lo Prado</dd></div>
                </dl>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-blue-800">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <h4 className="font-semibold">Solicitud por Internet</h4>
                </div>
                <dl className="mt-4 space-y-3 text-sm text-slate-700">
                  <div><dt className="font-medium text-slate-900">Dirigida a</dt><dd>Transparencia Municipal</dd></div>
                  <div><dt className="font-medium text-slate-900">Unidad responsable</dt><dd>Secretaría Municipal - Oficina de Transparencia Municipal</dd></div>
                  <div><dt className="font-medium text-slate-900">Funcionarias responsables</dt><dd>Carmen Gorroño Velasco y Jessica Cruzat Carriel</dd></div>
                  <div><dt className="font-medium text-slate-900">Dirección</dt><dd>San Pablo 5959, Lo Prado</dd></div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                    <a className="text-blue-700 hover:underline" href="mailto:transparencia@loprado.cl">transparencia@loprado.cl</a>
                  </div>
                </dl>
              </article>
            </div>

            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                  <h4 className="font-semibold text-slate-900">Información importante</h4>
                  <p>
                    En el sitio web municipal, en la sección Transparencia Municipal, se encuentra información sobre normativa, estructura orgánica, actos y resoluciones, personal y remuneraciones, presupuesto, compras, licitaciones, trámites, participación ciudadana y transferencias.
                  </p>
                  <p>
                    Si no encuentra la información que busca, puede solicitarla mediante el{' '}
                    <a
                      href="https://www.portaltransparencia.cl/PortalPdT/descargar-formulario-de-solicitud-de-informacion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                    >
                      formulario de solicitud de información
                    </a>
                    . Para otras consultas sobre transparencia, escriba a{' '}
                    <a className="font-medium text-blue-700 hover:underline" href="mailto:transparencia@loprado.cl">transparencia@loprado.cl</a>.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="carta-procedimiento-titulo" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h4 id="carta-procedimiento-titulo" className="text-lg font-bold text-slate-900">Procedimiento de solicitud de información</h4>
              <p className="mt-2 text-sm text-slate-600">La respuesta a una solicitud de información pública considera las siguientes etapas:</p>
              <ol className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  ['1. Presentación y recepción', 'Ingreso de la solicitud de acceso a la información y recepción por parte de la Municipalidad.'],
                  ['2. Análisis formal', 'Verificación de la competencia municipal, revisión de los requisitos, eventual subsanación y búsqueda de la información. Si corresponde, se determina la notificación y oposición de terceros afectados.'],
                  ['3. Resolución', 'Revisión de los antecedentes y preparación y firma del acto administrativo de respuesta por la Municipalidad.'],
                  ['4. Cumplimiento', 'Cuando corresponda, cobro de los costos directos de reproducción y entrega de la información, con su certificación.'],
                ].map(([etapa, detalle]) => (
                  <li key={etapa} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                    <h5 className="font-semibold text-slate-900">{etapa}</h5>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{detalle}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
                <p>
                  El plazo de respuesta es de 20 días hábiles. Excepcionalmente, puede prorrogarse por hasta 10 días hábiles adicionales cuando existan circunstancias que dificulten reunir la información. La Municipalidad debe comunicar la prórroga antes del vencimiento del plazo inicial, indicando sus motivos.
                </p>
                <p className="mt-3">
                  Solo se exigirá acreditar la representación cuando se solicite información personal protegida en nombre de otra persona. El poder debe constar en escritura pública o en un documento privado autorizado ante notario.
                </p>
              </div>
            </section>

            <div className="border-t border-slate-200 pt-4">
              <button type="button" onClick={() => setMostrarCarta(false)} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver a Acceso a Información Pública
              </button>
            </div>
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={() => setMostrarIndice(false)} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Acceso a Información Pública
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Antecedentes y sitios relacionados</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">{categoria.categoria}</span>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Índice de Documentos Reservados</span>
      </nav>

      <header className="flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 shadow-sm sm:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Acceso a la información pública</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Índice de Documentos Reservados</h2>
          <p className="mt-2 text-sm text-slate-600">Actos y resoluciones con efecto reservado o secreto.</p>
        </div>
        <label className="w-full text-xs font-medium text-slate-600 sm:w-48">
          Seleccione año
          <select
            value={anioSeleccionado}
            onChange={(event) => setAnioSeleccionado(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
          >
            {anios.map((anio) => <option key={anio} value={anio}>{anio}</option>)}
          </select>
        </label>
      </header>

      <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xs focus-within:border-blue-300">
        <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
        <span className="sr-only">Buscar documentos reservados</span>
        <input
          type="search"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          placeholder="Buscar por número, descripción o tipo de norma..."
          className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </label>

      <section aria-label={`Documentos reservados del año ${anioSeleccionado}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {registrosFiltrados.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1500px] table-fixed border-collapse text-left text-xs lg:min-w-0">
              <colgroup>
                <col className="w-[7%]" />
                <col className="w-[8%]" />
                <col className="w-[9%]" />
                <col className="w-[5%]" />
                <col className="w-[7%]" />
                <col className="w-[9%]" />
                <col className="w-[6%]" />
                <col className="w-[10%]" />
                <col className="w-[20%]" />
                <col className="w-[10%]" />
                <col className="w-[9%]" />
              </colgroup>
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  {encabezados.map((encabezado) => (
                    <th key={encabezado} scope="col" className="border-b border-slate-200 px-2 py-3 text-center font-semibold">{encabezado}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {registrosFiltrados.map((documento) => (
                  <tr key={documento.numero} className="even:bg-slate-50/70">
                    <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{documento.tipo}</td>
                    <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{documento.denominacion}</td>
                    <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{documento.nombre}</td>
                    <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{documento.numero}</td>
                    <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{documento.fecha}</td>
                    <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{documento.publicacion}</td>
                    <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{documento.efectos}</td>
                    <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{documento.actualizacion}</td>
                    <td className="border-b border-slate-100 px-2 py-3 align-top text-slate-700">{documento.descripcion}</td>
                    <td className="border-b border-slate-100 px-2 py-3 text-center align-top">
                      <PdfButton url={documento.documentoUrl} label={`Ver documento reservado ${documento.numero}, ${anioSeleccionado}`} />
                    </td>
                    <td className="border-b border-slate-100 px-2 py-3 text-center align-top text-slate-600">{documento.modificaciones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center px-6 py-12 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <FileText className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-semibold text-slate-900">
              {busqueda.trim() ? 'No se encontraron coincidencias' : `No hay datos para ${anioSeleccionado}`}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {busqueda.trim()
                ? 'Prueba con otro término de búsqueda.'
                : 'No hay documentos reservados registrados para este año.'}
            </p>
          </div>
        )}
      </section>

      <div className="border-t border-slate-200 pt-4">
        <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-300">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Acceso a Información Pública
        </button>
      </div>
    </div>
  );
}
