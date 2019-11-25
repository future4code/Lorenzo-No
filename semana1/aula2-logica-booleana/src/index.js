/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 */

 /**
 * EXERCÍCIO 1
 * "a. false"
 * "b. false"
 * "c. true"
 * "d. false"
 * "e. boolean"
 */

/**
 * EXERCÍCIO 2
 * a. Arrays são objetos semelhantes a listas, em que é possível armazenar e acessar
 diversas informações, de acordo com o index do item. Para declará-la em JavaScript,
 pode-se utilizar o comando let = array[].
 * b. O index inicial é 0.
 * c. Para determinar o tamanho do array, utiliza-se o comando array.length.
 * d. "I. undefined"
 * "II. null"
 * "III. 11"
 * "IV. 3 e 4"
 * "V. 19 e 9"
 * "VI. 3"
 * "VII. 1" 
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 */

 /**
 * EXERCÍCIO 1
 * a. let f = 77
 * let k = ((f - 32)*5)/9 + 273.15
 * console.log(k, " K")
 * 
 * b. let c = 80
 * f = (c*9)/5 + 32
 * console.log(f, " °F")
 * 
 * c. c = 30
 * f = (c*9)/5 + 32
 * k = ((f - 32)*5)/9 + 273.15
 * console.log(f, " °F")
 * console.log(k, " K")
 * 
 * d. const userInput = prompt("Digite a temperatura em °C")
 * c = Number(userInput)
 * f = (c*9)/5 + 32
 * k = ((f - 32)*5)/9 + 273.15
 * console.log(f, " °F")
 * console.log(k, " K")
 */

/**
 * EXERCÍCIO 2
 * // Perguntas
 * const question1 = "Qual foi seu almoço?"
 * const question2 = "Quem é seu(ua) crush da F4?"
 * const question3 = "Se você fosse um animal, qual seria?"
 * const question4 = "Qual seu sonho de vida?"
 * const question5 = "Onde você se vê daqui a 5 anos?"
 * 
 * // Respostas
 * const answer1 = prompt(question1)
 * const answer2 = prompt(question2)
 * const answer3 = prompt(question3)
 * const answer4 = prompt(question4)
 * const answer5 = prompt(question5)
 * 
 * // Console
 * console.log(question1)
 * console.log("Resposta: ", answer1)
 * console.log(question2)
 * console.log("Resposta: ", answer2)
 * console.log(question3)
 * console.log("Resposta: ", answer3)
 * console.log(question4)
 * console.log("Resposta: ", answer4)
 * console.log(question5)
 * console.log("Resposta: ", answer5)
 */

/**
 * EXERCÍCIO 3
 * a. const minimumWage = 998
 * const kWh = minimumWage/5
 * console.log(kWh)
 * 
 * b. const energyConsumption = 280
 * let energyBill = kWh*energyConsumption
 * console.log(energyBill)
 * 
 * c. const discount = 15
 * energyBill *= (100 - discount)/100
 * console.log(energyBill)
 */