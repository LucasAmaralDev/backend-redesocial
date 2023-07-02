
const {PersonalInfoModel} = require('../../models/personalinfo-model');
const {UserModel} = require('../../models/user-model');

/**
 * Entra com o usuário e retorna um token de acesso
 */
class FindPersonalInfoController {
    async find(request, response) {
        try {
            const { username, id } = request;

            const busca = await PersonalInfoModel.findAll({
                where: {
                    userId: id
                }
            })

            if (!busca) {
                return response.status(400).json({
                    error: 'Usuário não encontrado!'
                });
            }

            return response.status(200).json({
                busca: busca
            })

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new FindPersonalInfoController();
