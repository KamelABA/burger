const buyWindow = document.getElementById("myModal");
const buy = document.getElementById("buy");

const span = document.getElementsByClassName("close")[0];


buy.addEventListener('click', function () {
  buyWindow.style.display = "block";
});

span.addEventListener('click', function () {
  buyWindow.style.display = "none";
});

window.addEventListener('click', function (event) {
  if (event.target == buyWindow) {
    buyWindow.style.display = "none";
  }
});

let counts = 0;

const button = document.querySelector("#plus");
const input = document.querySelector(".count");

button.addEventListener("click", () => {
  counts += 1;
  input.value = counts;

});

const confirm = document.getElementById("ok");
const many = document.getElementById("cnn");
let total;
if (!localStorage) {
  total = 0;
}
else {
  total = JSON.parse(localStorage.getItem('burgers'));
}
many.textContent = total;
confirm.onclick = function () {

  buyWindow.style.display = "none";
  total += counts;
  many.textContent = total;
  localStorage.setItem('burgers', JSON.stringify(total));
  counts = 0;
  input.value = counts;
}

const sellWindow = document.getElementById("sellx");
const sellBtn = document.getElementById("sell");
const sSpan = document.getElementsByClassName("sClose")[0];

sellBtn.addEventListener("click", () => {
  sellWindow.style.display = "block";
});

sSpan.addEventListener("click", function () {
  sellWindow.style.display = "none";
});

addEventListener("click", function (e) {
  if (e.target == sellWindow) {
    sellWindow.style.display = "none";
  }
});
const minusBtn = document.querySelector("#minus");
const inputMinus = document.querySelector(".sell-count");

minusBtn.addEventListener("click", () => {
  counts += 1;
  inputMinus.value = counts;

});
const sellConfirm = document.getElementById("sellConfirm");
sellConfirm.onclick = function () {

  sellWindow.style.display = "none";
  total -= counts;
  many.textContent = total;
  localStorage.setItem('burgers', JSON.stringify(total));
  counts = 0;
  inputMinus.value = counts;
}