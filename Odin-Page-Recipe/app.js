/// cambia el fondo cuando seleccionas un elemento
let fondo = document.body;
descripcion = document.querySelector(".box-text");
menu = document.querySelector(".Menu-Comida");

  menu.childNodes.forEach(element => {
    element.addEventListener("mouseover",(e)=>{
        fondo.style.transition = "all 1s";
        fondo.style.transitionDelay = "1200ms";
        fondo.style.backgroundImage = "url('burguer.jpeg')";
        descripcion.textContent = "\"Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, ​ aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. Fuera del ámbito de habla hispana, es más común encontrar la denominación estadounidense burger, acortamiento de hamburger\"";
   if(element.matches(".op2")){
        fondo.style.backgroundImage = "url('pizza.jpg')";
        descripcion.textContent = "\"La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que tradicionalmente se cubre con salsa de tomate y mozzarella y se hornea a alta temperatura en un horno de leña.\"";
   }else if(element.matches(".op3")){
    fondo.style.backgroundImage = "url('pasta.jpg')";
    descripcion.textContent = "\"La pasta es un conjunto de alimentos preparados con una masa cuyo ingrediente básico es la sémola, mezclada con agua, y a la cual se puede añadir sal, huevo u otros ingredientes, conformando un producto que generalmente se cuece en agua hirviendo.\"";
   }
    })
}); 
