'use strict';

const numberOfFilms = +prompt("Сколько вы уже посмотрели фильмов?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false

};
for (let i = 1; i < 3; i++) {
  const a = prompt("Один из последних просмотреных фильмов,");
  const b = prompt("На сколько  его оцените?");
  personalMovieDB.movies[a] = b;

}
console.log(personalMovieDB);