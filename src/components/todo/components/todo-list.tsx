import { Button, HStack, List, ListItem, Text } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'
import React, { FC, JSX } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useStoreCrud } from '@components/todo/hooks/use-store-crud'
import { Todo } from 'types/todo'

export const TodoList: FC = () => {
  const { filteredTodos, handleCompleteTask, handleDeleteTask } =
      useStoreCrud()

  const renderListItem = (todo: Todo, index: number): JSX.Element => {
    return (
      <HStack
        justify="space-between"
        onClick={() => handleCompleteTask(todo.id)}
      >
        <HStack>
          <Text
            fontWeight={500}
            as={todo.completed ? 's' : 'p'}
            color={todo.completed ? 'green.300' : 'blue.300'}
          >{`${index + 1}. ${todo.text}`}</Text>
        </HStack>
        <Button
          onClick={() => handleDeleteTask(todo?.id)}
          _hover={{ 'bgColor': 'pink' }}
        >
          <MdDeleteOutline color="red" />
        </Button>
      </HStack>
    )
  }

  return (
    <List variant="primary" w="full" h="500px">
      {filteredTodos.map((todo, index) => <Fade cascade key={`${todo}${index}`}>
        <ListItem
          border="1px solid #edf2f7"
          borderRadius={6}
          cursor="pointer"
          px={2}
          py={2}
          mt={2}
        >
          {renderListItem(todo, index)}
        </ListItem>
      </Fade>)}
    </List>
  )
}

export default TodoList
