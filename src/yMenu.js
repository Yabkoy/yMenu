const yMenu = class yMenu
{
	#currentPosition = new Number(0);

	constructor(elements){
    	this.elements = elements;
	}

	validateGivedArgs(){
		return (this.elements instanceof Array);
	}

	scrollUp()
	{
		this.#currentPosition--;
		this.#scrollValidation();
	}

	scrollDown()
	{
		this.#currentPosition++;
		this.#scrollValidation();
	}

	#scrollValidation()
	{
		if(this.#currentPosition == this.elements.length)
			this.#currentPosition = 0;
		else if(this.#currentPosition == -1)
			this.#currentPosition = this.elements.length - 1;
	}
    
    getCurrentElement(elementsToGet = 1)
    {
    	var result = new Array();
        for(var i = 0; i<elementsToGet; i++)
        {
        	var elementToPush = this.elements[this.#currentPosition+i];
            if(elementToPush == undefined)
                break;
			
            result.push(elementToPush);
        }
        	
    	return result;
    }
};

module.exports = yMenu;
