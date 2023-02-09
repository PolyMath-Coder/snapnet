const mongoose = require('mongoose');

const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const stateSchema = new Schema(
  {
    id: ObjectId,
    name: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const State = mongoose.model('State', stateSchema);

module.exports = State;
