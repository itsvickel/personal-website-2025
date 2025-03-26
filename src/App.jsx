import { useState, useEffect, useMemo } from 'react' 
import styled from 'styled-components';
import { color } from './style/color';
import Profile from './components/Profile/Profile';
import AboutMe from './pages/AboutMe/AboutMe';
import NavigationBar from './components/NavigationBar/NavigationDesktop';
import ContactMe from './pages/ContactMe/ContactMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Home from './pages/Home/Home';

import particlesOptions from "./particles.json";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import IntroCurtain from './components/IntroCurtain/IntroCurtain';

function App(props) { 
  const [init, setInit] = useState(false);
  
  const [showIntrocreen, setShowIntrocreen] = useState(
    () => !JSON.parse(sessionStorage.getItem("showedIntrocreen"))
  );

  useEffect(() => { 

    setTimeout(() => {
      // Update local state to trigger component rerender
      setShowIntrocreen(false);
      // Update localStorage for next time app is mounted
      sessionStorage.setItem("showedIntrocreen", JSON.stringify(true));
    }, 5000);

    initParticlesEngine(async (engine) => {
        await loadFull(engine);
    }).then(() => {
        setInit(true);
    });
}, [init]);

  return (
    <MainComponent> 
      {showIntrocreen ? (
        <IntroCurtain />
        ) : (
       init && 
       <>
        <Particles  
            options={particlesOptions}>
          </Particles>
        <Profile 
          home={props.page === '' ? <Home /> : null}
          about={props.page === 'about' ? <AboutMe /> : null}
          work={props.page === 'resume' ? <Resume /> : null}
          portfolio={props.page === 'portfolio' ? <Portfolio /> : null}
          contact={props.page === 'contact' ? <ContactMe /> : null}
          // project={props.page === 'project' ? <Project /> : null}
        />
        <NavigationBar />    
      </>   
      )
      }
    </MainComponent>
  )
}

export default App

const MainComponent = styled.div`
  height: 100vh;
  width: 100%;
  background: ${color.background};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px){
    background: none;
    align-items: start;
  }

`;