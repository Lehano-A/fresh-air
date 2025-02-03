import React, { useEffect, useState } from 'react';
import ButtonSubmit, { ButtonProps } from '../ButtonAction/ButtonAction';
import InputText from '../InputText/InputText';

interface FormFeedbackProps {
  layout?: string;
  buttonSubmitStyle?: {
    disabled?: boolean;
    outerBgColor?: ButtonProps['outerBgColor'];
    size?: ButtonProps['size'];
  };
  outerBgColorSubmit?: string;
}

interface inputsValues {
  name: { value: string; validation: boolean };
  numberPhone: { value: string; validation: boolean };
}

function FormFeedback({ layout, buttonSubmitStyle }: FormFeedbackProps) {
  const { size, outerBgColor } = buttonSubmitStyle || {};

  const [inputsValues, setInputsValues] = useState<inputsValues>({
    name: { value: '', validation: false },
    numberPhone: { value: '', validation: false },
  });
  const [resultValidation, setResultValidation] = useState(false);

  useEffect(() => {
    const keys = Object.keys(inputsValues);
    const isUnsuccessfulValidation = keys.some((key) => {
      if (inputsValues[key as keyof typeof inputsValues].validation === false) {
        return true;
      }
    });

    setResultValidation(isUnsuccessfulValidation);
  }, [inputsValues]);

  // обработать инпут
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const name = e.target.name;

    // если пустая (строка очищается)
    if (value.length === 0) {
      setInputsValues((prevState) => ({
        ...prevState,
        [name]: { value, validation: false },
      }));
    } else if (validate(value, name)) {
      // если строка проходит валидацию
      setInputsValues((prevState) => ({
        ...prevState,
        [name]: { value, validation: true },
      }));
    }
  }

  // валидировать значение инпута
  function validate(value: string, inputName: string) {
    const regexStr = /^[a-zа-я]+$/gim;
    const regexNum = /^\+?[\d|\-|\s]*$/g;

    if (inputName === 'name') {
      return regexStr.test(value);
    }

    if (inputName === 'numberPhone') {
      return regexNum.test(value);
    }
  }

  return (
    <form
      className={`form-feedback ${layout ? `form-feedback_in-${layout}` : ''}`}
    >
      <InputText
        layout={layout}
        placeholder='Ваше имя'
        name='name'
        handleOnChange={handleInput}
        value={inputsValues.name.value}
      />
      <InputText
        layout={layout}
        placeholder='Номер телефона'
        name='numberPhone'
        handleOnChange={handleInput}
        value={inputsValues.numberPhone.value}
      />

      <ButtonSubmit
        layout={layout}
        name='отправить'
        size={size}
        disabled={resultValidation}
        outerBgColor={outerBgColor}
      />
    </form>
  );
}

export default FormFeedback;
