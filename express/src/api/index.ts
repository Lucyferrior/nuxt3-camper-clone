import express from 'express';

import products from './products'
import header from './header'
import Photos from './Photos'
import basket from './basket'

const router = express.Router();


router.use('/products', products)
router.use('/header', header)
router.use('/photos',Photos)
router.use('/basket',basket)

export default router