import { Box, HStack, Text } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/spinner'
import { useEffect, useState } from 'react'
import AlbumsPage from '../components/app/albums'
import Navigation from '../components/app/navigation'

const App = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selection, setSelection] = useState('Home') // Home, Albums, Profile
  const { router } = props

  useEffect(() => {
    const getSession = async () => {
      const res = await fetch('/api/getSession')
      const json = await res.json()
      if (json.auth) {
        setIsLoggedIn(true)
      } else {
        router.push('/login')
      }
    }

    if (process.env.NODE_ENV === 'development') {
      setIsLoggedIn(true)
    } else {
      getSession()
    }
  }, [])

  const renderAppContent = () => {
    switch (selection) {
      case 'Home':
        return <Text>Home</Text>
      case 'Albums':
        return <AlbumsPage />
      case 'Profile':
        return <Text>Profile</Text>
      default:
        break
    }
  }

  return isLoggedIn ? (
    <HStack alignItems="flex-start" w="100vw" h="100vh" spacing={0}>
      <Navigation width="160px" height="100vh" setSelection={setSelection} />
      <Box w="full" h="full">
        {renderAppContent()}
      </Box>
    </HStack>
  ) : (
    <Box
      display="flex"
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner w="150px" h="150px" thickness="8px" speed="0.5s" />
    </Box>
  )
}

export default App
