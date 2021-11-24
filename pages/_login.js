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

export async function getStaticProps(context) {
  const user = process.env.DB_USERNAME ? process.env.DB_USERNAME : ''
  const pass = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : ''

  return {
    props: { user, pass }
  }
}

const login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log('Getting ENV username & pass')

    const { user, pass } = props
    if (user) {
      setUsername(user)
    }
    if (pass) {
      setPassword(pass)
    }
  }, [])

  const handleLoginClicked = async () => {
    // TODO
    // Use next auth js?
    // Display error popup on incorrect login
    // If username exists but wrong password show error on password box
    const res = await fetch('/api/login')

    if (res.status === 200) {
      const json = await res.json()
      console.log(json)
      if (json.auth === true) {
        console.log('LOGGED IN')
        Router.push('/app')
      }
    }
  }

  const handleSignUpClicked = () => {
    Router.push('/signup')
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
              <Input
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="username"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
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
