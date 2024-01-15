//import the User model 
const Product = require('../../models/productModel'); 
const assert = require('assert');
const connectDb = require("../../config/dbConnection");

connectDb("mongodb+srv://joela:admin@grawerowy.n9robcc.mongodb.net/grawerowypl-backend?retryWrites=true&w=majority");

describe('Creating documents in MongoDB', () => { 

    const name = 'TestName';
    const category = 'pen';
    const src = 'test/test';
    const description = 'A cool test';
    const price = 9.99;
    const rating = 4;
    const updateDescription = 'New cool test';
    const updatePrice = 10.01;

	it('Create a new product', () => { 
        return Product.create({ 
                name: name,
                category: category, 
                src: src, 
                description: description, 
                price: price,
                rating: rating
            }).then(el => {
                    console.log(el);
                    assert(el != null);
                    assert(el.name == name);
                    assert(e.category == category);
                    assert(el.src == src);
                    assert(el.description == description);
                    assert(el.price == price);
                    assert(el.rating == rating);
                    console.log(el);
            }).catch(err => {
                console.log(err);
            });
	}); 
    it('Get a product', () => { 
        return Product.findOne({ 
                name: name, 
                category: category,
                src: src, 
                description: description, 
                price: price,
                rating: rating
            }).then(el => {
                    assert(el != null);
                    console.log(el)
            }).catch(err => {
                console.log(err);
            });
	});
    it('Update a product', () => { 
        return Product.findOneAndUpdate(
            { 
                name: name, 
                src: src, 
                category: category,
                description: description, 
                price: price,
                rating: rating
            }, 
            {
                description: updateDescription, 
                price: updatePrice
            },
            {
                new: true
            })
            .then(el => { Product.findOne(
                { 
                    name: name, 
                    category: category,
                    src: src, 
                    description: updateDescription, 
                    price: updatePrice,
                    rating: rating
                })
                console.log(el);
                assert(el !== null);
            }).catch(err => {
                console.log(err);
            });
        
	}); 
    it('Delete a product', () => {
        return Product.findOneAndDelete({ 
            name: name,
            category: category, 
            src: src, 
            description: updateDescription, 
            price: updatePrice, 
            rating: rating
        }).then(el => { Product.findOne(
            { 
                name: name, 
                src: src, 
                category: category,
                description: updateDescription, 
                price: updatePrice,
                rating: rating 
            })
            console.log(el);
        }).catch(err => {
            console.log(err);
        });
    })
});
