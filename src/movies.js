// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const alldirector = moviesArray.map((movie) =>  movie.director)
    return alldirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const drama = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'));
    return drama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }

    let todas = moviesArray.reduce((puntajes, mejores) => {
        if(!mejores.score){
        return puntajes;
    } else {
        return puntajes + mejores.score;}
    } , 0);

    let puntuacion = todas / moviesArray.length;
    puntuacion = Math.round(puntuacion * 100) / 100;
    return puntuacion;
}
   /*  let puntuacion = score / moviesArray.length;
    return puntuacion.Math.round(); */


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movies => movies.genre.includes('Drama'));

    if(dramaMovies.length === 0){
        return 0;
    }
    let todos = dramaMovies.reduce((previousValue, currentvalue) => previousValue + currentvalue.score,);
    let promedio = todos / dramaMovies.length;
    promedio = Number(promedio.toFixed(2));
     //Math.round(dramaMovies *  100) / 100;
    return promedio;
    
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortArray = moviesArray.map( movie => movie);
    
    sortArray.sort((a, b)=> {
        if(a.title === b.year){
            if(a.title < b.title){
                return -1;
            }else if(a.title > b.title){
                return 1;
            }else{
                return a.year - b.year;
            }
        }
    });
    return sortArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
