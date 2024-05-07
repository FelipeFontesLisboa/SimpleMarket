const buttonAbrirCarinho = document.getElementById("abrirCarinho");
const carinhoDeCompras = document.getElementById("CarinhoCompras");
const fecharCarrinho = document.getElementById("ButonFecharCarinho");

buttonAbrirCarinho.addEventListener("click", () => {
  carinhoDeCompras.style.left = "81%";
});
fecharCarrinho.addEventListener("click", () => {
  carinhoDeCompras.style.left = "100%";
});

const buttonAbrirMenuLateral = document.getElementById("abrirMenuLateral");
const menuLateral = document.getElementById("menuLateral");

buttonAbrirMenuLateral.addEventListener("click", () => {
  menuLateral.style.left = "0%";
});

buttonAbrirMenuLateral();
fecharCarrinho();
buttonAbrirCarinho();
