import express from 'express';

const router = express.Router();

type ProductResponse = string[];

router.get<{}, ProductResponse>('/',(req,res) =>{
    res.json(['sefa','köse']);
});

export default router;