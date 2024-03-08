import { useState } from 'react';
import InputForm from 'components/InputForm';
import TodoList from 'components/TodoList';
import { Todo } from 'types';
import { nanoid } from 'nanoid';

const initialTodos: Todo[] = [
  {
    id: '1',
    title: 'TypeScript 과제',
    contents: 'Lv1 ~ Lv5 과제끝내기',
    isCompleted: false
  },
  {
    id: '2',
    title: 'TypeScript 학습',
    contents: 'TypeScript 구현해보기',
    isCompleted: true
  }
];

const Main: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title: string, contents: string) => {
    const newTodo = { id: nanoid(), title, contents, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default Main;
