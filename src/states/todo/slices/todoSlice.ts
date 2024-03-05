import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterEnum } from "@components/todo/components/filters";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoState {
  todos: Todo[];
  filter: FilterEnum;
}

const initialState: TodoState = {
  todos: [],
  filter: FilterEnum.ALL,
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Math.random(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    completeTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item,
      );
    },
    setFilter: (state, action: PayloadAction<FilterEnum>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, removeTask, completeTask, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
