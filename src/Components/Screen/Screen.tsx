import React from "react";

import { EApiStatuses } from "@src/types/api";
import Error from "@src/components/Error";
import Loading from "@src/components/Loading";

export const Screen: React.FC<{
  apiStatus?: EApiStatuses;
}> = ({ apiStatus, children }) => {
  const renderScreen = () => {
    switch (apiStatus) {
      case EApiStatuses.ERROR:
        return <Error />;
      case EApiStatuses.RUNNING:
      case EApiStatuses.IDLE:
        return <Loading />;
      case EApiStatuses.SUCCESS:
      default:
        return children;
    }
  };

  return <>{renderScreen()}</>;
};
