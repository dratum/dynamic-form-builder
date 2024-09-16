import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";

interface FormProps {
  fields: JSX.Element[];
}

export const Form = ({ fields }: FormProps) => {
  const { submitHandler } = useFieldsDataContext() as FieldsDataContextType;

  return (
    <form className='form' onSubmit={submitHandler}>
      {fields && fields.map((field: JSX.Element) => field)}
      <button>Отправить</button>
    </form>
  );
};
