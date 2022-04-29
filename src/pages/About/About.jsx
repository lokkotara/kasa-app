import Dropdown from "../../components/Dropdown/Dropdown";
import "./About.scss";
import Hero from '../../components/Hero/Hero'
import { getAllAboutElements } from "../../datas/dataManager";

export default function About() {
  const aboutElements = getAllAboutElements();
  const url = "/images/mountain_bg.png"
  return (
    <main className="aboutContainer">
      <Hero url={url}/>
      {aboutElements.map((elt) => (
        <Dropdown content={elt.content} title={elt.title} key={elt.title} />
      ))}
    </main>
  );
}
