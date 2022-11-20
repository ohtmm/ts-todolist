import { TTodo } from './TodoList';
import { useState } from 'react';
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
    <li>
      <input type='checkbox' checked={isDone} onChange={handleCheck} />
      {todo} ||
      <span onClick={handleDelete}>삭제</span>
      ||
      <span
        onClick={() => {
          setIsEdit(true);
        }}
      >
        수정
      </span>
      {isEdit && (
        <TodoEdit prevTodo={todoItem} onUpdate={onUpdate} onEdit={setIsEdit} />
      )}
    </li>
  );
};

export default TodoItem;
