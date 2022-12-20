let arrayRemedios = [];
function adicionarRemedio() {
  event.preventDefault();

  let nomeMedicamento = document.getElementById("nomeMedicamento").value;
  let quantidadeMedicamento = document.getElementById(
    "quantidadeMedicamento"
  ).value;
  let classeMedicamento = document.getElementById("classeMedicamento").value;
  let pedido = {
    Nome: nomeMedicamento,
    quantidade: quantidadeMedicamento,
    classe: classeMedicamento,
  };
  console.log(validar(pedido));
  if (validar(pedido) === true) {
    salvar(pedido);
  }
  renderTabela();
}
//função para validar os inputs
function validar(pedido) {
  if (pedido.Nome == "") {
    return false;
  } else if (pedido.quantidade == "") {
    return false;
  } else if (pedido.classe == "") {
    return false;
  }
  return true;
}
//função para salvar os dados em um array
function salvar(pedido) {
  arrayRemedios.push(pedido);
  console.log(arrayRemedios);
}
//função para renderizar a tabela
function renderTabela() {
  let tbody = document.getElementById("tbody");
  /* declarar o dbody vazio faz com que salvando um novo objeto assim que ele entrar em renderTabela
        o campo tbody estara limpo e começara a listagem tudo novamente */
  tbody.innerHTML = "";
  for (let i = 0; i < arrayRemedios.length; i++) {
    let tr = tbody.insertRow();

    let tr_nome = tr.insertCell();
    let tr_quantidade = tr.insertCell();
    let tr_classe = tr.insertCell();

    tr_nome.innerText = `${arrayRemedios[i].Nome}`;
    tr_quantidade.innerText = `${arrayRemedios[i].quantidade}`;
    tr_classe.innerText = `${arrayRemedios[i].classe}`;
    tr_nome.classList.add("center");
    tr_quantidade.classList.add("center");
    tr_classe.classList.add("center");
  }
}
