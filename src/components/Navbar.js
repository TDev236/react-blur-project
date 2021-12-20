import React, {useState} from 'react'
import styled from 'styled-components';
import { ReactComponent as LogoIcon} from '../assets/logo.svg'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Container>
                <LogoIcon/>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                        <MenuLink href=''>Buscar</MenuLink>
                        <MenuLink href=''>Ingresar</MenuLink>
                        <Button>Unete Ahora</Button>
                    </LinkWrapper>
                </Menu>
            </Container>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
    padding: 2rem;

    svg {
        height: 1.3rem;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #858586;
        font-size: 0.9rem;
        padding: 0.7rem 1.5rem;
        transition: all 0.2s ease-in;
        border-radius: 0.5rem;
        font-weight: 500;

        &:hover {
            color: #7781d4;
            background: #e7e9fc;
        }

    }
`;
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px){
        background-color:rgba(255, 255, 255, 0.9);
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            -webkit-backdrop-filter: blur(35px);
            backdrop-filter: blur(15px);
            background-color: rgba(255, 255, 255, 0.4);
        }
        flex-direction: column;
        overflow: hidden;
        border-radius: 1rem;
        margin-top: 1rem;
        box-shadow: -4px 8px 15px 1 rgba(0,0,0,0.07);
        max-height: ${({ isOpen }) => ( isOpen ? "300px" : "0")};
        width: 100%;
        transition: max-height 0.3s ease-in-out;

    }
`;
const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1.5rem 0;
    @media (max-width: 760px){
        flex-direction: column;

    }
`;
const MenuLink = styled.a`
    text-decoration: none;
    color: #858586;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;

    &:hover {
        color: #7781d4;
        background: #e7e9fc;
    }
`;
const Button = styled.button`
    font-size: 0.8rem;
    background: #f774c5;
    border: none;
    padding: 0.8rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #ecb6d7;
    transition: all 0.3s ease-in;
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover{
        background: #fff;
        color: #f774c5;
        transform: translateY(-5px);
        box-shadow: 0px 18px 15px -12px #ecb6d7;
        border: #f774c5 1px solid;
    }

    @media (max-width: 670px) {
        padding: 0%.3rem;
    }
`;
const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #f774c5;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }

`;