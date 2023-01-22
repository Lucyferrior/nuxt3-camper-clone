import express from 'express';

import products from './products'
import header from './header'


const router = express.Router();


router.use('/products', products)
router.use('/header', header)

export default router