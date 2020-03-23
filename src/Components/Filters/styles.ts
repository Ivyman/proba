import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchFiledWrapper: {
            display: "flex",
            alignItems: "center ",
        },
    }),
);

export default useStyles;
