import "./Accomodation.css";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { getAccomodation } from "../../datas/dataManager";
import Hero from "../../components/Hero/Hero";
import Dropdown from "../../components/Dropdown/Dropdown";

function Accomodation() {
  let { id } = useParams();
  const accomodation = getAccomodation(id);
  const range = [1, 2, 3, 4, 5];
	const [currentPic, setCurrentPic] = useState(0);

	/**
	 * Permet de gérer la rotation infini du caroussel d'images
	 * @param {"previous"|"next"} order 
	 */
	function manageCarousel(order) {
		if(order ==="previous") {
			if(currentPic === 0) {
				setCurrentPic(accomodation.pictures.length - 1)
			} else {
				setCurrentPic(currentPic-1)
			}
		}
		if(order ==="next") {
			if(currentPic === accomodation.pictures.length - 1) {
				setCurrentPic(0)
			} else {
				setCurrentPic(currentPic+1)
			}
		}
	}

  return (
    <main>
      <Hero>
        <i className="fas fa-chevron-left chevron chevron-left" onClick={() => manageCarousel("previous")}></i>
        <img src={accomodation.pictures[currentPic]} alt="" />
        <i className="fas fa-chevron-right chevron chevron-right" onClick={() => manageCarousel("next")}></i>
        <p className="pagination">{currentPic+1}/{accomodation.pictures.length}</p>
      </Hero>
      <section className="headingContainer">
        <div className= "headingFirstPart">
          <div>
            <h1>{accomodation.title}</h1>
            <p>{accomodation.location}</p>
          </div>
          <div className="tagContainer">
            {accomodation.tags.map((tag) => (
              <span className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className= "headingSecondPart">
          <div className="ownerIdentity">
            <p>{accomodation.host.name}</p>
            <img src={accomodation.host.picture} alt="" />
          </div>
          <div className="rating">
            {range.map((ratingElem) =>
              parseInt(accomodation.rating) >= ratingElem ? (
                <i className="fas fa-star full"></i>
              ) : (
                <i className="fas fa-star empty"></i>
              )
            )}
          </div>
        </div>
      </section>
      <section className="DropdownContainer">
        <Dropdown props={accomodation.description} />
        <Dropdown props={accomodation.equipments} />
      </section>
    </main>
  );
}

export default Accomodation;
