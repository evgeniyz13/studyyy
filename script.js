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
/////// ОБЛАСТЬ ВИДИМОМТИ ПЕРЕМЕННЫХ
// var - почти не используется(устаревший) видимость внутри функции тоесть в разных блоках будет одна и та же переменная и она существует еще до ее обявления со значением undefined
// let - блочная вивимость, тоесть можно использовать переменную с одним и тем же названием в разных блоках без ошибок (до обявления ее не существует)
// const - как и лет локальная видимость в функции

/////////ФУНКЦИИ
//FUNCTION DECLARATION - как и переменные var создаються еще до выполнения кода 
//

////////  CALLBACK ФУНЦИИ
function first() {
  // Do something
  setTimeout(function () {
    console.log(1);
  }, 500);

}

function second() {
  console.log(2);
}
first();
second();
//
function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}
A

function done() {
  console.log('Я прошел этот урок!');
}
learnJS('JavaScript', done);
//
///////
function calc(a, b) { // а и б агрументы функции
  return (a + b); //все после return будет Unreacheble тоесть он никогда не выполнится
}
console.log(calc(4, 3));
console.log(calc(10, 6));
console.log(calc(15, 25));
//

let num = 10;

function ret() {
  let num = 50;
  return num;
}
const anothetNum = ret();
console.log(anothetNum);
console.log(num);


//FUNCTION EXPRESSION - создается когда код дошел к ней и вызвать можно только после объявления
const qwerty = function () {
  console.log('hello')
};
qwerty(); //точка с запятой ставим потому что мы создаем переменную, а значение фунции это ее внутренее сосояние
//СТРЕЛОЧНЫЕ ФУНКЦИИ
const calc1 = (a, b) => a + b; //если аргумент один то скобки можно не ставить
const calc2 = (a, b) => {
  console.log('hvvnlkn');
  return a + b;
}; //если функция только в одну строчку то круглые скобки и return можно не ставить

//////////методы строк и чисел
//строки
const str = 'test';
const arr = [1, 2, 3];

console.log(str[2]);
console.log(arr.length);
console.log(str.toLocaleUpperCase()); //само значение переменной не меняется на прямую а просто возвращает измененное значение, после метода обязательно круглые скобки в конце

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //'поиск подстроки'-ищет слово в строке и в результате показывает с какого по номеру символа оно начитаеться в данной строке(если не найден, то выдает -1)

const logg = 'Hello world';
console.log(logg.slice(6, 11)); //вырезаем кусок строки, два аргумента, это начало и конец слова последнее значение указываеться не включая заданый символ
console.log(logg.slice(6)); //так строка будет вырезана начиная с 6 символа и до конца
console.log(logg.slice(-5)); //можно начинать и с конца строки

console.log(logg.substring(6, 11)); // тоже аргументы старт и энд, но не поддерживает отрицательные значения

console.log(logg.substr(6, 5)); //аргументы стард и длина
//числа
const numm = 12.2;
console.log(Math.round(numm)); // округление к ближайшему целому

const test = '12.2px';
console.log(parseInt(test)); //переводит число в другую систему иcчесления, в данном случае строку в число
console.log(parseFloat(test)); //возвращает значение в десятичном варианте

///////////
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