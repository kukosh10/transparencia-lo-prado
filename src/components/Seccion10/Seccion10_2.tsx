import { ArrowLeft, ChevronDown, ExternalLink, Users } from 'lucide-react';

interface Seccion10_2Props {
  onVolver: () => void;
  onVolverSeccion: () => void;
  onAbrirConsejoConsultivo: () => void;
  onAbrirSecretariaMunicipal: () => void;
  onAbrirOrdenanza: () => void;
}

type DestinoInformacion = 'ordenanza' | 'secretaria' | 'normas';

interface MecanismoParticipacion {
  nombre: string;
  resumen: string;
  descripcion: string;
  tieneConsejo: boolean;
  requisitos: string;
  proposito: string;
  participantes: string;
  destino: DestinoInformacion;
}

const enlaceNormas = 'http://www.gobiernotransparente.cl/asistente/normas.php';

const mecanismos: readonly MecanismoParticipacion[] = [
  {
    nombre: 'Consejo Comunal de Organizaciones de la Sociedad Civil',
    resumen: 'Participación de organizaciones comunitarias en la gestión municipal.',
    descripcion: 'El Consejo Comunal de Organizaciones de la Sociedad Civil, en adelante también el Consejo, es un órgano de participación ciudadana en la gestión municipal. La integración, organización, competencias y funcionamiento del Consejo se regirá por las normas contenidas en un Reglamento que se dictará para dichos efectos y en la Ley 18.695.',
    tieneConsejo: true,
    requisitos: 'El Consejo está compuesto por consejeros, los cuales al momento de las elecciones deben cumplir con los siguientes requisitos: a) Tener 18 años de edad, con excepción de los representantes de organizaciones juveniles señaladas en la Ley 19.418, sobre juntas de vecinos y demás organizaciones comunitarias. b) Tener un año de afiliación a la organización correspondiente, salvo que ella tenga una vigencia inferior. c) Ser chileno o extranjero avecindado en el país. d) No haber sido condenado por delito que merezca pena aflictiva (por crimen o simple delito). e) Tener la calidad de representante de la organización a la que pertenece.',
    proposito: 'Asegurar la participación de las organizaciones comunitarias de carácter territorial y funcional y que sean de interés público, apoyando además las actividades que sean relevantes en el proceso económico, social y cultural. Asimismo le corresponde pronunciarse sobre la Cuenta Pública Anual y participar consultivamente en el quehacer del Municipio en los temas del ámbito de competencia en que se solicite su opinión.',
    participantes: 'Representantes de organizaciones de la Sociedad Civil sin fines de lucro vinculados al ámbito de competencia municipal.',
    destino: 'ordenanza'
  },
  {
    nombre: 'Oficina de Partes e Informaciones',
    resumen: 'Recepción y envío de presentaciones y reclamos de la comunidad.',
    descripcion: 'Unidad municipal, dependiente de Secretaría Municipal encargada de recibir y enviar a las unidades correspondientes las presentaciones y reclamos de la comunidad.',
    tieneConsejo: false,
    requisitos: 'Las observaciones o presentaciones deberán hacerse por escrito en la respectiva oficina de partes del municipio.',
    proposito: 'El objeto consiste en la habilitación de un canal que permita mantener activa la opinión ciudadana respecto del desempeño de las unidades municipales y otras opiniones que el usuario requiera manifestar formalmente.',
    participantes: 'Toda presentación debe realizarse por escrito en la oficina de OIRS, a nombre del peticionario o su representante acreditado según documento simple, donde debe consignarse nombre, domicilio y teléfono de contacto. Además se debe adjuntar los antecedentes que fundamenten el requerimiento.',
    destino: 'secretaria'
  },
  {
    nombre: 'Información Pública Relevante',
    resumen: 'Acceso a información municipal para facilitar la transparencia y el control ciudadano.',
    descripcion: 'El Municipio tiene disponible al público toda la información relevante acerca de sus planes, políticas, programas, acciones y presupuestos, a través de su portal y banner de Transparencia Activa. En ambos casos la ciudadanía participa del control de la gestión ejerciendo su derecho a la información, mediante los canales y herramientas que están publicados en el sitio institucional de Lo Prado.',
    tieneConsejo: true,
    requisitos: 'Llenar formulario de solicitud de información que aparece en banner de Transparencia Municipal, o en su defecto realizar el mismo procedimiento en forma presencial.',
    proposito: 'Dar cumplimiento a la Ley 20.285, sus reglamentos e instrucciones y entregar información relevante a la ciudadanía sobre los ámbitos de acción de la Municipalidad respetando los criterios de calidad de la atención y oportunidad. Se puede realizar de forma presencial o mediante el formulario de solicitud de información que aparece en banner de Transparencia Municipal, o en su defecto realizar el mismo procedimiento en forma presencial.',
    participantes: 'Ciudadanía en general.',
    destino: 'normas'
  },
  {
    nombre: 'Fondo de Desarrollo Vecinal',
    resumen: 'Apoyo a iniciativas de las Juntas de Vecinos mediante el FONDEVE.',
    descripcion: 'El Fondo de Desarrollo Vecinal está contenido en la Ley 19.418 que contempla la creación de este fondo en beneficio de las Juntas de Vecinos. Al respecto el fondo lo componen aportes originados en el Presupuesto anual del municipio, además de aquellos provenientes de la Ley de Presupuesto de la Nación y aquellos recursos de los propios vecinos de la comuna.',
    tieneConsejo: false,
    requisitos: 'El FONDEVE financia solo iniciativas de las Juntas de Vecinos.',
    proposito: 'El FONDEVE financia solo iniciativas de las Juntas de Vecinos.',
    participantes: 'Posee objetivo único: Contribuir al Desarrollo Comunitario.',
    destino: 'ordenanza'
  },
  {
    nombre: 'Cuentas Públicas',
    resumen: 'Rendición anual de la gestión, los programas y el presupuesto municipal.',
    descripcion: 'Las Cuentas Públicas rendidas anualmente por el Alcalde dan cuenta directa a la ciudadanía de la gestión de las políticas, planes, programas, acciones y de la ejecución presupuestaria. En esta participan los integrantes del Concejo Comunal, las organizaciones/instituciones comunales, representantes de la Sociedad Civil, autoridades públicas y privadas, ciudadanos y ciudadanas de la comuna de Lo Prado.',
    tieneConsejo: false,
    requisitos: 'Para participar de este acto solemne se requiere de una invitación del Alcalde y/o concejales, bastando, sin perjuicio de lo cual pueden asistir todos los dirigentes locales, pero de manera especial el Consejo de la Sociedad Civil que forma parte de la estructura orgánica del municipio.',
    proposito: 'Informar a la ciudadanía sobre la gestión realizada y recoger opiniones, comentarios y sugerencias sobre la misma promoviendo el control del principio de rendición de cuentas.',
    participantes: 'Representantes de las organizaciones de la sociedad civil y ciudadanía en general.',
    destino: 'ordenanza'
  },
  {
    nombre: 'Encuestas',
    resumen: 'Consulta las percepciones y propuestas de la comunidad sobre la gestión municipal.',
    descripcion: 'Tienen por objeto explorar las percepciones y proposiciones evaluativas de la comunidad hacia la gestión municipal.',
    tieneConsejo: false,
    requisitos: 'No se registra requisitos.',
    proposito: 'Acercar el Municipio a los requerimientos de la comunidad organizada y ciudadanía en general.',
    participantes: 'Ciudadanía en general, Juntas de Vecinos y demás Organizaciones Comunitarias Territoriales y Funcionales, Asociaciones y Comunidades Indígenas.',
    destino: 'ordenanza'
  }
];

export default function Seccion10_2({
  onVolver,
  onVolverSeccion,
  onAbrirConsejoConsultivo,
  onAbrirSecretariaMunicipal,
  onAbrirOrdenanza
}: Seccion10_2Props) {
  const abrirInformacion = (destino: DestinoInformacion) => {
    if (destino === 'secretaria') {
      onAbrirSecretariaMunicipal();
    } else if (destino === 'normas') {
      window.open(enlaceNormas, '_blank', 'noopener,noreferrer');
    } else {
      onAbrirOrdenanza();
    }
  };

  return (
    <div className="content-box-wide space-y-4 pt-2">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-700">
        <button type="button" onClick={onVolverSeccion} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button type="button" onClick={onVolver} className="cursor-pointer border-none bg-transparent p-0 text-blue-700 hover:underline">
          Participación Ciudadana
        </button>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-700">Mecanismos de Participación Ciudadana</span>
      </nav>

      <header className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Participación ciudadana</p>
          <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900">Mecanismos de participación</h2>
        </div>
        <span className="text-xs text-slate-500">{mecanismos.length} mecanismos</span>
      </header>

      <section aria-label="Mecanismos de participación ciudadana" className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {mecanismos.map((mecanismo, index) => (
          <article
            key={mecanismo.nombre}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Users className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold leading-snug text-slate-900">{mecanismo.nombre}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{mecanismo.resumen}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                mecanismo.tieneConsejo
                  ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                  : 'bg-slate-100 text-slate-600 ring-1 ring-slate-200'
              }`}>
                Consejo consultivo: {mecanismo.tieneConsejo ? 'Sí' : 'No'}
              </span>
              {mecanismo.tieneConsejo && (
                <button
                  type="button"
                  onClick={onAbrirConsejoConsultivo}
                  className="text-[11px] font-semibold text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-900"
                >
                  Ver consejo
                </button>
              )}
            </div>

            <details className="group mt-3 border-t border-slate-100 pt-2.5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-semibold text-slate-600 hover:text-blue-700 [&::-webkit-details-marker]:hidden">
                <span>Descripción y requisitos</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="mt-3 space-y-3 text-xs leading-relaxed text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-800">Descripción</h4>
                  <p className="mt-1">{mecanismo.descripcion}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Requisitos</h4>
                  <p className="mt-1">{mecanismo.requisitos}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Propósito</h4>
                  <p className="mt-1">{mecanismo.proposito}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Participantes</h4>
                  <p className="mt-1">{mecanismo.participantes}</p>
                </div>
              </div>
            </details>

            <button
              type="button"
              onClick={() => abrirInformacion(mecanismo.destino)}
              className="mt-auto inline-flex items-center gap-1.5 pt-3 text-left text-xs font-semibold text-blue-700 hover:text-blue-900"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              {mecanismo.destino === 'secretaria'
                ? 'Trámites de Secretaría Municipal'
                : mecanismo.destino === 'normas'
                  ? 'Consultar normativa'
                  : 'Ordenanza de Participación Ciudadana'}
              <span className="sr-only"> (mecanismo {index + 1})</span>
            </button>
          </article>
        ))}
      </section>

      <div className="border-t border-slate-200 pt-3">
        <button type="button" onClick={onVolver} className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a Participación Ciudadana
        </button>
      </div>
    </div>
  );
}
