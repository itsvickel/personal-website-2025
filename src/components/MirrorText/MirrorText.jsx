import { useState } from 'react';
import styled from 'styled-components';
import { color } from '../../style/color';

import { glowStyle, hoverGlowStyle } from '../../style/styles';
import { fontSize } from '../../style/fontSize';

const MirrorTextItem = (props) => {
    return <Wrapper>
        <Letter>
            {props.letter}
        </Letter>
        <Shadow>
            {props.letter}
        </Shadow>
    </Wrapper>
}

function MirrorText(props) {

    return (
        <MirroTextContainer mainColor={props.mainColor} secondaryColor={props.secondaryColor} target="_blank" href={props.href}>
            <MirrorTextItem letter={props.letter} />
        </MirroTextContainer>

    )
}

export default MirrorText

const MirroTextContainer = styled.a`
  	font-family: "Yanone Kaffeesatz";
    font-size: ${fontSize.fontSize_7};
`;

const Letter = styled.div`
    transition: ease-out 5s;
    transform: translateY(40%);

    &: hover{
        opacity: 0;
        transform: translateY(-500%);
    }
`;

const Shadow = styled.div`
    transform: scale(-1, -1);
    color: #999;
    transition: ease-in 5s, ease-out 5s;

    &: hover{
        opacity: 0;
        transform: translateY(300%);
    }
`;

const Wrapper = styled.div`
    padding-right: 1vw;

    &: hover{
       ${Shadow}
    }
`;
