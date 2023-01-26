import express, { Request, Response } from "express";
import bodyParser, { json } from "body-parser";
import basketService from "../service/basket.service";
import Basket from "../model/basket";
import { type } from "os";
const router = express.Router();
const sql = require("mssql");

router.get<{}, any>("/", async (req, res) => {
  res.send(await basketService.getAllBasket());
});
router.get<{}, any>("/:id", async (req: Request, res: Response) => {
  var value: number = parseInt(req.params.id);
  res.send(await basketService.getBasket(value))
  return
});

router.post<{}, any>("/", async (req, res) => {
  var body = req.body;
  res.send(await basketService.insertBasket(body.product_id, body.size));
});
router.put<{}, any>("/", async (req, res) => {
  var body = req.body;
  res.send(
    await basketService.updateBasket(body.basket_id, body.product_id, body.size)
  );
  return
});
router.delete<{}, any>("/:id", async (req: Request, res: Response) => {
  var value: number = parseInt(req.params.id);
  res.send(await basketService.deleteBasket(value))
  return
});
export default router;
