const menuLateral = document.getElementById("menuLateral");
const buttonAbrirMenuLateral = document.getElementById("abrirMenuLateral");
const buttonFecharMenuLateral = document.getElementById(
  "buttonFecharMenuLateral"
);
const carinhoDeCompras = document.getElementById("CarinhoCompras");
const buttonAbrirCarinho = document.getElementById("abrirCarinho");
const buttonFecharCarrinho = document.getElementById("ButtonFecharCarinho");

const headerEfeitoScrol = document.getElementById("header");
window.addEventListener("load", () => {
  headerEfeitoScrol.style.top = "0%";
});

const abrirCarinho = () => {
  buttonAbrirCarinho.addEventListener("click", () => {
    carinhoDeCompras.style.left = "81%";
  });
};
const fecharCarrinho = () => {
  buttonFecharCarrinho.addEventListener("click", () => {
    carinhoDeCompras.style.left = "100%";
  });
};
const abrirMenu = () => {
  buttonAbrirMenuLateral.addEventListener("click", () => {
    menuLateral.style.left = "0%";
  });
};

const fecharMenu = () => {
  menuLateral.style.left = "-20%";
};
buttonFecharMenuLateral.addEventListener("click", fecharMenu);

abrirCarinho();
fecharCarrinho();
abrirMenu();
fecharMenu();

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
