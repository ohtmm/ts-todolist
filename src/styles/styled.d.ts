import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bgBtnDelete: string;
      bgBtnUpdate: string;
      primary: string;
      secondary: string;
      bgBtnAdd: string;
      textBtnAdd: string;
      bgInputEdit: string;
      textPrimary: string;
    };
  }
}
