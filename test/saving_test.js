const mocha = require('mocha');
const assert = require('assert')
const user = require('../models/user')

//our tests
describe('saving the records',function(){

    it("saving users",function(done){
        //Test code to add two numbers
        var users = new user ({
            firstName:'neha'
        })
        users.save().then(function(){
            assert(users.isNew === false);
            done();
        })
    })
})



// const assert = require('assert');
// const MarioChar = require('../models/user');

// // Describe our tests
// describe('Saving records', function(){

//   // Create tests
//   it('Saves a record to the database', function(done){

//     const char = new MarioChar({
//       name: 'Mario'
//     });

//     char.save().then(function(){
//       assert(!char.isNew);
//       done();
//     });

//   });

// });