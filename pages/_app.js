import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

function Website({ Component, pageProps: { session, ...pageProps }, router }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Fonts />
        {router.route === '/app' ? (
          <Component {...pageProps} router={router} key={router.route} />
        ) : (
          <Layout router={router}>
            <AnimatePresence exitBeforeEnter initial={true}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        )}
      </ChakraProvider>
    </SessionProvider>
  )
}

export default Website
