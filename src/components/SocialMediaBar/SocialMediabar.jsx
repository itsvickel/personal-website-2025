import { useState } from 'react';  
import styled from 'styled-components';

import LinkItem from '../LinkItem/LinkItem';

function SocialMediaBar(props) { 
  let socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/vick3l"
    },
    {
      name: "Github",
      href: "https://www.github.com/itsvickel"
    },
    {
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
`;