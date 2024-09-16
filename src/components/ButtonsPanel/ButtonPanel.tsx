import { AddFieldButton } from "../button/addField";
import { CheckboxField } from "../fields/CheckboxField";
import { DropdownField } from "../fields/DropdownField";
import { TextField } from "../fields/TextField";

export const ButtonPanel = ({
  addField,
}: {
  addField: (element: JSX.Element) => void;
}) => {
  return (
    <div>
      <AddFieldButton
        onAddField={() => addField(<TextField />)}
        label='Добавить текстовое поле'
      />
      <AddFieldButton
        onAddField={() => addField(<CheckboxField />)}
        label='Добавить checkbox'
      />
      <AddFieldButton
        onAddField={() => addField(<DropdownField />)}
        label='Добавить dropdown'
      />
    </div>
  );
};
