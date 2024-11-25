def limpiar_pantalla():
    import os
    if (os.system.__name__ == 'MacOS' or 'Linux'):
        os.system('clear') 
    else:
        os.system('cls')

def mostrar_lista():
    limpiar_pantalla()
    print(str(mi_lista))

# mi_lista = [1, 'Hola', True]
# print("Mi lista: " + str(mi_lista))

# mi_lista.append("Brasil")

# mi_lista.remove('Chile')

def agregar_elemento():
    nuevo_pais = input("🟢 Ingresa un nuevo país: ")
    mi_lista.append(nuevo_pais)
    mostrar_lista()

def quitar_elemento():
    a_quitar = input("Ingresa el país a quitar: ")
    if (a_quitar != ''):
        # quita un elemento de la lista por su nombre
        try:
            mi_lista.remove(a_quitar)
            mostrar_lista()
            print("🟡 Se quitó a " + a_quitar + " de la lista.")

        except ValueError:
            limpiar_pantalla()
            print("⛔️ No se encontró el país indicado:", a_quitar)
            
    else:
        limpiar_pantalla()
        print("⛔️ No se encontró el país indicado. " + a_quitar)

# print(len(mi_lista))

mi_lista = ['Argentina', 'Uruguay', 'Chile', 'Venezuela', 'Chile', 'Paraguay', 'Chile']

# mi_lista.insert(2, 'Brasil')
# index = input('Ingrese un indice: ')
# pais = mi_lista.pop(index)

# pais = mi_lista.pop(23)
# print(pais)

# index = mi_lista.index('Chile')

# mi_lista.sort(reverse=True)
# mi_lista.reverse()

# mi_lista.clear()

print(mi_lista)
# print(mi_lista.count('Chile'))


# fruits = ['apple', 'banana', 'cherry']

# cars = ['Ford', 'BMW', 'Volvo']

# fruits.extend(cars)

# print(fruits, cars)

def convertir_a_nro(num):
    try:
        int(num)
        return True
    except ValueError:
        return False
    
def quitar_elemento_por_id():
    a_quitar = input("Ingresa el ID del elemento a quitar: ")
    if (convertir_a_nro(a_quitar)):
        try:
            mi_lista.pop(int(a_quitar))
            mostrar_lista()
            print("🟡 Se quitó el ID " + a_quitar + " de la lista.")

        except ValueError:
            limpiar_pantalla()
            print("⛔️ No se encontró el ID indicado:", a_quitar)
        except:
            limpiar_pantalla()
            print("⛔️ El indice esta fuera de rango:", a_quitar)
    else:
        limpiar_pantalla()
        print("⛔️ Debes ingresar un ID válido.")

# quitar_elemento_por_id()

print(mi_lista[2:4])