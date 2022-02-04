import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useField } from "formik";

export default function AsynSearchTextField({
  name,
  data,
  ...otherProps
}: any) {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }
  const handleChange = (e: any) => {
    console.log(e.target.value, "handlechange");
  };
  const onChange = (e: any) => {
    console.log(e.target.value, "onChange");
  };

  return (
    <Autocomplete
      fullWidth
      disablePortal
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option: any) => {
        return option.country;
      }}
      renderInput={(params) => {
        return <TextField {...configTextfield} {...params} />;
      }}
    />
  );
}
