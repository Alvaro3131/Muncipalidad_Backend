import { pool } from "../database";
const helpers = require("../libs/helpers");
export const getContribuyente = async (req, res) => {
  const pass = await helpers.encryptPassword("josue");
  console.log(pass);

  pool.query(
    "select contribuyente.codigo, contribuyente.Nombre_Completo_razonsocial, contribuyente.numeroDoc, predio.manzana_cat from contribuyente left join predio on contribuyente.codigo=predio.Contribuyente_codigo where contribuyente.estado=1;",
    function (err, result) {
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar contribuyente");
      }
    }
  );
};
export const buscarContribuyente = async (req, res) => {
  const { codigo } = req.body;
  pool.query("call BUSCAR_CONTRIBUYENTE(?);", [codigo], function (err, result) {
    try {
      return res.status(200).json(result[0]);
    } catch (error) {
      return res.status(500).json("Error al buscar contribuyente");
    }
  });
};
export const deleteContribuyente = async (req, res) => {
  const { codigo } = req.body;
  pool.query(
    "update contribuyente set estado=0 where codigo=?;",
    [codigo],
    function (err, result) {
      try {
        return res.status(200).json("Contribuyente eliminado logicamente");
      } catch (error) {
        return res.status(500).json("Error al buscar contribuyente");
      }
    }
  );
};

export const createContribuyente = async (req, res) => {
  const {
    P_InefactoPensionista,
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
    P_Numerodomicilio,
    P_Int,
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
    "CALL Registro(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
    [
      P_InefactoPensionista,
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
      P_Numerodomicilio,
      P_Int,
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
