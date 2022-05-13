import Dropdown from "../../components/Dropdown/Dropdown";
import "./About.scss";
import Hero from "../../components/Hero/Hero";
import { getAllAboutElements } from "../../datas/dataManager";

export default function About() {
  const aboutElements = getAllAboutElements();
  const url = "/images/bg_mountain.jpg";
  return (
    <main className="aboutContainer">
      <div>
        <Hero url={url} isFilter={true}/>
      </div>
      <div className="dropdownContainer">
        {aboutElements.map((elt) => (
          <Dropdown content={elt.content} title={elt.title} key={elt.title} />
        ))}
      </div>
    </main>
  );
}
