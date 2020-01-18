import React from "react";
import { useSelector } from "react-redux";
import { IStudio } from "@src/types/studio";
import { getOpenedStudio } from "@src/store/studios/selectors";

import StudioBox from "@src/components/StudioBox";

interface IProps {
    onGoBack: () => void;
}

export const Studio: React.FC<IProps> = ({ onGoBack }) => {
    const openedStudio: IStudio | undefined = useSelector(getOpenedStudio);

    return (
        <div>
            <button onClick={() => onGoBack()}>powrót</button>
            <StudioBox openedStudio={openedStudio} />
        </div>
    );
};
