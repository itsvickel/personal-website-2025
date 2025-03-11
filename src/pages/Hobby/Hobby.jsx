import { useState, useEffect } from 'react'  

import styled from 'styled-components';
import { color } from '../../style/Color';

import axios from 'axios';
import { fontSize } from '../../style/fontSize';


const api = axios.create({
  baseURL: 'https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp&limit=30&access_token=' + import.meta.env.VITE_REACT_APP_INSTAGRAM_ID})

const Hobby = () => { 

const [instagramPost, setInstagramPost] = useState([]);

  useEffect(() => {
  api.get().then((res)=>{
    console.log(res.data.data);
    setInstagramPost(res.data.data);
  }).catch((err)=>console.log(err));

  }, []);

  return (
      <Container>
        <Header>
          <MainTitle>Hobby</MainTitle>
        </Header>

        <InstagramPostContainer>
          {
            instagramPost.map((item, index)=>{
              return <Item key={index}>
                {item.media_type === "VIDEO" ? 
                <video width="320" height="240" controls>
                  <source src={item.media_url} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                : null}
                
                {item.media_type === "IMAGE" ?  <Image src={item.media_url}/>: null}
               
              </Item>
            })
          }
        </InstagramPostContainer>

      </Container>
  )
}

export default Hobby

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  max-height: 80vh;
  min-width: 50vw;
  max-width: 50vw;
  padding: 2%;
  background: ${color.white};
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
`;

const Header = styled.div`
  margin-right: auto;
`;

const InstagramPostContainer = styled.div`
  align-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap; 
  overflow-y: auto;
`;

const Item = styled.div`
  margin: 1% 0;
  flex: 33%;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
`;

const Image = styled.img`
  max-width: 300px; 
  max-height: 300px;
`;

const MainTitle = styled.div`
  font-size: ${fontSize.fontSize_2};
  color: ${color.main};
`;