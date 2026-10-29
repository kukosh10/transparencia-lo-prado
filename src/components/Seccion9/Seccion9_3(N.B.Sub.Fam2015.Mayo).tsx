import { useMemo, useState } from 'react';

const beneficiarios = [
  ['GALLARDO', 'VALENZUELA', 'GILDA'],
  ['CORDOVA', 'ROJAS', 'ISABEL'],
  ['REYES', 'ROSALES', 'SUSANA'],
  ['VILLALOBOS', 'TRIGOSO', 'CLAUDIA'],
  ['ZAPATA', 'GARRIDO', 'MARIA'],
  ['ZUNIGA', 'BOBADILLA', 'BELEN'],
  ['CARRIZO', 'GAJARDO', 'MARISOL'],
  ['VALLEJO', 'FLANDES', 'JEANNETTE'],
  ['CONTRERAS', 'CHAVEZ', 'MIRIAM'],
  ['PEREZ', 'PINTO', 'JOHANNA'],
  ['FLORES', 'ALARCON', 'MARIA'],
  ['GODOY', 'AHUMADA', 'ANGELICA'],
  ['MEDEL', 'AEDO', 'VALERY'],
  ['CHAVEZ', 'FIGUEROA', 'KATHERINE'],
  ['PINEDO', 'CLEMENTE', 'MARIBEL'],
  ['MONSALVEZ', 'POLETE', 'PATRICIA'],
  ['MORALES', 'GONZALEZ', 'THAIRE'],
  ['AGUILAR', 'LAZO', 'SANTOS'],
  ['CARTES', 'SANHUEZA', 'MARIELA'],
  ['YANEZ', 'RIQUELME', 'MAYNE'],
  ['TORO', 'HONORATO', 'PAULINA'],
  ['INDO', 'GALAZ', 'NATALIE'],
  ['TOLOSA', 'ASTUDILLO', 'NELIDA'],
  ['ANCAMILLA', 'MELLA', 'MARITZA'],
  ['CALFUAL', 'HUERA', 'CARMEN'],
  ['NAVARRETE', 'BRAVO', 'ANDREA'],
  ['LEDESMA', 'GONZALEZ', 'CECILIA'],
  ['VEGA', 'RETAMALES', 'MARYORIE'],
  ['MENDOZA', 'HERVIA', 'SOLEDAD'],
  ['CAHULLAN', 'CAYUPIL', 'LAURA'],
  ['PADILLA', 'MORA', 'GRICELDA'],
  ['NECULPAN', 'CAYUPIL', 'XIMENA'],
  ['ROMERO', 'ROSALES', 'KATHERINE'],
  ['CRUZ', 'DIAZ', 'CLAUDIA'],
  ['MUNOZ', 'GONZALEZ', 'CAROLINA'],
  ['ANDRADE', 'LOPEZ', 'KAREN'],
  ['ROMERO', 'ASTORGA', 'PATRICIA'],
  ['PINA', 'GONGORA', 'LUZ'],
  ['BARRIA', 'MILLALANCO', 'TRANSITO'],
  ['ARANEDA', 'BARRIOS', 'THAIRE'],
  ['ACUNA', 'MORALES', 'TERESA'],
  ['ALVAREZ', 'PINO', 'ROSA'],
  ['VILO', 'GONZALEZ', 'PAOLA'],
  ['GUTIERREZ', 'VENEGAS', 'PATRICIA'],
  ['GARCES', 'URRA', 'ALINE'],
  ['CHAMORRO', 'FLORES', 'VERONICA'],
  ['LOPEZ', 'VARGAS', 'LERIDA'],
  ['CALDAS', 'PINTO', 'ESELDA'],
  ['SOTO', 'GRANDON', 'NATALIA'],
  ['RAMIREZ', 'CLUBILLOS', 'ESTEFANI'],
  ['SOTO', 'SEPULVEDA', 'XIMENA'],
  ['QUEZADA', 'CARDENAS', 'SANDRA'],
  ['IRIBARRA', 'SAN', 'MARTIN'],
  ['GONZALEZ', 'GUTIERREZ', 'NELLY'],
  ['AREVALO', 'JEREZ', 'MERCEDES'],
  ['CACERES', 'MORALES', 'SOLANGE'],
  ['MELLALO', 'CANIZARES', 'NATALIA'],
  ['GALDAME', 'ANCAI', 'ESPERANZA'],
  ['RAMOS', 'GUTIERREZ', 'ANGELICA'],
  ['TAPIA', 'TAPIA', 'JOCELYN'],
  ['ESPINOZA', 'PEREZ', 'CAROLINA'],
  ['SALAS', 'JARA', 'MARLENNE'],
  ['GONZALEZ', 'NOLAN', 'TAMARA'],
  ['AGUILERA', 'JARA', 'KATY'],
  ['BUSTAMANTE', 'MOLINA', 'CLAUDIA'],
  ['NIVICELA', 'LOPEZ', 'ANA'],
  ['FUENZALIDA', 'MARIA', 'SONIA'],
  ['PAILLALEF', 'LOPEZ', 'CLAUDIA'],
  ['ABARCA', 'MEDINA', 'VERONICA'],
  ['SALVO', 'AILLAPAN', 'ROSALIA'],
  ['NUNEZ', 'CABELLO', 'BLANCA'],
  ['PIZARRO', 'LEPILAF', 'NATALI'],
  ['OSSANDON', 'ORELLANA', 'OVDIA'],
  ['GRUNENWALD', 'SALDIVIA', 'SHLOMIT'],
  ['ARAVENA', 'ERAZO', 'GRISSELLE'],
  ['ROA', 'MORA', 'ISABEL'],
  ['AGUERO', 'TREJO', 'MARCELA'],
  ['ANGEL', 'GALLARDO', 'MARIA'],
  ['INOSTROZA', 'RUIZ', 'BEATRIZ'],
  ['GONZALEZ', 'MUNOZ', 'MARIA'],
  ['ALARCÓN', 'CORNEJO', 'KATHERINE'],
  ['GONZALEZ', 'BARROS', 'JACQUELINE'],
  ['HERRERA', 'TOBAR', 'NICOLE'],
  ['VASQUEZ', 'GAMBOA', 'ELIANA'],
  ['COLLONAO', 'MARILAO', 'MIRELLA'],
  ['CHACON', 'OLGUIN', 'CATALINA'],
  ['SALAS', 'GODOY', 'VANIA'],
  ['ABARCA', 'CARDENAS', 'GRACE'],
  ['VARGAS', 'VERA', 'LETICIA'],
  ['SOLORZA', 'CHINCHON', 'GABRIELA'],
  ['VIVANCO', 'VASQUEZ', 'YESSENIA'],
  ['HENRIQUEZ', 'SALDANO', 'PAMELA'],
  ['GONZALEZ', 'ROCAÑDIO', 'STEFANY'],
  ['MALDONADO', 'TORREJON', 'EVELYN'],
  ['REYES', 'MUNOZ', 'DANITZA'],
  ['CATRILEO', 'ALARCON', 'NOLFA'],
  ['CIFRAS', 'LEAL', 'LESLY'],
  ['TOBAR', 'ACEVEDO', 'MASSIEL'],
  ['URIBE', 'BUSTAMANTE', 'EBONNY'],
  ['MEDINA', 'MORALES', 'FABIOLA'],
  ['MOLINA', 'MARTINEZ', 'VERONICA'],
  ['BERRIOS', 'MORENO', 'SUSANA'],
  ['CLERICI', 'SOTO', 'PAOLA'],
  ['BARRIOS', 'DONOSO', 'CECILIA'],
  ['NEGRETE', 'CORTEZ', 'JANET'],
  ['VASQUEZ', 'LIZAMA', 'LISSETTE'],
  ['MARICURA', 'AGUILLON', 'ROSA'],
  ['ALARCON', 'HUANACO', 'GLORIA'],
  ['HIGUERAS', 'LAGOS', 'ROSA'],
  ['ORDENES', 'SOTO', 'VANESA'],
  ['VIVEROS', 'MORAGA', 'ROBERTO'],
  ['CORNEJO', 'ENCINA', 'DIANA'],
  ['CHEUQUE', 'HUENCHULLAN', 'TATIANA'],
  ['CABELLO', 'MORALES', 'ANDREA'],
  ['MISKULIN', 'ALARCON', 'ESTEFANIA'],
  ['BARRA', 'CUETO', 'ROSA'],
  ['NORAMBUENA', 'TORRES', 'VALESKA'],
  ['DROGUETT', 'TORREJON', 'ANA'],
  ['ROCHA', 'INALAF', 'ERIKA'],
  ['TORO', 'MORAGA', 'JESSICA'],
  ['ALLENDES', 'ARRIAGADA', 'SILVANA'],
  ['TAPIA', 'MOLINA', 'MARIA'],
  ['TOLOSA', 'GALAZ', 'ANA'],
  ['CONTRERAS', 'VALENZUELA', 'JOCELYN'],
  ['SILVA', 'GONZALEZ', 'EVELYN'],
  ['JOFRE', 'MESA', 'MARIA'],
  ['MILLANAO', 'CURIEN', 'MAGDALENA'],
  ['GARRIDO', 'ROGEL', 'EMILY'],
  ['DE', 'LA', 'HOZ'],
  ['ALARCON', 'MOLINA', 'JEANNETTE'],
  ['COLLIHUN', 'QUINENHUAL', 'MARIBEL'],
  ['SAEZ', 'PALUZ', 'SANDRA'],
  ['CAMPOS', 'VIZCARRA', 'VANESSA'],
  ['JARAMILLO', 'LOPEZ', 'MARIA'],
  ['MANCILLA', 'ARIDELA', 'JESUS'],
  ['VARGAS', 'ROJAS', 'MARITZA'],
  ['PAREDES', 'PAREDES', 'FABIOLA'],
  ['ZUNIGA', 'FLORES', 'BETZABE'],
  ['CAPUTO', 'HIDALGO', 'ANDREA'],
  ['ASTORGA', 'RAMOS', 'ALICIA'],
  ['ROJAS', 'ESPINOZA', 'CAROLINA'],
  ['FARIAS', 'ANTILLANCA', 'VERONICA'],
  ['CASTER', 'ORREGO', 'CATALINA'],
  ['VALDENEGRO', 'MUNOZ', 'GLADYS'],
  ['MENDOZA', 'CONTRERAS', 'BLANCA'],
  ['LOBOS', 'ARELLANO', 'OLGA'],
  ['MILLAQUEO', 'CURAMIL', 'SYLVIA'],
  ['SEPULVEDA', 'ROMERO', 'PAOLA'],
  ['MARIN', 'VILLAVICENCIO', 'RUBERLINDA'],
  ['NAVIA', 'VILLARROEL', 'IZZETTE'],
  ['BERTANIS', 'GODOY', 'VANIA'],
  ['SAEZ', 'LOBOS', 'VICTORIA'],
  ['POBLETE', 'VASQUEZ', 'CARMEN'],
  ['CASTRO', 'COLIPI', 'KATHERINE'],
  ['PAILLALEF', 'DIAZ', 'NICOLE'],
  ['MENDEZ', 'BARBOZA', 'KARINA'],
  ['CANUPAN', 'NAHUELPI', 'MARIA'],
  ['VELIZ', 'MARIN', 'CONSUELO'],
  ['AHUMADA', 'FUENTES', 'CAROLINA'],
  ['PINO', 'JOFRE', 'YESSENIA'],
  ['VALDEBENITO', 'SANTANA', 'PAULA'],
  ['CONTRERAS', 'MORA', 'MARIA'],
  ['NUNEZ', 'JIMENEZ', 'PATRICIA'],
  ['OSORIO', 'SALGADO', 'ANTONELLA'],
  ['SALAS', 'POBLETE', 'EVELYN'],
  ['CURIO', 'PUELPAN', 'MELISSA'],
  ['RODRIGUEZ', 'ROMERO', 'SCARLETT'],
  ['MORALES', 'ZAPATA', 'SONIA'],
  ['NOVOA', 'FUENTEALBA', 'JESSICA'],
  ['NAVARRETE', 'ARZOLA', 'ANISSI'],
  ['HUENUPI', 'COLIPI', 'ROSA'],
  ['ESPINOZA', 'SOTO', 'ANDREA'],
  ['VERA', 'ADAOS', 'PATRICIA'],
  ['HERMOSILLA', 'BARRIA', 'VERONICA'],
  ['PEREZ', 'GUTIERREZ', 'ALEJANDRA'],
  ['COLIHUEQUE', 'COLILEO', 'MARTA'],
  ['ACUM', 'NAIPIL', 'ROSA'],
  ['FARIAS', 'CATALAN', 'GABY'],
  ['MILLAN', 'GARCIA', 'MARY'],
  ['DIAZ', 'ROJAS', 'ROMANE']
] as const;

const filasPorPagina = 20;

interface Props {
  mes?: string;
  anio?: string;
  beneficiariosPersonalizados?: readonly (readonly [string, string, string])[];
  acto?: string;
  fechaOtorgamiento?: string;
}

export default function Seccion9_3_N_B_Sub_Fam2015_Mayo({
  mes = 'Mayo',
  anio = '2015',
  beneficiariosPersonalizados,
  acto = 'Decreto Alcaldicio N° 945 de 04.05.15',
  fechaOtorgamiento = '01.06.2015'
}: Props) {
  const [busqueda, setBusqueda] = useState('');
  const [pagina, setPagina] = useState(1);
  const nomina = beneficiariosPersonalizados ?? beneficiarios;
  const resultados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase('es');
    return nomina.filter(([paterno, materno, nombres]) =>
      `${paterno} ${materno} ${nombres}`.toLocaleLowerCase('es').includes(termino)
    );
  }, [busqueda, nomina]);
  const totalPaginas = Math.max(1, Math.ceil(resultados.length / filasPorPagina));
  const paginaActual = Math.min(pagina, totalPaginas);
  const filas = resultados.slice((paginaActual - 1) * filasPorPagina, paginaActual * filasPorPagina);

  return (
    <section aria-label={`Nómina de Subsidio Familiar de ${mes.toLowerCase()} ${anio}`} className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · {mes} {anio}</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{acto}</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">{fechaOtorgamiento}</td>
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
