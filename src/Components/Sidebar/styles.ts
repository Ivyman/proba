import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            maxWidth: "100vw",
            width: "250px",
        },
    }),
);

export default useStyles;
