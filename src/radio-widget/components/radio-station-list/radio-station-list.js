import RadioStation from '../radio-station/radio-station.js';

const RadioStationList = ({stations, onRadioSelect, currentlyPlayingIndex}) => {
    const stationListItems = stations?.map((station, index) => 
        <li key={index}>
            <RadioStation 
                active={currentlyPlayingIndex === index}
                index={index}
                onRadioSelect={onRadioSelect} 
                title={station.title}
                wave={station.wave}>
            </RadioStation>
        </li>);
    return (<ul>{stationListItems}</ul>)
}
export default RadioStationList;