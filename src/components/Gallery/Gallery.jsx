import "./Gallery.scss";
import Card from "../Card/Card";
import {getAllAccomodations} from '../../datas/dataManager.js'

export default function Gallery() {
  const accomodations = getAllAccomodations()
  return (
    <div className="galleryContainer">
      {accomodations.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          cover={item.cover}
          id={item.id}
        />
      ))}
    </div>
  );
}