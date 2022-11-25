import { useState } from 'react';
import { TTodo } from '../../types/type';
import {
  ButtonContainer,
  TodoItemCheck,
  TodoItemContainer,
} from '../styleComponents/styleComponents';
import TodoEdit from './TodoEdit';

interface ITodoProps {
  key: string;
  todoItem: TTodo;
  onDelete: (id: string) => void;
  onUpdate: (todo: TTodo) => void;
}

const TodoItem = ({ todoItem, onDelete, onUpdate }: ITodoProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const { id, todo, isDone } = todoItem;
  const handleDelete = () => {
    onDelete(id);
  };

  const handleCheck = () => {
    const updatedTodo = { ...todoItem, isDone: !todoItem.isDone };
    onUpdate(updatedTodo);
  };

  return (
    <TodoItemContainer>
      <TodoItemCheck type='checkbox' checked={isDone} onChange={handleCheck} />
      {todo}
      <ButtonContainer>
        <button onClick={handleDelete}>삭제</button>
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          수정
        </button>
      </ButtonContainer>
      {isEdit && (
        <TodoEdit prevTodo={todoItem} onUpdate={onUpdate} onEdit={setIsEdit} />
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
