import RadioStation from '../radio-station/radio-station.js';
import { CurrentlyPlayingContext } from  '../../services/station-active-context.js'
import './radio-station-list.css'

const RadioStationList = ({ stations, onRadioSelect }) => {
    const baseUrl = './logos/';

    const stationListItems = stations?.map((station, index) => 
        <li key={ index }>
            <CurrentlyPlayingContext.Consumer>
                {(currentlyPlayingIndex) => (
                    <RadioStation 
                        active={ currentlyPlayingIndex === index }
                        index={ index }
                        onRadioSelect={ onRadioSelect } 
                        title={ station.title }
                        wave={ station.wave }
                        pictureUrl={ baseUrl + station.pictureUrl }
                    />
                )}
            </CurrentlyPlayingContext.Consumer>
        </li>);

    return (<ul className="station-list">{ stationListItems }</ul>)
}

export default RadioStationList;
