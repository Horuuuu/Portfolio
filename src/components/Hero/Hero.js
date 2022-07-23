import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection> 
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
        </SectionTitle>
      <SectionText >
        I'm a full stack developer with a passion for building beautiful, responsive websites.
      </SectionText>
      <Button onClick={()=> window.location = 'https://drive.google.com/file/d/11P1mtpicKF2ZjGra2BUmHoSgwEvxT3UB/view?usp=sharing'} >Resume</Button>

         </LeftSection>
  </Section> 
);

export default Hero;