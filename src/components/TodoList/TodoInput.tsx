import { useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { TTodo } from '../../types/type';
import { GrAdd } from 'react-icons/gr';

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

export const AddForm = styled.form`
  position: absolute;
  top: -4rem;
  right: 0;
  display: flex;
  justify-content: right;
  width: 90%;
  height: 10%;
  margin: 0 auto;
`;

export const AddInput = styled.input`
  width: 80%;
  height: 90%;
  padding-left: 1rem;
  margin-right: 1rem;
  font-size: 2rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color.gray200};
`;

export const Button = styled.button`
  display: block;
  width: 6rem;
  height: 100%;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.color.fontWhite};
  background-color: ${(props) => props.theme.color.fontBlack};
  cursor: pointer;
`;
