import './Accomodation.css';
import {useParams} from 'react-router-dom';
import {getAccomodation} from '../../datas/dataManager'

function Accomodation() {

    let {id} = useParams();
    const accomodation = getAccomodation(id);
    const range = [1, 2, 3, 4, 5]

    return (
        <div>
            <img src= {accomodation.cover} alt="" />
            <p>nom : {accomodation.title}</p>
            <p>{accomodation.host.name}</p>
            <img src= {accomodation.host.picture} alt="" />
            <p>description : {accomodation.description}</p>
            <p>{parseInt(accomodation.rating)}</p>
            {range.map(ratingElem =>(
                parseInt(accomodation.rating) >= ratingElem ? <img src="../../assets/full-star.png" alt=""/> : <img src="../../assets/empty-star.png" alt=""/>
            ))}
            <p>{accomodation.location}</p>
            {accomodation.tags.map(tag=> (
                <span>{tag}</span>
            ))}
        </div>
    )
}

export default Accomodation