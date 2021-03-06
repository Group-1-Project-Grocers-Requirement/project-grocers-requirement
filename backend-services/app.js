//Load all required modules
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

let url = 'mongodb://localhost:27017/final';

app.use(bodyParser.urlencoded({ extended: true })); // enable body part data
app.use(bodyParser.json()); // json data.
app.use(cors()); // used model from line 5

//Database connection without warning
const mongooseDbOption = {
  // to avoid warning
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
};
mongoose.connect(url, mongooseDbOption); //ready to connect

mongoose.connection;

//link to router module like a import concept.
var Users = require('./Users/router/user.router.js');
var Product = require('./Products/router/product.router.js');
var Employee = require('./Employees/router/emp.router.js');
var Admin = require('./Admin/router/admin.router.js');
var Request = require('./Requests/router/requests.router.js');
var Order = require('./Orders/router/orders.router.js');
var Sales = require("./Sales/router/sales.router.js");
var Admin = require('./Admin/router/admin.router.js');


// http://localhost:9090/product/storeProductDetails    rest client or post man
// http://localhost:9090/product/deleteProductById/101 Delete the product using ID 
// http://localhost:9090/product/updateProductById  update
//Middleware

app.use('/product', Product);
app.use('/admin', Admin);
app.use('/', Users);
app.use('/emp', Employee);
app.use('/request', Request);
app.use('/order', Order);
app.use('/sales', Sales);


app.listen(9090, () => console.log('server is runnig on port no.9090'));
