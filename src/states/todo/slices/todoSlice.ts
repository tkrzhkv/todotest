import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const initialState: Todo[] = [];

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
      return [...state, newTodo];
    },
    removeTask: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== Number(action.payload));
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
