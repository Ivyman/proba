import React from "react";
import { EApiStatuses } from "@src/types/api";

import { CircularProgress } from "@material-ui/core";

interface IProps {
    apiStatus?: EApiStatuses;
}

export const Screen: React.FC<IProps> = ({ apiStatus, children }) => {
    const renderScreen = () => {
        switch (apiStatus) {
            case EApiStatuses.ERROR:
                return "error";
            case EApiStatuses.RUNNING:
            case EApiStatuses.IDLE:
                return <CircularProgress />;
            case EApiStatuses.SUCCESS:
            default:
                return children;
        }
    };

    return <>{renderScreen()}</>;
};
