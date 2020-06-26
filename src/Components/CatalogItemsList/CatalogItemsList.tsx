import React, { memo } from "react";
import useStyles from "./styles";

import { Box } from "@material-ui/core";

export const CatalogItemsList: React.FC = memo(({ children }) => {
    const classes = useStyles();

    return <Box className={classes.root}>{children}</Box>;
});
