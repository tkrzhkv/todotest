import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useStoreCrudOperations } from "@components/todo/hooks/useStoreCrudOperations";

export default function TodoCounter() {
  const { completedCount, uncompletedCount } = useStoreCrudOperations();

  return (
    <VStack w="full" alignItems="start">
      <Text
        fontSize={14}
        fontWeight={500}
        color="green.300"
      >{`Completed tasks: ${completedCount}`}</Text>
      <Text
        fontSize={14}
        fontWeight={500}
        color="blue.300"
      >{`Uncompleted tasks: ${uncompletedCount}`}</Text>
    </VStack>
  );
}
