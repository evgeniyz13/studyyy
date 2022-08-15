"use strict"; // строгий режим
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

/* /////////Взаемодействие со страницей
//в косоле браузера написать document. и там отобразятся все свойства и методы которые присущи этому глобальному объекту
// есть методы для получения элементов(1 )

const box = document.getElementById('HTML');
//console.log(box); //выводим в консоль браузера элемент с id HTML

const box2 = document.getElementsByTagName('table')[2];
// в переменную мы получили псевдомассив(тоесть массив без методов и свойств,
// [2] означает что из этого массива мы взяли 3-й элемент)
// ДАЖЕ если там один элемент нужно всеравно обращаться к эго элементу [0]

const box3 = document.getElementsByClassName("CSS");

const box4 = document.querySelectorAll("#test");
//обязательно ставить селектор(# или .) так как не понятно к чему мы обращаемся)
box4.forEach(item => { //перебираем псевдомассив с помощью forEach и стрелочной кол бек ф-и
  console.log(item);
});

const firstelement = document.querySelector("#test"); //выводит первый элемент
/// 
const style = document.getElementById("CSS"); */

/* // Факторил
function factorial(n) {
  return n * factorial(n - 1);
 }
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); */

/* /////////// Оператор нулевого слияния (Nullish) ES11
let userName = 0,
keyName = 285;

console.log(userName ?? keyName ?? 'clearName'); // оператор ?? перевіряє тільки на null і undefiend
console.log(userName || keyName || 'clearName') // Оператор АБО в даному випадку виведе перше правдиве значення, тобно 0 не зможе використати
//
// Оператор опцилнальной цепочки  ES11
const userData = {
  name: 'Yevhenii',
  age: null,
  sey: function(){
    return 'Hi'
  }
}
console.log(userData.hi?.());//перевіряє чи існує функція hi якщо ні, то видає undefined, якщо не використовувати "?" то код далі не піде
console.log(userData.sey());

if(userData && userData.skills && userData.skills.js){
  console.log(userData.skills.js)
}//код нижче поторює написане вище з оператором "?"
console.log(userData?.skills?.js);// '?' перевіряє існування всього що хнаходиться по ліву сторону і якщо воно є то код іде далі, якщо ні то повертає undefined
 */

/* /////Symbol ES6
// Всегда уникальная сущность
//Позволяют создать скрытые при обычном доступе свойства, которые не позазываются при переборе обьекта
let id = Symbol('id')
let obj = {
  info : 'text',
  [Symbol('id') ]: 972,
  [Symbol.for('id')]: 123 //глобальный реестр символов
}
for(let value in obj){ console.log(value)}// Symbol при переборе не виден
console.log(Object.getOwnPropertySymbols(obj))//получаем ссылку на все символы в обьекте в виде массива, но без значения
console.log(obj[Object.getOwnPropertySymbols(obj)[0]])// выводим значение первого сивола
console.log(obj[Symbol.for('id')])
console.log(obj); */

////Атрибуты(флаги) Дескрипторы
//writable если тру, то свойства в обьекте можно изменять, если фолс то только для чтения
//enumereble если тру то свойство будет перечислятся в цыклах, если нет то цыклы будут его игнорировать
//configurable если тру то свойства можно удалять, а атрибуты можно изменить, если фолс то делать этого нельзя
const User = {
  name: "Yevhenii",
  age: "22",
  birthday: "13/05/2000",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.age}`);
  },
};
console.log(Object.getOwnPropertyDescriptor(User, "age"));
// посмотреть флаги определенного свойства
Object.defineProperty(User, "age", { writable: false });
// изменение флага свойства, теперь возраст рид онли
Object.defineProperty(User, "gender", { value: "male" });
//создание нового свойства с помощью defineProperties (при таком методе все флаги по дефолту фолс)
//Object.defineProperty(User, 'surname', {value: prompt('Surname?'),enumereble: true, configurable: true })

////////Пересмотреть урок про итерируемые конструкции и далее, в разделе Доп основы JS!!!

////// MAP (спрециальная структура данных)
// так как ключи не могут быть обьектами используют мепы, в них вместо свойст можно использовать и обекты и функции и массив
// внутри Map это массив массивов
// Map итерируемый обьект, тоесть можно использова for of даже без символ итератора
// ГЛАВНЫЕ ОТЛИЧИЯ КАРТ ОТ ОБЬЕКТОВ
// у карт ключем можем быть что угодно(функция, обект и тд), а у обьекта только строка
// порядок свойстввсегда такой в каком их добавляли
// в пустой карте ничего не содержится, в обьекте например есть наследуемые свойства через прототип и тд
// Очень просто узнать размер через size, а обьект надо трансформировать в массив например свойств а потом узнать длину этого массива
const shops = [{ rise: 300 }, { oil: 500 }, { salt: 999 }];
const testMap = new Map([
  //так как это массив массивов данные вносятся именно так
  [{ meat: 30 }, 10000],
]);
testMap.set(shops[0], 380).set(shops[1], 505).set(shops[2], 9000);
///можно записывать данные в таком формате, так как после одной итерации работы, команда возвращает обьект Map и на нем можно опять приметить set
const budget = [700, 805, 21000];
shops.forEach((shops, i) => {
  testMap.set(shops, budget[i]);
}); // Но лучше пользоватся цыклами
// методы
console.log(testMap.get(shops[2])); // get - получение значения
console.log(testMap.has(shops[1])); // has - проверка на наличие элемента
testMap.delete(shops[0]); // удаление элементов
//testMap.clear(); // полная очистка карты
console.log(testMap.size); // СВОЙСТОВО  size количесвтво элементов в карте на данный момент
const goods = [];
//keys просто выдает ключи, если просто вывести map.key() то выдаст массив с обьектами(ключами)
for (let shop of testMap.keys()) {
  // тут мы карту превратили в массив с обьектами
  goods.push(Object.keys(shop)); // теперь преобразовываем этот обьект в массив свойст чтобы вытащить только ключи
}
console.log(goods);

for (let price of testMap.values()) {
  // valuses() то же что и keys только выдает значение (итерируемый обьект по значениям)
  console.log(price);
}
// entries() выдает массив с подмасивами
for (let [values, price] of testMap.entries()) {
  // тут уже деструктуризированый массив (так часто делают)
  console.log(values, price);
}

testMap.forEach((value, key, map) => {
  console.log(key, value);
});
console.log(testMap);

// Создаем карту из обьекта
const userMap = new Map(Object.entries(User)); // так как Map() принимает значения в формате массив с масивами, с помощью entries делаем такую структуру из обьекта User

//Превращаем карту в обьект
const newUserObj = Object.fromEntries(userMap);

/* ///////////////// SET (спец структура данных)
// особый вид коллекций где каждое значение может повторяться только один раз(массив где значения не повторяются)
//
const arr = ['Yevhenii', 'Yevhenii', 'Oleg', 'Ivan' ];
const set = new Set(arr);
// Metods
set.add('Pavlo');// Добавление 
set.has('Pavlo') //проверка есть ли такое значение
//set.clear() //Очистка
//set.delete() // удаление
for(let value of set ) console.log(value)
set.forEach((value, valueAgain, set) => {// для совместимости второй аргумент повторяет первый
console.log(value, valueAgain)
})
console.log(set);
//// Часто используют функцию фильтрации (!Запомнить)
function unique (arr){
  return Array.from(new Set(arr))
} */

////WeakMap WeakSet (!!!Передивиись)
let yevhenii = { name: "Yevhenii" };
let map = new WeakMap();
map.set(yevhenii, "data");
yevhenii = null;

/* ///////// Функции конструкторы ES5
// Используется для создания новых однотипных обьектов (везде где нужна шаблонизация)
// предназначены для конструирования обьектов и создания множества подобных копий
function Human(name, age, id){// функция конструктор, теперь с ее помощью можно создавать новых пользователей
  this.name = name;// по сути это прототип из которого мы можем отпачкововать определенных потомков
  this.age = age;
  this.id = id;
  this.human = true;
  this.Hi = function () {
    console.log('Hello' + this.name)
  }
}
//можно добавить новые свойства в конструктор и они будут прототипно наследоватся у потомков(используется если нет доступа к прототипу но его нужно модифицыровать)
Human.prototype.exit =  function(){
  console.log(`Пользователь ${this.name} ушел`)
};
const Bob = new Human('Bob', 22, 98754);// Bob обьект который содержит все что было в ф-и Human
 console.log(Bob);
 Bob.Hi();
 Bob.exit(); */

///////// Контекст вызова This
// 1) Обычная функция:this=window,но если use strict=undefined  (можно передать ей контекст через call или apply)
// 2) Контекст у методов объекта = сам объект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка This (call, apply, bind)
function ShowThis(surname) {
  console.log(this.name + " " + surname);
}
let objTest = {
  name: "Tom",
};
ShowThis.call(objTest, "Shelby"); // в ручную передаем контекст вызова функции
ShowThis.apply(objTest, ["Cruise"]); //отличаются только тем что в call аргументы можно передавать через запятую, а в apply в массиве

function count(num) {
  return this * num;
}
// в переменную double помещаем новую ф-ю
const double = count.bind(2); //  bind передает контекст(this) функции count (ф-я double имеет жестко привязаный контекст)
debugger;
console.log(double(5));
const objjj = {
  num: 5,
  sayNumber: function () {
    //у метода контекст =  сам обьект в котором содержитсья этот метод
    const say = () => {
      // так как у стрелочной ф-и нет своего контекста вызова она ссылаеться на родителся
      console.log(this.num);
    };
    say();
  },
};
objjj.sayNumber();

/////// Классы ES6 (обертка ф-й конструкторов)
//название класса всегда с большой буквы
// еще называют концепцией или шаблоном
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}
// extends(наследуется) - можно делать наследуемые классы, тоесть ниже класс который наследует все от родителя
class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    // super Должен быть всегда напервом месте в конструкторе
    super(height, width); // суперконструктор родителя (вызывает тоже самое что было у родителя)
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Текст: ${this.text}, цвет ${this.bgColor} `);
  }
}
const square = new Rectangle(10, 10); // новый экземляр класса(создает отдельный обьект который наследует все из класса)
console.log(square.calcArea());

const div = new ColoredRectangleWithText(25, 15, "Test text", "white");
div.showMyProps();
console.log(div.calcArea());

// Rest ОПЕРАТОР И параметр по умолчанию
function log(a, b, ...rest) {
  // (Rest) - обьеденяет все оставшиеся аргументы в массив
  console.log(a, b, rest);
}
function calcDouble(nubmer, basic = 2) {
  // значение basik по умолчнию 2, но если указать 2 аргумента при вызове ф-и, то будт юзать его
  console.log(nubmer * basic);
}
calcDouble(5, 77);
