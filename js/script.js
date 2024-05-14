//funcionalidades
function alterarQuantidade(produto, acao) {
  const valor = document.getElementById("valor" + produto);
  const quantidade = document.getElementById("quantidade" + produto);
  const total = document.getElementById("total" + produto);
  if (acao == "-" && quantidade.innerHTML == 0) {
    alert("Valor negativo.");
  } else {
    acao == "+" ? quantidade.innerHTML++ : quantidade.innerHTML--;
    const valorTotal =
      quantidade.innerHTML * transformarEmNumero(valor.innerHTML);
    total.innerHTML = formatarValor(valorTotal);
    SomarSubtotal();
  }
}
function SomarSubtotal() {
  let soma = 0;
  for (let i = 1; i < 6; i++) {
    soma += Number(
      transformarEmNumero(document.getElementById("total" + i).innerHTML)
    );
  }
  document.getElementById("subtotal").innerHTML = formatarValor(soma);
}
function transformarEmNumero(num) {
  return num.replace(/\D/g, "");
}
function formatarValor(num) {
  return "R$ " + num.toLocaleString("pt-BR");
}
