'use strict';
/* Shift+Alt+A = закоментить блок кода */
//закоментить строкуCtrl + /



/* console.log(leftBorderWidth);
var leftBorderWidth = 1;//существует всегда
let second = 2; //создаеться только когда код дошел к ней
const pi=3.14;
var number = 5;
var string = "Hello!";
var boolean = true; */

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

//Интерполяция
//const user = 'Yevhenii';
//console.log(`Привет, ${user}`);//работает только с бектиками(косыми кавычками)


//console.log(7 + +"5");//перед 5 унарный плюс(работает только с одним аргументом) походу превращает строку в число

//инкримент увеличивает на 1, дикримент наоборот
// let incriment = 10,
//     dicriment = 10;
// // форма записи когда ставим операторы инкр или дикр перед значением-это префиксная, а после - постфиксной      
// console.log(++incriment);// если в консоль логе постаивить в префиксной форме то выведет уже с действием
// console.log(dicriment--);// в  постфиксной форме выведет старое не измененное значание


// строгое равенстро(сравнивает не значение, а тип данных) console.log(4*2 === "8");


//console.log(2 + 2 * 2 != 10)// в таком случае != говорит что 6 не равно 10 и это правда, а !== сравнит еще и по типу
//

///////// !!!!УСЛОВИЯ!!!
/*
if (4 == 9) {
  console.log("ok");
} else {
  console.log("error");
} //условия превращают любой тип данных в булиновый чтобы провнрить правдивость
const num = 50;
if (num < 49) {
  console.log("Error");
} else if (num > 55) {
  console.log("Многовато");
} else if (num > 100) {
  console.log("Многовато");
} else {
  console.log("Верно!");
}
//Тернарный оператор (если num=50 то(?) ... если нет(:) то ...
(num == 50) ? console.log("Верно!"): console.log("Error");
// switch всегда работает на строгое сравнение (num=49 (case 49: то... ))
switch (num) {
  case 49:
    console.log('neverno');
    break; // прописывать брейк чтобы скрипт не шел дальше когда нашел нужное условие
  case 100:
    console.log('neverno');
    break;
  case 50:
    console.log('YES');
    break;
  default: //дефолт - дейвствие если ни один из кейсов не выполнился 
    console.log('Ничего не подошло');
    break;
}
////////// ЦЫКЛЫ
// while
let num = 50;

while (num < 55) {
  console.log(num);
  num++; //добавлять 1 и выводить переменную пока она меньше 55
}
// do while
do {
  console.log(num);
  num++;
}
while (num < 55);
// for
for (let i = 1; i < 8; i++) {
  if (i === 6) {
    //break; //закончит цыкл когда дойдет до 6
    continue; // continue - пропустит шаг когда i будет = 6  
  }
  console.log(i);
}
*/

//////////
let money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  moneyData: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = +prompt("Во сколько обойдется?");
  if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
    a != '' && b != '' && a.length < 50) {
    console.log("done!");
    appData.expenses[a] = b;
  } else {}

}

/* appData.moneyPerday = appData.moneyData / 30;

alert("Ежедневный бюджет" + appData.moneyPerday);

if (appData.moneyPerday < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerday > 100 & appData.moneyPerday < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerday > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
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

 */