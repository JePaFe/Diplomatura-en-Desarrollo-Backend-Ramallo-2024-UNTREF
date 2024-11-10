import os 
os.system('clear')

def vocales():
    texto = input('Ingrese un texto: ').strip().lower()

    if texto != '':
        contador = 0

        contador += texto.count('a')
        contador += texto.count('e')

        # print(texto.lower().count('e'))

        print('Cantidad de vocales:', contador)
    else:
        print('Ingrese un texto valido')

vocales()