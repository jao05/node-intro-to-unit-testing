// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe( 'fizzBuzzer', function()
{
	// test the normal cases
	// For multiples of 15
	it( 'should return "fizz-buzz" for numbers that are divisible by 15', function() {

		const normalCases = [ 15, 30, 45 ];

		normalCases.forEach( function( input ) 
		{
			expect( fizzBuzzer( input ) ).to.equal( 'fizz-buzz' );
		} );
	} );

	// For multiples of 5
	it( 'should return "buzz" for numbers that are divisible by 5', function() {

		// **********What if '15' was included here and the array above?****************
		// ***** I assume it's okay that each "it" has its own 'normalCases'*************
		const normalCases = [ 5, 10, 20 ];

		normalCases.forEach( function( input ) 
		{
			expect( fizzBuzzer( input ) ).to.equal( 'buzz' );
		} );
	} );

	// For multiples of 3
	it( 'should return "fizz" for numbers that are divisible by 3', function() {

		const normalCases = [ 3, 6, 9 ];

		normalCases.forEach( function( input ) 
		{
			expect( fizzBuzzer( input ) ).to.equal( 'fizz' );
		} );
	} );

	// For nums that are not multiples of 3 or 5 (and therefore 15)
	it( 'should return the number if the number is not a multiple of 3 or 5', function() {

		const normalCases = [ 1, 2, 4, 7 ];

		normalCases.forEach( function( input ) 
		{
			expect( fizzBuzzer( input ) ).to.equal( input );
		} );
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