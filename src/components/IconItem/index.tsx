import { ReactNode } from 'react';
import { TextMd } from '../base/Text';
import { Item } from './styles';

interface IProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconColor?: 'yellowDark' | 'baseText' | 'purple' | 'yellow';
}

export default function IconItem(props: IProps) {
  return (
    <Item bgIcon={props.iconColor}>
      <span>{props.icon}</span>
      <TextMd color="baseText">{props.text}</TextMd>
    </Item>
  );
}
