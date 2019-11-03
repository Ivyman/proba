import React from "react";

import { EApiStatuses } from "@src/types/api";

export const Screen: React.FC<{
  populatedStatus: EApiStatuses;
}> = ({ populatedStatus, children }) => (
  <>
    {populatedStatus === EApiStatuses.SUCCESS && children}
    {populatedStatus === EApiStatuses.ERROR && "Error"}
    {(populatedStatus === EApiStatuses.IDLE || populatedStatus === EApiStatuses.FETCHING) && "Pending..."}
  </>
);
