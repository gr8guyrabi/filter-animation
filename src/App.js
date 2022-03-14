import React, {useState, useEffect} from 'react'

import './App.css'

const App = () => {
    const [movies, setMovies] = useState([])
    
    const fetchPopularMovies = async () => {
        const data = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_API_KEY}`)
        const popularMovies = await data.json()
        setMovies(popularMovies.items)
    }

    useEffect(() => {
        fetchPopularMovies()
    }, [])

    return (
        <div className="App">
            <h1>
                App
            </h1>
        </div>
    )
}

export default App