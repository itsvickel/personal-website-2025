import { useState } from 'react';
import styled from 'styled-components';

import Home from '../../assets/home.png';
import Project from '../../assets/project.png';
import Hobby from '../../assets/hobbies.png';
import Contact from '../../assets/contact-mail.png';
import Work from '../../assets/briefcase.png';
import { color } from '../../style/Color';
import { constants } from '../../style/constant';

function NavigationBar() { 

  const items = [
    {
      name: "Home",
      image: Home,
    },
    {
      name: "Project",
      image: Project,
    },
    {
      name: "Hobby",
      image: Hobby,
    },
    {
      name: "Contact",
      image: Contact,
    },
    {
      name: "Work",
      image: Work,
    },
  ]

  return (
      <Container>
        {
          items.map((item, index) =>{
            return <NavigationItem key={index}>
              <Image src={item.image}/>
            </NavigationItem>
          })
        }
      </Container>
  )
}

export default NavigationBar

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const NavigationItem = styled.button`
  border-radius: 10px;
  background: ${color.white};
  margin: 3%; 
`;

const Image = styled.img` 
  height: 5em;
  widht: 5em;
`