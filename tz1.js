'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько вы уже посмотрели фильмов?");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false

};
for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотреных фильмов,");
  const b = prompt("На сколько  его оцените?");
  if (a != '' && b != '' && a != null && b != null && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }

}

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('вы класический зритель');
} else if (personalMovieDB.count >= 30) {
  alert("Вы киноамн!");
} else {
  alert("Произошла ошибка");
}
console.log(personalMovieDB);