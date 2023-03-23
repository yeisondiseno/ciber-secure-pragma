import { useRef, useState } from 'react';
import './PublicPage.scss';
// components
import Input from 'components/atoms/Input/Input';

const PublicPage = (): JSX.Element => {
  // states
  const defaultState = {
    text: '',
    number: '',
    area: '',
  };
  const [formValue, setFormValue] = useState({
    text: '',
    number: '',
    area: '',
  });

  // state actions
  const handledFormValue = ({
    newValue,
    key,
  }: {
    newValue: string;
    key: string;
  }) => {
    setFormValue((prev) => ({ ...prev, [key]: newValue }));
  };

  const divRef = useRef<HTMLDivElement>(null);

  // actions
  const handledOnSubmit = () => {
    // formValue.area && (window as any).eval(formValue.area);

    divRef!.current!.innerHTML = formValue.area;

    setFormValue(defaultState);
  };

  return (
    <section className='public-page'>
      <h1>Formularios Públicos</h1>
      <span className='public-page__line' />
      <hr />
      <section>
        <h2>Sin sanitizar</h2>

        <Input
          label='Texto'
          type='text'
          id='text'
          value={formValue.text}
          onChange={(e) =>
            handledFormValue({ newValue: e.target.value, key: 'text' })
          }
        />
        <Input
          label='Número'
          type='number'
          id='number'
          value={formValue.number}
          onChange={(e) =>
            handledFormValue({ newValue: e.target.value, key: 'number' })
          }
        />

        <Input
          label='Area de text'
          id='area'
          isTextArea={true}
          value={formValue.area}
          onChange={(e) =>
            handledFormValue({ newValue: e.target.value, key: 'area' })
          }
        />

        <button type='button' onClick={() => handledOnSubmit()}>
          Enviar
        </button>

        <div ref={divRef} />
      </section>
    </section>
  );
};

export default PublicPage;
