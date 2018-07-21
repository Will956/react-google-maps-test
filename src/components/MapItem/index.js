/*global google*/
import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import classNames from 'classnames';

import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

import s from './index.scss';

const iconStyle = {
  width: '5px',
  height: '5px'
};

const icon = type => ({
  url: `/assets/${type}.png`,
  scaledSize: new google.maps.Size(50, 50)
});

class MapItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const {
      coordinates: { lat, lng },
      type,
      coach,
      description,
      date,
      max_participant,
      nb_participant
    } = this.props;
    return (
      <Marker
        position={{ lat, lng }}
        icon={icon(type)}
        style={iconStyle}
        onClick={this.handleClick}
      >
        {this.state.isOpen && (
          <InfoBox
            onCloseClick={this.handleClick}
            options={{
              closeBoxURL: ``,
              enableEventPropagation: true,
              pixelOffset: new google.maps.Size(25, -120)
            }}
          >
            <div className={classNames(s.box, s[type], s['arrow-left-center'])}>
              <p>Type: {type}</p>
              <p className={classNames(s.date)}>
                {new Date(date).toLocaleString()}
              </p>
              <p className={classNames(s.description)}>{description}</p>
              <p className={classNames(s.coach)}>Votre coach: {coach}</p>
              <p>
                {nb_participant}/
                {max_participant} participants!
              </p>
            </div>
          </InfoBox>
        )}
      </Marker>
    );
  }
}

export default MapItem;
