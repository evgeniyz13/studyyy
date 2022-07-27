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
//ЛЮБЫЕ ДАННЫЕ КОТОРЫЕ МЫ ПОЛУЧАЕМ ОТ ПОЛЬЗОВАТЕЛЯ ПО УМОЛЧАНИЮ В ВИДЕ СТРОКИ

//Интерполяция
// const user = 'Yevhenii';
//console.log(`Привет, ${user}/5/999`); //работает только с бэктиками(косыми кавычками)


//console.log(7 + +"5");//перед 5 унарный плюс(работает только с одним аргументом) по ходу превращает строку в число
//Конкатенация - сложение или операция склеивания (обычно строк)

//инкримент увеличивает на 1, дикримент наоборот
// let incriment = 10,
//     dicriment = 10;
// // форма записи когда ставим операторы инкр или дикр перед значением-это префиксная, а после - постфиксной      
// console.log(++incriment);// если в консоль логе постаивить в префиксной форме то выведет уже с действием
// console.log(decriment--);// в  постфиксной форме выведет старое не измененное значание


// строгое равенстро(сравнивает не только значение, а и тип данных) console.log(4*2 === "8");


//console.log(2 + 2 * 2 != 10) // в таком случае != говорит что 6 не равно 10 и это правда, а !== сравнит еще и по типу

//(&&-значек амперсант, означает И, || означает ИЛИ)
// const isCecked = true,
//   isClose = false;
// console.log(isCecked && !isClose); 

//ТАБЛИЦА ПРИОРИТЕТОВ ОПЕРАТОРОВ 
//    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

///////// !!!!УСЛОВИЯ!!!
/*
if (4 == 9) {
  console.log("ok");
} else {
  console.log("error");
} //условия превращают любой тип данных в булиновый чтобы проверить правдивость
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

while (num < 55) { //пока num меньше 55...
  console.log(num);
  num++; //добавлять 1 и выводить переменную пока она меньше 55
}
// do while
do { // выполни итерацию 
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

/*
/////////ФУНКЦИИ (14,40)
//FUNCTION DECLARATION - как и переменные var создаються еще до выполнения кода 
//
function calc(a, b) { // а и b агрументы функции
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
  console.log('hello');
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

function done() {
  console.log('Я прошел этот урок!');
}
learnJS('JavaScript', done);
///////МЕТОДЫ ОЬЪЕКТОВ (АСОЦИАТИВНЫЕ МАССИВЫ) hair func функции вишего порядка
//объект это структура которая хранит в себе любые типы данных в формате ключ:значение, моут быть вложеными
//получать  свойство можно либо через точку либо через квадратные скобки 
const options = {
  name: 'test',
  widt: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () { //создание свойстава объекта
    console.log('Test');
  }
};
options.makeTest();

const {
  border,
  bg
} = options.colors; //деструктуризация объекта
console.log(border);

console.log(Object.keys(options).length); //!!!(встроеный метод или свойство) полезная фишка для подсчета количевства ключей в масиве 
//console.log(options['colors']['border']); //одни из вариантов достать black, но его не юзать!
delete options.name;
console.log(options);

//let counter = 0;
//*1 for in - конструкия(свойство) перебора
for (let key in options) { //цыкл сработает столько раз сколько ключей есть в объекте
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      //*1 counter++;
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}
////////МАССИВЫ И ПСЕВДОМАССИВЫ
// Псевдомассив просто хранит данные по порядку, но к нему нельзя применять методы

const arrr = [1, 2, 3, 6, 8];
//примеры методов
arrr.pop(); //удаляет последнее значение массива
arrr.push(10); //добавляет элемент в конец массива
for (let i = 0; i < arrr.length; i++) { //цыкл перебирает элементы и выводит в консоль
  console.log(arrr[i]);
}

//конструкция с методом  for of перебирает массив (работает только с масивоподобными сущностями) 
for (let value of arrr) {
  console.log(value);
}

//МЕТОД перебора forEach принимает в себя 3 аргумента (1-элемент который сейчас перебираеться 2-номер по порядку 3-ссылка на масив которые перебираем)
arrr.forEach(function (item, i, arrr) {
  console.log(`${i}: ${item} внутри массива ${arrr}`);
});

//метод split превращает строку в масив, в скобочках указываем разделитель
const strr = prompt("", "");
const products = strr.split(", ");
products.sort(); //сортирует массив(алгортмом быстрой сортировки) как строку по первому символу (и числа и буквы)
// конструкция для правильной сортировки двузначных и более чисел
products.sort(compareNUM);

function compareNUM(a, b) {
  return a - b;
}
//метод join обратный split превращает массив в строку
console.log(products.join('; '));


//////// ПЕРЕДАЧА ДАННЫХ ПО ССЫЛКЕ И ПО ЗНАЧЕНИЮ
//это примитивная контсрукция и тут в b передаеться значение а
let a = 5,
  b = a;
//А тут в copy передаеться ссылка на obj а не копируеться объект и тогда если менять copy будет меняться и основной obj
const obj = {
  a: 5,
  b: 1
};
const copy = obj;
//РАбочий вариант поверхносного копирования объекта(функция которая копирует объект)
function copy2(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}
//проверка работы фу-и
const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};
const newNumbers = copy2(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);
//
const add = {
  d: 17,
  e: 20
};
//метод для склеивания объектов(в скобках первый аргумент В который записываем, второй который добавляем)
//console.log(Object.assingn(numbers, add));
//фишка чтобы поверхносно клонировать объект
//const clone = Object.assingn({}, add);
//метод для клонирования массива
const oldArray = ['a', 'b', 'sdf'];
const newArray = oldArray.slice();
newArray[1] = 'qwertyuiop';
console.log(oldArray);
console.log(newArray);
//оператор разворота (СПРЕД ОПЕРАТОР)
const video = ['youtube', 'vimeo', 'rutube'],
  blogs = ['wordpess', 'livejournal', 'blogger'],
  internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);
// еще один пример
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const masiv = [2, 5, 7];
log(...masiv);
//Создание поверхносной копии с помощью спред оператора
const q = ['a', 'b'];
const newq = [...q];
//
const t = {
  a: 1,
  b: 3
};
const newt = {
  ...t
};
console.log(newt);
////////ООП ПРОТОТИПНО ОРИЕНТИРОВАНОЕ ПРОГРАММИРОВАНИЕ
/* если применить например к строке(примитивный тип) приметить какой-то метод,
то он превращает ее в объект приеняет метод и возвращает назад в строку */
//
/* любые конструкции прототипно наследуються от объектов(например простой массив это прототип
 "общепринятого масива"типо со всякими методами, но он являеться прототпом объекта"общепринятого" ) */
/*
 console.dir([1, 2, 3]);
//
const soldier = {
  helth: 400,
  armor: 100,
  seyHello: function () { //обрати внимание как создать фунцию в объекте
    console.log("Hello");
  }
};
const jonh = {
  health: 100
};
Object.setPrototypeOf(jonh, soldier); //"ЮЗАЕМ"   современный способ сделать Джона прототипом солдата
const johnNEW = Object.create(soldier); //"ЮЗАЕМ" НО обычно не создают два объекта как показано выше, а делают так,(читкаеться как"создаем Джона который прототипно наследует солдата")
jonh.__proto__ = soldier; //"НЕ юзаем"устаревший формат создания прототипа
console.log(jonh.armor); //у Джона только одно свойство но благодяря тому что он прототип солдата он может получить свойство у своего прототипа
jonh.seyHello();

/////////ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
//МОЖНО ИСПОЛЬЗОВАТЬ МЕТОД String он просто превращает в строку(ну таким пользовались в старых стандартах) 
//Можно к числу приавить пробел иполучится строка
console.log(5 + '');
const frontSize = 26 + 'px';
//ПЕрводим в чило
console.log(typeof (+'5')); // с помощью унарного плюса
console.log(typeof (parseInt('15px', 10))); //метод parseInt (второй аргумент означает что это десятичная система)
let answ = +prompt('Hello', ''); //тоже унарный плюс на практике
// В булиновое значение 
//всегда в false 0,'', null, undefined, NaN
// 1)
let switcher = null;
if (switcher) {
  console.log('Working....');
}
switcher = 1; //сработает только когда будет правда тоесть переменная не булет пустой
if (switcher) {
  console.log('Working....');
}
//2)
console.log(typeof (!!'4444')); // !! превращает выражение в булиновое



*/
/////////Взаемодействие со страницей
//в косоле браузера написать document. и там отобразятся все свойства и методы которые присущи этому глобальному объекту
// есть методы для получения элементов(1 )

const box = document.getElementById('HTML');
//console.log(box); //выводим в консоль браузера элемент с id HTML

const box2 = document.getElementsByTagName('table')[2];
/* в переменную мы получили псевдомассив(тоесть массив без методов и свойств,
 [2] означает что из этого массива мы взяли 3-й элемент)
 ДАЖЕ если там один элемент нужно всеравно обращаться к эго элементу [0]*/

const box3 = document.getElementsByClassName("CSS");

const box4 = document.querySelectorAll("#test");
//обязательно ставить селектор(# или .) так как не понятно к чему мы обращаемся)
box4.forEach(item => { //перебираем псевдомассив с помощью forEach и стрелочной кол бек ф-и
  console.log(item);
});

const firstelement = document.querySelector("#test"); //выводит первый элемент
/// 
const style = document.getElementById("CSS");

// function factorial(n) {

//   return n * factorial(n - 1));

// }
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));