import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => toggleTodo(todo.id)}>
          {todo.title}
          {todo.contents}
          <button>{todo.isCompleted ? '완료' : '취소'}</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
