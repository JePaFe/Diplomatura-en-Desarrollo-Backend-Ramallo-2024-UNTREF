const model = require("../models/user.model");

const register = async (req, res) => {
  //   console.log(req.body);

  const data = { email: req.body.email, password: req.body.password };

  try {
    const user = await model.store(data);
    console.log("User", user);

    res.status(201).json(user);
  } catch (error) {
    // console.log(error, error.status, error.message);
    // res.status(500).json({ code: error.code, msg: error.errmsg });
    return res.status(error.status || 500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  //   console.log(req.body);

  const data = { email: req.body.email, password: req.body.password };

  try {
    const user = await model.login(data);

    res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = {
  register,
  login,
};
