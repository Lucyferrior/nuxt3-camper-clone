import express from "express";

import basket from "./controller/basket";
import header from "./controller/header";
import Photos from "./controller/Photos";

const router = express.Router();

router.use("/basket", basket);
router.use("/header", header);
router.use("/photos", Photos);
export default router;
