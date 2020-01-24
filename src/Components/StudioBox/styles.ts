import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
        },
        cardMedia: {
            height: theme.spacing(20),
        },
        backBotton: {
            position: "absolute",
            top: theme.spacing(2),
            left: theme.spacing(2),
        },
        imageWrapper: {
            boxShadow: theme.shadows[3],
            borderRadius: theme.shape.borderRadius,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: theme.spacing(20),
            left: theme.spacing(2),
            height: theme.spacing(13),
            width: "auto",
            maxWidth: theme.spacing(35),
            padding: theme.spacing(0.5),
            transform: "translateY(-50%)",
            backgroundColor: theme.palette.common.white,
            "& > img": {
                verticalAlign: "middle",
                maxWidth: "100%",
                maxHeight: "100%",
                height: "auto",
            },
        },
        cardContent: {
            paddingTop: theme.spacing(9),
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
        },
        studioName: {
            marginBottom: theme.spacing(2),
        },
    }),
);

export default useStyles;
