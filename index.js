const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const ul = $("ul");
  const input = $("input").val();
  const p = $(`<p>${input}</p>`);
  const button = $(`<button class="del">
                <img src="imagens/excluir.png" alt="" />
              </button>`);
  const novoLi = $(`<li></li>`);
  $(p).appendTo(novoLi);
  $(button).appendTo(novoLi);
  $(novoLi).appendTo(ul);
});

$(document).on("click", "li", function () {
  const estiloLi = $(this).css("text-decoration");
  if (estiloLi.includes("line-through")) {
    $(this).css("text-decoration", "none");
  } else {
    $(this).css("text-decoration", "line-through");
  }
});

$(document).on("click", ".del", function (e) {
  e.preventDefault();
  $(this).closest("li").remove();
});
