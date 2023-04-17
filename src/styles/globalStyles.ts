import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-width: 360px;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.background.page};
  color: ${(props) => props.theme.colors.text.primary};
	font-family: 'Inter', 'SB Sans Text', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
}

button {
  background: none;
  border: none;
}

img {
    max-width: 100%;
    object-fit: cover;
}

li {
	list-style: none;
}

a {
	text-decoration: none;
  color: #fff;
	:hover {
  color: ${(props) => props.theme.colors.text.primary};
}
}
`;
