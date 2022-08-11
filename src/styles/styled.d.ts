import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    containerColor: string;
    titleColor: string;
    textColor: string;
    font: string;
    fontTitle: string;
    fontText: string;
  }
}
