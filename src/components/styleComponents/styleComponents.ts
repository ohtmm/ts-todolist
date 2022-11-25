import styled from 'styled-components';

// Header
export const HeaderContainer = styled.header`
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

// Layout
export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 72rem;
  height: 50rem;
  margin: 2rem auto;
  padding-top: 8rem;
`;

// TodoList
export const TodoContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  width: 100%;
  height: 40rem;
`;

// TodoInput
export const AddForm = styled.form`
  position: absolute;
  top: -4rem;
  right: 0;
  display: flex;
  justify-content: right;
  width: 90%;
  height: 10%;
  margin: 0 auto;
`;

export const AddInput = styled.input`
  width: 80%;
  height: 90%;
  padding-left: 1rem;
  margin-right: 1rem;
  font-size: 2rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color.gray200};
`;

export const Button = styled.button`
  display: block;
  width: 6rem;
  height: 100%;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.color.fontWhite};
  background-color: ${(props) => props.theme.color.fontBlack};
  cursor: pointer;
`;

// TodoEdit
export const TodoEditContainer = styled(AddForm)`
  position: absolute;
  top: 0.3rem;
  left: -4.8rem;
  width: 68.5rem;
  height: 3.2rem;

  background-color: ${(props) => props.theme.color.gray100};
`;

export const TodoEditInput = styled(AddInput)`
  color: ${(props) => props.theme.color.fontWhite};
  background-color: ${(props) => props.theme.color.gray200};
`;

export const EditButton = styled(Button)`
  font-weight: 400;
  background-color: #487eb0;
`;

// TodoItems
export const TodoListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-content: flex-start;
  width: 80%;
  height: 70%;
  margin: 4rem auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
