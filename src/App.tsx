import { useState } from "react";
import "./App.css";
import { Form } from "./components/form/Form";
import { ButtonPanel } from "./components/ButtonsPanel/ButtonPanel";

function App() {
  const [fields, setFields] = useState<JSX.Element[]>([]);
  const addField = (FieldComponent: JSX.Element): void => {
    setFields((prevFields) => {
      return [...prevFields, FieldComponent];
    });
  };

  return (
    <div className='App'>
      <h1>Dynamic Form Builder</h1>
      <ButtonPanel addField={addField} />
      <Form fields={fields} setFields={setFields} />
    </div>
  );
}

export default App;
