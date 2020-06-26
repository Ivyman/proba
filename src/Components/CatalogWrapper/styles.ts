import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            overflowX: "auto",
            padding: "0!important",
        },
    }),
);

export default useStyles;
