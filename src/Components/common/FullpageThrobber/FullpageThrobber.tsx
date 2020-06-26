import React, { memo } from "react";

import { CircularProgress, Box } from "@material-ui/core";

export const FullpageThrobber: React.FC = memo(() => {
    return (
        <Box
            display="flex"
            alignItems="center"
            flexGrow={1}
            justifyContent="center"
        >
            <CircularProgress size={30} />
        </Box>
    );
});
