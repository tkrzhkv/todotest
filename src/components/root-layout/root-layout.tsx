import { FC, ReactNode } from 'react'
import { Heading, Stack, VStack } from '@chakra-ui/react'
import { Zoom } from 'react-awesome-reveal'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <VStack alignItems="center" justifyContent="center" h="100vh">
      <Zoom duration={1500}>
        <Heading fontSize={24} mb={6}>
            Write your task
        </Heading>
      </Zoom>
      <Stack>{children}</Stack>
    </VStack>
  )
}

export default RootLayout
