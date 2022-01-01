import React, { useState } from "react";
import styled from "styled-components";
import Link from 'next/link';

import ActiveLink from "../components/ActiveLink";



export default function Sidebar() {
    // enum MenuState {

    // }

    return (
        <Container>
            <ContainerSideButton>
                <ActiveLink activeClassName="active" href="/" >
                    <a className="nav-link">About me</a>
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/portfolio">
                  <a className="nav-link">Portfolio</a>  
                </ActiveLink>
                <ActiveLink activeClassName="active" href="/contact">
                  <a className="nav-link">Contact</a>  
                </ActiveLink>                
            </ContainerSideButton>

        </Container>
    )
}

const Container = styled.div`
    background-color: transparent;
    width: 130px;
    height:100%;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 10;
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 440px) {
        width: 90px;
    }
`;

const ContainerSideButton = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    height: 108px;
    justify-content: space-between;
    align-items: flex-start;


    @media (max-width: 762px) {
        padding-left: 10px;
    }

    @media (max-width: 440px) {
        height: 75px;
    }
`;

const SideButton = styled.a`
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: #384361;
    font-size: 16px;
    transition: transform 0.3s ease;
    transform: translateX(0px);

    :hover {
        transform: translateX(20px);
        font-weight: bold;

        @media (max-width: 375px) {
            transform: translateX(10px);
        }
    }

    :active:after {
        content: ' (current page)';

        @media (max-width: 375px) {
            transform: translateX(10px);
        }
    }

    @media (max-width: 762px) {
        font-size: 14px;
    }
`;
