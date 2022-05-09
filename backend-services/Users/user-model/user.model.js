let mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose.Promise = global.Promise;
const AutoIncrement = require('mongoose-sequence')(mongoose);
let UserSchema = mongoose.Schema({
    _id: Number,
    fname:String,
    lname:String,
    email:String,
    pass:String,
    dob:Date,
    phone:Number,
    address:String,
    funds:Number,
    locked:Boolean
})
UserSchema.plugin(AutoIncrement , {id: 'user_id_counter', inc_field: '_id'});
// UserSchema.pre("save", function (next) {
//   const user = this
//   if (this.isModified("pass") || this.isNew) {
//     bcrypt.genSalt(10, function (saltError, salt) {
//       if (saltError) {
//         return next(saltError)
//       } else {
//         bcrypt.hash(user.pass, salt, function(hashError, hash) {
//           if (hashError) {
//             return next(hashError)
//           }
//           user.pass = hash
//           next()
//         })
//       }
//     })
//   } else {
//     return next() 
//   }
// })
let UserModel = mongoose.model("user",UserSchema,"User");
module.exports = UserModel;
