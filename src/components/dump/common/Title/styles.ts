import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        darkText: {
            color: theme.palette.text.primary,
        },
        grayText: {
            color: theme.palette.text.secondary,
        },
        whiteText: {
            color: theme.palette.common.white,
        },
        subtitle: {
            display: "flex",
        },
        roomIcon: {
            marginRight: theme.spacing(0.5),
        },
    }),
);

export default useStyles;
