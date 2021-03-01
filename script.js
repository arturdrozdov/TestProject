const numberOfFilms=prompt('Сколько фильмов вы уже посмотреоли','');
console.log(numberOfFilms);

const personalMovieDB={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

const a=prompt('Один из первых фильмов?','');

const b=+prompt('На сколько оцените его?','');

const c=prompt('Один из первых фильмов?','');

const d=+prompt('На сколько оцените его?','');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);