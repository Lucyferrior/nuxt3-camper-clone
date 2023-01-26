import express from 'express';

const headerData = require ('../store/header.json')
const router = express.Router();

//type ProductResponse = string[];


router.get<{}, any>('/',(req,res) =>{
    res.json([headerData]);
});

export default router;