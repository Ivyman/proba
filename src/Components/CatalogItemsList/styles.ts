import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "absolute",
            width: "100%",
            padding: theme.spacing(1),
        },
    }),
);

export default useStyles;
