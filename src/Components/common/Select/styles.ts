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
    }),
);

export default useStyles;
