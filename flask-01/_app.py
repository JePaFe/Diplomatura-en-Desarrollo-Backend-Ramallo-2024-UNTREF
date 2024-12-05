from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/saludar/<nombre>')
# def saludar(nombre):
#     return f"Hola, {nombre}"

@app.route('/saludar/<nombre>')
def saludar(nombre):
    return render_template('saludar.html', nombre=nombre)

if __name__ == '__main__':
    app.run(debug=True)