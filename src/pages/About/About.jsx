import Dropdown from "../../components/Dropdown/Dropdown";
import "./About.scss";
import Hero from '../../components/Hero/Hero'
import { getAllAboutElements } from "../../datas/dataManager";

function About() {
  const aboutElements = getAllAboutElements();

  return (
    <main className="aboutContainer">
      <Hero>
        <img src="/images/mountain_bg.png" alt="" />
      </Hero>
      {aboutElements.map((elt) => (
        <Dropdown content={elt.content} title={elt.title} key={elt.title} />
      ))}
    </main>
  );
}

export default About;
