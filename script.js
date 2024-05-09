const headerEfeitoScrol = document.getElementById("header")
window.addEventListener("load", () => {
    headerEfeitoScrol.style.top = "0%"

})

// const imgDoCarossel = document.getElementById("imgCarossel")

// const contagem = window.addEventListener("load",()=>{
//   setTimeout(() => {
//     if (imgDoCarossel.src === "./assets/img/img1.jpg" ) {
//      return setTimeout(() => {
//       imgDoCarossel.src === "./assets/img/img2.jpg" 
//       }, 3000);
//      }
// }, 3000);
// })

const carinhoDeCompras = document.getElementById("CarinhoCompras");
const buttonAbrirCarinho = document.getElementById("abrirCarinho");
const fecharCarrinho = document.getElementById("ButonFecharCarinho");

buttonAbrirCarinho.addEventListener("click", () => {
  carinhoDeCompras.style.left = "81%";
  abrirMenu()
});

fecharCarrinho.addEventListener("click", () => {
  carinhoDeCompras.style.left = "100%";
});


const menuLateral = document.getElementById("menuLateral");
const fecharMenuLateral = document.getElementById("fecharMenuLateral");

fecharMenuLateral.addEventListener("click", () => {
  menuLateral.style.left = "-20%";
});



const abrirMenu = () => {
  const buttonAbrirMenuLateral = document.getElementById("abrirMenuLateral");

buttonAbrirMenuLateral.addEventListener("click", () => {
  menuLateral.style.left = "0%";
});
}







