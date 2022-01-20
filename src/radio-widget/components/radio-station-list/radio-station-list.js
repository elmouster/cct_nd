import RadioStation from '../radio-station/radio-station.js';
import './radio-station-list.css'

const RadioStationList = ({stations, onRadioSelect, currentlyPlayingIndex}) => {
    const stationListItems = stations?.map((station, index) => 
        <li key={index}>
            <RadioStation 
                active={currentlyPlayingIndex === index}
                index={index}
                onRadioSelect={onRadioSelect} 
                title={station.title}
                wave={station.wave}
                pictureUrl={station.pictureUrl}
            />
        </li>);
    return (<ul class="station-list">{stationListItems}</ul>)
}
export default RadioStationList;
