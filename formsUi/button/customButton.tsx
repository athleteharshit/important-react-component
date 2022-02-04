import LoadingButton from "@mui/lab/LoadingButton";
import { useFormikContext } from "formik";

const CustomButtonWrapper = ({ children, ...otherProps }: any) => {
  const { submitForm } = useFormikContext();
console.log(otherProps.isSubmitting)
  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    ...otherProps,
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return otherProps.isSubmitting ? (
    <LoadingButton loading loadingPosition="start" {...configButton}>
      {children}
    </LoadingButton>
  ) : (
    <LoadingButton  Position="start" {...configButton}>
      {children}
    </LoadingButton>
  );
  // <Button {...configButton}></Button>;
};

export default CustomButtonWrapper;
