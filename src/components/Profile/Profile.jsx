import { useState } from 'react'  

import styled from 'styled-components';
import { color } from '../../style/color';
import { fontSize } from '../../style/fontSize';
import SocialMediaBar from '../SocialMediaBar/SocialMediabar';

import VickelResume from '../../assets/Resume/Vickel-Leung-Resume-2025.pdf';

import { glowStyle, hoverGlowStyle } from '../../style/styles';

import profileImg from "../../assets/profileImage.jpg";
import IntroCurtain from '../IntroCurtain/IntroCurtain';

function Profile(props) { 
  const Name = "Vickel Leung";
  
  return (
      <ProfileComponent>

          <MainComponent>
            <ProfileImg src={profileImg}/>
            <ProfileName>
              {Name}
            </ProfileName>
            <SocialMediaBar/>
            <ResumeBtn>
              <ResumeWrap >
              <ResumeLink href={VickelResume} alt="Vickel-Leung-Resume-2025" download >Get my resume!</ResumeLink>
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
 
`;
const ProfileName = styled.div`
  width: 100%;
  margin: 2% 0; 
  font-size : ${fontSize.fontSize_5}


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