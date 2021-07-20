import { Navbar } from './layout/Navbar';
import { Home } from './layout/Home';
import { Skills } from './layout/Skills';
import { Projects } from './layout/Projects';
import { Contact } from './layout/Contact';
import { Footer } from './layout/Footer';
import React, { useRef } from 'react';

function App() {
  const homeRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()

  return (
    <>
      <Navbar homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Home ref={homeRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer homeRef={homeRef}/>
    </>
  );
}

export default App;
