// //const numberOfFilms=prompt('Сколько фильмов вы уже посмотрели','');
// // console.log(numberOfFilms);
let numberOfFilms;

// function start(){
//    numberOfFilms=+prompt('Сколько фильмов вы уже посмотреоли','');   

//    while(numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)){
//     numberOfFilms=+prompt('Сколько фильмов вы уже посмотреоли','');      
//    }
// }
// start();

const personalMovieDB={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

// const a=prompt('Один из первых фильмов?','');

// const b=+prompt('На сколько оцените его?','');

// const c=prompt('Один из первых фильмов?','');

// const d=+prompt('На сколько оцените его?','');

// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;

// console.log(personalMovieDB);

// function rememberMyFilms(){

//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из первых фильмов?','');

//         const b = prompt('На сколько оцените его?','');
        
//         if (a !=null && b!=null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         }else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilms();


// function detectPersonalLevel() {
//     if(personalMovieDB.count <10){
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
//         console.log("Вы классический зритель");
//     }else if (personalMovieDB.count >=30){
//         console.log("Вы киноман");   
//     }else {
//         console.log("Произошла ошибка");
//     }
// }
// detectPersonalLevel();


// function showMyDB(hidden){
//     if(hidden==false){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.private);
// console.log(personalMovieDB);

function writeYourGenres(){
    for(let i=1; i<4; i++){
        const janres=prompt("Ваш любимый жанр под номером "+i, "");
    personalMovieDB.genres[i-1]=janres;
    }
}
writeYourGenres();
console.log(personalMovieDB);