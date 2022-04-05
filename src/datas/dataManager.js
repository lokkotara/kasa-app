import accomodations from './logements.json'
const Accomodations = accomodations

function getAllAccomodations() {
    return Accomodations
}
function getAccomodation(id) {
    return Accomodations.find(elt=>id ===elt.id)
}

export {
    getAccomodation,
    getAllAccomodations
}