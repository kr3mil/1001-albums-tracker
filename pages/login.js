import { Spinner } from '@chakra-ui/spinner'
import { useSession, signIn } from 'next-auth/react'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../components/layouts/article'
import { Container, Heading, Box, Button } from '@chakra-ui/react'
import Section from '../components/section'

export async function getStaticProps(context) {
  const user = process.env.DB_USERNAME ? process.env.DB_USERNAME : ''
  const pass = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : ''

  return {
    props: { user, pass }
  }
}

export default function Component(props) {
  const { data: session } = useSession()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const env = process.env.NODE_ENV

    if (env === 'development') {
      console.log('DEBUG Getting ENV username & pass')

      const { user, pass } = props
      if (user) {
        setUsername(user)
      }
      if (pass) {
        setPassword(pass)
      }
    }
  }, [])

  const handleLoginClicked = async () => {
    const res = await fetch('/api/login')

    if (res.status === 200) {
      const json = await res.json()
      if (json.auth === true) {
        Router.push('/app')
      }
    }
  }

  const handleSignUpClicked = () => {
    Router.push('/signup')
  }

  useEffect(() => {
    if (session) {
      Router.push('/app')
    }
  }, [session])

  return session === undefined ? (
    <Spinner />
  ) : session === null ? (
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

            {/* <FormControl id="username">
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
            </FormControl> */}
          </Section>
          {/* <HStack justify="center">
            <Button colorScheme="teal" w="100px" onClick={handleLoginClicked}>
              Login
            </Button>
            <Button colorScheme="teal" w="100px" onClick={handleSignUpClicked}>
              Sign up
            </Button>
          </HStack> */}
          <Button
            colorScheme="teal"
            mt="20px"
            mb="20px"
            w="100%"
            onClick={signIn}
          >
            Login using providers
          </Button>
        </Box>
      </Container>
    </Layout>
  ) : (
    <></>
  )
}
