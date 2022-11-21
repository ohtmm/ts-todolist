import { ReactNode } from 'react';
import styled from 'styled-components';

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 72rem;
  height: 50rem;
  margin: 2rem auto;
  padding-top: 8rem;
`;
