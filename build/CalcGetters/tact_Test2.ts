import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type S = {
    $$type: 'S';
    a: bigint;
    b: bigint;
}

export function storeS(src: S) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.a, 257);
        b_0.storeInt(src.b, 257);
    };
}

export function loadS(slice: Slice) {
    let sc_0 = slice;
    let _a = sc_0.loadIntBig(257);
    let _b = sc_0.loadIntBig(257);
    return { $$type: 'S' as const, a: _a, b: _b };
}

function loadTupleS(source: TupleReader) {
    let _a = source.readBigNumber();
    let _b = source.readBigNumber();
    return { $$type: 'S' as const, a: _a, b: _b };
}

function loadGetterTupleS(source: TupleReader) {
    let _a = source.readBigNumber();
    let _b = source.readBigNumber();
    return { $$type: 'S' as const, a: _a, b: _b };
}

function storeTupleS(source: S) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.a);
    builder.writeNumber(source.b);
    return builder.build();
}

function dictValueParserS(): DictionaryValue<S> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeS(src)).endCell());
        },
        parse: (src) => {
            return loadS(src.loadRef().beginParse());
        }
    }
}

export type SetIdAndData = {
    $$type: 'SetIdAndData';
    id: bigint;
    data: Cell;
}

export function storeSetIdAndData(src: SetIdAndData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1746430141, 32);
        b_0.storeInt(src.id, 257);
        b_0.storeRef(src.data);
    };
}

export function loadSetIdAndData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1746430141) { throw Error('Invalid prefix'); }
    let _id = sc_0.loadIntBig(257);
    let _data = sc_0.loadRef();
    return { $$type: 'SetIdAndData' as const, id: _id, data: _data };
}

function loadTupleSetIdAndData(source: TupleReader) {
    let _id = source.readBigNumber();
    let _data = source.readCell();
    return { $$type: 'SetIdAndData' as const, id: _id, data: _data };
}

function loadGetterTupleSetIdAndData(source: TupleReader) {
    let _id = source.readBigNumber();
    let _data = source.readCell();
    return { $$type: 'SetIdAndData' as const, id: _id, data: _data };
}

function storeTupleSetIdAndData(source: SetIdAndData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSetIdAndData(): DictionaryValue<SetIdAndData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSetIdAndData(src)).endCell());
        },
        parse: (src) => {
            return loadSetIdAndData(src.loadRef().beginParse());
        }
    }
}

export type Test$Data = {
    $$type: 'Test$Data';
    id: bigint;
    anotherData: Cell;
}

export function storeTest$Data(src: Test$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.id, 32);
        b_0.storeRef(src.anotherData);
    };
}

export function loadTest$Data(slice: Slice) {
    let sc_0 = slice;
    let _id = sc_0.loadUintBig(32);
    let _anotherData = sc_0.loadRef();
    return { $$type: 'Test$Data' as const, id: _id, anotherData: _anotherData };
}

function loadTupleTest$Data(source: TupleReader) {
    let _id = source.readBigNumber();
    let _anotherData = source.readCell();
    return { $$type: 'Test$Data' as const, id: _id, anotherData: _anotherData };
}

function loadGetterTupleTest$Data(source: TupleReader) {
    let _id = source.readBigNumber();
    let _anotherData = source.readCell();
    return { $$type: 'Test$Data' as const, id: _id, anotherData: _anotherData };
}

function storeTupleTest$Data(source: Test$Data) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.id);
    builder.writeCell(source.anotherData);
    return builder.build();
}

function dictValueParserTest$Data(): DictionaryValue<Test$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTest$Data(src)).endCell());
        },
        parse: (src) => {
            return loadTest$Data(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type Test2$Data = {
    $$type: 'Test2$Data';
}

export function storeTest2$Data(src: Test2$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

export function loadTest2$Data(slice: Slice) {
    let sc_0 = slice;
    return { $$type: 'Test2$Data' as const };
}

function loadTupleTest2$Data(source: TupleReader) {
    return { $$type: 'Test2$Data' as const };
}

function loadGetterTupleTest2$Data(source: TupleReader) {
    return { $$type: 'Test2$Data' as const };
}

function storeTupleTest2$Data(source: Test2$Data) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserTest2$Data(): DictionaryValue<Test2$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTest2$Data(src)).endCell());
        },
        parse: (src) => {
            return loadTest2$Data(src.loadRef().beginParse());
        }
    }
}

 type Test2_init_args = {
    $$type: 'Test2_init_args';
}

function initTest2_init_args(src: Test2_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function Test2_init() {
    const __code = Cell.fromBase64('te6ccgECDgEAAkYAART/APSkE/S88sgLAQIBYgIDApLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4IIwyPhDAcx/AcoAye1UCgQCASAICQGKAZIwf+BwIddJwh+VMCDXCx/eghCUapi2uo6n0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4DBwBQE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwGAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCFb4IW3kW2eLO2eGMCgsAEb4V92omhpAADAE07UTQ1AH4Y9IAMJFt4Pgo1wsKgwm68uCJ2zwMAYz4Q1nbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIDQACbQB+AtD0BDBtAYIArEgBgBD0D2+h8uCHAYIArEgiAoAQ9BfIAcj0AMkBzHABygBAA4IQaBhovVADyx+BAQHPAMzJ');
    const __system = Cell.fromBase64('te6cckECLwEABCEAAQHAAQIBIAIMAQW9U7wDART/APSkE/S88sgLBAIBYgUHApLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4IIwyPhDAcx/AcoAye1UCQYBigGSMH/gcCHXScIflTAg1wsf3oIQlGqYtrqOp9MfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+AwcBECASAICwIVvghbeRbZ4s7Z4YwJLQE07UTQ1AH4Y9IAMJFt4Pgo1wsKgwm68uCJ2zwKAAJtABG+FfdqJoaQAAwBBb1iRA0BFP8A9KQT9LzyyAsOAgFiDxQCmtAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFrbPPLggsj4QwHMfwHKAFkCyx/Mye1ULBAB1AGSMH/gcCHXScIflTAg1wsf3iCCEGgYaL26jhow0x8BghBoGGi9uvLggYEBAdcA1FlsEmwif+CCEJRqmLa6jqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHARATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPBIByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsAEwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBIBUdAgEgFhsCAWYXGQIRr9jtnm2eNhFALBgAAlwCEa3ubZ5tnjYQwCwaAAJzAhG74f2zzbPGwhgsHAACcQIBIB4gAhG7Gm2zzbPGwhgsHwACcgIBICElAgEgIiMAEbCvu1E0NIAAYAIXs7CbyLbPFrbPGwhgLCQAAjACASAmKQIBWCcoARKrYW8i2zxabCIsARKqoW8i2zxabCIsAgEgKisBE69jt5Ftni02EUAsAhevQDeRbZ4tbZ42EMAsLQBo7UTQ1AH4Y9IAAZbTH9RZbBLg+CjXCwqDCbry4InTHwGCEGgYaL268uCBgQEB1wDUWQLRAQGM+ENZ2zxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiC4AfgLQ9AQwbQGCAKxIAYAQ9A9vofLghwGCAKxIIgKAEPQXyAHI9ADJAcxwAcoAQAOCEGgYaL1QA8sfgQEBzwDMyWHkmP8=');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initTest2_init_args({ $$type: 'Test2_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Test2_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
}

const Test2_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"S","header":null,"fields":[{"name":"a","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"b","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SetIdAndData","header":1746430141,"fields":[{"name":"id","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Test$Data","header":null,"fields":[{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"anotherData","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Test2$Data","header":null,"fields":[]},
]

const Test2_getters: ABIGetter[] = [
    {"name":"calcTest","arguments":[{"name":"m","type":{"kind":"simple","type":"SetIdAndData","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
]

export const Test2_getterMapping: { [key: string]: string } = {
    'calcTest': 'getCalcTest',
}

const Test2_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Test2 implements Contract {
    
    static async init() {
        return await Test2_init();
    }
    
    static async fromInit() {
        const init = await Test2_init();
        const address = contractAddress(0, init);
        return new Test2(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Test2(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Test2_types,
        getters: Test2_getters,
        receivers: Test2_receivers,
        errors: Test2_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getCalcTest(provider: ContractProvider, m: SetIdAndData) {
        let builder = new TupleBuilder();
        builder.writeTuple(storeTupleSetIdAndData(m));
        let source = (await provider.get('calcTest', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}