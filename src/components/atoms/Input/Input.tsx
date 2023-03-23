import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import './Input.scss';

type InputCustomType = {
  label: string;
  isTextArea?: boolean;
};
type InputNativeTypes = InputHTMLAttributes<HTMLInputElement>;
type TextAreaNative = TextareaHTMLAttributes<HTMLTextAreaElement>;
type InputType = InputCustomType & InputNativeTypes & TextAreaNative;

const Input = (props: InputType): JSX.Element => {
  const { name, label, isTextArea = false } = props;

  return (
    <div className='a-input'>
      <label htmlFor={name}>{label}</label>

      {isTextArea ? (
        <textarea name={name} id={name} {...props} />
      ) : (
        <input name={name} id={name} {...props} />
      )}
    </div>
  );
};

export default Input;
