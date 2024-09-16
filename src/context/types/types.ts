import { fieldDataState } from "../../components/fields/types/interface";

export interface FieldsDataContextType {
  fieldData: fieldDataState[];
  addNewDataField: (field: fieldDataState) => void;
  submitHandler: (e: React.FormEvent) => void;
}
