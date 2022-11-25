import { useState } from 'react';
import { TTodo } from '../../types/type';
import {
  EditButton,
  TodoEditContainer,
  TodoEditInput,
} from '../styleComponents/styleComponents';

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
