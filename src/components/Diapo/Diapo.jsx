import './Diapo.scss'
import { useState } from 'react';

/**
 * 
 * @param {Object} props 
 * @param {Array}  props.images
 * @param {String} [props.title]
 * @param {String} [props.customClass]
 * @component 
 */
export default function Hero(props) {
    const [currentSlide, setSlide] = useState(0);

    function showTitle(){
        if (!props.title) return;
        return (<h1>{props.title}</h1>)
    }

    function bgStyle(){
        if (props.images.length > 1) return {"backgroundImage": `url(${props.images[currentSlide]})`};
        return {background: `linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${props.images[0]})`};
    }

    return (
        <section className={"heroContainer "+props.customClass } style={bgStyle()}>
            {showSlider(props.images, currentSlide)}
            {showTitle()}
        </section>
    )
}


function showSlider(list, current){
    if (list.length === 1) return;
    return (
        <i></i>
    )
}