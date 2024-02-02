import { createAction, createReducer, on, props } from "@ngrx/store";
import { B3, B3PriceFlutuation, BizSts } from "../interface/b3"
import { TradingFlor } from "../interface/trading-flor";
import { TradeVolume } from "../interface/trade-volume";
import { Fii } from "../interface/fii";

export interface IAppState {
    highIbov: B3PriceFlutuation;
    flutuationIfix: B3PriceFlutuation;
    ifix: B3;
    ibov: B3;
    b3TradingFloor: TradingFlor;
    b3TradeVolume:TradeVolume;
    indices: B3;
    dividendosHoje: Fii[];
}

export const appInitialState: IAppState = {
    highIbov: {
        BizSts: { cd: "", desc: "" },
        Msg: { dtTm: "" },
        SctyHghstIncrLst: [],
        SctyHghstDrpLst: []
    },
    flutuationIfix: {
        BizSts: { cd: "", desc: "" },
        Msg: { dtTm: "" },
        SctyHghstIncrLst: [],
        SctyHghstDrpLst: []
    },
    ifix: {
        BizSts: { cd: "", desc: "" },
        Msg: { dtTm: "" },
        Trad: []
    },
    ibov: {
        BizSts: { cd: "", desc: "" },
        Msg: { dtTm: "" },
        Trad: []
    },
    indices: {
        BizSts: { cd: "", desc: "" },
        Msg: { dtTm: "" },
        Trad: []
    },
    b3TradingFloor: {
        BizSts: { cd: ""},
        Msg: {
            dtTm: ""
        },
        TradgFlr: {
            TradgFlrSts: {
                desc: ""
            },
            grssAmt: 0,
            qty: 0
        },
    },
    b3TradeVolume: {
        BizSts: { cd: ""},
        Msg: {
            dtTm: ""
        },
        Volume: []
    },
    dividendosHoje: []
}

export const setDividendosHoje = createAction('[App] Define DividendosHoje', props<{ payload: Fii[] }>());
export const setB3TradeVolume = createAction('[App] Define b3TradeVolume', props<{ payload: TradeVolume }>());
export const setB3TradingFloor = createAction('[App] Define b3TradingFloor', props<{ payload: TradingFlor }>());
export const setIndices = createAction('[App] Define Indices', props<{ payload: B3 }>());
export const setIbov = createAction('[App] Define Ibov', props<{ payload: B3 }>());
export const setIfix = createAction('[App] Define Ifix', props<{ payload: B3 }>());
export const setHighIbovAction = createAction('[App] Define HighIbov', props<{ payload: B3PriceFlutuation }>());
export const setFlutuationIfixAction = createAction('[App] Define flutuationIfix', props<{ payload: B3PriceFlutuation }>());

export const appReducer = createReducer(
    appInitialState,
    on(setHighIbovAction, (state, { payload }) => ({
        ...state,
        highIbov: payload
    })),
    on(setFlutuationIfixAction, (state, { payload }) => ({
        ...state,
        flutuationIfix: payload
    })),
    on(setIfix, (state, { payload }) => ({
        ...state,
        ifix: payload
    })),
    on(setIbov, (state, { payload }) => ({
        ...state,
        ibov: payload
    })),
    on(setIndices, (state, { payload }) => ({
        ...state,
        indices: payload
    })),
    on(setB3TradingFloor, (state, { payload }) => ({
        ...state,
        b3TradingFloor: payload
    })),
    on(setB3TradeVolume, (state, { payload }) => ({
        ...state,
        b3TradeVolume: payload
    })),
    on(setDividendosHoje, (state, { payload }) => ({
        ...state,
        dividendosHoje: payload
    }))
);
