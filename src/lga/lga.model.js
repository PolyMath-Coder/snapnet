const mongoose = require('mongoose');

const { Schema } = mongoose;

const lgaSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    stateId: {
      type: Schema.Types.ObjectId,
      ref: 'State',
      trim: true,
    },
  },
  { timestamps: true }
);

const LGA = mongoose.model('LGA', lgaSchema);
module.exports = LGA;
