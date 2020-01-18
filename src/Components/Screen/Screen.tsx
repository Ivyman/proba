import React from "react";

import { EApiStatuses } from "@src/types/api";

export const Screen: React.FC<{
    apiStatus?: EApiStatuses;
}> = ({ apiStatus, children }) => {
    const renderScreen = () => {
        switch (apiStatus) {
            case EApiStatuses.ERROR:
                return "error";
            case EApiStatuses.RUNNING:
            case EApiStatuses.IDLE:
                return "loading";
            case EApiStatuses.SUCCESS:
            default:
                return children;
        }
    };

    return <>{renderScreen()}</>;
};
