import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        radioGroup: {
            display: "flex",
            flexDirection: "row",
        },
        searchFiled: {
            width: theme.spacing(50),
            maxWidth: "100%",
        },
    }),
);

export default useStyles;
