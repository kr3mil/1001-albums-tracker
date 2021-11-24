import { Box, HStack, Text } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/spinner'
import { useEffect, useState } from 'react'
import Navigation from '../components/app/navigation'

const App = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const { router } = props

  useEffect(() => {
    const getSession = async () => {
      const res = await fetch('/api/getSession')
      const json = await res.json()
      if (json.auth) {
        console.log(router)
        setIsLoggedIn(true)
      } else {
        router.push('/login')
      }
    }

    getSession()
  }, [])

  return isLoggedIn ? (
    <HStack alignItems="flex-start" w="100vw" h="100vh">
      <Navigation width="160px" height="100vh" />
      <Text>TODO</Text>
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
