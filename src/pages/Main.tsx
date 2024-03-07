import InputForm from 'components/InputForm';
import TodoList from 'components/TodoList';
import { Todo } from 'types';

const initialTodos: Todo[] = [
  {
    id: '1',
    title: '할 일 1',
    contents: '할 일 1 내용',
    isCompleted: false
  },
  {
    id: '2',
    title: '할 일 2',
    contents: '할 일 2 내용',
    isCompleted: true
  }
];

const toggleTodo = (id: string) => {
  console.log('toggleTodo', id);
};

const Main: React.FC = () => {
  return (
    <div>
      <InputForm />
      <TodoList todos={initialTodos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default Main;
