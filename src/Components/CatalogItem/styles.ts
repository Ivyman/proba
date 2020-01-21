import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
            transition: "0.2s",
            "&:hover": {
                transform: "scale(1.01)",
            },
        },
        address: {
            display: "flex",
        },
        roomIcon: {
            marginRight: theme.spacing(0.5),
        },
        cardMedia: {
            width: "150px",
            backgroundSize: "80% auto",
        },
        cardContent: {
            padding: theme.spacing(2),
            "&:last-child": {
                paddingBottom: theme.spacing(2),
            },
        },
        linkWrapper: {
            display: "flex",
            textDecoration: "none",
        },
    }),
);

export default useStyles;
