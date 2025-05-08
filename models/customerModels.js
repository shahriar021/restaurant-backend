const pool = require("../config/db");

exports.createCustomer = async (name, email, password, cell) => {
  const [result] = await pool.execute(
    "insert into customer (name,password,cell,email) values (?,?,?,?)",
    [name, password, cell, email]
  );
  return result;
};
