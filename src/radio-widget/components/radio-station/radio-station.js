import React, {useRef} from 'react';
import './radio-station.css'

const RadioStation = ({index, active, pictureUrl, title, wave, onRadioSelect}) => {
    const radioStation = useRef(null);

    if (radioStation.current) {
        if (active) {
            radioStation.current.style.maxHeight = radioStation.current.style.height;
        }
        else {
            radioStation.current.style.maxHeight = 0;
        }
    }

    return (
        <div onClick={() => onRadioSelect(index)} class="station">
            <div ref={radioStation} className={active ? "station-details station-visible" : "station-details station-hidden"}>

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