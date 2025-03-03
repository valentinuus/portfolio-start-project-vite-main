// import React from 'react';

import styled from "styled-components";
import photoSrc from '../../../images/sveta.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Main = () => {
    return (
        <div>
            <FlexWrapper align={'centre'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Svetlana Dyablo</h2>
                    <h1>A Web Developer.</h1>
                </div>
                <Photo src={photoSrc} alt="Света"/>
            </FlexWrapper>
        </div>
    );
};

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

