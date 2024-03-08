import { Todo } from '../types';
import TodoItem from 'components/TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <>
      <div>
        <h3>해야할 일🔥</h3>
        {todos
          .filter((item) => !item.isCompleted)
          .map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              toggleTodo={() => toggleTodo(item.id)}
              removeTodo={() => removeTodo(item.id)}
            />
          ))}
      </div>
      <div>
        <h3>완료한 일✔️</h3>
        {todos
          .filter((item) => item.isCompleted)
          .map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              toggleTodo={() => toggleTodo(item.id)}
              removeTodo={() => removeTodo(item.id)}
            />
          ))}
      </div>
    </>
  );
};

export default TodoList;
