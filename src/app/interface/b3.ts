export interface B3 {
    BizSts: BizSts;
    Msg:    Msg;
    Trad:   Trad[];
}

export interface BizSts {
    cd: string;
}

export interface Msg {
    dtTm: string;
}

export interface Trad {
    scty:   Scty;
    ttlQty: number;
}

export interface Scty {
    SctyQtn: SctyQtn;
    mkt:     Mkt;
    symb:    string;
    desc:    string;
}

export interface SctyQtn {
    opngPric: number;
    minPric:  number;
    maxPric:  number;
    avrgPric: number;
    curPrc:   number;
    prcFlcn:  number;
}

export interface Mkt {
    nm: string;
}




export interface B3PriceFlutuation {
    BizSts:           BizSts;
    Msg:              Msg;
    SctyHghstIncrLst: SctyHghstLst[];
    SctyHghstDrpLst:  SctyHghstLst[];
}


export interface SctyHghstLst {
    SctyQtn: { curPrc: number,
    prcFlcn: number };
    symb:    string;
    desc:    string;
}





export interface DailyFlucutiation {
    BizSts:   BizSts;
    Msg:      Msg;
    TradgFlr: TradgFlr;
}


export interface TradgFlr {
    TradgFlrSts: TradgFlrSts;
    date:        string;
    scty:        Scty;
}

export interface TradgFlrSts {
}

export interface Scty {
    lstQtn: LstQtn[];
    symb:   string;
}

export interface LstQtn {
    closPric: number;
    dtTm:     string;
    prcFlcn:  number;
}
