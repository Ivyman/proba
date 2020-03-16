import React, { memo } from "react";
import { EApiStatuses } from "@src/types/api";

import FullpageThrobber from "@src/components/common/FullpageThrobber";

interface IProps {
    apiStatus?: EApiStatuses;
    resourceName?: string;
}

export const Loader: React.FC<IProps> = memo(
    ({ apiStatus, resourceName, children }) => {
        const render = () => {
            switch (apiStatus) {
                case EApiStatuses.ERROR:
                    return `Fetching ${resourceName || "data"} error`;
                case EApiStatuses.RUNNING:
                case EApiStatuses.IDLE:
                    return <FullpageThrobber />;
                case EApiStatuses.SUCCESS:
                default:
                    return children;
            }
        };

        return <>{render()}</>;
    },
);
