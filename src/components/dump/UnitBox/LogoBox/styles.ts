import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "absolute",
            display: "flex",
            padding: theme.spacing(1.5, 2),
            width: "100%",
            bottom: 0,
            left: 0,
        },
        image: {
            boxShadow: theme.shadows[3],
            borderRadius: theme.spacing(11),
            marginRight: theme.spacing(2),
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: theme.spacing(11),
            height: theme.spacing(11),
            maxWidth: theme.spacing(35),
            backgroundColor: theme.palette.common.white,
            "& > img": {
                verticalAlign: "middle",
                maxWidth: "75%",
                maxHeight: "75%",
                height: "auto",
            },
        },
        name: {
            fontWeight: theme.typography.fontWeightBold,
        },
        address: {
            lineHeight: 1,
        },
        roomIcon: {
            marginRight: theme.spacing(0.5),
        },
    }),
);

export default useStyles;
