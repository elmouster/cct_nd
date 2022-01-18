import React, { useState } from 'react';
import RadioStationList from '../../components/radio-station-list/radio-station-list.js';
import { fetchStations } from '../../services/radio-station-service.js'
import './radio-station-widget.css';

const RadioStationWidget = ({currentlyPlaying, currentlyPlayingIndex}) => {
    const [state, setState] = useState({currentlyPlaying, currentlyPlayingIndex});
    const onRadioSelect = (index) => {
        setState({ 
            currentlyPlaying : stationList[index],
            currentlyPlayingIndex: index
        });
    }
    let stationList = fetchStations();

    return (
        <div>
            <div class="radioListHeader">
                <button class="expand-button"></button>
                Stations
                <button class="on-of-button"></button>
            </div>
            <RadioStationList 
                onRadioSelect={onRadioSelect}
                currentlyPlayingIndex={currentlyPlayingIndex}
                stations={stationList}
            />
            <div class="radioListFooter">
                <div className={state.currentlyPlaying ? "footer-visible" : "footer-hidden"}>
                    Currently playing
                    <div class="currently-playing-title">
                        {state.currentlyPlaying?.title}
                    </div>
                </div>
            </div>
        </div>
      );
    };

export default RadioStationWidget;