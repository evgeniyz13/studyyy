'use strict';
// console.log(leftBorderWidth);
// var leftBorderWidth = 1;//существует всегда
// let second = 2; //создаеться только тогда код дошел к ней
// const pi=3.14;
// var number = 5;
// var string = "Hello!";
// var boolean = true;

// var obj = {}
// let persone = {
//     name: "Yevhenii",
//     age: 19
// };//обёект со свойствами имя и возраст
// console.log(persone.age)//вывод нужного свойства

// let arr = ['qwe.png','orange.jpg','apple.bmp'];// массив
// console.log(arr[1]);//вывод нужного значения массива

// alert("nihua");// простое модальное окно

// confirm("ty tut?"); // модальное окно с вариантами ответа

// let answer = confirm("ty tut?");//вопрос
// console.log(answer);//вывод ответа

// prompt("skolko let?");//модальное окно со строкой ввода

// let answer2 = prompt("skolko let?", "dohua");//модальное окно со строкой ввода и уже введенным вариантом ответа
// console.log(answer2);

let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt ("Введите дату в формате YYYY-MM-DD");
    
let appData = {
    moneyData: money,
    timeData: time,
    expenses: { },
    optionalExpenses: { },
    income: [  ],
    savings: false
    };
    
let answer1 = prompt ("Введите обязательную статью расходов в этом месяце"),
 answer2 = prompt ("Во сколько обойдется?"),
 answer11 = prompt ("Введите обязательную статью расходов в этом месяце"),
 answer22 = prompt ("Во сколько обойдется?");
 
appData.expenses.answer1 = answer2;
appData.expenses.answer11 = answer22;

alert(appData.moneyData / 30);

