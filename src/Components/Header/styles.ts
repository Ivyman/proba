import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            justifyContent: "space-between",
        },
        logo: { textDecoration: "none" },
    }),
);

export default useStyles;