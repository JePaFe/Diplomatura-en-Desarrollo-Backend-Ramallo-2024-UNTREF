const Employee = require("../models/employee");

const index = async (req, res) => {
  try {
    // await sequelize.authenticate();
    // await Employee.sync();
    const allEmployees = await Employee.findAll();
    const allEmployeesData = allEmployees.map(
      (employee) => employee.dataValues
    );
    res.status(200).json(allEmployeesData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
};

module.exports = {
  index,
};
