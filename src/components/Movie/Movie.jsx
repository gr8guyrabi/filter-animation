import React from 'react'
import { motion } from 'framer-motion'

import './Movie.css'

const Movie = ({title, image}) => {
  return (
    <motion.div 
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="movie"
    >
        <h2 className="movie-title">{title}</h2>
        <img src={image ? image : 'https://imdb-api.com/images/original/nopicture.jpg'} alt={title} />
    </motion.div>
  )
}

export default Movie