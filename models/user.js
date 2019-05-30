const mongoose = require('mongoose');
const schema = mongoose.Schema;

//creating a schema

const userSchema = new schema( {
    firstName: String,
    lastName: String,
    age: Number
})

const user = mongoose.model("MyUsers",userSchema)

module.exports = user

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // Create a Schema and a Model

// const MarioCharSchema = new Schema({
//     name: String,
//     weight: Number
// });

// const MarioChar = mongoose.model('mariochar', MarioCharSchema);

// module.exports = MarioChar;