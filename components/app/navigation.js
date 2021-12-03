import { VStack, Box, Text, Tooltip, Icon } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import styles from './navigation.module.css'
import { providers, signOut } from 'next-auth/react'
import { useState } from 'react'
import LogoutIcon from '../icons/logout'
import BookIcon from '../icons/bookOpen'
import UserCircleIcon from '../icons/userCircle'

const NavItem = props => {
  const { children, onClick, icon, isExpanded } = props

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
      {isExpanded && <Text ml="5px">{children}</Text>}
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
      w={isExpanded ? width : '45px'}
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
            <NavItem isExpanded={isExpanded}>Top Item 1</NavItem>
            <NavItem isExpanded={isExpanded}>Top Item 2</NavItem>
            <NavItem isExpanded={isExpanded}>Top Item 3</NavItem>
          </VStack>
        </Box>
        <Box display="flex" w="full" h="full">
          <VStack className={styles.BottomParent} spacing={1}>
            <NavItem isExpanded={isExpanded}>Home</NavItem>
            <NavItem isExpanded={isExpanded} icon={<BookIcon />}>
              Albums
            </NavItem>
            <NavItem isExpanded={isExpanded} icon={<UserCircleIcon />}>
              Profile
            </NavItem>
            <NavItem
              isExpanded={isExpanded}
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
