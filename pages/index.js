import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import List from '../components/List';
import Map from '../components/Map';
import PlaceDetail from '../components/PlaceDetail';

const places = [
  {name: "Sample Place 1"},
  {name: "Sample Place 2"},
  {name: "Sample Place 4"},
  {name: "Sample Place 3"}
];

const Home = () => {
  const [ coordinates, setCoordinates] = useState({ });
  const [type, setType] = useState('court');
  const [rating, setRating] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Get users current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: {latitude, longitude} }) => {
        // console.log({ latitude, longitude });
        setCoordinates({lat: latitude, lng: longitude})
      }
    );
  }, []);

  return (
    <Flex justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'} position={'relative'}>
      <Header  
        setType={setType}
        setRating={setRating}
        setCoordinates={setCoordinates}
      />

      <List places={places} isLoading={isLoading} />

      {/* <Map /> */}
      <Map setCoordinates={setCoordinates} coordinates={coordinates} />
    </Flex>     
  )
}

export default Home;