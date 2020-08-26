import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const hoveredItem = (theme: Theme) => ({
    borderColor: theme.palette.success.main,
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(1),
            display: "flex",
            cursor: "pointer",
            position: "relative",
            minHeight: theme.spacing(12.5),
            padding: theme.spacing(1, 0.5, 1, 1),
            borderRight: `${theme.spacing(0.5)}px solid ${
                theme.palette.common.white
            }`,
            "&:hover": hoveredItem(theme),
            "&:last-of-type": {
                marginBottom: 0,
            },
        },
        hoveredItem: {
            ...hoveredItem(theme),
        },
        cardMedia: {
            flexBasis: "120px",
            flexShrink: 0,
            marginRight: theme.spacing(2),
            backgroundSize: "contain",
        },
        cardContent: {
            padding: theme.spacing(1, 1, 1, 0),
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            flexDirection: "column",
            "&:last-child": {
                paddingBottom: theme.spacing(1),
            },
        },
        chipList: {
            display: "flex",
            flexWrap: "wrap",
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
        },
        chip: {
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1),
            cursor: "pointer",
        },
    }),
);

export default useStyles;
