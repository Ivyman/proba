import React from "react";

import EApiStatuses from "@src/types/api";

type IRenderScreenComponent = React.FunctionComponent<{
  populatedStatus: EApiStatuses;
}>;

export const Screen: IRenderScreenComponent = ({
  populatedStatus,
  children,
}) => (
  <>
    {populatedStatus === EApiStatuses.SUCCESS && children}
    {populatedStatus === EApiStatuses.ERROR && "Error"}
    {(populatedStatus === EApiStatuses.IDLE ||
      populatedStatus === EApiStatuses.FETCHING) &&
      "Pending..."}
  </>
);
