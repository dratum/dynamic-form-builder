import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";

interface FormProps {
  fields: JSX.Element[];
  setFields: (fields: JSX.Element[]) => void;
}

export const Form = ({ fields, setFields }: FormProps) => {
  const { submitHandler } = useFieldsDataContext() as FieldsDataContextType;

  return (
    <form className='form' onSubmit={submitHandler}>
      {fields && fields.map((field: JSX.Element) => field)}
      <button onClick={() => setFields([])}>Отправить</button>
    </form>
  );
};
