import { useFieldsDataContext } from "../../context/fieldsContext";
import { FieldsDataContextType } from "../../context/types/types";

interface SendButtonProps {
  label: string;
  setFields: (fields: JSX.Element[]) => void;
}
export const SendButton: React.FC<SendButtonProps> = ({ label, setFields }) => {
  const { fieldData } = useFieldsDataContext() as FieldsDataContextType;
  return (
    <button disabled={fieldData.length === 0} onClick={() => setFields([])}>
      {label}
    </button>
  );
};
