import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import { color } from '../../style/Color';
import { fontSize } from '../../style/fontSize';

import emailjs from 'emailjs-com';


function ContactMe() { 
  const [isCaptchaCleared, setIsCaptchaCleared] = useState(false);
  const form = useRef();

  const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY =  import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <ContactContainer>
        <Header>
        <Title>Contact <Highligth>Me</Highligth></Title>
        </Header>
        <ContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <Name key={'name'} name="user_name"  type="text" ></Name>
          <Email key={'email'} name="user_email" type="email" ></Email>
          <Message name="message"></Message>
          
          <Captcha></Captcha>
          
          <Submit key={'submit'}>Submit</Submit>

          </form>
        </ContactForm>
      </ContactContainer>
  )
}

export default ContactMe

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  max-height: 80vh;
  min-width: 50vw;
  max-width: 50vw;
  padding: 2%;
  overflow: auto;
  background: ${color.white};
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
`

const ContactForm = styled.div``;

const Name = styled.input``;
const Email = styled.input``;
const Message = styled.textarea``;
const Captcha = styled.div``;
const Submit = styled.button``;


const Header = styled.div``;

const Title = styled.div`
  font-size: ${fontSize.fontSize_2}
`

const Highligth = styled.span`
  color: ${color.subtext}
`