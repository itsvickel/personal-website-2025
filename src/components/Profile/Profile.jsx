import { useState } from 'react'  

import styled from 'styled-components';
import { color } from '../../style/Color';
import { constants } from '../../style/constant';

function Profile() { 
  const Name = "Vickel Leung";
  return (
      <ProfileComponent>
        <MainComponent>
          <ProfileImg src="https://gratisography.com/wp-content/uploads/2025/02/gratisography-when-pigs-fly-1170x780.jpg"/>
          <ProfileName>
            {Name}
          </ProfileName>
          <ProfileLinks>
          </ProfileLinks>
        </MainComponent>
      </ProfileComponent>
  )
}

export default Profile

const ProfileComponent = styled.div`
  height: 80%;
  width: 80%;
  background: ${color.main};
  color: ${color.white};
  display: flex;
  border-radius: 10px;
  box-shadow: 10px 5px 5px ${color.lightGrey};

  border: 1px solid ${color.main};
`;

const MainComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2% 5%;
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
  font-size : ${constants.fontSize.fontSize_3}
`;
const ProfileLinks = styled.div`

`;

