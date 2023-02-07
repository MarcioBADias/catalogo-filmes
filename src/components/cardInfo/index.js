import React from "react";
import { BsFillFileEarmarkTextFill, BsGraphUp, BsHourglassSplit, BsWallet2 } from "react-icons/bs";
import { Card, CardHeader, ListGroup, ListGroupItem } from "reactstrap";
import * as C from './styles';

const CardInfo = ({ movie }) => {
    return (
        <Card color="dark" className="mx-auto my-auto w-75">
            <CardHeader>
                Dados do filme:
            </CardHeader>
            <ListGroup flush>
                <ListGroupItem>
                    <BsWallet2/> Orçamento:
                    <p>
                        {movie.budget}
                    </p>
                </ListGroupItem>
                <ListGroupItem>
                    <BsGraphUp/> Receita:
                    <p>
                        {movie.revenue}
                    </p>
                </ListGroupItem>
                <ListGroupItem>
                    <BsHourglassSplit/> Duração:
                    <p>
                        {movie.runtime} minutos.
                    </p>
                </ListGroupItem>
                <ListGroupItem>
                    <BsFillFileEarmarkTextFill/> Descrição:
                    <p>
                        {movie.overview}
                    </p>
                </ListGroupItem>
            </ListGroup>
            </Card>
    )
}

export default CardInfo;