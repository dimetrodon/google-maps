import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
`;

const Card = styled.div`
  background: #fff;
  width: auto;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 3px;
`;
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <Wrapper>
        <Card>
          <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyC7uA0vNvcOcVJz9vSeS2Isn2zYF7q5K1w" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </Card>
      </Wrapper>
    );
  }
}
 
export default MapContainer;
