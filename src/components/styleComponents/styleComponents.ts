import styled from 'styled-components';

// Header
export const HeaderContainer = styled.header`
  width: 100%;
  height: 8rem;
  h1 {
    font-size: 8rem;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme.color.textPrimary};
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
    color: ${(props) => props.theme.color.textPrimary};
    background-color: ${(props) => props.theme.color.primary};
  }
`;

export const ToggleDarkButton = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  font-size: x-large;
  cursor: pointer;
  color: ${(props) => props.theme.color.bgBtnAdd};
  background-color: ${(props) => props.theme.color.textBtnAdd};
  transition: all 0.5s linear;
  border-radius: 100%;
  :hover {
    scale: 1.2;
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
  color: ${(props) => props.theme.color.textPrimary};
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
  color: ${(props) => props.theme.color.textPrimary};
  background-color: ${(props) => props.theme.color.textBtnAdd};
  border: 1px solid ${(props) => props.theme.color.secondary};
`;

export const Button = styled.button`
  display: block;
  width: 6rem;
  height: 100%;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.color.textBtnAdd};
  background-color: ${(props) => props.theme.color.bgBtnAdd};
  cursor: pointer;
`;

// TodoEdit
export const TodoEditContainer = styled(AddForm)`
  position: absolute;
  top: 0.3rem;
  left: -4.8rem;
  width: 68.5rem;
  height: 3.2rem;

  background-color: ${(props) => props.theme.color.primary};
`;

export const TodoEditInput = styled(AddInput)`
  color: ${(props) => props.theme.color.bgInputEdit};
  background-color: ${(props) => props.theme.color.secondary};
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

// TodoItem

export const TodoItemContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  font-size: large;
  border-bottom: 1px solid ${(props) => props.theme.color.secondary};
`;

export const TodoItemCheck = styled.input`
  width: 2rem;
  height: 2rem;
`;

export const ButtonContainer = styled.div`
  button {
    width: 4rem;
    height: 3rem;
    margin-right: 0.4rem;
    border: none;
    border-radius: 6px;
    color: white;
    background-color: ${(props) => props.theme.color.bgBtnUpdate};
    cursor: pointer;

    &:nth-of-type(1) {
      background-color: ${(props) => props.theme.color.bgBtnDelete};
    }
  }
`;
