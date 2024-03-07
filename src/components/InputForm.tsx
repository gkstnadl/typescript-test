import { useState } from 'react';
import { Todo } from '../types';
import { nanoid } from 'nanoid';

const InputForm: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 10) {
      setTitle(newTitle);
      return;
    }
    setTitle(e.target.value);
  };

  const handleContentsChange = (e: React.ChangeEvent<HTMLInputElement>) => setContents(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (!contents) {
      alert('내용을 입력해주세요.');
      return;
    }

    const newTodo: Todo = { id: nanoid(), title, contents, isCompleted: false };
    setTodos([...todos, newTodo]);
    setTitle('');
    setContents('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="제목을 입력해주세요.(10자이내)"
          onChange={handleTitleChange}
        />
        <input
          type="text"
          id="contents"
          value={contents}
          placeholder="내용을 입력해주세요."
          onChange={handleContentsChange}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default InputForm;
