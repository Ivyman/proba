import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const hoveredItem = (theme: Theme) => ({
    transform: "scale(1.01)",
    boxShadow: theme.shadows[3],
    borderColor: theme.palette.success.main,
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
            display: "flex",
            transition: "0.2s",
            cursor: "pointer",
            position: "relative",
            padding: theme.spacing(1, 0.5, 1, 1),
            boxShadow: theme.shadows[1],
            borderRight: `${theme.spacing(0.5)}px solid ${
                theme.palette.common.white
            }`,
            "&:hover": hoveredItem(theme),
        },
        hoveredItem: {
            ...hoveredItem(theme),
        },
        cardMedia: {
            width: "120px",
            marginRight: theme.spacing(2),
            backgroundSize: "contain",
        },
        cardContent: {
            padding: theme.spacing(1, 1, 1, 0),
            "&:last-child": {
                paddingBottom: theme.spacing(1),
            },
        },
        chip: {
            position: "absolute",
            right: theme.spacing(2),
            top: theme.spacing(2),
        },
    }),
);

export default useStyles;
