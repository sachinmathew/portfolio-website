import React from 'react';
import Hero from './components/Hero';
import MenuBar from './components/MenuBar';
import TextBlock from './components/TextBlock';

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <MenuBar />
      <TextBlock text={"Hi, I'm Sachin Mathew—Senior DevOps Engineer. \n I love turning ideas into scalable solutions, building seamless infrastructure for enterprise applications, and making development effortless for teams."} className="maintext" />
      <TextBlock text={"Kubernates | Jenkins(CI/CD) | AWS | JFrog | Dynatrace | React | Spring Boot | Python"} className="mainsubtext" />
      <TextBlock text={"Last Updated: Novemeber 2025"} className="lastupdated" />
    </>
  );
};

export default App;