import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  .img {
    transition: 200ms ease;
    transform: rotate(45deg);
  }

  &:hover .img {
    transform: rotate(0deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox align="center">
          <ArrowRightIcon
            className="img"
            width="20px"
            mr="10px"
            height="20px"
          />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            1001 Albums Tracker
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
