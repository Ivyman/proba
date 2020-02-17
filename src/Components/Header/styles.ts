import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.common.white,
            boxShadow: "none",
            borderBottom: `1px solid ${theme.palette.grey["200"]}`,
        },
        toolbar: {
            justifyContent: "space-between",
            paddingRight: 0,
            paddingLeft: 0,
        },
        logo: { textDecoration: "none" },
    }),
);

export default useStyles;
