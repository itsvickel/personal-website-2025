import { useState } from 'react'  

import styled, { keyframes, css } from 'styled-components';
import { color } from '../../style/color';
import { fontSize } from '../../style/fontSize';
import SocialMediaBar from '../SocialMediaBar/SocialMediabar';

import VickelResume from "../../assets/Vickel_Leung.pdf";

import { glowStyle, hoverGlowStyle } from '../../style/styles';

import profileImg from "../../assets/profileImage.jpg";

const animation = keyframes`
  0% {
    background-position: -200% 0; /* Start the shine off-screen to the left */
  }
  100% {
    background-position: 200% 0; /* Move the shine off-screen to the right */
  }
`

const getShineAnimation = css`
  ${animation} 5s infinite linear;
`

function Profile(props) { 
  const Name = "Vickel Leung";
  
  return (
      <ProfileComponent>

          <MainComponent>
              <ProfileImg src={profileImg}/>
            <ProfileName>
              <ShineAnimation>{Name}</ShineAnimation>
            </ProfileName>
            <SocialMediaBar/>
            <ResumeBtn>
              <ResumeWrap >
              <ResumeLink href={VickelResume} alt="Vickel-Leung" download >Get my resume!</ResumeLink>
              </ResumeWrap>
            </ResumeBtn>
          </MainComponent>

          {props.home ? props.home : null}
          {props.about ? props.about : null}
          {props.work ? props.work : null}
          {props.contact ? props.contact : null}
          {props.portfolio ? props.portfolio : null}

      </ProfileComponent>
  )
}

export default Profile

const ProfileComponent = styled.div`
  height: 75vh;
  min-width: 75vw;
  max-width: 75vw;
  background: ${color.main};
  color: ${color.white};
  display: flex;
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
  z-index: 1;

    @media only screen and (max-width: 800px){
    background-color: transparent;
    box-shadow: 10px 5px 5px transparent;
    justify-content: center;
  }
`;


const MainComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4% 2%;
  text-align: center;

  @media only screen and (max-width: 800px){
    display: none;
  }

`;
 
const ProfileImg = styled.img`
  max-width: 15em;
  max-height: 15em;
  border-radius: 15px;
  margin: 2% 0;  
  width: 100%;
  height: 100%;
  object-fit: cover;

`;
const ProfileName = styled.div`
  width: 100%;
  margin: 2% 0; 
  font-size : ${fontSize.fontSize_5};
 
`;
  
const ResumeLink = styled.a`
  text-decoration: none;
  color:  ${color.white};
`;

const ResumeWrap = styled.div`
  ${glowStyle(color.white)}

  &:hover { 
    ${hoverGlowStyle('#3B7BA3','#FFFFFF')}
  }
`;

const ResumeBtn = styled.div`
  margin: 3% 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(120deg, transparent 10%, ${color.brown} 50%, transparent 70%);
  background-size: 200% 100%;
  animation: ${getShineAnimation};
`;

const ShineAnimation = styled.div`
font-size: 1em;
font-weight: bold;
margin: 0 auto;
text-transform: uppercase;
position: relative;
display: inline-block;
color: transparent;
background: linear-gradient(45deg, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 1) 75%);
background-size: 200% 100%;
-webkit-background-clip: text;
background-clip: text;
text-shadow: 0 0px 5px rgba(255, 255, 255, 0.8), 0 0px 10px rgba(255, 255, 255, 0.8);



animation: ${getShineAnimation};
`;