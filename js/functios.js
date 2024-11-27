const iconoCart =document.getElementById("carrito");
const cart = document.querySelector(".cart");
const cartDiv = document.querySelector(".cart__div");
const products = document.querySelector(".products");
const iconoClose =document.getElementById("closeC");
// Detecta click en el icono del carrito y acomoda espacio para el carrito en pantalla
iconoClose.addEventListener("click",() => {
    products.classList.toggle("closeX");
});
 
// Detecta click en el icono X (cerrar el carrito) y cierra
iconoCart.addEventListener("click",() => {
      products.classList.toggle("showP");
      cart.classList.toggle("show");  
});
  
// Captura los clicks del boton de productos

let btns = document.getElementsByClassName("products__btn");
for (let i of btns) {
  i.addEventListener('click', function() {
    const thisItem=this.parentElement;
    const infoItem = thisItem.querySelector("h3").textContent;
    const infoPrice = thisItem.querySelector("p").textContent;
    const infoImg = thisItem.querySelector("img").src;
  // Para el carrito crea estructura del detalle del producto y agrega al carrito
    const cartItem = document.createElement("article");

      cartItem.innerHTML=`<img src="${infoImg}" alt="Chamarra de dama" class="cart__img">
                        <p class="cart__price">${infoPrice}</p>
                        <p class="cart__product__description">${infoItem}</p>
                        `
      cartDiv.appendChild(cartItem); 

    let   productCount =parseInt(document.getElementById("carthijo").textContent);
          productCount++;       
   // Actualiza contador del carrito
          document.getElementById('carthijo').innerText= String(productCount);
  });   
}