import accomodations from './logements.json'
import aboutElements from './about.json'
const Accomodations = accomodations
const AboutElements = aboutElements


function getAllAccomodations() {
    return Accomodations
}
function getAccomodation(id) {
    return Accomodations.find(elt=>id ===elt.id)
}
function getAllAboutElements() {
    return AboutElements
    
}

export {
    getAccomodation,
    getAllAboutElements,
    getAllAccomodations
}