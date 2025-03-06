import { useState } from 'react'  
import styled from 'styled-components';

import { color } from '../../style/Color'
import { fontSize } from '../../style/fontSize';

function WorkExperience() { 
  const works = [
    {
      name: "Portable EHR",
      date: "2022-2024",
      role: "Software Developer",
      description: "I designed and implemented a scalable front-end architecture using React, incorporating reusable components, Redux for state management, efficient routing, and i18n for multilingual support. I developed a dynamic web portal that allows users to book appointments, engage in real-time chat, and automate responses to common client inquiries. I integrated WebSockets to enable real-time, bidirectional communication for chat functionality and instant notifications. I also created seamless, user-friendly UI/UX experiences by designing intuitive user flows, cohesive color palettes, and highly reusable components",
    },
    {
      name: "Geothentic",
      date: "2022-2024",
      role: "Software Developer",
      description: "I contributed to integrating WebSockets for real-time fleet tracking, enabling live updates on location, fuel consumption, horometer, odometer, and vehicle status. I designed and implemented complex UI/UX features for web applications using React.js, leveraging reusable components, state management, and dynamic rendering. I also participated in weekly scrum meetings to discuss progress, address blockers, and ensure the timely delivery of features and bug fixes."
    },
    {
      name: "Skylow",
      date: "2022-2024",
      role: "Software Developer",
      description: "I assessed, developed, and managed software projects to align with weekly deliverables and objectives. I engineered solutions tailored to client requirements and strategic business goals. I also led collaborative peer reviews to refine, optimize, and rigorously test newly implemented features." 
    }
  ]

  const [selectedDescription, setSelectedDescription] = useState(works[0].description);

  return (
      <Container>
        <Header>
          <Title>Work <Highligth>Experience</Highligth></Title>
          <Underline />
        </Header>

      
      <RowContainer>
        <WorkContainer>
          {
            works.map((item, index) =>{
              return <WorkItem selected={selectedDescription === item.description} onClick={()=>setSelectedDescription(item.description)} key={index}>
                <RowContainer>
                  <div>{item.name}</div>
                  <div>{item.date}</div>
                </RowContainer>
                  {item.role}
              </WorkItem>
            })
          }
        </WorkContainer>

        <WorkDescription>
          {
            selectedDescription
          }
        </WorkDescription>
      </RowContainer>
    </Container>
       
  )
}

export default WorkExperience

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  max-height: 80vh;
  min-width: 60vw;
  padding: 2%;
  background: ${color.white};
  border-radius: 20px;
  box-shadow: 10px 5px 5px ${color.lightGrey};
`;

const Title = styled.div`
  font-size: ${fontSize.fontSize_2};
  
`

const Highligth = styled.span`
  color: ${color.subtext}
`

const Underline = styled.div`
  margin: 1% 0;
  border-bottom: 1px solid ${color.brown};
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WorkItem = styled.div`
  width: 15vw;
  height: 8vh;
  padding: 2%;
  margin: 2%;   
  border-radius: 10px;
  color: ${props => props.selected ? color.white : color.main };
  font-size: ${fontSize.fontSize_1_2}
  display: flex;
  flex-direction: column;
  background: ${props => props.selected ? color.subtext : color.greyE8E8E8 };
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${color.main}
`;

const WorkDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
  margin: 6% 4%;
  border-radius: 10px;
  font-size: ${fontSize.fontSize_1_5};
  background: ${color.greyF5F5F5};
`;

const Header = styled.div`
  margin-right: auto;
`;