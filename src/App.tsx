import { useState } from "react";
import "./App.css";
import { CheckboxField } from "./components/fields/CheckboxField";
import { DropdownField } from "./components/fields/DropdownField";
import { AddFieldButton } from "./components/button/addField";
import { TextField } from "./components/fields/TextField";
import { Form } from "./components/form/Form";

function App() {
  const [fields, setFields] = useState<JSX.Element[]>([]);
  const [formData, setFormData] = useState<
    { id: number; type: string; label: string; value: boolean }[]
  >([]);

  const addField = (FieldComponent: JSX.Element): void => {
    setFields((prevFields) => {
      return [...prevFields, FieldComponent];
    });
  };

  return (
    <div className='App'>
      <h1>Dynamic Form Builder</h1>
      <div>
        <AddFieldButton
          onAddField={() => addField(<TextField />)}
          label='Добавить текстовое поле'
        />
        <AddFieldButton
          onAddField={() => addField(<CheckboxField />)}
          label='Добавить checkbox'
        />
        <AddFieldButton
          onAddField={() => addField(<DropdownField />)}
          label='Добавить dropdown'
        />
      </div>
      <Form fields={fields} formData={formData} />
    </div>
  );
}

export default App;
