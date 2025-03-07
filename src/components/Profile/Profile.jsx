import { useState } from 'react'  

import styled from 'styled-components';
import { color } from '../../style/Color';
import { fontSize } from '../../style/fontSize';
import SocialMediaBar from '../SocialMediaBar/SocialMediabar';

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
        </MainComponent>

        {props.home ? props.home : null}
        {props.about ? props.about : null}
        {props.work ? props.work : null}
        {props.contact ? props.contact : null}
        {props.hobby ? props.hobby : null}

      </ProfileComponent>
  )
}

export default Profile

const ProfileComponent = styled.div`
  height: 80vh;
  min-width: 75vw;
  max-width: 75vw;
  background: ${color.main};
  color: ${color.white};
  display: flex;
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
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

