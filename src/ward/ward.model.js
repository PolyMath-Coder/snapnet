const mongoose = require('mongoose');

const { Schema } = mongoose;

const wardSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    LGAId: {
      type: Schema.Types.ObjectId,
      ref: 'LGA',
      trim: true,
    },
  },
  { timestamps: true }
);

const Ward = mongoose.model('Ward', wardSchema);
module.exports = Ward;
