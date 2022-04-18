import yMenu from 'yMenu';

const yMenuButton = class yMenuButton extends yMenu
{
    constructor(elements, functions) {
        super(elements);
        this.functions = functions;
        
    }

    executeFunction(args){
        this.functions[this._currentPosition](args);
    }
}

module.exports = yMenuButton;