interface AddFieldButtonProps {
  onAddField: () => void;
  label: string;
}

export const AddFieldButton: React.FC<AddFieldButtonProps> = ({
  onAddField,
  label,
}) => {
  return <button onClick={onAddField}>{label}</button>;
};
