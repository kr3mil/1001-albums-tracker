import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            1001 Albums Tracker
          </Heading>
          <p>Based on the book '1001 Albums you must hear before you die'</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          This web application will allow you to keep track of your progress
          through the albums featured on the book '1001 Albums You Must Hear
          Before You Die'. The full list ranges from the year 1956 to 2010. You
          can find the website that was the starting point of this project{' '}
          <NextLink
            href="http://1001albumsyoumusthearbeforeyoudie.wikidot.com"
            passHref={true}
          >
            <Link>here</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/login">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Get Started
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
