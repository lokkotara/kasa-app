import './Hero.css'
import BgImage from '../../assets/bg_image.jpg'

function Hero() {
    return (
        <section className="heroContainer">
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={BgImage} alt="" />
            <div className="heroFilter"></div>
        </section>
    )
}

export default Hero