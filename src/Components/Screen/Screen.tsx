import React from "react";

import { EApiStatuses } from "@src/types/api";
import Error from "@src/components/Error";

export const Screen: React.FC<{
  apiStatus?: EApiStatuses;
}> = ({ apiStatus, children }) => {
  const renderScreen = () => {
    switch (apiStatus) {
      case EApiStatuses.ERROR:
        return <Error />;
      case EApiStatuses.RUNNING:
      case EApiStatuses.IDLE:
        return "Pending...";
      case EApiStatuses.SUCCESS:
      default:
        return children;
    }
  };

  return <>{renderScreen()}</>;
};
