import { Text, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useStoreCrud } from '@components/todo/hooks/use-store-crud'

export const TodoCounter:FC = () => {
  const { completedCount, uncompletedCount } = useStoreCrud()

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
  )
}
