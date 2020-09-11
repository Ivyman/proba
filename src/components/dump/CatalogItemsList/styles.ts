import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1.5, 1.5, 1.5, 3),
            position: "absolute",
            width: "100%",
        },
    }),
);

export default useStyles;
