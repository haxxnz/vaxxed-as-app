require("cbor-rn-prereqs");
const cbor = require("cbor");

export type DecodeCBOR = {
  err?: Error | undefined;
  tag?: number;
  value?: unknown[];
};

export const encodeCBOR = (object: (string | Buffer)[]): Buffer =>
  cbor.encode(object);
export const decodeCBOR = (buffer: Buffer | Uint8Array): DecodeCBOR =>
  cbor.decode(buffer);
