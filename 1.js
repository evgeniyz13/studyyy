'use strict';
const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');
const personalMovie = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};