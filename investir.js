
var qtdAcoes = 500;
var acao = "";
var saldoConta = "";
var creditoConta = "";
var statusPedido = "";
var statusCompra = "";

function calculaImposto() {
    var taxaCobrada = document.getElementById("valorTaxa").value;
    var impostoCobrado = document.getElementById("valorImposto").value;

    var totalImposto = (impostoCobrado * qtdAcoes);
    var totalTaxa = (taxaCobrada * qtdAcoes);
    
   document.getElementById("sumImposto").value = totalImposto;
   document.getElementById("sumTaxa").value = totalTaxa;

}
