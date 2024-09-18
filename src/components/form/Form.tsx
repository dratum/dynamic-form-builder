import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";

export const Form = () => {
  const { submitHandler, fieldData, fields, setFields } =
    useFieldsDataContext() as FieldsDataContextType;

  return (
    <form className='form' onSubmit={submitHandler}>
      {fields && fields.map((field: React.ReactNode) => field)}
      <button disabled={fieldData.length === 0} onClick={() => setFields([])}>
        Отправить
      </button>
    </form>
  );
};
