import {
  addTask,
  completeTask,
  removeTask,
  setFilter,
  Todo,
} from "@states/todo/slices/todoSlice";
import { useAppDispatch, useAppSelector } from "@hooks/state";
import { useDisclosure } from "@chakra-ui/react";
import { FilterEnum } from "@components/todo/components/filters";
import { useEffect, useState } from "react";

export const useStoreCrudOperations = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const filter = useAppSelector((state) => state.todo.filter);
  const dispatch = useAppDispatch();
  const { onToggle } = useDisclosure();

  const handleAddTodo = (text: string) => {
    if (text) {
      dispatch(addTask(text));
    }
  };
  const handleDeleteTask = (id: number) => {
    onToggle();
    if (id) {
      dispatch(removeTask(id));
    }
  };

  const handleCompleteTask = (id: number) => {
    if (id) {
      dispatch(completeTask(id));
    }
  };

  const handleFilterChange = (filter: FilterEnum) => {
    dispatch(setFilter(filter));
  };

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  useEffect(() => {
    if (filter === FilterEnum.COMPLETED) {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    } else if (filter === FilterEnum.CURRENT) {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else {
      setFilteredTodos(todos);
    }
  }, [todos, filter]);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const uncompletedCount = todos.length - completedCount;

  return {
    handleAddTodo,
    handleDeleteTask,
    handleCompleteTask,
    handleFilterChange,
    filteredTodos,
    filter,
    todos,
    completedCount,
    uncompletedCount,
  };
};
