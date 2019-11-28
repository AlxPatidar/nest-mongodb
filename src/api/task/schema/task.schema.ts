import * as mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

export const TaskSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String },
    completed: { type: Boolean, default: false },
  },
  // this is for hide _v key form collection
  // it create two timestamp field createAt and updateAt
  { timestamps: true, versionKey: false }
);
