import { useState } from 'react';  
import styled, { keyframes, css } from 'styled-components';
import { color } from '../../style/color';

    const blink =  keyframes  `
        0% {
            opacity: 0%;
        }
        1% {
            opacity: 100%;
        }
        99% {
            opacity: 100%;
        }
        100% {
            opacity: 0;
        }
    `

    const slideOutContainer =  keyframes`
        0% {
            height: 100vh;
        }

        40% {
            height: 100vh;
        }

        100% {
            height: 0%;
        }
    `

    const slideOut =  keyframes`
        0% {
            opacity: 0%;
        }
        1% {
            opacity: 100%;
        }

        19% {
            opacity: 100%;
        }
        20% {
            opacity: 0%;
        }

        39% {
            opacity: 0%;
        }
        40% {
            opacity: 100%;
        }

        59% {
            opacity: 100%;
        }
        60% {
            opacity: 0%;
        }

        79% {
            opacity: 0%;
        }
        80% {
            opacity: 100%;
        }

        100% {
            opacity: 100%;
        }
    `

    const getAnimation = (seconds, isEaseOut) =>{
        return  isEaseOut ? css`${blink} 0.8s linear ${seconds[0]}s, ${blink} 0.8s linear ${seconds[1]}s, ${slideOutAnimation} 1s linear 3.2s` 
                    :  css`${blink} 0.8s linear ${seconds[1]}s, ${blink} 0.8s linear ${seconds[1]}s; `
    }

    // const blinkAnimation = css`
    //     ${blink} 0.8s linear 0.9s, ${blink} 0.8s linear 2s,
    // `

    const slideOutContainerAnimation = css`
        ${slideOutContainer} 4s cubic-bezier(0.97, 0.01, 0.36, 0.99) 2.8s;
    `

    const slideOutAnimation = css`
        ${slideOut} 1s linear 3.2s;
    `

function IntroCurtain() { 

    const text = [
        {
            name: "Vickel Leung",
            seconds: [0.9, 2],
            isEaseOut: false
        },
        {
            name: "Vickel Leung",
            seconds: [0.8, 2.1],
            isEaseOut: false
        },
        {
            name: "Vickel Leung",
            seconds: [0.7, 2.2],
            isEaseOut: false
        },
        {
            name: "Vickel Leung",
            seconds: [0.6, 2.3],
            isEaseOut: false
        },
        {
            name: "Vickel Leung",
            seconds: [0.5, 2.4],
            isEaseOut: false
        },
        {
            name: "Vickel Leung",
            seconds: [0.4, 2.5],
            isEaseOut: true
        },
        {
            name: "Vickel Leung",
            seconds: [0.5, 2.4],
            isEaseOut: false
        },
        {
            name: "Vickel Leung",
            seconds: [0.6, 2.3],
            isEaseOut: false
        },
        {
            name: "Vickel Leung",
            seconds: [0.7, 2.2],
            isEaseOut: false
        },
        {
            name: "Vickel Leung",
            seconds: [0.8, 2.1],
            isEaseOut: false
        },
        {
            name: "Vickel Leung",
            seconds: [0.9, 2],
            isEaseOut: false
        },
    ];

  return (
    <Wrap>
      <IntroCurtainContainer >
                <Wrapper> 
                {text.map((item, index)=>{
                        return <Text 
                                getAnimation={()=>getAnimation(item.seconds, item.isEaseOut)} 
                                isOdd={index % 2 == 1}>
                            {item.name}
                        </Text>
                    })}
                </Wrapper>
      </IntroCurtainContainer>
    </Wrap>
  )
}

export default IntroCurtain

const Wrap = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
`;

const IntroCurtainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #161616;
    animation: ${slideOutContainerAnimation}
    animation-fill-mode: forwards;
`;

const Wrapper = styled.div`
    color: white;
    position: absolute;
`;

const Text = styled.div`
    font-family: "Monument Extended";
    font-weight: lighter;
    font-size: 7vh;
    opacity: 0;

    ${props => props.isOdd ? 'color: rgba(0, 0, 0, 0); -webkit-text-stroke: 1px white;' : null}

    animation: ${props=>props.getAnimation}
`;