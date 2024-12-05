from flask import jsonify, request
from app import app
from app.frutas import frutas

@app.route('/')
def index():
    return jsonify({"message": "Bienvenid@s al endpoint de Frutas."}), 200

# @app.route('/frutas')
# def ver_frutas():
#     if not frutas:
#         return jsonify({"error": "Error al obtener las frutas"}), 500

#     return jsonify(frutas), 200

@app.route('/frutas', methods=['GET'])
def ver_frutas():
    precio_param = request.args.get('importe', None)

    if not frutas:
        return jsonify({"error": "Error al obtener las frutas"}), 500
    
    if precio_param is not None:
        try:
            precio = float(precio_param)
        except ValueError:
            return jsonify({"error": "El valor del precio no es válido"}), 400

        fruta_exacta = next((fruta for fruta in frutas if fruta['importe'] == precio), None)

        if fruta_exacta is not None:
            return jsonify(fruta_exacta), 200
        
        return jsonify({"error": "No se ha encontrado un producto con ese precio"}), 404

    return jsonify(frutas), 200

@app.route('/frutas/<int:id>', methods=['GET'])
def ver_fruta_por_id(id):
    if not frutas:
        return jsonify({"error": "Error al obtener las frutas."}), 500

    fruta_encontrada = next((fruta for fruta in frutas if fruta['id'] == id), None)

    if fruta_encontrada:
        return jsonify(fruta_encontrada), 200
   
    return jsonify({"error": "Fruta no encontrada"}), 404

@app.route('/frutas/nombre/<nombre>', methods=['GET'])
def ver_frutas_por_nombre(nombre):
    if not frutas:
        return jsonify({"error": "Error al obtener las frutas."}), 500

    nombre = nombre.lower()

    frutas_filtradas = [fruta for fruta in frutas if nombre in fruta['nombre'].lower()]

    if not frutas_filtradas:
        return jsonify({"error": "No se encontraron Frutas"}), 404
    
    return jsonify(frutas_filtradas), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Ruta no disponible"}), 404