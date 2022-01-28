const codi = document.querySelector("#codificar");
const decod = document.querySelector("#decodificar");
const textarea = document.querySelector("#words");
const resultado = document.querySelector("#resultado");
const copiar = document.querySelector("#copiar");

codi.addEventListener("click", function criptografar() {
  let texto = textarea.value;
  let teste = texto.split("");
  for (let i = 0; i < teste.length; i++) {
    if (teste[i] === "e") {
      teste[i] = "enter";
    } else if (teste[i] === "i") {
      teste[i] = "imes";
    } else if (teste[i] === "a") {
      teste[i] = "ai";
    } else if (teste[i] === "o") {
      teste[i] = "ober";
    } else if (teste[i] === "u") {
      teste[i] = "ufat";
    }
  }
  let juntar = teste.join("");
  console.log(juntar);
  resultado.innerHTML = juntar;
});

decod.addEventListener("click", function descriptografar(){
  let texto = resultado.innerHTML;
  let ufat = /ufat/gi;
  let ober = /ober/gi;
  let ai = /ai/gi;
  let imes = /imes/gi;
  let enter = /enter/gi;

  let result = texto.replace(ufat, "u").replace(ober, 'o').replace(ai, 'a').replace(imes, 'i').replace(enter, 'e');
  console.log(result);

resultado.innerHTML = result;
})


copiar.addEventListener("click", function copy(){
  navigator.clipboard.writeText(resultado.innerHTML);
})