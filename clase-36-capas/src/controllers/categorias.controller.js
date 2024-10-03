const Category = require("../models/category");

const destroy = async (req, res) => {
  const { CategoryID } = req.params;

  try {
    const categoryToDelete = await Category.findByPk(CategoryID);
    if (!categoryToDelete) {
      return res.status(404).json({ error: "Categoría no encontrada." });
    }

    // update Products sin categoría

    await categoryToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      description: error.message,
    });
  }
};

module.exports = {
  destroy,
};
