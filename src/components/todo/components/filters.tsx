import { Fade } from "react-awesome-reveal"
import { Button, HStack } from "@chakra-ui/react"
import React from "react"
import { useStoreCrudOperations } from "@components/todo/hooks/useStoreCrudOperations"
import { FilterEnum } from "@constants/filterEnum"

export default function TodoFilters():JSX.Element {
  const { handleFilterChange } = useStoreCrudOperations()

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
