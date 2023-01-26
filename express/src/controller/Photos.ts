import express from 'express';

const PhotosData = require ('../store/Photos.json')
const router = express.Router();

//type ProductResponse = string[];


router.get<{}, any>('/',(req,res) =>{
    res.json([PhotosData]);
});

export default router;