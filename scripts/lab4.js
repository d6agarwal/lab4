/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if(typeof num1 != 'number' || typeof num2 != 'number'){ // added check for number types 
        return false;
    }


    if (add) {
        let result = 0; // changed from const to let 

        result = num1 + num2;

        return result;
    }
    else {
        return false; // change !add to false
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    if(prices.lenth == 0 || typeof discount != 'number'){ // added check for discount type 
        return false;
    } // added check for prices length 

    const discounted = []
    const length = prices.length;
    //let discountedPrice = 0       // commented out this line
    for(let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount); // added const
        discounted.push(discountedPrice);
    }

    if(discounted.length == 0){
        return false; // added check if discounted is emtpy
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};