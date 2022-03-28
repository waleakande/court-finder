import { Flex, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react';

import { BiSearch, BiStar } from 'react-icons/bi';

const Header = ({setType, setRating, setCoordinates}) => {
  return (
    <Flex position={"absolute"} top={0} left={0} width={'full'} px={4} py={2} zIndex={101}>
      {/* <Autocomplete> */}
        <InputGroup width={"35vw"} shadow='lg'>
          <InputRightElement 
            pointerEvents={'none'}
            children={<BiSearch color="gray" fontSize={20} />}  
          />
          <Input 
            type={'text'}
            placeholder = 'Search Google Map'
            variant = {'filled'}
            fontSize={18}
            bg={"white"}
            color={"gray.700"}
            _hover={{ bg: "whiteAlpha.800" }}
            _focus={{ bg: "whiteAlpha.800" }}
            _placeholder={{ bg: "white.700" }}
          />
        </InputGroup>
      {/* </Autocomplete> */}
      
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          px={4}
          py={2}
          bg={'white'}
          rounded={'full'}
          ml={4}
          shadow="lg"
          cursor={'pointer'}
        >
          <Menu>
            <BiStar fontSize={18} />
            <MenuButton mx={2} transition='all .2s' borderRadius={'md'}>
              Choose Ratings
            </MenuButton>

            <MenuList>
              <MenuItem 
                display={'flex'} 
                alignItems={'center'} 
                justifyContent={'center'} 
                onClick={() => setRatings("")}
              >
                <Text fontSize={16} fontWeight={500} color={"gray.700"}>All Ratings</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        
      </Flex>
    </Flex>
  )
}

export default Header