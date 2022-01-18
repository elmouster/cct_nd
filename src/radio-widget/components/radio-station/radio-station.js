import React from 'react';
import './radio-station.css'

const RadioStation = ({index, active, pictureUrl, title, wave, onRadioSelect}) => {

    return (
        <div onClick={() => onRadioSelect(index)}>
            <div class="station-details" className={active ? "station-visible" : "station-hidden"}>
                <button class="volume-button"></button>
                <img class="station-picture" src={ pictureUrl }/>
                <button class="volume-button"></button>
            </div>
            <div class="station-desc">
                {title} {wave}
            </div>
        </div>
      );
  }

export default RadioStation