import { Box } from "@chakra-ui/react";
import React from 'react';
import GoogleMapReact from "google-map-react";

const Map = ({coordinates, setCoordinates}) => {
  return <Box width={"full"} height={"full"}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
      default={coordinates}
      center={coordinates}
      defaultZoom = {10}
      margin = {[50,50,50,50]}
      options={""}
      onChange={() => {}}
      onChildClick = {() => {}}
    >
    
    </GoogleMapReact>
  </Box>
}

export default Map;