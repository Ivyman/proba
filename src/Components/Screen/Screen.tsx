import React, { memo } from "react";
import { EApiStatuses } from "@src/types/api";

import FullpageThrobber from "@src/components/common/FullpageThrobber";

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
                return <FullpageThrobber />;
            case EApiStatuses.SUCCESS:
            default:
                return children;
        }
    };

    return <>{renderScreen()}</>;
});
