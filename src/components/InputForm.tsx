import { useState } from 'react';
import TodoList from './TodoList';
import { Todo } from '../types';
import { nanoid } from 'nanoid';

const InputForm: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');

  const addTodo = (): void => {
    const newTodo: Todo = { id: nanoid(), title, contents, isCompleted: false };
    setTodos([...todos, newTodo]);
    setTitle('');
    setContents('');
  };

  return (
    <div>
      <form>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={contents} onChange={(e) => setContents(e.target.value)} />
        <button type="button" onClick={addTodo}>
          추가
        </button>
      </form>
    </div>
  );
};

export default InputForm;
