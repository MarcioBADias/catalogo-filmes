import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { keyAPI, urlAPI } from "../apiData";
import CardMovie from "../components/cardMovie";


const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getAPIMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        
        setTopMovies(data.results);
        console.log(data.results)
    };

    useEffect(()=>{
        const topMoviesURL = `${urlAPI}top_rated?${keyAPI}`;
        getAPIMovies(topMoviesURL);
    }, [])
    return (
        <>
            <h2 className="my-2 text-center">Top 20 melhores filmes no cinema:</h2>
            <div className="row">
                {topMovies === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map(movie => <div className="col"><CardMovie movie={movie}/></div>)}
            </div>
        </>
    )
}

export default Home;