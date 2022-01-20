import React, {useState, useRef} from 'react';
import './radio-station.css'

const RadioStation = ({index, active, pictureUrl, title, wave, onRadioSelect}) => {
    const baseUrl = "../../assets/images/logos/";
    const radioStation = useRef(null);
    // const [startTransition, isPending] = useTransition({ timeoutMs: 500 });
    const [isActive, setActive] = useState(active);

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
            <div class="station-details" ref={radioStation} className={active ? "station-visible" : "station-hidden"}>

                <img class="volume-button" src={require("../../assets/images/minus.png")}/>
                <img class="station-picture" />
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