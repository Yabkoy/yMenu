const yMenu = class yMenu
{
	_currentPosition = new Number(0);

	constructor(elements){
    	this.elements = elements;
	}

	validateGivedArgs(){
		return (this.elements instanceof Array);
	}

	scrollUp()
	{
		this._currentPosition--;
		this._scrollValidation();
	}

	scrollDown()
	{
		this._currentPosition++;
		this._scrollValidation();
	}

	_scrollValidation()
	{
		if(this._currentPosition == this.elements.length)
			this._currentPosition = 0;
		else if(this._currentPosition == -1)
			this._currentPosition = this.elements.length - 1;
	}
    
    getCurrentElement(elementsToGet = 1)
    {
    	var result = new Array();
        for(var i = 0; i<elementsToGet; i++)
        {
        	var elementToPush = this.elements[this._currentPosition+i];
            if(elementToPush == undefined)
                break;
			
            result.push(elementToPush);
        }
        	
    	return result;
    }

	getCurrentPosition()
	{
		var returnValue = new Number(this._currentPosition);
		return returnValue;
	}
};

module.exports = yMenu;
