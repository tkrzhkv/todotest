import { Heading, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <HStack>
      <Heading>Todo list</Heading>
      {children}
    </HStack>
  );
}
