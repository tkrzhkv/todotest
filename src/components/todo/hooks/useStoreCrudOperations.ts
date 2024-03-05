import {
  addTask,
  completeTask,
  removeTask,
  setFilter,
  Todo,
} from "@states/todo/slices/todoSlice"
import { useAppDispatch, useAppSelector } from "@hooks/state"
import { useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {FilterEnum} from "@constants/filterEnum"

interface StoreCrudOperations {
  handleAddTodo: (text: string) => void
  handleDeleteTask: (id: number) => void
  handleCompleteTask: (id: number) => void
  handleFilterChange: (filter: FilterEnum) => void
  filteredTodos: Todo[]
  filter: FilterEnum
  todos: Todo[]
  completedCount: number
  uncompletedCount: number
}

export const useStoreCrudOperations = (): StoreCrudOperations => {
  const todos = useAppSelector((state) => state.todo.todos)
  const filter = useAppSelector((state) => state.todo.filter)
  const dispatch = useAppDispatch()
  const { onToggle } = useDisclosure()

  const handleAddTodo = (text: string): void => {
    if (text) {
      dispatch(addTask(text))
    }
  }

  const handleDeleteTask = (id: number): void => {
    onToggle()
    if (id) {
      dispatch(removeTask(id))
    }
  }

  const handleCompleteTask = (id: number): void => {
    if (id) {
      dispatch(completeTask(id))
    }
  }

  const handleFilterChange = (filter: FilterEnum): void => {
    dispatch(setFilter(filter))
  }


  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos)

  useEffect(() => {
    if (filter === FilterEnum.COMPLETED) {
      setFilteredTodos(todos.filter((todo) => todo.completed))
    } else if (filter === FilterEnum.CURRENT) {
      setFilteredTodos(todos.filter((todo) => !todo.completed))
    } else {
      setFilteredTodos(todos)
    }
  }, [todos, filter])

  const completedCount = todos.filter((todo) => todo.completed).length
  const uncompletedCount = todos.length - completedCount

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
  }
}
