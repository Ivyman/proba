import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        menuItem: {
            color: theme.palette.common.black,
        },
    }),
);

export default useStyles;
