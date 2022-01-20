import React, {useState, useRef, useEffect} from 'react';
import './radio-station.css'

const RadioStation = ({index, active, pictureUrl, title, wave, onRadioSelect}) => {
    const radioStation = useRef(null);
    const [isActive, setActive] = useState(active);

    if (radioStation.current) {
        if (isActive) {
            radioStation.current.style.maxHeight = radioStation.current.style.height;
        }
        else {
            radioStation.current.style.maxHeight = 0;
        }
    }

    useEffect(() => {
        setActive(active);        
    }, [active]);

    return (
        <div onClick={() => onRadioSelect(index)} class="station">
            <div ref={radioStation} className={isActive ? "station-details station-hidden:active" : "station-details station-hidden"}>

                <img class="volume-button" src={require("../../assets/images/minus.png")}/>
                <img class="station-picture" src={"" + pictureUrl} />
                <img class="volume-button" src={require("../../assets/images/plus.png")}/>

            </div>
            <div class="station-desc">
                <span>{title}</span> <span>{wave}</span>
            </div>
            <hr />
        </div>
      );
  }

export default RadioStation