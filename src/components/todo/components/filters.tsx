import { Fade } from 'react-awesome-reveal'
import { Button, HStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useStoreCrud } from '@components/todo/hooks/use-store-crud'
import { FilterEnum } from '@constants/filter-enum'

export const TodoFilters: FC = () => {
  const { handleFilterChange } = useStoreCrud()

  return (
    <HStack>
      <Fade cascade>
        <Button onClick={() => handleFilterChange(FilterEnum.ALL)}>All</Button>
        <Button onClick={() => handleFilterChange(FilterEnum.COMPLETED)}>
          Completed
        </Button>
        <Button onClick={() => handleFilterChange(FilterEnum.CURRENT)}>
          Current
        </Button>
      </Fade>
    </HStack>
  )
}
