/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmonaut.leaderboard.leaderboard";

export interface MsgSendIbcTopRank {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  playerId: string;
  rank: number;
  score: number;
}

export interface MsgSendIbcTopRankResponse {
}

function createBaseMsgSendIbcTopRank(): MsgSendIbcTopRank {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0, playerId: "", rank: 0, score: 0 };
}

export const MsgSendIbcTopRank = {
  encode(message: MsgSendIbcTopRank, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.playerId !== "") {
      writer.uint32(42).string(message.playerId);
    }
    if (message.rank !== 0) {
      writer.uint32(48).uint64(message.rank);
    }
    if (message.score !== 0) {
      writer.uint32(56).uint64(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendIbcTopRank {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendIbcTopRank();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.playerId = reader.string();
          break;
        case 6:
          message.rank = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.score = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendIbcTopRank {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: MsgSendIbcTopRank): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.playerId !== undefined && (obj.playerId = message.playerId);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.score !== undefined && (obj.score = Math.round(message.score));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendIbcTopRank>, I>>(object: I): MsgSendIbcTopRank {
    const message = createBaseMsgSendIbcTopRank();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.playerId = object.playerId ?? "";
    message.rank = object.rank ?? 0;
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseMsgSendIbcTopRankResponse(): MsgSendIbcTopRankResponse {
  return {};
}

export const MsgSendIbcTopRankResponse = {
  encode(_: MsgSendIbcTopRankResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendIbcTopRankResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendIbcTopRankResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendIbcTopRankResponse {
    return {};
  },

  toJSON(_: MsgSendIbcTopRankResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendIbcTopRankResponse>, I>>(_: I): MsgSendIbcTopRankResponse {
    const message = createBaseMsgSendIbcTopRankResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendIbcTopRank(request: MsgSendIbcTopRank): Promise<MsgSendIbcTopRankResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SendIbcTopRank = this.SendIbcTopRank.bind(this);
  }
  SendIbcTopRank(request: MsgSendIbcTopRank): Promise<MsgSendIbcTopRankResponse> {
    const data = MsgSendIbcTopRank.encode(request).finish();
    const promise = this.rpc.request("cosmonaut.leaderboard.leaderboard.Msg", "SendIbcTopRank", data);
    return promise.then((data) => MsgSendIbcTopRankResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
