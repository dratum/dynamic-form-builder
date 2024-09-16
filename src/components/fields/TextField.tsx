import { useState } from "react";
import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";

export const TextField = (): JSX.Element => {
  const { addNewDataField } = useFieldsDataContext() as FieldsDataContextType;
  const [label, setLabel] = useState("");
  const [text, setText] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = e.target;

    if (name === "label") {
      setLabel(value);
    } else if (name === "text") {
      setText(value);
    }

    addNewDataField({
      id: Date.now(),
      label: name === "label" ? value : label,
      value: name === "text" ? value : text,
      type,
    });
  };

  return (
    <div className='text-field'>
      <input
        type='text'
        placeholder='label'
        name='label'
        value={label}
        onChange={inputHandler}
      />
      <input
        type='text'
        placeholder='text'
        name='text'
        value={text}
        onChange={inputHandler}
      />
      <button>Удалить</button>
    </div>
  );
};
