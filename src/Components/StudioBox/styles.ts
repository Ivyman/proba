import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
        },
        cardMedia: {
            height: theme.spacing(20),
            filter: "grayscale(0.6)",
        },
        backBotton: {
            zIndex: 1,
            position: "absolute",
            top: theme.spacing(2),
            left: theme.spacing(2),
            backgroundColor: theme.palette.common.white,
        },
        imageWrapper: {
            boxShadow: theme.shadows[3],
            borderRadius: theme.shape.borderRadius,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: theme.spacing(13),
            width: "auto",
            maxWidth: theme.spacing(35),
            padding: theme.spacing(0.5),
            transform: `translateY(calc(-50% - ${theme.spacing(4)}px))`,
            backgroundColor: theme.palette.common.white,
            "& > img": {
                verticalAlign: "middle",
                maxWidth: "100%",
                maxHeight: "100%",
                height: "auto",
            },
        },
        cardContent: {
            position: "relative",
            "&, &:last-child": {
                padding: theme.spacing(4, 3),
            },
        },
        contactsList: {
            listStyleType: "none",
            margin: theme.spacing(0),
            paddingLeft: theme.spacing(2),
        },
        contactsListItem: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0.5, 0),
            "& > svg": {
                marginRight: theme.spacing(2),
            },
            "& > span:not(:last-of-type)": {
                paddingRight: theme.spacing(1.5),
            },
        },
        studioName: {
            marginBottom: theme.spacing(2),
        },
        description: {
            padding: theme.spacing(2, 0, 0, 2),
        },
    }),
);

export default useStyles;
