import { HeaderContainer } from './styleComponents/styleComponents';

interface IHeaderProps {
  onSelect: (filterValue: string) => void;
}

const Header = ({ onSelect }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <h1>끝 말고 오늘을 보는 법</h1>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          onSelect(e.target.value);
        }}
      >
        <option defaultValue='All'>All</option>
        <option value='Left'> Left</option>
        <option value='Done'>Done</option>
      </select>
    </HeaderContainer>
  );
};

export default Header;
