import { useCallback } from "react";
import { useDispatch as useDispatchRedux } from "react-redux";

export const useDispatch = <K extends (...args: any[]) => {}, T>(action: K) => {
    const dispatch = useDispatchRedux();

    return useCallback(
        (payload?: T) => {
            dispatch(payload ? action(payload) : action());
        },
        [dispatch, action],
    );
};
