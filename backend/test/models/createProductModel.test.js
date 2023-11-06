//import the User model 
const Product = require('../../models/productModel'); 
const assert = require('assert');

describe('Creating documents in MongoDB', () => { 
	it('Creates a New Product', async () => { 
        const name = 'Pen';
        return new Promise( async function(resolve){
            let result = await Product.create({ 
                name: name, 
                src: 'test/test', 
                description: 'A cool pen', 
                price: 9.99 })
                //.then(result => {
                    assert(result != null);
                    assert(result.name == name);
                    console.log(result);
                    console.log("Napis");
                //}); 
                resolve();
        })
	}); 
});
