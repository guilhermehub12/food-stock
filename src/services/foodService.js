const foodModel = require('../models/foodModel');

const createFood = async (foodData) => {
    const user = new foodModel(foodData);
    await user.save();
    return user;
};

const getFoodByID = async (id) => {
    try {
        return await foodModel.findById(id);
    } catch (error) {
        throw error;
    }
};

const getAllFoods = async () => {
    try {
        return await foodModel.find();
    } catch (error) {
        throw error;
    }
}

const updateFoodByID = async (id, updatedData) => {
    try {
        if (!id) {
            throw new Error("Forneça todos os dados necessários!")
        }

        const existFood = await foodModel.findById(id);
        if (!existFood) {
            throw new Error("Alimento não encontrado!");
        }

        const updatedFood = await foodModel.findByIdAndUpdate(id, updatedData, { new: true })
        return updatedFood;
    } catch (error) {
        throw error;
    }
}

const deleteFoodByID = async (id) => {
    try {
        if (!id) {
            throw new Error("Forneça todos os dados necessários!")
        }

        const existFood = await foodModel.findById(id);
        if (!existFood) {
            throw new Error("Alimento não encontrado!");
        }

        const deletedFood = await foodModel.findByIdAndDelete(id);
        return deletedFood;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createFood,
    getFoodByID,
    getAllFoods,
    updateFoodByID,
    deleteFoodByID
};
