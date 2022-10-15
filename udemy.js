// <-- Isto é um comentário e será ignorado pelo programa.
// Curso complicado dedicado aos amigos

// 1- onde que o Javascript acontece?
// O navegador que é um programa leitor e interpretador de linguagem de códigos,
// Ele reserva um espaço na memória do seu aparelho onde serao armazenadas
// variaveis e funcões que serão executadas uma a uma até o fim da pilha
// de funções. E dai o processo se reinicia caso haja uma função de loop.
// alguns navegadores conhecidos são: Chrome, Firefox, Internet Explorer, Safari.

console.log("Curso de Javascript")
//console.log() é uma função padrao que escreve algo no seu console quando o script for executado.

// uma variavel é um endereço de alocação de espaço na memória do computador.
// variaveis sao definidas por 3 palavras:
// var (global), let(local), const(um valor constante que nao muda).
// Abaixo estão alguns tipos de objetos que podemos manipualar no Javascript.

var variavel = "isto é uma variável do tipo string (texto)"
var var2 = 1 //tipo desta variavel é numemro
var var3 = true //tipo boleana verdadeiro ou falso.
var var4 = false
var frutas = ["banana","maça","mamao"] //isto eh uma Array. Um conjunto de objetos.
var obj = {0:"banana",1:"maça",2:"mamao"} //este objeto é semelhante a array acima!
var usuario = {nome:"pedro", sobrenome:"silva", nomecompletob:this.nome+" "+this.sobrenome}
//objeto: contem uma série de valores separados por virgula.
var nomecompleto = usuario.nome+" "+usuario.sobrenome // com um ponto depois do nome do objeto vc acessa a propriedade do objeto

console.log('usuario.nome+" "+usuario.sobrenome = '+ nomecompleto)
console.log(usuario.nomecompletob, nomecompleto)

// Funções:
function userCome(){
  console.log(frutas)
  let acao = usuario.nome + " " + "comeu " + frutas[0] // cria uma string (texto) concatenando as variaveis
  console.log(acao)
  frutas.shift() // remove o primeior item do array e muda o index dos outros objetos.
  console.log(frutas)
  //executa uma ação e devolve um resultado quando a função for chamada
}

userCome() // <- executando a função!
// isso cria um contexto de execução ( tudo pode acontecer dentro deste espaço )
//Uma funcao tambem pode receber parametros:
function userCome(oque){
  let acao = usuario.nome + " " + "comeu " + oque
  console.log(acao)
  //executa uma ação e devolve um resultado quando a função for chamada
}

userCome("banana") // <- executando a função!
userCome(fruta[0])
// isso cria um contexto de execução ( tudo pode acontecer dentro deste espaço )


console.log("Coercion and IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION example")
// Coercion é algo que acontece em JavaScript que nao acontece em outras linguagens
// No javascript se vc comparar um numero 1 com uma string "1" ele ira dizer que é verdadeiro
// para fugir disso, ao invez de comparar usando == use ===.
//execute o codigo abaixo para ver o resultado.

var user1 = {name : "nerd", org: "dev"}; //exemplos para comparação de objetos
var user2 = {name : "nerd", org: "dev"};
var compare = JSON.stringify(user1) == JSON.stringify(user2);
var compare2 = user1 == user2;

(function() {
  console.log("esta função é um IIFE, é uma forma de chamar uma função anônima.")
})();

(function() {
  let logical = {
    0:false == [],
    1:false == {},
    2:"" == 0,
    3:"" == [],
    4:"" == {},
    5:0 == [],
    6:0 == {},
    7:0 == null,
    8:1 == "1",
    9:1 === "1",
    10: compare,
    11: compare2
  }
  let logicali = {
    0:"false == []",
    1:"false == {}",
    2:'"" == 0',
    3:'"" == []',
    4:'"" == {}',
    5:'0 == []',
    6:'0 == {}',
    7:'0 == null',
    8:'1 == "1"',
    9:'1 === "1"',
    10:"var user1 = {name : 'nerd', org: 'dev'}; \nvar user2 = {name : 'nerd', org: 'dev'}; \nJSON.stringify(user1) == JSON.stringify(user2);",
    11:"user1 == user2"
  }
  for (i in logical){
    console.log(logicali[i]+" is "+ JSON.stringify(logical[i]))
  }
})();

//Funções dentro de objetos

let funcoes = {
  primeira: function() {return 1},
  segunda(){return 2}
}

console.log(funcoes.primeira())
console.log(funcoes.segunda())
