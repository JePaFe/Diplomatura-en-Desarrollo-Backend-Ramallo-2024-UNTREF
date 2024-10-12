const { Order, Product, OrderProduct } = require("../models/associations");

exports.createOrder = async (req, res) => {
  try {
    const { orderDate, status, products } = req.body;

    // Crear la orden
    const order = await Order.create({
      orderDate,
      status,
    });

    // Relacionar los productos con la orden
    if (products && products.length > 0) {
      const orderProducts = products.map((product) => ({
        orderId: order.id,
        productId: product.id,
        quantity: product.quantity,
      }));
      await OrderProduct.bulkCreate(orderProducts);
    }

    // Obtener la orden con los productos relacionados
    const createdOrder = await Order.findOne({
      where: { id: order.id },
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: ["quantity"] },
        },
      ],
    });

    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: ["quantity"] },
        },
      ],
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: ["quantity"] },
        },
      ],
    });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { orderDate, status, products } = req.body;
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    await order.update({ orderDate, status });

    // Actualizar las relaciones en la tabla intermedia
    if (products && products.length > 0) {
      await OrderProduct.destroy({ where: { orderId: order.id } });
      const orderProducts = products.map((product) => ({
        orderId: order.id,
        productId: product.id,
        quantity: product.quantity,
      }));
      await OrderProduct.bulkCreate(orderProducts);
    }

    // Obtener la orden actualizada con los productos relacionados
    const updatedOrder = await Order.findOne({
      where: { id: order.id },
      include: [
        {
          model: Product,
          as: "products",
          through: { attributes: ["quantity"] },
        },
      ],
    });

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    await order.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
