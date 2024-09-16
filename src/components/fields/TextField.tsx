import { useState } from "react";
import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";

export const TextField = (): JSX.Element => {
  const { addNewDataField } = useFieldsDataContext() as FieldsDataContextType;
  const [label, setLabel] = useState("");
  const [text, setText] = useState("");
  const [accessField, setAccessField] = useState(false);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === "label") {
      setLabel(value);
    } else if (name === "text") {
      setText(value);
    }
  };

  const handleAddField = () => {
    setAccessField(!accessField);

    addNewDataField({
      id: Date.now(),
      label: label,
      value: text,
      type: "text",
    });
  };

  return (
    <div className='text-field'>
      <button disabled={accessField} onClick={handleAddField}>
        Подвердить отправку поля
      </button>
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
