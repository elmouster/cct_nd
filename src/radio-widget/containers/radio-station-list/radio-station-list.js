import React from 'react';
import { fetchStations } from '../../services/radio-station-service';
import { RadioStation } from '../../components/radio-station/radio-station.js';
import './radio-station-list.css';

export class RadioStationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            extended: false,
            list: [],
            currentlyPlaying: null,
            currentlyPlayingIndex: null
        };
      }

    onChildClicked = (index) => {
        this.setState({ 
            currentlyPlaying : this.state.list[index],
            currentlyPlayingIndex: index
        });
    }

    stationList(stations) {
        if (this.state.extended) {
            const stationListItems = stations.map((station, index) => 
            <li key={index}>
                <RadioStation 
                    active={this.state.currentlyPlayingIndex === index}
                    index={index}
                    onClicked={this.onChildClicked} 
                    title={station.title}
                    wave={station.wave}>
                </RadioStation>
            </li>);
            return (<ul>{stationListItems}</ul>)
        }
    }

    componentDidMount() {
        let result = fetchStations()
        this.setState({
            list: result
        });
    }

    render() {
      return (
        <div>
            <div class="radioListHeader">
                <button 
                    class="extend-button"
                    onClick={() => this.setState({extended: !this.state.extended})}>
                    <img></img>
                </button>
                Stations
                <button class="on-of-button"></button>
            </div>
            {this.stationList(this.state.list)}
            <div class="radioListFooter">
                <div className={`${!!this.state.currentlyPlaying ? "footer-visible" : "footer-hidden"}`}>
                    Currently playing
                    <div class="currently-playing-title">
                        {this.state.currentlyPlaying?.title}
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }