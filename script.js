
alert(`Olá, vamos calcular?

Faremos: 

1- a soma
2- a subtração
3- a multiplicação
4- a divisão
5- o resto da divisão
`
)

let numberOne = prompt("Digite o primeiro número:")

let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo

let sub = numberOne - numberTwo

let mult = numberOne * numberTwo

let div = ((numberOne / numberTwo).toFixed(2))

let restDiv = numberOne % numberTwo

alert(" Soma: " + sum)
alert(" Subtração: " + sub)
alert(" Multiplicação: " + mult)
alert(" Divisão: " + div)
alert(" Resto da divisão: " + restDiv)

if(numberOne == numberTwo) {
  alert("Os dois números escolhidos são iguais.")
} else {
  alert("Os dois números escolhidos são diferentes.")
}

if(sum % 2 === 0) {
  alert("A soma dos dois números resulta é um número par.")
} else {
  alert("A soma dos dois números resulta é um número impar.")
}














