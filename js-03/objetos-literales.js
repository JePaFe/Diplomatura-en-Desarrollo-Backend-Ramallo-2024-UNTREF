// let nombre = "Juan";
// let apellido = "Perez";
// let edad = 33;
// let admin = true;

// const usuario = {
//   nombre: "Juan",
//   apellido: "Perez",
//   edad: 33,
//   admin: true,
//   nombreCompleto() {
//     console.log(`${this.nombre} ${this.apellido}`);
//   },
// };

// const post = {
//   userId: 1,
//   id: 1,
//   title: "delectus aut autem",
//   completed: false,
// };

// usuario.nombreCompleto();

// usuario.nombre = "Juan Pablo";
// usuario.dni = 98765432;

// console.log(usuario);

// console.log(usuario.nombre);
// console.log(usuario["edad"]);

// ---

const productos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 3, nombre: "Producto 3", precio: 500, stock: 10 },
  { id: 6, nombre: "Producto 6", precio: 2500 },
];

for (let i = 0; i < productos.length; i++) {
  console.log(`${productos[i].nombre}, stock: ${productos[i].stock || 0}`);
}

const agregarProducto = (id, nombre) => {
  productos.push({ id, nombre });
  console.clear();
  console.table(productos);
};

agregarProducto(20, "Producto por parámetro");
