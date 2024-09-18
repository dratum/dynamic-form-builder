import { ReactNode, useContext, createContext, useState } from "react";
import { fieldDataState } from "../components/fields/types/interface";
import { FieldsDataContextType } from "./types/types";
import React from "react";

const FieldsDataContext = createContext<FieldsDataContextType | undefined>(
  undefined
);
function FieldsContextProvider({ children }: { children: ReactNode }) {
  const [fields, setFields] = useState<React.ReactNode[]>([]);
  const [fieldData, setFieldData] = useState<fieldDataState[]>([]);

  const addField = (FieldComponent: React.ReactNode) => {
    setFields((prevFields) => {
      return [...prevFields, FieldComponent];
    });
  };

  const addNewDataField = (newField: fieldDataState) => {
    setFieldData((prev) => [...prev, newField]);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fieldData);
    setFieldData([]);
  };

  return (
    <FieldsDataContext.Provider
      value={{
        fieldData,
        addNewDataField,
        submitHandler,
        addField,
        fields,
        setFields,
      }}
    >
      {children}
    </FieldsDataContext.Provider>
  );
}
export default FieldsContextProvider;
export const useFieldsDataContext = () => useContext(FieldsDataContext);
