import React, { memo } from "react";
import useStyles from "./styles";

import { Divider as DividerUI } from "@material-ui/core";

export const Divider: React.FC = memo(() => {
    const classes = useStyles();

    return <DividerUI className={classes.root} />;
});
