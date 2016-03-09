/* Deps */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/* Connect to database */
mongoose.connect("mongodb://localhost/demo-fun");

/* Define an instance of a schema using the Schema constructor function */
// Schema is a blueprint
var userSchema = new Schema({
  username: String,
  name: String,
  age: Number,
  active: Boolean
});

/* SchemaTypes:
 * http://mongoosejs.com/docs/schematypes.html
 */

var Any = new Schema({any: Schema.Types.Mixed});

/* Define a model
 * http://mongoosejs.com/docs/models.html
 */

var User = mongoose.model("User", userSchema);//model is a mold of schema.
// new creates a new instance of the schema, like a mold of a schema.
var george = new User({
  username: "george.foreman",
  name: "George Foreman",
  age: 98,
  active: true
});

/* Save the model to the database */
george.save();

var numberGeorge = new User({username: 1234});//George was cast, which is taking one data type and changing it to another.

var sarah = new User({
  username: "sarah.goodman",
  name: "Sarah Goodman",
  age: 19,
  active: false
});

sarah.save(function(err, s) {
  console.log(err);
  console.log(s);
});

/* Queries */

User.find({username: "george.foreman"}, function(err, res) {
  console.log(res);
});

/* Promises
 * http://eddywashere.com/blog/switching-out-callbacks-with-promises-in-mongoose
 */

/* Queries
 * http://mongoosejs.com/docs/queries.html
 */

User.
  find({username: /george/}).
  limit(1).
  sort({age: 1}).
  select({name: 1}).//Returns only th ename.
  exec(function(err, res) {
    console.log(res);
  });

//mongoose allows promises.
/* Richer Schema
 */

var richerUserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    maxlength: 20,
    validate: {
      validator: function(v) {
        return v != "admin";//wont allow you to name user admin
      }
    },
    index: true //index can also say it is unique.
  },
  age: {
    type: Number, min: 13
  },
  status: {type: String, default: "active"}
});

var RicherUser = mongoose.model("RicherUser", richerUserSchema);

var user = new RicherUser({
  username: "much.too.long.of.a.User.Name",
  age: 10
});

console.log(user.validateSync());

/* pre and post hooks
 * http://mongoosejs.com/docs/middleware.html
 */

userSchema.pre("update", function() {
  this.update({}, {$set: {updatedAt: new Date()}});
});
