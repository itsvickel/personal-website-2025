import { useState } from 'react';
import styled from 'styled-components';
import { color } from './style/Color';
import Profile from './components/Profile/profile';
import AboutMe from './pages/AboutMe/AboutMe';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ContactMe from './pages/ContactMe/ContactMe';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Hobby from './pages/Hobby/Hobby';

function App() { 

  return (
    <MainComponent> 
       
      <Profile 
      about={<AboutMe />}
      work={<WorkExperience />}
      hobby={<Hobby />}
      contact={<ContactMe />}
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