export interface TradeVolume {
    BizSts: BizSts;
    Msg:    Msg;
    Volume: Volume[];
}

export interface BizSts {
    cd: string;
}

export interface Msg {
    dtTm: string;
}

export interface Volume {
    grossAmt: number;
    pricVal:  number;
    scty:     Scty;
}

export interface Scty {
    symb: string;
    desc: string;
}
