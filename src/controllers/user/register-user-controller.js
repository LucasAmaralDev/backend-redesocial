const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserModel } = require('../../models/user-model');

/**
 * Criar usuário e retorna um token de acesso
 */
class RegisterUserController {
    async signup(request, response) {
        try {
            const { username, password, imgprofile } = request.body;

            // Validar parâmetros
            if (!username || !password) {
                return response.status(400).json({
                    error: 'Username e senha são obrigatórios!'
                });
            }

            // Criptografia senha
            const passwordHashed = await bcrypt.hash(
                password,
                Number(process.env.SALT)
            );

            // Cria usuário
            const user = await UserModel.create({
                username,
                password: passwordHashed,
                imgprofile
            });

            if (!user) {
                return response.status(400).json({
                    error: 'Houve um erro ao criar usuário'
                });
            }

            // Gera e retorna o access token
            const accessToken = jwt.sign(
                { id: user.id },
                process.env.TOKEN_SECRET,
                { expiresIn: '100y' }
            );

            return response.status(201).json({ accessToken });
        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new RegisterUserController();
