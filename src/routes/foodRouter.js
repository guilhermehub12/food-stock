const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Listar todos os alimentos
router.get('/foods', foodController.getAllFood);
// Buscar um alimento específico
router.get('/foods/:id', foodController.getFood);
// Criar um novo alimento
router.post('/foods', foodController.createFood);
// Atualizar um alimento existente
router.put('/foods/:id', foodController.updateFood);
// Excluir um alimento
router.delete('/foods/:id', foodController.deleteFood);

module.exports = router;
