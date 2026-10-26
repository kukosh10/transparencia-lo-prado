import { useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowLeft, ChevronRight, FileText } from 'lucide-react';

interface Seccion8TramSecreMuniProps {
  onVolver: () => void;
  onVolverSeccion: () => void;
}

const tramitesSecretariaMunicipal = [
  'Solicitud de la Información Web',
  'Solicitud de Audiencia Ley Lobby',
  'Solicitud de Personalidad Jurídica de las Organizaciones Comunitarias Territoriales y Funcionales',
  'Solicitud de Registro de Cambio Directiva',
  'Certificado de vigencia personalidad jurídica',
  'Modificación de Estatutos',
  'Solicitud de Subvención Municipal',
  'Certificado de Rendición al Día'
];

const enlacesTransparencia = {
  ley: 'https://www.bcn.cl/leychile/navegar?idNorma=276363',
  pasiva: 'https://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=843d1e781199d1b594ffd7c79c22d339',
  ordenanza: '',
  activa: 'http://transparencia.loprado.cl/',
  leyLobby: 'https://www.bcn.cl/leychile/navegar?idNorma=1060115',
  plataformaLobby: 'https://www.leylobby.gob.cl/instituciones/MU146',
  solicitudAudiencia: 'https://www.leylobby.gob.cl/admin/auth/prelogin?redirect=https://www.leylobby.gob.cl/solicitud/audiencia/554',
  manualPersonalidadJuridica: '',
  transferencias: 'https://registros19862.gob.cl/institucion/69254100/transferencias'
};

const enlaceManualCambioDirectiva = '';
const enlaceManualModificacionEstatutos = '';
const enlacesSubvencionMunicipal = ['', '', ''];

const EnlaceExterno = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href || 'about:blank'}
    target="_blank"
    rel="noreferrer"
    className="font-medium text-purple-700 underline decoration-purple-300 underline-offset-2 hover:text-purple-900"
  >
    {children}
  </a>
);

export default function Seccion8TramSecreMuni({
  onVolver,
  onVolverSeccion
}: Seccion8TramSecreMuniProps) {
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState<string | null>(null);
  const esSolicitudInformacion = tramiteSeleccionado === 'Solicitud de la Información Web';
  const esSolicitudAudienciaLobby = tramiteSeleccionado === 'Solicitud de Audiencia Ley Lobby';
  const esSolicitudPersonalidadJuridica =
    tramiteSeleccionado === 'Solicitud de Personalidad Jurídica de las Organizaciones Comunitarias Territoriales y Funcionales';
  const esSolicitudCambioDirectiva = tramiteSeleccionado === 'Solicitud de Registro de Cambio Directiva';
  const esCertificadoVigencia = tramiteSeleccionado === 'Certificado de vigencia personalidad jurídica';
  const esModificacionEstatutos = tramiteSeleccionado === 'Modificación de Estatutos';
  const esSolicitudSubvencion = tramiteSeleccionado === 'Solicitud de Subvención Municipal';
  const esCertificadoRendicion = tramiteSeleccionado === 'Certificado de Rendición al Día';

  return (
    <div className="content-box-wide space-y-6 pt-2">
      <div className="text-xs font-medium text-blue-700 flex items-center gap-2 flex-wrap">
        <button
          onClick={onVolverSeccion}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Transparencia Activa
        </button>
        <span className="text-slate-400">&gt;</span>
        <button
          onClick={onVolver}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Trámites
        </button>
        <span className="text-slate-400">&gt;</span>
        <button
          onClick={() => setTramiteSeleccionado(null)}
          className="hover:underline bg-transparent border-none p-0 cursor-pointer text-blue-700"
        >
          Secretaría Municipal
        </button>
        {tramiteSeleccionado && (
          <>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-700">
              {esSolicitudInformacion
                ? 'Solicitud de Información / Transparencia Pasiva'
                : esSolicitudAudienciaLobby
                  ? 'Audiencias Ley Lobby'
                  : esSolicitudPersonalidadJuridica
                    ? 'Solicitud de Personalidad Jurídica de las Organizaciones Comunitarias Territoriales y Funcionales'
                    : esSolicitudCambioDirectiva
                      ? 'Solicitud de Registro de Cambio Directiva'
                      : esCertificadoVigencia
                        ? 'Certificado de vigencia personalidad jurídica'
                        : esModificacionEstatutos
                          ? 'Modificación de Estatutos'
                          : esSolicitudSubvencion
                            ? 'Solicitud de Subvención Municipal'
                            : esCertificadoRendicion
                              ? 'Certificado de Rendición al Día'
                  : tramiteSeleccionado}
            </span>
          </>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900">
          {esSolicitudInformacion
            ? 'Solicitud de Información / Transparencia Pasiva'
            : esSolicitudAudienciaLobby
              ? 'Audiencias Ley Lobby'
              : esSolicitudPersonalidadJuridica
                ? 'Solicitud de Personalidad Jurídica de las Organizaciones Comunitarias Territoriales y Funcionales'
                : esSolicitudCambioDirectiva
                  ? 'Solicitud de Registro de Cambio Directiva'
                  : esCertificadoVigencia
                    ? 'Certificado de vigencia personalidad jurídica'
                    : esModificacionEstatutos
                      ? 'Modificación de Estatutos'
                      : esSolicitudSubvencion
                        ? 'Solicitud de Subvención Municipal'
                        : esCertificadoRendicion
                          ? 'Certificado de Rendición al Día'
              : tramiteSeleccionado ?? 'Secretaría Municipal'}
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          {tramiteSeleccionado
            ? esSolicitudInformacion
              ? 'Información del trámite de acceso a la información pública'
              : esSolicitudAudienciaLobby
                ? 'Información del trámite de audiencia de Ley Lobby'
                : esSolicitudPersonalidadJuridica
                  ? 'Información del trámite de personalidad jurídica de organizaciones comunitarias'
                  : esSolicitudCambioDirectiva
                    ? 'Información para registrar el cambio de directiva de una organización'
                    : esCertificadoVigencia
                      ? 'Información para solicitar el certificado de vigencia de personalidad jurídica'
                      : esModificacionEstatutos
                        ? 'Información para solicitar la modificación de estatutos de una organización'
                        : esSolicitudSubvencion
                          ? 'Información para solicitar subvenciones para el desarrollo de una organización'
                          : esCertificadoRendicion
                            ? 'Información para solicitar el certificado de rendición al día de subvenciones municipales'
              : 'La información de este trámite estará disponible próximamente.'
            : 'Trámites disponibles en Secretaría Municipal'}
        </p>
      </div>

      {esCertificadoRendicion ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Secretaría Municipal</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite o Servicio</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{tramiteSeleccionado}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">En qué consiste</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Certifica que la institución tenga al día las rendiciones de subvenciones municipales.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Requisitos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Se solicita en forma presencial.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Documentos requeridos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">RUT de la institución.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">A quién está dirigido</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Dirección de Control Municipal.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite a realizar y/o etapas</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Se solicita en forma presencial y se entrega en un plazo de tres días hábiles.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Dónde se realiza?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal, San Pablo 5959, primer piso.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Tiene costo</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Este trámite está disponible en línea?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li><EnlaceExterno href={enlacesTransparencia.activa}>Transparencia Activa</EnlaceExterno></li>
                  <li><EnlaceExterno href={enlacesSubvencionMunicipal[0]}>Regular el procedimiento para el otorgamiento de transferencias o subvenciones que la municipalidad pueda entregar para fines específicos, a personas jurídicas de carácter público o privado sin fines de lucro que colaboren directamente en el cumplimiento de sus funciones.</EnlaceExterno></li>
                  <li><EnlaceExterno href={enlacesSubvencionMunicipal[1]}>Primera Modificación “Regular el procedimiento para el otorgamiento de transferencias o subvenciones que la municipalidad pueda entregar para fines específicos, a personas jurídicas de carácter público o privado sin fines de lucro que colaboren directamente en el cumplimiento de sus funciones”.</EnlaceExterno></li>
                  <li><EnlaceExterno href={enlacesSubvencionMunicipal[2]}>Segunda Modificación “Regular el procedimiento para el otorgamiento de transferencias o subvenciones que la municipalidad pueda entregar para fines específicos, a personas jurídicas de carácter público o privado sin fines de lucro que colaboren directamente en el cumplimiento de sus funciones”.</EnlaceExterno></li>
                  <li><EnlaceExterno href={enlacesTransparencia.transferencias}>Transferencia regulada Ley N° 19.862</EnlaceExterno></li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>
      ) : esSolicitudSubvencion ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Secretaría Municipal</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite o Servicio</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{tramiteSeleccionado}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">En qué consiste</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Se solicita subvenciones para el desarrollo de la organización.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Requisitos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Tener personalidad jurídica vigente en la comuna y contar con directiva vigente.</li>
                  <li>No tener rendiciones pendientes (subvenciones, fondos o aportes municipales).</li>
                  <li>Presentar formulario especialmente elaborado para el proyecto de subvención.</li>
                </ul>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Documentos requeridos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                Formulario en el cual está elaborado el proyecto de subvención, que debe ser enviado al Sr. Alcalde y al Honorable Concejo Municipal. Debe contener el nombre y las firmas de los dirigentes (presidente, secretario y tesorero), el timbre de la organización, indicar claramente el monto en dinero, el detalle en especie, el objetivo de lo solicitado y tres cotizaciones respecto de lo solicitado.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">A quién está dirigido</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Trámite a realizar y/o etapas</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                Se ingresa el proyecto de subvención. Aprobado por el Honorable Concejo Municipal, el Sr. Alcalde registra las transferencias en el Registro de Fondos Públicos (<EnlaceExterno href={enlacesTransparencia.transferencias}>registros19862.gob.cl</EnlaceExterno>). La transferencia debe ser aceptada por la institución y se firma el respectivo convenio en la Dirección de Asesoría Jurídica. La institución debe consultar los resultados en la Oficina de Partes o en el Departamento de Finanzas. Si es positivo, se retira el cheque en Tesorería Municipal.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Dónde se realiza?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal, San Pablo 5959, segundo piso</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Tiene costo</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Este trámite está disponible en línea?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li><EnlaceExterno href={enlacesTransparencia.activa}>Transparencia Activa</EnlaceExterno></li>
                  <li><EnlaceExterno href={enlacesSubvencionMunicipal[0]}>Regular el procedimiento para el otorgamiento de transferencias o subvenciones que la municipalidad pueda entregar para fines específicos, a personas jurídicas de carácter público o privado sin fines de lucro que colaboren directamente en el cumplimiento de sus funciones.</EnlaceExterno></li>
                  <li><EnlaceExterno href={enlacesSubvencionMunicipal[1]}>Primera Modificación “Regular el procedimiento para el otorgamiento de transferencias o subvenciones que la municipalidad pueda entregar para fines específicos, a personas jurídicas de carácter público o privado sin fines de lucro que colaboren directamente en el cumplimiento de sus funciones”.</EnlaceExterno></li>
                  <li><EnlaceExterno href={enlacesSubvencionMunicipal[2]}>Segunda Modificación “Regular el procedimiento para el otorgamiento de transferencias o subvenciones que la municipalidad pueda entregar para fines específicos, a personas jurídicas de carácter público o privado sin fines de lucro que colaboren directamente en el cumplimiento de sus funciones”.</EnlaceExterno></li>
                  <li><EnlaceExterno href={enlacesTransparencia.transferencias}>Transferencia regulada Ley N° 19.862</EnlaceExterno></li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>
      ) : esModificacionEstatutos ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Secretaría Municipal</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite o Servicio</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{tramiteSeleccionado}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">En qué consiste</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Solicita modificación de los estatutos existentes en una organización.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Requisitos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Carta firmada por el presidente y secretario de la organización y con el timbre de la misma.</li>
                  <li>Haber aprobado la modificación en una asamblea general extraordinaria, especialmente convocada para ello.</li>
                  <li>Ser aprobado el acuerdo por la mayoría absoluta de los miembros asociados (50% + 1) y no solo por los socios asistentes a dicha asamblea extraordinaria.</li>
                  <li>Presentar dos estatutos nuevos en original firmados en cada hoja por el secretario de la organización.</li>
                </ul>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Documentos requeridos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Estatuto de la organización (dos originales).</li>
                  <li>Libro de actas y fotocopia del acta en donde se aprobó la modificación.</li>
                  <li>Carta firmada por el presidente y secretario de la organización y con el timbre de la misma.</li>
                  <li>Un dirigente deberá retirar de la Secretaría Municipal el libro de actas, el certificado y un ejemplar del Estatuto, firmado en cada hoja por el Secretario Municipal.</li>
                </ol>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">A quién está dirigido</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Trámite a realizar y/o etapas</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Se ingresa la modificación con los documentos solicitados. La Secretaría tiene un plazo de 30 días para estudiar la modificación. Si se objeta, la organización tiene un plazo de 30 días para subsanar las observaciones.</li>
                  <li>Al término del plazo se entregará un certificado, el cual será incluido en el libro de Registro e informado al Departamento de Organizaciones Comunitarias.</li>
                  <li>Un dirigente deberá retirar de la Secretaría Municipal el libro de actas, el certificado y un ejemplar del Estatuto, firmado en cada hoja por el Secretario Municipal.</li>
                </ol>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Dónde se realiza?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal, San Pablo 5959, segundo piso</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Tiene costo</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Este trámite está disponible en línea?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li><EnlaceExterno href={enlacesTransparencia.pasiva}>Transparencia Pasiva</EnlaceExterno></li>
                  <li>
                    <EnlaceExterno href={enlaceManualModificacionEstatutos}>
                      Aprueba Manual de Procedimiento de Solicitudes de Obtención y Vigencia de Personalidad Jurídica de las Organizaciones Comunitarias ante la Secretaría Municipal
                    </EnlaceExterno>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>
      ) : esSolicitudInformacion ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Transparencia Municipal</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">En qué consiste</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <EnlaceExterno href={enlacesTransparencia.ley}>Ley N° 20.285</EnlaceExterno> sobre Acceso a la Información Pública
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Requisitos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No tiene</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Documentos requeridos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No tiene</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Se realiza</dt>
              <dd className="space-y-2 text-sm leading-relaxed text-slate-800 md:col-span-2">
                <p>Presencial: Avenida San Pablo 5959, primer piso, Oficina de Informaciones y Gestión Documental</p>
                <p>Medio Electrónicos: sitio web <EnlaceExterno href={enlacesTransparencia.pasiva}>Transparencia Pasiva</EnlaceExterno></p>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Trámite a realizar y/o etapas</dt>
              <dd className="space-y-3 text-sm leading-relaxed text-slate-800 md:col-span-2">
                <p>
                  Ingreso sitio web <EnlaceExterno href={enlacesTransparencia.pasiva}>Transparencia Pasiva</EnlaceExterno>. Formulario Solicitud de la Información de forma presencial en Oficina de Informaciones y Gestión Documental.
                </p>
                <div>
                  <p className="mb-2 font-semibold text-slate-700">Etapa:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>Recepción de Solicitud de Información</li>
                    <li>
                      Análisis de la Solicitud
                      <ul className="list-disc pl-5 text-slate-600">
                        <li>Actos a terceros</li>
                        <li>Derivaciones</li>
                        <li>Subsanación</li>
                        <li>Derivación Interna</li>
                      </ul>
                    </li>
                    <li>
                      Análisis de Respuesta
                      <ul className="list-disc pl-5 text-slate-600">
                        <li>Notificación al solicitante de cancelación de Costo de Reproducción, si existe un costo se informa valor a cancelar para el retiro de la respuesta.</li>
                      </ul>
                    </li>
                    <li>Entrega de la Información Solicitada.</li>
                  </ol>
                </div>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Tiene costo</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                Solo si la solicitud requiere documento reproducido en formato papel y medios digitales que no sean soportados por correos electrónicos.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Unidad monetaria</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">UTM.</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Valor del servicio</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                De acuerdo al tipo de documento y de acuerdo a la <EnlaceExterno href={enlacesTransparencia.ordenanza}>Ordenanza de Derecho Municipal</EnlaceExterno>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite está disponible en línea</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Sí</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite en línea</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <EnlaceExterno href={enlacesTransparencia.pasiva}>Transparencia Pasiva</EnlaceExterno>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <EnlaceExterno href={enlacesTransparencia.activa}>Transparencia Activa</EnlaceExterno>
              </dd>
            </div>
          </dl>
        </section>
      ) : esSolicitudPersonalidadJuridica ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Secretaría Municipal</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite o Servicio</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{tramiteSeleccionado}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">En qué consiste</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                Creación de nuevas instituciones o entidades sociales en la comuna
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Requisitos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                Carta formal dirigida a la Municipalidad, con firma de algunos integrantes del grupo, solicitando ministro de Fe para la Constitución. Requisitos comunes: residir las personas en una misma Unidad Vecinal (para el caso de las Juntas Vecinales), no perseguir fines de lucro y haberse reunido anteriormente para verificar que se cumpla el número mínimo (organizaciones funcionales: 15 socios; Juntas de Vecinos: 200 socios).
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Documentos requeridos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Acta de Sesión de Constitución</li>
                  <li>Estatutos de la Organización (dos originales firmados)</li>
                  <li>Libro de Socios (RUT, nombre y firmas de los socios)</li>
                  <li>Certificado de antecedentes de los miembros de la directiva provisoria, con fotocopias de su cédula de identidad.</li>
                </ol>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">A quién está dirigido</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Trámite a realizar y/o etapas</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Ingreso de Solicitud</li>
                  <li>Designación Ministro de Fe de acuerdo al Territorio en donde radica la Organización</li>
                  <li>Primera fecha de Constitución con su ministro de Fe</li>
                  <li>Reunión de la Primera Constitución</li>
                  <li>
                    Aprobación de Estatuto y elección directiva provisoria (duración 3 meses para tramitar personalidad jurídica y sus integrantes deben ser mayores de 18 años, tienen un plazo de 30 días para ingresar la documentación solicitada)
                  </li>
                </ol>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Dónde se realiza?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal, San Pablo 5959, segundo piso</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Tiene costo</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Este trámite está disponible en línea?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li><EnlaceExterno href={enlacesTransparencia.activa}>Transparencia Activa</EnlaceExterno></li>
                  <li>
                    <EnlaceExterno href={enlacesTransparencia.manualPersonalidadJuridica}>
                      Aprueba Manual de Procedimiento de Solicitudes de Obtención y Vigencia de Personalidad Jurídica de las Organizaciones Comunitarias ante la Secretaría Municipal
                    </EnlaceExterno>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>
      ) : esCertificadoVigencia ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Secretaría Municipal</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite o Servicio</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{tramiteSeleccionado}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">En qué consiste</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                Certificado que la institución se encuentra vigente personalidad jurídica
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Requisitos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                Se solicita en forma presencial. La organización debe poseer personalidad jurídica y estar inscrita y al día en el registro de Organizaciones Comunitarias de la municipalidad de Lo Prado.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Documentos requeridos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Se solicita en forma presencial. La organización debe poseer personalidad jurídica.</li>
                  <li>La organización debe estar inscrita y al día en el registro de Organizaciones Comunitarias de la municipalidad de Lo Prado.</li>
                </ul>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">A quién está dirigido</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite a realizar y/o etapas</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Se solicita certificación.</li>
                  <li>Si la institución tiene vigencia al día, se entrega durante el día o al día siguiente de la solicitud.</li>
                </ul>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Dónde se realiza?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal, San Pablo 5959, segundo piso</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Tiene costo</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Este trámite está disponible en línea?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li><EnlaceExterno href={enlacesTransparencia.pasiva}>Transparencia Pasiva</EnlaceExterno></li>
                  <li>
                    <EnlaceExterno href={enlacesTransparencia.manualPersonalidadJuridica}>
                      Aprueba Manual de Procedimiento de Solicitudes de Obtención y Vigencia de Personalidad Jurídica de las Organizaciones Comunitarias ante la Secretaría Municipal
                    </EnlaceExterno>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>
      ) : esSolicitudCambioDirectiva ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Secretaría Municipal</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite o Servicio</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">{tramiteSeleccionado}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">En qué consiste</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                La organización cambia su directiva, lo cual debe ser informado al Municipio.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Requisitos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                La organización debe estar vigente. Los candidatos deben ser mayores de 18 años, saber leer y escribir, tener un mínimo de 1 año afiliados a la organización (extranjeros avecindados por más de 3 años en el país), no estar procesados ni cumplir condena por delito que merezca pena aflictiva y no ser miembros de la comisión electoral.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Documentos requeridos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <p className="mb-2">La organización debe estar vigente. Los candidatos deben:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Ser mayores de 18 años.</li>
                  <li>Saber leer y escribir.</li>
                  <li>Tener un mínimo de 1 año afiliados a la organización (extranjeros avecindados por más de 3 años en el país).</li>
                  <li>No estar procesados ni cumplir condena por delito que merezca pena aflictiva.</li>
                  <li>No ser miembros de la comisión electoral.</li>
                </ul>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">A quién está dirigido</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Trámite a realizar y/o etapas</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Realizar asamblea general ordinaria con un mínimo de socios (Juntas de Vecinos: 50 socios; organizaciones funcionales: 8 socios).</li>
                  <li>Designación de Ministro de Fe de acuerdo al territorio en donde radica la organización.</li>
                  <li>Primera fecha de Constitución con su Ministro de Fe y reunión de la Primera Constitución.</li>
                  <li>
                    Aprobación de Estatuto y elección de directiva provisoria (duración de 3 meses para tramitar personalidad jurídica; sus integrantes deben ser mayores de 18 años y tienen un plazo de 30 días para ingresar la documentación solicitada).
                  </li>
                </ol>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Dónde se realiza?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Secretaría Municipal, San Pablo 5959, segundo piso</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Tiene costo</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">¿Este trámite está disponible en línea?</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc space-y-1 pl-5">
                  <li><EnlaceExterno href={enlacesTransparencia.pasiva}>Transparencia Pasiva</EnlaceExterno></li>
                  <li>
                    <EnlaceExterno href={enlaceManualCambioDirectiva}>
                      Aprueba Manual de Procedimiento de Solicitudes de Obtención y Vigencia de Personalidad Jurídica de las Organizaciones Comunitarias ante la Secretaría Municipal
                    </EnlaceExterno>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>
      ) : esSolicitudAudienciaLobby ? (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 bg-blue-50 md:grid-cols-2">
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Trámite</h3>
            <h3 className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-800">Secretaría Municipal</h3>
          </div>
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">En qué consiste</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <EnlaceExterno href={enlacesTransparencia.leyLobby}>Ley N° 20.730</EnlaceExterno>, Regula el Lobby y las Gestiones que Representen Intereses Particulares ante las Autoridades y Funcionarios.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Requisitos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <ul className="list-disc pl-5">
                  <li>Gestores de Intereses Particulares</li>
                  <li>Lobbista</li>
                </ul>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Documentos requeridos</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No tiene</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Se realiza</dt>
              <dd className="space-y-2 text-sm leading-relaxed text-slate-800 md:col-span-2">
                <p>Presencial: Avenida San Pablo 5959, segundo piso, Oficina de Secretaría Municipal</p>
                <p>Medio Electrónicos: sitio web <EnlaceExterno href={enlacesTransparencia.plataformaLobby}>Ley Lobby</EnlaceExterno></p>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="self-center text-xs font-semibold text-slate-500">Trámite a realizar y/o etapas</dt>
              <dd className="space-y-3 text-sm leading-relaxed text-slate-800 md:col-span-2">
                <p>
                  Ingreso sitio web <EnlaceExterno href={enlacesTransparencia.solicitudAudiencia}>Solicitud de Audiencia Ley Lobby</EnlaceExterno>, Formulario Solicitud de Audiencia en forma presencial con secretaría Secretaría Municipal, Oficina de Secretaría Municipal.
                </p>
                <div>
                  <p className="mb-2 font-semibold text-slate-700">Etapa:</p>
                  <ol className="list-decimal space-y-2 pl-5">
                    <li>Recepción de Solicitud de Audiencia</li>
                    <li>
                      Análisis de la Solicitud de Audiencia
                      <ul className="list-disc pl-5 text-slate-600">
                        <li>Aceptación</li>
                        <li>Encomendada</li>
                        <li>Rechazada</li>
                      </ul>
                    </li>
                    <li>
                      Solicitud Aceptada o encomendada.
                      <ul className="list-disc pl-5 text-slate-600">
                        <li>Se informa mediante correo electrónico la fecha, hora y lugar.</li>
                      </ul>
                    </li>
                    <li>
                      Publicación de la Audiencia.
                      <ul className="list-disc pl-5 text-slate-600">
                        <li>
                          Se informa el primer día hábil del mes siguiente sitio web <EnlaceExterno href={enlacesTransparencia.plataformaLobby}>Ley Lobby</EnlaceExterno>.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Tiene costo</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">No</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite está disponible en línea</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">Sí</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Trámite en línea</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <EnlaceExterno href={enlacesTransparencia.solicitudAudiencia}>Solicitud de Audiencia Ley Lobby</EnlaceExterno>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 px-5 py-3 md:grid-cols-3 md:gap-4">
              <dt className="text-xs font-semibold text-slate-500">Enlace a mayor información</dt>
              <dd className="text-sm leading-relaxed text-slate-800 md:col-span-2">
                <EnlaceExterno href={enlacesTransparencia.activa}>Transparencia Activa</EnlaceExterno>
              </dd>
            </div>
          </dl>
        </section>
      ) : tramiteSeleccionado ? (
        <div className="max-w-3xl rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-xs">
          El contenido de este trámite estará disponible próximamente.
        </div>
      ) : (
        <section className="max-w-3xl space-y-3">
          <h3 className="text-sm font-bold text-slate-900">Trámites</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {tramitesSecretariaMunicipal.map((tramite) => (
              <button
                key={tramite}
                type="button"
                onClick={() => setTramiteSeleccionado(tramite)}
                className="group flex min-h-20 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-xs transition-all hover:border-blue-300 hover:shadow-md"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold leading-relaxed text-slate-800 group-hover:text-blue-700">
                    {tramite}
                  </span>
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-blue-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            ))}
          </div>
        </section>
      )}

      <div className="border-t border-slate-200 pt-4">
        <button
          onClick={() => tramiteSeleccionado ? setTramiteSeleccionado(null) : onVolver()}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {tramiteSeleccionado ? 'Volver a trámites de Secretaría Municipal' : 'Volver a unidades municipales'}
        </button>
      </div>
    </div>
  );
}
