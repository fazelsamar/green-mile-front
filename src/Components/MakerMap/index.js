import React, { Component } from 'react'
import './map.css'
import Mapir from 'mapir-react-component';
const Map = Mapir.setToken({
    transformRequest: (url) => {
        return {
            url: url,
            headers: {
                'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNlODY5ZmRlOGQ5NGFmNWE3NGU4YTQyYzRkNTUzNDM2YWZlODNkMWVlYzgwY2E5ZTA0OGU1ODg3OWEwNmVhZmUxOGExNWRjNGIyODJiOTUzIn0.eyJhdWQiOiIxNzYxMiIsImp0aSI6IjNlODY5ZmRlOGQ5NGFmNWE3NGU4YTQyYzRkNTUzNDM2YWZlODNkMWVlYzgwY2E5ZTA0OGU1ODg3OWEwNmVhZmUxOGExNWRjNGIyODJiOTUzIiwiaWF0IjoxNjQ5NjUzOTY3LCJuYmYiOjE2NDk2NTM5NjcsImV4cCI6MTY1MjI0NTk2Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.j2Wz-6OCKB2JVZGrVzGd4kg3TTiWNMHL6VkGzbPI7_1d8dGN9jxWGJ7qZGW2OHj1AxRxnuELDDq5H5M8IciIBDOfQeJGGKSrMzZfasdgGVIfV2ZeYVM_ZCxPLXEimSg6RffZFA0p7msrmKbD-HSCWGihfO5Fj2cu3aFtkDHhOer2g9U13WSfC2TX7CO1hRsRdYVXbDXHqV0rA_LqFIoAxCtYOnAxzCxCem61AkgKMK4qO6jm2M0-U-KwgEMEgrmsomRMj2mMBEMbpbmZEKKk7mxynf2FYpOkggQhBfiVpHCmKOFFIe4WTx7YhTHFN167IERAlha6iplqN3aXc7-Taw', //Mapir api key

                'Mapir-SDK': 'reactjs'
            },
        }
    }
});
class Maps extends Component {
    constructor(props) {
    super(props);
    this.state = {
      markerArray: [],
      lat: 35.72,
      lon: 51.42
    }
    this.reverseFunction = this.reverseFunction.bind(this);
  }
   async reverseFunction(map, e) {
    let addres ;
    var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`
    await fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNlODY5ZmRlOGQ5NGFmNWE3NGU4YTQyYzRkNTUzNDM2YWZlODNkMWVlYzgwY2E5ZTA0OGU1ODg3OWEwNmVhZmUxOGExNWRjNGIyODJiOTUzIn0.eyJhdWQiOiIxNzYxMiIsImp0aSI6IjNlODY5ZmRlOGQ5NGFmNWE3NGU4YTQyYzRkNTUzNDM2YWZlODNkMWVlYzgwY2E5ZTA0OGU1ODg3OWEwNmVhZmUxOGExNWRjNGIyODJiOTUzIiwiaWF0IjoxNjQ5NjUzOTY3LCJuYmYiOjE2NDk2NTM5NjcsImV4cCI6MTY1MjI0NTk2Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.j2Wz-6OCKB2JVZGrVzGd4kg3TTiWNMHL6VkGzbPI7_1d8dGN9jxWGJ7qZGW2OHj1AxRxnuELDDq5H5M8IciIBDOfQeJGGKSrMzZfasdgGVIfV2ZeYVM_ZCxPLXEimSg6RffZFA0p7msrmKbD-HSCWGihfO5Fj2cu3aFtkDHhOer2g9U13WSfC2TX7CO1hRsRdYVXbDXHqV0rA_LqFIoAxCtYOnAxzCxCem61AkgKMK4qO6jm2M0-U-KwgEMEgrmsomRMj2mMBEMbpbmZEKKk7mxynf2FYpOkggQhBfiVpHCmKOFFIe4WTx7YhTHFN167IERAlha6iplqN3aXc7-Taw'
        }
      })
      .then(response => response.json())
      .then(data => {addres= data })
    const array = [];
    array.push(<Mapir.Marker
      coordinates={[e.lngLat.lng, e.lngLat.lat]}
      anchor="bottom">
    </Mapir.Marker>);
    this.props.setMap({lat: e.lngLat.lat,lon: e.lngLat.lng , addres :addres
     })
    this.setState({ markerArray: array, lat: e.lngLat.lat,lon: e.lngLat.lng });
  } 
    render() {
        return (
            <div className="map">
            
            <Mapir
          center={[this.state.lon, this.state.lat]}
          Map={Map}
          onClick={this.reverseFunction}
        >
          {this.state.markerArray}
        </Mapir>

            </div >
        )
    }
}
export default Maps