import { useState } from 'react';
import styled from 'styled-components';
import { TTodo } from '../../types/type';
import { AddForm, AddInput, Button } from './TodoInput';

interface ITodoEditProps {
  prevTodo: TTodo;
  onUpdate: (todo: TTodo) => void;
  onEdit: (editStatus: boolean) => void;
}
const TodoEdit = ({ prevTodo, onUpdate, onEdit }: ITodoEditProps) => {
  const [editTodoText, setEditTodoText] = useState(prevTodo.todo);
  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodoText(e.currentTarget.value);
  };

  const handleEditDone = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate({
      ...prevTodo,
      todo: editTodoText,
    });
    onEdit(false);
  };
  return (
    <TodoEditContainer onSubmit={handleEditDone}>
      <TodoEditInput type='text' value={editTodoText} onChange={handleEdit} />
      <EditButton>수정 끝!</EditButton>
    </TodoEditContainer>
  );
};

export default TodoEdit;

const TodoEditContainer = styled(AddForm)`
  position: absolute;
  top: 0.3rem;
  left: -4.8rem;
  width: 68.5rem;
  height: 3.2rem;

  background-color: ${(props) => props.theme.color.gray100};
`;

const TodoEditInput = styled(AddInput)`
  color: ${(props) => props.theme.color.fontWhite};
  background-color: ${(props) => props.theme.color.gray200};
`;

const EditButton = styled(Button)`
  font-weight: 400;
  background-color: #487eb0;
`;
