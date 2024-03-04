import React, { useState } from "react";
import { addTask, removeTask } from "@states/todo/slices/todoSlice";
import { useAppDispatch, useAppSelector } from "@hooks/state";
import {
  Button,
  HStack,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

export default function TodoComponent() {
  const [text, setText] = useState("");
  const todos = useAppSelector((state) => state.todo); // Corrected usage of useSelector
  const dispatch = useAppDispatch();

  console.log(todos);

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTask(text)); // Use the text entered by the user
      setText("");
    }
  };

  const handleDeleteTask = (id: string) => {
    if (id) {
      dispatch(removeTask(id));
    }
  };

  return (
    <VStack>
      <HStack>
        <Fade direction="left">
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Fade>
        <Fade direction="right">
          <Button onClick={handleAddTodo}>Add</Button>
        </Fade>
      </HStack>
      <List>
        {todos.map((todo, index) => (
          <ListItem onClick={() => handleDeleteTask(String(todo?.id))}>
            <Text>{`${index + 1}. ${todo.text}`}</Text>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
}
