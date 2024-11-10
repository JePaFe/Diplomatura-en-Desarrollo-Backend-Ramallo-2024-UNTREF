edad = input('Ingrese su edad: ')

if edad.isdigit() and int(edad) >= 18:
    print('Es mayor de edad')
elif not edad.isdigit():
    print('Ingrese un numero valido')
else:
    print('Es menor de edad')

# nombre = input('Ingrese su nombre: ')

# print(nombre.strip().lower())

# if nombre == 'Paul':
#     print('Hola', nombre)