export interface SeccionTransparencia {
  id: string;
  numero: string;
  titulo: string;
  enlaces: { texto: string; url: string }[];
}

export const seccionesHistoricas: SeccionTransparencia[] = [
  {
    id: "01",
    numero: "01",
    titulo: "Actos y documentos publicados en Diario Oficial",
    enlaces: [{ texto: "Actos y Documentos Publicados en el Diario Oficial", url: "#" }]
  },
  {
    id: "02",
    numero: "02",
    titulo: "Potestades y Marco Normativo",
    enlaces: [
      { texto: "Marco Normativo Aplicable", url: "#" },
      { texto: "Potestades, Competencias, Responsabilidades, Funciones y/o Tareas", url: "#" }
    ]
  },
  {
    id: "03",
    numero: "03",
    titulo: "Estructura orgánica y facultades, funciones y atribuciones",
    enlaces: [
      { texto: "Diagrama de la estructura orgánica", url: "#" },
      { texto: "Facultades, Funciones y Atribuciones de sus Unidades u Órganos Internos", url: "#" }
    ]
  },
  {
    id: "04",
    numero: "04",
    titulo: "Personal y remuneraciones",
    enlaces: [
      { texto: "Declaración de patrimonio e intereses", url: "#" },
      { texto: "Dotación de planta", url: "#" },
      { texto: "Dotación a contrata", url: "#" },
      { texto: "Otros contratos sujetos al Código del Trabajo", url: "#" },
      { texto: "Dotación a honorarios municipal", url: "#" },
      { texto: "Dotación a honorarios programas", url: "#" },
      { texto: "Escala de Remuneraciones", url: "#" },
      { texto: "Autoridades del Concejo Municipal", url: "#" },
      { texto: "Listado Funcionarios", url: "#" }
    ]
  },
  {
    id: "05",
    numero: "05",
    titulo: "Compras y Adquisiciones",
    enlaces: [
      { texto: "Compras y Adquisiciones", url: "#" },
      { texto: "Otras Compras y Adquisiciones", url: "#" },
      { texto: "Contratos Bienes Inmuebles", url: "#" }
    ]
  },
  {
    id: "06",
    numero: "06",
    titulo: "Transferencias de Fondos Públicos",
    enlaces: [
      { texto: "Transferencias reguladas Ley 19.882", url: "#" },
      { texto: "Otras Transferencias", url: "#" }
    ]
  },
  {
    id: "07",
    numero: "07",
    titulo: "Actos y Resoluciones con efectos sobre terceros",
    enlaces: [{ texto: "Actos y Resoluciones", url: "#" }]
  },
  {
    id: "08",
    numero: "08",
    titulo: "Trámites ante el organismo",
    enlaces: [
      { texto: "Trámites", url: "#" },
      { texto: "Otros Trámites", url: "#" },
      { texto: "Chile Atiende", url: "#" }
    ]
  },
  {
    id: "09",
    numero: "09",
    titulo: "Subsidios y Beneficios",
    enlaces: [
      { texto: "Subsidios y Beneficios Propios", url: "#" },
      { texto: "Subsidios y Beneficios como Intermediario", url: "#" },
      { texto: "Nómina de Beneficiarios de Programas de Subsidios y Beneficios", url: "#" }
    ]
  },
  {
    id: "10",
    numero: "10",
    titulo: "Participación Ciudadana",
    enlaces: [
      { texto: "Norma general de participación ciudadana", url: "#" },
      { texto: "Mecanismos de Participación Ciudadana", url: "#" },
      { texto: "Consejo Comunal de Organizaciones de la Sociedad Civil", url: "#" },
      { texto: "Organizaciones Sociales Territoriales y Funcionales", url: "#" },
      { texto: "Comisión Defensora Ciudadana", url: "#" }
    ]
  },
  {
    id: "11",
    numero: "11",
    titulo: "Presupuesto asignado y su ejecución",
    enlaces: [
      { texto: "Presupuestos asignados y modificaciones", url: "#" },
      { texto: "Presupuesto Aprobado por el concejo", url: "#" },
      { texto: "Balance de la ejecución presupuestaria", url: "#" },
      { texto: "Estado de situación Financiera", url: "#" },
      { texto: "Presupuestos de Pasivos", url: "#" }
    ]
  },
  {
    id: "12",
    numero: "12",
    titulo: "Auditorías al ejercicio presupuestario y aclaraciones",
    enlaces: [{ texto: "Auditorías", url: "#" }]
  },
  {
    id: "13",
    numero: "13",
    titulo: "Participación en otras entidades",
    enlaces: [{ texto: "Participación, representación e intervención", url: "#" }]
  },
  {
    id: "14",
    numero: "14",
    titulo: "Antecedentes preparatorios de normas jurídicas",
    enlaces: [{ texto: "Índice de Antecedentes preparatorios", url: "#" }]
  }
];

export const antecedentesAdicionales = [
  {
    id: "ley-20730",
    categoria: "Ley 20.730",
    enlaces: [
      { texto: "Regula el Lobby y las Gestiones que Representen Intereses Particulares Ante las Autoridades y Funcionarios", url: "#" },
      { texto: "Ley 20.730", url: "#" }
    ]
  },
  {
    id: "acceso-info",
    categoria: "Acceso a Información Pública",
    enlaces: [
      { texto: "Índice de Documentos Reservados", url: "#" },
      { texto: "Solicitud de Información", url: "#" },
      { texto: "Carta de Derechos Ciudadanos", url: "#" },
      { texto: "Reglamento Interno de Transparencia", url: "#" },
      { texto: "Normas de la Ley sobre Acceso a la Información Pública", url: "#" },
      { texto: "Tutoriales Derecho de Acceso", url: "#" }
    ]
  },
  {
    id: "costos-reproduccion",
    categoria: "Costos Directos de Reproducción",
    enlaces: [
      { texto: "Costos de Reproducción", url: "#" }
    ]
  },
  {
    id: "sitios-relacionados",
    categoria: "Otros Sitios Relacionados",
    enlaces: [
      { texto: "SINIM", url: "#" },
      { texto: "Instituto Nacional de Estadística", url: "#" },
      { texto: "Registro Social", url: "#" },
      { texto: "Observatorio Social", url: "#" },
      { texto: "Observatorio Urbano", url: "#" },
      { texto: "Biblioteca Congreso Reportes Estadístico", url: "#" },
      { texto: "Corporación de Asistencia Judicial", url: "#" },
      { texto: "Contraloría General de la República", url: "#" }
    ]
  }
];