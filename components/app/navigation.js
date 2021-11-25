import { VStack, Box, Text, Tooltip, Icon } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import styles from './navigation.module.css'
import { providers, signOut } from 'next-auth/react'
import { useState } from 'react'
import LogoutIcon from '../icons/logout'
import BookIcon from '../icons/bookOpen'
import UserCircleIcon from '../icons/userCircle'

const NavItem = props => {
  const { children, onClick, icon } = props

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="row"
      borderTop="1px"
      borderColor="gray"
      w="full"
      h="50px"
      onClick={onClick}
    >
      {icon ? (
        <Icon w="20px" h="20px" ml="10px">
          {icon}
        </Icon>
      ) : (
        <Box ml="10px" w="20px" h="20px" bgColor="red"></Box>
      )}
      <Text ml="5px">{children}</Text>
    </Box>
  )
}

const Navigation = ({ width, height }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const toggleMenuClicked = () => {
    console.log('CLICKED TOGGLE MENU')
    setIsExpanded(!isExpanded)
  }

  return (
    <VStack
      backgroundColor="rgba(52, 52, 52, 0.4)"
      w={width}
      h={height}
      borderRight="1px"
      borderColor="gray"
    >
      {isExpanded ? (
        <Tooltip label="Collapse">
          <ChevronLeftIcon
            alignSelf="flex-start"
            ml="5px"
            mt="10px"
            w="30px"
            h="30px"
            onClick={toggleMenuClicked}
          />
        </Tooltip>
      ) : (
        <Tooltip label="Expand">
          <ChevronRightIcon
            alignSelf="flex-start"
            ml="5px"
            mt="10px"
            w="30px"
            h="30px"
            onClick={toggleMenuClicked}
          />
        </Tooltip>
      )}
      <VStack className={styles.NavParent} spacing={0}>
        <Box display="flex" w="full" h="full">
          <VStack className={styles.TopParent} spacing={1}>
            <NavItem>Top Item 1</NavItem>
            <NavItem>Top Item 2</NavItem>
            <NavItem>Top Item 3</NavItem>
          </VStack>
        </Box>
        <Box display="flex" w="full" h="full">
          <VStack className={styles.BottomParent} spacing={1}>
            <NavItem>Home</NavItem>
            <NavItem icon={<BookIcon />}>Albums</NavItem>
            <NavItem icon={<UserCircleIcon />}>Profile</NavItem>
            <NavItem
              icon={<LogoutIcon />}
              onClick={() => {
                signOut({
                  callbackUrl: `/login`
                })
              }}
            >
              Sign Out
            </NavItem>
          </VStack>
        </Box>
      </VStack>
    </VStack>
  )
}

export default Navigation
