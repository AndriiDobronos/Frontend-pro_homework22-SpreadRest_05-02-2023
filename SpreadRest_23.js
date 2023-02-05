"use strict";
//Переписати наступний код, використовуючи spread/rest оператор,
// деструктуризацію та патерн "Об'єкт параметрів":

class Article {
//    constructor(id, name, color, description, maxAmount) { // 1
   constructor({id, name, color, description, maxAmount}) {
//       constructor(...arguments) {
        this.id = id
        this.name = name
        this.color = color
        this.description = description
        this.maxAmount = maxAmount
    }
}

const oldArticles = [
    new Article({id:'1', name:'Bag',color: 'black',description: '',maxAmount: 10}), // 2
  //   new Article({'1', 'Bag', 'black', '', 10}), // 2
    new Article({id:'2', name:'Chair',color: 'grey',description: 'Great chair',maxAmount: 5}), // 3
 //   new Article('2', 'Chair', 'grey', 'Great chair', 5), // 3
    new Article({id:'3', name:'Lamp',color: 'blue',description: 'Bright & cheap',maxAmount: 20}), // 4
 //   new Article('3', 'Lamp', 'blue', 'Bright & cheap', 20), // 4
    new Article({id:'4', name:'Monitor',color: 'black',description: 'Full HD',maxAmount: 10}), // 5
 //   new Article('4', 'Monitor', 'black', 'Full HD', 10), // 5
]

const newArticles = [
    new Article({id:'5', name:'VR glasses',color: 'white',description: '',maxAmount: 10}), // 6
//    new Article('5', 'VR glasses', 'white', '', 10), // 6
    new Article({id:'6', name:'Powerbank',color: 'grey',description: '',maxAmount: 15}), // 7
//    new Article('6', 'Powerbank', 'grey', '', 15), // 7
]

//const allArticles = oldArticles.concat(newArticles) // 8
const allArticles = [...oldArticles,...newArticles]

let allArticlesMessage = `There are articles currently available:\n`

function list(article) {
    const name = article.name
    const color = article.color
    const maxAmount = article.maxAmount
    allArticlesMessage += `${name} (${color}) - ${maxAmount}pc\n`
}
[...allArticles].forEach(list)

//allArticles.forEach(function(article) { // 9
//    allArticlesMessage += `${article.name} (${article.color}) - ${article.maxAmount}pc\n` // 10
//})
alert(allArticlesMessage)

//У коментарях позначені рядки, які треба переписати (їх 10).

//Переписаний код повинен працювати так само, як і працював