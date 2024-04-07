import React from 'react';
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import Skills from "./components/Skills/SkillCard";
import WorkExperience from "./components/WorkExperience/WorkExperience";

const App = () => {
  return (
    <div><h1>Hi, I'm Kirti</h1>
    <Navbar></Navbar>
    <div className="container">
      <Hero/>
      <Skills/>
      <WorkExperience/>
    </div>
    <Hero/>
    </div>
  );
}

export default App;
