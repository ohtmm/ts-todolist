import { useState } from 'react';
import styled from 'styled-components';
import { TTodo } from '../../types/type';
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

const TodoItemContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  font-size: large;
  border-bottom: 1px solid ${(props) => props.theme.color.gray200};
`;

const TodoItemCheck = styled.input`
  width: 2rem;
  height: 2rem;
`;

const ButtonContainer = styled.div`
  button {
    width: 4rem;
    height: 3rem;
    margin-right: 0.4rem;
    border: none;
    border-radius: 6px;
    color: white;
    background-color: ${(props) => props.theme.color.warning};
    cursor: pointer;

    &:nth-of-type(1) {
      background-color: ${(props) => props.theme.color.error};
    }
  }
`;
