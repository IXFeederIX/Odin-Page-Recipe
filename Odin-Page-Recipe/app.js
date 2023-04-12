////añadir formulario para recetas muevas + añadir lista de favoritos o otros para 
///otro tipo de recetas


////variables globales
let fondo = document.body;
descripcion = document.querySelector(".box-text");
menu = document.querySelector(".Menu-Comida");
alerta = document.querySelector(".Alert");
hideBar = document.querySelector(".hide")
articulos = document.querySelector(".articulos");
tabla = document.querySelector(".nutricion");
////// categoriaas + recetas
const menuDeComida = [{
  categoria: "<i class='fa-solid fa-burger icon-selector'></i> Hamburguesa",
  fondo: "url('burguer.jpeg')",
  descripcion: "\"Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, ​ aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. Fuera del ámbito de habla hispana, es más común encontrar la denominación estadounidense burger, acortamiento de hamburger\"",
  recetas:[
    {
      platillo: "Hamburguesa Sencilla",
      imagen: "imagenes-recetas/Hamburguesas/0.jpg",
      descripcion:"Una Hamburguesa Sencilla Muy Facil de Hacer, ¡Especialmente si eres una persona con poco Tiempo!", 
      valorNutricional: [
        { nombre: "Calorías", cantidad: 400 },
        { nombre: "Grasas", cantidad: 20 },
        { nombre: "Proteínas", cantidad: 25 },
        { nombre: "Carbohidratos", cantidad: 30 }
      ]
    },
    {
      platillo: "Hamburguesa de Pollo",
      imagen:"imagenes-recetas/Hamburguesas/1.png",
      descripcion: "¡Si no te gustan las carnes Rojas, esta Hamburguesa de Pollo te Dejara Alucinando!",
      valorNutricional: [
        { nombre: "Calorías", cantidad: 350 },
        { nombre: "Grasas", cantidad: 15 },
        { nombre: "Proteínas", cantidad: 20 },
        { nombre: "Carbohidratos", cantidad: 35 }
      ]
    },
{
  platillo: "Hamburguesa Vegana",
  imagen:"imagenes-recetas/Hamburguesas/2.png",
  descripcion: "¿Eres vegetariano?, ¡Te tenemos cubierto con esta increible Hamburguesa Vegetariana",
  valorNutricional: [
    { nombre: "Calorías", cantidad: 300 },
    { nombre: "Grasas", cantidad: 10 },
    { nombre: "Proteínas", cantidad: 15 },
    { nombre: "Carbohidratos", cantidad: 40 }
  ]
}
  ],
},
{
categoria: "<i class='fa-solid fa-pizza-slice icon-selector'></i> Pizza",
fondo:"url('pizza.jpg')",
descripcion:"\"La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que tradicionalmente se cubre con salsa de tomate y mozzarella y se hornea a alta temperatura en un horno de leña.\"",
recetas:[
  {
    platillo: "Pizza Napolitana",
    imagen:"imagenes-recetas/Pizza/0.png",
    descripcion: "Pizza Napolitana, un clasico en los restaurantes italianos ¿estas dispuesto a probar esta receta en tu casa?",
    valorNutricional: [
      { nombre: "Calorías", cantidad: 250 },
      { nombre: "Grasas", cantidad: 10 },
      { nombre: "Proteínas", cantidad: 12 },
      { nombre: "Carbohidratos", cantidad: 30 }
    ]
  },
  {
    platillo: "Pizza Hawaiana",
    imagen:"imagenes-recetas/Pizza/1.png",
    descripcion:"¡una Pizza con Piña! un gusto bastante peculiar para la gente que le gusta el contraste de sabores",
    valorNutricional: [
      { nombre: "Calorías", cantidad: 300 },
      { nombre: "Grasas", cantidad: 12 },
      { nombre: "Proteínas", cantidad: 10 },
      { nombre: "Carbohidratos", cantidad: 35 }
    ]
  },
  {
    platillo: "Pizza de Pepperoni",
    imagen:"imagenes-recetas/Pizza/2.png",
    descripcion:"Pepperoni, Combinando Varios Sabore atractivos, para el disguto de los amantes de la comida",
    valorNutricional: [
      { nombre: "Calorías", cantidad: 350 },
      { nombre: "Grasas", cantidad: 18 },
      { nombre: "Proteínas", cantidad: 14 },
      { nombre: "Carbohidratos", cantidad: 30 }
    ]
  }
],  

},
{
categoria: "<i class='fa-solid fa-wheat-awn icon-selector'></i> Pasta",
fondo: "url('pasta.jpg')",
descripcion:"\"La pasta es un conjunto de alimentos preparados con una masa cuyo ingrediente básico es la sémola, mezclada con agua, y a la cual se puede añadir sal, huevo u otros ingredientes, conformando un producto que generalmente se cuece en agua hirviendo.\"",
recetas:[
    {
      platillo:"Pasta Alfredo",
      imagen: "imagenes-recetas/Pasta/0.png",
      descripcion: "Pasta Alfredo: es un plato de fettuccine con mantequilla y queso parmesano. En su versión original no lleva más nada. Se hace muy rápido y es deliciosa.",
      valorNutricional: [
        { nombre: "Calorías", cantidad: 500 },
        { nombre: "Grasas", cantidad: 20 },
        { nombre: "Proteínas", cantidad: 12 },
        { nombre: "Carbohidratos", cantidad: 60 }
      ]
    },
    {
      platillo:"Pasta Italiana",
      imagen:"imagenes-recetas/Pasta/1.png",
      descripcion:"Una Receta Personalizada A nuestro gusto, para los amantes de la pasta, ¡No te decepcionaras!",
      valorNutricional: [
        { nombre: "Calorías", cantidad: 450 },
        { nombre: "Grasas", cantidad: 15 },
        { nombre: "Proteínas", cantidad: 10 },
        { nombre: "Carbohidratos", cantidad: 65 }
      ]
    },
    {
      platillo:"Pasta de Albondigas",
      imagen:"imagenes-recetas/Pasta/2.png",
      descripcion: "¡Una deliciosa combinación de pasta con albóndigas caseras en una salsa de tomate llena de sabor!",
      valorNutricional: [
        { nombre: "Calorías", cantidad: 550 },
        { nombre: "Grasas", cantidad: 25 },
        { nombre: "Proteínas", cantidad: 15 },
        { nombre: "Carbohidratos", cantidad: 50 }
      ]
    }
],

},
{
  categoria:"<i class='fa-solid fa-star icon-selector'></i>Favoritos",
  fondo:"url('logo.png')",
  descripcion:"En esta seccion puedes Añadir tus Recetas Favoritas :)",
  recetas:[] 
}
] 

function disableEnterKey(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}

  ////Cajas Contenedoras
  menuSeleccionado = document.querySelector(".Menu-Seleccionado")
  menuDeComida.forEach(comida => {
    const button = document.createElement("button")
    button.classList.add("Comida"); 
    button.innerHTML = comida.categoria; 
    menu.appendChild(button);
    button.setAttribute("onkeydown", "disableEnterKey(event)");
   
    
    button.addEventListener("click", () => {  
      hideBar.style.display = "block";
      descripcion.innerHTML = comida.descripcion;
      document.body.style.transition = "all 1s ease-in-out"; 
      document.body.style.backgroundImage = comida.fondo;
      alerta.classList.add("fadeOut")
setTimeout(() => {
  alerta.style.display ="none";
  menuSeleccionado.style.display = "flex";
  menuSeleccionado.innerHTML = ""; 
}, 1000);
  
comida.recetas.forEach(receta => {
        setTimeout(() => {

          hideBar.style.display = "none"
          const cajaDeMenu = document.createElement("div");
          cajaDeMenu.classList.add("menu-box");
        

          menuSeleccionado.appendChild(cajaDeMenu);
let previousCajaDeMenu = null;


document.querySelectorAll(".menu-box").forEach(cajaDeMenu => {
  cajaDeMenu.addEventListener("click", function() {
    if (previousCajaDeMenu) {
      previousCajaDeMenu.classList.remove("clicked");
      previousCajaDeMenu.style.removeProperty('transform');


    }
    hideBar.style.display = "flex"
    cajaDeMenu.classList.add("clicked");
    hideBar.style.display = "flex";
    cajaDeMenu.style.transform ="scale(1.1)"
    document.querySelectorAll(".articulos").forEach(articulo => {
      articulo.addEventListener("animationend",()=>{
        hideBar.style.display = "none";
        articulo.classList.remove("slideInLeft");
        hideBar.style.display = "none";
      
      })
      articulo.style.display = "block";
      articulo.classList.add("slideInLeft");
    const recetaTitulo = document.querySelector(".receta-titulo")
    previousCajaDeMenu = cajaDeMenu;
    recetaTitulo.innerText = "Informacion de " + previousCajaDeMenu.firstChild.innerText
      let imagenArticulo = document.querySelector(".imagen-articulo")
      imagenArticulo.src = previousCajaDeMenu.childNodes[1].src
     
      if(previousCajaDeMenu.childNodes[0].innerText === receta.platillo){
        tabla.innerText = ""
        receta.valorNutricional.forEach(valor=>{
    const valorLista = document.querySelector(".nutricion")
  
    const valores = document.createElement("li")
  
    valores.innerText = valor.nombre + ": " + valor.cantidad
    valorLista.appendChild(valores)
    valores.classList.add("lista-nutricional")
  })
 }
    });

  });
});
          const cajaTitulo = document.createElement("p");
          cajaTitulo.innerHTML = receta.platillo;
       cajaTitulo.classList.add("titulo")

       cajaDeMenu.appendChild(cajaTitulo);
         
          const cajaImagen = document.createElement("img")
         cajaImagen.src = receta.imagen
       cajaImagen.classList.add("imagen")
  
       const cajaDescripcion = document.createElement("p")
       cajaDescripcion.innerText = receta.descripcion
       cajaDescripcion.classList.add("descripcion")
          cajaDeMenu.appendChild(cajaImagen)
          cajaDeMenu.appendChild(cajaDescripcion)
        }, 1000);
        
      });
    });
    
  });
