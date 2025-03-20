import { useState } from 'react';
import styled from 'styled-components';

import Home from '../../assets/home.png';
import Project from '../../assets/project.png';
import Hobby from '../../assets/hobbies.png';
import Contact from '../../assets/contact-mail.png';
import Work from '../../assets/briefcase.png';
import User from '../../assets/user.png';

import { color } from '../../style/color';
import { constants } from '../../style/constant';

import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

import { Card } from '../Card/index';
import { Dock } from '../Dock/index';
import { DockCard } from '../DockCard/index';
import { DockDivider } from '../DockDivider/index';


function NavigationBar() { 

  const navigate = useNavigate();
  const items = [
    {
      name: "Home",
      image: Home,
      link: "/"
    },    
    {
      name: "About",
      image: User,
      link: '/about'
    },
    {
      name: "Work",
      image: Work,
      link :"/resume"
    },

    // {
    //   name: "Project",
    //   image: Project,
    //   link: "/project"
    // },
    {
      name: "Portfolio",
      image: Hobby,
      link: '/portfolio'
    },
    {
      name: "Contact",
      image: Contact,
      link: "/contact"
    },
  ]

  return (
           
    <Dock>
    {items.map((src) =>
      src ? (
        <DockCard key={src}>
          <Card link={src.link} src={src.image} />
        </DockCard>
      ) : (
        <DockDivider />
      )
    )}
  </Dock>


      // <Container>
      //   {
      //     items.map((item, index) =>{
      //       return <NavigationItem  onClick={() => navigate(item.link)} variant="text" key={index}>
      //         <Image src={item.image}/>
      //       </NavigationItem>
      //     })
      //   }
      // </Container>
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
  height: 3em;
  widht: 3em;
`