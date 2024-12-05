from flask import render_template, jsonify
from app import app
from app.frutas import lista_frutas

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/saludar/<nombre>')
# def saludar(nombre):
#     return f"Hola, {nombre}"

@app.route('/saludar/<nombre>')
def saludar(nombre):
    return render_template('saludar.html', nombre=nombre)

@app.route('/frutas')
def frutas():
    return jsonify(lista_frutas), 200

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Ruta no disponible"}), 404