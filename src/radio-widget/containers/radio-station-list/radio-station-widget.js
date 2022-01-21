import React, { useState, useEffect } from 'react';
import RadioStationList from '../../components/radio-station-list/radio-station-list.js';
import { fetchStations } from '../../services/radio-station-service.js'
import './radio-station-widget.css';

const RadioStationWidget = ({ currentlyPlayingIndex }) => {
    const [currentlyActiveIndex, setCurrentlyPlayingIndex] = useState(currentlyPlayingIndex);
    const [stationsList, setStations] = useState([]);
    const STATION_LIST_EXPAND_ALT = 'Station List Expand';
    const SWITCH_ALT = 'Radio Widget Switch';
    const onRadioSelect = (index) => {
        if (currentlyActiveIndex !== index) {
            setCurrentlyPlayingIndex(index);
        }
        else {
            setCurrentlyPlayingIndex(null);
        }
    }
    
    useEffect(() => {
        fetchStations().then((stations) => {
            setStations(stations);
        });        
    }, []);

    const currentStation = currentlyActiveIndex ? stationsList[currentlyActiveIndex] : null;

    return (
        <div className="widget">
            <div className="radioListHeader">
                <img 
                    className="control-button expand-button" 
                    src={ require('../../assets/images/back-arrow.png') } 
                    alt={ STATION_LIST_EXPAND_ALT } />
                <div className="header"> Stations </div>
                <img 
                    className="control-button on-of-button" 
                    src={ require('../../assets/images/switch.png') } 
                    alt={ SWITCH_ALT } />
            </div>
            <RadioStationList 
                onRadioSelect={ onRadioSelect }
                currentlyPlayingIndex={ currentlyActiveIndex }
                stations={ stationsList }
            />
            <div className="radioListFooter">
                <div className="footer-visible">
                    <div className="footer"> Currently playing </div>
                    <div className="currently-playing-title">
                        { currentStation?.title }
                    </div>
                </div>
            </div>
        </div>
      );
    };

export default RadioStationWidget;