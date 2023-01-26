var  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getBasket() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("SELECT * from Basket");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  addBasket(basket) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('Basket_ID', sql.Int, basket.Basket_ID)
      .input('Product_ID', sql.Char, basket.Product_ID)
      .input('size', sql.Int, basket.Size)
      .execute('InsertBasket');
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

  module.exports = {
    getBasket:  getBasket,
    addBasket:  addBasket
  }