import React, { useState, useEffect } from 'react';
import RadioStationList from '../../components/radio-station-list/radio-station-list.js';
import { fetchStations } from '../../services/radio-station-service.js'
import './radio-station-widget.css';

const RadioStationWidget = ({currentlyPlayingIndex}) => {
    const [currentlyActiveIndex, setCurrentlyPlayingIndex] = useState(currentlyPlayingIndex);
    const [stationsList, setStations] = useState([]);
    const onRadioSelect = (index) => {
        setCurrentlyPlayingIndex(index);
    }
    
    useEffect(() => {
        fetchStations().then((stations) => {
            setStations(stations);
        });        
    }, []);

    return (
        <div class="widget">
            <div class="radioListHeader">
                <img class="control-button expand-button" src={require("../../assets/images/back-arrow.png")}></img>
                <div class="header">Stations</div>
                <img class="control-button on-of-button" src={require("../../assets/images/switch.png")}></img>
            </div>
            <RadioStationList 
                onRadioSelect={onRadioSelect}
                currentlyPlayingIndex={currentlyActiveIndex}
                stations={stationsList}
            />
            <div class="radioListFooter">
                <div class="footer-visible">
                    <div class="footer">Currently playing</div>
                    <div class="currently-playing-title">
                        {stationsList[currentlyActiveIndex]?.title}
                    </div>
                </div>
            </div>
        </div>
      );
    };

export default RadioStationWidget;