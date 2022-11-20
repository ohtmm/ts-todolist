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
  width: 20rem;
  margin: 0 auto;
`;
