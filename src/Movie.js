import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, medium_cover_image, genres}){
    return (
    <div className="movie">
        <img src={medium_cover_image} alt={title} title={title}/>
        <h3 className="movie__title" style={{backgroundColor : "red"}}>{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
            {genres.map((genre, index) => (
                <li key={index} className="genres__genre">{genre}</li>
            ))}
        </ul>
        <p className="movie__summary">{summary}</p>
    </div>
    )
};

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;