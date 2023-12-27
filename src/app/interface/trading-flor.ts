
export interface TradingFlor {
    BizSts:   {cd: ""};
    Msg:      {dtTm: ""};
    TradgFlr: TradgFlr;
}

export interface BizSts {
    cd: string;
}

export interface Msg {
    dtTm: string;
}

export interface TradgFlr {
    TradgFlrSts: TradgFlrSts;
    grssAmt:     number;
    qty:         number;
}

export interface TradgFlrSts {
    desc: string;
}
