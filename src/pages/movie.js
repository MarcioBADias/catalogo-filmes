import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { keyAPI, urlAPI } from "../apiData";
import { Container } from "reactstrap";
import CardMovie from "../components/cardMovie";
import CardInfo from "../components/cardInfo";

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const getAPIMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
        console.log(movie)
    };

    useEffect(()=>{
        const movieURL = `${urlAPI}${id}?${keyAPI}`;
        getAPIMovies(movieURL);
    }, [])


    useEffect(() => {
        const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);
        return () => {
        window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Container className={screenWidth < 700 ? "block" : "d-flex"}>
            {movie && <CardMovie movie={movie} showLink={false}/>}
            {movie && <CardInfo movie={movie} />}
        </Container>
    )
}

export default Movie;