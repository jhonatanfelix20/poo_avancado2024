//Javascript, dinamicamente tipado, feito pelo interpretador, em tempo de execução

//motivos para não quer usar operador "=="
// Dificil de manter e teste lógico pode falhar

console.log(1 == [1,1])
console.log(21 == [2,1])
console.log(1 == [1,2])
console.log(1 == [2])
console.log(1 == [1])
console.log(1 == true)
console.log(1 === '1')
console.log(1 === 1)
console.log(1 === 1)

//declaração de vetor
v1 = []
console.log(v1.lenght) //0
v1[0] = 3.4
console.log(v1.lenght) //1
v1[10] = 2
console.log(v1.lenght) //11
v1[2] = 'abc'
console.log(v1.lenght) //11
v1[99] = true
console.log(v1.lenght) //100




// motivos para não usar o "var"
// 1- declaração mai de uma váriável de nome igual
// 2- pode acontecer uma ordem de execução, antes da declaração, dando erro no futuro

var linguagem = "Javascript"
consol.log('Aprendendo ${linguagem}')
var linguagem = "Java"
consol.log('Aprendendo ${linguagem}')

// contenação entre um number + string
const n1 = 2 
const n2 = '3'
const n3 = n1 + n2
console.log(n3)


//declaração de Variáveis (let=seja)
//let nome = "Jhonatan" 
//console.log(nome)
//nome = "Pedro"
//console.log(nome)

let a = 2
console.log(typeof(a))
a = "abc"
console.log(typeof(a))
a = true
console.log(typeof(a))






//declaração constante, ou seja não posso declarar o elemento novamente
const nome = "José"
console.log(nome)
//nome = "Pedro"
// No JavaScript, por ser interpretado, ele vai rodar, porém vai apresentar o erro
// não é necessário ";", mas pode utilizar

const endereco = 'Rua b, 21'
console.log(endereco)
const sobrenome = 'Bossini'
console.log(sobrenome)
//Me chamo Rodrigo. Meu sobrenome é Bossini
console.log('Me chamo ' + nome + '. Meu sobrenome é ' + sobrenome + '.')
console.log('Me chamo ${nome}. Meu Sobrenome é ${sobrenome}')

















