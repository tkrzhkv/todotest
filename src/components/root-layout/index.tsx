import { Heading, Stack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Zoom } from "react-awesome-reveal";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <VStack alignItems="center" justifyContent="center" h="100vh">
      <Zoom duration={1500}>
        <Heading fontSize={24} mb={6}>
          Write your task
        </Heading>
      </Zoom>
      <Stack>{children}</Stack>
    </VStack>
  );
}
