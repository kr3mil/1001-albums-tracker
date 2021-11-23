import { HStack, Text } from '@chakra-ui/layout'
import Navigation from '../components/app/navigation'

const App = () => {
  return (
    <HStack alignItems="flex-start" w="100vw" h="100vh">
      <Navigation width="160px" height="100vh" />
      <Text>TODO</Text>
    </HStack>
  )
}

export default App
