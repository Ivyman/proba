import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navigationControl: {
            position: "absolute",
            bottom: theme.spacing(3),
            right: theme.spacing(1),
        },
    }),
);

export default useStyles;
