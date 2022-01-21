import RadioStation from '../radio-station/radio-station.js';
import './radio-station-list.css'

const RadioStationList = ({ stations, onRadioSelect, currentlyPlayingIndex }) => {
    const baseUrl = './logos/';

    const stationListItems = stations?.map((station, index) => 
        <li key={ index }>
            <RadioStation 
                active={ currentlyPlayingIndex === index }
                index={ index }
                onRadioSelect={ onRadioSelect } 
                title={ station.title }
                wave={ station.wave }
                pictureUrl={ baseUrl + station.pictureUrl }
            />
        </li>);

    return (<ul className="station-list">{ stationListItems }</ul>)
}

export default RadioStationList;
