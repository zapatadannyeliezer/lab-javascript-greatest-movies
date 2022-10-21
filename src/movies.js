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
    const dramaMovies = moviesArray.filter(function(eachMovie) {
return eachMovie.genre.includes("Drama")
});
  return scoresAverage(dramaMovies);
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
function orderAlphabetically(moviesArray) {
const movies = JSON.parse(JSON.stringify(moviesArray));

sorte = movies
.sort((a, b) => {
    if (a.title > b.title) {
        return 1;
    } else if (a.title < b.title) {
        return -1;
    }else {
        return 0;
    }
})
.map(eachMovie => eachMovie.title)
.slice(0, 20);

return sorte;
}

   /*  let titles = movie => movie.title < 20;
    let filtrados = moviesArray.filter(titles);
    filtrados.sort();
    return filtrados; */

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    function changeHours(hourString){
        let calcularHoras = hourString.split('h');
        return Number(calcularHoras[0]) * 60;
    }

    function changeMinutes(minuteString) {
        let calcularMinutes = minuteString.split("min");
        return Number(calcularMinutes[0]);
    }

    function changeDuration(duration) {
        let timePieces = duration.split(' ');

        let minutos = timePieces.reduce((sum, onePiece) => {
            if(onePiece.includes('h')) {
                return sum + changeHours(onePiece);
            }
            return sum + changeMinutes(onePiece);
        }, 0);
        return minutos;
    }
    let moviesHoursToMinArr = moviesArray.map(function(eachMovie){
        let fixeMovie = JSON. parse(JSON.stringify(eachMovie))
        fixeMovie.duration = changeDuration(fixeMovie.duration)
        return fixeMovie
    })

    return moviesHoursToMinArr;
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let puntuacion = bestYearAvg.length;
    bestYearAvg = bestYearAvg.reduce((moviesArray, score) => score += moviesArray);
    bestYearAvg /= puntuacion;
    
    bestYearAvg.sort((a, b) => a - b);
    let mediaBaja = Math.floor((bestYearAvg.length - 1) /2);
    let mediaAlta = Math.ceil((bestYearAvg.length - 1) /2);
    let median = (bestYearAvg[mediaBaja] + bestYearAvg[mediaAlta]) / 2;
    return median;
}
 