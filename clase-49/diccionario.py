# estudiante = {
#     "nombre": "Coki Argento",
#     "edad": 25,
#     "cursos": ["Node.js", "Python"],
#     "puntuacion": {
#         "Node.js": 9.2,
#         "Python": 8.5
#     }
# }

# print(estudiante["nombre"])
# print(estudiante["puntuacion"]["Python"])

from datos import productos

# print(productos[2]["nombre"])
# print(productos)

from tabulate import tabulate

headers = ["ID", "Nombre", "Importe", "Categoría"]
tabla = [[producto["id"], producto["nombre"], producto["importe"], producto["categoria"]] for producto in productos]
# print(tabla)

print(tabulate(tabla, headers=headers, tablefmt="github"))