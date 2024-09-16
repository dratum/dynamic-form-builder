import { ReactNode, useContext, createContext, useState } from "react";
import { fieldDataState } from "../components/fields/types/interface";
import { FieldsDataContextType } from "./types/types";

const FieldsDataContext = createContext<FieldsDataContextType | undefined>(
  undefined
);
function FieldsContextProvider({ children }: { children: ReactNode }) {
  const [fieldData, setFieldData] = useState<fieldDataState[]>([]);

  const addNewDataField = (newField: fieldDataState) => {
    setFieldData((prev) => [...prev, newField]);
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
