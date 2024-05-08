fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    // const todos = products.every((product) => product.price < 1000);
    // console.log(todos);

    // const algunos = products.some((product) => product.price > 100);
    // console.log(algunos);

    // const listaPrecios = products.map((product) => {
    //   const precio = {
    //     title: product.title,
    //     price: product.price.toFixed(2),
    //   };

    //   return precio;
    // });

    // const listaPrecios = products.map((product) => {
    //   return {
    //     title: product.title,
    //     price: product.price.toFixed(2),
    //   };
    // });

    // console.table(listaPrecios);

    // const suma = products.reduce((acumulador, current) => {
    //   if (current.category == "jewelery") {
    //     return acumulador + current.rating.rate;
    //   }

    //   return acumulador;
    // }, 0);

    // const productosCategoriaJewelery = products.filter(
    //   (product) => product.category == "jewelery"
    // );

    // console.log(suma);
    // const rating = suma / productosCategoriaJewelery.length;
    // console.log(rating);

    // console.clear();

    // const nombres = products.sort((a, b) => {
    //   if (a.price < b.price) {
    //     return -1;
    //   } else if (a.price > b.price) {
    //     return 1;
    //   }

    //   return 0;
    // });
    // console.log(nombres.reverse());

    const newProducts = [
      {
        id: 30,
        title: "Producto 1",
        price: 7.95,
        description:
          "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: {
          rate: 4.5,
          count: 146,
        },
      },
      {
        id: 32,
        title: "Producto 3",
        price: 9.55,
        description:
          "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: {
          rate: 4.5,
          count: 146,
        },
      },
    ];

    const productosAplanados = [products, newProducts].flat();

    console.log(productosAplanados);
  });
