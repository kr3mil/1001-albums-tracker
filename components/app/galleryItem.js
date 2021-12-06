import { Box, Image, Text, HStack } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

const GalleryItem = ({ album }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      textAlign="center"
      justifyContent="center"
      alignContent="center"
      justifyItems="center"
      alignItems="center"
      borderWidth="1px"
      borderRadius="lg"
      pl="10px"
      pr="10px"
    >
      <Box fontWeight="semiBold" as="h1" lineHeight="tight">
        {album.title}
      </Box>
      <Image src={`albums/images/${album.srcLocal}`} alt={album.srcLocal} />
      <Box as="h6" lineHeight="tight" mt="5px">
        {album.caption}
      </Box>
      <HStack display="flex" mt="2" alignItems="center" mb="10px" spacing={1}>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              // color={i < property.rating ? 'teal.500' : 'gray.300'}
              color="gray.300"
            />
          ))}
      </HStack>
    </Box>
  )
}

export default GalleryItem
