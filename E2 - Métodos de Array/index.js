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

      
// BUSCADOR ID IMPAR
const filtroId = pizzas.filter(x => {return x.id % 2 != 0 });

const mostrarId = (filtro) => {
  for (i = 0; i < filtro.length; i++) {
    console.log(filtro[i].nombre);
  }
}

// PIZZAS CON VALOR MENOR A %600
const buscarMenorValor = pizzas.filter(x => {return x.precio <= 600});

const mostrarMenorValor = (arreglo) => {
  for (i = 0; i < arreglo.length; i++) {
    console.log(`${arreglo[i].nombre}. Precio: $${arreglo[i].precio}`);
  }
}

// LISTADO DE PIZZAS Y PRECIO

const ListadoPizzas = pizzas.map(pizza => 
  `${pizza.nombre}: $${pizza.precio}`
)

const mostrarListado = (arreglo) => {
  for (i = 0; i < arreglo.length; i++) {
    console.log(`${arreglo[i]}`);
  }
}

// INGREDIENTES
const mostrarIngredientes = (arreglo) => {
  arreglo.forEach(pizza => {
    console.log(`Los ingredientes de nuestra ${pizza.nombre} son: `);
    pizza.ingredientes.forEach(ingrediente => {
      console.log(ingrediente);
    });
    console.log('\n');
  });
};

console.log(`%cLas pizzas con un ID par son las siguientes: `,'color: rgb(45, 187, 187)');
mostrarId(filtroId);

console.log(`\n--------------------------------------------------------\n\n`);

console.log(`%cLas pizzas con un precio menor a $600 las siguientes: `,'color: rgb(45, 187, 187)');
mostrarMenorValor(buscarMenorValor);

console.log(`\n--------------------------------------------------------\n\n`);

console.log(`%cListado de precios de NucbaPizzas: `,'color: rgb(45, 187, 187)');
mostrarListado(ListadoPizzas);

console.log(`\n--------------------------------------------------------\n\n`);

console.log(`%cUsamos estos ingredientes para nuestras pizzas: `,'color: rgb(45, 187, 187)');
mostrarIngredientes(pizzas);