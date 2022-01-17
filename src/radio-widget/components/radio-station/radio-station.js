import React from 'react';
import './radio-station.css'

export class RadioStation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active
        };
      }

    componentWillReceiveProps(nextProps) {
        this.setState({ active: nextProps.active });  
    }

    render() {
      return (
        <div onClick={() => this.props.onClicked(this.props.index)}>
            <div class="station-details" className={`${!!this.state.active ? "station-visible" : "station-hidden"}`}>
                <button class="volume-button"></button>
                <img class="station-picture" src={ this.props.pictureUrl }></img>
                <button class="volume-button"></button>
            </div>
            <div class="station-desc">
                {this.props.title} {this.props.wave}
            </div>
        </div>
      );
    }
  }