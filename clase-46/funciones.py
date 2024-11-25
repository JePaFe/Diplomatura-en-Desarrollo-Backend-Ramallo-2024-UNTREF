# def saludar():
#     print('Hola')
#     print('...')

# saludar()

# def sumar(num1, num2):
#     if type(num1) == int and type(num2) == int:
#         suma = num1 + num2
#         print('La suma es: ' + str(suma))
#     else:
#         print('Los parámetros tiene que ser numero')

# sumar(3, 2)
# sumar(3, '9')

def normalizar_nombre(texto):
    if len(texto.strip()) > 0:
        return texto.strip().lower()
    # else:
    #     return 'Ingrese un nombre'

nombre = normalizar_nombre("   JuAN PeReZ   ")
print(nombre)

nombre = normalizar_nombre("   ")
print(nombre)
