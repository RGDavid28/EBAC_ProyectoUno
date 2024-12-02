const iconoCart = document.getElementById("carrito");
const cart = document.querySelector(".cart");
const cartDiv = document.querySelector(".cart__div");
const products = document.querySelector(".products");
const iconoClose =document.getElementById("closeC");
// Detecta click en el icono del carrito y acomoda espacio para el carrito en pantalla
function toggleF(nameObj){
      products.classList.toggle(nameObj);
}

iconoClose.addEventListener("click",() => {
    toggleF("closeX");
});
 
// Detecta click en el icono X (cerrar el carrito) y cierra
iconoCart.addEventListener("click",() => {
      toggleF("showP");
      cart.classList.toggle("show");  
});
  
// Captura los clicks del boton de productos

let btns = document.getElementsByClassName("products__btn");

for (let i of btns) {
      i.addEventListener('click', function() {
            const thisItem  = this.parentElement;
            const infoItem  = thisItem.querySelector("h3").textContent;
            const infoPrice = thisItem.querySelector("p").textContent;
            const infoImg   = thisItem.querySelector("img").src;
            // Para el carrito crea estructura del detalle del producto y agrega al carrito
            const cartItem = document.createElement("article");
            cartItem.innerHTML=`<img src="${infoImg}" alt="Chamarra de dama" class="cart__img">
                        <p class="cart__price">${infoPrice}</p>
                        <p class="cart__product__description">${infoItem}</p>
                        <i class="iconDelete"><img src="Img/quitar-del-carrito.png" alt="Icono quitar del Carrito" class="cart__delete__icon"> </i> 
                        `
            cartDiv.appendChild(cartItem); 
            let   productCount =parseInt(document.getElementById("carthijo").textContent);
            if (typeof productCount === 'number') {     
                  productCount++;       
                  // Actualiza contador del carrito
                  document.getElementById('carthijo').innerText= String(productCount);
            }      
      // Aquí añades el listener al ícono de borrar recién creado
            cartItem.querySelector('.iconDelete').addEventListener('click', function() {
                  // Borra producto
                  cartItem.remove();
                  // Actualiza contador
                  productCount =parseInt(document.getElementById("carthijo").textContent);
                  if (typeof productCount === 'number') {
                        productCount = productCount - 1;
                        document.getElementById('carthijo').innerText= String(productCount);
                  }      
            });    
      }); 
}