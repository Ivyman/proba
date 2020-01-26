import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        field: {
            backgroundColor: theme.palette.common.white,
        },
    }),
);

export default useStyles;
