import { useState, useEffect, useMemo } from 'react'

import styled from 'styled-components';
import { color } from '../../style/color';
import { fontSize } from '../../style/fontSize';
import { loadFull } from "tsparticles";
import { TypeAnimation } from 'react-type-animation';
import { constants } from '../../style/constant';
import MirrorText from '../../components/MirrorText/MirrorText';

function Home() {

    const firstName = ["V", "I", "C", "K", "E", "L",];
    const lastName = ["L", "E", "U", "N", "G",];

    return (
        <Container>

            <Header>
                <RowContainer>
                    <MirrowTextContainer>
                        {firstName.map((item, index) => {
                            return <MirrorText key={index} letter={item} />
                        })}
                    </MirrowTextContainer>

                    <MirrowTextContainer>
                        {lastName.map((item, index) => {
                            return <MirrorText key={index} letter={item} />
                        })}
                    </MirrowTextContainer>
                </RowContainer>


                <Subtitle>I am a
                    <TypeAnimation
                        sequence={[
                            ' Fullstack Developer', // Types 'One'
                            5000, // Waits 1s
                            ' 3D artist', // Deletes 'One' and types 'Two'
                            5000, // Waits 2s
                            ' Weight lifter', // Types 'Three' without deleting 'Two'

                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                </Subtitle>
            </Header>
        </Container>


    )
}

export default Home

const Container = styled.div`
    justify-content: center;
    ${constants.defaultPageStyle};
`;

const Header = styled.div`
    width: 100%;
    justify-items: center;
`;

const Title = styled.div`
    font-size: ${fontSize.fontSize_4};
`;

const Subtitle = styled.div`
    color: ${color.lightGrey};
    margin: 1%;
    font-size: ${fontSize.fontSize_3};
`;

const ParticleContainer = styled.div`
   position: relative;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const MirrowTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 4%;
`;
