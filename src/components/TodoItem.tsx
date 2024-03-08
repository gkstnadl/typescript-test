import { useNavigate } from 'react-router-dom';
import { Todo } from 'types';

interface TodoProps {
  todo: Todo;
  toggleTodo: () => void;
  removeTodo: () => void;
}

const TodoItem: React.FC<TodoProps> = ({ todo, toggleTodo, removeTodo }) => {
  const navigate = useNavigate();

  const handleDetailPageLinkClick = () => {
    navigate(`/${todo.id}`);
  };

  return (
    <div>
      <div>
        <p onClick={handleDetailPageLinkClick}>[상세보기]</p>
        <p>{todo.title}</p>
      </div>
      <div />
      <p>{todo.contents}</p>
      <div />
      <div>
        <button onClick={removeTodo}>삭제</button>
        <button onClick={toggleTodo}>{todo.isCompleted ? '완료' : '취소'}</button>
      </div>
    </div>
  );
};

export default TodoItem;
