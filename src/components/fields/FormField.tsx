import React, { useState } from "react";
import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";
import { v4 as uuidv4 } from "uuid";
interface FormFieldProps {
  type: "text" | "checkbox" | "dropdown";
}

export const FormField: React.FC<FormFieldProps> = ({ type }) => {
  const { addNewDataField } = useFieldsDataContext() as FieldsDataContextType;
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [accessField, setAccessField] = useState(false);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type: inputType } = e.target;
    if (name === "label") {
      setLabel(value);
    } else {
      setValue(
        inputType === "checkbox"
          ? (e.target as HTMLInputElement).checked.toString()
          : value
      );
    }
  };

  const handleAddField = () => {
    setAccessField(true);
    addNewDataField({ id: uuidv4(), label, value, type });
  };

  const renderFieldInput = () => {
    switch (type) {
      case "text":
        return (
          <input
            type='text'
            name='value'
            value={value}
            onChange={inputHandler}
            placeholder='text'
          />
        );
      case "checkbox":
        return (
          <input
            type='checkbox'
            name='value'
            checked={value === "true"}
            onChange={inputHandler}
          />
        );
      case "dropdown":
        return (
          <select name='value' value={value} onChange={inputHandler}>
            <option value='default'>выбрать</option>
            <option value='option-1'>option-1</option>
            <option value='option-2'>option-2</option>
          </select>
        );
    }
  };

  return (
    <div className={`${type}-field`}>
      <button disabled={accessField} onClick={handleAddField}>
        {accessField ? "ok" : "Подтвердить отправку поля"}
      </button>
      <input
        name='label'
        type='text'
        placeholder='label'
        value={label}
        onChange={inputHandler}
      />
      {renderFieldInput()}
      <button>Удалить</button>
    </div>
  );
};
