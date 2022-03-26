export interface IBaseInputProps {
  error?: boolean;
  label: string;
  required?: boolean;
  type: React.HTMLInputTypeAttribute;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => void;
}
