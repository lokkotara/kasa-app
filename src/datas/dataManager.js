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
 * [getAllAccomodations description]
 *
 * @return  {Array.<homeAccomadation>}  [return description]
 */
function getAllAccomodations() {
    return Accomodations.map(accomadation =>{return {
        cover:accomadation.cover,
        title:accomadation.title,
        id:accomadation.id
    }})
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