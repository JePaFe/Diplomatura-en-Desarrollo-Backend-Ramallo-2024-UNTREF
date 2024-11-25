lenguajes = ["Python", "JavaScript", "Java", "C++", "Ruby", "Swift", "PHP", "Go", "Rust", "Kotlin"]

from tabulate import tabulate

tabla = [[indice + 1, lenguaje] for indice, lenguaje in enumerate(lenguajes)]

print(lenguajes)
print(tabulate(tabla, headers=["id", "Lenguaje"], tablefmt="github"))

# print(tabulate(lenguajes))