import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import List from '../components/List';
import Map from '../components/Map';
import PlaceDetail from '../components/PlaceDetail';

const Home = () => {
  const [ coordinates, setCoordinates] = useState({lat: 39.74, lng: -104.9903});
  const [type, setType] = useState('court');
  const [rating, setRating] = useState('');

  return (
    <Flex justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'} position={'relative'}>
      <Header  
        setType={setType}
        setRating={setRating}
        setCoordinates={setCoordinates}
      />

      {/* <List /> */}

      {/* <Map /> */}
      <Map setCoordinates={setCoordinates} coordinates={coordinates} />
    </Flex>     
  )
}

export default Home;