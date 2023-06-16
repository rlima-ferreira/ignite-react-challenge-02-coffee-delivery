import { styled } from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

interface IItemProps {
  bgIcon?: keyof typeof defaultTheme.colors;
}

export const Item = styled.div<IItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: 0.5rem;
    color: white;

    background-color: ${(props) =>
      props.bgIcon
        ? props.theme.colors[props.bgIcon]
        : props.theme.colors.yellowDark};
  }
`;
