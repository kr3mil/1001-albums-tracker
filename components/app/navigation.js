import { VStack } from '@chakra-ui/react'

const Navigation = ({ width, height }) => {
  return (
    <VStack
      bgColor="rgba(52, 52, 52, 0.4)"
      w={width}
      h={height}
      alignItems="flex-start"
      spacing={6}
    >
      <span>Nav Item 1</span>
      <span>Nav Item 2</span>
      <span>Nav Item 3</span>
      <span>Nav Item 4</span>
      <span>Nav Item 5</span>
    </VStack>
  )
}

export default Navigation
