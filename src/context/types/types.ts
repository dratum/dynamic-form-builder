import { fieldDataState } from "../../components/fields/types/interface";

export interface FieldsDataContextType {
  fields: React.ReactNode[];
  setFields: (fields: JSX.Element[]) => void;
  addField: (component: JSX.Element) => void;
  fieldData: fieldDataState[];
  addNewDataField: (field: fieldDataState) => void;
  submitHandler: (e: React.FormEvent) => void;
}
