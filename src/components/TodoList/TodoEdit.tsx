import { TTodo } from './TodoList';
import { useState } from 'react';

interface ITodoEdit {
  prevTodo: TTodo;
  onUpdate: (todo: TTodo) => void;
  onEdit: (editStatus: boolean) => void;
}
const TodoEdit = ({ prevTodo, onUpdate, onEdit }: ITodoEdit) => {
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
    <form onSubmit={handleEditDone}>
      <input type='text' value={editTodoText} onChange={handleEdit} />
      <button>수정 완료</button>
    </form>
  );
};

export default TodoEdit;
