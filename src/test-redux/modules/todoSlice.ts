// features/todos/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'test-redux/config/configstore';
import { nanoid } from 'nanoid';

interface Todo {
  id: string;
  title: string;
  contents: string;
  isCompleted: boolean;
}

// 초기 상태 정의
const initialState: Todo[] = [
  { id: '1', title: '타입스크립트 공부', contents: '타입스크립트 공부 및 구현하기', isCompleted: false },
  { id: '2', title: '리덕스 공부', contents: '리덕스 공부 및 구현하기', isCompleted: false },
  { id: '3', title: '리액트 공부', contents: '리액트 공부 및 구현하기', isCompleted: true }
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (title: string, contents: string) => ({
        payload: { id: nanoid(), title, contents, isCompleted: false }
      })
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todoSlice.reducer;
