import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { passwordReg } from "./user.validations";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: "{VALUE} is not a valid email",
    },
  },
  firstName: {
    type: String,
    required: [true, "FirstName is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "LastName is required"],
    trim: true,
  },
  userName: {
    type: String,
    required: [true, "FirstName is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    minlength: [8, "Password need to be longer!"],
    validate: {
      validator(password) {
        return passwordReg.test(password);
      },
      message: "{VALUE} is not a valid password",
    },
  },
});

UserSchema.pre("save", function (next) {
  this.test;
  next();
});

UserSchema.methods = {
  test: function _hashPassword(password) {
    return bcrypt.hashSync(password, 10);
    console.log('sss')
  },
};

export default mongoose.model("User", UserSchema);
