import { useMemo, useState } from 'react';

const beneficiarios = [
  ['ABAD', 'GONZALEZ', 'EVA'],
  ['AHUMADA', 'MUNOZ', 'CAROLINA'],
  ['ALARCON', 'SILVA', 'DEBORA'],
  ['ALARCON', 'ZAMORANO', 'MARILYN'],
  ['ALBAYAY', 'LOPEZ', 'STEPHANIE'],
  ['ARAYA', 'ROMAN', 'YITZA'],
  ['AREVALO', 'YANEZ', 'GENESIS'],
  ['ARRATIA', 'TORRES', 'BERNARDA'],
  ['ARRIAGADA', 'MERINO', 'AYING'],
  ['ARRIAGADA', 'PALACIOS', 'SYLVIA'],
  ['BAHAMONDES', 'SILVA', 'RUTH'],
  ['BALLENA', 'RIVERA', 'FLOR'],
  ['BARRALES', 'SANTIBANEZ', 'JENNIFER'],
  ['BARRERA', 'ARELLANO', 'VERONICA'],
  ['BASAEZ', 'IBANEZ', 'NATALY'],
  ['BASTIAS', 'QUINCHEL', 'ROMINA'],
  ['BASTIAS', 'ZARZAR', 'ESTER'],
  ['BAZAN', 'CARRILLO', 'MICHEL'],
  ['BECERRA', 'PAREDES', 'DANIELA'],
  ['BERNAL', 'GANGA', 'SILVANA'],
  ['BRAVO', 'SOTO', 'DIANA'],
  ['BRICENO', 'MILLAPAN', 'MYRIAM'],
  ['BURGOS', 'CARIQUEO', 'VIVIANA'],
  ['BUSTOS', 'APABLAZA', 'NATALY'],
  ['BUSTOS', 'NAVARRO', 'GEMMA'],
  ['CAHUILAN', 'CAYUPUL', 'LUCIA'],
  ['CAMIMIL', 'LEVIN', 'NORMA'],
  ['CAMUS', 'LABRA', 'KARLA'],
  ['CANALES', 'GUERRERO', 'FABIOLA'],
  ['CANELO', 'LIEN', 'MARGARITA'],
  ['CANUMIR', 'MILLA', 'SANDRA'],
  ['CAROCA', 'GUERRA', 'MARINA'],
  ['CARRASCO', 'PEREZ', 'MARIA'],
  ['CARRILLO', 'NAVARRO', 'DAMARIS'],
  ['CASTILLO', 'SILVA', 'GLEDY'],
  ['CATALAN', 'LOPEZ', 'XIMENA'],
  ['CHAMORRO', 'FLORES', 'VERONICA'],
  ['CHEUQUEPAN', 'CARDENAS', 'YASMIN'],
  ['COLLI', 'MILLAN', 'MADELEINE'],
  ['CUENU', 'PERLAZA', 'LAIDY'],
  ['CUEVAS', 'SABATTINI', 'LORENA'],
  ['DIAZ', 'MORALES', 'MARIA'],
  ['DUARTE', 'DUARTE', 'ROSA'],
  ['EL HAYECK', 'NAHUELAN', 'SAMARA'],
  ['ENCINA', 'MUNOZ', 'LISETTE'],
  ['ESCUDERO', 'ECHEVERRIA', 'JAZMINA'],
  ['ESPINOZA', 'MORA', 'MARIA'],
  ['FARIAS', 'CESPEDES', 'ROSA'],
  ['FERNANDEZ', 'VELASQUEZ', 'NATALIA'],
  ['FIGUEROA', 'BELLO', 'MARIA'],
  ['FLORES', 'VEAS', 'MARIA'],
  ['FUENTES', 'GONZALEZ', 'FRANCESCA'],
  ['FUENTES', 'LOPEZ', 'DANIELA'],
  ['FUENTES', 'POZO', 'SILVANA'],
  ['FUENZALIDA', 'DIAZ', 'MACARENA'],
  ['GARCES', 'SOTO', 'MARIA'],
  ['GARCIA', 'MOYANO', 'NATALIA'],
  ['GARRIDO', 'CONTRERAS', 'MARIELA'],
  ['GARRIDO', 'TORO', 'CECILIA'],
  ['GODOY', 'RODRIGUEZ', 'CAROLINA'],
  ['GONZALEZ', 'CASTANEDA', 'ROSA'],
  ['GONZALEZ', 'GAETE', 'DALILA'],
  ['GRANDON', 'VARGAS', 'KIMBERLY'],
  ['GUTIERREZ', 'CARILLANCA', 'CARMEN'],
  ['HERNANDEZ', 'DIAZ', 'KAREN'],
  ['HERNANDEZ', 'RIQUELME', 'ANGELINE'],
  ['HIDALGO', 'ABURTO', 'GEMA'],
  ['HORMAZABAL', 'HORMAZABAL', 'MARGARITA'],
  ['HUENTECURA', 'MACHEO', 'ABIGAIL'],
  ['HUERTA', 'CERDA', 'ALEJANDRA'],
  ['ITURRIAGA', 'ACOSTA', 'CONSTANZA'],
  ['JARA', 'MARDONES', 'FERNANDA'],
  ['JIMENEZ', 'MOLINA', 'XIMENA'],
  ['JOFRE', 'ISLA', 'NIDIA'],
  ['LABBE', 'LOPEZ', 'JACQUELINE'],
  ['LAFARQUE', 'LOPEZ', 'KARINA'],
  ['LECHUGA', 'SALINAS', 'CATHERINE'],
  ['LEPIMAN', 'HUENCHULEO', 'MACARENA'],
  ['LOPEZ', 'ORELLANA', 'CLAUDIA'],
  ['MACHUCA', 'AVILA', 'MARTA'],
  ['MARAMBIO', 'LIZAMA', 'DANIELA'],
  ['MARIQUEO', 'PAINEMAL', 'ALICIA'],
  ['MARQUEZ', 'ROJAS', 'CAROLINA'],
  ['MARTINEZ', 'AHUMADA', 'MARCELA'],
  ['MELLA', 'AYANCAN', 'XIMENA'],
  ['MERILLAN', 'PAINE', 'JOVA'],
  ['MIRANDA', 'NAHUALQUIN', 'MARIA'],
  ['MONTIEL', 'SAN', 'MARTIN'],
  ['MORALES', 'MORALES', 'DEYANIRA'],
  ['MORALES', 'RUZ', 'ANGELA'],
  ['MOYA', 'JARAMILLO', 'PATRICIA'],
  ['MUNOZ', 'LETRANZ', 'DABNE'],
  ['MUNOZ', 'MERINO', 'SANDRA'],
  ['OPAZO', 'MACIA', 'CLAUDIA'],
  ['PAILALEF', 'CORNEJO', 'KATHERINE'],
  ['PALMA', 'RAVELLO', 'YOVANNA'],
  ['PARDO', 'ANCAN', 'LORENA'],
  ['PAVEZ', 'MARIN', 'DANIELA'],
  ['PERALTA', 'ORELLANA', 'CYNTHIA'],
  ['PEREZ', 'ANDRADES', 'ANYEL'],
  ['PEREZ', 'GOMEZ', 'ANDREA'],
  ['PEREZ', 'MONDACA', 'PRISCILA'],
  ['PEREZ', 'MORENO', 'DE CRESPI'],
  ['PEREZ', 'TAPIA', 'AIDA'],
  ['PLAZA', 'CANCINO', 'DANIELA'],
  ['QUEZADA', 'ARANCIBIA', 'ROXANA'],
  ['RAMOS', 'SOTO', 'PAMELA'],
  ['ROA', 'MARCHANT', 'MARISA'],
  ['RODRIGUEZ', 'PELAES', 'GABY'],
  ['RODRIGUEZ', 'TOLEDO', 'MARITZA'],
  ['ROMERO', 'DAZA', 'RITA'],
  ['ROSAS', 'PAREDES', 'KATHERINE'],
  ['RUIZ', 'BRAVO', 'MARIANA'],
  ['RUIZ', 'PEREZ', 'ELIZABETH'],
  ['RUZ', 'CASTRO', 'RUBEN'],
  ['SAAVEDRA', 'SALINAS', 'VALESKA'],
  ['SALAMANCA', 'VARGAS', 'PAULINA'],
  ['SALAZAR', 'GOMEZ', 'CARLA'],
  ['SALDIAS', 'SANCHEZ', 'GEORGINA'],
  ['SALINAS', 'TORO', 'MACARENA'],
  ['SALVO', 'PARRA', 'JOCELYN'],
  ['SANCHEZ', 'RIASCOS', 'BEYANIDE'],
  ['SANDOVAL', 'RODRIGUEZ', 'MARIA'],
  ['SANTANDER', 'CARRASCO', 'YANETTE'],
  ['SANTIBANEZ', 'PEREZ', 'ADELINA'],
  ['SANTIBANEZ', 'TAPIA', 'YOHANNA'],
  ['SEPULVEDA', 'ABRIGO', 'DANIELA'],
  ['SEPULVEDA', 'ESPINOZA', 'CARLA'],
  ['SEPULVEDA', 'GUTIERREZ', 'STEPHANIE'],
  ['SEPULVEDA', 'MEDEL', 'CARMEN'],
  ['SEPULVEDA', 'SEPULVEDA', 'ROSSANA'],
  ['SILVA', 'COLLI', 'SANDRA'],
  ['TAMAYO', 'CHAVEZ', 'YESSENIA'],
  ['TAPIA', 'BENAVIDES', 'KATHERINE'],
  ['TAPIA', 'RAMOS', 'ROSA'],
  ['TORRES', 'CASTRO', 'ANA'],
  ['TRONCOSO', 'MORENO', 'FANNY'],
  ['ULLOA', 'CASIANO', 'YISLEN'],
  ['UNAPILLCO', 'ITTICA', 'YESHICA'],
  ['URRUTIA', 'CUETO', 'IRMA'],
  ['VALAREZO', 'BEJARANO', 'ESTELA'],
  ['VALDEBENITO', 'CEA', 'ELCIRA'],
  ['VALENZUELA', 'LEIVA', 'LILIAN'],
  ['VARGAS', 'ROMERO', 'ANA'],
  ['VERA', 'CORDOVA', 'NAVILA'],
  ['VIDAL', 'ARTIAGA', 'KARINA'],
  ['VIDAL', 'GARRIDO', 'SOLANGE'],
  ['VEYETES', 'NANJARI', 'JESSICA'],
  ['VILLAVICENCIO', 'MEJIAS', 'ESMERALDA'],
  ['VILLENA', 'ALARCON', 'EDITH'],
  ['MACHADO', 'MORENO', 'JACQUELINE'],
  ['OLIVA', 'PUELLES', 'ANGELA'],
  ['OROZCO', 'GONZALEZ', 'MARIA'],
  ['RODRIGUEZ', 'OVIEDO', 'ELVIRA'],
  ['SEGURA', 'OJEDA', 'JATYMIRA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2016_Febrero() {
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
    <section aria-label="Nómina de Subsidio Familiar de febrero 2016" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Febrero 2016</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Exento N° 02 de 04.01.16</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.02.2016</td>
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
