let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const AutoIncrement = require('mongoose-sequence')(mongoose);
let PurchasedSchema = mongoose.Schema({
   userId:String, //this is userId
   items: [{
       pid:String,
       name:String,
       price:Number,
       quantity:Number,
       datePurchased:String,
       orderStatus:String,
   }],
   total:Number
},{_id:false})
PurchasedSchema.plugin(AutoIncrement , {id: 'purchased_id_counter', inc_field: '_id'});
let PurchaseModel = mongoose.model("purchased",PurchasedSchema,"Purchased");

module.exports = PurchaseModel;