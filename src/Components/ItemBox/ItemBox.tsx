import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { Wrapper } from "./elements";

export const ItemBox: React.FC<{
  id?: string;
}> = () => {
  const { studioId } = useParams();
  const { goBack } = useHistory();

  return (
    <Wrapper>
      <button onClick={() => goBack()}>powrót</button>
      Item box {studioId}!
    </Wrapper>
  );
};
