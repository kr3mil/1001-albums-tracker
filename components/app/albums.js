import { useState } from 'react'
import { Text, Box, Select, Divider, VStack } from '@chakra-ui/react'
import AlbumsGallery from './albumsGallery'

var _ = require('lodash')

const AlbumsPage = props => {
  const [selectedYear, setSelectedYear] = useState(1956)

  return (
    <VStack w="full" h="full" display="flex" spacing="20px">
      <Select
        w="50%"
        mt="20px"
        justifySelf="center"
        onChange={e => setSelectedYear(e.target.value)}
      >
        {_.range(1956, 2011).map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
      <Divider />
      <AlbumsGallery year={selectedYear} />
    </VStack>
  )
}

export default AlbumsPage
