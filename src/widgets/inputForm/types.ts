export interface InputFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.SyntheticEvent) => void; 

  placeholder?: string;
  buttonText?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
}
