import { VStack, Box, Text, Tooltip, Icon } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { providers, signOut } from 'next-auth/react'
import { useState } from 'react'
import LogoutIcon from '../icons/logout'
import BookIcon from '../icons/bookOpen'
import UserCircleIcon from '../icons/userCircle'

const NavItem = props => {
  const { children, onClick, icon, isExpanded } = props

  return (
    <Tooltip label={children} isDisabled={isExpanded}>
      <Box
        display="flex"
        alignItems="center"
        flexDir="row"
        borderTop="1px"
        borderColor="gray"
        w="full"
        h="45px"
        onClick={onClick}
        _hover={{ background: 'rgba(0,0,0,0.4)' }}
      >
        {icon ? (
          <Box w="20px" h="20px" ml="10px">
            {icon}
          </Box>
        ) : (
          <Box ml="10px" w="20px" h="20px" bgColor="red"></Box>
        )}
        {isExpanded && <Text ml="5px">{children}</Text>}
      </Box>
    </Tooltip>
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
      spacing={0}
    >
      {isExpanded ? (
        <Tooltip label="Collapse">
          <Box
            w="full"
            h="45px"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            onClick={toggleMenuClicked}
            borderBottom="1px"
            borderColor="gray"
            _hover={{ background: 'rgba(0,0,0,0.4)' }}
          >
            <Icon as={ChevronLeftIcon} w="30px" h="30px" ml="5px" />
          </Box>
        </Tooltip>
      ) : (
        <Tooltip label="Expand">
          <Box
            w="full"
            h="45px"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            onClick={toggleMenuClicked}
            borderBottom="1px"
            borderColor="gray"
            _hover={{ background: 'rgba(0,0,0,0.4)' }}
          >
            <Icon as={ChevronRightIcon} w="30px" h="30px" ml="5px" />
          </Box>
        </Tooltip>
      )}
      <VStack display="flex" w="full" h="full" spacing={0}>
        {/* <Box display="flex" w="full" h="full">
          <VStack alignSelf="flex-start" justifySelf="flex-start" w="full" spacing={0}>
            <NavItem isExpanded={isExpanded}>Top Item 1</NavItem>
            <NavItem isExpanded={isExpanded}>Top Item 2</NavItem>
            <NavItem isExpanded={isExpanded}>Top Item 3</NavItem>
          </VStack>
        </Box> */}
        <Box display="flex" w="full" h="full">
          <VStack
            alignSelf="flex-end"
            justifySelf="flex-end"
            w="full"
            spacing={0}
          >
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
