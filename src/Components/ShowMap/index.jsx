

import React from "react";
import Mapir from "mapir-react-component";
const Map = Mapir.setToken({
  //factory parameters
  hash: true,
  logoPosition: "top-left",
  maxZoom: [16],
  transformRequest: url => {
    return {
      url: url,
      headers: {
        'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNlODY5ZmRlOGQ5NGFmNWE3NGU4YTQyYzRkNTUzNDM2YWZlODNkMWVlYzgwY2E5ZTA0OGU1ODg3OWEwNmVhZmUxOGExNWRjNGIyODJiOTUzIn0.eyJhdWQiOiIxNzYxMiIsImp0aSI6IjNlODY5ZmRlOGQ5NGFmNWE3NGU4YTQyYzRkNTUzNDM2YWZlODNkMWVlYzgwY2E5ZTA0OGU1ODg3OWEwNmVhZmUxOGExNWRjNGIyODJiOTUzIiwiaWF0IjoxNjQ5NjUzOTY3LCJuYmYiOjE2NDk2NTM5NjcsImV4cCI6MTY1MjI0NTk2Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.j2Wz-6OCKB2JVZGrVzGd4kg3TTiWNMHL6VkGzbPI7_1d8dGN9jxWGJ7qZGW2OHj1AxRxnuELDDq5H5M8IciIBDOfQeJGGKSrMzZfasdgGVIfV2ZeYVM_ZCxPLXEimSg6RffZFA0p7msrmKbD-HSCWGihfO5Fj2cu3aFtkDHhOer2g9U13WSfC2TX7CO1hRsRdYVXbDXHqV0rA_LqFIoAxCtYOnAxzCxCem61AkgKMK4qO6jm2M0-U-KwgEMEgrmsomRMj2mMBEMbpbmZEKKk7mxynf2FYpOkggQhBfiVpHCmKOFFIe4WTx7YhTHFN167IERAlha6iplqN3aXc7-Taw'
,
        "Mapir-SDK": "reactjs"
      }
    };
  }
});
const ShowMap = (props) => {
  return (
    <div className="App">
      <Mapir center={props.loc} Map={Map} userLocation />
    </div>
  );
};
export default ShowMap;