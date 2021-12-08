import {
  Text,
  Box,
  VStack,
  Spinner,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  ModalFooter
} from '@chakra-ui/react'
import { useEffect, useState, useRef } from 'react'
import GalleryItem from './galleryItem'

const HomePage = ({ albums }) => {
  const [currentAlbumID, setCurrentAlbumID] = useState(
    Math.floor(Math.random() * 1001)
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [reviewScore, setReviewScore] = useState()
  const [oneLiner, setOneLiner] = useState()

  const initialRef = useRef()

  const handleModalClosed = save => {
    if (save) {
      // TODO
      alert(`${reviewScore} - ${oneLiner}`)
    }

    setIsModalOpen(false)
  }

  return (
    <VStack
      w="full"
      h="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text as="h1">Welcome {'TODO'}</Text>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isModalOpen}
        onClose={() => handleModalClosed()}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review Album</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired id="review">
              <FormLabel>Review Score (/10)</FormLabel>
              <NumberInput min={0} max={10} precision={1}>
                <NumberInputField
                  ref={initialRef}
                  value={reviewScore}
                  onChange={e => setReviewScore(e.target.value)}
                />
              </NumberInput>
            </FormControl>
            <FormControl isRequired mt={4} id="oneLiner">
              <FormLabel>One liner</FormLabel>
              <Input
                placeholder="Greatest album in the world"
                value={oneLiner}
                onChange={e => setOneLiner(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleModalClosed(true)}
            >
              Save
            </Button>
            <Button onClick={() => handleModalClosed()}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {currentAlbumID ? (
        <>
          <Text as="h2">Current Album</Text>
          <GalleryItem album={albums[currentAlbumID]} />
          <Button onClick={() => setIsModalOpen(true)}>Mark as listened</Button>
        </>
      ) : (
        <Spinner w="150px" h="150px" thickness="8px" speed="0.5s" />
      )}
    </VStack>
  )
}

export default HomePage
