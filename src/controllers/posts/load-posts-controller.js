const { PostsModel } = require('../../models/posts-model')

/**
 * Entra com o usuário e retorna um token de acesso
 */
class LoadPostController {
    async load(request, response) {
        try {
            const { id } = request;

            // cria um nova nova personalInfo
            const loadPosts = await PostsModel.findAll({
                where: {
                    userId: id
                },
                order: [['id', 'DESC']],
                limit: 10
            })

            if (!loadPosts) {
                return response.status(400).json({
                    error: 'Erro ao carregar Postagems nova postagem!'
                });
            }

            return response.status(201).json(loadPosts)

            

        } catch (error) {
            return response.status(500).json({
                error: `Erro interno: ${error}`
            });
        }
    }
}

module.exports = new LoadPostController();
