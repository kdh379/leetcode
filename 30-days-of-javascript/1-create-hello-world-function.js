/**
 * @return {Function}
 */
var createHelloWorld = function( args ) {
    
    return () => "Hello World";
};

const f = createHelloWorld();
console.log(f({}, null, 42));