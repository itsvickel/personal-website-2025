import { useState } from 'react';
import styled from 'styled-components';

import Home from '../../assets/home.png';
import Project from '../../assets/project.png';
import Hobby from '../../assets/hobbies.png';
import Contact from '../../assets/contact-mail.png';
import Work from '../../assets/briefcase.png';
import { color } from '../../style/Color';
import { constants } from '../../style/constant';

import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function NavigationBar() { 

  const navigate = useNavigate();
  const items = [
    {
      name: "Home",
      image: Home,
      link: "/"
    },
    {
      name: "Work",
      image: Work,
      link :"/work-experience"
    },
    // {
    //   name: "Project",
    //   image: Project,
    //   link: "/project"
    // },
    {
      name: "Hobby",
      image: Hobby,
      link: '/hobby'
    },
    {
      name: "Contact",
      image: Contact,
      link: "/contact"
    },
  ]

  return (
      <Container>
        {
          items.map((item, index) =>{
            return <NavigationItem  onClick={() => navigate(item.link)} variant="text" key={index}>
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

const NavigationItem = styled(Button)`
  border-radius: 10px;
  background: ${color.white};
  margin: 3%; 
`;

const Image = styled.img` 
  height: 5em;
  widht: 5em;
`