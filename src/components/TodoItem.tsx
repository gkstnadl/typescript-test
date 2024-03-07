import { useNavigate } from 'react-router-dom';
import { Todo } from 'types';

interface TodoProps {
  key: string;
  todo: Todo;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoProps> = ({ todo, toggleTodo }) => {
  const navigate = useNavigate();

  const handleDetailPageLinkClick = () => {
    navigate(`/${todo.id}`);
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
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
        <button onClick={() => {}}>삭제</button>
        <button onClick={handleToggle}>{todo.isCompleted ? '완료' : '취소'}</button>
      </div>
    </div>
  );
};

export default TodoItem;
