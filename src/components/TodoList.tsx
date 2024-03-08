import { Todo } from '../types';
import TodoItem from 'components/TodoItem';
import 'styles/components.css';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <>
      <div className="todolist">
        <h3 className="todolist-title">Working🔥</h3>
        <div className="todolist-items">
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
      </div>
      <div className="todolist">
        <h3 className="todolist-title">Done✔️</h3>
        <div className="todolist-items">
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
      </div>
    </>
  );
};

export default TodoList;
