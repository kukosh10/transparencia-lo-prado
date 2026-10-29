import { useMemo, useState } from 'react';

const beneficiarios = [
  ['RIVEROS', 'SALAMANCA', 'CAROLINA'],
  ['LIEN', 'ALLUELEF', 'MANUELA'],
  ['ROJAS', 'ACUNA', 'LORENA'],
  ['CARVAJAL', 'PIZARRO', 'MARISOL'],
  ['RUIZ', 'FARIAS', 'FABIOLA'],
  ['DELGADO', 'ARAYA', 'JOCELYN'],
  ['VEGA', 'GONZALEZ', 'KATHERINE'],
  ['BASAEZ', 'IBANEZ', 'NATALY'],
  ['CAMUS', 'LABRA', 'KARLA'],
  ['GRUNENWALD', 'SALDIVIA', 'GRETTEL'],
  ['PENALOZA', 'MORALES', 'JANIS'],
  ['GONZALEZ', 'MIRANDA', 'VICTORIA'],
  ['COLCHAO', 'APOLINAR', 'JESSICA'],
  ['TRONCOSO', 'MELLA', 'MARCIA'],
  ['LIEMPI', 'HUENUPIL', 'MARIA'],
  ['AVILA', 'PALMA', 'VANESSA'],
  ['HERMOSILLA', 'GUTIERREZ', 'TAMARA'],
  ['CONTRERAS', 'CATALAN', 'XIMENA'],
  ['PAILLACAN', 'SOTO', 'AMELYS'],
  ['MORALES', 'SANHUEZA', 'NANCY'],
  ['TAPIA', 'CASTRO', 'ELENA'],
  ['GOMEZ', 'AMIS', 'MIREYA'],
  ['ULLOA', 'GAJARDO', 'ISABEL'],
  ['AGUILERA', 'JARA', 'CLAUDIA'],
  ['MOYA', 'ORTIZ', 'MARIA'],
  ['MUNOZ', 'DURAN', 'MICHELLE'],
  ['MUNOZ', 'ORELLANA', 'ESTRELLA'],
  ['OPAZO', 'SEPULVEDA', 'CARLA'],
  ['MORAGA', 'FERRER', 'CECILIA'],
  ['RIOS', 'LOPEZ', 'MARIA'],
  ['LEON', 'FUENTES', 'MARIA'],
  ['JEREZ', 'ARAYA', 'KAREN'],
  ['FIGUEROA', 'BELLO', 'MARIA'],
  ['HIDALGO', 'AROS', 'FELICINDA'],
  ['POBLETE', 'SILVA', 'MARIELA'],
  ['VERA', 'GUTIERREZ', 'CLAUDIA'],
  ['DIAZ', 'CASTRO', 'NATALI'],
  ['FUENTES', 'GONZALEZ', 'DANIELA'],
  ['BRAVO', 'HERNANDEZ', 'YESSENIA'],
  ['VASQUEZ', 'MARDONES', 'MARIA'],
  ['URQUEJO', 'MATUS', 'GRACIELA'],
  ['TRAFILAF', 'BOBADILLA', 'ANGELICA'],
  ['CORDOVA', 'NANCUPIL', 'ANAHIM'],
  ['MIRANDA', 'FLORES', 'VICTORIA'],
  ['MAIRA', 'RAMOS', 'ALEJANDRA'],
  ['MARTIN', 'ONATE', 'JADE'],
  ['MARIQUEO', 'PAINEMAL', 'ALICIA'],
  ['HUERTA', 'GACITUA', 'MARIA'],
  ['TRUJILLO', 'ORTIZ', 'ROCIO'],
  ['PINCHEIRA', 'BUDIN', 'FABIOLA'],
  ['VILLARROEL', 'WHITE', 'BARBARA'],
  ['PALMA', 'JILBERTO', 'VANESSA'],
  ['SAEZ', 'DIAZ', 'NATALIA'],
  ['SILVA', 'ARCE', 'JOCELYN'],
  ['MONARES', 'CARRASCO', 'MARISOL'],
  ['GARRIDO', 'SANTIBANEZ', 'JESSICA'],
  ['TORRES', 'TORO', 'ORIETTA'],
  ['MALDONADO', 'IDE', 'DOMINGA'],
  ['MONDACA', 'HURTADO', 'PAMELA'],
  ['ORELLANA', 'OLIVARES', 'PATRICIA'],
  ['SOBARZO', 'OBANDO', 'YOCELYN'],
  ['LLANOS', 'RAMIREZ', 'OLGA'],
  ['BARRERA', 'SILVA', 'TIARE'],
  ['BARROS', 'ROJAS', 'MARIA'],
  ['ORTIZ', 'CASTANEDA', 'GEMITA'],
  ['CASTRO', 'DONOSO', 'LAURA'],
  ['RIQUELME', 'OLIVARES', 'EMILIA'],
  ['NAVARRO', 'ARRIAGADA', 'PAMELA'],
  ['PICARTE', 'VERGARA', 'CYNTHIA'],
  ['PACHECO', 'QUIROGA', 'MARIA'],
  ['HUENTECONA', 'INOSTROZA', 'JEANNETTE'],
  ['ARAYA', 'VILLALOBOS', 'LINDA'],
  ['MILLANAO', 'HUENCHUNIR', 'ANTONIA'],
  ['CALFU', 'RAIO', 'JAZMIN'],
  ['AILLAPAN', 'RIOS', 'VALESKA'],
  ['SAN', 'MARTIN', 'BECERRA'],
  ['BAHAMONDE', 'RIOS', 'KATTERIN'],
  ['PINTO', 'JEREZ', 'MARIA'],
  ['VILCHES', 'BRAVO', 'BIANCA'],
  ['CORTES', 'VILLALOBOS', 'YARITZA'],
  ['ROMAN', 'MEZA', 'BARBARA'],
  ['TILLERIA', 'QUEZADA', 'CAROLINA'],
  ['VALDEBENITO', 'TORRES', 'VALESKA'],
  ['PEDRERO', 'GAJARDO', 'KAREN'],
  ['VALENZUELA', 'CAMBONI', 'CAMILA'],
  ['MOLINA', 'SILVA', 'ROXANA'],
  ['CASTILLO', 'TRIPAILAF', 'DANIELA'],
  ['OSSES', 'BRAVO', 'ELIANA'],
  ['ARDILES', 'COFRE', 'ELIZABETH'],
  ['PINO', 'GONZALEZ', 'JOCELYN'],
  ['NEIRA', 'ORDENES', 'CATALINA'],
  ['SANCHEZ', 'CHIA', 'CLAUDIA'],
  ['ARRIAGADA', 'PALACIOS', 'SYLVIA'],
  ['CERECEDA', 'ORELLANA', 'ADELA'],
  ['CRUZ', 'SANDOVAL', 'CLAUDIA'],
  ['LOMBARDO', 'LARA', 'MARIA'],
  ['BRISO', 'ROJAS', 'NORA'],
  ['OYARZO', 'VILLARROEL', 'YOLANDA'],
  ['HERRERA', 'ZUNIGA', 'NICOL'],
  ['CARVALLO', 'SALDANO', 'MARCELA'],
  ['GUZMAN', 'BELTRAN', 'MARIA'],
  ['JARA', 'CASTRO', 'MATILDE'],
  ['QUEZADA', 'RIQUELME', 'NAYARETH'],
  ['MENDOZA', 'MEZA', 'EVELYN'],
  ['ESPINOZA', 'ALVAREZ', 'ELIZABETH'],
  ['ALARCON', 'VALDES', 'MITZY'],
  ['VALENCIA', 'GALVEZ', 'KATHERINE'],
  ['BARRICA', 'JARAMILLO', 'DANITZA'],
  ['OLIVA', 'BELMAR', 'LILIAN'],
  ['ECHEVERRIA', 'CONOMAN', 'NATALY'],
  ['AVALOS', 'CALDERON', 'MONICA'],
  ['TORO', 'RIQUELME', 'ROXANA'],
  ['GUERRA', 'LAGOS', 'CLAUDIA'],
  ['BUSTAMANTE', 'LEIVA', 'YESSENIA'],
  ['LLAUQUEN', 'LLAUQUEN', 'LUCIA'],
  ['BERNAL', 'GANGA', 'SILVANA'],
  ['SANTANDER', 'CARRASCO', 'YANETTE'],
  ['QUINTANA', 'CARRASCO', 'NICOLE'],
  ['GODOY', 'ARAVENA', 'MARCELA'],
  ['ARCE', 'GUERRERO', 'CATALINA'],
  ['URRUTIA', 'CUETO', 'IRMA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2015_Febrero() {
  const [busqueda, setBusqueda] = useState('');
  const [pagina, setPagina] = useState(1);
  const resultados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase('es');
    return beneficiarios.filter(([paterno, materno, nombres]) =>
      `${paterno} ${materno} ${nombres}`.toLocaleLowerCase('es').includes(termino)
    );
  }, [busqueda]);
  const totalPaginas = Math.max(1, Math.ceil(resultados.length / filasPorPagina));
  const paginaActual = Math.min(pagina, totalPaginas);
  const filas = resultados.slice((paginaActual - 1) * filasPorPagina, paginaActual * filasPorPagina);

  return (
    <section aria-label="Nómina de Subsidio Familiar de febrero 2015" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Febrero 2015</h4>
          <p className="mt-1 text-xs text-slate-500">{resultados.length} beneficiarios</p>
        </div>
        <label className="w-full text-xs font-medium text-slate-600 sm:w-72">
          Buscar beneficiario
          <input
            type="search"
            value={busqueda}
            onChange={(event) => {
              setBusqueda(event.target.value);
              setPagina(1);
            }}
            placeholder="Nombre o apellido"
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-xs placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          />
        </label>
      </header>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[780px] border-collapse text-left text-xs">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Programa</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Apellido paterno</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Apellido materno</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Nombre</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Razón social</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">RUT</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Acto de otorgamiento</th>
              <th className="border-b border-slate-200 px-3 py-2.5 font-semibold">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {filas.map(([paterno, materno, nombres], index) => (
              <tr key={`${paterno}-${materno}-${nombres}-${index}`} className="even:bg-slate-50/70">
                <td className="border-b border-slate-100 px-3 py-2 text-blue-800">Subsidio Familiar</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{paterno}</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{materno}</td>
                <td className="border-b border-slate-100 px-3 py-2 font-medium text-slate-800">{nombres}</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Alcaldicio N° 02 de 02.01.15</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.02.2015</td>
              </tr>
            ))}
            {filas.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-sm text-slate-500">
                  No se encontraron beneficiarios que coincidan con la búsqueda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <span>
          {resultados.length === 0
            ? 'Sin resultados'
            : `Mostrando ${(paginaActual - 1) * filasPorPagina + 1}–${Math.min(paginaActual * filasPorPagina, resultados.length)} de ${resultados.length}`}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={paginaActual <= 1}
            onClick={() => setPagina((actual) => Math.max(1, actual - 1))}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Anterior
          </button>
          <span>Página {paginaActual} de {totalPaginas}</span>
          <button
            type="button"
            disabled={paginaActual >= totalPaginas}
            onClick={() => setPagina((actual) => Math.min(totalPaginas, actual + 1))}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}
