"use strict"

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../server');
const mongojs = require('mongojs');
const db = mongojs('ecommerce-test');
const Products = db.collection('products');

chai.use(chaiHttp);

var testProduct = {
  name: 'A block of stinky cheese',
  price: '$.99',
  description: 'YES'
}

describe('ProductsCtrl', () => {

  before(function(done){
    Products.drop(function(){
      done();
    });
  })

  afterEach(function(done){
    Products.drop(function(){
      done();
    });
  })

  it('should note that true is equal to true', function(){
    expect(true).to.equal(true);
    expect(true).not.to.equal(false);
    expect(2+4).to.equal(6);
  })

  it('should make a new product and save', function(done){
    chai.request(server)
    .post('/products')
    .send(testProduct)
    .end(function(e, res){

      expect(res).to.have.status(200);

      expect(res.body).to.be.ok;

      expect(res.body.name).to.equal(testProduct.name);
      expect(res.body._id).to.be.ok;

      done();
    })
  })
});
