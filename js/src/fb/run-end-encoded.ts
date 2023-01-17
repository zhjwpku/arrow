// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

/**
 * Contains two child arrays, run_ends and values.
 * The run_ends child array must be a 16/32/64-bit integer array
 * which encodes the indices at which the run with the value in
 * each corresponding index in the values child array ends.
 * Like list/struct types, the value array can be of any type.
 */
export class RunEndEncoded {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RunEndEncoded {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRunEndEncoded(bb:flatbuffers.ByteBuffer, obj?:RunEndEncoded):RunEndEncoded {
  return (obj || new RunEndEncoded()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRunEndEncoded(bb:flatbuffers.ByteBuffer, obj?:RunEndEncoded):RunEndEncoded {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RunEndEncoded()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startRunEndEncoded(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endRunEndEncoded(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRunEndEncoded(builder:flatbuffers.Builder):flatbuffers.Offset {
  RunEndEncoded.startRunEndEncoded(builder);
  return RunEndEncoded.endRunEndEncoded(builder);
}
}