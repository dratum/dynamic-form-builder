export const TextField = (): JSX.Element => {
  return (
    <div className='text-field'>
      <input type='text' placeholder='label'></input>
      <input type='text' placeholder='text'></input>
      <button>Удалить</button>
    </div>
  );
};
