import { VStack, Box, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import styles from './navigation.module.css'
import { providers, signOut } from 'next-auth/react'

const NavItem = props => {
  const { children, onClick } = props

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="row"
      bgColor="blue"
      w="full"
      h="50px"
      onClick={onClick}
    >
      <Box ml="10px" w="20px" h="20px" bgColor="red"></Box>
      <Text ml="5px">{children}</Text>
    </Box>
  )
}

const Navigation = ({ width, height }) => {
  const toggleMenuClicked = () => {}

  return (
    <VStack>
      <HamburgerIcon
        alignSelf="flex-start"
        ml="10px"
        mt="10px"
        w="30px"
        h="30px"
        onClick={toggleMenuClicked}
      />
      <VStack
        w={width}
        h={`calc(${height} - 50px)`}
        className={styles.NavParent}
      >
        <NavItem>Home</NavItem>
        <NavItem>Albums</NavItem>
        <NavItem>Profile</NavItem>
        <NavItem
          onClick={() => {
            console.log('Signing Out')
            signOut({
              callbackUrl: `/login`
            })
          }}
        >
          Sign Out
        </NavItem>
      </VStack>
    </VStack>
  )
}

export default Navigation
