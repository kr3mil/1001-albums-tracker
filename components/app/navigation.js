import { VStack, Box, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const NavItem = props => {
  const { children } = props

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="row"
      bgColor="blue"
      w="full"
      h="50px"
    >
      <Box ml="5px" w="20px" h="20px" bgColor="red"></Box>
      <Text ml="5px">{children}</Text>
    </Box>
  )
}

const Navigation = ({ width, height }) => {
  const toggleMenuClicked = () => {}

  return (
    <VStack>
      <HamburgerIcon mt="10px" w="30px" h="30px" onClick={toggleMenuClicked} />
      <VStack bgColor="rgba(52, 52, 52, 0.4)" w={width} h={height}>
        <NavItem>Home</NavItem>
        <NavItem>Albums</NavItem>
        <NavItem>Profile</NavItem>
      </VStack>
    </VStack>
  )
}

export default Navigation
