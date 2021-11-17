import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  VStack,
  Spacer,
  HStack,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const login = () => {
  const handleLoginClicked = () => {
    // TODO
    // Use next auth js?
  }

  const handleSignUpClicked = () => {
    // TODO
  }

  return (
    <Layout minH="full">
      <Container
        display="flex"
        minH="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Section>
            <Heading as="h1" align="center" pb="20px" mt="20px">
              Login
            </Heading>

            <FormControl id="username">
              <FormLabel>Username / Email address</FormLabel>
              <Input type="username" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
              <FormHelperText>
                <Link href="/forgotpassword">Forgot password?</Link>
              </FormHelperText>
            </FormControl>
          </Section>
          <HStack justify="center" pb="50px">
            <Button colorScheme="teal" w="100px" onClick={handleLoginClicked}>
              Login
            </Button>
            <Button colorScheme="teal" w="100px" onClick={handleSignUpClicked}>
              Sign up
            </Button>
          </HStack>
        </Box>
      </Container>
    </Layout>
  )
}

export default login
