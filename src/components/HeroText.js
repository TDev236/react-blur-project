import React from "react";
import styled from 'styled-components';

const HeroText = () => {
    return (
        <Container>
            <h5>Educacion Online para Todas las edades</h5>
            <h1>Te</h1>
            <h1>Amo</h1>
            <h1>Emma</h1>
            <h1>Mori</h1>
            <BtnContainer>
                <button className="readmore">Mas Info</button>
                <button>7 dias Gratis de Prueba</button>
            </BtnContainer>
        </Container>
    );
};

const BtnContainer = styled.div `
    margin-top: 2rem;
    button {
        background: #8192ff;
        border: none;
        padding: 0.9rem 1.1rem;
        color: #fff;
        border-radius: 1rem;
        box-shadow: 0px 13px 24px -7px #8192ff;
        transition: all 0.3s ease-in-out;
        margin: 0.5rem;
        font-size: 0.8rem;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 17px 16px -11px #8192ff;
            transform: translateY(-5px);
        }
    }
    .readmore {
        color: #8192ff;
        background: transparent;
        border: 3px solid #8192ff;

        &:hover {
            box-shadow: 0px 17px 16px -11px #8192ff;
            transform: translateY(-5px);
        }
    }
`;

const Container = styled.div `
    padding: 1rem;
    h5 {
        color: #515151;
        font-weight: 500;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }
    h1 {
        font-size: 3.5rem;
        font-weight: 900;

        &:nth-of-type(1) {
            color: #af60ff;
            font-weight: 700;
        }
        &:nth-of-type(2) {
            color: #8849c7;
        }
        &:nth-of-type(3) {
            color: #651fac;
        }
        &:nth-of-type(4) {
            color: #3c0473;
        }
    }
`;

export default HeroText;