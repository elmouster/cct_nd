import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import './radio-station.css'

const RadioStation = ({index, active, pictureUrl, title, wave, onRadioSelect}) => {
    const baseUrl = "../../assets/images/logos/";
    const [isActive, setActive] = useState(active);
    const radioStation = useRef(null);

    return (
        <div onClick={() => onRadioSelect(index)} class="station">
            <CSSTransition in={active} nodeRef={radioStation} unmountOnExit appear={true} classNames={"station-details"} timeout={2000}>
            <div class="station-details" ref={radioStation} >

                <img class="volume-button" src={require("../../assets/images/minus.png")}/>
                <img class="station-picture" />
                <img class="volume-button" src={require("../../assets/images/plus.png")}/>

            </div>
            </CSSTransition>
            <div class="station-desc">
                <span>{title}</span> <span>{wave}</span>
            </div>
            <hr />
        </div>
      );
  }

export default RadioStation