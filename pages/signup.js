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
import { useEffect, useState } from 'react'
import Router from 'next/router'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSignUpClicked = () => {
    // TODO call sign up api
    Router.push('/app')
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
              Sign Up
            </Heading>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <FormControl id="password-confirm">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                type="password"
              />
            </FormControl>
          </Section>
          <HStack justify="center" pb="50px">
            <Button colorScheme="teal" w="100px" onClick={handleSignUpClicked}>
              Sign up
            </Button>
          </HStack>
        </Box>
      </Container>
    </Layout>
  )
}

export default Signup
