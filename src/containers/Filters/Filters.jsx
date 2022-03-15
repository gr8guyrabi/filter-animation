import React, { useEffect } from 'react'

import './Filters.css'

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 5) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const Filters = ({ year, setYear, setFilteredMovies, movies }) => {
    const filterYearLists = []
    const date = new Date()
    for(let i = 2015; i <= date.getFullYear(); i++) {
        filterYearLists.push(i)
        }

    useEffect(() => {
        if(year === 0) {
            setFilteredMovies(movies)
            return
        }
        const filteredMovies = movies.filter(movie => Number(movie.year) >= year)
        setFilteredMovies(filteredMovies)
    }, [year])

    return (
        <div className="filters__container">
            <button onClick={() => setYear(0)}>All</button>
            { filterYearLists.map(yr => (
                <button className={year === yr ? 'active' : ''} key={yr} type="button" onClick={() => setYear(yr)}>Year {yr}</button>
            )) }
        </div>
    )
}

export default Filters