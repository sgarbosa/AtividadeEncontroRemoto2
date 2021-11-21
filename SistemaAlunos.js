//Condicoes para a realização da atividade:
//percorrer do numero 0 até o numero de alunos - Ok
//se numero de alunos for par, escrever 'par' e o numero dos alunos - Ok
//se o numero de alunos for impar, escrever 'impar' e o numero dos alunos - Ok
//se o numero for zero, escrever 'zero'. Ok

//Declarção de Variáveis:
let numAlunos = (11); //Declarando uma variável com o numero dos alunos da classe.

//Processo de Percorrer do número 0 até o numero total de alunos.
for (let contador = 0; contador <= numAlunos; contador++) { //Declarando uma variavel para ir contando de 1 em 1 até o contador atingir o nº de alunos.
//Aplicando condicionais de par ou impar
if (contador == 0) {
    console.log ("O número atual de alunos é zero."); //Mostrando quando o numero de alunos é igual a zero.
} else if (contador % 2 == 0) {
    console.log ("O número de alunos na classe é par, com " + contador + " alunos."); //Mostrando que o numero de alunos é par, e quantos alunos tem a classe, utilizando Contatenação
} else {
    console.log (`O número de alunos na classe é ímpar, com ${contador} alunos.`); //Mostrando que o numero de alunos é ímpar, e quantos alunos tem a classe, utilizando Interpolação (Template String)
}
}