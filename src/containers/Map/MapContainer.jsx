import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class MapContainer extends Component {
  static defaultProps = {
    bootstrapURLKeys:"AIzaSyC7uA0vNvcOcVJz9vSeS2Isn2zYF7q5K1w",
    markers: [{
      lat: 59.955413,
      lng: 30.337844,
      text: "My Marker"
    }],
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  constructor(props){
    super(props);
    
    this.state = Object.assign({}, this.defaultProps, props);
  }

  building (props){
    return this.state.markers.map( (marker, row) => {
      return (
        <div
          key={ row }
          className="board-marker"
        >
          {marker.text}%{marker.lat}%{marker.lng}
        </div>
      );
    } );
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.state.bootstrapURLKeys }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          { this.building() }
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;
