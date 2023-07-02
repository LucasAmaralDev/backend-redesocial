const { PostsModel } = require('../../models/posts-model')

/**
 * Entra com o usuário e retorna um token de acesso
 */
class createPostController {
    async post(request, response) {
        try {
            const { description, date } = request.body;
            const { username, id } = request;

            // Validar parâmetros
            if (!date || !description) {
                return response.status(400).json({
                    error: 'Parametros Ausentes!'
                });
            }

            // cria um nova nova personalInfo
            const newPost = await PostsModel.create({
                description,
                date,
                userId: id
            })

            if (!newPost) {
                return response.status(400).json({
                    error: 'Erro ao criar nova postagem!'
                });
            }

            return response.status(201).json({newPost})

            

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new createPostController();
