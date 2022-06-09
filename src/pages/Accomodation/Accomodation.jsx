import "./Accomodation.scss";
import { Navigate, useParams } from "react-router-dom";
import { getAccomodation } from "../../datas/dataManager";
import Hero from "../../components/Hero/Hero";
import Dropdown from "../../components/Dropdown/Dropdown";
// @ts-ignore
import emptyStar from "../../assets/empty-star.svg";
// @ts-ignore
import fullStar from "../../assets/full-star.svg";

export default function Accomodation() {
  const { id }                  = useParams();
  if (getAccomodation(id) === undefined) return <Navigate to="/Error"/>;
  const accomodation            = getAccomodation(id);
  const range                   = [1, 2, 3, 4, 5];
  const [firstname,lastname]    = accomodation.host.name.split(" ");
  
  return (
    <main className="accomodationContainer">
      <Hero pictures={accomodation.pictures} />
      <section className="headingContainer">
        <div className="headingFirstPart">
          <div>
            <h1>{accomodation.title}</h1>
            <p>{accomodation.location}</p>
          </div>
          <div className="tagContainer">
            {accomodation.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="headingSecondPart">
          <div className="ownerIdentity">
            <div className="ownerName">
              <p>{firstname}</p>
              <p>{lastname}</p>
            </div>
            <img src={accomodation.host.picture} alt="" />
          </div>
          <div className="rating">
            {range.map((ratingElt, index) =>
              parseInt(accomodation.rating) >= ratingElt ? (
                <img src={fullStar} alt="" key={"fs" + index} />
              ) : (
                <img src={emptyStar} alt="" key={"es" + index} />
              )
            )}
          </div>
        </div>
      </section>
      <section className="DropdownContainer">
        <Dropdown
          content={accomodation.description}
          title="Description"
          key={accomodation.id + "Desc"}
        />
        <Dropdown
          content={accomodation.equipments}
          title="Equipements"
          key={accomodation.id + "Equip"}
        />
      </section>
    </main>
  );
}
