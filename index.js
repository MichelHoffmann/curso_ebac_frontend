const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const campoA = document.querySelector("#campoA");
    const campoB = document.querySelector("#campoB");
    const resultado = document.querySelector(".resultado");

    const a = Number(campoA.value)
    const b = Number(campoB.value);

    function validaValores(a, b) {
    if(b > a) {
        resultado.innerHTML = `<p class="valido">Formulário valido!</p>`;
    } else if (b <= a) {
        resultado.innerHTML = `<p class="invalido">Formulário invalido!</p>`;
    }
  }
  validaValores(a, b)
});
