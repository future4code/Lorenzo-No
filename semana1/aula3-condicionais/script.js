/**
 * 
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 */

/**
 * EXERCÍCIO 1 
 * O código verifica se o número inserido é par, imprimindo a mensagem "Passou no 
 teste.", ou ímpar, mostrando "Não passou no teste.".
 Isto é feito verificando o resto da divisão do número por 2. Caso o resto seja 0, 
 o número é considerado par; enquanto o número é ímpar caso o resto seja 1.
 */

/**
 * EXERCÍCIO 2
 * a. O código permite verificar o preço de um produto do supermercado.
 * b. "O preço da fruta Maçã é R$ 2.25".
 * c. O preço seria: 2*3.5 + 2.25 + 3*5 + 0.3 = R$ 24.55
 * d. "O preço da fruta Pêra é R$ 5" // Ao invés de 5.5
 */

/**
 * EXERCÍCIO 3
 * A mensagem será "ReferenceError: mensagem is not defined", devido à variável
 mensagem ser declarada dentro do bloco do if, tendo seu escopo limitado a este 
 bloco, causando o erro ao não permitir acesso da variável.
 */

/**
 * 
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 * 
 */

/**
 * EXERCÍCIO 1
 * 
 * a.
 * let number1 = Number(prompt("Digite um número"));
 * let number2 = Number(prompt("Digite mais um número"));
 * 
 * if (number1 < number2) {
 *  console.log(number2 + " e " + number1);
 * } else {
 *  console.log(number1 + " e " + number2);
 * }
 * // Caso os números sejam iguais, o código irá na condição else e imprimirá 
 number1 e depois number2, apesar de eles terem o mesmo valor.
 * 
 * 
 */