import '@emotion/react';

export interface IColor {
  white: string;
  black: string;
}

declare module '@emotion/react' {
  export interface DefaultTheme {
    colors: IColor;
  }
}

declare global {
  interface ITheme {
    theme: DefaultTheme;
  }
}
