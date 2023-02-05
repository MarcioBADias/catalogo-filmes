import React, { useEffect, useState } from "react";
import { keyAPI, urlAPI } from "../apiData";


const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getAPIMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        
        setTopMovies(data.results);
    };

    useEffect(()=>{
        const topMoviesURL = `${urlAPI}top_rated?${keyAPI}`;
        getAPIMovies(topMoviesURL);
    }, [])
    return (
        <div>{topMovies.length > 0 && topMovies.map(movie => <p>{movie.title}</p>)}</div>
    )
}

export default Home;