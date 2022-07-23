import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have a wide range of skills in the following areas:
  front-end development, back-end development, database management, and more.  
    </SectionText>
<List>
  <ListItem>
    <DiReact size='3rem' />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br/>
        React,Next JS
         </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size='3rem' />
    <ListContainer>
      <ListTitle>Databases</ListTitle>
      <ListParagraph>
        Experience with <br/>
        MySQL,MongoDB
         </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiZend size='3rem' />
    <ListContainer>
      <ListTitle>Back-end</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Node JS,Express
         </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
  </Section>
);

export default Technologies;
