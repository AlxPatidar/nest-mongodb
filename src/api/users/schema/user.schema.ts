import * as mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

export const userSchema = new mongoose.Schema(
  {
    name: String,
    // Unique email id for user
    email: {
      type: String,
      sparse: true,
      lowercase: true,
      trim: true,
      required: true,
      match: [
        // eslint-disable-next-line no-useless-escape
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    // bycrpt password
    password: { type: String, default: '' },
  },
  // this is for hide _v key form collection
  // it create two timestamp field createAt and updateAt
  { timestamps: true, versionKey: false }
);
