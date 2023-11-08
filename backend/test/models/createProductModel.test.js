//import the User model 
const Product = require('../../models/productModel'); 
const assert = require('assert');
const connectDb = require("../../config/dbConnection");

connectDb("mongodb+srv://joela:admin@grawerowy.n9robcc.mongodb.net/grawerowypl-backend?retryWrites=true&w=majority");

describe('Creating documents in MongoDB', () => { 
	it('Creates a new product', () => { 

        const name = 'TestName';
        const src = 'test/test';
        const description = 'A cool test';
        const price = 9.99;

        return Product.create({ 
                name: name, 
                src: src, 
                description: description, 
                price: price 
            }).then(el => {
                    assert(el != null);
                    assert(el.name == name);
                    assert(el.src == src);
                    assert(el.description == description);
                    assert(el.price == price);
                    console.log(el);
            }).catch(err => {
                console.log(err);
            });
	}); 
    it('Get a product', () => { 

        const name = 'TestName';
        const src = 'test/test';
        const description = 'A cool test';
        const price = 9.99;

        return Product.findOne({ 
                name: name, 
                src: src, 
                description: description, 
                price: price 
            }).then(el => {
                    assert(el != null);
                    console.log(el)
            }).catch(err => {
                console.log(err);
            });
	}); 
    it('Update a product', () => { 

        const name = 'TestName';
        const src = 'test/test';
        const description = 'A cool test';
        const price = 9.99;
        const updateDescription = 'New cool test';
        const updatePrice = 10.00;

        return Product.findOneAndUpdate(
            { 
                name: name, 
                src: src, 
                description: description, 
                price: price,
                update: 
                {
                    description: updateDescription, 
                    price: updatePrice
                }
            })
            .then(() => Product.findOne(
                { 
                    name: name, 
                    src: src, 
                    description: updateDescription, 
                    price: updatePrice 
                }
            ))
            .then(el => {
                //assert(el !== null);
                assert(el.name == name);
                assert(el.src == src);
                assert(el.description == updateDescription);
                assert(el.price == updatePrice);
                console.log(el);
            }).catch(err => {
                console.log(err);
            });
        
	}); 
    it('Delete a product', () => {

        const name = 'TestName';
        const src = 'test/test';
        const updateDescription = 'New cool test';
        const updatePrice = 10.00;

        return Product.findOneAndDelete({ 
            name: name, 
            src: src, 
            description: updateDescription, 
            price: updatePrice 
        }).then(() => Product.findOne({ 
            name: name, 
            src: src, 
            description: updateDescription, 
            price: updatePrice 
        })).then(el => {
                assert(el === null);
        }).catch(err => {
            console.log(err);
        });
    })
});
