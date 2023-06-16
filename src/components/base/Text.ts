import { styled } from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

type TextType = {
  color?: keyof typeof defaultTheme.colors;
  isBold?: boolean;
};

const BaseText = styled.p<TextType>`
  line-height: 130%;

  font-weight: ${(props) => (props.isBold ? 'bold' : 400)};
  color: ${(props) => props.color && props.theme.colors[props.color]};
`;

export const TextXs = styled(BaseText)`
  font-size: 0.75rem;
`;

export const TextSm = styled(BaseText)`
  font-size: 0.875rem;
`;

export const TextMd = styled(BaseText)`
  font-size: 1rem;
`;

export const TextLg = styled(BaseText)`
  font-size: 1.25rem;
`;
