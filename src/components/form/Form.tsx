interface FormProps {
  fields: JSX.Element[];
  formData: {};
}

export const Form = ({ fields, formData }: FormProps) => {
  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form className='form' onSubmit={submitHandler}>
      {fields && fields.map((field: JSX.Element) => field)}
      <button>Отправить</button>
    </form>
  );
};
