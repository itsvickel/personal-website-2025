import { useState } from 'react'  

import styled from 'styled-components';
import { color } from '../../style/Color';
import { fontSize } from '../../style/fontSize';
import SocialMediaBar from '../SocialMediaBar/SocialMediabar';

import VickelResume from '../../assets/Resume/Vickel-Leung-Resume-2025.pdf';

function Profile(props) { 
  const Name = "Vickel Leung";
  return (
      <ProfileComponent>
        <MainComponent>
          <ProfileImg src="https://gratisography.com/wp-content/uploads/2025/02/gratisography-when-pigs-fly-1170x780.jpg"/>
          <ProfileName>
            {Name}
          </ProfileName>
          <SocialMediaBar/>
          <ResumeBtn>
            <ResumeLink href={VickelResume} alt="Vickel-Leung-Resume-2025" download >Get my resume!</ResumeLink>
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
`;

const MainComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4% 2%;
  text-align: center;
`;

const Test = styled.div``;

const ProfileImg = styled.img`
  max-width: 15em;
  max-height: 15em;
  border-radius: 15px;
`;
const ProfileName = styled.div`
  width: 100%;
  margin: 2% 1%; 
  font-size : ${fontSize.fontSize_3}
`;

const ProfileLinks = styled.div`

`;

const ResumeLink = styled.a`
cursor: pointer;
padding: 10px 20px;
text-transform: uppercase;
border-radius: 8px;
font-size: 17px;
font-weight: 500;
color: #ffffff80;
text-shadow: none;
background: transparent;
cursor: pointer;
box-shadow: transparent;
border: 1px solid #ffffff80;
transition: 0.5s ease;
user-select: none;

&:hover {
  color: #ffffff;
  background: #3B7BA3;
  border: 1px solid #3B7BA3;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  box-shadow: 0 0 5px #3B7BA3, 0 0 20px #3B7BA3, 0 0 50px #3B7BA3,
    0 0 100px #3B7BA3;
  font-size: 18px;
}
`;

const ResumeBtn = styled.div`
  margin: 3% 0;
`;