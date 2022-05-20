import { Link } from 'react-router-dom'
import './Card.scss'

/**
 * Affiche les infos d'un logement sous forme de carte
 * @param {Object} props Les propriétés nécessaires pour afficher le logement
 * @param {String} props.title Le titre du logement
 * @param {String} props.cover L'url de l'image du logement
 * @param {String} props.id L'id du logement
 * @component 
 */
export default function Card({title, cover, id}) {

	return (
		<div>
			<Link to={`/Accomodation/${id}`}>
				<article className="accomodationCard">
						<img className="thumbs" src={cover} alt="" />
						<div className="cardGradient">
							<h1>{title}</h1>
						</div>
				</article>
			</Link>
		</div>
	)
}