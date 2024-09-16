import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FieldsContextProvider from "./context/fieldsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <FieldsContextProvider>
    <App />
  </FieldsContextProvider>
  // </React.StrictMode>
);
