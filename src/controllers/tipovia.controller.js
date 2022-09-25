import { pool } from "../database";
export const getTiposVia = async (req, res) => {
  pool.query("select * from tipovia;", function (err, result) {
    try {
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json("Error al listar tipovia");
    }
  });
};
