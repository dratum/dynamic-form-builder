import { useState } from "react";

interface fieldDataState {
  id: number;
  type: string;
  label: string;
  value: boolean;
}

export const CheckboxField = (): JSX.Element => {
  const [fieldData, setFieldData] = useState<fieldDataState>({
    id: 0,
    type: "",
    label: "",
    value: false,
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setFieldData({
      ...fieldData,
      id: Date.now(),
      type: name,
      label: value,
      value: checked,
    });
  };

  return (
    <div className='checkbox-field'>
      <input
        name='checkbox'
        type='text'
        placeholder='label'
        value={fieldData.label}
        onChange={inputHandler}
      ></input>
      <input
        type='checkbox'
        name='checkbox'
        checked={fieldData.value}
        onChange={inputHandler}
      />
      <button>Удалить</button>
    </div>
  );
};
