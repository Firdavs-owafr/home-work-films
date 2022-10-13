let numberOfFilms = +prompt("Qancha film ko`rgansiz?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 1; i++) {
    let a = prompt("Oxirgi ko`rgan filmlaringizdan biri?"),
          b = prompt("Uni qancha baholagan bo`lardingiz?");
    if (a == null && b == null && a == '' && b == '') {
        i--;
    } else{
        personalMovieDB.movies[a] = b;
    }
}
console.log(personalMovieDB);