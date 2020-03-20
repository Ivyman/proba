import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: theme.spacing(13),
        },
        select: {
            padding: theme.spacing(1.3125),
        },
        label: {
            transform: `translate(${theme.spacing(1.75)}px, ${theme.spacing(
                1.5,
            )}px) scale(1)`,
        },
        isDisabled: {
            "&::after": {
                content: "''",
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                cursor: "not-allowed",
            },
        },
    }),
);

export default useStyles;
