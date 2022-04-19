const { expect, test } = require('@jest/globals');
const yMenu = require('../src/yMenu');

var testMenuElements = ["Apple", "Orange", "Bannana", "Lemon", "Plump"];

test("Bad arguments for menu", () => {
    var testMenu = new yMenu("tak");
    expect(testMenu.validateGivedArgs()).toBeFalsy();
})

test("Good arguments for menu", () => {
    var testMenu = new yMenu(testMenuElements);
    expect(testMenu.validateGivedArgs()).toBeTruthy();
})

test("scroll Up Test", () => {
    var testMenu = new yMenu(testMenuElements);
    testMenu.scrollUp();

    var gettedElement = testMenu.getCurrentElement(1);
    expect(gettedElement).toEqual(["Plump"]);
})

test("scroll Down Test", () => {
    var testMenu = new yMenu(testMenuElements);
    testMenu.scrollDown();

    var gettedElement = testMenu.getCurrentElement(1);
    expect(gettedElement).toEqual(["Orange"]);
})

test("getting number of elements", () =>{
    for(var i=0; i<testMenuElements; i++)
    {
        var testMenu = new yMenu(testMenuElements);
        var elementsInMenu = testMenu.getCurrentElement(i);

        var myArraySlice = testMenuElements.slice(0, i+1);

        expect(myArraySlice).toBe(elementsInMenu);
    }
})

test("getCurrentPosition test", () =>{
    var testMB = new yMenu(testMenuElements);

    for(var i=0; i<testMenuElements.length; i++)
    {
        expect(testMB.getCurrentPosition()).toEqual(new Number(i));
        testMB.scrollDown();
    }
})