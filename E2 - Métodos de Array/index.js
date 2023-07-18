const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// BUSCADOR ID PAR
const buscarIdPar = (arreglo) => {
  for (i = 0; i < arreglo.length; i++) {
    if(arreglo[i].id % 2 != 0) {
      console.log(arreglo[i].nombre);
    }
  }
}

// PIZZAS CON VALOR MENOR A %600
const MenorSeiscientos = (arreglo) => {
  for(i = 0; i < arreglo.length; i++) {
    if(arreglo[i].precio <= 600) {
      console.log(`${arreglo[i].nombre}. Precio: $${arreglo[i].precio}`);
    }
  }
}

// LISTADO DE PIZZAS Y PRECIO
const mostrarPizzas = (arreglo) => {
  for (i = 0; i < arreglo.length; i++) {
    console.log(`${arreglo[i].nombre}: $${arreglo[i].precio}.`);
  }
}

// INGREDIENTES
const mostrarIngredientes = (arreglo) => {
  for (i = 0; i < arreglo.length; i++) {
    console.log(`Los ingredientes de nuestra ${arreglo[i].nombre} son: `);

    for (j = 0; j < arreglo[i].ingredientes.length; j++) {
      console.log(`${arreglo[i].ingredientes[j]}`);
    }

    console.log('\n');
  }
}

console.log(`%cLas pizzas con un ID par son las siguientes: `,'color: rgb(45, 187, 187)');
buscarIdPar(pizzas);

console.log(`\n--------------------------------------------------------\n\n`);

console.log(`%cLas pizzas con un precio menor a $600 las siguientes: `,'color: rgb(45, 187, 187)');
MenorSeiscientos(pizzas);

console.log(`\n--------------------------------------------------------\n\n`);

console.log(`%cListado de precios de NucbaPizzas: `,'color: rgb(45, 187, 187)');
mostrarPizzas(pizzas);

console.log(`\n--------------------------------------------------------\n\n`);

console.log(`%cUsamos estos ingredientes para nuestras pizzas: `,'color: rgb(45, 187, 187)');
mostrarIngredientes(pizzas);