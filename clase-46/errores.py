# def normalizar_nombre(texto):
#     if len(texto.strip()) > 0:
#         return texto.strip().lower()
    
# try:
#     nombre = normalizar_nombre("   JuAN PeReZ   ")
#     print(nombre)

#     nombre = normalizar_nombre()
#     print(nombre)
# except:
#     print('El parámetro es incorrecto')

# def dividir(num1, num2):
#     return num1 / num2

# try:
#     dividir(10, 0)
# except ZeroDivisionError:
#     print('Division por cero')
# except:
#     print('Error')
# else:
#     print('Sin error')
# finally:
#     print('Siempre se ejecuta')


def dividir_numeros(dividendo, divisor):
    try:
        resultado = dividendo / divisor
        return resultado
    except ZeroDivisionError:
        raise ValueError("⛔️ Error: División por cero no permitida.")
    except TypeError:
        raise ValueError("⛔️ Error: Los valores deben ser numéricos.")

# Ejecutamos la función
try:
    num1 = float(input("Ingresa el dividendo: "))
    num2 = float(input("Ingresa el divisor: "))
    resultado = dividir_numeros(num1, num2)
    print("✅ El resultado de la división es:", resultado)

except ValueError as error:
    print("Error de valor: " + str(error))
except KeyboardInterrupt:
    print("🟡 Operación interrumpida por el usuario.")