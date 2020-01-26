import React, { memo } from "react";
import { EApiStatuses } from "@src/types/api";

import { CircularProgress, Box } from "@material-ui/core";

interface IProps {
    apiStatus?: EApiStatuses;
}

export const Screen: React.FC<IProps> = memo(({ apiStatus, children }) => {
    const renderScreen = () => {
        switch (apiStatus) {
            case EApiStatuses.ERROR:
                return "error";
            case EApiStatuses.RUNNING:
            case EApiStatuses.IDLE:
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
            case EApiStatuses.SUCCESS:
            default:
                return children;
        }
    };

    return <>{renderScreen()}</>;
});
