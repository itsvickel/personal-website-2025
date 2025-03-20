import { useState, useEffect } from 'react'  

import styled from 'styled-components';

import Skeleton from '@mui/material/Skeleton';

import axios from 'axios';
import { fontSize } from '../../style/fontSize';
import { color } from '../../style/Color';

import ImageZoom from '../../components/ImageZoom/ImageZoom';

import Slide from '@mui/material/Slide';
import { constants } from '../../style/constant';

const api = axios.create({
  baseURL: 'https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp&limit=30&access_token=' + import.meta.env.VITE_REACT_APP_INSTAGRAM_ID})

const populateSkeleton = (length) =>{
  let result = [];
  for(let i = 0; i < length; i++){
   result.push(<Skeleton sx={{margin:"1%"}} key={i} variant="rectangular" width={'14em'} height={'14em'} />)
  }
  return result;
}

const Portfolio = () => { 

const [instagramPost, setInstagramPost] = useState([]);
const [zoomedData, setZoomedData] = useState({});
const [isModal, setIsModal] = useState(false);
const [skeletonItems, setSkeletonsItems] = useState([]);

  useEffect(() => {

    setSkeletonsItems(populateSkeleton(12));

  api.get().then((res)=>{
    setInstagramPost(res.data.data);
  }).catch((err)=>console.log(err));

  }, []);

  return (
    <Slide direction={'up'} in={true}> 
        <Container>
          <Header>
            <Title>My <Highligth>Portfolio</Highligth></Title>
            <Subtext>This is my 3D art portfolio, feel free to follow me!</Subtext>
            <Link href="https://www.instagram.com/vick3l" >Click here to see more</Link>
          </Header>

          <InstagramPostContainer>

            {instagramPost.length > 0 ? 
            instagramPost.map((item, index)=>{
              return <Item key={index} onClick={()=>{
                setIsModal(true);
                setZoomedData(item);
              }} >
                {item.media_type === "VIDEO" ? 
                <Video controls>
                  <source src={item.media_url} type="video/mp4" />
                Your browser does not support the video tag.
                </Video>
                : null}
                
                {item.media_type === "IMAGE" ?  <Image src={item.media_url}/>: null}
              
              </Item>
            })
            : 
              skeletonItems.map((item)=>{
                return item;
              })
            }
          </InstagramPostContainer>
          {
            isModal ?  <ImageZoom data={zoomedData} isOpen={isModal} handleClose={()=> setIsModal(false) } /> : null
          }
        </Container>
  </Slide>
  )
}

export default Portfolio;

const Container = styled.div`
  ${constants.defaultPageStyle};
`;

const Header = styled.div`
  margin-right: auto;
`;

const InstagramPostContainer = styled.div`
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

const Video = styled.video`
  max-width: 300px; 
  max-height: 300px;
`;

const Subtext = styled.div`
  color: ${color.grey808080};
`;

const Link = styled.a``;

const Title = styled.div`
  font-size: ${fontSize.fontSize_2}
`

const Highligth = styled.span`
  color: ${color.subtext}
`