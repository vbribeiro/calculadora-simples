var primeiroNumero = parseFloat(prompt("Digite o primeiro valor: "))

var segundoNumero = parseFloat(prompt("Digite o segundo valor: "))

var operacao = prompt("Digite 1 para divisão; 2 para multiplicação; 3 para soma e 4 para subtração.")

if (operacao == 1) {
  
  var resultado = primeiroNumero / segundoNumero
  document.write("<h2>" + primeiroNumero + " / " + segundoNumero + " = " + resultado + "</h2>")
  
} else if (operacao == 2) {
  
    var resultado = primeiroNumero * segundoNumero
    document.write("<h2>" + primeiroNumero + " x " + segundoNumero + " = " + resultado + "</h2>")
  
} else if (operacao == 3) {
  
    var resultado = primeiroNumero + segundoNumero
    document.write("<h2>" + primeiroNumero + " + " + segundoNumero + " = " + resultado + "</h2>")
  
} else if (operacao == 4) {
  
    var resultado = primeiroNumero - segundoNumero
    document.write("<h2>" + primeiroNumero + " - " + segundoNumero + " = " + resultado + "</h2>")
  
} else {
  
  document.write("<h2>Opção inválida</h2>")
  
}
