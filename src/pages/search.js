import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Global from '../styles/global';
import { Container } from "reactstrap";
import CardMovie from "../components/cardMovie";

const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.length('q');
    return (
        <>
            <Container>
                <h2 className="my-2 text-center">
                    Resultados para: <span>{query}</span>
                </h2>
                <div>
                    {movies === 0 && <p>Carregando...</p>}
                    {movies.length > 0 && movies.map(movie => <CardMovie movie={movie}/>)}
                </div>
            </Container>
            <Global />
        </>
    )
}

export default Search;