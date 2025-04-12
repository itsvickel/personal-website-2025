import { useState } from 'react'
import styled from 'styled-components';

import { color } from '../../style/color'
import { fontSize } from '../../style/fontSize';
 
import Slide from '@mui/material/Slide';
import { constants } from '../../style/constant';

import useMediaQuery from '@mui/material/useMediaQuery';

import RippleButton from '../../components/RippleButton/RippleButton';

import VickelResume from "../../assets/Vickel_Leung.pdf";

function Resume() {
 
  return (
    <Slide direction={'down'} in={true}>
      <Container>
        <Title>My <Highligth>Resume</Highligth></Title>
        <iframe
          src={VickelResume}
          width="100%"
          height="100%"
          style={{ border: "none", borderRadius: "12px", minHeight: "90vh" }}
          title="Vickel Leung"
        />
 
      </Container>

    </Slide>
  )
}

export default Resume

const Container = styled.div`
  ${constants.defaultPageStyle};
`;

const Title = styled.div`
  font-size: ${fontSize.fontSize_3};
`

const Highligth = styled.span`
  color: ${color.subtext}
`