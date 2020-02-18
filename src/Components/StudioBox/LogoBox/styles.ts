import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            position: "absolute",
            bottom: theme.spacing(2),
            left: theme.spacing(2),
        },
        imageWrapper: {
            boxShadow: theme.shadows[3],
            borderRadius: theme.spacing(13),
            marginRight: theme.spacing(2),
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: theme.spacing(13),
            height: theme.spacing(13),
            maxWidth: theme.spacing(35),
            backgroundColor: theme.palette.common.white,
            "& > img": {
                verticalAlign: "middle",
                maxWidth: "75%",
                maxHeight: "75%",
                height: "auto",
            },
        },
        studioName: {},
    }),
);

export default useStyles;
