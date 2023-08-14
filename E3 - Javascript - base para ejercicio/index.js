// DOM
const getForm = document.getElementById('form');
const getNumber = document.getElementById('numero');
const mostrarBusqueda = document.getElementById('resultado');
const mostrarBusquedaVacia = document.getElementById('resultado-vacio');

const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Estructura que muestra el resultado.
const renderHtml = (pizza) => {
  return `
  <div class='cont-img'>
    <img src='${pizza.imagen}' class='pizza-img' />
  </div>
  <div class='cont-info-pizza'>
    <div class='cont-titulo'>
      <h2 class='titulo-pizza'>${pizza.nombre}</h2>
    </div>
    <div class='cont-ingredientes'>
      ${pizza.ingredientes.join(', ')}
    </div>
    <div class='cont-precio'>
      ${pizza.precio}
    </div>
    
  </div>
  
  `
}

// Función para manejar el submit del formulario
const submitHandler = (e) => {
  e.preventDefault();

  const userInput = parseInt(getNumber.value);

  const buscarPizza = pizzas.find(pizza => pizza.id === userInput);

  // Usuario ingreso mal el valor
  if (getNumber.value === '' || getNumber.value == 0) {

    mostrarBusquedaVacia.style.display = 'flex';

    let vacio = mostrarBusquedaVacia.innerHTML = `Ingrese un ID válido por favor (Número del 1 al 5).`;

    getNumber.value = '';

    return vacio;

  } else if (buscarPizza) { // Valor Correcto de usuario

    // Guardamos resultado en el localStorage
    localStorage.setItem('ultimaPizzaBuscada', JSON.stringify(buscarPizza));

    mostrarBusqueda.style.display = 'flex';

    mostrarBusqueda.innerHTML = renderHtml(buscarPizza);

    getNumber.value = '';

  }
  
};

// Funcion para mostrar la última pizza buscada al recargar la página
const mostrarUltimaPizzaBuscada = () => {
  const ultimaPizzaBuscada = JSON.parse(localStorage.getItem('ultimaPizzaBuscada'));
  if (ultimaPizzaBuscada) {
    mostrarBusqueda.style.display = 'flex';
    mostrarBusqueda.innerHTML = renderHtml(ultimaPizzaBuscada);
  }
};

// Inicia el input
const init = () => {
  getForm.addEventListener('submit', submitHandler);
  
  // Mostrar la última pizza buscada al cargar página
  mostrarUltimaPizzaBuscada();
  
};
init();

