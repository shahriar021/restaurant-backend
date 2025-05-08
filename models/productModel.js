const pool = require("../config/db");

exports.createProducts = async (pName, price) => {
  const [result] = await pool.execute(
    "insert into product (pName,price) value(?,?)",
    [pName, price]
  );
  return result;
};

exports.findProduct = async (pName) => {
  const [result] = await pool.execute("select * from product where pName=?", [
    pName,
  ]);
  return result;
};

exports.deleteProduct = async (id) => {
  console.log(id);
  const [result] = await pool.execute("delete from product where id =?", [id]);
  console.log(result);
  return result;
};
