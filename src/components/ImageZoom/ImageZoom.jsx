import { useState } from 'react';  
import styled from 'styled-components';
import { color } from '../../style/Color';

function ImageZoom(props) { 
  return (
      <ImageZoomContainer>
          <p>{props.name} </p>
          <a href={props.href} />
      </ImageZoomContainer>
       
  )
}

export default ImageZoom

const ImageZoomContainer = styled.div`
    
`;