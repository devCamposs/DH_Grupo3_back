const db = require('../database/models');
const Usuario = db.Usuario;

const usuarioController = {
    list: (req, res) => {
        Usuario.findAll()
            .then((produtos) => {
                res.status(200).json(produtos)
            })
            .catch(err => {
                res.status(500).json(err); // 500 = Internal Error
            })
    },

    // POR ID

    findById: (req, res) => {
      Usuario.findByPk(req.params.id)
        .then(produto => {
            if (!produto){
                res.status(404).json(produto) // 404 = Not Found
            }else{
                res.status(200).json(produto)
            }

        })
        .catch(err => {
            res.status(404).json(err)
        })
    },

    //CRIAR

    create: async (req, res) => {
        const produto = req.body
        console.log(produto);
        try {
          await Usuario.create(produto)
          res.status(201).json({ msg: 'Usua!' })
        } catch (err) {
          res.status(400).json(err) // 400 = Bad Request
        }
    },

    delete: async (req, res) => {
      const id = req.params.id
      try {
        await Usuario.destroy({ where: { id } })
        res.status(200).json({ msg: 'Produto excluído com sucesso!' })
      } catch (err) {
        res.status(400).json({ error: [...err] })
      }
    }
}

module.exports = usuarioController;
