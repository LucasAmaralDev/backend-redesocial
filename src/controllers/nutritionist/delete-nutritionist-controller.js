const { NutritionistModel } = require("../../models/nutritionist-model");

/**
 * Deletar nutricionista e retorna uma mensagem
 */
class DeleteNutritionistController {
    async delete(request, response) {
        try {
            const { userId } = request;
            const { nutritionistId } = request.body;

            // Verificar parâmetros
            if (!nutritionistId) {
                return response.status(400).json({
                    error: 'Parâmetro inválido!'
                });
            }

            // Verifica se nutricionista existe
            const nutritionistExists = await NutritionistModel.findOne({
                where: {
                    id: nutritionistId,
                    userId,
                }
            });

            if (!nutritionistExists) {
                return response.status(400).json({
                    error: 'Nutricionista não encontrada!'
                });
            }

            // Deletar a nutricionista
            await NutritionistModel.destroy({ where: { id: nutritionistId, userId } });

            return response.status(200).json({
                message: 'Nutricionista removida com sucesso'
            });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new DeleteNutritionistController();
