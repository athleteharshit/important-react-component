import TextField from "@mui/material/TextField";
import { useField } from "formik";

const TextfieldWrapper = ({ name, ...otherProps }: any) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return <TextField {...configTextfield} />;
};

export default TextfieldWrapper;
