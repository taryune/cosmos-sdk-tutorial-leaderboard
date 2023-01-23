/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmonaut.leaderboard.leaderboard";

export interface LeaderboardPacketData {
  noData:
    | NoData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  ibcTopRankPacket: IbcTopRankPacketData | undefined;
}

export interface NoData {
}

/** IbcTopRankPacketData defines a struct for the packet payload */
export interface IbcTopRankPacketData {
  playerId: string;
  rank: number;
  score: number;
}

/** IbcTopRankPacketAck defines a struct for the packet acknowledgment */
export interface IbcTopRankPacketAck {
  playerId: string;
}

function createBaseLeaderboardPacketData(): LeaderboardPacketData {
  return { noData: undefined, ibcTopRankPacket: undefined };
}

export const LeaderboardPacketData = {
  encode(message: LeaderboardPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.ibcTopRankPacket !== undefined) {
      IbcTopRankPacketData.encode(message.ibcTopRankPacket, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaderboardPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaderboardPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.ibcTopRankPacket = IbcTopRankPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LeaderboardPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined,
      ibcTopRankPacket: isSet(object.ibcTopRankPacket)
        ? IbcTopRankPacketData.fromJSON(object.ibcTopRankPacket)
        : undefined,
    };
  },

  toJSON(message: LeaderboardPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.ibcTopRankPacket !== undefined && (obj.ibcTopRankPacket = message.ibcTopRankPacket
      ? IbcTopRankPacketData.toJSON(message.ibcTopRankPacket)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LeaderboardPacketData>, I>>(object: I): LeaderboardPacketData {
    const message = createBaseLeaderboardPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    message.ibcTopRankPacket = (object.ibcTopRankPacket !== undefined && object.ibcTopRankPacket !== null)
      ? IbcTopRankPacketData.fromPartial(object.ibcTopRankPacket)
      : undefined;
    return message;
  },
};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
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

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoData>, I>>(_: I): NoData {
    const message = createBaseNoData();
    return message;
  },
};

function createBaseIbcTopRankPacketData(): IbcTopRankPacketData {
  return { playerId: "", rank: 0, score: 0 };
}

export const IbcTopRankPacketData = {
  encode(message: IbcTopRankPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== "") {
      writer.uint32(10).string(message.playerId);
    }
    if (message.rank !== 0) {
      writer.uint32(16).uint64(message.rank);
    }
    if (message.score !== 0) {
      writer.uint32(24).uint64(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IbcTopRankPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIbcTopRankPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.string();
          break;
        case 2:
          message.rank = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.score = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcTopRankPacketData {
    return {
      playerId: isSet(object.playerId) ? String(object.playerId) : "",
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: IbcTopRankPacketData): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = message.playerId);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.score !== undefined && (obj.score = Math.round(message.score));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IbcTopRankPacketData>, I>>(object: I): IbcTopRankPacketData {
    const message = createBaseIbcTopRankPacketData();
    message.playerId = object.playerId ?? "";
    message.rank = object.rank ?? 0;
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseIbcTopRankPacketAck(): IbcTopRankPacketAck {
  return { playerId: "" };
}

export const IbcTopRankPacketAck = {
  encode(message: IbcTopRankPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerId !== "") {
      writer.uint32(10).string(message.playerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IbcTopRankPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIbcTopRankPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcTopRankPacketAck {
    return { playerId: isSet(object.playerId) ? String(object.playerId) : "" };
  },

  toJSON(message: IbcTopRankPacketAck): unknown {
    const obj: any = {};
    message.playerId !== undefined && (obj.playerId = message.playerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IbcTopRankPacketAck>, I>>(object: I): IbcTopRankPacketAck {
    const message = createBaseIbcTopRankPacketAck();
    message.playerId = object.playerId ?? "";
    return message;
  },
};

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
