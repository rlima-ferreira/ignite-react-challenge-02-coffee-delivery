import { Minus, Plus } from 'phosphor-react';
import { InputHTMLAttributes } from 'react';
import { ControlButton, Field } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function InputNumber(props: IProps) {
  return (
    <Field>
      <ControlButton type="button" onClick={props.onDecrement}>
        <Minus size={14} weight="bold" />
      </ControlButton>
      <input {...props} type="number" readOnly min={1} />
      <ControlButton type="button" onClick={props.onIncrement}>
        <Plus size={14} weight="bold" />
      </ControlButton>
    </Field>
  );
}
