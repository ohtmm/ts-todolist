import styled from 'styled-components';

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

const HeaderContainer = styled.header`
  width: 100%;
  height: 8rem;
  h1 {
    font-size: 8rem;
    font-weight: 700;
    text-align: center;
  }
  select {
    display: block;
    margin-top: 4rem;
    width: 8rem;
    height: 4rem;
    padding-left: 1rem;
    font-size: large;
    font-weight: 700;
    border-radius: 10px;
  }
`;
