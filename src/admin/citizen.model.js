const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const citizenSchema = new Schema(
  {
    id: ObjectId,
    fullName: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    phone: {
      type: Number,
      trim: true,
    },
    wardId: {
      type: Schema.Types.ObjectId,
      ref: 'Ward',
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Citizen = mongoose.model('Citizen', citizenSchema);

module.exports = Citizen;
