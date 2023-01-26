import Basket from "../model/basket";
import sql from "mssql";
import { response } from "express";

async function insertBasket(product_id: String, size: number) {
  //insert basket
  return await sql.query(`insert into basket (Product_ID, Size) values ('${product_id}', ${size})`).then((response) => {
    return response.rowsAffected;
  });
}

async function updateBasket(basket_id: number, product_id: String, size: number) {
  //update basket
  return await sql.query(`update basket set product_id = '${product_id}', size = '${size}' where basket_id = '${basket_id}'`).then((response) => {
    return response.recordsets;
  });
}
async function deleteBasket(id: Number) {
  //delete basket
  return await sql.query(`delete from basket where basket_id = '${id}'`).then((response)=>{
    return response.rowsAffected
  })
}
async function getAllBasket() {
  return await sql.query("select * from basket").then((response) => {
    return response.recordsets;
  });
  //select * from basket
}
async function getBasket(id: Number) {
  return await sql.query(`select * from basket where basket_id = ${id}`).then((response) => {
    return response.recordset;
  });
  //select * from basket where basket_id = ${id}
}
export default {
  insertBasket,
  updateBasket,
  getAllBasket,
  deleteBasket,
  getBasket,
};
