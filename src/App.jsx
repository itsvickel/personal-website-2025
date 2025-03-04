import { useState } from 'react';
import styled from 'styled-components';
import { color } from './style/Color';
import Profile from './components/Profile/profile';

function App() { 

  return (
    <MainComponent> 
      
      <Profile />

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