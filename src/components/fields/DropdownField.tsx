import { useState } from "react";
import { FieldsDataContextType } from "../../context/types/types";
import { useFieldsDataContext } from "../../context/fieldsContext";

export const DropdownField = (): JSX.Element => {
  const { addNewDataField } = useFieldsDataContext() as FieldsDataContextType;

  const [label, setLabel] = useState("");
  const [dropdown, setDropdown] = useState("");

  const inputHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.target;

    if (name === "label") {
      setLabel(value);
    } else if (name === "dropdown") {
      setDropdown(value);
    }

    addNewDataField({
      id: Date.now(),
      label: name === "label" ? value : label,
      value: name === "dropdown" ? value : dropdown,
      type: "dropdown",
    });
  };
  return (
    <div className='dropdown-field'>
      <input
        name='label'
        type='text'
        placeholder='label'
        value={label}
        onChange={inputHandler}
      />
      <select name='dropdown' onChange={inputHandler} value={dropdown}>
        <option>option-1</option>
        <option>option-2</option>
      </select>
      <button>Удалить</button>
    </div>
  );
};
