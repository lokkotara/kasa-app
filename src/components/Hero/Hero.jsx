import "./Hero.scss";
import React, { useState } from "react";

/**
 *
 * @param {Object} props
 * @param {String}  [props.url]
 * @param {String} [props.title]
 * @param {Array} [props.pictures]
 * @component
 */
export default function Hero(props) {
  const [currentPic, setCurrentPic] = useState(0);
  function showTitle() {
    if (!props.title) return;
    return <h1>{props.title}</h1>;
  }
  /**
   * Permet de gérer la rotation infini du caroussel d'images
   * @param {"previous"|"next"} order
   */
  function manageCarousel(order) {
    if (order === "previous")
      currentPic === 0
        ? setCurrentPic(props.pictures.length - 1)
        : setCurrentPic(currentPic - 1);
    if (order === "next")
      currentPic === props.pictures.length - 1
        ? setCurrentPic(0)
        : setCurrentPic(currentPic + 1);
  }
  function manageHero() {
    if (!props.pictures) return <img src={props.url} alt="" />;
    return (
      <React.Fragment>
        <i
          className="fas fa-chevron-left chevron chevron-left"
          onClick={() => manageCarousel("previous")}
        ></i>
        <img src={props.pictures[currentPic]} alt="" />
        <i
          className="fas fa-chevron-right chevron chevron-right"
          onClick={() => manageCarousel("next")}
        ></i>
        <p className="pagination">
          {currentPic + 1}/{props.pictures.length}
        </p>
      </React.Fragment>
    );
  }
  return (
    <section className="heroContainer">
      {manageHero()}
      {showTitle()}
    </section>
  );
}
