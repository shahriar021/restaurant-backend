const pool = require("../config/db");

exports.createUser = async (full_name, email, password, mobile) => {
  const [result] = await pool.execute(
    "insert into user (full_name,email,password,mobile) values (?,?,?,?)",
    [full_name, email, password, mobile]
  );
  return result;
};

exports.findUserByEmail = async (email) => {
  const [result] = await pool.execute(`select * from user where email=?`, [
    email,
  ]);
  return result;
};
