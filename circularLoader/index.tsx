import { makeStyles, createStyles } from "@mui/styles";
import { Theme, Avatar, CircularProgress } from "@mui/material";

type CircularLoaderProps = {
  loading: boolean;
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
  })
);

function CircularLoader({ loading }: CircularLoaderProps) {
  const classes = useStyles();

  return (
    <>
      {loading && (
        <Avatar className={classes.avatar} variant="square">
          <CircularProgress color="primary" />
        </Avatar>
      )}
    </>
  );
}

export default CircularLoader;
