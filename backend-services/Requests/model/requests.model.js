let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const AutoIncrement = require('mongoose-sequence')(mongoose)
let RequestSchema = mongoose.Schema({
  empID: String,
  productID: String,
  productName: String,
  reqMsg: String,
},{ _id: false });
RequestSchema.plugin(AutoIncrement , {id: 'reques_id_counter', inc_field: '_id'});
let RequestModel = mongoose.model('request', RequestSchema, 'Requests');
module.exports = RequestModel;
