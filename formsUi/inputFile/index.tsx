import ReactFileReader from "react-file-reader";
import { makeStyles, createStyles } from "@mui/styles";
import { Button, Theme, Avatar, FormHelperText } from "@mui/material";
import { useField } from "formik";

type InputFilePros = {
  handleFiles: any;
  name: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      "&.MuiAvatar-root": {
        width: theme.spacing(10),
        height: theme.spacing(10),
        backgroundColor: theme.palette.secondary.light,
        position: "relative",
      },
    },
    lineOne: {
      width: theme.spacing(1),
      height: theme.spacing(8),
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.spacing(1.5),
      position: "absolute",
    },
    lineTwo: {
      transform: "rotate(90deg)",
    },
  })
);

function InputFile({ handleFiles, name }: InputFilePros) {
  const classes = useStyles();
  const [field, mata] = useField(name);
  return (
    <div>
      <ReactFileReader
        handleFiles={handleFiles}
        base64={true}
        multipleFiles={false}
        fileTypes={[".pdf", ".xlsx", ".doc"]}
      >
        <Button className="btn" title="Please upload  image" {...field}>
          <Avatar className={classes.avatar} variant="square">
            <div className={classes.lineOne}></div>
            <div className={[classes.lineOne, classes.lineTwo].join(" ")}></div>
            <div></div>
          </Avatar>
        </Button>
      </ReactFileReader>
      {mata && mata.touched && mata.error && (
        <FormHelperText sx={{ color: "error.main" }}>
          {mata.error}
        </FormHelperText>
      )}

      {/* {profilePicture ? (
        <div key="profilePicture" className="uploaded-photo-cover">
          <img
            className="uploaded-photo"
            src={isError ? errorImage : process.env.URL + profilePicture}
            alt="test-img"
            onError={() => {
              setIsError(true);
            }}
            onClick={() => {
              if (!isError) {
                setimageStateDisplay(true);
                setimageUrl(process.env.URL + profilePicture);
              }
            }}
          />
          <img
            className="remove-photo"
            src={closeImg}
            title="Remove photo"
            onClick={() => deleteProfilePhoto()}
          />
        </div>
      ) : (
        <div className="upload-image-cover">
          <ReactFileReader
            handleFiles={addProfilePicture}
            base64={true}
            multipleFiles={false}
            fileTypes={[".jpg", ".jpeg", ".png", ".gif"]}
          >
            <Button className="btn" title="Please upload square image">
              <img className="add-image" src={addImg} />
            </Button>
          </ReactFileReader>
        </div>
      )} */}
    </div>
  );
}

export default InputFile;
