import { useState } from "react";
import { FieldsDataContextType } from "../../context/types/types";
import { useFieldsDataContext } from "../../context/fieldsContext";

export const DropdownField = () => {
  const { addNewDataField } = useFieldsDataContext() as FieldsDataContextType;

  const [label, setLabel] = useState("");
  const [dropdown, setDropdown] = useState("default");
  const [accessField, setAccessField] = useState(false);

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
  };

  const handleAddField = () => {
    setAccessField(!accessField);
    addNewDataField({
      id: Date.now(),
      label: label,
      value: dropdown,
      type: "dropdown",
    });
  };
  return (
    <div className='dropdown-field'>
      <button disabled={accessField} onClick={handleAddField}>
        {accessField ? "ok" : "Подвердить отправку поля"}
      </button>
      <input
        name='label'
        type='text'
        placeholder='label'
        value={label}
        onChange={inputHandler}
      />
      <select name='dropdown' onChange={inputHandler} value={dropdown}>
        <option value='default'>выбрать</option>
        <option value='option-1'>option-1</option>
        <option value='option-2'>option-2</option>
      </select>
      <button>Удалить</button>
    </div>
  );
};
