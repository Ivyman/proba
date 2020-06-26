import React, { memo } from "react";
import useStyles from "./styles";

import { Grid } from "@material-ui/core";

export const CatalogWrapper: React.FC = memo(({ children }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} item sm={5}>
            {children}
        </Grid>
    );
});
