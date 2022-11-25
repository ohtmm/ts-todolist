import { ReactNode } from 'react';
import { LayoutContainer } from './styleComponents/styleComponents';

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
