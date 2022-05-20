import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Gallery from "../../components/Gallery/Gallery";

export default function Home() {
  const text = "Chez vous, partout et ailleurs",
    url = "./images/bg_image.jpg";
  return (
    <main className="homeContainer">
      <Hero title={text} url={url} isFilter={true} />
      <Gallery />
    </main>
  );
}
