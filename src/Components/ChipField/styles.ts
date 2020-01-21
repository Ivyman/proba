import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1, 0.5),
        },
        radio: {
            display: "none",
        },
    }),
);

export default useStyles;
