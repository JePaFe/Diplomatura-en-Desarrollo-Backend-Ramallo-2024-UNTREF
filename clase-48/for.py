lenguajes = ["C", "C++", "C#", "Python", "GoLang", "JavaScript"]

# for lenguaje in lenguajes:
#     print(lenguaje)

# for indice, lenguaje in enumerate(lenguajes):
#     print(f"El indice {indice} contiene el lenguaje {lenguaje}")

# for num in range(10):
#     print('Numero: ' + str(num))

# for i in range(3):
#     print('Numero: ' + str(i))
# else: 
#     print('Else del for')

# cuadrados = [i ** 2 for i in range(5)]  # Crea una lista de cuadrados
# print(cuadrados)

# for item in lenguajes:
#     if (item == 'C#'):
#         continue

#     print(item)

for i in range(1, 11):
    # if (i % 2 == 1):
    #     pass

    if i == 3 or i == 6 or i == 7:
        continue

    print(i)

# def saludar(nombre):
#     pass

# saludar('Juan')

# modulo = 11 % 2
# print(modulo)