import './Home.scss';
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/Gallery/Gallery'

function Home() {
  return (
    <main className="homeContainer">
      <Hero>
        <h1>Chez vous, partout et ailleurs</h1>
        <img src="/images/bg_image.jpg" alt="" />
      </Hero>
      <Gallery />
    </main>
  );
}

export default Home;
