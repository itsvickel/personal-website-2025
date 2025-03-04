import { useState } from 'react'  

function SocialMediaBar(props) { 
  return (
      <SocialContainer>
          {
           props.socialLinks.map((link) => {  
            return(
              <div  key={index} className='user-data'>
                //if you're using a table might  need to change the  `p` tag with `td` inside a `tr`
                <p>{user.firstname} </p>
              </div>
            )})
          }
      </SocialContainer>
       
  )
}

export default SocialMediaBar

const SocialContainer = styled.div``;