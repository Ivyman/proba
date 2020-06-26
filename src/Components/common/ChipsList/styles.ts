import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "row",
        },
        chip: {
            marginTop: theme.spacing(0.8),
            marginRight: theme.spacing(1),
        },
        checkbox: {
            display: "none",
        },
    }),
);

export default useStyles;
