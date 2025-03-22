import { useState } from 'react';  
import styled from 'styled-components';

import LinkItem from '../LinkItem/LinkItem';

import github from '../../assets/github-sign.png';
import instagram from '../../assets/instagram.png';
import email from '../../assets/email.png';
import { color } from '../../style/color';

function SocialMediaBar(props) { 
  let socialLinks = [
    {
      img: instagram,
      name: "Instagram",
      href: "https://www.instagram.com/vick3l",
      mainColor: color.purpleDD2A7B,
      secondaryColor: color.purpleDD2A7B
    },
    {
      img : github,
      name: "Github",
      href: "https://www.github.com/itsvickel",
      mainColor: color.black,
      secondaryColor: color.purpleDD2A7B
    },
    {
      img: email,
      name: "Email",
      href: "mailto:vickelleung@gmail.com",
      mainColor: color.green32de84,
      secondaryColor: color.purpleDD2A7B
    },
  ]

  return (
      <SocialContainer>
          {
           socialLinks.map((link, index) => {  
            return(
              <LinkItem key={index}
                name = {link.name}
                img = {link.img}
                href = {link.href}
                mainColor = {link.mainColor}
                secondaryColor = {link.secondaryColor}
              />
            )})
          }
      </SocialContainer>
       
  )
}

export default SocialMediaBar

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

