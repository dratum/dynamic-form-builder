import { FC } from "react";

interface AddFieldButtonProps {
  onAddField: () => void;
  label: string;
}

export const AddFieldButton: FC<AddFieldButtonProps> = ({
  onAddField,
  label,
}) => {
  return <button onClick={onAddField}>{label}</button>;
};
