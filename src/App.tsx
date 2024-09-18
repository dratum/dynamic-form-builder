import "./App.css";
import { Form } from "./components/form/Form";
import { ButtonPanel } from "./components/ButtonsPanel/ButtonPanel";

function App() {
  return (
    <div className='App'>
      <h1>Dynamic Form Builder</h1>
      <ButtonPanel />
      <Form />
    </div>
  );
}

export default App;
