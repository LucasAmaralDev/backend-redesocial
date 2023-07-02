const { NutritionistModel } = require("../../models/nutritionist-model");
const { RecipeModel } = require("../../models/recipe-model");

class CreateRecipeController {
    async create(request, response) {
        try {
            const { nameRecipe, ingredientsQuantity, nutritionistId } = request.body;

            // Verificar parâmetros
            if (!nameRecipe || !ingredientsQuantity || !nutritionistId) {
                return response.status(400).json({
                    error: 'Parâmetros inválidos!'
                });
            }

            // Verificar se nutricionista existe
            const nutritionist = await NutritionistModel.findOne({
                where: { id: nutritionistId }
            });

            if (!nutritionist) {
                return response.status(400).json({
                    error: 'Nutricionista não existe.'
                });
            }

            // Criar nova receita
            const recipe = await RecipeModel.create({
                nameRecipe, ingredientsQuantity, nutritionistId
            });

            return response.status(201).json(recipe);
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new CreateRecipeController();
