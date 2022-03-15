import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Movie } from './components'
import { Filters } from './containers'

import './App.css'

const App = () => {
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [year, setYear] = useState(0)

    const fetchPopularMovies = async () => {
        const data = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_API_KEY}`)
        const popularMovies = await data.json()
        setMovies(popularMovies.items)
        setFilteredMovies(popularMovies.items)
    }

    useEffect(() => {
        fetchPopularMovies()
    }, [])


    return (
        <div className="App">
            <Filters movies={movies} setFilteredMovies={setFilteredMovies} year={year} setYear={setYear}/>
            <motion.div className="popular__movies">
                <AnimatePresence>
                    {filteredMovies.length > 0 ? filteredMovies?.map(movie => (
                        <Movie key={movie.id} {...movie} />
                    )) : (
                        <h2>No Movies Found For Year {year}</h2>
                    )}
                </AnimatePresence>
            </motion.div>    
        </div>
    )
}

export default App