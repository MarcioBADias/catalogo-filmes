import styled from "styled-components";

export const Card = styled.div`
    border: 3px solid;
    border-radius: 15px;
    
    :hover{
        border-color: var(--secondary-color);
    }

    @media(min-width: 720px){
            max-width: 20vw;
        }
`;

export const Button = styled.button`
    background-color: var(--primary-color);
    border: none;
    border-radius: 5px;
    font-weight: bold;
    padding: .5rem;
    width: 100%;

    a{
        color: var(--dark-color);
        font-weight: bold;
    }

    :hover{
        a{
            color: var(--light-color);
        }
    }
`;

export const CardBody = styled.div`
    height: 100%;
    padding: 1.5rem;
`;
