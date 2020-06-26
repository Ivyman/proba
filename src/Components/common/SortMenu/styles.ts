import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItem: {
            display: "flex",
            justifyContent: "space-between",
        },
        listIcon: {
            marginLeft: theme.spacing(1.5),
        },
    }),
);

export default useStyles;
