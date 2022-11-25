import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TTodo } from '../../types/type';
import { AddForm, AddInput, Button } from '../styleComponents/styleComponents';

interface ITodoInputProps {
  onAdd: (todo: TTodo) => void;
}

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
    <AddForm onSubmit={onSubmit}>
      <AddInput
        type='text'
        placeholder='완벽함이 아니라 성장을 생각하자'
        onChange={onChange}
        value={inputValue}
        ref={inputRef}
      />
      <Button>해보자</Button>
    </AddForm>
  );
};

export default TodoInput;
