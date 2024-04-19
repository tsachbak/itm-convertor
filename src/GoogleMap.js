//GoogleMap.js

import React from "react";

class GoogleMap extends React.Component {
  render() {
    const { markerPosition } = this.props;

    const mapStyles = {
      width: "100%",
      height: "550px",
    };

    if (markerPosition == null) {
      return null;
    }

    return (
      <div id="Map" style={mapStyles}>
        <iframe
          title="Map"
          width="100%"
          height="100%"
          zoom={0.5}
          initialCenter={{ lat: 32.92814, lng: 35.07647 }}
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAeJVIJfjVmaT4ectvqn9vxOE4CezVw-0o&q=${markerPosition.lat},${markerPosition.lng}`}
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default GoogleMap;
