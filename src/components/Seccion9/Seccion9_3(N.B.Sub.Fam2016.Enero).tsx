import { useMemo, useState } from 'react';

const beneficiarios = [
  ['LOPEZ', 'COLIPAN', 'VICTORIA'],
  ['CARRASCO', 'CARRASCO', 'MIRNA'],
  ['SAENZ', 'TORRIANI', 'SUSAN'],
  ['PEREZ', 'CARRASCO', 'KESIA'],
  ['BELMAR', 'MANOSALVA', 'MONICA'],
  ['HUENULCHUREO', 'MARIN', 'CECILIA'],
  ['MANSILLA', 'REBOLLEDO', 'IVONNE'],
  ['ROJAS', 'NEIRA', 'JIMENA'],
  ['MINO', 'GRANDON', 'VIVIANA'],
  ['RUIZ', 'ROBLES', 'VALERIA'],
  ['CORREA', 'VARGAS', 'VICTORIA'],
  ['TORRES', 'GONZALEZ', 'KATHERYN'],
  ['GONZALEZ', 'HIDALGO', 'MARIA'],
  ['CORTEZ', 'CORTEZ', 'MARIA'],
  ['ALBORNOZ', 'MELO', 'PRISCILA'],
  ['GYLLING', 'ALVARADO', 'ESTEFANY'],
  ['TOLEDO', 'CHEQUEOLAO', 'CLAUDIA'],
  ['ADONES', 'BRAVO', 'NATHALIA'],
  ['CATRICURA', 'CURRIHUINCA', 'MARTA'],
  ['MINA', 'TORRES', 'DIANA'],
  ['BUSTOS', 'APABLAZA', 'NATALY'],
  ['VALENCIA', 'FIGUEROA', 'EVELYN'],
  ['PEDRERO', 'GAJARDO', 'KAREN'],
  ['GODOY', 'RAMIREZ', 'ESTER'],
  ['GUERRERO', 'GODOY', 'NADIA'],
  ['PINO', 'AVENDANO', 'CARLA'],
  ['FERNANDEZ', 'RUBIO', 'VERONICA'],
  ['REYES', 'OLAVE', 'JACQUELINE'],
  ['ARRIAZA', 'GAHONA', 'MONICA'],
  ['TRINCADO', 'ESPINOZA', 'GISELA'],
  ['MULATO', 'PAINECURA', 'MARIA'],
  ['CASTILLO', 'BASTIAS', 'PAMELA'],
  ['DONOSO', 'DROGUETT', 'MARTA'],
  ['GALVEZ', 'MIRANDA', 'JOHANNA'],
  ['DELGADO', 'OJAR', 'MALENA'],
  ['GARRIDO', 'GARRIDO', 'GLADYS'],
  ['OLIVARES', 'ARIAS', 'ANA'],
  ['FUENTES', 'CAYUL', 'ASTRID'],
  ['HEREDIA', 'RIOS', 'MARIA'],
  ['BURGOS', 'ROSEMBERG', 'YANINA'],
  ['HIDALGO', 'NAVARRO', 'DANIELA'],
  ['PEREZ', 'CASTILLO', 'SOLEDAD'],
  ['CHAVEZ', 'CASTRO', 'MARIA'],
  ['VARGAS', 'GUERRA', 'ELIANAELA'],
  ['SILVA', 'PEREZ', 'MARCELA'],
  ['ORELLANA', 'CASTRO', 'PAULA'],
  ['HERRERA', 'DEL ROSARIO', 'ELIZABETH'],
  ['GOMEZ', 'GATICA', 'TANIA'],
  ['AVILA', 'BARRERA', 'PRISCILLA'],
  ['SANDOVAL', 'HUENQUEO', 'XIMENA'],
  ['GONZALEZ', 'GONZALEZ', 'LORENA'],
  ['MORENO', 'ESPINOZA', 'NATHALY'],
  ['HORMAZABAL', 'SALGADO', 'KATHERINE'],
  ['OLIVARES', 'CASTILLO', 'TRIANA'],
  ['DAZA', 'LLEVUL', 'FRANCHESCA'],
  ['OJEDA', 'OJEDA', 'CLAUDIA'],
  ['PALMA', 'PAINEMAL', 'JESSICA'],
  ['FERRADA', 'RODRIGUEZ', 'KARINA'],
  ['MARCHANT', 'NAVARRETE', 'GENESIS'],
  ['BOZT', 'SALAS', 'VALESKA'],
  ['CALDERON', 'SANCHEZ', 'FERNANDA'],
  ['LANDSKRON', 'MOSCOSO', 'MARIA'],
  ['GONZALEZ', 'AGUILERA', 'MAGALI'],
  ['DIAZ', 'SARMIENTO', 'MARIBEL'],
  ['SANDOVAL', 'PINTO', 'MARIA'],
  ['DIAZ', 'QUIROGA', 'PATRICIA'],
  ['GUERRA', 'AROS', 'PRISCILA'],
  ['BOBADILLA', 'VERGARA', 'MIRIAM'],
  ['CARVAJAL', 'ARRIAGADA', 'PATRICIA'],
  ['TAPIA', 'CURIANTE', 'CAROLINA'],
  ['MILLAFIL', 'MILLAQUEO', 'LORENA'],
  ['SAGREDO', 'CARVAJAL', 'PRISCILA'],
  ['ROJAS', 'MUNOZ', 'SANDRA'],
  ['SILVA', 'OYARZO', 'MIREYA'],
  ['CISTERNA', 'YANEZ', 'CAROLINA'],
  ['BECERRA', 'LONCOMILLA', 'ANGELICA'],
  ['OLAVE', 'URRUTIA', 'FRANCHESCA'],
  ['DEL PINO', 'MALDONADO', 'EVELYN'],
  ['SANTIAGO', 'ALVARADO', 'SUGEYN'],
  ['DONOSO', 'PEREZ', 'MARIBEL'],
  ['CASTRO', 'LEAL', 'MARCIA'],
  ['RIVERA', 'CERDA', 'SOLANGE'],
  ['SALINAS', 'CARRASCO', 'DARLING'],
  ['SILVA', 'ESPINOZA', 'SCARLETT'],
  ['GOMEZ', 'BILCHE', 'PATRICIA'],
  ['FABRES', 'LEVICAN', 'XIMENA'],
  ['FAILLAL', 'COLINIR', 'ROSA'],
  ['HENRIQUEZ', 'SILVA', 'CYNTHIA'],
  ['ARAYA', 'VILLALOBOS', 'ARCI DALIA'],
  ['HERNANDEZ', 'AJUAD', 'LUCIA'],
  ['ARREDONDO', 'ARANGUIZ', 'LORETO'],
  ['ARAUS', 'ARREDONDO', 'CYNTHIA'],
  ['IZQUIERDO', 'MADARIAGA', 'JOPSSY'],
  ['LOPEZ', 'ALBORNOZ', 'JACQUELINE'],
  ['BASSO', 'PAVEZ', 'MACARENA'],
  ['NAMONCURA', 'ZAMORANO', 'JENNIFER'],
  ['ROJAS', 'ROJAS', 'LEYLA'],
  ['SANCHEZ', 'CHAVARRY DE TEL', 'ILILIANA'],
  ['TRONCOSO', 'BERNAL', 'BETZAIDA'],
  ['RIOS', 'MELO', 'ROSA'],
  ['ARAYA', 'CONTRERAS', 'SUSANA'],
  ['CASANOVA', 'ALARCON', 'ANGELICA'],
  ['MELLA', 'TRONCOSO', 'BLANCA'],
  ['VERGARA', 'SALINAS', 'JACQUELINE'],
  ['ARANGUIZ', 'VALDES', 'ANGELICA'],
  ['CHEUQUECOY', 'ANTILEF', 'LUZ'],
  ['MORA', 'CIFUENTES', 'NADIA'],
  ['JORQUERA', 'OLAVE', 'JENNY'],
  ['VILLANUEVA', 'REYES', 'XIMENA'],
  ['CANUMIR', 'MILLA', 'SANDRA'],
  ['MORENO', 'ANCAMIL', 'JAVIERA'],
  ['POZO', 'MORA', 'MARICEL'],
  ['QUERO', 'CASTRO', 'EVELYN'],
  ['AMPUERO', 'BELMAR', 'LUIS'],
  ['PEREZ', 'ARO', 'JENNIFFER'],
  ['GUTIERREZ', 'GUTIERREZ', 'CLAUDIA'],
  ['VASQUEZ', 'FUENTES', 'JIMENA'],
  ['CACERES', 'GALVEZ', 'VALERIA'],
  ['ALCEDO', 'ORTEGA', 'JAVIERA'],
  ['PALMA', 'FERNANDEZ', 'YISLEINE'],
  ['FERNANDEZ', 'RODRIGUEZ', 'DANTZA'],
  ['VILLANUEVA', 'BRAVO', 'GISSELLE'],
  ['LEIVA', 'BRAVO', 'PRISCILA'],
  ['OLIVARES', 'HORMAZABAL', 'SANDY'],
  ['BERNAL', 'PAREDES', 'MARIELA'],
  ['VARGAS', 'ROJAS', 'ISABEL'],
  ['CURIQUEO', 'MORALES', 'XIMENA'],
  ['OLGUIN', 'PIZARRO', 'LORENA'],
  ['ALVAREZ', 'LIRA', 'CONSTANZA'],
  ['LIPIAN', 'MACHUCA', 'DEBORA'],
  ['MARTINEZ', 'VERA', 'CLAUDIA'],
  ['PINERO', 'ALARCON', 'CATALINA'],
  ['ALVEAR', 'RODRIGUEZ', 'MARIELA'],
  ['GONZALEZ', 'LAGOS', 'YASNA'],
  ['PAZ', 'PEREZ', 'JESSICA'],
  ['VERDUGO', 'ZUNIGA', 'PAULINA'],
  ['CUEVAS', 'VALDEBENITO', 'NATALIA'],
  ['CAYUN', 'ANTICAN', 'DANIELA'],
  ['ZAMBRANO', 'DIAZ', 'INES'],
  ['ALMUNA', 'AREVALO', 'EMA'],
  ['FLORES', 'VENTURA', 'GREAS'],
  ['LANDAETA', 'FIGUEROA', 'MAYKA'],
  ['VILLARROEL', 'MEDINA', 'NICOLE'],
  ['MACHUCA', 'AVILA', 'MARTA'],
  ['MEDINA', 'ALARCON', 'PATRICIA'],
  ['CARRILLO', 'SANCHEZ', 'JENNIFFER'],
  ['ALARCON', 'CASTRO', 'MIRNA'],
  ['AYALA', 'URZUA', 'MONICA'],
  ['ARISMENDI', 'VASQUEZ', 'DALIA'],
  ['NAVARRO', 'TOBAR', 'JANET'],
  ['QUEZADA', 'BELLO', 'ISABEL'],
  ['DONOSO', 'SEPULVEDA', 'NANCY'],
  ['MANRIQUEZ', 'ARIAS', 'JACQUELINE'],
  ['GUERRERO', 'BLANCO', 'VIRGINIA'],
  ['MADRID', 'ROMAN', 'ELIZABETH'],
  ['SANDOVAL', 'JORQUERA', 'ELENA'],
  ['BUSTAMANTE', 'HARRASSOWIT', 'MARIA'],
  ['GONZALEZ', 'ESPINOZA', 'ANELEN'],
  ['GALAZ', 'SALVO', 'DIANE'],
  ['CHAVEZ', 'QUEZADA', 'JENNIFER'],
  ['MIRANDA', 'DEL RIO', 'JACQUELINE'],
  ['PACHECO', 'PONCE', 'ALEJANDRA'],
  ['MEJIAS', 'VARGAS', 'CAMILA'],
  ['ROJAS', 'HERNANDEZ', 'CONSTANZA'],
  ['FERNANDEZ', 'GONZALEZ', 'GENESIS'],
  ['HERRERA', 'RIQUELME', 'MARICZA'],
  ['GUTIERREZ', 'CASTILLO', 'CLAUDIA'],
  ['FABIAN', 'LAURENCIO', 'CONSUELO'],
  ['RODRIGUEZ', 'VEGA', 'LORENA'],
  ['CHAVEZ', 'JARA', 'MAGALY'],
  ['RIQUELME', 'OLIVARES', 'PAOLA'],
  ['CONEJEROS', 'OLAVE', 'PAOLA'],
  ['SEPULVEDA', 'VIVEROS', 'ROSA'],
  ['REYES', 'TORRES', 'JACQUELINE'],
  ['ROJAS', 'BASUALTO', 'ELIZABETH'],
  ['SANHUEZA', 'ECHEVERRIA', 'EMA'],
  ['PENA', 'LAGOS', 'NICOLE'],
  ['RIQUELME', 'JIMENEZ', 'TAMARA'],
  ['GONZALEZ', 'SALINAS', 'ANGELA'],
  ['PAILLAL', 'PAILLAL', 'VALERIA'],
  ['ROJAS', 'FUENTES', 'CAROLINA'],
  ['VILCHES', 'URRUTIA', 'JOCELYN'],
  ['HUENANTE', 'VALENZUELA', 'ANDREA'],
  ['MELINIR', 'ALLAPAN', 'PILAR'],
  ['PEREZ', 'NAHUEL', 'ALEJANDRA'],
  ['SAEZ', 'SAEZ', 'ANA'],
  ['DIAZ', 'ROJAS', 'ROMANE'],
  ['FUENTES', 'TORRES', 'KAREN'],
  ['SAAVEDRA', 'AGUILERA', 'JOCELYN'],
  ['POLANCO', 'ABRIGO', 'JOANNA'],
  ['ESCANDON', 'MATUS', 'ANTONIETA'],
  ['CARRASCO', 'PALMA', 'BARBARA'],
  ['GUALA', 'MUNOZ', 'NANCY'],
  ['GRUNEWALD', 'SALDIVIA', 'SHLOMIT'],
  ['CAMPOS', 'NUNEZ', 'CAROLINA'],
  ['CADILLO', 'AGURTO', 'ALICIA'],
  ['CASTILLO', 'RETAMAL', 'BLANCA'],
  ['MEDINA', 'VERA', 'LEONOR'],
  ['QUIROZ', 'CAMPOS', 'SUSANA']
] as const;

const filasPorPagina = 20;

export default function Seccion9_3_N_B_Sub_Fam2016_Enero() {
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
    <section aria-label="Nómina de Subsidio Familiar de enero 2016" className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h4 className="text-base font-semibold text-slate-900">Subsidio Familiar · Enero 2016</h4>
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
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">Decreto Alcaldicio N° 2727 del 01.12.15</td>
                <td className="border-b border-slate-100 px-3 py-2 text-slate-700">01.01.2016</td>
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
