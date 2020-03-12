const productos = [
  {
    name: 'bota azul',
    type: 'bota',
    color: 'azul',
    img: 'images/bota-azul.jpg'
  },
  {
    name: 'bota negra',
    type: 'bota',
    color: 'negro',
    img: 'images/bota-negra.jpg'
  },
  {
    name: 'zapato azul',
    type: 'zapato',
    color: 'azul',
    img: 'images/zapato-azul.jpg'
  },
  {
    name: 'zapato negro',
    type: 'zapato',
    color: 'negro',
    img: 'images/zapato-negro.jpg'
  },
  {
    name: 'zapato rojo',
    type: 'zapato',
    color: 'rojo',
    img: 'images/zapato-rojo.jpg'
  }
];

const cardZapatos = document.querySelector('section');
const formularios = document.forms;
const formFiltro = formularios[0];
const inputEnter = document.getElementById('pressEnter');

let nuevoHTML = '';
let nuevoHTMLFiltro = '';
let inputText = '';
let productoFiltrado = [];

const codigoCard = () => {
  productos.forEach(producto => {
    nuevoHTML = nuevoHTML + `
      <div class='card'>
        <div class='cardImg'>
          <img src=${producto.img}> <alt=${producto.name}>
        </div>
        <div id='cardTitle'>
          <h2>${producto.name.toUpperCase()}</h2>
        </div>
      </div>
    `
  });
  cardZapatos.innerHTML = nuevoHTML;
};

const CodigoCardFiltro = () => {
  productoFiltrado.forEach(producto => {
    nuevoHTMLFiltro = nuevoHTMLFiltro + `
      <div class='card'>
        <div class='cardImg'>
          <img src=${producto.img}> <alt=${producto.name}>
        </div>
        <div id='cardTitle'>
          <h2>${producto.name.toUpperCase()}</h2>
        </div>
      </div>
    `
  });
  cardZapatos.innerHTML = nuevoHTMLFiltro;
};

codigoCard();

formFiltro.onsubmit = e => {

  inputText = '';
  productoFiltrado = [];
  cardZapatos.innerHTML = '';
  nuevoHTMLFiltro = '';
  
  e.preventDefault();

  inputEnter.onkeypress = e => {
    if(e.keyCode == 13) {
      inputText = document.getElementById('filtrado');
      inputText = inputText.value;
    };
  };

  inputText = document.getElementById('filtrado');
  inputText = inputText.value;

  productoFiltrado = productos.filter(producto => producto.color == inputText || producto.type == inputText); 

  if (!inputText) {
    codigoCard();
  } else {
    CodigoCardFiltro();
  };
};