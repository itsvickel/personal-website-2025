import { useState } from 'react';
import styled from 'styled-components';
import { color } from './style/Color';
import Profile from './components/Profile/profile';
import AboutMe from './pages/AboutMe/AboutMe';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ContactMe from './pages/ContactMe/ContactMe';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Hobby from './pages/Hobby/Hobby';

function App(props) { 

  return (
    <MainComponent> 
       
      <Profile 
        about={props.page === 'about' ? <AboutMe /> : null}
        work={props.page === 'workExperience' ? <WorkExperience /> : null}
        hobby={props.page === 'hobby' ? <Hobby /> : null}
        contact={props.page === 'contact' ? <ContactMe /> : null}
        // project={props.page === 'project' ? <Project /> : null}
 
      />
      
      <NavigationBar />
    </MainComponent>
  )
}

export default App

const MainComponent = styled.div`
  height: 100vh;
  background: ${color.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;