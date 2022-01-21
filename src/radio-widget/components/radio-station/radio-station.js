import React, { useRef } from 'react';
import useStationActivation from '../../services/hooks/useStationActivation.js'
import './radio-station.css'

const VOLUME_UP_ALT = 'volume-up';
const VOLUME_DOWN_ALT = 'volume-down';

const RadioStation = ({ index, active, pictureUrl, title, wave, onRadioSelect }) => {
    const radioStationRef = useRef(null);

    useStationActivation(radioStationRef.current, active);

    return (
        <div onClick={ () => onRadioSelect(index) } className="station-wrapper">
            <div 
                ref={ radioStationRef }
                className={active ? "station-details station:active" : "station-details station"}>

                <img 
                    className="volume-button" 
                    src={ require('../../assets/images/minus.png') } 
                    alt={ VOLUME_UP_ALT } />
                <img 
                    className="station-picture" 
                    src={ '' + pictureUrl } 
                    alt={ title } />
                <img 
                    className="volume-button" 
                    src={ require('../../assets/images/plus.png') } 
                    alt={ VOLUME_DOWN_ALT } />

            </div>

            <div className="station-desc">
                <span>{ title }</span> <span>{ wave }</span>
            </div>

            <hr/>
        </div>
      );
  }

export default RadioStation