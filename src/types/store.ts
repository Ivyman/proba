import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { rootReducer } from "@src/store";

export type RootState = ReturnType<typeof rootReducer>;
export type MyExtraArg = undefined;
export type ThunkDispatch = ThunkDispatch<RootState, MyExtraArg, Action>;
