import { styled } from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

type TitleType = {
  color?: keyof typeof defaultTheme.colors;
};

const BaseTitle = styled.p<TitleType>`
  line-height: 130%;
  font-weight: bold;
  font-family: 'Baloo 2', cursive;

  color: ${(props) => props.color && props.theme.colors[props.color]};
`;

export const TitleXs = styled(BaseTitle)`
  font-size: 1.125rem;
`;

export const TitleSm = styled(BaseTitle)`
  font-size: 1.25rem;
`;

export const TitleMd = styled(BaseTitle)`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const TitleLg = styled(BaseTitle)`
  font-size: 2rem;
  font-weight: 800;
`;

export const TitleXl = styled(BaseTitle)`
  font-size: 3rem;
  font-weight: 800;
`;
