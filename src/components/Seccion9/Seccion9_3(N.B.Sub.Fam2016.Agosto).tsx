import { useMemo, useState } from 'react';

const beneficiarios = [
  ['ABARCA', 'BARRAZA', 'OLGA'],
  ['ACEVEDO', 'NAHUELHUAL', 'CLAUDIA'],
  ['ACUNA', 'RUMINOT', 'NATALIA'],
  ['ALEGRIA', 'JORQUERA', 'VALENTINA'],
  ['ALFARO', 'SOTO', 'ESTEFANIA'],
  ['ALVAREZ', 'ORDONEZ', 'TAMARA'],
  ['ANCAMIL', 'CHAVEZ', 'ROSA'],
  ['ARAVENA', 'LOPEZ', 'LINDA'],
  ['ARIAS', 'GARAY', 'EMILIA'],
  ['ARO', 'HERRERA', 'SANDRA'],
  ['ARZOLA', 'RODRIGUEZ', 'CAROL'],
  ['BAEZA', 'RUBIO', 'NATALIA'],
  ['BARRA', 'SOBARZO', 'CLAUDIA'],
  ['BARRUETO', 'ZUNIGA', 'MARIA'],
  ['BASUALTO', 'SOBARZO', 'SANDRA'],
  ['BOUFFANAIS', 'MILLAPAN', 'NAYARETH'],
  ['BURGOS', 'CARIQUEO', 'BEATRIZ'],
  ['BURGOS', 'ROA', 'AUDLET'],
  ['BUSTOS', 'FERNANDEZ', 'ANGELICA'],
  ['CABEZAS', 'TERRAZA', 'JESSICA'],
  ['CADEGAN', 'ALVEAL', 'DANIELA'],
  ['CANALES', 'FOITZICH', 'MONICA'],
  ['CANALES', 'ROJAS', 'ANA'],
  ['CARDENAS', 'SOLIS', 'CAROLAINE'],
  ['CAROCA', 'PARRA', 'MARIANELA'],
  ['CARRASCO', 'RODRIGUEZ', 'MARIA'],
  ['CARTE', 'RETAMAL', 'MARIANELLA'],
  ['CASONI', 'FERNANDEZ', 'JACQUELINE'],
  ['CASTILLO', 'BACON', 'YANINA'],
  ['CASTILLO', 'RIVAS', 'GISSELLE'],
  ['CASTRO', 'BRUNING', 'KAREN'],
  ['CASTRO', 'RAMOS', 'LAURA'],
  ['CATALAN', 'SEPULVEDA', 'CAMILA'],
  ['CERDA', 'ARENAS', 'NATALY'],
  ['CERDA', 'JARA', 'ROMANET'],
  ['CILLERO', 'OROZCO', 'DIANA'],
  ['CISTERNA', 'ARISMENDI', 'SARAI'],
  ['CLERICI', 'SOTO', 'PAOLA'],
  ['COFRE', 'GAETE', 'FRANCISCA'],
  ['COLLIL', 'QUICHAPAI', 'ELBA'],
  ['COLLI', 'CATRINAO', 'MIRTA'],
  ['CONCHA', 'CONCHA', 'SANDY'],
  ['CONTRERAS', 'RIOS', 'SOLANGE'],
  ['CORNEJO', 'CONTRERAS', 'ANA'],
  ['CORREA', 'CASTILLO', 'THIARE'],
  ['CUEVAS', 'MENDEZ', 'CYNTHIA'],
  ['CUMINA', 'RODENA', 'KAREN'],
  ['CURIQUEO', 'LICANQUEO', 'GLORIA'],
  ['DIAZ', 'BASCUNAN', 'LEYLA'],
  ['DONOSO', 'BEL', 'VALLE'],
  ['DURAN', 'MANCILLA', 'DIANA'],
  ['EL HAYECK', 'NAHUELAN', 'SAMAR'],
  ['ELGUEDA', 'VIDAL', 'GRACIELA'],
  ['ESPINOZA', 'GONZALEZ', 'JUDITH'],
  ['ESPINOZA', 'RAMIREZ', 'MARIA'],
  ['FIGUEROA', 'GONZALEZ', 'SCARLETT'],
  ['GALAZ', 'FIGUEROA', 'KATHERINE'],
  ['GALLARDO', 'BELTRAN', 'XIMENA'],
  ['GEORGI', 'GONZALEZ', 'ELIZABETH'],
  ['GODOY', 'TEJO', 'EDITH'],
  ['GONZALES', 'GONZALES', 'ROSA'],
  ['GONZALEZ', 'CADENAS', 'DARYL'],
  ['GONZALEZ', 'LOPEZ', 'NICOLE'],
  ['GONZALEZ', 'REBOLLEDO', 'ELIANA'],
  ['GUAJARDO', 'MUNOZ', 'MARIANA'],
  ['GUINEZ', 'MERCADO', 'JOSELINE'],
  ['GUTIERREZ', 'PINUER', 'EVELYN'],
  ['HERNANDEZ', 'VALENZUELA', 'ELIZABETH'],
  ['HERRERA', 'CONOFEAN', 'JENIFFER'],
  ['HERRERA', 'VEGA', 'GERAL'],
  ['HORMAZABAL', 'SALGADO', 'PATRICIA'],
  ['HUECHUCURA', 'SANCHEZ', 'NURY'],
  ['HUENCHULLAN', 'CONEJEROS', 'PATRICIA'],
  ['JARA', 'GARCES', 'CLAUDIA'],
  ['LABBE', 'LOPEZ', 'JACQUELINE'],
  ['LANDAZURI', 'SIRLEY', 'YESENIA'],
  ['LARA', 'CAMPOS', 'ELIZABETH'],
  ['LOPEZ', 'VIDAL', 'FRANCISCA'],
  ['MADARIAGA', 'LOPEZ', 'LUISA'],
  ['MARIN', 'OSORIO', 'NATALIA'],
  ['MAUREIRA', 'BARRAZA', 'CLAUDIA'],
  ['MAURICIO', 'LEZAMA', 'ARACELI'],
  ['MEJIAS', 'IBANEZ', 'NATHALI'],
  ['MELIPIL', 'COLICOY', 'ELIANA'],
  ['MELL', 'ROJAS', 'ROMINA'],
  ['MENAY', 'BURLET', 'YESENIA'],
  ['MENDEZ', 'FUENTES', 'NAMETT'],
  ['MENDEZ', 'PINO', 'ROXANA'],
  ['MILLALEN', 'SANTANDER', 'MARIA'],
  ['MILLALANCO', 'CARIMAN', 'IRIS'],
  ['MILLAPAN', 'ANCATEN', 'ALICIA'],
  ['MILLAQUEO', 'CRUCES', 'GLORIA'],
  ['MOLINA', 'ALVAREZ', 'JAQUELIN'],
  ['MONTECINOS', 'FLORES', 'MARCELA'],
  ['MORA', 'GONZALEZ', 'ANDREA'],
  ['MORALES', 'MORALES', 'GISSELA'],
  ['MORALES', 'SANHUEZA', 'NANCY'],
  ['MORALES', 'ZAMORANO', 'NATALIA'],
  ['MOYA', 'ZUNIGA', 'GUADALUPE'],
  ['MUNOZ', 'PASTEN', 'PABLO'],
  ['NAVARRETE', 'MUNOZ', 'PATRICIA'],
  ['NAVARRETE', 'OSSES', 'PAMELA'],
  ['NECULAN', 'LLAULEN', 'PALMENIA'],
  ['NUNEZ', 'VASQUEZ', 'CAROL'],
  ['OCARANZA', 'VASQUEZ', 'PAOLA'],
  ['OLIVARES', 'MONTECINOS', 'KAREN'],
  ['ORELLANA', 'BUSTAMANTE', 'ROSA'],
  ['ORELLANA', 'DURAN', 'DANITZA'],
  ['ORTEGA', 'GARRIDO', 'MARIA'],
  ['OSORIO', 'JEREZ', 'CARLA'],
  ['OSORIO', 'SALGADO', 'MADLAINE'],
  ['PAILAHUEQUE', 'MARTINEZ', 'IRIS'],
  ['PARDO', 'ANCAN', 'LORENA'],
  ['PEREZ', 'PEREZ', 'ANGELA'],
  ['PEREZ', 'VERGARA', 'FRANCHESCA'],
  ['PINTO', 'GONZALEZ', 'NICOLE'],
  ['PINTO', 'ZUNIGA', 'MARTA'],
  ['PLAZA', 'CANCINO', 'DANIELA'],
  ['PLAZA', 'VARGAS', 'ROMINA'],
  ['PULIDO', 'GONZALEZ', 'CLAUDIA'],
  ['QUEZADA', 'BELLO', 'ISABEL'],
  ['QUIMEN', 'MORENO', 'PAOLA'],
  ['QUISPE', 'SURCO', 'ALICIA'],
  ['RAIN', 'BRITO', 'ELIZABETH'],
  ['RAMIREZ', 'FUENTES', 'NICOLE'],
  ['RAMIREZ', 'VALLEJOS', 'JAVIERA'],
  ['RETAMALES', 'PACHECO', 'CLAUDIA'],
  ['REYES', 'CORDERO', 'VALENTINA'],
  ['REYES', 'FREDES', 'CLAUDIA'],
  ['REYES', 'SANHUEZA', 'NINOSKA'],
  ['RIOSECO', 'RUPAYAN', 'JESSICA'],
  ['RIVEROS', 'DIAZ', 'MARINA'],
  ['ROGAZY', 'CONTRERAS', 'ANGELA'],
  ['ROMAN', 'GUTIERREZ', 'PAULA'],
  ['ROMERO', 'ROSALES', 'KATHERINE'],
  ['SALAS', 'SALDIVAR', 'ELISA'],
  ['SALINAS', 'CANALES', 'FABIOLA'],
  ['SAN', 'MARTIN', 'ASENCIO'],
  ['SANDOVAL', 'MANRIQUEZ', 'ISABEL'],
  ['SANTIBANEZ', 'SANTIBANEZ', 'GENESIS'],
  ['SEGUEL', 'BARRIGA', 'KARINA'],
  ['SEGURA', 'RAMIREZ', 'JOSELYN'],
  ['SEPULVEDA', 'ESPINOZA', 'CARLA'],
  ['SERRANO', 'BUENAS', 'JULIA'],
  ['SILVA', 'ALONSO', 'INES'],
  ['SMART', 'SALGADO', 'JEANNETTE'],
  ['SOTO', 'MERINO', 'SOLEDAD'],
  ['TAPIA', 'VASQUEZ', 'ANTONELA'],
  ['TOBAR', 'VERGARA', 'ROSA'],
  ['TRINCADO', 'ESPINOZA', 'JESSICA'],
  ['VALDES', 'SAEZ', 'YOLANDA'],
  ['VARGAS', 'CONOMAN', 'SUSY'],
  ['VASQUEZ', 'MATURANA', 'STEPHANIE'],
  ['VEGA', 'VEGA', 'ANTONIETA'],
  ['VELIZ', 'TRONCOSO', 'JENNIFER'],
  ['VERA', 'BARICHICHM', 'ESTRELLITA'],
  ['VERDEJO', 'REYES', 'JOSELIN'],
  ['VILLABLANCA', 'WALLACE', 'JAQUELINE'],
  ['ZAMORA', 'TORRES', 'YENNY'],
  ['ZAVALETA', 'NOVOA', 'ROCIO'],
  ['ARAYA', 'ARAYA', 'STEPHANIE'],
  ['CASTRO', 'LINDERMANN', 'VERONICA'],
  ['CERDA', 'MUNOZ', 'ANA'],
  ['COFRE', 'GAETE', 'SASKA'],
  ['DAGNINO', 'MORALES', 'MONICA'],
  ['DIAZ', 'MORA', 'YESENIA'],
  ['DROGUETT', 'MOLINA', 'MARIA'],
  ['DUARTE', 'ZUNIGA', 'MACARENA'],
  ['ECHANES', 'DEVIA', 'BLANCA'],
  ['ESCOBAR', 'ULLOA', 'JACQUELINE'],
  ['FARIAS', 'CASTILLO', 'CRYSTAL'],
  ['GONZALEZ', 'DIAZ', 'JAVIERA'],
  ['INOSTROZA', 'VASQUEZ', 'MARIA'],
  ['JIMENEZ', 'JIMENEZ', 'LESLY'],
  ['MELLA', 'PRADENAS', 'BRENDA'],
  ['MILLABUR', 'NAHUELHUAL', 'GLADYS'],
  ['PENA', 'ROMERO', 'MARCELA'],
  ['POZA', 'CALFUCURA', 'MARIA'],
  ['ROMERO', 'GONZALEZ', 'CYNTHIA'],
  ['SANTANA', 'CARTES', 'ISAMAR'],
  ['SANTIBANEZ', 'RIOS', 'RUBY'],
  ['SOLIS', 'FUENTES', 'MARIA'],
  ['TARISFENO', 'SANDOVAL', 'ROMINA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2016_Agosto() {
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
    <section aria-label="Nómina de Subsidio Familiar de agosto 2016" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Agosto 2016</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Exento N° 1713 de 01.07.16</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.08.2016</td>
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
