/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
// Код возьмите из предыдущего домашнего задания
'use strict';




const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Посмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert(' Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.privat = !personalMovieDB.privat;
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Введите любимые жанры через запятую`);
      // const genre = prompt(`Какой ваш любимый жанр под номером ${i}`);
      // personalMovieDB.genres[i - 1] = genre; //можно не создавать переменную а вcтавить вопроси вместо нее
      if (genre === '' || genre == null) {
        console.log('Вы ввели не коректные данные или не ввели их вобще');
        i--;
      } else {
        personalMovieDB.genres = genre.split(", ");
      }

    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i+1} это ${item}`);
    });
  }
};



for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}
let num = 2;
while (num <= 15) {
  num++;
  if (num % 2 === 0) {
    continue;
  } else {
    console.log(num);
  }
}
const arrayOfNumbers = [];
//
for (let i = 4, a = 0; i < 10; i++, a++) {
  arrayOfNumbers[a] = i + 1;
}
console.log(arrayOfNumbers);
//
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);
// //
// // const data = [5, 10, 'Shopping', 20, 'Homework'];
// // for (let i = 0; i < data.length; i++) {
// //   if (typeof (data[i]) === 'number') {
// //     data[i] = data[i] * 2;
// //   } else if (typeof (data[i]) === 'string') {
// //     data[i] = `${data[i]} - done`;
// //   }
// // }
// // console.log(data);
//
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for (let i = 1; i <= data.length; i++) {
  result[i - 1] = data[data.length - i]
}
console.log(result);

function getCoupeNumber(num) {
  if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    console.log('Ошибка. Проверьте правильность введенного номера места');
  } else if (num === 0 || num > 36) {
    console.log('Таких мест в вагоне не существует');
  } else {
    console.log(Math.ceil(num / 4));
  }
}


getCoupeNumber(20);