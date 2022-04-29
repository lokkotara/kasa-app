import { Link } from 'react-router-dom'
import './Card.scss'

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