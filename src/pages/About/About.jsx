import Dropdown from "../../components/Dropdown/Dropdown";
import './About.scss';
import {getAllAboutElements} from '../../datas/dataManager'

function About() {
    const aboutElements = getAllAboutElements();
    
    return (
        <div className="aboutContainer">
            {aboutElements.map(elt => (
                <Dropdown content={elt.content} title={elt.title} key={elt.title}/>
            ))}
        </div>
    )
}

export default About