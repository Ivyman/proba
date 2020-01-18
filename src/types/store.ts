import { Action } from "redux";
import { ThunkDispatch as TDispatch } from "redux-thunk";
import { rootReducer } from "@src/store";

export type RootState = ReturnType<typeof rootReducer>;
export type MyExtraArg = undefined;
export type ThunkDispatch = TDispatch<RootState, MyExtraArg, Action>;

export interface IAction<T> {
    type: T;
    payload?: any;
}
