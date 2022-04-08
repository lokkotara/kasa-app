import './Home.css';
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/Gallery/Gallery'
import BgImage from '../../assets/bg_image.jpg'

function Home() {
  return (
    <main>
      <Hero>
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={BgImage} alt="" />
        <div className="heroFilter"></div>
      </Hero>
      <Gallery />
    </main>
  );
}

export default Home;
