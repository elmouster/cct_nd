import React, { useRef, useEffect } from 'react';
import './radio-station.css'

const RadioStation = ({ index, active, pictureUrl, title, wave, onRadioSelect }) => {
    const radioStation = useRef(null);

    useEffect(() => {
        if (radioStation.current) {
            radioStation.current.style.maxHeight = active 
                ? (radioStation.current.scrollHeight + radioStation.current.parentElement.scrollHeight + 32) + 'px' 
                : 0;
        }       
    }, [active]);

    return (
        <div onClick={ () => onRadioSelect(index) } className="station-wrapper">
            <div ref={ radioStation } className={active ? "station-details station:active" : "station-details station"}>

                <img className="volume-button" src={ require("../../assets/images/minus.png") }/>
                <img className="station-picture" src={ "" + pictureUrl } />
                <img className="volume-button" src={ require("../../assets/images/plus.png") }/>

            </div>

            <div className="station-desc">
                <span>{ title }</span> <span>{ wave }</span>
            </div>

            <hr/>
        </div>
      );
  }

export default RadioStation