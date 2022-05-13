/**
 * @typedef {Object} homeAccomadation
 * @property {string} title
 * @property {string} cover
 * @property {String} id
 */

import accomodations from './logements.json'
import aboutElements from './about.json'
const Accomodations = accomodations
const AboutElements = aboutElements

/**
 * Retourne l'image, le titre et l'id de tous les logements
 *
 * @return  {Array<homeAccomadation>}  Un array d'objets
 */
function getAllAccomodations() {
    return Accomodations.map(accomadation => {return{
        cover   : accomadation.cover,
        id      : accomadation.id,
        title   : accomadation.title,
    }})
}


function getAccomodation(id) {
    return Accomodations.find(elt=>id ===elt.id);
}


function getAllAboutElements() {
    return AboutElements;
}

export {
    getAccomodation,
    getAllAboutElements,
    getAllAccomodations
}