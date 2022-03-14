import React from 'react'

import './Movie.css'

const createMediumImageUrl = (imgUrl) => {
    return imgUrl.replace("original", "M").replace("_V1_Ratio0.6716_AL_", "_V1_QL75_UX280_CR0,6,280,414_")
}

const Movie = ({title, image}) => {
  return (
    <div className="movie">
        <h2 className="movie-title">{title}</h2>
        <img src={image ? image : 'https://imdb-api.com/images/original/nopicture.jpg'} alt={title} />
    </div>
  )
}

export default Movie