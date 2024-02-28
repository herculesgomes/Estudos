var data;

function carregarJSON() {
  fetch('./receitas.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
}

carregarJSON();

var receita = document.querySelectorAll(".descricao-receita");
var exibirReceita = document.querySelector(".receita");

receita.forEach(event => {
  event.addEventListener("click", receitaClicada);
});

function receitaClicada(event) {
  const clicado = event.target;
  for (var i = 0; i < data.receitas.length; i++) {
    if (data.receitas[i].nome === clicado.textContent) {
      console.log(data.receitas[i]);
      exibirReceita.style.display = "grid";
      exibirReceita.innerHTML = `
        <h2>${data.receitas[i].nome}</h2>
        <h3>Ingredientes:</h3>
        <ul>
          ${data.receitas[i].ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
        </ul>
        <h3>Modo de Preparo:</h3>
        <p>${data.receitas[i].modoPreparo}</p>
      `;
    }
  }
}


exibirReceita.addEventListener("click", function () {
  exibirReceita.style.display = "none";
});



















/*
receita.forEach(event => {
  event.addEventListener("click", receitaClicada);
});

function receitaClicada(event) {
  const clicado = event.target;
  
}

box.forEach(event => {
  event.addEventListener("click", boxSelecionada);
})

function boxSelecionada(event) {
  const boxClicada = event.target;
  console.log(boxClicada)
  
}

*/





/*Eu indentifico qual box-receita esta sendo clicado e aplico nela um display grid */
