import { useState } from 'react';  
import styled from 'styled-components';

import LinkItem from '../LinkItem/LinkItem';

import github from '../../assets/github-sign.png';
import instagram from '../../assets/instagram.png';
import email from '../../assets/email.png';

function SocialMediaBar(props) { 
  let socialLinks = [
    {
      img: instagram,
      name: "Instagram",
      href: "https://www.instagram.com/vick3l"
    },
    {
      img : github,
      name: "Github",
      href: "https://www.github.com/itsvickel"
    },
    {
      img: email,
      name: "Email",
      href: "vickelleung@gmail.com"
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