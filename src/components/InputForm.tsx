import { useState } from 'react';
import 'styles/components.css';

interface InputFormProps {
  addTodo: (title: string, contents: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
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
    addTodo(title, contents);
    setTitle('');
    setContents('');
  };

  return (
    <div>
      <form className="inputform" onSubmit={handleSubmit}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="제목을 입력해주세요.(10자이내)"
          onChange={handleTitleChange}
          className="input input-bordered w-full max-w-xs"
        />
        <label htmlFor="title">내용</label>
        <input
          type="text"
          id="contents"
          value={contents}
          placeholder="내용을 입력해주세요."
          onChange={handleContentsChange}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-neutral" type="submit">
          추가하기
        </button>
      </form>
    </div>
  );
};

export default InputForm;
