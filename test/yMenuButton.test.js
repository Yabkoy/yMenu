const { expect, test } = require('@jest/globals');
const yMenuButton = require('../src/yMenuButton');

test("return function execution", () =>{
    f1 = () => 1;
    f2 = () => 2;
    f3 = () => 3;

    var testMB = new yMenuButton(['f1', 'f2', 'f3'], [f1, f2, f3]);
    
    for(var i=1; i<=3; i++)
    {
        var returnValue = testMB.executeReturnFunction(); 
        expect(returnValue).toBe(i);
        testMB.scrollDown();
    }

})