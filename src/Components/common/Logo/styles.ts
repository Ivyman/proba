import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        brandName: {
            color: theme.palette.common.black,
            textTransform: "uppercase",
            padding: theme.spacing(0, 1),
        },
    }),
);

export default useStyles;
