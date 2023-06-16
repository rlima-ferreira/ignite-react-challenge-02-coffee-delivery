import { styled } from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

type ButtonType = {
  bg?: keyof typeof defaultTheme.colors;
  hover?: keyof typeof defaultTheme.colors;
  color?: keyof typeof defaultTheme.colors;
};

const BaseButton = styled.button<ButtonType>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;
  line-height: 160%;

  color: ${(props) => props.color && props.theme.colors[props.color]};
  background-color: ${(props) => props.bg && props.theme.colors[props.bg]};

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.hover && props.theme.colors[props.hover]};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.baseText};
    background-color: ${(props) => props.theme.colors.baseButton};
    cursor: not-allowed;
  }
`;

export const ButtonMd = styled(BaseButton)`
  font-size: 0.75rem;
`;

export const ButtonLg = styled(BaseButton)`
  font-size: 0.875rem;
  font-weight: bold;
`;
