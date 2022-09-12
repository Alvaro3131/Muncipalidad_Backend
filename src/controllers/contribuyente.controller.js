import { pool } from "../database";
export const getContribuyente = async (req, res) => {
  pool.query("Select * from contribuyente;", function (err, result) {
    try {
      return res.status(200).json(result[0]);
    } catch (error) {
      return res.status(500).json("Error al listar contribuyente");
    }
  });
};

export const createContribuyente = async (req, res) => {
  const {
    P_TipoContibuyente,
    P_DescripcionCintribuyente,
    P_FechaResolucion,
    P_FechaAplicacion,
    P_FechaVencimiento,
    P_Referencia,
    P_Calle,
    P_ManzanaDomicilio,
    P_LoteDomicilio,
    P_KmDomicilio,
    P_Dpto,
    P_IdDistrito,
    P_IdTipoVia,

    P_NombreCompleto,
    P_Documento,
    P_TipoContribuyente,
    P_IdTipoDocumento,
    P_TipodePropiedad,
    P_PorcentajePropiedad,
    P_FechaAdquisicion,
    P_AreaTerreno_PropiaDeclarada,
    P_AreaTerreno_ComunDeclarada,
    P_PorcentajeBc,
    P_TerrenoMatriz,
    P_AreaTerreno_PropiaVerificada,
    P_AreaTerreno_ComunVerificada,

    P_Tipovia,
    P_Via,
    P_Numero,
    P_Km,
    P_Mz,
    P_Lote,
    P_TipoEdif,
    P_NumeroVia,
    P_TipoInt,
    P_Sublote,

    P_LinderoFrente,
    P_LinderoDerecho,
    P_LinderoIzquierda,
    P_LinderoFondo,
    P_Uso,
    P_Clacificacion,
    P_Frontis,
    P_Berma,

    P_TipoAgrupacion,
    P_NumeroPredio,
    P_Zona,
    P_Sector,
    P_Manzana,
    P_LoteCategoria,
    P_HabilitacionHurbana,
  } = req.body;
  const fileName = Date.now();
  const P_Codigo = `${fileName}`;
  pool.query(
    "CALL Registro(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
    [
      P_TipoContibuyente,
      P_DescripcionCintribuyente,
      P_FechaResolucion,
      P_FechaAplicacion,
      P_FechaVencimiento,
      P_Referencia,
      P_Calle,
      P_ManzanaDomicilio,
      P_LoteDomicilio,
      P_KmDomicilio,
      P_Dpto,
      P_IdDistrito,
      P_IdTipoVia,
      P_Codigo,
      P_NombreCompleto,
      P_Documento,
      P_TipoContribuyente,
      P_IdTipoDocumento,
      P_TipodePropiedad,
      P_PorcentajePropiedad,
      P_FechaAdquisicion,
      P_AreaTerreno_PropiaDeclarada,
      P_AreaTerreno_ComunDeclarada,
      P_PorcentajeBc,
      P_TerrenoMatriz,
      P_AreaTerreno_PropiaVerificada,
      P_AreaTerreno_ComunVerificada,
      P_Tipovia,
      P_Via,
      P_Numero,
      P_Km,
      P_Mz,
      P_Lote,
      P_TipoEdif,
      P_NumeroVia,
      P_TipoInt,
      P_Sublote,
      P_LinderoFrente,
      P_LinderoDerecho,
      P_LinderoIzquierda,
      P_LinderoFondo,
      P_Uso,
      P_Clacificacion,
      P_Frontis,
      P_Berma,
      P_TipoAgrupacion,
      P_NumeroPredio,
      P_Zona,
      P_Sector,
      P_Manzana,
      P_LoteCategoria,
      P_HabilitacionHurbana,
    ],
    function (err, result) {
      try {
        return res.status(200).json({
          message: "Contribuyente registrado correctamente",
        });
      } catch (error) {
        return res.status(500).json("Error al crear al Contribuyente");
      }
    }
  );
};
