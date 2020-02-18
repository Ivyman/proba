import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const iconButton = (theme: Theme) => ({
    zIndex: 1,
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    top: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            boxShadow: theme.shadows[1],
        },
        cardMedia: {
            height: theme.spacing(30),
            filter: "grayscale(0.6)",
        },
        cardContent: {
            position: "relative",
            "&, &:last-child": {
                padding: theme.spacing(4, 3),
            },
        },
        backBotton: {
            ...iconButton(theme),
            position: "absolute",
            left: theme.spacing(2),
            "& svg": {
                position: "relative",
                left: "4px",
                top: ".5px",
            },
        },
        shareBotton: {
            ...iconButton(theme),
            position: "absolute",
            right: theme.spacing(2),
        },
        socialIcon: {
            boxShadow: "none",
            marginLeft: theme.spacing(1),
            width: theme.spacing(4.5),
            height: theme.spacing(4.5),
        },
        contactsList: {
            listStyleType: "none",
            margin: 0,
            padding: 0,
        },
        contactsListItem: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0.5, 0),
            "& > svg": {
                marginRight: theme.spacing(2),
            },
        },
    }),
);

export default useStyles;
