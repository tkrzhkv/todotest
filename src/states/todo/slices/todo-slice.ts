import { FilterEnum } from '@constants/filter-enum'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from 'types/todo'

interface TodoState {
  todos: Todo[]
  filter: FilterEnum
}

const initialState: TodoState = {
  'todos': [],
  'filter': FilterEnum.ALL,
}

const todoSlice = createSlice({
  'name': 'todoList',
  initialState,
  'reducers': {
    'addTask': (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        'id': Math.random(),
        'text': action.payload,
        'completed': false,
      }
      state.todos.push(newTodo)
    },
    'removeTask': (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    'completeTask': (state, action: PayloadAction<number>) => {
      state.todos = // eslint-disable-next-line max-len,no-confusing-arrow
        state.todos.map((todo) => todo.id === action.payload ? { ...todo, 'completed': !todo.completed } : todo)
    },
    'setFilter': (state, action: PayloadAction<FilterEnum>) => {
      state.filter = action.payload
    },
  },
})

export const { addTask, removeTask, completeTask, setFilter } =
  todoSlice.actions
export default todoSlice.reducer
