var  Db = require('./dboperations');
var  Basket = require('./Basket');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
  });

  router.route('/Basket').get((request, response) => {
    Db.getBasket().then((data) => {
      response.json(data[0]);
    })
  })

  router.route('/Basket').post((request, response) => {
    let  basket = { ...request.body }
    Db.addBasket(basket).then(data  => {
      response.status(201).json(data);
    })
  })
  
var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Basket API is runnning at ' + port);


