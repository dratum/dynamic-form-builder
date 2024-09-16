import { ReactNode, useContext, createContext, useState } from "react";
import { fieldDataState } from "../components/fields/types/interface";
import { FieldsDataContextType } from "./types/types";

const FieldsDataContext = createContext<FieldsDataContextType | undefined>(
  undefined
);
function FieldsContextProvider({ children }: { children: ReactNode }) {
  const [fieldData, setFieldData] = useState<fieldDataState[]>([]);

  const addNewDataField = ({ type, label, value, id }: fieldDataState) => {
    setFieldData((prev) => [
      ...prev,
      {
        id,
        type,
        label,
        value,
      },
    ]);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fieldData);
  };

  return (
    <FieldsDataContext.Provider
      value={{ fieldData, addNewDataField, submitHandler }}
    >
      {children}
    </FieldsDataContext.Provider>
  );
}
export default FieldsContextProvider;
export const useFieldsDataContext = () => useContext(FieldsDataContext);
