import './Hero.css'

function Hero({children}) {
    return (
        <section className="heroContainer">
            {children}
        </section>
    )
}

export default Hero