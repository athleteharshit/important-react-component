import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const CustomSelect = ({ name, options, ...otherProps }: any) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <TextField {...configSelect}>
     {options}
    </TextField>
  );
};

export default CustomSelect;
