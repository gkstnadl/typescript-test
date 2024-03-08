import { useDispatch, useSelector } from 'react-redux';
import { addTodo, selectTodos, toggleTodo, removeTodo } from 'test-redux/modules/todoSlice';
import InputForm from 'components/InputForm';
import TodoList from 'components/TodoList';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleAddTodo = (title: string, contents: string) => {
    dispatch(addTodo(title, contents));
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <InputForm addTodo={handleAddTodo} />
      <TodoList todos={todos} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo} />
    </div>
  );
};

export default Main;
