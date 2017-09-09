import React, { Component } from 'react'
import GoogleMap from 'google-map-react'

import Marker from './Map/Marker'

class Map extends Component {
  renderPolylines (map, maps) {
    /** Example of rendering geodesic polyline */
    let geodesicPolyline = new maps.Polyline({
      path: this.props.markers,
      geodesic: true,
      strokeColor: '#00a1e1',
      strokeOpacity: 1.0,
      strokeWeight: 4
    })
    geodesicPolyline.setMap(map)

    /** Example of rendering non geodesic polyline (straight line) */
    let nonGeodesicPolyline = new maps.Polyline({
      path: this.props.markers,
      geodesic: false,
      strokeColor: '#e4e4e4',
      strokeOpacity: 0.7,
      strokeWeight: 3
    })
    nonGeodesicPolyline.setMap(map)

    this.fitBounds(map, maps)
  }

  fitBounds (map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  render () {
    return (
      <GoogleMap
        bootstrapURLKeys={{key: 'PUT GOOGLE MAPS KEY HERE'}}
        style={{height: '100vh', width: '100%'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={({map, maps}) => this.renderPolylines(map, maps)}>
        <Marker text={'DUB'} lat={53.42728} lng={-6.24357} />
        <Marker text={'YYZ'} lat={43.681583} lng={-79.61146} />
      </GoogleMap>
    )
  }
}

Map.defaultProps = {
  markers: [
    {lat: 53.42728, lng: -6.24357},
    {lat: 43.681583, lng: -79.61146}
  ],
  center: [47.367347, 8.5500025],
  zoom: 4
}

export default Map
