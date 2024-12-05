from flask import jsonify, request
from app import app
from app.northwind import obtener_tabla

@app.route('/')
def index():
    return jsonify({"message": "Bienvenid@s al endpoint de Northwind."}), 200

@app.route('/products')
def get_products():
    products = obtener_tabla('products')

    id = request.args.get('id', None)

    # print(type(id))

    if id is not None:
        id = int(id)

        product = next((product for product in products if product['ProductID'] == id), None)
        
        # print(product)

        if product is None:
            return jsonify({"message": 'No existe el producto'}), 404
        
        return jsonify(product), 200

    return jsonify(products), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Ruta no disponible"}), 404