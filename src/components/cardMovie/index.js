import React from "react";
import { Link } from "react-router-dom";
import { 
    Button, 
    Card, 
    CardBody, 
    CardImg, 
    CardSubtitle, 
    CardText, 
    CardTitle, 
    Container
} from "reactstrap";

import { FaStar } from 'react-icons/fa'
import { imgAPI } from "../../apiData";

import * as C from './styles';

const CardMovie = ({movie, showLink = true}) => {
    return(
        <C.Card className="mx-1 my-3">
            <Card color="dark">
                <CardImg
                    alt="Card image cap"
                    src={imgAPI + movie.poster_path}
                    top
                    width="100%"
                />
                <C.CardBody>
                    <CardTitle tag="h5">
                        {movie.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-warning"
                        tag="h6"
                    >
                        <FaStar/> {movie.vote_average}
                    </CardSubtitle>
                    {showLink && 
                    <C.Button>
                        <Link to={`/movie/${movie.id}`}>
                            Detalhes
                        </Link>
                    </C.Button>
                    }
                </C.CardBody>
            </Card>
        </C.Card>
    )
}

export default CardMovie;