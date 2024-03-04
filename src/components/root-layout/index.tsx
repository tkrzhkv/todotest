import { Heading, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Zoom } from "react-awesome-reveal";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <VStack>
      <Zoom direction="up">
        <Heading>Todo list</Heading>
      </Zoom>
      {children}
    </VStack>
  );
}
