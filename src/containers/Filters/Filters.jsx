import React, { useEffect } from 'react'

import './Filters.css'



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
        const filteredMovies = movies.filter(movie => Number(movie.year) === year)
        setFilteredMovies(filteredMovies)
    }, [year])

    return (
        <div className="filters__container">
            <button onClick={() => setYear(0)}>All</button>
            { filterYearLists.map((yr, index) => (
                <button className={year === yr ? 'active' : ''} key={yr} type="button" onClick={() => setYear(yr)}>Year {yr}</button>
            )) }
        </div>
    )
}

export default Filters