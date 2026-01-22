import foodModel from "../models/foodModel.js";
import fs from "fs";



const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    });

    try {
        await food.save();
        res.json({success:true, message: "Food added successfully" });
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Internal server error" });
    }

};

const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.json({success:true, message: "Foods fetched successfully", data: food });
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Internal server error" });
    }
};

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.log(err);
            }
        })

        await foodModel.findByIdAndDelete(req.body.id);

        res.json({success:true, message: "Food deleted successfully" });
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Internal server error" });
    }
};


export { addFood, listFood, removeFood };

