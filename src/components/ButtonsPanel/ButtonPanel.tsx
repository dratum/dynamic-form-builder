import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";
import { AddFieldButton } from "../button/addField";
import { FormField } from "../fields/FormField";
import { v4 as uuidv4 } from "uuid";

export const ButtonPanel = () => {
  const { addField } = useFieldsDataContext() as FieldsDataContextType;

  return (
    <div>
      <AddFieldButton
        onAddField={() => addField(<FormField key={uuidv4()} type='text' />)}
        label='Добавить текстовое поле'
      />
      <AddFieldButton
        onAddField={() =>
          addField(<FormField key={uuidv4()} type='checkbox' />)
        }
        label='Добавить checkbox'
      />
      <AddFieldButton
        onAddField={() =>
          addField(<FormField key={uuidv4()} type='dropdown' />)
        }
        label='Добавить dropdown'
      />
    </div>
  );
};
