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
ingredientes = document.querySelector(".lista-ingredientes")
receta  = document.querySelector(".recetaTexto")
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
        { nombre: "Grasas", cantidad: "20g" },
        { nombre: "Proteínas", cantidad: "25gr" },
        { nombre: "Carbohidratos", cantidad: "30g" }
      ],
      ingredientes:[
          {lista: '500 gramos de carne molida de res'},
          {lista: '1 cebolla pequeña picada finamente'},
          {lista: '1 huevo'},
          {lista: '1/2 taza de pan rallado'},
          {lista: '1 cucharadita de sal'},
          {lista: '1/2 cucharadita de pimienta negra molida'},
          {lista: '4 panes de hamburguesa'},
          {lista: 'Lechuga'},
          {lista: 'Tomate'},
          {lista: 'Cebolla y otros aderezos al gusto'}
      ],
    contenido:[
      'En un tazón grande, mezcla la carne molida, la cebolla picada, el huevo, el pan rallado, la sal y la pimienta negra molida. Mezcla todo bien con las manos hasta que estén bien combinados.',
    'Divide la mezcla de carne en cuatro partes iguales y forma cada una en una bola. Presiona cada bola para formar una hamburguesa plana y redonda.',
    'Calienta una sartén grande o una parrilla a fuego medio-alto. Añade las hamburguesas a la sartén o parrilla y cocínalas durante 3-4 minutos por cada lado, o hasta que estén doradas y bien cocidas.',
    'Mientras tanto, tuesta los panes de hamburguesa en una tostadora o en el horno.',
    'Cuando las hamburguesas estén cocidas, colócalas en los panes tostados y añade la lechuga, el tomate, la cebolla y cualquier otro aderezo que desees.',
    '¡Y ya está! Una deliciosa hamburguesa sencilla lista para disfrutar.'
    ]
        },
    {
      platillo: "Hamburguesa de Pollo",
      imagen:"imagenes-recetas/Hamburguesas/1.png",
      descripcion: "¡Si no te gustan las carnes Rojas, esta Hamburguesa de Pollo te Dejara Alucinando!",
      valorNutricional: [
        { nombre: "Calorías", cantidad: 350 },
        { nombre: "Grasas", cantidad: "15g" },
        { nombre: "Proteínas", cantidad: "20gr" },
        { nombre: "Carbohidratos", cantidad: "35g" }
      ],
      ingredientes:[
        {lista: '500 gramos de carne molida de pollo'},
        {lista: '1/2 taza de pan rallado'},
        {lista: '1 cebolla pequeña, picada finamente'},
        {lista: '1 cucharada de perejil fresco picado'},
        {lista: '1 cucharadita de páprika'},
        {lista: '1/2 cucharadita de ajo en polvo'},
        {lista: '1/2 cucharadita de sal'},
        {lista: '1/4 cucharadita de pimienta negra'},
        {lista: '4 panes de hamburguesa'},
        {lista: 'Lechuga'},
        {lista: 'Tomate'},
        {lista: 'Cualquier otro aderezo deseado'}
      ],
      contenido:[
        'En un tazón grande, mezcla la carne molida de pollo, el pan rallado, la cebolla, el perejil, la páprika, el ajo en polvo, la sal y la pimienta negra hasta que estén bien combinados.',
        'Divide la mezcla en cuatro porciones iguales y forma cada una en una hamburguesa.',
        'Calienta una sartén grande a fuego medio-alto. Añade las hamburguesas de pollo a la sartén y cocínalas durante 5-6 minutos por cada lado, o hasta que estén completamente cocidas.',
        'Tuesta los panes de hamburguesa en una tostadora o en el horno.',
        'Arma las hamburguesas colocando las hamburguesas de pollo en los panes inferiores, seguidas de lechuga, tomate y cualquier otro aderezo deseado. Cubre con los panes superiores y sirve inmediatamente.'
      ]
    },
{
  platillo: "Hamburguesa Vegana",
  imagen:"imagenes-recetas/Hamburguesas/2.png",
  descripcion: "¿Eres vegetariano?, ¡Te tenemos cubierto con esta increible Hamburguesa Vegetariana",
  valorNutricional: [
    { nombre: "Calorías", cantidad: 300 },
    { nombre: "Grasas", cantidad: "10g" },
    { nombre: "Proteínas", cantidad: "15gr" },
    { nombre: "Carbohidratos", cantidad: "40g" }
  ],
  ingredientes:[
    {lista: '1 lata de frijoles negros, escurridos y enjuagados'},
    {lista: '1/2 cebolla picada'},
    {lista: '1/2 taza de pan rallado'},
    {lista: '1/4 taza de harina de garbanzo'},
    {lista: '1 cucharadita de comino molido'},
    {lista: '1/2 cucharadita de sal'},
    {lista: '1/4 cucharadita de pimienta negra molida'},
    {lista: '1/2 taza de zanahoria rallada'},
    {lista: '1/2 taza de espinaca fresca picada'},
    {lista: '1 diente de ajo picado'},
    {lista: '4 panes de hamburguesa'},
    {lista: 'Lechuga'},
    {lista: 'Tomate'},
    {lista: 'Cualquier otro aderezo deseado'}
  ],
    contenido:['En un tazón grande, aplasta los frijoles negros con un tenedor.',
'Agrega la cebolla picada, el pan rallado, la harina de garbanzo, el comino, la sal y la pimienta negra. Mezcla bien.',
'Agrega la zanahoria rallada, la espinaca picada y el ajo. Mezcla bien hasta que todos los ingredientes estén combinados.',
'Divide la mezcla en cuatro partes iguales y forma cada una en una hamburguesa.',
'Calienta una sartén grande a fuego medio-alto. Añade las hamburguesas de frijoles negros a la sartén y cocínalas durante 4-5 minutos por cada lado, o hasta que estén doradas y bien cocidas.',
'Tuesta los panes de hamburguesa en una tostadora o en el horno.',
'Arma las hamburguesas colocando las hamburguesas de frijoles negros en los panes inferiores, seguidas de lechuga, tomate y cualquier otro aderezo deseado. Cubre con los panes superiores y sirve inmediatamente.'
],
  },
  
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
      { nombre: "Calorías", cantidad: 250},
      { nombre: "Grasas", cantidad: "10g" },
      { nombre: "Proteínas", cantidad: "12g" },
      { nombre: "Carbohidratos", cantidad: "30g" }
    ],
    ingredientes:[
{lista:'500 gramos de harina de trigo'},
{lista:'325 ml de agua'},
{lista:'10 gramos de levadura fresca'},
{lista:'10 gramos de sal'},
{lista:'1 cucharada de aceite de oliva'},
{lista:'400 gramos de tomate triturado'},
{lista:'200 gramos de mozzarella'},
{lista:'Unas hojas de albahaca fresca'},
{lista:'Sal y pimienta negra recién molida'}
    ],
    contenido:[
        'En un bol grande, mezcla la harina y la sal. Agrega el agua tibia y la levadura fresca desmenuzada. Mezcla todo con una cuchara de madera hasta que empiece a formarse una masa.',
        'Amasa la masa sobre una superficie enharinada durante unos 10 minutos, hasta que quede suave y elástica. Coloca la masa en un bol ligeramente engrasado, cúbrelo con un paño húmedo y déjalo reposar durante al menos una hora en un lugar cálido y sin corrientes de aire.',
        'Precalienta el horno a 250 grados Celsius. Coloca una bandeja de horno en el horno para que se caliente también.',
        'Divide la masa en dos partes iguales. Estira cada una de las partes con un rodillo hasta que quede fina (alrededor de medio centímetro de grosor). Coloca cada base de pizza sobre papel de horno.',
        'Extiende el tomate triturado sobre cada base de pizza, asegurándote de que quede bien repartido. Agrega la mozzarella cortada en trozos pequeños y las hojas de albahaca fresca. Salpimienta al gusto.',
        'Saca la bandeja de horno caliente del horno y coloca una base de pizza sobre ella. Hornea durante unos 10-15 minutos o hasta que la base esté dorada y la mozzarella se haya derretido. Repite con la otra pizza.',
        'Sirve caliente y disfruta de tu deliciosa pizza napolitana. ¡Buen provecho!',
      ],
  },
  {
    platillo: "Pizza Hawaiana",
    imagen:"imagenes-recetas/Pizza/1.png",
    descripcion:"¡una Pizza con Piña! un gusto bastante peculiar para la gente que le gusta el contraste de sabores",
    valorNutricional: [
      { nombre: "Calorías", cantidad: 300 },
      { nombre: "Grasas", cantidad: "12g" },
      { nombre: "Proteínas", cantidad: "10gr" },
      { nombre: "Carbohidratos", cantidad: "35g" }
    ],
    ingredientes:[
      { lista: '500 gramos de harina de trigo'},
      { lista: '1 cucharadita de sal' },
      { lista: '325 ml de agua tibia'},
      { lista: '7 gramos de levadura fresca' },
      { lista: '400 gramos de tomate triturado'},
      { lista: '400 gramos de mozzarella fresca'},
      { lista: '150 gramos de jamón'},
      { lista: '150 gramos de piña en conserva'},
      { lista: 'orégano al gusto' },
    ],
    contenido:[
      'En un bol grande, mezcla la harina y la sal. Agrega el agua tibia y la levadura fresca desmenuzada. Mezcla todo con una cuchara de madera hasta que empiece a formarse una masa.',
      'Amasa la masa sobre una superficie enharinada durante unos 10 minutos, hasta que quede suave y elástica. Coloca la masa en un bol ligeramente engrasado, cúbrelo con un paño húmedo y déjalo reposar durante al menos una hora en un lugar cálido y sin corrientes de aire.',
      'Precalienta el horno a 250 grados Celsius. Coloca una bandeja de horno en el horno para que se caliente también.',
      'Divide la masa en dos partes iguales. Estira cada una de las partes con un rodillo hasta que quede fina (alrededor de medio centímetro de grosor). Coloca cada base de pizza sobre papel de horno.',
      'Extiende el tomate triturado sobre cada base de pizza, asegurándote de que quede bien repartido. Agrega el jamón y la piña en trozos pequeños. Añade la mozzarella cortada en trozos pequeños y espolvorea con orégano.',
      'Saca la bandeja de horno caliente del horno y coloca una base de pizza sobre ella. Hornea durante unos 10-15 minutos o hasta que la base esté dorada y la mozzarella se haya derretido. Repite con la otra pizza.',
      'Sirve caliente y disfruta de tu deliciosa pizza hawaiana. ¡Buen provecho!',
    ]
  },
  {
    platillo: "Pizza de Pepperoni",
    imagen:"imagenes-recetas/Pizza/2.png",
    descripcion:"Pepperoni, Combinando Varios Sabore atractivos, para el disguto de los amantes de la comida",
    valorNutricional: [
      { nombre: "Calorías", cantidad: 350 },
      { nombre: "Grasas", cantidad: "18g" },
      { nombre: "Proteínas", cantidad: "14gr" },
      { nombre: "Carbohidratos", cantidad: "30g" }
    ],
    ingredientes:[
  {lista:'500 gramos de masa para pizza'},
  {lista:'1 taza de salsa de tomate'},
  {lista:'2 tazas de queso mozzarella rallado'},
  {lista:'100 gramos de pepperoni en rodajas'},
  {lista:'chile jalapeño en rodajas (sin semillas si lo prefieres menos picante)'},
  {lista:'1 tomate grande maduro picado'},
  {lista:'1 cucharadita de orégano seco'},
  {lista:'Hojas de albahaca fresca para decorar (opcional)'}
    ],
    contenido:[
      'En un bol grande, mezcla la harina y la sal. Agrega el agua tibia y la levadura fresca desmenuzada. Mezcla todo con una cuchara de madera hasta que empiece a formarse una masa.',
      'Amasa la masa sobre una superficie enharinada durante unos 10 minutos, hasta que quede suave y elástica. Coloca la masa en un bol ligeramente engrasado, cúbrelo con un paño húmedo y déjalo reposar durante al menos una hora en un lugar cálido y sin corrientes de aire.',
      'Precalienta el horno a 250 grados Celsius. Coloca una bandeja de horno en el horno para que se caliente también.',
      'En una sartén, calienta el aceite de oliva y agrega el ajo picado y el chile jalapeño sin semillas y cortado en rodajas finas. Sofríe durante unos minutos hasta que el ajo esté dorado y el chile esté suave.',
      'Corta el tomate en cubos pequeños y reserva.',
      'Divide la masa en dos partes iguales. Estira cada una de las partes con un rodillo hasta que quede fina (alrededor de medio centímetro de grosor). Coloca cada base de pizza sobre papel de horno.',
      'Extiende el tomate triturado sobre cada base de pizza, asegurándote de que quede bien repartido. Agrega el pepperoni cortado en rodajas, el sofrito de ajo y chile, y el tomate picado sobre el tomate. Añade la mozzarella cortada en trozos pequeños y espolvorea con orégano.',
      'Saca la bandeja de horno caliente del horno y coloca una base de pizza sobre ella. Hornea durante unos 10-15 minutos o hasta que la base esté dorada y la mozzarella se haya derretido. Repite con la otra pizza.',
      'Sirve caliente y disfruta de tu deliciosa pizza de pepperoni con tomate picado y chile. ¡Buen provecho!',
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
        { nombre: "Grasas", cantidad: "20g" },
        { nombre: "Proteínas", cantidad: "12gr" },
        { nombre: "Carbohidratos", cantidad: "60g" }
      ],
      ingredientes:[
        {lista:'500 gramos de pasta (fettuccine)'},
  {lista:'1 taza de crema de leche'},
  {lista:'1 taza de queso parmesano rallado'},
  {lista:'4 cucharadas de mantequilla sin sal'},
  {lista:'dientes de ajo picados'},
  {lista:'Sal y pimienta negra recién molida'},
  {lista:'Hojas de perejil fresco picado para decorar (opcional)'},
      ],
      contenido:[ 'Cocinar la pasta en agua con sal según las instrucciones del paquete, hasta que esté al dente. Escurrir y reservar.',
      'En una sartén grande, derretir la mantequilla a fuego medio. Agregar el ajo picado y cocinar durante un minuto, hasta que esté fragante.',
      'Agregar la crema de leche y llevar a ebullición, reducir el fuego y cocinar a fuego lento durante unos minutos, hasta que la salsa espese un poco.',
      'Agregar el queso parmesano rallado y mezclar bien hasta que se derrita y la salsa esté suave. Salpimentar al gusto.',
      'Agregar la pasta a la sartén con la salsa Alfredo y mezclar bien para cubrir la pasta con la salsa.',
      'Decorar con hojas de perejil fresco picado y servir caliente.',]
    },
    {
      platillo:"Pasta Italiana",
      imagen:"imagenes-recetas/Pasta/1.png",
      descripcion:"Una Receta Personalizada A nuestro gusto, para los amantes de la pasta, ¡No te decepcionaras!",
      valorNutricional: [
        { nombre: "Calorías", cantidad: 450 },
        { nombre: "Grasas", cantidad: "15g" },
        { nombre: "Proteínas", cantidad: "10gr" },
        { nombre: "Carbohidratos", cantidad: "65g" }
      ],
      ingredientes:[
  {lista:'500 gramos de spaghetti'},
  {lista:'Queso parmesano rallado para servir'},
  {lista:'Hojas de albahaca fresca para decorar (opcional)'},
  {lista: 'cucharadas de aceite de oliva'},
  {lista:'1 cebolla picada'},
  {lista:'2 dientes de ajo picados'},
  {lista:'2 latas de tomates pelados (800 gramos)'},
  {lista:'1/2 taza de vino tinto'},
  {lista:'1 cucharadita de orégano seco'},
  {lista:'Sal y pimienta negra recién molida'}
      ],
      contenido:[
        'Cocina el spaghetti en agua con sal, siguiendo las instrucciones del paquete, hasta que esté al dente. Escurre y reserva.',
        'En una sartén grande, calienta el aceite de oliva a fuego medio. Agrega la cebolla picada y el ajo picado y cocina hasta que estén suaves y fragantes.',
        'Agrega los tomates pelados, el vino tinto, el orégano seco, sal y pimienta negra recién molida. Cocina a fuego lento durante 15-20 minutos, hasta que la salsa se haya espesado.',
        'Agrega el spaghetti cocido a la sartén con la salsa de tomate y mezcla bien para cubrir la pasta con la salsa.',
        'Sirve la pasta en platos individuales, espolvorea con queso parmesano rallado y decora con hojas de albahaca fresca si lo deseas.',    
      ]
    },
    {
      platillo:"Pasta de Albondigas",
      imagen:"imagenes-recetas/Pasta/2.png",
      descripcion: "¡Una deliciosa combinación de pasta con albóndigas caseras en una salsa de tomate llena de sabor!",
      valorNutricional: [
        { nombre: "Calorías", cantidad: 550 },
        { nombre: "Grasas", cantidad: "25g" },
        { nombre: "Proteínas", cantidad: "15gr" },
        { nombre: "Carbohidratos", cantidad: "50g" }
      ],
      ingredientes:[
{lista:'500 gramos de carne molida de res'},
{lista:'1/2 taza de pan rallado'},
{lista:'1/2 taza de queso parmesano rallado'},
{lista:'1 huevo'},
{lista:'2 dientes de ajo picados'},
{lista:'Sal y pimienta negra recién molida'},
{lista:'Aceite de oliva para freír'},
{lista:'2 cucharadas de aceite de oliva'},
{lista:'1 cebolla picada'},
{lista:'2 dientes de ajo picados'},
{lista:'1 lata de tomates pelados (400 gramos)'},
{lista:'1/2 taza de vino tinto'},
{lista:'1 cucharadita de orégano seco'},
{lista:'Sal y pimienta negra recién molida'},
{lista:'500 gramos de pasta (penne, rigatoni, fusilli, etc.)'},
{lista:'Queso parmesano rallado para servir'},
{lista:'Hojas de albahaca fresca para decorar (opcional)'}
      ],
      contenido:[   'En un tazón grande, mezcla la carne molida, el pan rallado, el queso parmesano, el huevo, el ajo picado, sal y pimienta negra recién molida hasta que estén bien combinados. Forma pequeñas bolas de carne con tus manos.',
      'En una sartén grande, calienta aceite de oliva a fuego medio-alto. Agrega las albóndigas y cocina, volteando ocasionalmente, hasta que estén doradas por todos los lados. Retira las albóndigas de la sartén y reserva.',
      'Para la salsa de tomate: en la misma sartén, agrega 2 cucharadas de aceite de oliva y calienta a fuego medio. Agrega la cebolla picada y el ajo picado y cocina hasta que estén suaves y fragantes.',
      'Agrega los tomates pelados, el vino tinto, el orégano seco, sal y pimienta negra recién molida. Cocina a fuego lento durante 15-20 minutos, hasta que la salsa se haya espesado.',
      'Mientras tanto, cocina la pasta en agua con sal según las instrucciones del paquete, hasta que esté al dente.',
      'Agrega las albóndigas a la sartén con la salsa de tomate y mezcla bien.',
      'Sirve la pasta en platos individuales y cubre con la salsa de tomate y albóndigas. Espolvorea con queso parmesano rallado y decora con hojas de albahaca fresca si lo deseas.',]
    }
],

},


] 
function previousPagina(){
  const lista = document.querySelector(".lista-ingredientes");
  const receta = document.querySelector(".recetaTexto");
  const contador = document.querySelector(".paginaCounter")
  contador.innerText = "1/2"
  receta.style.display = "none";
  lista.style.display = "block";
}
function nextPagina(){
  const contador = document.querySelector(".paginaCounter")
  contador.innerText = "2/2"
  const lista = document.querySelector(".lista-ingredientes");
  const receta = document.querySelector(".recetaTexto");
  receta.style.display = "block"
  lista.style.display ="none";
}
function disableEnterKey(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
}
function mostrar() {
  const recetaContainer = document.querySelector(".receta-escrita");
  const misValores = document.querySelector(".receta-container");
  const close = document.querySelector(".close-button");

  recetaContainer.classList.remove("receta-escrita");
  recetaContainer.classList.add("receta-escrita-responsiva");

  close.addEventListener("click", () => {
    recetaContainer.classList.add("receta-escrita");
    recetaContainer.classList.remove("receta-escrita-responsiva");
    misValores.style.display = "block";
  });

  close.style.display = "flex";
  misValores.style.display = "none";
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
      previousPagina();
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
        previousPagina();
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
        ingredientes.innerHTML = ""
        document.querySelector(".recetaTexto").innerHTML=""
        receta.ingredientes.forEach(ingrediente=>{
    const listaIngredientes = document.querySelector(".lista-ingredientes")
   
    const ingredientesContenido = document.createElement("li")
    ingredientesContenido.innerText = ingrediente.lista
    listaIngredientes.appendChild(ingredientesContenido)
    ingredientesContenido.classList.add("lista-nutricional")
  })
        
        receta.valorNutricional.forEach(valor=>{
    const valorLista = document.querySelector(".nutricion")
  
    const valores = document.createElement("li")
  
    valores.innerText = valor.nombre + ": " + valor.cantidad
    const tituloReceta = document.querySelector(".tituloReceta")
    tituloReceta.innerText = "Preparacion Para " + previousCajaDeMenu.firstChild.innerText
    valorLista.appendChild(valores)
    valores.classList.add("lista-nutricional")

  })
    receta.contenido.forEach(contenidos=>{
      const escritoReceta = document.querySelector(".recetaTexto")
      const contenidoReceta = document.createElement("p")
      
      contenidoReceta.innerText = contenidos
      escritoReceta.appendChild(contenidoReceta)
      contenidoReceta.classList.add("paragrafo")
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

