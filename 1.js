'use strict';
const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const a = prompt('', ''),
  b = prompt('На сколько оцените его?', ''),
  c = prompt('Однин из последних просотреных фильмов?', ''),
  d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[a] = b;
console.log(personalMovieDB);
jbhjbhbhbjhbjhbjhb