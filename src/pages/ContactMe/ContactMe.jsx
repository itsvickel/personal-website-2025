import React, { useRef, useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { ToastContainer, toast } from 'react-toastify';

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

  const notifySuccess = () => toast('I got your email! I`ll get back to you ASAP!');
  const notifyError = () => toast('The email could not be sent, please try again');

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          notifySuccess();
          form.current.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          notifyError();
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
          <FormContainer>
            <TextFieldItem
              key={'name'}
              name="user_name" 
              label="What is your name?" 
            />
            
            <TextFieldItem
              key={'email'}
              name="user_email"
              label="What is your email address?" 
            />

            <TextFieldItem
              key="message" 
              name="message"
              multiline
              rows={4}
              label="Write your message here..." 
            />
          </FormContainer>

            <Captcha></Captcha>
            
            <Button variant="outlined" type="submit" key={'submit'}>Submit</Button>

          </form>
        </ContactForm>

        <ToastContainer autoClose={5000} />
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

const ContactForm = styled.div`
  text-align: center;
  margin: 0  10%;
`;

const Captcha = styled.div``;

const Header = styled.div``;

const Title = styled.div`
  font-size: ${fontSize.fontSize_2}
`

const Highligth = styled.span`
  color: ${color.subtext}
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextFieldItem  = styled(TextField)`
  padding: 10%;
`;