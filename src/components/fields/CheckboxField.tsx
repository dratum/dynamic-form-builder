import { useState } from "react";
import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";

export const CheckboxField = (): JSX.Element => {
  const { addNewDataField } = useFieldsDataContext() as FieldsDataContextType;
  const [inputText, setInputText] = useState("");
  const [inputCheckbox, setInputCheckbox] = useState(false);
  const [inputType, setInputType] = useState("");
  const [accessField, setAccessField] = useState(false);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value, checked, name } = e.target;

    if (type === "text") {
      setInputText(value);
      setInputType(name);
    } else if (type === "checkbox") {
      setInputCheckbox(checked);
    }
  };

  const handleAddField = () => {
    setAccessField(!accessField);

    addNewDataField({
      id: Date.now(),
      label: inputText,
      type: inputType,
      value: inputCheckbox,
    });
  };
  return (
    <div className='checkbox-field'>
      <button disabled={accessField} onClick={handleAddField}>
        Подвердить отправку поля
      </button>
      <input
        required
        name='checkbox'
        type='text'
        placeholder='label'
        value={inputText}
        onChange={inputHandler}
      ></input>
      <input
        type='checkbox'
        name='checkbox'
        checked={inputCheckbox}
        onChange={inputHandler}
      />
      <button>Удалить</button>
    </div>
  );
};
