import Dishes from "../models/dishModel.js";

export const createDishes = async (req,res)=>{
    const {title,category,price,description} = req.body;
    try {
        const dish = await Dishes.create({title, category, price,description,image:req.file ? req.file.path :null});
        console.log(dish );
        res.status(201).json({message:"Dish Created Successfuuly",dish})
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const  getAllDishes = async(req,res) =>{
    try {
        const dishes = await Dishes.find();
        res.status(200).json({message:"All Dishes Fetched Successfully",dishes})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
export const getSingleDish = async(req,res) => {
    const {id} = req.params;
    try {
       const dish =await Dishes.findById(id);
       if (!dish) {
           res.status(404).json({message:"dish not found"})
       }
       res.status(200).json({message:"dish by id fetched successfully",dish})
    } catch (error) {
       res.status(500).json({message:error.message});
    }
   };
   
export const deleteDish = async(req,res) => {
 const {id} = req.params;
 try {
    const dish =await Dishes.findByIdAndDelete(id);
    if (!dish) {
        res.status(404).json({message:"dish not found"})
    }
    res.status(200).json({message:"dish deleted Successfully",dish})
 } catch (error) {
    res.status(500).json({message:error.message});
 }
};


export const updateDish = async(req,res) => {
    const {id} = req.params;
    const {title,category,price,description} = req.body; 
    try {
       const dish = await Dishes.findById(id);
       if (!dish) {
           res.status(404).json({message:"dish not found"})
       }
       dish.title = title || dish.title;
       dish.category= category || dish.category;
       dish.price= price || dish.price;
       dish.description = description || dish.description;
       if (req.file) {
        dish.image = req.file.path
       };
       await dish.save();
       res.status(200).json({message:"dish updated successfully successfully",dish})
    } catch (error) {
       res.status(500).json({message:error.message});
    }
   };
