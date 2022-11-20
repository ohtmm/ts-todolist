import { useRef, useState } from 'react';
import { TTodo } from './TodoList';

import { v4 as uuidv4 } from 'uuid';

interface ITodoInputProps {
  onAdd: (todo: TTodo) => void;
}

// submit event 발생 시 inputref.current.value 사용하는 거 안됨?

const TodoInput = ({ onAdd }: ITodoInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim().length) {
      setInputValue('');
      return;
    }
    onAdd({
      id: uuidv4(),
      todo: inputValue,
      isDone: false,
    });
    setInputValue('');
    inputRef.current?.focus();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='할 일을 입력하세요'
        onChange={onChange}
        value={inputValue}
        ref={inputRef}
      />
      <button>추가</button>
    </form>
  );
};

export default TodoInput;
