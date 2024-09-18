import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";
import { SendButton } from "../button/sendButton";

export const Form = () => {
  const { submitHandler, fields, setFields } =
    useFieldsDataContext() as FieldsDataContextType;

  return (
    <form className='form' onSubmit={submitHandler}>
      {fields && fields.map((field: React.ReactNode) => field)}
      <SendButton label='Отправить' setFields={setFields} />
    </form>
  );
};
