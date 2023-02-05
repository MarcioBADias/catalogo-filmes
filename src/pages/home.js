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
            <Container>
            <h2 className="my-2 text-center">
                Top 20 melhores filmes no cinema:
            </h2>
            </Container>
            <Container className="card-area">
            {topMovies === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies
                .map(movie => <CardMovie movie={movie}/>)}
            </Container>
        </>
    )
}

export default Home;