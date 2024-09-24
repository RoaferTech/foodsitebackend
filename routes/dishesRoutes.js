import express from "express";
import { createDishes, deleteDish, getAllDishes, getSingleDish, updateDish } from "../controllers/dishesController.js";
import upload from "../config/uploadImage.js";

const router  = express.Router();


router.post("/create",upload.single('image'),createDishes);
router.get("/",getAllDishes);
router.get("/:id",getSingleDish);
router.delete("/:id",deleteDish);
router.put("/:id",upload.single('image'),updateDish);
export default router;