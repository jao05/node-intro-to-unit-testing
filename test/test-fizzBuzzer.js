// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const adder = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe( 'fizzBuzzer', function()
{
	// test the normal case
	it( 'should return the appropriate string OR num after modular division', function() {

		const normalCases = [ 'fizz', 'buzz', 'fizz-buzz', 1 ];
	} );

	// test an edge case for instance,
	// a range of bad inputs where the 'num' entered is not actually a number
	it('should raise error if args not numbers', function() {    
    
    const badInputs = [ 'a','1', false ];
    
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer( input );
      }).to.throw(Error);
    });
  });
} );