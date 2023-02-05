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

const CardMovie = ({movie, showLink = true}) => {
    return(
        <Container>
            <Card className="mx-3 my-3" color="dark">
                <CardImg
                    alt="Card image cap"
                    src={imgAPI + movie.poster_path}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {movie.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-warning"
                        tag="h6"
                    >
                        <FaStar/> {movie.vote_average}
                    </CardSubtitle>
                    {/* <CardText maxHeigt='100%'>
                        {movie.overview}
                    </CardText> */}
                    <Button>
                        {showLink && <Link to={`/movies/${movie.id}`}>Detalhes</Link>}
                    </Button>
                </CardBody>
            </Card>
        </Container>
    )
}

export default CardMovie;