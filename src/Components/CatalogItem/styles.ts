import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const hoveredItem = (theme: Theme) => ({
    transform: "scale(1.01)",
    boxShadow: theme.shadows[3],
    borderRight: `5px solid ${theme.palette.success.main}`,
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
            display: "flex",
            transition: "0.2s",
            cursor: "pointer",
            padding: theme.spacing(1),
            boxShadow: theme.shadows[1],
            "&:hover": hoveredItem(theme),
        },
        hoveredItem: {
            ...hoveredItem(theme),
        },
        address: {
            display: "flex",
        },
        roomIcon: {
            marginRight: theme.spacing(0.5),
        },
        cardMedia: {
            width: "150px",
            marginRight: theme.spacing(2),
            backgroundSize: "contain",
        },
        cardContent: {
            padding: theme.spacing(2, 2, 2, 0),
            "&:last-child": {
                paddingBottom: theme.spacing(2),
            },
        },
    }),
);

export default useStyles;
