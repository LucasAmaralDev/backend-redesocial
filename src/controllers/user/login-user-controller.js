const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../../models/user-model');

/**
 * Entra com o usuário e retorna um token de acesso
 */
class LoginUserController {
    async sigin(request, response) {
        try {
            const { name, password } = request.body;

            // Validar parâmetros
            if (!name || !password) {
                return response.status(400).json({
                    error: 'Nome e senha são obrigatórios!'
                });
            }

            // Verifica se usuário existe
            const userExists = await UserModel.findOne({
                where: { name }
            });

            if (!userExists) {
                return response.status(400).json({
                    error: 'Usuario não existe!'
                });
            }

            // Verifica se a senha está correta
            const isPasswordValid = await bcrypt.compare(password, userExists.password);

            if (!isPasswordValid) {
                return response.status(400).json({
                    error: 'Senha incorreta!'
                });
            }

            // Gera e retorna o access token
            const accessToken = jwt.sign(
                { id: userExists.id },
                process.env.TOKEN_SECRET,
                { expiresIn: '30m' }
            );

            return response.status(200).json({ accessToken });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new LoginUserController();
