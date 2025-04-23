import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      link: string;

      muted: string;
      blue: string;
    };
  }
}