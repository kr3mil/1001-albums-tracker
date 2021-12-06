import { Text, SimpleGrid, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import GalleryItem from './galleryItem'

const AlbumsGallery = ({ albums }) => {
  return albums.length > 0 ? (
    <SimpleGrid columns={[2, 2, 3]} spacing={2}>
      {albums.map((album, index) => (
        <GalleryItem album={album} key={index} />
      ))}
    </SimpleGrid>
  ) : (
    <span>TODO</span>
  )
}

export default AlbumsGallery
