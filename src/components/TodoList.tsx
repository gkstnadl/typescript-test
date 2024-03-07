import { Todo } from '../types';
import TodoItem from 'components/TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <>
      <div>
        <h3>해야할 일🔥</h3>
        {todos
          .filter((item) => !item.isCompleted) // 완료되지 않은 할 일
          .map((item) => {
            return <TodoItem key={item.id} todo={item} toggleTodo={() => toggleTodo(item.id)} />;
          })}
      </div>
      <div>
        <h3>완료한 일✔️</h3>
        {todos
          .filter((item) => item.isCompleted) // 완료된 할 일
          .map((item) => {
            return <TodoItem key={item.id} todo={item} toggleTodo={() => toggleTodo(item.id)} />;
          })}
      </div>
    </>
  );
};

export default TodoList;
