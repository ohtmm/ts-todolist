import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import {
  HeaderContainer,
  ToggleDarkButton,
} from './styleComponents/styleComponents';
import { MdLightMode, MdNightlight } from 'react-icons/md';

interface IHeaderProps {
  onSelect: (filterValue: string) => void;
}

const Header = ({ onSelect }: IHeaderProps) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <ToggleDarkButton onClick={() => toggleDarkMode()}>
        {isDarkMode ? <MdNightlight /> : <MdLightMode />}
      </ToggleDarkButton>
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
