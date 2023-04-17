import styled from 'styled-components';
import { theme } from '../../styles';

export const InputWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const inputStyles = `
  width: 100%;
  padding: 10px;
  font-size: inherit;
  border-radius: 8px;
	outline: none;
	border: 2px solid ${theme.colors.border.lightGray};
  ::placeholder {
    color: ${theme.colors.border.lightGray}
	
`;

export const InputText = styled.input`
  ${inputStyles}
  :focus {
    outline: none;
  }
`;

export const InputSelect = styled.select`
  ${inputStyles}
`;
