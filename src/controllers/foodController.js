const foodService = require('../services/foodService');

// Visualizar
const getAllFood = async (req, res) => {
    try {
        const allFoods = await foodService.getAllFoods();
        res.json(allFoods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Criar
const createFood = async (req, res) => {
    try {
        const createdFood = await foodService.createFood(req.body);
        res.status(201).json(createdFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Visualizar específico
const getFood = async (req, res) => {
    try {
        const food = await foodService.getFoodByID(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Atualizar
const updateFood = async (req, res) => {
    try {
        const updatedFood = await foodService.updateFoodByID(req.params.id, req.body);
        if (!updatedFood) {
            return res.status(404).json({ message: 'Food not updated' });
        }
        res.json(updatedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteFood = async (req, res) => {
    try {
        const deletedFood = await foodService.deleteFoodByID(req.params.id)
        if (!deletedFood) {
            return res.status(404).json({ message: 'Food not deleted' });
        }
        res.json(deletedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllFood,
    createFood,
    getFood,
    updateFood,
    deleteFood
};

