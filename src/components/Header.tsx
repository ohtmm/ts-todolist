interface IHeaderProps {
  onSelect: (filterValue: string) => void;
}

const Header = ({ onSelect }: IHeaderProps) => {
  return (
    <header>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          onSelect(e.target.value);
        }}
      >
        <option defaultValue='All'>All</option>
        <option value='Left'> Left</option>
        <option value='Done'>Done</option>
      </select>
    </header>
  );
};

export default Header;
