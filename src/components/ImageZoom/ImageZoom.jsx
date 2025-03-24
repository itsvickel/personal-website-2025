import { useState } from 'react';  
import styled from 'styled-components';
import { color } from '../../style/color';

import Modal from '@mui/material/Modal';
import { fontSize } from '../../style/fontSize';

const spliceCaption = (caption, delimiter) =>{

  return caption.split(delimiter);;
}

const findDescription = (caption) =>{
  
}

function ImageZoom(props) { 
  return (
        <Modal
          open={props.isOpen}
          onClose={props.handleClose}
          sx={{alignContent: 'center'}}
        >
            <ImageContent> 
              <CloseButton onClick={props.handleClose}>X</CloseButton>
              {props.data.media_type === "IMAGE" ?  <Image src={props.data.media_url}/>:  
                  <video width="320" height="240" controls>
                    <source src={props.data.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                  </video>} 
              <Caption>{spliceCaption(props.data.caption, "#")[0]}</Caption>
            </ImageContent>
        </Modal>
  )
}

export default ImageZoom

const ImageContent = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
  margin: auto; /* 15% from the top and centered */
  padding: 2%;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
`;

const Image = styled.img`
  max-width: 50%;
  max-height: 50%;
`;

const Caption  = styled.div`
  margin: 2% 0;
  font-size: ${fontSize.fontSize_2_5};
`;

const CloseButton = styled.div`
  margin-left: auto; 
  margin-right: 0;
  font-size: ${fontSize.fontSize_2_5};
  font-weight: bold;

  &: hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;