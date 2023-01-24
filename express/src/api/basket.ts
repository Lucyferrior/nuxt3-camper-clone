import express from 'express';

const basketData = require ('../store/basket.json')
const router = express.Router();
const sql = require('mssql')

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=78.189.55.194;Database=CAMPER;User Id=odev;Password=odevOdev123;Encrypt=true')
        const result = await sql.query`select * from basket`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}

//type ProductResponse = string[];


router.get<{}, any>('/',(req,res) =>{
    res.json([basketData]);
});

export default router;