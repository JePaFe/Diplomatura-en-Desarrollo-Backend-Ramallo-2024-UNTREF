grado = ("estudiante", "Recibido", "Maestría", "Doctorado", "PosDoc")
taskStatuses = ("no iniciada", "en proceso", "finalizada")

# print(taskStatuses[1:3])

# print(len(taskStatuses))

# mi_tupla = grado + taskStatuses
# print(mi_tupla)

paises = ('Argentina', 'Uruguay', 'Chile')

mi_lista = list(paises)
mi_lista.append('Brasil')

print(mi_lista)

mi_tupla = tuple(mi_lista)

print(mi_tupla)