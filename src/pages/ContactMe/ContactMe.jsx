import React, { useRef, useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { ToastContainer, toast } from 'react-toastify';

import styled from 'styled-components';
import { color } from '../../style/color';
import { fontSize } from '../../style/fontSize';

import emailjs from 'emailjs-com';

import smartphone from '../../assets/smartphone.png';
import email from '../../assets/mail.png';
import location from '../../assets/location.png';

import Grow from '@mui/material/Grow';
import { constants } from '../../style/constant';

const ContactItem = (item, index) =>{
  return <ContactItemContainer href={item.href} key={index}>
    <Image src={item.img} />
    <Label> {item.label}</Label>
    <Description> {item.description}</Description>
  </ContactItemContainer>
}

function ContactMe() { 
  const [isCaptchaCleared, setIsCaptchaCleared] = useState(false);
  const form = useRef();

  const SERVICE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY =  import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_ID;

  const contactInfo = [
    {
      img: email,
      label: "Email Address",
      description: "Vickelleung@gmail.com",
      href:"mailto:Vickelleung@gmail.com"
    },
    {
      img: smartphone,
      label: "Phone Number",
      description: "(514) 815-8638",
      href:"tel:514-815-8638"
    },
    {
      img: location,
      label: "Location",
      description: "Saint-Jean-sur-Richelieu",
      href:"https://maps.app.goo.gl/wG9Sn5Sg4Yy7Wtjk9"
    },
  ]

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

  const textfieldStyle = {margin: '1%'};

  return (
    <Grow style={{ transitionDelay: '100ms' }} in={true}>
      <ContactContainer>
        <Header>
        <Title>Contact <Highligth>Me</Highligth></Title>
        </Header>
        <ContactWrapper>
          <ContactInformation>
            {contactInfo.map((item, index)=>{
              return ContactItem(item, index);
            })}
          </ContactInformation>

          <Title>Send me a <Highligth>Message</Highligth></Title>
          <ContactForm>
          <form ref={form} onSubmit={sendEmail}> 
        
            <FormContainer>
             
                <TextFieldItem
                  sx={textfieldStyle}
                  key={'name'}
                  name="user_name" 
                  label="What is your name?" 
                />
                
                <TextFieldItem
                  sx={textfieldStyle}
                  key={'email'}
                  name="user_email"
                  label="What is your email address?" 
                />

                <TextFieldItem
                  sx={textfieldStyle}
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
        </ContactWrapper>

        <ToastContainer autoClose={5000} />
      </ContactContainer>
      </Grow>
  )
}

export default ContactMe

const ContactContainer = styled.div`
  ${constants.defaultPageStyle};
`

const ContactForm = styled.div`
  text-align: center;
  width: 100%;
`;

const Captcha = styled.div``;

const Header = styled.div``;

const Title = styled.div`
  font-size: ${fontSize.fontSize_3}
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
  margin: 2%;
`;

const ContactWrapper  = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between; 
`;

const ContactInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    
  & : hover{
    opacity: 0.5;
  }
`;

const Label = styled.div`
  font-size: ${fontSize.fontSize_2_5};
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Description = styled.div`
  margin: 1%;
  color: ${color.grey808080};
  font-size: ${fontSize.fontSize_1_5};
`;

const ContactItemContainer = styled.a`
  height: fit-content;
  margin: 2%;
  padding: 3%;
  width: 12vw;
  height: 4vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${color.main};
  color: ${color.main};
  align-items: center;
  text-decoration: none;
`;