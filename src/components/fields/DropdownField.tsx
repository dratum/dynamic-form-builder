export const DropdownField = (): JSX.Element => {
  return (
    <div className='dropdown-field'>
      <input type='text' placeholder='label'></input>
      <select name='dropdown'>
        <option value='value1'>Значение 1</option>
        <option value='value2'>Значение 2</option>
      </select>
      <button>Удалить</button>
    </div>
  );
};
