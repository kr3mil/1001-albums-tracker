import NextLink from 'next/link'
import { Spinner } from '@chakra-ui/spinner'
import { providers, useSession, signIn } from 'next-auth/react'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../components/layouts/article'
import {
  Container,
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Link,
  HStack
} from '@chakra-ui/react'
import Section from '../components/section'

export default function Component(props) {
  const { data: session } = useSession()

  useEffect(() => {
    console.log(session)
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
            <Heading as="h1" align="center" mt="20px">
              Login
            </Heading>
          </Section>
          <Button
            colorScheme="teal"
            mb="20px"
            w="100%"
            onClick={() =>
              signIn(providers, {
                callbackUrl: '/app'
              })
            }
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
