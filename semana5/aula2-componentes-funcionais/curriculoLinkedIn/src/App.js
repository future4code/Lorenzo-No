import React from 'react';
import './App.css';
import BusinessCard from './components/BusinessCard/BusinessCard'
import ContactInfo from './components/ContactInfo/ContactInfo'
import Position from './components/Position/Position'
import Course from './components/Course/Course'

function App() {
  return (
    <main>
      <BusinessCard name="Lorenzo Nathaniel No" title="Full Stack Web Student at Future4" location="São Paulo, Brazil"/>
      <section id="contact-info">
        <h2>Contact Info</h2>
        <ContactInfo email="lorenzono47@gmail.com" profile="linkedin.com/in/lorenzo-nathaniel-no-0392b6129"/>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <Position image="butantanInstitute.png" company="Butantan Institute" title="Clinical Research Associate"/>
        <Position image="butantanInstitute.png" company="Butantan Institute" title="Clinical Trial Assistant"/>
      </section>
      <section id="education">
        <h2>Education</h2>
        <Course image="future4.png" school="Future4" studyField="Full Stack Web Development"/>
        <Course image="unifesp.png" school="Federal University of São Paulo" studyField="Biomedical Sciences"/>
      </section>
      {/* <section id="network">
        <h2>Network</h2>
        
      </section> */}
    </main>
  )
}

export default App;