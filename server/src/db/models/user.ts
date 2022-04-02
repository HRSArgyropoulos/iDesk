const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

// User Schema
const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  approved: { type: Boolean, required: true, default: false },
  verified: { type: Boolean, required: true, default: false },
  verifyToken: { type: String },
  resetPasswordToken: { type: String },
  role: { type: String, required: true, default: 'clinician' },
});

// Hashing password pre-save
// (p.s. do not use arrow function in cb as it wont correctly bind this)
UserSchema.pre('save', function (next: any) {
  const user = this;

  //Hash the password
  // generate salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // hash the password using salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // overwrite password with hashed password
      user.password = hash;
      next();
    });
  });

  // Generate email verification token
  user.verifyToken = crypto.randomBytes(4).toString('hex');
});

// Get 'unhashed' password and check it with this instance's password
UserSchema.methods.checkPassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

UserSchema.index({ role: 1, approved: 1 });

const User = mongoose.model('user', UserSchema);

export { User };
