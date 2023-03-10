const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema(
  {
    id: ObjectId,
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    userRole: {
      type: String,
      enum: ['user', 'admin'],
    },
    password: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
userSchema.index({ name: 'text' });

const User = mongoose.model('User', userSchema);

module.exports = User;
