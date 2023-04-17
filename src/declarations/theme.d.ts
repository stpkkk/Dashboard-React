import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
    };
    colors: {
      text: {
        primary: string;
      };
      background: {
        page: string;
        header: string;
        navbar: string;
        form: string;
      };
      border: {
        lightGray: string;
      };
      button: {
        redBtn: string;
        lightBtn: string;
        greenBtn: string;
        blueBtn: string;
      };
      hover: {
        blueHover: string;
        redHover: string;
        lightHover: string;
        greenHover: string;
      };
    };
  }
}
