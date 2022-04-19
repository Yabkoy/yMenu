const yMenu = require('../src/yMenu');

const yMenuButton = class yMenuButton extends yMenu
{
    constructor(elements, functions) {
        super(elements);
        this.functions = functions;
    }

    executeFunction(args){
        this.functions[this._currentPosition](args);
    }
    executeReturnFunction(args){
        var returnValue = this.functions[this._currentPosition](args);
        return returnValue;
    }
}

module.exports = yMenuButton;