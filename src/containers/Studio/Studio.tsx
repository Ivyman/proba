import React from "react";
import { useSelector } from "react-redux";

import StudioBox from "@src/components/StudioBox";
import { IStudio } from "@src/types/studio";
import { getOpenedStudio } from "@src/store/studios/selectors";

import { Wrapper } from "./elements";

export const Studio: React.FC<{ onGoBack: () => void }> = ({ onGoBack }) => {
  const openedStudio: IStudio | null = useSelector(getOpenedStudio);

  return (
    <Wrapper>
      <button onClick={() => onGoBack()}>powrót</button>
      <StudioBox openedStudio={openedStudio} />
    </Wrapper>
  );
};
