
const {PersonalInfoModel} = require('../../models/personalinfo-model');
const {UserModel} = require('../../models/user-model');

/**
 * Entra com o usuário e retorna um token de acesso
 */
class AddPersonalInfoController {
    async post(request, response) {
        try {

            const {userId} = request;

            const { title, description } = request.body;
            const { username, id } = request;

            // Validar parâmetros
            if (!title || !description) {
                return response.status(400).json({
                    error: 'Parametros Ausentes!'
                });
            }

            // cria um nova nova personalInfo
            const personalInfo = await PersonalInfoModel.create({
                title,
                description,
                username,
                userId: id
            });

            if (!personalInfo) {
                return response.status(400).json({
                    error: 'Erro ao cadastrar personalInfo!'
                });
            }

            return response.status(201).json({personalInfo})

            

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new AddPersonalInfoController();
