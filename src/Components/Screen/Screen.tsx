import React from "react";

import { EApiStatuses } from "@src/types/api";

export const Screen: React.FC<{
  apiStatus?: EApiStatuses;
}> = ({ apiStatus, children }) => (
  <>
    {(apiStatus === EApiStatuses.SUCCESS || !apiStatus) && children}
    {apiStatus === EApiStatuses.ERROR && "Error"}
    {(apiStatus === EApiStatuses.IDLE || apiStatus === EApiStatuses.RUNNING) &&
      "Pending..."}
  </>
);
