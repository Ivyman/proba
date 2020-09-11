import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        list: {
            flexGrow: 1,
            maxWidth: "100vw",
            width: "250px",
            padding: 0,
        },
        listItem: {
            padding: theme.spacing(1.5, 2.5),
        },
    }),
);

export default useStyles;
