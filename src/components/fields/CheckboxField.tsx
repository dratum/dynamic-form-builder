import { useState } from "react";
import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";

export const CheckboxField = (): JSX.Element => {
  const { addNewDataField } = useFieldsDataContext() as FieldsDataContextType;
  const [inputText, setInputText] = useState("");
  const [inputCheckbox, setInputCheckbox] = useState(false);
  const [inputType, setInputType] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value, checked, name } = e.target;

    if (type === "text") {
      setInputText(value);
      setInputType(name);
    } else if (type === "checkbox") {
      setInputCheckbox(checked);
    }

    addNewDataField({
      id: Date.now(),
      label: type === "text" ? value : inputText,
      type: inputType,
      value: type === "checkbox" ? checked : inputCheckbox,
    });
  };

  return (
    <div className='checkbox-field'>
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
