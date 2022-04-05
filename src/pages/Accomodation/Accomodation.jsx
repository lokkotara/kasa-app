import './Accomodation.css';
import {useParams} from 'react-router-dom';
import {getAccomodation} from '../../datas/dataManager';
import fullStar from '../../assets/full-star.svg'
import emptyStar from '../../assets/empty-star.svg'
import Dropdown from '../../components/Dropdown/Dropdown'


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
            <Dropdown 
                props={accomodation.description}
            />
            <Dropdown 
                props={accomodation.equipments}
            />
            {range.map(ratingElem =>(
                parseInt(accomodation.rating) >= ratingElem ? <img src={fullStar} alt=""/> : <img src={emptyStar} alt=""/>
            ))}
            <p>{accomodation.location}</p>
            <div className="tagContainer">
                {accomodation.tags.map(tag=> (
                <span>{tag}</span>
            ))}
            </div>
        </div>
    )
}

export default Accomodation