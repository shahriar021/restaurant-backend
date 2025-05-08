const pool = require("../config/db");

exports.createProducts = async (pName, price) => {
  const [result] = await pool.execute(
    "insert into product (pName,price) value(?,?)",
    [pName, price]
  );
  return result;
};
