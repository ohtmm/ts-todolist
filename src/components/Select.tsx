import { TFilter } from './TodoList/TodoList';

interface ISelectProps {
  onSelect: (filterName: string) => void;
}

// 왜 type으로 바로 넣으면 안되지?
const Select = ({ onSelect }: ISelectProps) => {
  return (
    <select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(e.target.value);
      }}
    >
      <option defaultValue='All'>All</option>
      <option value='Left'> Left</option>
      <option value='Done'>Done</option>
    </select>
  );
};

export default Select;
