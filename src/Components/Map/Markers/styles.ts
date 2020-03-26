import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navigationControl: {
            position: "absolute",
            bottom: theme.spacing(3),
            right: theme.spacing(1),
        },
        indexed: {
            zIndex: 1,
        },
        marker: {
            cursor: "pointer",
            transition: "0.2s",
            backgroundColor: theme.palette.common.white,
            width: theme.spacing(4.5),
            height: theme.spacing(4.5),
            padding: theme.spacing(1),
            boxShadow: theme.shadows[1],
            borderRadius: "100%",
        },
        markerDefault: {
            boxShadow: theme.shadows[1],
        },
        markerActive: {
            transform: "scale(1.2)",
            boxShadow: theme.shadows[4],
        },
        markerNotActive: {
            filter: "grayscale(100%)",
            "& > svg": {
                opacity: "0.7",
            },
        },
        markerIcon: {
            width: "100%",
            height: "auto",
        },
        popup: {
            zIndex: 1,
            "& > .mapboxgl-popup-content": {
                padding: theme.spacing(1, 2),
                boxShadow: theme.shadows[2],
            },
        },
        popupTitle: {
            fontWeight: "bold",
        },
    }),
);

export default useStyles;
