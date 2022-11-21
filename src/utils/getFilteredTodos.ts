import { TTodo } from '../types/type';

export default function getFilteredTodos(todos: TTodo[], filter: string) {
  if (filter === 'All') {
    return todos;
  }
  if (filter === 'Done') {
    return todos.filter((todo) => todo.isDone === true);
  }
  if (filter === 'Left') {
    return todos.filter((todo) => todo.isDone === false);
  }
}
