import { useMemo, useState } from 'react';

const beneficiarios = [
  ['VILLABLANCA', 'JARA', 'JESSICA'],
  ['CASTRO', 'RAMOS', 'LAURA'],
  ['ARELLANO', 'TAPIA', 'BERTA'],
  ['ORTEGA', 'GONZALEZ', 'ELIZABETH'],
  ['CATALAN', 'DOTTES', 'NATHALY'],
  ['ARZOLA', 'NOVOA', 'CATALINA'],
  ['CONTRERAS', 'PONCE', 'CARLA'],
  ['FUENTES', 'ALVARADO', 'FERNESTINA'],
  ['MELLA', 'VENEGAS', 'AMY'],
  ['RUIZ', 'LIRA', 'MARIA'],
  ['VALDERRAMA', 'HUANCA', 'ISABET'],
  ['SEPULVEDA', 'ESPINOZA', 'BARBARA'],
  ['VARGAS', 'TAMAYE', 'CINTHIA'],
  ['ARZOLA', 'RODRIGUEZ', 'WENDOLINE'],
  ['SILVA', 'JARAMILLO', 'ANGELICA'],
  ['SANHUEZA', 'CONTRERAS', 'MARIA'],
  ['CATRILEF', 'MARTINEZ', 'SILENE'],
  ['BOBADILLA', 'ESPINOZA', 'YASMIN'],
  ['PALMA', 'LEVMAN', 'CLAUDIA'],
  ['MONTECINO', 'ARAVENA', 'JESSICA'],
  ['FRANKE', 'REBOLLEDO', 'ELIZABETH'],
  ['OLAVE', 'DUARTE', 'MIREYA'],
  ['GANGA', 'LARENAS', 'YACYXIN'],
  ['PIZARRO', 'MEZA', 'BARBARA'],
  ['GUERRERO', 'GALDAMEZ', 'FABIOLA'],
  ['AVENDANO', 'ACUNA', 'CLAUDIA'],
  ['BULLO', 'SANTIBANEZ', 'ELIZABETH'],
  ['RIQUELME', 'OSSES', 'MARISOL'],
  ['CABEZAS', 'SALINAS', 'KATHERINE'],
  ['QUIMEN', 'MORENO', 'PAOLA'],
  ['DIAZ', 'REYES', 'VANESA'],
  ['SILVA', 'SEPULVEDA', 'CAROLA'],
  ['ROJO', 'BECERRA', 'MICHELLE'],
  ['SALTO', 'MARIA', 'DE'],
  ['AMBROCIO', 'CHAVEZ', 'LIZBETH'],
  ['MARCHANT', 'CASANOVA', 'NOEMI'],
  ['ESCOBAR', 'VALENZUELA', 'KATHERINE'],
  ['PINTO', 'BARROS', 'NAYARET'],
  ['HURTADO', 'SILVA', 'CONSTANZA'],
  ['MEZA', 'CABRAL', 'SONIA'],
  ['VASQUEZ', 'IBARRA', 'JOHANNA'],
  ['FUENTES', 'ENCINA', 'IRIS'],
  ['FARIAS', 'NEGRETE', 'YESSENA'],
  ['LIANCACUEO', 'LLAULEN', 'ERNA'],
  ['CONA', 'CASTANEDA', 'MARIA'],
  ['ZURITA', 'CONTRERAS', 'MARIANELA'],
  ['MORALES', 'GONZALEZ', 'MARIA'],
  ['TORRES', 'QUITRAL', 'DIANA'],
  ['LEPE', 'SUAZO', 'DENISSE'],
  ['HERRERA', 'PEREZ', 'EMILIA'],
  ['GUZMAN', 'HENRRIQUEZ', 'ASTRID'],
  ['RIOS', 'ESPINOZA', 'CHRISTAL'],
  ['ORELLANA', 'CORTES', 'NATALIA'],
  ['VILCHES', 'DE', 'LA'],
  ['GONZALEZ', 'CORDERO', 'BETSABE'],
  ['AGUERO', 'TREJO', 'PERLA'],
  ['PENA', 'ROMERO', 'MARCELA'],
  ['MORA', 'GAMBOA', 'ODETTE'],
  ['CARVALLO', 'SALDANO', 'MARCELA'],
  ['CARRASCO', 'ARAVENA', 'ALEJANDRA'],
  ['PACHECO', 'YANEZ', 'INGRID'],
  ['CRUZ', 'ALEMAN', 'MARIA'],
  ['BIOJO', 'SOLIS', 'RUTH'],
  ['ALVAREZ', 'MENDOZA', 'JUANA'],
  ['VIDAL', 'JARA', 'KARINA'],
  ['TRONCOSO', 'NUNEZ', 'CAMILA'],
  ['SILVA', 'LEVILAN', 'NICOLE'],
  ['CORTES', 'VELASQUEZ', 'ANA'],
  ['SALTO', '', 'MARIA'],
  ['QUILAQUEO', 'TORO', 'MADELAYNE'],
  ['MERINO', 'FERNANDEZ', 'CAROLINA'],
  ['LOYOLA', 'PAREDES', 'DIGNA'],
  ['SAAVEDRA', 'PAMELA', 'LOURDES'],
  ['NAVARRETE', 'BRAVO', 'ANDREA'],
  ['CARILLANCA', 'MATUS', 'MARITZA'],
  ['ROJAS', 'SEIGNOUREL', 'BLANCA'],
  ['GARRIDO', 'TORO', 'LORENA'],
  ['GARCIA', 'MOYANO', 'MICHELLE'],
  ['MANZOR', 'ZAPATA', 'NATALIA'],
  ['FUENTES', 'PENA', 'ROMINA'],
  ['SANCHEZ', 'HONTAVILLA', 'JOANNA'],
  ['SEPULVEDA', 'ANDRADE', 'ANA'],
  ['ALTAMIRANO', 'BARRIENTOS', 'JUDITH'],
  ['HENRIQUEZ', 'GARCIA', 'JEANNETTE'],
  ['MONARDE', 'FARIAS', 'CONSTANZA'],
  ['ESPINOSA', 'VERA', 'IVONNE'],
  ['HERNANDEZ', 'BURGOS', 'PATRICIA'],
  ['FUENTES', 'MALDONADO', 'VIVIANA'],
  ['VELASQUEZ', 'MORA', 'VERONICA'],
  ['GALAZ', 'SALVO', 'DEBIE'],
  ['MAIL', 'HERNANDEZ', 'NICOLE'],
  ['SILVA', 'ROJAS', 'CAROLAYN'],
  ['RODRIGUEZ', 'PESSINI', 'PAULETTE'],
  ['PASTEN', 'JAZME', 'MAEL'],
  ['SILVA', 'JARAMILLO', 'LORENA'],
  ['HENRIQUEZ', 'ROJAS', 'SOLEDAD'],
  ['PENA', 'VALENZUELA', 'MARCELA'],
  ['YANEZ', 'DIAZ', 'YOVANA'],
  ['ANCAMIL', 'CHAVEZ', 'ROSA'],
  ['VELOZO', 'BRESKOVIC', 'PAMELA'],
  ['BAEZA', 'RAMIREZ', 'CATALINA'],
  ['VERGARA', 'RAMOS', 'ERIKA'],
  ['ROJAS', 'MONTERO', 'KARINA'],
  ['SEPULVEDA', 'HUENCHUMILLA', 'JENNIFER'],
  ['RIVERA', 'QUEREVALU', 'JOANNA'],
  ['CAVIERES', 'VILLARROEL', 'KAREN'],
  ['ARRUE', 'HERNANDEZ', 'MARIENNE'],
  ['SANDOVAL', 'ALVAREZ', 'CATALINA'],
  ['PINILLA', 'VALDES', 'MARISOL'],
  ['ESCOBAR', 'ULLOA', 'JACQUELINE'],
  ['ORELLANA', 'ALVAREZ', 'ANA'],
  ['ALARCON', 'CORNEJO', 'KATHERINE'],
  ['SAN', 'MARTIN', 'ZARATE'],
  ['SALAS', 'POBLETE', 'JOCELYN'],
  ['QUIROZ', 'CASANOVA', 'DEBORA'],
  ['GATICA', 'GATICA', 'INGRID'],
  ['NAVARRO', 'FUENTES', 'SUSANA'],
  ['CAYUAN', 'CARIQUEO', 'JOSELINE'],
  ['BRAVO', 'IBACACHE', 'NICOLE'],
  ['MUNOZ', 'LAVIN', 'ELIZABETH'],
  ['SALVO', 'PARRA', 'JOCELYN'],
  ['GUZMAN', 'CARRASCO', 'CARLA'],
  ['TORRES', 'BUSTAMANTE', 'KAREN'],
  ['RIVERA', 'ESPINOZA', 'SCARLETT'],
  ['CARCAMO', 'FUENTEALBA', 'MIRIAM'],
  ['MILLANAO', 'CURIEN', 'MAGDALENA'],
  ['SANCHEZ', 'ESPINOSA', 'NATALY'],
  ['MENA', 'JARA', 'KARINA'],
  ['OLIVOS', 'MORAN', 'CLAUDIA'],
  ['GONZALEZ', 'MUNOZ', 'MARISOL'],
  ['HIDALGO', 'OVALLE', 'UBERLINDA'],
  ['MARICURA', 'AGUILLON', 'ROSA'],
  ['GONZALEZ', 'ARIAS', 'XIMENA'],
  ['BASUALTO', 'SOBARZO', 'SANDRA'],
  ['QUIMEN', 'PORMA', 'VERONICA'],
  ['QUILAQUEO', 'GUAJARDO', 'SORAYA'],
  ['LAGOS', 'HERNANDEZ', 'EVELYN'],
  ['SEPULVEDA', 'LARENAS', 'SILVIA'],
  ['SANDOVAL', 'DURAN', 'MARCELA'],
  ['SAN', 'MARTIN', 'ORTEGA'],
  ['LOBOS', 'ARELLANO', 'OLGA'],
  ['GONZALEZ', 'GONZALEZ', 'NATALIA'],
  ['VARGAS', 'FUENTES', 'JULIA'],
  ['GONZALEZ', 'CIFUENTES', 'CONSTANZA'],
  ['VALLEJOS', 'MARCHANT', 'LENNY'],
  ['VILCHES', 'SANTANA', 'MARCELA'],
  ['FLORES', 'ERICES', 'VERONICA'],
  ['SERRANO', 'CALQUIN', 'CAMILA'],
  ['CACERES', 'ORTIZ', 'MARIANA'],
  ['ENCINA', 'SALINAS', 'FRANCISCA'],
  ['SANDOVAL', 'FUENTES', 'ALEJANDRINA'],
  ['CANCINO', 'MUNOZ', 'ANA'],
  ['ORELLANA', 'LOYOLA', 'MARIA'],
  ['GUTIERREZ', 'DEVIA', 'VERONICA'],
  ['MAYLLE', 'ORTIZ', 'ADMA'],
  ['MEJIAS', 'HILL', 'ELIZABETH']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2015_Abril() {
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
    <section aria-label="Nómina de Subsidio Familiar de abril 2015" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Abril 2015</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{materno || '—'}</td>
                <td className="border-b border-slate-100 px-3 py-2 font-medium text-slate-800">{nombres}</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-500">No aplica</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Alcaldicio N° 487 del 02.03.15</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.04.2015</td>
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
